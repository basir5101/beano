/* eslint-disable camelcase */

import APIs from './api'

class SessionService {
  async login(params) {
    try {
      const response = await APIs.post('/user/login', params)
      return response
    } catch (err) {

      return err
    }
  }

  async logout() {
    try {
      const response = await APIs.post('/user/logout', {})
      return response
    } catch (err) {
      return err
    }
  }

  async createAccount(params) {
    try {
      const response = await APIs.post('/user/register', params)
      return response
    } catch (err) {
      return null
    }
  }
  async verifyEmail (params){
    try{
      const url = '/user/verify'
      const res = await APIs.post(url,params)
      return  res
    }catch(e){
    }
  }
  async sendTokenNotification(params){
    try{  
      const res = await APIs.post('/push/subscribe',params)
      return res
    }catch(e){
  return e    }
  }

  // async changePassword(cPassword, nPassword) {
  //   try {
  //     const response = await APIs.post('/users/change_password', {
  //       current_password: cPassword,
  //       password: nPassword,
  //       signout_from_devices: false
  //     })
  //     return response
  //   } catch (err) {
  //     return err
  //   }
  // }

  async forgotPassword(email) {
    try {
      const response = await APIs.post('/user/reset', { email })
      return response && response.data
    } catch (err) {
      return false
    }
  }

  async resetPassword(params) {
    try {
      const response = await APIs.put('/user/reset', params)
      return response && response.data
    } catch (err) {
      return false
    }
  }

}

export default new SessionService()
