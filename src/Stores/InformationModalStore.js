import { observable, action, makeObservable } from 'mobx'

class InformationModal {
  // @observable show = false
  // @observable title = ''
  // @observable description = ''
  // @observable imageSource = null
  // Component = null

  // constructor() {
  //   // makeObservable(this)
  // }

  // @action
  // open({
  //   title = '',
  //   description = '',
  //   imageSource = null,
  //   Component = null
  // }) {
  //   this.title = title
  //   this.description = description
  //   this.imageSource = imageSource
  //   this.show = true
  //   this.Component = Component
  // }

  // @action
  // success(text, onConfirm = null) {
  //   this.open({ title: text, onConfirm: onConfirm })
  // }

  // @action
  // error(text) {
  //   this.open({ title: text, hideCancel: true, onConfirm: this.close })
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
  //   this.Component = null
  //   return new Promise((resolve) => resolve(true))
  // }
}

export default InformationModal
