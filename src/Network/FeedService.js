/* eslint-disable camelcase */

import APIs from './api'

class FeedService {
  serviceBase() {
    return '/admin/reels'
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


  async viewFeed(params) {
    const url = `${this.serviceBase()}/watch`

    return await APIs.get(url, {})
  }
async getReels(){
  const url = '/user/reels/find'
  const res = await APIs.post(url)
  return res
}
async addVideoToFeed(params){
  const url = `/vendors/reels/upload?branch=${params?.branch}`
  return await APIs.postLog({url,uri:params?.uri})
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

export default new FeedService()
