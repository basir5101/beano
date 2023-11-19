import { observable, action, makeObservable } from 'mobx'

class VideoModalStore {
  @observable show = false
  @observable title = ''
  @observable loaderSize = null
  @observable loaderColor = null
  @observable value = 0
  @observable timer = '00:00'
  @observable videoUrl = ''
  @observable shareableLink = null

  constructor() {
    makeObservable(this)
  }

  @action
  open({
    title = '',
    description = '',
    loaderSize = null,
    loaderColor = null,
    value = 0,
    timer = '00:00:00',
    videoUrl = '',
    shareableLink
  }) {
    this.title = title
    this.description = description
    this.loaderSize = loaderSize
    this.loaderColor = loaderColor
    this.value = value
    this.timer = timer
    this.videoUrl = videoUrl
    this.show = true
    this.shareableLink = shareableLink
  }

  @action
  success(text,) {
    this.open({ title: text })
  }

  @action
  error(text) {
    this.open({ title: text })
  }

  @action
  async action() {
    const onConfirm = this.onConfirm
    await this.close()
    onConfirm && onConfirm()
  }

  @action
  async close() {
    this.show = false
    this.title = ''
    this.loaderSize = null
    this.loaderColor = null
    this.value = 0
    this.timer = ''
    this.videoUrl = ''
    this.shareableLink = null
    return new Promise((resolve) => resolve(true))
  }
}

export default VideoModalStore
