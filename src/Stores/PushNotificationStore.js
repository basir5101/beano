/* eslint-disable camelcase */
import { observable, action, makeObservable } from 'mobx'
import messaging from '@react-native-firebase/messaging'

import { deviceStore, loadingModalStore, authStore } from './StoreFactory'

import CampaignSerice from 'Network/CampaignSerice'

const NOTIFICATION_TYPES = {
  campaign: 'Campaign',
  reward: 'Reward',
  userPost: 'UserPost',
  rewardRequest: 'RewardRequest'
}

class PushNotificationStore {
  @observable message = null
  @observable title = null
  @observable onPress = false
  @observable navigation = false
  @observable isVisible = false

  constructor(authStore) {
    makeObservable(this)
    this.authStore = authStore
    this.onNotificationCallbacks = []
    this.notificationListener = null
  }

  @action showNotification(notification) {
    this.title = notification.notification.title
    this.message = notification.notification.body
    this.isVisible = true
    this.onPress = () => this.handleNotification(notification)
  }

  @action hideNotification() {
    this.isVisible = false
    this.title = null
    this.message = null
    this.onPress = null
  }

  subscribe(callback) {
    this.onNotificationCallbacks.push(callback)
  }

  unsubscribe(callback) {
    // alert('unsubscribed')
    const index = this.onNotificationCallbacks.indexOf(callback)
    this.onNotificationCallbacks.splice(index, 1)
  }

  start(navigation) {
    this.navigation = navigation
    messaging()
      .hasPermission()
      .then(enabled => {
        // eslint-disable-next-line eqeqeq
        if (enabled == true) {
          this.firebaseRegister()
        } else {
          messaging()
            .requestPermission()
            .then(() => {
              this.firebaseRegister()
            })
            .catch(error => {
              // User has rejected permissions
              return error
            })
        }
      })
  }

  firebaseRegister() {
    messaging()
      .getToken()
      .then(fcmToken => {
        if (fcmToken) {
          this.registerFcmToken(fcmToken)
        }
      })

    this.onTokenRefreshListener = messaging()
      .onTokenRefresh(fcmToken => {
        this.registerFcmToken(fcmToken)
      })

    this.notificationListener = messaging()
      .onMessage((notification) => {
        this.showNotification(notification)
        // firebase.notifications().displayNotification(notification);
        // if (notification.data && notification.data.type === 'ChatRoom') {
        //   if (ChatStore.roomId == notification.data.id) {
        //     ChatStore.fetchMessages(true)
        //   }
        //   else {
        //     ChatRoomStore.gotNewMessage(notification.data.id)
        //   }
        // }
      })

    this.notificationOpenedListener = messaging()
      .onNotificationOpenedApp(async (notification) => {
        this.handleNotification(notification)
      })

    messaging().getInitialNotification()
      .then(async (notification) => {
        this.handleNotification(notification)
      })
  }

  async handleNotification(notification) {
    notification = notification || {}
    const data = notification.data || notification._data || {}

    switch (data.class_name) {
      case NOTIFICATION_TYPES.campaign: {
        loadingModalStore.open({})
        const item = await new CampaignSerice(authStore).getCampaignById(data.id)
        this.navigation.navigate('ReferralLinkScreen', { item })
        loadingModalStore.close()
        break
      }
      case NOTIFICATION_TYPES.reward: {
        this.navigation.navigate('CreatorDetails', { id: data.user_id, selectedTabIndex: 1 })
        break
      }
      case NOTIFICATION_TYPES.userPost: {
        this.navigation.navigate('FeedPage', { id: data.id, })
        break
      }
      case NOTIFICATION_TYPES.rewardRequest: {
        this.navigation.navigate('Redeem', {
          screen: 'Redeem', params: {
            creatorId: data.creator_id,
            status: data.status
          }
        })
        break
      }
    }
  }

  async registerFcmToken(fcmToken) {
    deviceStore.registerDevice(fcmToken)
  }
}

export default PushNotificationStore
