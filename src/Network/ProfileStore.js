/* eslint-disable camelcase */

import APIs from './api'

class EmployeesService {
  serviceBase() {
    return '/user'
  }

  // async fetchUserData(id, params) {
  //   try {
  //     let url = `${this.serviceBase()}/${id}?${qs.stringify(params)}`

  //     const data = await APIs.get(url, { isFinalUrl: true })
  //     return data
  //   } catch (err) {
  //   }
  //   return false
  // }

  async getUserProfile(params) {
    const url = `${this.serviceBase()}/profile`

    return await APIs.post(url, {})
  }

  async getNearbyBranches(params) {
    const url = `${this.serviceBase()}/branches/nearby`

    return await APIs.post(url, {
      "within": 4,
      "latitude": 32.8336224,
      "longitude": 35.6548414
    })
  }

  async getNearbyBranches(params) {
    const url = `${this.serviceBase()}/branches/nearby`

    return await APIs.post(url, {
      "within": 4,
      "latitude": 32.8336224,
      "longitude": 35.6548414
    })
  }

  async getEmployeeLimitedDayLogs(params) {
    const url = `${this.serviceBase()}/${params.id}/days/limited`

    return await APIs.get(url, {
      params: {
        limit: params.limit,
        offset: params.offset,
      }
    })
  }

  async getDayLogs(params) {
    const url = `${this.serviceBase()}/${params.id}/days`
    return await APIs.get(url, {
      params: {
        date_from: params.date,
        date_to: params.date
      }
    })
  }
}

export default new EmployeesService()
