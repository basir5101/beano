

import React, { Component } from 'react'

// /* eslint-disable no-magic-numbers */
// import React, { Component, useCallback, useEffect } from 'react'
import { View, ScrollView, Image, StatusBar, LayoutAnimation, Modal, ActivityIndicator, ImageBackground, TouchableOpacity, Dimensions, Text } from 'react-native'
// import { Center, Container, NativeBaseProvider } from 'native-base'
// import { observer } from 'mobx-react'
// import { autorun } from 'mobx'
// import PropTypes from 'prop-types'
// import CountDown from 'react-native-countdown-component'
import Slideshow from 'react-native-image-slider-show'
// // import MapView from 'react-native-maps'
// import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

// import test from 'Constants/test'


// import { shopsStore, authStore, loadingModalStore, reviewModalStore } from 'Stores/StoreFactory'

// import TextInput from 'Components/TextInput'
import TextInput from '../../Components/TextInput'
// import Button from 'Components/Buttons/Button'
// import Card from 'Components/Card'
// import Text from 'Components/Text'
// import HorizontalCard from 'Components/Cards/HorizontalCard'
// import StreakView from 'Components/StreakView'

// import Colors from 'Constants/Colors'
import Images from '../../Assets/Images'
import styles from './styles'
// import { useIsFocused } from '@react-navigation/native'
// import SwiperFlatList from 'react-native-swiper-flatlist'
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
// import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import DimensionHelper from '../../Helpers/DimensionHelper'
// import AsyncStorage from '@react-native-community/async-storage'
import { t } from 'i18next'
import Card from '../../Components/Card'
import { categoriesList, shopsStore } from '../../Stores/fakeData'
import Colors from '../../Assets/Constants/Colors'


// @observer
class HomeScreen extends Component {
  // static propTypes = {
  //   navigation: PropTypes.object
  // }

  constructor(props) {
    super(props)

    this.state = {
      // streak: 21,
      loading: false,
      // position: 1,
      // incrementor: 0,
      // shouldShowReviewState: false,
      query: ''
    }
    // this.TEXTS = LanguageStore.textLocale
  }

  // // setHeader() {
  // //   const { navigation } = this.props
  // //   const isCustomer = authStore.userType === 'customer'
  //   const isLoggedIn = true // authStore.user && (authStore.user.username || authStore?.user?.user?.username)
  // //   navigation.setOptions({
  // //     headerTitle: () => null,
  // //     headerLeft: () => <View style={styles.headerLeftButtonsContainer}><Text></Text></View>,
  // //     headerRight: () => {
  // //       return (isLoggedIn
  // //         ? isCustomer ? <StreakView title={'title'} description={'description'} />
  // //           : <Button onPress={() => navigation.navigate('AddStoreScreen')}><Image source={Images.plus} style={styles.plusIcon} /></Button> : null)
  // //     }
  // //   })
  // // }
  // componentWillMount() {
  //   const isCustomer = authStore.userType === 'customer'
  //   isCustomer &&  setInterval(() => {
  //     this.setState({
  //       position: this.state.position === shopsStore?.slides?.length - 1 ? 0 : this.state.position + 1
  //     });
  //   }, 3000)

  // }

  // componentWillUnmount() {
  //   clearInterval(this.state.interval);
  // }

  showSaluteTitle() {
    // const isLoggedIn = authStore.user && (authStore.user.username || authStore?.user?.user?.username)
    return (
      <View>
        <Text style={styles.title}>
          {t('home.title')} {'Abdul'}
        </Text>
        <Text style={styles.subTitle}>
          {t('home.subtitle')}
        </Text >
      </View>
    )
  }



  // async componentDidMount() {
  //   this.setHeader()
  //   // AsyncStorage.removeItem('userData')
  //   const FCMToken = await AsyncStorage?.getItem('FCMToken')
  //   const isCustomer = authStore.userType === 'customer'

  //   await authStore.getUserDataFromStorage()
  //  if (!FCMToken)  shopsStore?.generateToken()
  //  this.setState({loading:true})
  //       const promises = [shopsStore.getReels(),
  //        isCustomer ? shopsStore.getCategoriesList() : ()=>null,
  //        isCustomer ? shopsStore.getBannerView() : ()=>null,
  //        isCustomer ? shopsStore.getPreviousOrders() : ()=>null,
  //        shopsStore.getVendorStores(),
  //        isCustomer ? shopsStore.getStreak() : ()=>null,
  //        isCustomer ? shopsStore?.getSlides() : () => null,
  //         authStore.checkToken(),
  //         shopsStore.checkStoreIntroScreen(),
  //         isCustomer ? shopsStore?.getCustomerPendingOrders() : ()=>null]
  //         Promise.all(promises).then(()=>this.setState({loading:false})).catch(()=>this.setState({loading:false}))


  //   this.focusListener = this.props.navigation.addListener("focus", async () => {
  //     this.setState({ subtotal: 0 })
  //     this.setState({query:''})
  //     await shopsStore.getVendorStores({ "vendor": authStore?.user?.user?.email || authStore.user?.email || "" })
  //     isCustomer &&  await shopsStore.getStreak()

  //     this.setState(prev => ({ incrementor: prev.incrementor + 1 }))
  //   })


  // }






  render() {
    const { navigate } = this.props.navigation
    // // this.setHeader()

    // // const getReview = async () => {
    // //   const shouldShowReview = await AsyncStorage?.getItem('gotNotification')
    // //   if (shouldShowReview == 'true') {
    // //     reviewModalStore?.open(
    // //       {
    // //         Component: (
    // //           <></>
    // //         )
    // //       }
    // //     )
    // //   }
    // // }
    // // const ModalCallBack = () => {
    // //   useEffect(() => {

    // //     getReview()

    // //   }, [])
    // // }

    // // const NotifInApp = () => {

    // //   const compCallback = useCallback(() => {


    // //     return (shopsStore?.notifMessage?.notification?.title || shopsStore?.notifMessage?.notification?.body) ? <View style={{ width: '90%', backgroundColor: 'white', borderRadius: 20, paddingTop: 1, position: 'absolute', zIndex: 19999, flexDirection: 'column', minHeight: 170, borderWidth: 1, borderColor: Colors?.lightPink,alignSelf:'center' }}>
    // //       <View style={{ width: '100%', backgroundColor: Colors?.middleBlue, borderTopRightRadius: 20, borderTopLeftRadius: 20, height: 50, paddingLeft: 10, justifyContent: 'center', marginBottom: 10 }}>
    // //         <Text style={{ fontWeight: '800', color: 'white' }}>{shopsStore?.notifMessage?.notification?.title}</Text>
    // //       </View>

    // //       <Text style={{ color: Colors?.middleBlue, textTransform: 'capitalize', paddingLeft: 10 }}>
    // //         {shopsStore?.notifMessage?.notification?.body}
    // //       </Text>
    // //       <View style={{ alignItems: 'flex-end', width: '100%', paddingRight: 10 }}>
    // //         <TouchableOpacity style={{ width: '20%', backgroundColor: Colors?.middleBlue, borderRadius: 5, paddingHorizontal: 10, paddingVertical: 5, position: 'relative', top: 5, zIndex: 100000 }} onPress={async () => {
    // //          if(!!shopsStore?.notifMessage?.notification?.android?.clickAction && shopsStore?.notifMessage?.notification?.android?.clickAction?.toLowerCase() == 'review') {
    // //           loadingModalStore.show = true

    // //           await shopsStore.getCategoriesList()
    // //           loadingModalStore.show = false

    // //           shopsStore?.setNotifMessage({})
    // //           reviewModalStore?.open(
    // //             {
    // //               Component: (
    // //                 <></>
    // //               )
    // //             }
    // //           )
    // //         }
    // //         else return  shopsStore?.setNotifMessage({})

    // //         }}>
    // //           <Text style={{ color: 'white', textAlign: 'center' }}>Ok</Text>
    // //         </TouchableOpacity>
    // //       </View>
    // //     </View> : null
    // //   }, [shopsStore?.notifMessage,loading])
    // //   return compCallback()
    // // }
    const { query } = this.state
    // // const isCustomer = authStore.userType === 'customer'
    // // const isVendor = authStore.userType === 'vendor'
    // // const categoriesList = shopsStore.categoriesList && shopsStore.categoriesList?.filter((item) => query ? item?.name?.toLowerCase()?.includes(query?.toLowerCase()) : item)
    const pickOfTheWeek = shopsStore.bannersList;
       // shopsStore.bannersList && shopsStore.bannersList[4] && shopsStore.bannersList[4].products?.filter((item) => query ? item?.title?.toLowerCase()?.includes(query?.toLowerCase()) : item)
    const featuredCafes = shopsStore.bannersList
    // shopsStore.bannersList && shopsStore.bannersList[3] && shopsStore.bannersList[3].stores?.filter((item) => query ? item?.title?.toLowerCase()?.includes(query?.toLowerCase()) : item)
    const previousOrders = shopsStore.previousOrders && shopsStore.previousOrders

    // // const ShowStores = () => {

      const { navigation } = this.props
    // //   const { width } = useWindowDimensions()
    //   return (isVendor ?
    //     <View style={[styles.cardView]}>
    //       {shopsStore.storesList && shopsStore.storesList.filter(item=>!!item?.enabled)?.map((item, id) => {
    //         return (
    //           <View style={{ paddingHorizontal: '2.5%', width: width, overflow: 'hidden' }}>

    //             <SwiperFlatList data={['1']}
    //               renderItem={() => {
    //                 return (
    //                   <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'flex-start', paddingTop: 20, height: DimensionHelper.getHeight(130) }}>
    //                     <HorizontalCard containerStyle={{width:'100%',alignSelf:'center',marginTop:20}}  title={item.name} buttonText={'Branches'} onPress={() => navigation.navigate('BranchesScreen', { store: item?.name })} {...this.props} data={item} />
    //                     <TouchableOpacity style={{ width: width / 5, backgroundColor: Colors.middleBlue, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, height: '100%' }} onPress={() => { shopsStore.disableStore({ "store": item?.name, "enabled": false }) }}>
    //                       <Image source={Images.closeIcon} />
    //                     </TouchableOpacity>
    //                   </View>)
    //               }} contentContainerStyle={{ width: width * 1.2 }} />
    //           </View>

    //         )
    //       })}
    //     </View> : null)

    // }

    // const loading = this.state.loading
    return (

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
      // style={styles.mainView}
      >
        <Text>Home</Text>
        {/* <ModalCallBack /> */}

        {
          <View style={styles.titleView}>
            {this.showSaluteTitle()}

            <TextInput
              value={query}
              containerStyle={styles.searchInput}
              iconLeft={{ source: Images.search, isImage: true }}
              onChangeText={(field, val) => this.setState({ query: val })}
              placeholder={t('home.searchbar')} isFullWidth={true} />
          </View>
        }


        {/* {
          loading
          ? <View style={{ backgroundColor: 'white', flex: 1, borderTopRightRadius: 35, borderTopLeftRadius: 35, paddingTop: 30, paddingHorizontal: 10 }}>
            <SkeletonPlaceholder borderRadius={4} marginBottom={20}>
              <SkeletonPlaceholder.Item flexDirection='column'>
                <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" marginBottom={20} justifyContent='space-between' paddingHorizontal={10}>
                  <SkeletonPlaceholder.Item width={60} height={20} borderRadius={1} />
                  <SkeletonPlaceholder.Item width={60} height={20} borderRadius={1} />
                </SkeletonPlaceholder.Item>
                <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" justifyContent='flex-start'>
                  <SkeletonPlaceholder.Item width={100} height={70} borderRadius={15} marginRight={15} />
                  <SkeletonPlaceholder.Item width={100} height={70} borderRadius={15} marginRight={15} />
                  <SkeletonPlaceholder.Item width={100} height={70} borderRadius={15} marginRight={15} />
                  <SkeletonPlaceholder.Item width={100} height={70} borderRadius={15} marginRight={15} />

                </SkeletonPlaceholder.Item>
                <SkeletonPlaceholder.Item width={150} height={20} borderRadius={1} marginTop={30} />
                <SkeletonPlaceholder.Item width={Dimensions.get('window').width / 3} height={Dimensions.get('window').height / 3} borderRadius={15} marginTop={30} />


              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
          </View>
          : isCustomer && */}

        <View
          // style={styles.cardView}
        >
            {/* <Button onPress={() => navigate('CategoriesScreen')}><Text>Hello</Text></Button> */}
          <Card
            hasNavigationHeader={true}
            isCategories={true}
            titleStyles={{ fontSize: 20 }} isSmall={true} data={categoriesList.stores} cardHeader={t('home.pick_a_vibe')} isLongList={true} cardTitle={'Vegan'} onPress={() => navigate('CategoriesScreen')} onCardPress={(data) => navigate('StoresScreen', { data })} />
            <Card hasNavigationHeader={true} isVideo={true} isEntertained={true} titleStyles={{ fontSize: 20 }} isVertical={true} cardHeader={t('home.entertained')} onCardPress={(item, index) => this?.props?.navigation?.navigate('Feed', { firstItem: index })} />

             <View styles={{ height: 100, borderRadius: 25, borderWidth: 1, }}>

              <Text style={{ fontSize: 20, color: Colors.darkBrown, marginLeft: 20, marginVertical: 20 }}>{t('home.onstreet')}</Text>

              <Slideshow
                position={this.state.position}
                arrowSize={0}
                containerStyle={styles.imageSlider}
                onPositionChanged={position => {
                  this.setState({ position })

                }}
                hegiht={50}
                dataSource={shopsStore?.slides?.map((item) => { return { ...item, url: item?.image } })} />
            </View>
          
            <Card titleStyles={{ fontSize: 25 }} hasNavigationHeader={true} data={pickOfTheWeek} cardHeader={t('home.spoken')} hasSubtitle={true} subTitle={'By Starbucks'} cardTitle={'Vegan'} isLongList={true} onPress={() => navigate('CategoriesScreen', { data: pickOfTheWeek, isCoffees: true })} onCardPress={(data) => this?.props?.navigation?.navigate('Product Details', { data })} />
          
          <Text style={{ color: Colors?.orangeBrown, marginLeft: 20, fontSize: DimensionHelper.normalize(20), }}>{t('home.close')}</Text>
          
            <ImageBackground imageStyle={{ borderRadius: 29 }} resizeMode="cover" style={{ marginTop: 20, height: 150, marginHorizontal: 10 }} source={Images.nearbyMaps}>

              <Text style={{ fontSize: 30, color: Colors.darkBrown, marginTop: 50, marginLeft: 250 }}>Nearby</Text>
            </ImageBackground>
         
            {previousOrders.length > 0 && <Card data={shopsStore.previousOrders} titleStyles={{ fontSize: 20 }} hasNavigationHeader={true} cardHeader={'Run It Back'} isLongList={false} />}
          
            <Card onCardPress={(data) => navigate('CustomerBranchesScreen', { data })} hasNavigationHeader={true} isLongList={true} data={featuredCafes} isPreviousOrders={true} titleStyles={{ fontSize: 20 }} cardHeader={t('home.popular')} cardTitle={'Vegan'} onPress={() => navigate('CategoriesScreen', { data: featuredCafes, isFeat: true })} />
          </View>
        {/* } */}

        {/* {!loading && <>
        <ShowStores />
        <NotifInApp />
        
        </>} */}



      </ScrollView>

    )
  }
}

export default HomeScreen
