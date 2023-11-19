import { observable, computed, action, makeObservable } from 'mobx'
import { View, StyleSheet, Button, Alert } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import ConstantKeys from 'Constants/Keys'
// import AuthenticationService from 'Network/AuthenticationService'
import SessionService from 'Network/SessionService'
import { shopsStore} from 'Stores/StoreFactory'
import { useErrorHandler } from '../Helpers/errorHandler'

const USER_INFO_KEY = 'user_info'
const TOKEN_KEY = '@Beano:Token_Key'
const INTRO_SCREEN = '@Beano:intro_screen'
const USER_TYPE = '@Beano:user_type'
const INTRO_SCREEN_STORE = '@Beano:intro_screen_store'
const USER_ROLES_ID_KEY = '@Beano:user_roles_id'
const COMPANY_STORAGE_KEY = 'company_info'

class AuthStore {
//   @observable user = {};
//   @observable token = null;
//   @observable userDetails = null;
//   @observable userType = 'customer';
//   @observable signInModal = false;
//   @observable introScreen = true;
//   @observable language = 'en'

//   @observable loading = false;
//   @observable lists = null;
//   @observable error = false;
//   @observable errorMessage = null;

//   @observable loaders = {
//     userLoader: true,
//     loginLoader: false,
//     tokenLoader: false,
//     logoutLoader: false,
//     editUserLoader: false,
//   }

//   constructor() {
//     // makeObservable(this)
//   }

//   @action async startLoader(key) {
//     this.loaders[key] = true
//   }

//   @action async stopLoader(key) {
//     this.loaders[key] = false
//   }

//   @action toggleModal() {
//     this.signInModal = !this.signInModal
//   }

//   service() {
//     // return new AuthenticationService(this)
//   }

//   @action async getUser() {
//     const info = await AsyncStorage.getItem(USER_INFO_KEY) || null
//     this.user = (JSON.parse(info))
//     this.userType = await AsyncStorage.getItem(USER_TYPE) || 'customer'

//     await AsyncStorage.setItem(USER_TYPE, 'customer')
//   }
//   // Testing token: 'normal-user-auth'
//   @action async loadUser() {
//     this.startLoader('userLoader')
//     const token = await AsyncStorage.getItem(TOKEN_KEY) //'8c932194c8f742f419b5eb18c0c78795'
//     if (token && token !== null) {
//       await this.checkToken(token)
//     }
//     this.stopLoader('userLoader')
//   }
//   @action async setLanguage(value){
//     this.language = value
//   }

//   @computed get isAuthenticated() {
//     return Boolean(this.token)
//   }

//   @action async setToken(token, save = true) {
//     this.token = token

//     if (save) {
//       await AsyncStorage.setItem(TOKEN_KEY, token)
//     }

//     // await NotificationHelper.firebasePermissions()
//   }

//   @action async setIntroScreen(value, save = true) {
//     this.introScreen = value

//     if (save) {
//       const stringVal = value?.toString()
//       await AsyncStorage.setItem(INTRO_SCREEN, stringVal)
//     }

//   }

//   @action async setUser(user) {
//     this.user = user

//     await AsyncStorage.setItem(USER_INFO_KEY, JSON.stringify(user))
//   }

//   @action async login(params) {
//     try {
//       const response = await SessionService.login(params)
//       useErrorHandler(response)
//       console.log(response)
//       if (response && response.success) {
//         const isCustomer = response.success.data.user.scopes.includes('ape-customer')
//         const isVendor = response.success.data.user.scopes.includes('ape-vendor')

//         await this.setToken(response.success.data.access_token)


//         if (isCustomer) {
//           const resString = JSON.stringify({...response.success.data,isCustomer})
//           this.userType = 'customer'
//           await AsyncStorage.setItem('userData', resString)
//         } else if (isVendor) {
//           this.userType = 'vendor'
//           const resString = JSON.stringify({...response.success.data,isVendor})
//           await AsyncStorage.setItem('userData', resString)
//         }
//         return response.success
//       }
//       return false
//     } catch (err) {
//       return false
//     }
//   }
//   @action async register(params){
//     try{
//     const res =  await SessionService.createAccount(params)
//     useErrorHandler(res)
//     }catch(e){
//   return e    }
//   }
//   @action async sendTokenNotification(){
//     try{
//       const FCMToken = await AsyncStorage.getItem('FCMToken')
//       const res = await SessionService?.sendTokenNotification({
//       "token":FCMToken?.toString(),
//       "username": this?.user?.username ?? this?.user?.user?.username})
//       console.log('SEND TOKEN NOTIF',res,{
//         "token":FCMToken,
//         "username": this?.user?.username ?? this?.user?.user?.username})
//     }catch(e){
// return e    }
//   }
//   @action async verifyEmail(params){
//     try{
//       const res = await SessionService.verifyEmail(params)
//       return res
//     }catch(e){
//     }
//   }
//   @action async getUserDataFromStorage(){
//     try{
//       const response = await AsyncStorage.getItem('userData')
//       const res = JSON.parse(response)
//       this.user = res?.user
//       this.userType = res?.isVendor ? 'vendor' : 'customer'
//       this.token = res.access_token
//     }catch(e){
//   return e    }
//   }
//   @action async checkToken() {
//     // this.startLoader('tokenLoader')

//     try {
//       const token = await AsyncStorage.getItem(TOKEN_KEY)

//       if (token.length > 0) {
//         this.token = token
//         return true
//       } else if (token === null) {
//         return false
//       }
//     } catch (err) {
//       return err
//     }
//   }

//   @action async checkIntroScreen() {
//     this.startLoader('tokenLoader')

//     try {
//       const introScreenState = await AsyncStorage.getItem(INTRO_SCREEN)
//       const introScreen = JSON.parse(introScreenState)

//       if (introScreen) {
//         this.introScreen = true
//         return true
//       } else if (introScreen === null) {
//         this.introScreen = true 
//         return false
//       }else if(!introScreen){
//         this.introScreen = false 
//       }
//     } catch (err) {
//       return err
//     }
//   }

//   @action async validateCode(email, code) {
//     try {
//       const response = await this.service().validateCode(email, code)
//       if (response && response.success) {
//         await this.setUser(response.data)
//         await this.setToken(response.data.auth_token)
//         return response
//       }
//       return false
//     } catch (err) {
//       return false
//     }
//   }

//   @action async logout() {
//     try {
//       await AsyncStorage.removeItem('userData')
//       this.userType = 'customer'
//       this.setToken(null, false)
//       shopsStore.removeStreakDetails()
//       shopsStore.removeOrders()
//       this.setUser({})
//     } catch (err) {
//       return err
//     }
//     return null
//   }

//   // @action async checkToken(token) {
//   //   this.startLoader('tokenLoader')
//   //   await this.setToken(token, false)

//   //   try {
//   //     const response = await this.service().getUserInfo()

//   //     if (response) {
//   //       await this.setUser(response)
//   //       await this.setToken(token)
//   //     }
//   //   } catch (err) {
//   //     return err
//   //   }
//   //   return null
//   // }

//   @action async editUser(data) {
//     try {
//       this.startLoader('editUserLoader')
//       let params = {
//         name: data.name,
//         address_line_1: data.addressLine1,
//         address_line_2: data.addressLine2,
//         country: data.country,
//         city: data.city,
//         zipcode: data.zipcode,
//         phone_number: data.phoneNumber,
//       }
//       if (data.file) {
//         params = {
//           ...params,
//           attachments_to_upload: [data.file],
//         }
//       }

//       const response = await this.service().editUser(params)

//       if (response) {
//         this.setUser(response)
//       }
//       this.stopLoader('editUserLoader')
//       return response
//     } catch (err) {
//       this.stopLoader('editUserLoader')
//       return null
//     }
//   }
}

export default AuthStore
