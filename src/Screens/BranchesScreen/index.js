/* eslint-disable no-magic-numbers */
import React, { Component, useCallback } from 'react'
import { View, ScrollView, Image, StatusBar, RefreshControl, Modal, ActivityIndicator, ImageBackground, useWindowDimensions } from 'react-native'
import { Center, Container, NativeBaseProvider } from 'native-base'
import { observer } from 'mobx-react'
import { autorun } from 'mobx'
import PropTypes from 'prop-types'
import CountDown from 'react-native-countdown-component'
import Slideshow from 'react-native-image-slider-show'
// import MapView from 'react-native-maps'

import test from 'Constants/test'


import { shopsStore, authStore, loadingModalStore } from 'Stores/StoreFactory'

import TextInput from 'Components/TextInput'
import Button from 'Components/Buttons/Button'
import Card from 'Components/Card'
import Text from 'Components/Text'
import HorizontalCard from 'Components/Cards/HorizontalCard'
import StreakView from 'Components/StreakView'

import Colors from 'Constants/Colors'
import Images from '../../Assets/Images'
import styles from './styles'
import { useIsFocused } from '@react-navigation/native'
import SwiperFlatList from 'react-native-swiper-flatlist'
import { TouchableOpacity } from 'react-native-gesture-handler'
import DimensionHelper from '../../Helpers/DimensionHelper'


@observer
class BranchesScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  constructor(props) {
    super(props)

    this.state = {
      streak: 21,
      loading: false,
      position: 1,
      incrementor:0,
      store:this.props?.route?.params ? this.props?.route?.params?.store : '',
    }
    // this.TEXTS = LanguageStore.textLocale
  }

  setHeader() {
    const { navigation } = this.props
    const isCustomer = authStore.userType === 'customer'


    navigation.setOptions({
    headerTitle: () => <View><Text style={[styles.headerText,{color:'black'}]}>{isCustomer ? 'Hello Firas' : 'Hello Firas'}</Text></View>,
      headerLeft: () => <View style={styles.headerLeftButtonsContainer}></View>,
      headerRight: () => {
        return (isCustomer
          ? <StreakView title={'title'} description={'description'} />
          : <Button onPress={() => navigation.navigate('AddBranchScreen',{name:this.props?.route?.params?.store})}><Image source={Images.plus} style={styles.plusIcon} /></Button>)
      }
    })
  }

  showSaluteTitle() {
    const isLoggedIn = authStore.user &&( authStore.user.username || authStore?.user?.user?.username)
    return (
      <View>
        <Text style={[styles.title,{color:'black'}]}>
          Hello {isLoggedIn ? 'Firas' : ''}
        </Text>
        <Text style={[styles.subTitle,{color:'black'}]}>
          Feeling a coffee?
        </Text >
      </View>
    )
  }

  // componentWillMount() {
  //   this.setState({
  //     interval: setInterval(() => {
  //       this.setState({
  //         position: this.state.position + 1
  //       });
  //     }, 4000)
  //   });
  // }

  async componentDidMount() {
    autorun(() => this.setHeader())

    loadingModalStore.show = true
    await shopsStore.getBranchesList({"store":this.state.store,"vendor":this.state.vendor}) // if vendor
    loadingModalStore.show = false
    this.setState({ loading: false })
    this.focusListener = this.props.navigation.addListener("focus",async () =>{
      this.setState({subtotal:0})
      await shopsStore.getBranchesList({"store":this.state.store,"vendor":this.state.vendor})
      this.setState(prev=>({incrementor: prev.incrementor++}))
  } )


  }

  render() {
    const { navigate } = this.props.navigation
    const { loading,store } = this.state
    const isCustomer = authStore.userType === 'customer'
    const isVendor = authStore.userType === 'vendor'
    const categoriesList = shopsStore.categoriesList && shopsStore.categoriesList
    const pickOfTheWeek = shopsStore.bannersList && shopsStore.bannersList[4] && shopsStore.bannersList[4].products
    const featuredCafes = shopsStore.bannersList && shopsStore.bannersList[3] && shopsStore.bannersList[3].stores
    const previousOrders = shopsStore.previousOrders && shopsStore.previousOrders
   
    const ShowStores = () =>{
      const isFocused = useIsFocused()
      const getBranchesListCallback = useCallback(async ()=>{

        await shopsStore.getBranchesList({"store":this.state.store}) // if vendor
      },[shopsStore?.branchesList?.length,isFocused,this.state.incrementor])
      getBranchesListCallback()
        const { navigation } = this.props
      const {width} = useWindowDimensions()

        return (isVendor ?
          <View style={{paddingHorizontal:'2.5%',width:width,overflow:'hidden'}}>
          {shopsStore.branchesList && shopsStore.branchesList.filter(item=>!!item?.enabled)?.map((data, id) => {
          return (
            <SwiperFlatList data={['1']}  renderItem={()=>{
              return (
              <View style={{flexDirection:'row',width:width*1.1,alignSelf:'flex-start',paddingTop:20,height:DimensionHelper.getHeight(150)}}>
                   <HorizontalCard containerStyle={{width:width/1.05,height:DimensionHelper.getHeight(150)}} titleStyle={{fontSize:13}}  title={data.name} buttonText={'Menus'} onPress={() => navigation.navigate('MenusScreen', { store:this.state.store, branch:data?.name })} {...this.props} data={data} />
                 <TouchableOpacity style={{width:width/5,backgroundColor:Colors.middleBlue,justifyContent:'center',alignItems:'center',borderTopLeftRadius:10,borderBottomLeftRadius:10,height:'100%'}} onPress={()=>{shopsStore.disableBranch({ "store":this.state.store, "name":data?.name,"enabled":false })}}>
               <Image source={Images.closeIcon}/>
              </TouchableOpacity>
              </View>)
             }} contentContainerStyle={{width:width*1.25,}} />
         
           
          )
        })}
        </View>  : null)
      
    }

    return (

      <ScrollView contentContainerStyle={{ flexGrow: 1,backgroundColor:'white' }} style={styles.mainView}>
        {isCustomer && <View style={styles.titleView}>
          {this.showSaluteTitle()}

          <TextInput
            containerStyle={styles.searchInput}
            iconLeft={{ source: Images.search, isImage: true }}
            placeholder={'Find your favorite coffee'} isFullWidth={true} />
        </View>}


        {loading
          ? <ActivityIndicator style={{ flex: 1, alignItems: 'center'}} size={'large'} color={'grey'} />
          : isCustomer && <View style={styles.cardView}>
            {/* <Button onPress={() => navigate('CategoriesScreen')}><Text>Hello</Text></Button> */}
            <Card hasNavigationHeader={true} isSmall={true} data={categoriesList} cardHeader={'Categories'} isLongList={true} cardTitle={'Vegan'} onPress={() => navigate('CategoriesScreen')} onCardPress={(data) => navigate('StoresScreen', { data })} />
            <Card hasNavigationHeader={true} isVideo={true} isVertical={true} cardHeader={'Watch Again'} onCardPress={() => navigate('Feed',{ firstItem : 2 })} />

            <View styles={{ height: 100, borderRadius: 25, borderWidth: 1, }}>

              <Text style={{ fontSize: 20, color: Colors.darkBrown, marginLeft: 20, marginVertical: 20 }}>What's Happening</Text>

              <Slideshow
                position={this.state.position}
                containerStyle={styles.imageSlider}
                onPositionChanged={position => this.setState({ position })}
                hegiht={50}
                dataSource={[
                  { url: test.image },
                  { url: test.image }
                ]} />
            </View>

            <Card hasNavigationHeader={true} data={pickOfTheWeek} cardHeader={"What's Hot"} hasSubtitle={true} subTitle={'By Starbucks'} cardTitle={'Vegan'} onPress={() => navigate('CategoriesScreen')} onCardPress={() => console.log('')} />

            <ImageBackground imageStyle={{ borderRadius: 29 }} resizeMode="cover" style={{ marginTop: 20, height: 150, marginHorizontal: 10 }} source={Images.nearbyMaps}>

              <Text style={{ fontSize: 30, color: Colors.darkBrown, marginTop: 50, marginLeft: 250 }}>Nearby</Text>
            </ImageBackground>

            {previousOrders.length > 0 && <Card data={shopsStore.previousOrders} hasNavigationHeader={true} cardHeader={'Order again'} isLongList={false} />}
            <Card hasNavigationHeader={true} data={featuredCafes} cardHeader={'Featured cafes'} cardTitle={'Vegan'} onPress={() => navigate('CategoriesScreen')} onCardPress={(data) => navigate('StoreDetailsScreen', { data })} />
            {/* <Card hasNavigationHeader={true} cardHeader={'Barista Classes'} hasSubtitle={true} subTitle={'a store making coffee classes a unique experience'} cardTitle={'SkillDeer'} /> */}
            {/* <Card hasNavigationHeader={true} cardHeader={'Watch again'} /> */}


          </View>}

     
          <ShowStores />

   

      </ScrollView>

    )
  }
}

export default BranchesScreen
