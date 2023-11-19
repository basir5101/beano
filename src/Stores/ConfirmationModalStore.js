import { observable, action, makeObservable } from 'mobx'

class ConfirmationModal {
  // @observable show = false
  // @observable title = ''
  // @observable description = ''
  // @observable imageSource = null
  // @observable onConfirm = null
  // @observable hideCancel = false
  // @observable confirmTitle = ''
  // @observable cancelTitle = ''
  // @observable hidePoints = false
  // @observable balancePoints = ''
  // Component = null

  // constructor() {
  //   // makeObservable(this)
  // }

  // @action
  // open({
  //   title = '',
  //   description = '',
  //   onConfirm = null,
  //   hideCancel = false,
  //   confirmTitle = '',
  //   cancelTitle = '',
  //   imageSource = null,
  //   Component = null,
  //   hidePoints = false,
  //   balancePoints = '',
  // }) {
  //   this.title = title
  //   this.description = description
  //   this.imageSource = imageSource
  //   this.onConfirm = onConfirm
  //   this.hideCancel = hideCancel
  //   this.show = true
  //   this.confirmTitle = confirmTitle
  //   this.cancelTitle = cancelTitle
  //   this.Component = Component
  //   this.hidePoints = hidePoints
  //   this.balancePoints = balancePoints
  // }

  // @action
  // success(text, onConfirm = null) {
  //   this.open({ title: text, onConfirm: onConfirm, hideCancel: true, hidePoints: true })
  // }

  // @action
  // error(text) {
  //   this.open({ title: text, hideCancel: true, onConfirm: this.close, hidePoints: true })
  // }

  // @action
  // async action() {
  //   const onConfirm = this.onConfirm
  //   await this.close()
  //   onConfirm && onConfirm()
  // }

  // @action
  // async close() {
  //   this.show = false
  //   this.title = ''
  //   this.description = ''
  //   this.imageSource = null
  //   this.onConfirm = null
  //   this.hideCancel = false
  //   this.hidePoints = false
  //   this.confirmTitle = ''
  //   this.cancelTitle = ''
  //   this.Component = null
  //   this.balancePoints = ''
  //   return new Promise((resolve) => resolve(true))
  // }
}

export default ConfirmationModal
