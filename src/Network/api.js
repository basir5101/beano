/* eslint-disable camelcase */
/* eslint-disable no-empty */
/* eslint-disable no-magic-numbers */
/* eslint-disable camelcase */

import axios from 'axios'
import { Platform } from 'react-native'

import { toQueryString } from 'Helpers/route_helper'

// import AppStore from 'Stores/AppStore'
// import LogStore from 'Stores/LogStore'
// import SessionStore from 'Stores/SessionStore'
// import LanguageStore from 'Stores/LanguageStore'

import Keys from 'Constants/Keys'
import { authStore } from '../Stores/StoreFactory'

// const baseUrl = 'https://staging.api.pops.sowlutions.com/api/v1/';

let RNFS = require('react-native-fs')

const isArr = Array.isArray
const isObj = obj => {
  return obj && typeof obj === 'object' && !isArr(obj)
}

axios.defaults.baseURL = Keys.getBaseUrl()

const DEFAULT_TIMEOUT = 60000
axios.defaults.timeout = DEFAULT_TIMEOUT

class APIs {
  static headers() {
    let header = {
      'Content-Type': 'application/json',
      'Access-Control-Origin': '*',
      // 'Accept-Language': LanguageStore && LanguageStore.locale || Keys.getDefaultLocale,
      // 'Language': LanguageStore && LanguageStore.locale || Keys.getDefaultLocale,
      'Authorization': `Bearer ${authStore.token}`
    }
    // if (SessionStore.isAuth) {
    //   header.Authorization = SessionStore.token
    // }

    // let roleId = SessionStore.roleId
    // if (roleId) {
    //   header.UserRoleId = roleId
    // }

    return header
  }

  // https://stackoverflow.com/questions/16104078/appending-array-to-formdata-and-send-via-ajax
  static getFormData(formData, data = {}, previousKey = null) {
    Object.keys(data).forEach(key => {
      const value = data[key]

      if (isObj(value)) {
        return APIs.getFormData(formData, value, key)
      }

      if (previousKey) {
        key = `${previousKey}[${key}]`
      }

      if (isArr(value)) {
        return value.forEach(val => formData.append(`${key}[]`, val))
      }

      return formData.append(key, value)
    })

    return formData
  }

  static postWithFormData(url, data = {}, success, error, id) {
    const uuid = new Date().getTime()
    const options = {
      headers: APIs.headers(),
      onUploadProgress: (progressEvent) => {
        let percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total)
        // LogStore.progressCallBack(uuid, percentCompleted)
      }
    }

    // const urlSearchParams = new URLSearchParams()
    return axios
      .post(url, data, options)
      .then((resp) => {
        return resp
      })
      .catch(e => {
        if (e.response) {
          if (e.response.status === 500) {
            return success(id)
          }
        } else {
          return error()
        }
      })
  }

  static putWithFormData(url, data = {}, success, error, id) {
    const uuid = new Date().getTime()
    const options = {
      headers: APIs.headers(),
      onUploadProgress: (progressEvent) => {
        let percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total)
        // LogStore.progressCallBack(uuid, percentCompleted)
      }
    }

    // const urlSearchParams = new URLSearchParams()
    return axios
      .put(url, data, options)
      .then((resp) => {
        return success(resp)
      })
      .catch(e => {
        if (e.response) {
          if (e.response.status === 500) {
            return success(id)
          }
        } else {
          return error()
        }
      })
  }

  async postLog(
    { url,uri,id, type, date, device_name, logType, note, longitude, latitude, beacon_guid, custom_log_type },
    success,
    error
  ) {
    let hasFile = false, params = {}

    if (uri) {
      hasFile = true
      try {
        if (
          Platform.OS === 'android'
          && logType === 'video'
          && uri.indexOf('file') === -1
        ) {
          uri = uri
        }

        let exists = await RNFS.exists(uri)
        if (exists) {
          formdata.append('file', {
            uri: this.getPathfromURI(uri),
            name: this.getNamefromURI(uri),
            type: this.getType(uri)
          })
        }
      } catch (err) { }
    }
    let formdata = new FormData()
    params = {
      id,
      log_type: type,
      logged_at: date,
      device_name,
      note: note || '',
      longitude: longitude || '',
      latitude: latitude || '',
    }
    formdata.append('id', id)
    formdata.append('log_type', type)
    formdata.append('logged_at', date)
    formdata.append('device_name', device_name)
    formdata.append('note', note || '')
    formdata.append('longitude', longitude || '')
    formdata.append('latitude', latitude || '')
    if (beacon_guid) {
      formdata.append('beacon_guid', beacon_guid || '')
      params.beacon_guid = beacon_guid || ''
    }
    if (custom_log_type) {
      formdata.append('custom_log_type', custom_log_type || '')
      params.custom_log_type = custom_log_type || ''
    }

   
    try {
      return await APIs.postWithFormData(url, hasFile ? formdata : params, success, error, id)
    } catch (err) {
  return err    }
  }

  async editLog(log, onSuccess, onError) {
    let { id, logId, uri, logType } = log
    let url = `employees/${id}/logs/${logId}`

    let formdata = new FormData()

    formdata.append('id', id)

    if (uri) {
      try {
        if (
          Platform.OS === 'android'
          && logType === 'video'
          && uri.indexOf('file') === -1
        ) {
          uri = `file://${uri}`
        }

        let exists = await RNFS.exists(uri)
        if (exists) {
          formdata.append('file', {
            uri: this.getPathfromURI(uri),
            name: this.getNamefromURI(uri),
            type: this.getType(uri)
          })
        }
      } catch (err) { }
    }
    try {
      return await APIs.putWithFormData(url, formdata, onSuccess, onError, id)
    } catch (err) {
    }
  }

  /* add user with axios */
  getType(uri) {
    uri = uri.split('.')
    uri = uri[uri.length - 1].toLowerCase()
    if (
      uri === 'jpg'
      || uri === 'jpeg'
      || uri === 'png'
      || uri === 'gif'
      || uri === 'bmp'
    ) {
      return 'image/jpeg'
    }
    return 'video/mp4'
  }
  getPathfromURI(uri) {
    return uri
  }
  getNamefromURI(uri) {
    let arr = uri.split('/')
    return arr[arr.length - 1]
  }

  oldpostLog({ id, type, uri, date, auth_token }, success, error) {
    let url = `employees/${id}/logs`
    let formdata = new FormData()
    // eslint-disable-next-line no-undef
    let xhr = new XMLHttpRequest()
    formdata.append('id', id)
    formdata.append('log_type', type)
    formdata.append('logged_at', date)
    xhr.open('POST', url, true)
    xhr.timeout = 2 * 60 * 1000

    xhr.setRequestHeader('Access-Control-Origin', '*')
    xhr.setRequestHeader('Authorization', auth_token)
    xhr.addEventListener('load', success)
    xhr.addEventListener('error', event => {
      if (error) {
        error(event)
      }
    })

    if (uri) {
      formdata.append('file', {
        uri: this.getPathfromURI(uri),
        name: this.getNamefromURI(uri),
        type: this.getType(uri)
      })
    }
    xhr.send(formdata)
    return
  }

  // eslint-disable-next-line consistent-return
  async get(url, { params, headers, returnRaw, isFinalUrl = false, ...extra } = {}) {
    try {
      url = !isFinalUrl ? toQueryString(url, params) : url

      const resp = await axios.get(url, {
        ...extra,
        headers: {
          ...APIs.headers(),
          ...headers,
        },
        timeout: DEFAULT_TIMEOUT,
      })

      // AppStore.internetStatus = true
      return returnRaw ? resp : resp.data
    } catch (err) {
      if (err.toString().indexOf('401') >= 0) {
        // SessionStore.signOut()
      } else {
  return err        // AppStore.internetStatus = false
      }
    }
  }

  async getEmployees(params) {
    return await this.get('employees', { params })
  }

  getUserInfo() {
    return this.get('users')
  }

  async post(url, params, { headers,body } = {}) {
    const response = await axios.post(url,
      params, {
      headers: headers || APIs.headers(),
      body
    }
    )

    return response && response.data
  }

  async put(url, params, { headers } = {}) {
    const response = await axios.put(url,
      params, {
      headers: headers || APIs.headers(),
    }
    )

    return response && response.data
  }

  async delete(url, { params }) {
    const responce = await axios.delete(url, { headers: APIs.headers(), params: params })
    return responce
  }

  async login(params) {
    let url = 'users/signin'
    return await this.post(url, params)
  }

  async getCompanyInfo() {
    const url = 'company'
    return await this.get(url, {})
  }
}
export default new APIs()
