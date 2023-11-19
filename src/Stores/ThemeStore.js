import { observable, action, computed, makeObservable } from 'mobx'
import AsyncStorage from '@react-native-community/async-storage'
import { setTheme } from '@sowlutions-tech/crowdmouth-react-native-library'

import darkColors from 'Colors/DarkColors'
import lightColors from 'Colors/LightColors'

import Constants from 'Constants/ThemeKeys'

const DEFAULT_THEME = Constants.getDefaultTheme()

class ThemeStore {
  @observable theme = null

  constructor() {
    makeObservable(this)
  }

  @action async setTheme(theme) {
    this.theme = theme
    setTheme(theme)
    await this.persist()
  }

  @action
  async persist() {
    try {
      await AsyncStorage.setItem(Constants.themeKey, this.theme)
    } catch (error) {
      this.theme = DEFAULT_THEME
    }
  }

  @action
  async loadFromStorage() {
    try {
      const result = await AsyncStorage.getItem(Constants.themeKey) || null

      if (result !== null) {
        this.theme = result
        setTheme(result)
      }
    } catch (error) {
      this.theme = DEFAULT_THEME
    }
  }

  @computed get isDark() {
    return this.theme === Constants.dark
  }

  @computed get colors() {
    switch (this.theme) {
      case Constants.light:
        return lightColors
      case Constants.dark:
        return darkColors
      default:
        return darkColors
    }
  }
}

export default ThemeStore
