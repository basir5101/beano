import AuthStore from './AuthStore'
import ShopsStore from './ShopsStore'
 import DeviceStore from './DeviceStore'
// import LanguageStore from './LanguageStore'
// import ThemeStore from './ThemeStore'
// // import InterestStore from './InterestStore'
import ConfirmationModalStore from './ConfirmationModalStore'
// import AccountStore from './AccountStore'
// import FeedStore from './FeedStore'
// import PushNotificationStore from './PushNotificationStore'
// // import AnalyticsStore from './AnalyticsStore'
// // import RewardStore from './RewardStore'
// import VideoModalStore from './VideoModalStore'
import GeolocationStore from './GeolocationStore'
import LoadingModalStore from './LoadingModalStore'
import InformationModalStore from './InformationModalStore'
import BottomModalStore from './BottomModalStore'
import ReviewModalStore from './ReviewModalStore'

// import CampaignStore from './CampaignStore'
import AlertModalStore from './AlertModalStore'
class StoreFactory {
  constructor() {
    this.authStore = new AuthStore()
    this.shopsStore = new ShopsStore()

    // this.languageStore = new LanguageStore()
     this.deviceStore = new DeviceStore(this.authStore)
    this.confirmationModalStore = new ConfirmationModalStore()
    this.informationModalStore = new InformationModalStore()
    this.bottomModalStore = new BottomModalStore()
    this.reviewModalStore = new ReviewModalStore()

    this.loadingModalStore = new LoadingModalStore()
    // this.themeStore = new ThemeStore()
    this.AlertModalStore = new AlertModalStore()
    // this.accountStore = new AccountStore(this.authStore)
    // this.pushNotificationStore = new PushNotificationStore(this.authStore)
    // this.feedStore = new FeedStore(this.authStore)

    // this.videoModalStore = new VideoModalStore()
    this.geolocationStore = new GeolocationStore()

  }
}

const storeFactory = new StoreFactory()

// export const languageStore = storeFactory.languageStore
export const authStore = storeFactory.authStore
export const shopsStore = storeFactory.shopsStore
export const deviceStore = storeFactory.deviceStore
export const confirmationModalStore = storeFactory.confirmationModalStore
export const informationModalStore = storeFactory.informationModalStore
export const bottomModalStore = storeFactory.bottomModalStore
export const reviewModalStore = storeFactory.reviewModalStore

// export const themeStore = storeFactory.themeStore
// // export const interestStore = storeFactory.interestStore
// export const accountStore = storeFactory.accountStore
// export const pushNotificationStore = storeFactory.pushNotificationStore
// export const feedStore = storeFactory.feedStore
// // export const analyticsStore = storeFactory.analyticsStore
// // export const rewardStore = storeFactory.rewardStore
// export const videoModalStore = storeFactory.videoModalStore
export const geolocationStore = storeFactory.geolocationStore
export const loadingModalStore = storeFactory.loadingModalStore
export const alertModalStore = storeFactory.AlertModalStore
// export const campaignStore = storeFactory.campaignStore
export default storeFactory
