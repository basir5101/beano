/* eslint-disable no-magic-numbers */
import React, { Component, useEffect} from 'react'
import { View, Image,TouchableOpacity,Dimensions,LayoutAnimation, ScrollView,Alert, Pressable } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { shopsStore, authStore } from 'Stores/StoreFactory'

import Text from 'Components/Text'
import StreakView from 'Components/StreakView'

import Colors from 'Constants/Colors'
import Images from '../../Assets/Images'
import styles from './styles'
import { RNCamera } from 'react-native-camera'
import OrderItem from '../../Components/Cards/OrderItem/orderItem'
import { SwiperFlatList } from 'react-native-swiper-flatlist';

import { bottomModalStore } from '../../Stores/StoreFactory'

@observer
class QrCodeScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  constructor(props) {
    super(props)

    this.state = {
      streak: 21,
      isCameraVisible: true,
      recording: false,
      loading: false,
      title: '',
      notes: [],
      subtotal:0,
      discount:shopsStore?.streakDetails?.userDiscount || this.props?.route?.params?.discount || 15,
      retry:0,
      total:0,
      warningModal: false,
      employeePressable: true,
      textToSearch: '',
      cartId: '',
      showBottomSheet:false
    }
    // this.TEXTS = LanguageStore.textLocale
  }

  setHeader() {
    const { navigation } = this.props
    const isVendor = authStore.userType === 'vendor'

    navigation.setOptions({
      headerTitle: () => <View><Text style={{color:'black'}}>{isVendor ? 'Redeem Cart' : ''}</Text></View>,
      headerLeft: () => <Pressable onPress={()=>navigation.goBack()} style={{height:20,width:20, marginLeft:20}}><Image style={{height:'100%',width:'100%'}} source={Images.leftArrow} /></Pressable>,
      headerRight: () => {
        return (!isVendor ? <StreakView title={'title'} description={'description'} /> : <View />)
      }
    })
  }

  showSaluteTitle() {
    return (
      <View>
        <Text style={styles.title}>
          Hello Leila
        </Text>
        <Text style={styles.subTitle}>
          Feeling a coffee?
        </Text >
      </View>
    )
  }

  componentDidMount() {
    this.setHeader()
     shopsStore.getCustomerPendingOrders()
     shopsStore?.customerPendingOrders?.length > 0 &&  shopsStore?.customerPendingOrders?.map((item)=> item?.items?.map((obj)=>this.setState(prev=>({subtotal:(Number(prev.subtotal) + Number(obj.options?.[0]?.selected?.[0]?.price)*obj?.quantity).toFixed(2)}))))
     this.focusListener = this.props.navigation.addListener("focus", () =>{
      this.setState({subtotal:0})
    shopsStore.getCustomerPendingOrders()
    shopsStore?.customerPendingOrders?.length > 0 &&  shopsStore?.customerPendingOrders?.map((item)=> item?.items?.map((obj)=>this.setState(prev=>({subtotal:(Number(prev.subtotal) + Number(obj.options?.[0]?.selected?.[0]?.price)*obj?.quantity).toFixed(2)}))))
  } 
  );
    
  } 
 
  setInput(name, value) {
    this.setState({ [name]: value })
  }
  showSubtotal(subtotal){
    const {width} = Dimensions.get('window')
    return <View>
    <View style={{width:width,padding:20,justifyContent:'space-between',flexDirection:'row'
  }}>
    <Text style={{color:Colors.middleBlue,fontWeight:'800',fontSize:16}}>Subtotal  </Text>
    <Text style={{color:Colors.middleBlue,fontWeight:'800',fontSize:16}}>AED {subtotal}</Text>
    </View>
    <View style={{width:width,padding:20,justifyContent:'space-between',flexDirection:'row'
  }}>
    <Text style={{color:Colors.middleBlue,fontWeight:'800',fontSize:16}}>Discount {this?.state?.discount ?? 0}% </Text>
    <Text style={{color:Colors.middleBlue,fontWeight:'800',fontSize:16}}>- AED {(subtotal * this.state.discount).toFixed(2)/100}</Text>
    </View>
    <View style={{width:width,padding:20,justifyContent:'space-between',flexDirection:'row'}}>
    <Text style={{color:Colors.middleBlue,fontWeight:'800',fontSize:16}}>Total  </Text>
    <Text style={{color:Colors.middleBlue,fontWeight:'800',fontSize:16}}>AED {(subtotal - (subtotal * this.state.discount)/100).toFixed(2)}</Text>
    </View>
  </View>
  }

  render() {
    const isVendor = authStore.userType === 'vendor'
    const { navigation } = this.props
    const {width} = Dimensions.get('window')
    const {height} = Dimensions.get('window')
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
  const ShowOrders = ({obj,index,item}) =>{
    return obj?.quantity > 0 ? <View style={{flexDirection:'row',height:150,marginBottom:10,marpaddingTop:20,width:width*1.25}}>
    <OrderItem onPlusPress={()=>{
     shopsStore?.changeQuantity(index,true,false,obj,item?.branch,item?.store)
    }} 
    onMinusPress={()=>shopsStore?.changeQuantity(index,false,true,obj,item?.branch,item?.store)} style={{alignSelf:'center',}} quantity={obj.quantity} price={obj.options?.[0]?.selected?.[0]?.price} key={Math.random().toString()} hasSubtitle={true} hasPrice={true} key={Math.random().toString()} title={obj.productName} buttonText={''} {...this.props} image={obj.image}  data={obj} />
    <TouchableOpacity style={{width:width/5,backgroundColor:Colors.middleBlue,justifyContent:'center',alignItems:'center',borderTopLeftRadius:10,borderBottomLeftRadius:10,height:'90%'}}>
     <Image source={Images.closeIcon}/>
    </TouchableOpacity>
    </View> : null
  }
  const Comp = () =>{
    shopsStore.getCustomerPendingOrders()
    return <View style={{width:width,backgroundColor:'#fff',alignItems:'center'}}>
   {shopsStore?.cartTicket ? <QRCode
     size={200}
     value={shopsStore?.cartTicket}
   /> :  null}
   <Text style={{textAlign:'center',paddingHorizontal:20,marginVertical:20,color:Colors.middleBlue,fontSize:22}}>You can claim your discount by showing this QR code to the vendor</Text>

   </View>
  }
  const customerPendingOrders = shopsStore?.customerPendingOrders
  const isLoggedIn = !!authStore?.user && !!( authStore.user.username || authStore?.user?.user?.username)
  console.log(customerPendingOrders[0].items.length)
    let subtotal = 0
    customerPendingOrders?.length > 0 && customerPendingOrders?.[0]?.items?.map((item)=>subtotal += (Number(item.options?.[0]?.selected?.[0]?.price)*item?.quantity).toFixed(2))
    return (

      <View style={[styles.mainView,isVendor ?{    alignItems: 'center',
      justifyContent: 'center',}:{}]}>
        {!isVendor
          ? <View style={styles.cardView}>
            {/* <Card /> */}
            {/* <Image source={Images.BeanoQrCode} style={styles.qrCode} /> */}
            {(!isVendor ?
          <View style={styles.cardView}>
            {/*  */}
            <ScrollView style={{flexGrow:1}}>
            <View style={{paddingHorizontal:'2.5%',width:width,overflow:'hidden'}}>
          {isLoggedIn && customerPendingOrders?.length > 0 && customerPendingOrders.map((item, id) => {
            return item?.items?.map((obj,index)=> {
         
          return  <SwiperFlatList data={['1']}  renderItem={()=>{
            return (
            
              <ShowOrders index={index} item={item} obj={obj}/>
            )
           }} contentContainerStyle={{width:'125%'}} />
           })
          
        })}
          </View>

        </ScrollView>
        <View style={{position:'relative',bottom:0, width:'100%',alignItems:'center'}}>
          {this.showSubtotal(Number(subtotal).toFixed(2))}
          <View style={{width:width,backgroundColor:Colors.lightPink,height:70,alignItems:'center',flexDirection:'row',justifyContent:'space-around'}}>
          <Text style={{color:Colors.middleBlue,fontWeight:'800',width:'40%',textAlign:'center',fontSize:16}}>AED {(subtotal - (subtotal * this.state.discount)/100).toFixed(2)}</Text>
          <TouchableOpacity onPress={()=>{
            animateOpacity()
            shopsStore?.cartTicket ?
            bottomModalStore?.open({
              Component: (

                  <Comp />
              )
            }) : Alert.alert('Cart is empty')}} style={{backgroundColor:Colors.middleBlue,width:'40%',height:'50%',borderRadius:5,justifyContent:'center'}}>
            <Text style={{color:'white',alignSelf:'center',fontSize:16}}>Check out</Text>
          </TouchableOpacity>
          </View>
        </View>
        </View>  : null)}
          </View>
          : <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',width:'100%' }}>
            <RNCamera 
            type={RNCamera.Constants.Type.back}
            style={{flex:1,overflow:'hidden',width:'100%'}}
            captureAudio={false}
            flashMode={RNCamera.Constants.FlashMode.off}
            googleVisionBarcodeType={RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeType.ALL}
            googleVisionBarcodeMode={RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeMode.ALTERNATE}
            onGoogleVisionBarcodesDetected={(e)=>{
              e?.barcodes?.length > 0 && shopsStore.confirmVendorOrders(e?.barcodes?.[0]?.dataRaw,navigation)}}
            />
          </View>}
      </View>

    )
    
  }
}

export default QrCodeScreen
