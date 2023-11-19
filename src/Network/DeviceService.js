import APIs from './api'

class DeviceService {
  serviceBase() {
    return 'users/devices'
  }

  async registerDeviceWithToken(params) {
    const url = `${this.serviceBase()}`
    await APIs.post(url, params)
  }

  async unregisterDeviceWithToken(params) {
    try {
      const url = `${this.serviceBase()}`
      const resp = await APIs.delete(url, { params })
      return resp
    } catch (err) {
      return err
    }
  }
}

export default new DeviceService()
