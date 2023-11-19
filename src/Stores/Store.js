import {observable, action} from 'mobx'

export default class Store {
  @observable results = null
  @observable item = null


  constructor({ authStore } = {}) {
    this.authStore = authStore
  }

  service() {
    const err = { error: 'Store: service() method must be implemented' }
    throw err
  }

  @action reset(clearItems = true) {
    // this.items = null
    this.refreshing = true
    this.offset = 0
    this.fetchedBefore = {}

    if (clearItems) {
      this.items = null
    }
  }

  @action appendResults(results) {
    this.results = [...this.results || [], ...results]
  }

  @action async fetchList(params) {
    this.results = await this.getList(params)
  }

  async getList(params) {
    const service = this.service && this.service()

    if (service) {
      const resp = await service.getList(params)
      const Presenter = this.presenter && this.presenter()

      let dataToReturn = Presenter ? resp.data.items.map(d => new Presenter(d).present('list')) : resp.data.items

      return { ...resp.data, items: dataToReturn }
    }

    return null
  }

  @action async fetchItem(id, params) {
    this.item = await this.getItem(id, params)
  }

  async getItem(id, params) {
    const service = this.service && this.service()

    if (this.service) {
      const resp = await service.getItem(id, params)
      const Presenter = this.presenter && this.presenter()

      let dataToReturn = Presenter ? new Presenter(resp.data).present('item') : resp.data

      return { ...resp.data, items: dataToReturn }
    }

    return null
  }

  async postItems(id, params) {
    const service = this.service && this.service()

    if(service) {
      const resp = await service.postItems(id, params)

      return { ...resp.data }
    }

    return null
  }
}
