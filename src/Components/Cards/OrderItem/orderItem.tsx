import React from 'react'
import { View, Image, ImageSourcePropType, Platform,Dimensions,TouchableOpacity } from 'react-native'
import { Path, Svg, ClipPath, Defs, G } from 'react-native-svg'

import Text from '../../Text'
import Button from '../../Buttons/Button'
import List from '../../List'

import Images from '../../../Assets/Images'
import Colors from '../../../Assets/Constants/Colors'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'


type HorizontalCardProps = {
  onPress: any;
  source: ImageSourcePropType;
  onLongPress: any;
};

class OrderItem extends React.Component<HorizontalCardProps> {

    constructor(props) {
    super(props)

    this.state = {
     quantity: this?.props?.quantity
    }
    // this.TEXTS = LanguageStore.textLocale
  }
  render() {
    const styles={}
    const { hasPrice, data, hasSubtitle, title, options, buttonText, navigation, onPlusPress,onMinusPress, ...props } = this.props
    // const price = 0

    const {width} = Dimensions.get('window')
    return <View style={[{ 
        shadowColor: '#F5EAE6',
        shadowOffset: { width: 3, height: 4 },
        shadowOpacity: 1,
        backgroundColor:'white',
        shadowRadius: 3,
        borderRadius:10,
        width:width,
        marginBottom:20,
        height:130,
        flexDirection:'row',
    },this?.props?.style,{alignSelf:'center'}]}>
        <View style={{width:'30%',height:'100%',borderTopLeftRadius:10,borderBottomLeftRadius:10,overflow:'hidden'}}>
    {this?.props?.image?.length > 0 ? <Image style={{height:'100%',width:'100%'}} source={{uri: this.props.image}}/> : null}
        </View>
        <View style={{width:'70%',height:'100%',borderTopRightRadius:10,borderBottomRightRadius:10,flexDirection:'column',justifyContent:'center',alignItems:'flex-start',paddingLeft:'10%'}}>
    {!!this?.props?.title ? <Text style={{color:'black'}} children={this?.props?.title}/> : null}
    {!!this?.props?.price ? <Text style={{color:Colors?.blueGrey,marginVertical:10}} children={`AED ${this.props?.price || ''}.00`}/> : null}
    <View style={{backgroundColor:'transparent',height:20,width:'30%',borderRadius:1000,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
    <TouchableOpacity style={{height:20,width:20,borderRadius:1000,backgroundColor:Colors?.middleBlue}} onPress={()=>
  onMinusPress(this?.props?.quantity)
   }>
    <MaterialIcon size={20} name='remove'color={'white'}/>
    </TouchableOpacity>
   {this?.props?.quantity ? <Text style={{color:'black'}}>{this?.state?.quantity}</Text> : null}
   
    <TouchableOpacity style={{height:20,width:20,borderRadius:1000,backgroundColor:Colors?.middleBlue}} onPress={()=>{
   onPlusPress(this?.props?.quantity)  }}>
    <MaterialIcon size={20} name='add'color={'white'}/>
    </TouchableOpacity>
    </View>
        </View>
    </View>
  }
}

export default OrderItem
