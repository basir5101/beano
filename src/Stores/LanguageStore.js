import { observable, action, computed, makeObservable } from 'mobx'
import { I18nManager } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { setLanguage } from '@sowlutions-tech/crowdmouth-react-native-library'
// import RNRestart from 'react-native-restart'

import english from 'Locales/english'
// import arabic from 'Locales/arabic'

import Constants from 'Constants/LocaleKeys'

const DEFAULT_LOCALE = Constants.getDefaultLocale()

class LanguageStore {
  @observable emptyStorage = null
  @observable locale = DEFAULT_LOCALE

  constructor() {
    makeObservable(this)
  }

  @action async setLocale(locale) {
    this.locale = locale
    setLanguage(locale)
    this.emptyStorage = false
    await this.persist()
    await I18nManager.forceRTL(locale === 'en')
    // RNRestart.Restart()
  }

  @action
  async persist() {
    try {
      await AsyncStorage.setItem(Constants.languageKey, this.locale)
    } catch (error) {
      this.locale = DEFAULT_LOCALE
    }
  }

  @action
  async loadFromStorage() {
    try {
      this.emptyStorage = await AsyncStorage.getItem(Constants.languageKey) || null
      if (this.emptyStorage === null) {
        this.locale = DEFAULT_LOCALE
        setLanguage(DEFAULT_LOCALE)
      } else {
        this.locale = this.emptyStorage
        setLanguage(this.emptyStorage)
        await I18nManager.forceRTL(this.locale === 'en')
      }
    } catch (error) {
      this.locale = null
    }
  }

  @computed
  get hasLanguage() {
    return Boolean(this.locale)
  }

  @computed get textLocale() {
    switch (this.locale) {
      // case 'ar':
      //   I18nManager.forceRTL(true)
      //   return arabic
      case 'en':
        I18nManager.forceRTL(false)
        return english
      default:
        return english
    }
  }
}

export default LanguageStore
