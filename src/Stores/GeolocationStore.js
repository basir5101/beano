import { observable, action } from 'mobx'
import { Alert, Linking, Platform, NativeModules, BackHandler } from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import { PERMISSIONS, request } from 'react-native-permissions'

// import AlertStore from './AlertStore'
// import SessionStore from './SessionStore'
// import LanguageStore from 'Stores/LanguageStore'

const { OpenSettings, MockLocationDetector } = NativeModules

class GeolocationStore {
  // @observable latitude = '';
  // @observable longitude = '';
  // @observable latLongLastUpdate = null;
  // @observable watchId = [];

  // @action async start(forBeacon, customConfig = null) {
  //   const customLogForceUseLocation = customConfig && customConfig.force_use_location
  //   // if (!forBeacon) {
  //   //   if (!SessionStore.employeeData === null || (!SessionStore.employeeData.force_use_location && !customLogForceUseLocation)) {
  //   //     return true
  //   //   }
  //   // }

  //   // const { general } = LanguageStore.textLocale

  //   return request(
  //     Platform.select({
  //       android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  //       ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  //     }),
  //   ).then(async (response) => {
  //     // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
  //     switch (response) {
  //       case 'granted':
  //         if (Platform.OS === 'android') {
  //           const isUsingMockLocation =  MockLocationDetector?.checkMockLocationProvider()

  //           if (isUsingMockLocation) {
  //             // AlertStore.setAndShow({
  //             //   icon: true,
  //             //   title: general.mockLocationTitle,
  //             //   cancelable: false,
  //             //   desc: general.mockLocationDesc,
  //             //   buttonText: general.iUnderstand,
  //             //   onConfirm: () => BackHandler.exitApp()
  //             // })
  //             return null
  //           }
  //         }
  //         this.getLocation()
  //         return true
  //       // default:
  //       //   if (
  //       //     SessionStore.employeeData && (SessionStore.employeeData.force_use_location && customLogForceUseLocation) || forBeacon
  //       //   ) {
  //       //     const TEXTS = LanguageStore.textLocale.general
  //       //     Alert.alert(
  //       //       TEXTS.error,
  //       //       TEXTS.geoLocationError,
  //       //       [
  //       //         {
  //       //           text: TEXTS.settings,
  //       //           onPress: () => {
  //       //             if (Platform.OS !== 'android') {
  //       //               Linking.openURL('app-settings:')
  //       //             } else {
  //       //               this.openSettings()
  //       //             }
  //       //           }
  //       //         },
  //       //         { text: TEXTS.okay }
  //       //       ],
  //       //       { cancelable: false }
  //       //     )
  //       //     return false
  //       //   }
  //       // return true
  //     }
  //   })
  // }

  // openSettings() {
  //   OpenSettings.openNetworkSettings(data => {
  //   })
  // }

  // updateFromPosition(position) {
  //   if (position) {
  //     this.longitude = position.coords.longitude
  //     this.latitude = position.coords.latitude
  //     this.latlongLastUpdate = new Date()

  //     // Alert.alert("Alert", position.coords.latitude, position.coords.longitude)
  //   }
  // }

  // getLocation() {
  //   Geolocation.getCurrentPosition(
  //     position => this.updateFromPosition(position),
  //     error => { return error },
  //     {
  //       enableHighAccuracy: true, timeout: 15000, maximumAge: 10000,
  //       forceRequestLocation: true,
  //       accuracy: { android: 'balanced', ios: 'bestForNavigation' }
  //     }
  //   )

  //  const res = Geolocation.watchPosition(
  //     position => this.updateFromPosition(position),
  //     error => { },
  //     {
  //       enableHighAccuracy: true, timeout: 5000, maximumAge: 2000,
  //       forceRequestLocation: true, interval: 5000, fastestInterval: 2000,
  //       accuracy: { android: 'high', ios: 'bestForNavigation' },
  //       showsBackgroundLocationIndicator:false
  //     }
  //   )
  //   this.watchId.push(res)
  // }
}

export default GeolocationStore
