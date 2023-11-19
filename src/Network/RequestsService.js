/* eslint-disable camelcase */

import APIs from './api'

class RequestsService {
  serviceBase() {
    return 'employees/requests'
  }

  async getRequests(params) {
    let url = `${this.serviceBase()}`

    const data = await APIs.get(url, {
      params: {
        ...params
      }
    })
    return data
  }

  async createRequest(data) {
    let url = `${this.serviceBase()}`

    let params = {
      request_type: data.type,
      description: data.desc,
      request_date: data.date
    }

    const resp = await APIs.post(url, params)
    return resp
  }

  async createRequests(data) {
    let url = `${this.serviceBase()}`

    let params = {
      request_type: data.type,
      description: data.desc,
      request_dates: data.dates
    }

    const resp = await APIs.post(url, params)
    return resp
  }

  async deleteRequest(id) {
    let url = `${this.serviceBase()}/${id}`

    const resp = await APIs.delete(url, { id })
    return resp
  }
}

export default new RequestsService()
