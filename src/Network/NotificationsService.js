import APIs from './api'

class NotificationsService {
  serviceBase() {
    return 'notifications'
  }

  getNotifications(params) {
    const url = `${this.serviceBase()}`

    return APIs.get(url, {
      params: {
        limit: params.limit,
        offset: params.offset
      }
    })
  }
}

export default new NotificationsService()
