import { observable, action, makeObservable, runInAction } from 'mobx'
import UserService from 'Network/UserService'
import ActivityFeedService from 'Network/ActivityFeedService'
import FeedService from 'Network/FeedService'
import { languageStore } from 'Stores/StoreFactory'
import { useErrorHandler } from '../Helpers/errorHandler'

const LIMIT_PER_CALL = 20

class FeedStore {
  @observable feed = [];
  @observable rewards = [];
  @observable userRewards = [];
  @observable userDetails = [];
  @observable userCampaigns = [];
  @observable userTopFans = [];
  @observable specificUserCampaigns = [];
  @observable shareableLink = [];
  @observable trendingCrowdLinks = [];
  @observable error = false;
  @observable errorMessage = null;

  @observable loaders = {
    getFeed: false,
    getRewards: false,
    getCreatorFeed: false,
    submitList: false,
    getFeedByCode: false,
    getFeedById: false
  }

  // @observable endReached = {
  //   userRewards: '0-0',
  //   rewardsRequests: '0-0'
  // }

  constructor(authStore) {
    makeObservable(this)
    this.authStore = authStore
  }

  @action async startLoader(key) {
    this.loaders[key] = true
  }

  @action async stopLoader(key) {
    this.loaders[key] = false
  }


  service() {
    return new UserService(this.authStore)
  }

  feedsService() {
    return new ActivityFeedService(this.authStore)
  }


  @action async toggleLike(id, isLiked) {
    try {
      this.startLoader('getFollowing')
      this.error = false
      this.errorMessage = null

      const response = await this.feedsService().toggleLike(id, isLiked)
      useErrorHandler(response)

      if (!response || !response.success) {
        this.error = true
        this.errorMessage = languageStore.textLocale.general.errorOccured
      }
    } catch (err) {
      this.error = true
      this.errorMessage = languageStore.textLocale.general.errorOccured
    }

    this.stopLoader('getProfile')
  }



  @action async getUserDetails(id) {
    try {
      this.startLoader('getFeed')
      this.error = false
      this.errorMessage = null

      const response = await this.service().getUserDetails(id)
      useErrorHandler(response)

      if (response && response.success) {
        runInAction(() => {
          this.userDetails = response.data
        })
      } else {
        this.error = true
        this.errorMessage = languageStore.textLocale.general.errorOccured
      }
      this.stopLoader('getFeed')
    } catch (err) {
      this.stopLoader('getFeed')
      this.error = true
      this.errorMessage = languageStore.textLocale.general.errorOccured
    }
  }

  @action async getUserTopFans(id) {
    try {
      this.startLoader('getFeed')
      this.error = false
      this.errorMessage = null

      const response = await this.service().getUserTopFans(id)
      useErrorHandler(response)

      if (response && response.success) {
        runInAction(() => {
          this.userTopFans = response.data.items
        })
      } else {
        this.error = true
        this.errorMessage = languageStore.textLocale.general.errorOccured
      }
      this.stopLoader('getFeed')
    } catch (err) {
      this.stopLoader('getFeed')
      this.error = true
      this.errorMessage = languageStore.textLocale.general.errorOccured
    }
  }

  @action async getTrendingCrowdLinks(userId, trending) {
    try {
      this.startLoader('getTrendingCrowdLinks')
      this.error = false
      this.errorMessage = null

      const response = await this.service().getTrendingCrowdLinks(userId, trending)
      useErrorHandler(response)

      if (response && response.success) {
        runInAction(() => {
          this.trendingCrowdLinks = response.data.items
        })
      } else {
        this.error = true
        this.errorMessage = languageStore.textLocale.general.errorOccured
      }
      this.stopLoader('getTrendingCrowdLinks')
    } catch (err) {
      this.stopLoader('getTrendingCrowdLinks')
      this.error = true
      this.errorMessage = languageStore.textLocale.general.errorOccured
    }
  }

  @action
  async getFeedByCode(code) {
    try {
      this.startLoader('getFeedByCode')
      const resp = await new FeedService(this.authStore).getFeedByCode(code)
      useErrorHandler(resp)

      this.stopLoader('getFeedByCode')
      return resp
    } catch (err) {
      this.stopLoader('getFeedByCode')
    }
  }

  @action
  async getFeedById(id) {
    try {
      this.startLoader('getFeedById')
      const resp = await new FeedService(this.authStore).getFeedById(id)
      this.stopLoader('getFeedById')
      return resp
    } catch (err) {
      this.stopLoader('getFeedById')
    }
  }
}

export default FeedStore
