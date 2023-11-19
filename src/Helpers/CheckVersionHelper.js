/* eslint-disable no-magic-numbers */
import { Platform, Linking, NativeModules } from 'react-native'
import VersionCheck from 'react-native-version-check'
import DeviceInfo from 'react-native-device-info'

import AlertStore from 'Stores/AlertStore'
import LanguageStore from 'Stores/LanguageStore'

const { OpenSettings } = NativeModules

const latestVersionJson = {
  latest_version: '4.0.5',
  latest_link: 'https://hazzi-apks.s3.eu-central-1.amazonaws.com/app-4.0.5.apk'
}

class CheckVersionHelper {
  async checkAppVersion(fromSettingsPage = false) {
    const isGoogleServicesSupported = Platform.OS === 'ios' ? true : await OpenSettings.isGooglePlayServicesAvailable()

    if (isGoogleServicesSupported) {
      let currentVersion = VersionCheck.getCurrentVersion()
      VersionCheck.getLatestVersion({
        provider: Platform.OS === 'ios' ? 'appStore' : 'playStore',
      }).then(latestVersion => {
        this.checkIfDifferent(currentVersion, latestVersion)
      })
    } else {
      const currentVersion = DeviceInfo.getVersion()
      this.checkIfDifferent(currentVersion, latestVersionJson.latest_version, fromSettingsPage, latestVersionJson)
    }
  }

  compareVersion(a, b) {
    let i = 0,
      cmp = null,
      len = null,
      // eslint-disable-next-line no-useless-escape
      re = /(\.0)+[^\.]*$/

    a = `${a}`.replace(re, '').split('.')
    b = `${b}`.replace(re, '').split('.')
    len = Math.max(a.length, b.length)

    for (i = 0; i < len; i++) {
      var current = a[i] === undefined ? 0 : a[i]
      var latest = b[i] === undefined ? 0 : b[i]
      if (latest > current) {
        return latest
      } else if (current > latest) {
        return 0
      }
    }
    return 0
  }

  checkIfDifferent(current, latest, fromSettingsPage = false, appData = null) {
    let result = this.compareVersion(current, latest) > 0
    const { updateApp, general } = LanguageStore.textLocale

    if (result) {
      AlertStore.setAndShow({
        icon: true,
        title: updateApp.oops,
        text: updateApp.update,
        desc: updateApp.appOutdated,
        cancelable: false,
        buttonText: updateApp.updateButton,
        onConfirm: () => this.goToAppStore(appData),
      })
    } else if (fromSettingsPage) {
      AlertStore.setAndShow({
        icon: true,
        title: updateApp.notUpdateAvailable,
        cancelable: false,
        buttonText: general.okay,
      })
    }
  }

  goToAppStore(appData = null) {
    if (appData === null) {
      if (Platform.OS === 'ios') {
        Linking.openURL(
          'https://apps.apple.com/us/app/pops-logger/id1346619196'
        )
      } else {
        Linking.openURL(
          'https://play.google.com/store/apps/details?id=com.sowlutions.pops.logger'
        )
      }
    } else {
      Linking.openURL(
        appData.latest_link
      )
    }
  }
}

export default new CheckVersionHelper()
