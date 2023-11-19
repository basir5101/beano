/* eslint-disable no-magic-numbers */
import React, { Component} from 'react'
import { View, Image,Dimensions,Alert} from 'react-native'
import { TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

import {authStore,loadingModalStore,shopsStore  } from 'Stores/StoreFactory'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Text from 'Components/Text'

import Colors from 'Constants/Colors'
import Images from '../../Assets/Images'
import styles from './styles'
import DimensionHelper from '../../Helpers/DimensionHelper'


@observer
class ProductDetailsScreen extends Component {
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
      selectedValue:this?.props?.route?.params?.data?.options?.[0]?.values?.[0],
      data:this?.props?.route?.params?.data,
      quantity:1,
      isSelected:false,
      options:
        this?.props?.route?.params?.data?.options?.[0]?.values.map((item,index)=>{
          if(index == 0){
            return {...item,isSelected:true}
          }else{
            return {...item,isSelected:false}
          }
        })
    
    }
    // this.TEXTS = LanguageStore.textLocale
  }



  


  async componentDidMount() {


    }
    async requestProduct(data) {
      const { navigation } = this.props
      loadingModalStore.show = true
      await shopsStore.requestProductFromDetails({
    "store": data?.store,
    "branch":data?.branch,
    "items": [
        {
            "product": data?.name,
            "quantity": this.state.quantity,
            "options": [
                {
                    "tag": "Size",
                    "type": "oneOf",
                    "selected": [
                        this.state.selectedValue
                    ]
                }
            ]
        }
    ]
})
      await shopsStore.addCustomerPendingOrders({
        "store": data?.store,
        "branch":data?.branch,
        "items": [
            {
                "product": data?.name,
                "quantity": this.state.quantity,
                "options": [
                    {
                        "tag": "Size",
                        "type": "oneOf",
                        "selected": [
                            this.state.selectedValue
                        ]
                    }
                ]
            }
        ]
    })
     
      loadingModalStore.show = false
      navigation.navigate('QrCodeScreen', {retry:1})
    }
   

 

  
 

  render() {
  //  return this.state.data.options?.[0]?.values?.filter(item=>!!item?.price)?.map((item)=>{
    const {data} = this.state
    const isLoggedIn = authStore.user &&( authStore.user.username || authStore?.user?.user?.username)
   const PickComp = ({obj}) =>{
    
      return <TouchableOpacity onPress={()=>{
        let newVal = this?.state?.options?.map((item)=>{
          if(item?.title == obj?.title){
            if(this?.state?.selectedValue?.title == item?.title){
              this?.setState({selectedValue:{}})
            }else{
              this?.setState({selectedValue:item})
            }
            return {...item,isSelected:!item?.isSelected}
          }else return {...item,isSelected:false}
         })
       this?.setState({options:newVal})
      }} style={{paddingHorizontal:20,borderWidth:1,borderColor:Colors?.orangeBrown,width:60,height:30,borderRadius:10,justifyContent:'center',marginRight:10,backgroundColor:obj?.isSelected ? Colors?.orangeBrown : 'white'}}>
        <Text style={{color: obj?.isSelected ? 'white' : Colors?.orangeBrown,fontSize:15,fontWeight:'700',alignSelf:'center'}}>{obj?.title?.substring(0,1)?.toUpperCase()}</Text>
      </TouchableOpacity>
    
   }
    return (

      <View style={[styles.mainView,{flex:1,height:Dimensions.get('window').height,backgroundColor:'white'}]}>
        <View style={{position:'absolute',top:50,width:Dimensions.get('window').width,height:100,paddingLeft:10,zIndex:100}}>
        <View style={{position:'absolute',backgroundColor:Colors.middleBlue,zIndex:1000,width:'20%', height:50,borderTopLeftRadius:20,borderBottomLeftRadius:20,justifyContent:'center',alignItems:'center',right:0}}>
                <Text>{`${shopsStore?.streakDetails?.userDiscount || 20}%`}</Text>
              </View>
          <TouchableOpacity onPress={()=>this?.props?.navigation?.goBack()} style={{zIndex:100,width:'10%'}}>
          <MaterialIcons name='arrow-back-ios'size={30} color={Colors.middleBlue} />
          </TouchableOpacity>
        </View>
          <View style={{height:DimensionHelper.getHeight(250),width:Dimensions.get('window').width}}>
          <Image style={{height:'100%',width:Dimensions.get('window').width}} source={{uri:data?.image}}/>
          </View> 
          <View style={{backgroundColor:'white',borderTopLeftRadius:30,borderTopRightRadius:30,position:'relative',top:-40,zIndex:100,paddingTop:30,paddingHorizontal:30}}>
            <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
            <Text style={{color:Colors.orangeBrown,fontWeight:'500',fontSize:17}}>
              {data?.title || ''}
            </Text>
            </View>
            <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',marginTop:10}}>
            <Text style={{color:Colors.middleBlue,fontWeight:'500',fontSize:14}}>
              {`AED ${this.state?.selectedValue?.price ?? 0}.00`}
            </Text>

           <View style={{backgroundColor:'transparent',padding:5,borderRadius:5,flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:40}}>
          
           </View>

            </View>
            {data?.description ? <View style={{flexDirection:'column',width:'100%',marginTop:10}}>
            <Text style={{color:Colors.middleBlue,fontWeight:'600',fontSize:17}}>
              About
            </Text>

           <Text style={{color:Colors.midLightGrey,marginTop:12,fontSize:9,textAlign: 'justify',
    lineHeight: 15,}}>{data?.description || ""}</Text>

            </View> : null}
            

          {this?.state?.options?.length > 0 && !!this?.state?.options[0] ?  <View style={{flexDirection:'column',width:'100%',marginTop:30,}}>
            <Text style={{color:Colors.orangeBrown,fontWeight:'bold',fontSize:15,marginBottom:20}}>
             Select Your Size
            </Text>
           <View style={{flexDirection:'row'}}>
          {this?.state?.options?.filter(item=>!!item?.price)?.map((item)=><PickComp isSelected={false} obj={item}/>)} 
          </View>
            </View> : null}
           
            </View>        
            <View style={{position:'absolute',width:Dimensions.get('window').width,backgroundColor:Colors.lightPink,bottom:0,height:60,justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <View style={{backgroundColor:Colors.middleBlue,borderRadius:1000}}>
            <MaterialIcons size={20}
            color={'white'} name={'remove'} onPress={()=>{if(this.state.quantity > 1){
              this.setState(prev=>({quantity: prev.quantity -1 }))
            }}} />
            </View>
            <Text style={{color:Colors.middleBlue,marginHorizontal:20}}>
              {this.state.quantity}
            </Text>
            <View style={{backgroundColor:Colors.middleBlue,borderRadius:1000}} >
            <MaterialIcons size={20}
            color={'white'} name={'add'} onPress={()=>this.setState(prev=>({quantity: prev.quantity + 1 }))} />
            </View>
            </View>
            <TouchableOpacity onPress={()=>isLoggedIn ? this.requestProduct(data) : Alert.alert('You should be logged in')} style={{backgroundColor:Colors.middleBlue,padding:5,borderRadius:5,marginLeft:20,width:'50%',height:40,justifyContent:'center'}}><Text style={{fontWeight:'800',textAlign:'center',color:'white'}}>Add to bag</Text></TouchableOpacity>
            </View>
      </View>

    )
  }

}

export default ProductDetailsScreen
