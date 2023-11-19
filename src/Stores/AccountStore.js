import { observable, action, makeObservable, runInAction } from 'mobx'
import UserService from 'Network/UserService'
import { languageStore, authStore, feedStore, } from 'Stores/StoreFactory'

class AccountStore {
  @observable user = {};
  @observable followingUsers = [];
  @observable userRewards = [];
  @observable error = false;
  @observable errorMessage = null;

  @observable loaders = {
    getProfile: false,
    submitList: false,
  }

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


  get user() {
    return authStore.user
  }

  @action async getFollowingUsers(id) {
    try {
      this.startLoader('getFollowing')
      this.error = false
      this.errorMessage = null

      const response = await this.service().getFollowingUsers(id)

      if (response && response.success) {
        runInAction(() => {
          this.followingUsers = response.data ? response.data.items : []
        })
      } else {
        this.error = true
        this.errorMessage = languageStore.textLocale.general.errorOccured
      }

      this.stopLoader('getFollowing')
    } catch (err) {
      this.stopLoader('getFollowing')
      this.error = true
      this.errorMessage = languageStore.textLocale.general.errorOccured
    }
  }

  @action async toggleFollow(isFollow, id) {
    try {
      this.startLoader('getFollowing')
      this.error = false
      this.errorMessage = null

      const response = await this.service().toggleFollow(isFollow, id)

      if (!response || !response.success) {
        this.error = true
        this.errorMessage = languageStore.textLocale.general.errorOccured
      }
      await this.getFollowingUsers(this.user.id)
      await feedStore.getUserTopFans(id)
    } catch (err) {
      this.error = true
      this.errorMessage = languageStore.textLocale.general.errorOccured
    }

    this.stopLoader('getProfile')
  }
}

export default AccountStore
