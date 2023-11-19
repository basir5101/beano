/* eslint-disable no-magic-numbers */
import React, { Component } from 'react'
import { View, ScrollView, Image, Dimensions,Alert, TouchableOpacity } from 'react-native'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { shopsStore, loadingModalStore,authStore } from 'Stores/StoreFactory'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Text from 'Components/Text'
import HorizontalCard from 'Components/Cards/HorizontalCard'
import StreakView from 'Components/StreakView'
import OrdersIntroScreen from './OrdersIntroScreen'

import Images from '../../Assets/Images'
import styles from './styles'
import Colors from '../../Assets/Constants/Colors'


@observer
class StoreDetailsScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      discount:5
    }
    // this.TEXTS = LanguageStore.textLocale
  }

  setHeader() {
    const { navigation } = this.props

    navigation.setOptions({
      headerTitle: () => <View></View>,
      // headerLeft: () => <View style={styles.headerLeftButtonsContainer}></View>,
      headerRight: () => {
        return (<StreakView title={'title'} description={'description'} />)
      },
      headerVisible: shopsStore.showIntroScreen ? false : true,
      headerShown: shopsStore.showIntroScreen ? false : true
    })
  }


  async componentDidMount() {
    const { name, store } = this.props.route.params.data
    this.setHeader()
    this.setState({ loading: true })
    await shopsStore.getStore({
      "store": store,
      "branch": name,
    })
    
    this.setState({ loading: false })
  }

  async requestProduct(data) {
    const { name, store } = this.props.route.params.data
    const { navigation } = this.props
    loadingModalStore.show = true
    await shopsStore.requestProduct(data)
    const res = await shopsStore.addCustomerPendingOrders(data)
    if(res?.success) navigation.navigate('QrCode', {retry:1,discount:this.props.route.params.data?.discount ?? 15,store:store,name:name})
    loadingModalStore.show = false
  }
  showCards() {
    const { navigate } = this.props.navigation
    const isLoggedIn = authStore.user &&( authStore.user.username || authStore?.user?.user?.username)
    return (shopsStore.storeDetails && shopsStore.storeDetails.filter(item=>!!item?.enabled)?.map((data, id) => {
      return (
        <View style={{alignSelf:'center',marginBottom:10}}>
      <HorizontalCard onImagePress={()=>navigate('Product Details',{data:data})} key={id} hasPrice={true} price={`AED ${data?.options?.[0]?.values?.[0]?.price}`} title={'Spanish Latte'} buttonText={'Add'} onPress={() => isLoggedIn ?  this.requestProduct(data) : Alert.alert('You should be logged in')} {...data} {...this.props} data={data} />
      </View>
      )
    })
    )
  }


  render() {
    const { name, image, title,feedback} = this.props.route.params.data
    const { loading } = this.state
    this.setHeader()
    console.log(feedback)
    
    return (
      <View style={styles.mainView}>
        {!shopsStore.showStoreIntroScreen
          ? <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={[styles.titleView,{height:320,width:'100%'}]}>
            <TouchableOpacity onPress={()=>this?.props?.navigation?.goBack()} style={{zIndex:100,width:'10%',position:'absolute',left:20,top:20}}>
          <MaterialIcons name='arrow-back-ios'size={30} color={Colors.middleBlue} />
          </TouchableOpacity>
              <Image source={{ uri: image }} style={[styles.cardImage,{height:'100%',width:'100%',resizeMode:'cover'}]} />
          
             
            </View>

            <View style={[styles.cardView,{position:'relative',top:-40}]}>

              {/* <Card /> */}
              <View style={styles.headerView}>
                <Text style={styles.storeName}>{title}</Text>
                <Text style={styles.storeLocation}>Abu Dhabi  |  3.0 km</Text>
              </View>

              <View style={styles.subHeaderView}>
                <View style={styles.ratingView}>
                  <View style={styles.rating}>
                    <Image source={Images.star} style={styles.starRatingImage} />
                    <Text style={styles.ratingScore}>{feedback?.rank || 0}</Text>
                  </View>
                  <Text style={styles.ratingsCount}>{feedback?.totalCount || 0} ratings</Text>
                </View>

                <Image source={Images.speedingCar} style={styles.deliveryImage} />
                <Text style={styles.distanceToStore}>28 min away</Text>
              </View>

              <View style={styles.lineSeparator}></View>

              <View style={styles.menuTitleView}>
                <Text style={styles.menuTitle}>Beverages</Text>
              </View>

              {loading
                ? <View style={{backgroundColor:'white',flex:1,borderTopRightRadius:35,borderTopLeftRadius:35,paddingTop:30, paddingHorizontal:10}}>
                <SkeletonPlaceholder borderRadius={4} marginBottom={20}>
                 <SkeletonPlaceholder.Item flexDirection='column' paddingLeft={'2.5%'}>
                 <SkeletonPlaceholder.Item width={Dimensions.get('window').width/1.1} height={100} borderRadius={15} marginRight={15} marginBottom={25}/>
                 <SkeletonPlaceholder.Item width={Dimensions.get('window').width/1.1} height={100} borderRadius={15} marginRight={15} marginBottom={25}/>
                 <SkeletonPlaceholder.Item width={Dimensions.get('window').width/1.1} height={100} borderRadius={15} marginRight={15} marginBottom={25}/>
                 <SkeletonPlaceholder.Item width={Dimensions.get('window').width/1.1} height={100} borderRadius={15} marginRight={15} marginBottom={25}/>
              
               </SkeletonPlaceholder.Item>
             </SkeletonPlaceholder>
             </View>
                : this.showCards()}

            </View>
          </ScrollView>
          : <OrdersIntroScreen name={name}/>}
      </View>

    )
  }
}

export default StoreDetailsScreen
