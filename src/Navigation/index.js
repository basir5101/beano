import React ,{useCallback,useRef,useEffect} from 'react'

import PropTypes from 'prop-types'
import {AppState, View, Image, Text,LayoutAnimation } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import messaging from '@react-native-firebase/messaging';

import { shopsStore, authStore } from 'Stores/StoreFactory'

import Button from 'Components/Buttons/Button'

import {
  IntroScreen,
  HomeScreen,
  FeedScreen,
  StoresScreen,
  ProfileScreen,
  SignupScreen,
  OtpScreen,
  CategoriesScreen,
  QrCodeScreen,
  StoreDetailsScreen,
  AddStoreScreen,
  OrdersScreen,
  AddBranchScreen,
  BranchesScreen,
  MenusScreen,
  AddMenuScreen,
  ProductDetailsScreen,
  SettingsScreen,
} from 'Screens'
// import PopsCamera from 'Screens/PopsCamera'
// import SelectRole from 'Screens/SelectRole'

// import AppStore from 'Stores/AppStore'

import Images from 'Images'
import DimensionHelper from 'Helpers/DimensionHelper'
import Colors from 'Constants/Colors'
import styles from './styles'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import { reviewModalStore } from '../Stores/StoreFactory'
import { changeLanguage } from 'i18next'
import { CustomerBranchesScreen } from '../Screens'

const defaultNavigationOptions = () => ({
  // headerTintColor: Colors.blue,
  // headerTitleStyle: styles.title,

  headerTintColor: Colors.tabBarBlue,
  headerTitleStyle: styles.title,
  headerStyle: {
    backgroundColor: Colors.headerLightPink,
    shadowColor: 'transparent',
    // paddingStart: 80
  },
  headerRightContainerStyle: { paddingRight: 13 },
  headerLeftContainerStyle: { paddingRight: 10 },
  headerBackTitleVisible: false,
  // headerLeft: () => (
  //   <View style={styles.headerLeftButtonsContainer}>
  //     <Button onPress={() => navigation.goBack()}>
  //       <Image source={Images.leftArrow} style={styles.headerLeft} />
  //     </Button>
  //   </View>
  // ),
})

const leftBackNavigation = ({ }) => ({
  headerLeft: () => (
    <View style={styles.headerLeftButtonsContainer}>
      <Text>Hello</Text>
      <Button >
        <Image source={Images.leftArrow} style={styles.headerLeft} />
      </Button>
    </View>
  ),
})


const IntroNavigator = createStackNavigator()
const IntroStack = () => {
  return (
    <IntroNavigator.Navigator
      screenOptions={{
        ...defaultNavigationOptions(),
      }}>
      <IntroNavigator.Screen name='IntroScreen' component={IntroScreen} />
    </IntroNavigator.Navigator>
  )
}

const HomeScreenNavigator = createStackNavigator()
const HomeScreenStack = () => {
  return (
    <HomeScreenNavigator.Navigator
   
      screenOptions={{
        ...defaultNavigationOptions(),
        // headerTitle: ''
      }}
      
      >
      <HomeScreenNavigator.Screen  name='Home' component={HomeScreen} />
      <HomeScreenNavigator.Screen name='CategoriesScreen' component={CategoriesScreen} />
      <HomeScreenNavigator.Screen name='StoresScreen' component={StoresScreen} />
      <HomeScreenNavigator.Screen name='StoreDetailsScreen' component={StoreDetailsScreen} />
      <HomeScreenNavigator.Screen name='AddStoreScreen' component={AddStoreScreen} />
      <HomeScreenNavigator.Screen name='AddBranchScreen' component={AddBranchScreen} />
      <HomeScreenNavigator.Screen name='AddMenuScreen' component={AddMenuScreen} />
      <HomeScreenNavigator.Screen name='BranchesScreen' component={BranchesScreen} />
      <HomeScreenNavigator.Screen name='MenusScreen' component={MenusScreen} />
      <HomeScreenNavigator.Screen name='QrCodeScreen' component={QrCodeScreen} />
      <FeedScreenNavigator.Screen name='FeedScreen' component={FeedScreen} options={{ headerShown: false }} />
      <HomeScreenNavigator.Screen  name='Product Details' component={ProductDetailsScreen} options={{ headerShown: false }}/>
      <HomeScreenNavigator.Screen  name='CustomerBranchesScreen' component={CustomerBranchesScreen} options={{ headerShown: false }}/>


    </HomeScreenNavigator.Navigator>
  )
}

const StoresScreenNavigator = createStackNavigator()
const StoresScreenStack = () => {
  return (
    <StoresScreenNavigator.Navigator
      screenOptions={{
        ...defaultNavigationOptions(),
        // headerTitle: ''
      }}>
      <StoresScreenNavigator.Screen name='StoresScreen' component={StoresScreen} />
      <StoresScreenNavigator.Screen name='CategoriesScreen' component={CategoriesScreen} />
      <StoresScreenNavigator.Screen name='StoreDetailsScreen' component={StoreDetailsScreen} />
    </StoresScreenNavigator.Navigator>
  )
}

const OrdersScreenNavigator = createStackNavigator()
const OrdersScreenStack = () => {
  return (
    <OrdersScreenNavigator.Navigator
    name='OrdersScreenStack'
      screenOptions={{
        ...defaultNavigationOptions(),
        // headerTitle: ''
      }}>
      <OrdersScreenNavigator.Screen name='OrdersScreen' component={OrdersScreen} />
    </OrdersScreenNavigator.Navigator>
  )
}

const QrCodeScreenNavigator = createStackNavigator()
const QrCodeScreenStack = () => {
  return (
    <QrCodeScreenNavigator.Navigator
      screenOptions={{
        ...defaultNavigationOptions(),
        // headerTitle: ''
      }}>
      <QrCodeScreenNavigator.Screen name='QrCodeScreen' component={QrCodeScreen} />
      <QrCodeScreenNavigator.Screen name='StoreDetailsScreen' component={StoreDetailsScreen} />
    </QrCodeScreenNavigator.Navigator>
  )
}

const FeedScreenNavigator = createStackNavigator()
const FeedScreenStack = () => {
  return (
    <FeedScreenNavigator.Navigator
      screenOptions={{
        ...defaultNavigationOptions(),
        // headerShown: false
        // headerTitle: ''
      }}>
      <FeedScreenNavigator.Screen name='FeedScreen' component={FeedScreen} options={{ headerShown: false }} />
      <StoresScreenNavigator.Screen name='StoreDetailsScreen' component={StoreDetailsScreen} />
      <HomeScreenNavigator.Screen  name='Home' component={HomeScreen} />

    </FeedScreenNavigator.Navigator>
  )
}

const ProfileScreenNavigator = createStackNavigator()
const ProfileScreenStack = () => {
  return (
    <ProfileScreenNavigator.Navigator
      screenOptions={{
        ...defaultNavigationOptions(),
        // headerTitle: ''
      }}>
      <ProfileScreenNavigator.Screen name='ProfileScreen' component={ProfileScreen} />
      <ProfileScreenNavigator.Screen name='SettingsScreen' component={SettingsScreen} />

      <ProfileScreenNavigator.Screen name='SignupScreen' component={SignupScreen} />
      <ProfileScreenNavigator.Screen name='OtpScreen' component={OtpScreen} />
      <OrdersScreenNavigator.Screen name='OrdersScreen' component={OrdersScreen} />
    </ProfileScreenNavigator.Navigator>
  )
}

// const Drawer = createDrawerNavigator();
// const MainStack = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={MainTabBarStack} />
//       <Drawer.Screen name="Contact" component={ProfileScreenStack} />
//     </Drawer.Navigator>
//   );
// }


const TabBarItem = ({ focused, color, imageSource, iconStyle = null, hasBadge = false }) => {
  let imageStyle = focused ? styles.focusedImage : styles.image
  if (iconStyle) {
    imageStyle = {
      ...imageStyle,
      ...iconStyle
    }
  }

  return (
    <>
      <Image source={imageSource} style={[imageStyle, { tintColor: color }]} />
      {/* <Icon name='earth' style={[imageStyle, { tintColor: color }]} /> */}
      {/* {hasBadge && AppStore.data && AppStore.data.notifications_count > 0 && <View style={styles.badge} />} */}
    </>
  )
}

TabBarItem.propTypes = {
  focused: PropTypes.bool,
  color: PropTypes.string,
  label: PropTypes.string,
  imageSource: PropTypes.number,
  iconStyle: PropTypes.object,
  hasBadge: PropTypes.bool,
}

const MainStackNaviagtor = createBottomTabNavigator()
const MainStack = ({ TEXTS,isVendor }) => {
  const animateOpacity = () => LayoutAnimation.configureNext({
    duration: 300,
    create:
    {
        type: 'easeInEaseOut',
        property: LayoutAnimation.Properties.opacity
    },
    delete:
    { type: 'easeInEaseOut',
    property: LayoutAnimation.Properties.opacity }, 
    
})
  useEffect(async () => {
    const registerAppWithFCM = async () => {
      await messaging().registerDeviceForRemoteMessages();
    };
  const language = await AsyncStorage.getItem('language')
  if(language){
    changeLanguage(language)
  }
    registerAppWithFCM();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      shopsStore.setNotifMessage(remoteMessage)
      animateOpacity()
    });
    messaging().setBackgroundMessageHandler(async remoteMessage => {

      shopsStore.setNotifMessage(remoteMessage)
     });
     messaging().getInitialNotification()
     .then(async remoteMessage => {
      shopsStore.setNotifMessage(remoteMessage)
     });
    return unsubscribe;
  }, []);
 
  
  const tabs = [
    { stack: HomeScreenStack, name: 'Home', imageSource: Images.tabBar.home, iconStyle: styles.homeIcon, isShownForVendor: true, isShownForCustomer: true },
    { stack: StoresScreenStack, name: 'Coffee', imageSource: Images.tabBar.coffeeCup, iconStyle: styles.homeIcon, isShownForVendor: false, isShownForCustomer: true },
    { stack: OrdersScreenStack, name: 'Orders', imageSource: Images.tabBar.cart, iconStyle: styles.homeIcon, isShownForVendor: true, isShownForCustomer: false },
    { stack: FeedScreenStack, name: 'Feed', imageSource: Images.tabBar.play, iconStyle: styles.feedIcon, isShownForVendor: true, isShownForCustomer: true },
    { stack: QrCodeScreenStack, name: 'QrCode', imageSource: Images.tabBar.scanQr, iconStyle: styles.homeIcon, isShownForVendor: true, isShownForCustomer: true },
    { stack: ProfileScreenStack, name: 'Profile', imageSource: Images.tabBar.person, iconStyle: styles.homeIcon, isShownForVendor: true, isShownForCustomer: true },

    // { stack: EmployeeDetailsStack, name: 'Dashboard', label: TEXTS.title1, imageSource: Images.tabBar.home, iconStyle: styles.dashboardIcon },
    // { stack: NotificationsStack, name: 'Notifications', label: TEXTS.title2, imageSource: Images.tabBar.notifications, hasBadge: true },
    // { stack: OthersStack, name: 'Others', label: TEXTS.title3, imageSource: Images.tabBar.manage, },
  ]
  
const navStackCallback = useCallback(()=>{

return <MainStackNaviagtor.Navigator
initialRouteName={'Home'}

tabBarOptions={{
  activeTintColor: Colors.tabBarBlue,
  inactiveTintColor: Colors.tabBarGrey,
  labelStyle: {
    fontSize: DimensionHelper.normalize(15),
    // fontFamily: 'Roboto-Medium'
  },
  tabStyle: {
    borderRightWidth: 1,
    borderRightColor: '#efedf3',
    zIndex:0
    // backgroundColor: 'red'
  },
  style: {
    backgroundColor: Colors.headerLightPink,
    paddingBottom:DimensionHelper.getHeight(20),
    height:DimensionHelper.getHeight(80),
    alignItems:'center',
    justifyContent:'center',
    zIndex:-10
 
    
  }
}}>
{tabs.map(({ name, isShownForVendor, isShownForCustomer, stack, label, ...props }, index) => (
  ((isVendor && isShownForVendor) || (!isVendor && isShownForCustomer)) && <MainStackNaviagtor.Screen key={`tab_${index}`} name={name} component={stack}
    options={({ route }) => ({
      tabBarLabel: () => { return null },
      tabBarVisible: ((route) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? ''
        if (routeName === 'Product Details') {
          return false
        }else return true

      })(route),
      tabBarIcon: (params: PropTypes.object) => {
        return (
          <TabBarItem {...params} {...props} />
        )
      }
    })
    }
  />
))
}
     
</MainStackNaviagtor.Navigator>
},[authStore.userType,isVendor])
  return (<>

  {navStackCallback()}
  
  </>
  )
  }
// MainStack.propTypes = {
//   // TEXTS: PropTypes.object
// }

export { MainStack, IntroStack }
