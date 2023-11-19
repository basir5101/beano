import { useNavigation } from "@react-navigation/native"
import { Alert } from "react-native"
import { shopsStore, } from 'Stores/StoreFactory'
import { navigationRef } from "../../App"
import { authStore } from "../Stores/StoreFactory"

export const useErrorHandler = (res) =>{

    if(res?.error?.data?.invalid){
        Alert?.alert('Please make sure that the password and the email are correct')
    }
    if(res?.data?.message && res?.data?.message?.toLowerCase() == 'network error'){
        Alert.alert('Please make sure that you are connected to the internet')
    }
    if(res?.error?.message?.toLowerCase() == 'invalid token' && (authStore?.user?.username || authStore?.user?.user?.username)){
        authStore?.logout()
        Alert.alert('Invalid token, please log in again.')
        navigationRef.current?.navigate('ProfileScreen');
        
    }
    if(res?.error?.message?.toLowerCase() == 'internal error'){
        Alert.alert('Something wrong happened, please try again later.')
    }
}