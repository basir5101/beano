import React ,{useCallback} from 'react'
import { View, Modal, TouchableWithoutFeedback, KeyboardAvoidingView, Image,FlatList } from 'react-native'
import { observer } from 'mobx-react'

import NativeButton from '../../Buttons/NativeButton'
import Button from '../../Buttons/Button'
import Text from '../../Text'
import Colors from '../../../Assets/Constants/Colors'
import { reviewModalStore, authStore,shopsStore } from 'Stores/StoreFactory'
import DropDownPicker from 'react-native-dropdown-picker'
import DismissKeyboard from '../../DismissKeyboard'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Images from '../../../Assets/Images'
import TextInput from 'Components/TextInput'
import styles from './styles'
import AsyncStorage from '@react-native-community/async-storage'

type Props = {
  onPress: any;
  children: Object;
}

type State = {
  visible: boolean;
}

@observer
class ReviewModal extends React.Component<Props, State>{
  constructor(props) {
    super(props)

    this.state = {
        visible: false,
        categoriesListState:shopsStore?.categoriesList?.map((item)=>{

          return {label:item?.description,value:item?.description,isSelected:false,image:item?.image}
    
    
    }),
        openDL:false,
        selectedState:null,
        inputVal:'',
        retry:0,
    }
    // this.TEXTS = LanguageStore.textLocale
  }

  STYLES = styles

  async componentDidMount() {
    setTimeout(() => {
      this.setState({ visible: true })
    }, 1)
   
    await shopsStore?.getCategoriesList()
   
   
  }
 

  render() {
 
    let {
      show,
      // title,
      // description,
      onConfirm,
      hideCancel,
      confirmTitle,
      imageSource,
      Component,
    } = reviewModalStore

    const { children, onPress } = this.props

    const isLoggedIn = authStore.user &&( authStore.user.username || authStore?.user?.user?.username)
    let categoriesList = shopsStore?.categoriesList?.map((item)=>{
      return {label:item?.description,value:item?.description,isSelected:false,image:item?.image}
    })
    const title = 'What sort of experience is Starbucks good for?'
    const close = 'Submit'

    if (!show) {
      return null
    }
    const ItemsCallback = () =>{
     
        return <>
           <DropDownPicker
            open={this.state.openDL}
            style={{width:'50%',alignSelf:'center',borderColor:Colors?.lightPink}}
            setOpen={()=>this.setState(prev=>({openDL:!prev?.openDL}))}
            value={this?.state?.selectedState?.label ?? categoriesList?.[0]?.label}
            setValue={()=>this?.state?.selectedState}
            placeholderStyle={{
                color: 'grey'
              }}
            items={categoriesList}
            onChangeValue={()=>{
                  this?.setState({openDL:false})
                  
            }}
            onSelectItem={(value)=>{
              this?.setState(prev=>({selectedState:value,}))
            }}
      
          />
                        <FlatList 
                        numColumns={4}
                        contentContainerStyle={{marginTop:20}}
                        data={categoriesList}
                        renderItem={({item})=>{
                           return<View style={{flexDirection:'column',alignItems:'center',width:'25%',marginBottom:20}}>
                            <View style={{borderWidth:1,borderColor:Colors?.lightPink,alignItems:'center',justifyContent:'center', width:40,height:40,borderRadius:5,marginHorizontal:10,marginBottom:10,backgroundColor:!(this.state.selectedState?.label == item?.label) ? 'white' : Colors?.lightPink}}>
                            <Image style={{height:'100%',width:'100%'}} source={{uri:item?.image}}/>
                                </View>
                           <Text style={{color:'grey',width:'100%',textAlign:'center',fontSize:10,position:'relative',}}>{item?.label}</Text>
                            </View>
                        }}
                        /></>
    }
    return (
    
        

        <Modal
          key='bottom_modal'
          animationType={'slide'}
          visible={this.state.visible}
          transparent={true}>
          {/* <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}> */}
            <View style={styles.container} >
              <TouchableWithoutFeedback>
                <View style={this.STYLES.boxContainer}>
                  <Button onPress={() => reviewModalStore.close()} style={{ alignItems: 'flex-end', }}>
                    <Image source={Images.closeCircle} style={{ resizeMode: 'contain', width: 28, height: 28, marginTop: 11, marginRight: 11 }} />
                  </Button>

               
                  <DismissKeyboard>
                    <View>
                      <View style={this.STYLES.body}>
                        <Text style={[this.STYLES.text,{fontSize:15}]}>{title}</Text>
                     <ItemsCallback />
                       <TextInput
                       multiline={true}
                    value={this.state?.inputVal}
                    onChangeText={(field, value) => this.setState({inputVal:value})}
                    hasShadow={false}
                    multilineNum={4}
                    inputStyleProp={{fontSize: 10}}
                    placeholder={"Give us the goss, tell us if you'd go back or not & why(be totally honest!)"}
                    containerStyle={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8, backgroundColor: '#F9F9F9', color: Colors.middleBlue, width: '90%',height:100 }} />
                      </View>
                      <View style={this.STYLES.modalButtonView}>
                        <NativeButton
                          onPress={async() => {
                           await shopsStore?.feedbackApply({
                            "store": "starbucks",
                            "category": this?.state?.selectedState?.label?.split(' ')?.join('_'),
                            "rank": 4,
                            "comment": this?.state?.inputVal
                        })
                        await AsyncStorage.removeItem('shouldShowReview')
                            reviewModalStore.close()
                            onConfirm && onConfirm()
                          }}
                          style={this.STYLES.bottomButton}
                        >
                          <Text style={this.STYLES.buttonText}>{close}</Text>
                        </NativeButton>
                      </View>
                    </View>
                  </DismissKeyboard>


                </View>
              </TouchableWithoutFeedback>
            </View>
          {/* </KeyboardAvoidingView> */}
        </Modal>
    )
  }
}

export default ReviewModal
