/* eslint-disable camelcase */

import APIs from './api'

class EmployeesService {
  serviceBase() {
    return '/vendors/branches'
  }
  vendorsBase() {
    return '/vendors/profiles'
  }

  async getNearbyStores(params) {
    const url = `${this.serviceBase()}/nearby`


    return await APIs.post(url, params)
  }

  async getStore(params) {
    const url = `${this.serviceBase()}/products`

    return await APIs.post(url, params)
  }

  async requestProduct(params) {
    const url = `/orders/customer/request`

    return await APIs.post(url, params)
  }
  async disableStore(params){
    const url = '/vendors/stores/disable'

    return await APIs.post(url,params)
  }
  async disableBranch(params){
    const url = '/vendors/stores/branches/disable'

    return await APIs.post(url,params)
  }
  async disableProduct(params){
    const url = '/vendors/stores/branches/products/save'

    return await APIs.post(url,params)
  }
  async addProducts(params) {
    const url = `${this.serviceBase()}/products`

    return await APIs.post(url, )
  }

  async getVendorsList() {
    try {
      const url = `${this.vendorsBase()}/list`
      return await APIs.post(url, {})
    } catch (err) {
  return err    }
  }

  async getCustomerOrders() {
    const url ='/orders/customer/confirmed'

    return await APIs.post(url, {})
  }

  async getCategoriesList() {
    const url = `/categories/list`

    return await APIs.post(url, {})
  }

  async getBannersView() {
    const url = `/user/banners/find`

    return await APIs.post(url, {})
  }

  async getPreviousOrders() {
    const url = `/orders/customer/confirmed`

    return await APIs.post(url, {})
  }


  async getVendorStores(params) {
    const url = `/vendors/stores/list`

    const res = await APIs.post(url, params)
    return res
  }
  async getBranchesList(params) {
    const url = `/vendors/branches/list`
    const res = await APIs.post(url, params)
    return res
  }

  async getVendorOrders(params) {
    const url = `/orders/vendors/find`

    return await APIs.post(url, {})
  }
  async getCustomerPendingOrders() {
    const url = `/orders/customer/pending`

    return await APIs.post(url)
  }
  async addCustomerPendingOrders(params) {
    const url = `/orders/customer/pending`
 
     return await APIs.post(url, params)
   }
  async confirmVendorOrders(params){
    const url = '/orders/vendors/confirm'
    return await APIs.post(url,params)
  }
  async getStreak(){
    const url = '/customer/streak'
    return await APIs.post(url)
  }
  async getSlides(){
    const url = '/user/slides/find'
    return await APIs.post(url)
  }

  async createNewStore(params) {
    const url = `/vendors/stores/save`

    const res = await APIs.post(url,  params )
    return res
  }
  async feedbackApply(params){
    const url = '/customer/feedback/apply'
    return  await APIs.post(url,params)
  }
  async createNewProduct(params) {
    const url = `/vendors/stores/branches/products/save`

    const res = await APIs.post(url,  params )
    return res
  }
  async createNewBranch(params) {
    const url = `/vendors/stores/branches/save`
    const res = await APIs.post(url,  params )
    return res
  }
  async getReelsData(params){
    const url = '/user/reels/likes'
    const res = await APIs.post(url,params)
    return res
  }
  async likeReel(params){
    const url ='/user/reels/like'
    const res = await APIs.post(url,params)
    return res
  }

}

export default new EmployeesService()
