import { observable, action, makeObservable } from 'mobx'
import StoreService from 'Network/StoreService'

// const COLORS = ''//themeStore.colors
class LoadingModal {
  // @observable show = false
  // @observable spinnerSize = 'large'
  // @observable spinnerColor = null//this.COLORS.pink

  // constructor() {
  //   // makeObservable(this)
  // }

  // @action
  // async getVendorList() {
  //   const vendorList = await StoreService.getVendorsList()
  // }

  // @action
  // open({
  //   spinnerSize = null,
  //   spinnerColor = null,
  // }) {
  //   this.show = true
  //   spinnerSize && (this.spinnerSize = spinnerSize)
  //   spinnerColor && (this.spinnerColor = spinnerColor)
  // }

  // @action
  async close() {
    this.show = false
    this.spinnerSize = ''
    this.spinnerColor = ''
    return new Promise((resolve) => resolve(true))
  }
}

export default LoadingModal
