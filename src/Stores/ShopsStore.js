import { observable, action, makeObservable, runInAction } from 'mobx'
import { languageStore, authStore, feedStore, } from 'Stores/StoreFactory'
import StoreService from 'Network/StoreService'
import FeedService from 'Network/FeedService'
import AsyncStorage from '@react-native-community/async-storage'
import { useErrorHandler } from '../Helpers/errorHandler'
import { firebase } from '@react-native-firebase/messaging'
class ShopsStore {
//   @observable stores = [];
//   @observable storeDetails = [];
//   @observable cartTicket = null;
//   @observable showIntroScreen = true;
//   @observable storesList = [];
//   @observable branchesList = [];
//   @observable notifMessage = {};
//   @observable categoriesList = [];
//   @observable bannersList = [];
//   @observable previousOrders = [];
//   @observable vendorOrders = [];
//   @observable customerOrders = [];
//   @observable showStoreIntroScreen = {};
//   @observable customerPendingOrders = [];
//   @observable error = false;
//   @observable streakDetails={};
//   @observable FirebaseMessagingToken = '';
//   @observable errorMessage = null;
//   @observable reels = []
//   @observable reelsData = [];
//   @observable slides = []
//   @observable finishLoading = false;

//   @observable loaders = {
//     getProfile: false,
//     submitList: false,
//   }

//   constructor(authStore) {
//     this.authStore = authStore
//   }

//   @action async startLoader(key) {
//     this.loaders[key] = true
//   }
//   @action async getStreak(){
//  try{
//   const res = await StoreService.getStreak()
//   if(res.success) {
//     this.streakDetails = res.success.data
//   }
//   return res
//  }

//  catch(e){
//   return e }
//   }
//   @action async removeStreakDetails(){
//     this.streakDetails={}
//    }
//    @action async removeOrders(){
//     this.customerPendingOrders={}
//    }
//   @action async getReelsData(params){
//     try{
//       const res = StoreService.getReelsData(params)
//       if(res.success) this.reelsData = res.success.data
//     }catch(e){
//       return e
//     }
//   }
//   @action async likeReel(params){
//     try{
//       const res = StoreService.likeReel(params)
//       return res
//     }catch(e){
//       return e
//     }
//   }
//   @action async setNotifMessage(message){

//     this.notifMessage = message
//   }

//   @action async stopLoader(key) {
//     this.loaders[key] = false
//   }

//   service() {
//     return new StoreService(this.authStore)
//   }


//   get user() {
//     return authStore.user
//   }
//   @action async addVideoToFeed(params){
//     try{
//       const res = await FeedService.addVideoToFeed(params)
//       useErrorHandler(res)
//       return res
//     }catch(e){
//     return e
//   }

//   }

//   @action async getNearbyStores(params) {
//     try {
//       this.startLoader('getFollowing')
//       this.error = false
//       this.errorMessage = null

//       const response = await StoreService.getNearbyStores(params)
//       console.log(response.success.data[0])
//       useErrorHandler(response)
//       if (response && response.success) {
//         runInAction(() => {
//           this.stores = response.success ? response.success.data : []
//         })
//       } else {
//         this.error = true
//         this.errorMessage = "languageStore.textLocale.general.errorOccured"
//       }

//       this.stopLoader('getFollowing')
//     } catch (err) {
//       this.stopLoader('getFollowing')
//       this.error = true
//       this.errorMessage = "languageStore.textLocale.general.errorOccured"
//     }
//   }

// @action async getStore(params) {
//     try {
//       this.startLoader('getFollowing')
//       this.error = false
//       this.errorMessage = null
//       const response = await StoreService.getStore(params)
//       useErrorHandler(response)
//       if (response && response.success) {
//         runInAction(() => {
//           this.storeDetails = response.success ? response.success.data : []
//         })
//       } else {
//         this.error = true
//         this.errorMessage = "languageStore.textLocale.general.errorOccured"
//       }

//       this.stopLoader('getFollowing')
//     } catch (err) {
//       this.stopLoader('getFollowing')
//       this.error = true
//       this.errorMessage = "languageStore.textLocale.general.errorOccured"
//     }
//   }
//   @action async confirmVendorOrders(id,navigation){
//   try{
//     navigation.navigate('Orders')
//     const res = await StoreService.confirmVendorOrders({"uuid":`${id}`})
//     useErrorHandler(res)

//     //if(res && !!res.success){
//     //}
//   }catch(e){
//   return e  }
//   }
//   @action async setIntroOfStore(value){
//     const val = value.toString()
//     await AsyncStorage.setItem('storeDetails',val)
//   }
//   @action async checkStoreIntroScreen() {
//     this.startLoader('tokenLoader')

//     try {
//       const storeIntroScreenState = await AsyncStorage.getItem('storeDetails')
//       const storeIntroScreen = JSON.parse(storeIntroScreenState)
//       if (storeIntroScreen) {
//         this.showStoreIntroScreen = true
//         return true
//       } else if (storeIntroScreen === null || storeIntroScreen === undefined) {
//         this.showStoreIntroScreen = true 
//         return false
//       }else if(!storeIntroScreen){
//         this.showStoreIntroScreen = false 
//       }
//     } catch (err) {
//       return err
//     }
//   }
//   @action async getPreviousOrders() {
//     try {
//       this.startLoader('getFollowing')
//       this.error = false
//       this.errorMessage = null

//       const response = await StoreService.getPreviousOrders()

//       if (response && response.success) {
//         runInAction(() => {
//           this.previousOrders = response.success ? response.success.data : []
//         })
//       } else {
//         this.error = true
//         this.errorMessage = "languageStore.textLocale.general.errorOccured"
//       }

//       this.stopLoader('getFollowing')
//     } catch (err) {
//       this.stopLoader('getFollowing')
//       this.error = true
//       this.errorMessage = "languageStore.textLocale.general.errorOccured"
//     }
//   }

//   @action async getCategoriesList() {
//     try {
//       this.startLoader('getFollowing')
//       this.error = false
//       this.errorMessage = null

//       const response = await StoreService.getCategoriesList()
//       if (response && response.success) {
//         runInAction(() => {
//           this.categoriesList = response.success ? response.success.data : []
//         })
//       } else {
//         this.error = true
//         this.errorMessage = "languageStore.textLocale.general.errorOccured"
//       }

//       this.stopLoader('getFollowing')
//     } catch (err) {
//       this.stopLoader('getFollowing')
//       this.error = true
//       this.errorMessage = "languageStore.textLocale.general.errorOccured"
//     }
//   }
// @action async feedbackApply(params){
//   try{
//     const res = await StoreService?.feedbackApply(params)
//   }catch(e){
// return e  }
// }
//   @action async requestProduct(data) {
//     try {
//       this.startLoader('getFollowing')
//       this.error = false
//       this.errorMessage = null

//       const params = {
//         store: data.store,
//         branch: data.branch,
//         items: [{
//           product: data.name,
//           quantity: 1,
//           options: [{
//             tag: data.options[0].tag,
//             size: data.options[0].size,
//             selected: [data.options[0].values[0]]
//           }]
//         }]
//       }

//       const response = await StoreService.requestProduct(params)
//       useErrorHandler(response)
//       if (response && response.success) {
//         runInAction(() => {
//           this.cartTicket = response.success ? response.success.data.uuid : []
//         })
//       } else {
//         this.error = true
//         this.errorMessage = "languageStore.textLocale.general.errorOccured"
//       }

//       this.stopLoader('getFollowing')
//     } catch (err) {
//       this.stopLoader('getFollowing')
//       this.error = true
//       this.errorMessage = "languageStore.textLocale.general.errorOccured"
//     }
//   }
//   @action async changeQuantity (index,plus,minus,data,branch,store){
  
//     this.customerPendingOrders = [
//       {
//         ...this.customerPendingOrders?.[0],
//         items:this?.customerPendingOrders?.[0]?.items?.map((item,i)=>{
//       if(i == index && plus == true){
//           return {...item,quantity:item?.quantity + 1}
//       }else if(index == i && minus == true){
//         return {...item,quantity:item?.quantity - 1}
//       }else return item
//      })
//     } 
//   ]
// try{
//   const params = {
//     store: store,
//     branch: branch,
//     items: [{
//       product: data.productName,
//       quantity: !!plus ? data?.quantity + 1 : data?.quantity - 1,
//       options: [{
//         tag: data.options[0].tag,
//         size: data.options[0].tag,
//         selected: [data.options[0].selected[0]]
//       }]
//     }]
//   }
//   const res = await StoreService?.requestProduct(params)
//   if (res && res.success) {
//     runInAction(() => {
//       this.cartTicket = res.success ? res.success.data.uuid : []
//     })
//   }
// }catch(e){
//   console.log(e)
// }


    
     

//   }
//   @action async requestProductFromDetails(params) {
//     try {
//       this.startLoader('getFollowing')
//       this.error = false
//       this.errorMessage = null

//       const response = await StoreService.requestProduct(params)
//       if (response && response.success) {
//         runInAction(() => {
//           this.cartTicket = response.success ? response.success.data.uuid : []
//         })
//       } else {
//         this.error = true
//         this.errorMessage = "languageStore.textLocale.general.errorOccured"
//       }

//       this.stopLoader('getFollowing')
//     } catch (err) {
//       this.stopLoader('getFollowing')
//       this.error = true
//       this.errorMessage = "languageStore.textLocale.general.errorOccured"
//     }
//   }

//   @action async disableStore(params){
//     try{
//       const res = await StoreService.disableStore(params)
//       if(res.success){
//         this.storesList = [...this.storesList?.filter((item)=>item?.name != params?.store)]
//       }
//       return true
//     }catch(e){
// return e    }
//   }
//   @action async disableBranch(params){
//     try{
//       const res = await StoreService.disableBranch(params)
//       if(res.success){
//         this.branchesList = [...this.branchesList?.filter((item)=>item?.name != params?.store)]

//       }
//       return true
//     }catch(e){
// return e    }
//   }
  
//   @action async disableProduct(params){
//     try{ 
//       const res = await StoreService.disableProduct(params)
//       if(res.success){

//       }
//       return true
//     }catch(e){
// return e    }
//   }
//   @action async getVendorStores() {
//     try {

//       this.startLoader('getFollowing')
//       this.error = false
//       this.errorMessage = null

//       const response = await StoreService.getVendorStores({ "vendor": `${authStore?.user?.user?.email || authStore?.user?.username}`,"page":2,"pageSize":9,"noImages":false })

//       if (response && response.success) {
//         runInAction(() => {
//           this.storesList = response.success ? response.success.data : []
//           this.finishLoading = true

//         })
//       } else {
//         this.error = true
//         this.errorMessage = "languageStore.textLocale.general.errorOccured"
//         this.finishLoading = true

//       }

//       this.stopLoader('getFollowing')
//     } catch (err) {
//       this.stopLoader('getFollowing')
//       this.error = true
//       this.errorMessage = "languageStore.textLocale.general.errorOccured"
//       this.finishLoading = true
//     }
//   }
//   @action async getCustomerPendingOrders() {
//     try {
//       this.startLoader('getFollowing')
//       this.error = false
//       this.errorMessage = null

//       const response = await StoreService.getCustomerPendingOrders()
//       useErrorHandler(response)
//       if (response && response.success) {
//         runInAction(() => {
//           this.customerPendingOrders = response.success ? [response.success.data] : []
//           this.cartTicket =  response?.success?.data?.uuid
//         })
//         return response
//       } else {
//         this.error = true
//         this.errorMessage = "languageStore.textLocale.general.errorOccured"
//       }

//       this.stopLoader('getFollowing')
//     } catch (err) {
//       this.stopLoader('getFollowing')
//       this.error = true
//       this.errorMessage = "languageStore.textLocale.general.errorOccured"
//     }
//   }
//   @action async addCustomerPendingOrders(params) {
//     try {
//       this.startLoader('getFollowing')
//       this.error = false
//       this.errorMessage = null

//       const response = await StoreService.addCustomerPendingOrders(params)
//       useErrorHandler(response)

//       if (response && response.success) {
//         runInAction(() => {
//           this.customerPendingOrders.push(response.success.data)
//         })
//       } else {
//         this.error = true
//         this.errorMessage = "languageStore.textLocale.general.errorOccured"
//       }

//       this.stopLoader('getFollowing')
//       return response
//     } catch (err) {
//       this.stopLoader('getFollowing')
//       this.error = true
//       this.errorMessage = "languageStore.textLocale.general.errorOccured"
//     }
//   }
//   @action async getBranchesList(params) {
//     try {
//       this.startLoader('getFollowing')
//       this.error = false
//       this.errorMessage = null
//       console.log(params)
//       const response = await StoreService.getBranchesList(params)

//       if (response && response.success) {
//         runInAction(() => {
//           this.branchesList = [...response.success.data]
//         })
//       } else {
//         this.error = true
//         this.errorMessage = "languageStore.textLocale.general.errorOccured"
//       }

//       this.stopLoader('getFollowing')
//     } catch (err) {
//       this.stopLoader('getFollowing')
//       this.error = true
//       this.errorMessage = "languageStore.textLocale.general.errorOccured"
//     }
//   }
//   @action async getReels(){
//     try{
//       const res = await FeedService.getReels()
//       useErrorHandler(res)
//       if(res.success && res.success.data.length > 0){
//         this.reels = res.success.data
//       }
//       return res
//     }catch(e){
//     return e    }
//   }
//   @action async generateToken(){
//     let retry
//     let FCMToken = await AsyncStorage.getItem('FCMToken')
//     if(!FCMToken){
//       try{
//         FCMToken = await firebase?.messaging()?.getToken()
//         this.FirebaseMessagingToken = FCMToken

//         await AsyncStorage.setItem('FCMToken',FCMToken)
//       }catch(e){
//         return e
//         retry = true
//       }
//     }
//     if(retry){
//       try{
//         await firebase?.messaging()?.requestPermission()
//         FCMToken = await firebase?.messaging()?.getToken()
//         this.FirebaseMessagingToken = FCMToken
//         await AsyncStorage.setItem('FCMToken',FCMToken)
//       }catch(e){
//       }
//     }
//   }
//   @action async createNewStore(params) {
//     try {
//       this.startLoader('getFollowing')
//       this.error = false
//       this.errorMessage = null
//       const response = await StoreService.createNewStore(params)
//       useErrorHandler(response)
     
//         return true

      
//     } catch (err) {
//       this.stopLoader('getFollowing')
//       this.error = true
//       this.errorMessage = "languageStore.textLocale.general.errorOccured"
//     }
//   }
//   @action async createNewProduct(params) {
//     try {
//       this.startLoader('getFollowing')
//       this.error = false
//       this.errorMessage = null

//       const response = await StoreService.createNewProduct(params)
//       useErrorHandler(response)

//       if (response && response.success) {
       
//         return true
//       } else {
//         this.error = true
//         this.errorMessage = "languageStore.textLocale.general.errorOccured"
//       }

//       this.stopLoader('getFollowing')
//     } catch (err) {
//       this.stopLoader('getFollowing')
//       this.error = true
//       this.errorMessage = "languageStore.textLocale.general.errorOccured"
//     }
//   }
//   @action async createNewBranch(params) {
//     try {
//       this.startLoader('getFollowing')
//       this.error = false
//       this.errorMessage = null
//       const response = await StoreService.createNewBranch(params)
//       useErrorHandler(response)
//       if (response && response.success) {
       
//         runInAction(() => {
//           this.branchesList.push(response.success.data)
//         })
//         return true
//       } else {
//         this.error = true
//         this.errorMessage = "languageStore.textLocale.general.errorOccured"
//       }

//       this.stopLoader('getFollowing')
//     } catch (err) {
//       this.stopLoader('getFollowing')
//       this.error = true
//       this.errorMessage = "languageStore.textLocale.general.errorOccured"
//     }
//   }
//   @action async getVendorOrders() {
//     try {
//       this.startLoader('getFollowing')
//       this.error = false
//       this.errorMessage = null

//       const response = await StoreService.getVendorOrders()
//       useErrorHandler(response)
//       if (response && response.success) {
//         runInAction(() => {
//           this.vendorOrders = response.success ? response.success.data : []
//         })
//       } else {
//         this.error = true
//         this.errorMessage = "languageStore.textLocale.general.errorOccured"
//       }

//       this.stopLoader('getFollowing')
//     } catch (err) {
//       this.stopLoader('getFollowing')
//       this.error = true
//       this.errorMessage = "languageStore.textLocale.general.errorOccured"
//     }
//   }
//   @action async getCustomerOrders() {
//     try {
//       this.startLoader('getFollowing')
//       this.error = false
//       this.errorMessage = null

//       const response = await StoreService.getCustomerOrders()
//       useErrorHandler(response)

//       if (response && response.success) {
//         runInAction(() => {
//           this.customerOrders = response.success ? response.success.data : []
//         })
//       } else {
//         this.error = true
//         this.errorMessage = "languageStore.textLocale.general.errorOccured"
//       }

//       this.stopLoader('getFollowing')
//     } catch (err) {
//       this.stopLoader('getFollowing')
//       this.error = true
//       this.errorMessage = "languageStore.textLocale.general.errorOccured"
//     }
//   }

//   @action async toggleFollow(isFollow, id) {
//     try {
//       this.startLoader('getFollowing')
//       this.error = false
//       this.errorMessage = null

//       const response = await this.service().toggleFollow(isFollow, id)

//       if (!response || !response.success) {
//         this.error = true
//         this.errorMessage = "languageStore.textLocale.general.errorOccured"
//       }
//       await this.getFollowingUsers(this.user.id)
//       await feedStore.getUserTopFans(id)
//     } catch (err) {
//       this.error = true
//       this.errorMessage = "languageStore.textLocale.general.errorOccured"
//     }

//     this.stopLoader('getProfile')
//   }
//   @action async getSlides(){
//     try{
//       const res = await StoreService?.getSlides()
//       if(res?.success){
//         this.slides = res?.success?.data
//       }
//     }catch(e){
// return e    }
//   }
//   @action async getBannerView() {
//     try {
//       this.startLoader('getFollowing')
//       this.error = false
//       this.errorMessage = null

//       const response = await StoreService.getBannersView()

//       if (response && response.success) {
//         runInAction(() => {
//           this.bannersList = response.success ? response.success.data : []
//         })
//       } else {
//         this.error = true
//         this.errorMessage = "languageStore.textLocale.general.errorOccured"
//       }

//       this.stopLoader('getFollowing')
//     } catch (err) {
//       this.stopLoader('getFollowing')
//       this.error = true
//       this.errorMessage = "languageStore.textLocale.general.errorOccured"
//     }
//   }
}

export default ShopsStore
