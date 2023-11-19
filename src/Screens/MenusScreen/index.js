/* eslint-disable no-magic-numbers */
import React, { Component, useCallback } from 'react'
import { View, ScrollView, Image,ActivityIndicator, ImageBackground, useWindowDimensions } from 'react-native'
import { observer } from 'mobx-react'
import { autorun } from 'mobx'
import PropTypes from 'prop-types'
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


@observer
class MenusScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  constructor(props) {
    super(props)

    this.state = {
      streak: 21,
      loading: false,
      position: 1,
      branch:this.props?.route?.params ? this.props?.route?.params?.branch : '',
      store:this.props?.route?.params ? this.props?.route?.params?.store : '',
      incrementor:0,
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
          : <Button onPress={() => navigation.navigate('AddMenuScreen',{name:this.props?.route?.params?.store,branch:this.props.route?.params?.branch})}><Image source={Images.plus} style={styles.plusIcon} /></Button>)
      }
    })
  }

  showSaluteTitle() {
    const isLoggedIn = authStore.user &&( authStore.user.username || authStore?.user?.user?.username)
    return (
      <View>
        <Text style={styles.title}>
          Hello {isLoggedIn ? 'Firas' : ''}
        </Text>
        <Text style={styles.subTitle}>
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
    await shopsStore.getStore({store:this.state.store,branch:this.state.branch}) // if vendor
    loadingModalStore.show = false
    this.setState({ loading: false })
    this.focusListener = this.props.navigation.addListener("focus",async () =>{
      await shopsStore.getStore({store:this.state.store,branch:this.state.branch})
      this.setState(prev=>({incrementor: prev.incrementor++}))
  } )


  }

  setInput(name, value) {
    this.setState({ [name]: value })
  }


  render() {
    const { navigate } = this.props.navigation
    const { loading,incrementor } = this.state

    const isCustomer = authStore.userType === 'customer'
    const isVendor = authStore.userType === 'vendor'
    const categoriesList = shopsStore.categoriesList && shopsStore.categoriesList
    const pickOfTheWeek = shopsStore.bannersList && shopsStore.bannersList[4] && shopsStore.bannersList[4].products
    const featuredCafes = shopsStore.bannersList && shopsStore.bannersList[3] && shopsStore.bannersList[3].stores
    const previousOrders = shopsStore.previousOrders && shopsStore.previousOrders

    const ShowStores = () =>{
      const isFocused = useIsFocused()
      const getVendorStoresCallback = useCallback(async ()=>{

        await shopsStore.getStore({store:this.state.store,branch:this.state.branch}) // if vendor
      },[shopsStore?.storesList?.length,isFocused,incrementor])
      getVendorStoresCallback()
        const { navigation } = this.props
        const {width} = useWindowDimensions()
        return (isVendor ?
          <View style={[styles.cardView,{flex:0}]}>
          {shopsStore.storeDetails && shopsStore.storeDetails.map((data, id) => {
          return (
          <View style={{paddingHorizontal:'2.5%',width:width,overflow:'hidden'}}>

            <SwiperFlatList data={['1']}  renderItem={()=>{
              return (
              <View style={{flexDirection:'row',width:width*1.1,paddingTop:20,height:130}}>
                  <HorizontalCard titleStyle={{fontSize:13}}  title={data.name} buttonText={''} onPress={() => navigation.navigate('MenusScreen', { data })} {...this.props} data={data} />
                 <TouchableOpacity style={{width:width/5,backgroundColor:Colors.middleBlue,justifyContent:'center',alignItems:'center',borderTopLeftRadius:10,borderBottomLeftRadius:10,height:'100%'}} onPress={()=>{shopsStore.disableProduct({ "store":this.state.store, "name":data?.name,"branch":this.state.branch,"enabled":false })}}>
               <Image source={Images.closeIcon}/>
              </TouchableOpacity>
              </View>)
             }} contentContainerStyle={{width:width*1.25,height:130}} />
            
           </View>
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
          ? <ActivityIndicator style={{ flex: 1, alignItems: 'center' }} size={'large'} color={'grey'} />
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
          </View>}

     
          <ShowStores />

   

      </ScrollView>

    )
  }
}

export default MenusScreen
