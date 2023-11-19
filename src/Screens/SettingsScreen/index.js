/* eslint-disable no-magic-numbers */
import React, { Component } from 'react'
import { View, Text, Image, ActivityIndicator,  Alert } from 'react-native'
import StoresScreen from '../StoresScreen'
// import { observer } from 'mobx-react'
// import PropTypes from 'prop-types'
// import Button from 'Components/Buttons/Button'

// import Colors from 'Constants/Colors'
// import Images from '../../Assets/Images'
// import { authStore } from '../../Stores/StoreFactory'


// @observer
class SettingsScreen extends Component {
  // static propTypes = {
  //   navigation: PropTypes.object
  // }

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     loading: false,
  //   }
  //   // this.TEXTS = LanguageStore.textLocale
  // }

  // setHeader() {
  //   const { navigation } = this.props

  //   navigation.setOptions({
  //     headerTitle: () => <Text style={{color:Colors?.middleBlue,fontWeight:'bold',textAlign:'center',fontSize:18,marginRight:'15%'}}>Settings</Text>,
  //   })
  // }


  // async componentDidMount() {
  //   this.setHeader()
   
  // }


  render() {
    // const {loading} = this?.state

    return (

      <View style={{flex:1,}}>
        <StoresScreen />
        {/* <Button disabled={false} style={{ opacity: true ? 1 : 0.5, marginTop: true ? 20 : 80, backgroundColor: Colors.middleBlue, width: '90%', height: 55, borderRadius: 8, flexDirection: 'row', alignItems: 'center',alignSelf:'center',position:'absolute',bottom:'20%',justifyContent:'center' }} onPress={async () => {
          if(Object?.keys(authStore?.user ?? {})?.length == 0){
            Alert?.alert('You should be logged in')
          }
          
          this?.setState({loading:true})
          await authStore.logout()
          this?.props?.navigation?.goBack()
          this?.setState({loading:false})

          }}>
              {loading
                ? <ActivityIndicator style={{ alignItems: 'center', flex: 1 }} size='large' color='white' />
                :
                  <Text style={{ fontSize: 20, color: Colors.white, }}>{'Log Out'}</Text>
                }
            </Button> */}
      </View>

    )
  }
}

export default SettingsScreen
