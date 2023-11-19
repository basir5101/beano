import { Platform } from 'react-native'
import { PERMISSIONS, requestMultiple,requestNotifications } from 'react-native-permissions'

class PermissionsHelper {
  async start() {
    await requestMultiple(
      Platform.select({
        android: [],
        ios: [
          PERMISSIONS.IOS.CAMERA,
          PERMISSIONS.IOS.MICROPHONE,
          PERMISSIONS.IOS.PHOTO_LIBRARY,
          PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL,
          PERMISSIONS.IOS.MEDIA_LIBRARY,
        ]
      }),
    )
    await requestNotifications(['alert', 'badge', 'sound'])

    return true
  }
}

export default new PermissionsHelper()
