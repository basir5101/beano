import DeviceService from 'Network/DeviceService'
import DeviceInfo, { getUniqueId } from 'react-native-device-info'

class DeviceStore {
  constructor(authStore) {
    this.authStore = authStore
  }

  async registerDevice(firebaseToken) {
    await new DeviceService(this.authStore).registerDeviceWithToken({
      imei: getUniqueId(),
      brand: DeviceInfo.getBrand(),
      model: DeviceInfo.getModel(),
      name: DeviceInfo.getSystemName(),
      os_version: DeviceInfo.getSystemVersion(),
      device_token: firebaseToken,
      app_version: DeviceInfo.getVersion(),
      app_name: 'fan'
    })
  }
  unregisterDevice() {
    return new DeviceService(this.authStore).unregisterDeviceWithToken({
      imei: getUniqueId(),
    })
  }
}

export default DeviceStore
