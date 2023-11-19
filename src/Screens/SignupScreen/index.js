/* eslint-disable no-magic-numbers */
import React, { Component } from 'react'
import { View, Image, ScrollView, Platform,   KeyboardAvoidingView, ActivityIndicator } from 'react-native'

// import PropTypes from 'prop-types'
// import CheckBox from '@react-native-community/checkbox'

// import { isEmail } from 'Helpers/EmailChecker'

// import TextInput from 'Components/TextInput'
// import Text from 'Components/Text'
// import Button from 'Components/Buttons/Button'

// import Colors from 'Constants/Colors'
import Images from '../../Assets/Images'
import styles from './styles'
import Text from '../../Components/Text'
import Colors from '../../Assets/Constants/Colors'
import Button from '../../Components/Buttons/Button'
import TextInput from '../../Components/TextInput'
// import { authStore } from '../../Stores/StoreFactory'


// @observer
class ProfileScreen extends Component {
  // static propTypes = {
  //   navigation: PropTypes.object
  // }

  constructor(props) {
    super(props)

    this.state = {
      signUp: true,
      loading: false,
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      code: '12345',
      checkBoxEnabled:true,
    }
    // this.setHeader()
    // this.TEXTS = LanguageStore.textLocale
  }

  // setHeader() {
  //   const { navigation } = this.props
  //   const { signUp } = this.state

  //   navigation.setOptions({
  //     headerTitle: () => <View><Text style={{ fontSize: 20, color: Colors.veryDarkBlue }}>{signUp ? 'Sign Up' : 'Sign In'}</Text></View>,
  //     // headerLeft: () => {
  //     //   return (
  //     //     <View style={styles.headerLeftButtonsContainer}>
  //     //       <Button onPress={() => navigation.openDrawer()}>
  //     //         <Image source={Images.burgermenu} style={styles.headerLeft} />
  //     //       </Button>
  //     //     </View>
  //     //   )
  //     // },
  //     headerRight: () => {
  //       return (
  //         <View>
  //           <Text style={styles.headerRight}></Text>
  //         </View>
  //       )
  //     }
  //   })
  // }

  // setInput(name, value) {
  //   this.setState({ [name]: value })
  // }

  showCardInput() {
    const { signUp,checkBoxEnabled } = this.state

    const data = [
      { title: 'Name', text: 'Leila Geller', image: Images.tabBar.person, imageType: 'person', placeholder: 'John Doe', name: 'name' },
      { title: 'Phone Number', text: '0569929923', image: Images.smartphone, imageType: 'phone', placeholder: '+1 123456789', name: 'phoneNumber' },
      { title: 'Email ID', text: 'leila.geller@gmail.com', image: Images.mail, imageType: 'mail', placeholder: 'Johndoe@gmail.com', usedForSignIn: true, name: 'email' },
      { title: 'password', text: '*********', image: Images.lock, imageType: 'mail', placeholder: '**********', isPassword: true, usedForSignIn: true, name: 'password' },
    ]

    return (
      <View style={{ width: '90%' }}>
        {
          data && data.map((d) => {
            const showSignInTabs = (signUp || d.usedForSignIn)
            return (
              <View>
                {showSignInTabs && <View style={styles.textView}>
                  <View style={{ flexDirection: 'row', marginTop: 5, marginHorizontal: 20, }}>
                    <Image source={d.image} style={styles.cardImage} />

                    <Text style={{ fontSize: 15, color: Colors.middleBlue, opacity: 0.5, marginLeft: 12 }}>{d.title}</Text>
                  </View>
                  <TextInput
                    value={this.state[d.name]}
                    field={d.name}
                    onChangeText={(field, value) => this.setInput(field, value)}
                    hasShadow={false}
                    isPassword={d.isPassword}
                    placeholder={d.placeholder}
                    containerStyle={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8, backgroundColor: '#F9F9F9', color: Colors.middleBlue, width: '90%', height: 40, fontSize: 20 }} />
                </View>}
              </View>
            )
          })
        }
        {/* {signUp && <View style={{ flexDirection: 'row' }}>
          <CheckBox
            disabled={false}
            boxType={'square'}
            tintColors={'#9E663C'}
            onCheckColor={Colors.headerLightPink}
            onFillColor={Colors.middleBlue}
            onTintColor={Colors.middleBlue}
            value={checkBoxEnabled}
           onValueChange={(newValue) => this.setState({checkBoxEnabled:!checkBoxEnabled})}
          />
          <Text style={{ marginLeft: 20, marginTop: 5, fontSize: 15, color: Colors.darkBlue }}>I am a Vendor</Text>
        </View>} */}
      </View >
    )
  }

  // toggleSignInScreens() {
  //   const { state, navigate } = this.props.navigation
  //   const { signUp, checkBoxEnabled} = this.state
  //   // navigate('OtpScreen')
  //   this.setState({
  //     signUp: !signUp,
  //     email: '',
  //     name: '',
  //     phoneNumber: '',
  //     password: '',
  //   })
  // }

  async signTrigger() {
    const { signUp, email, name, password,checkBoxEnabled } = this.state
    const { navigate } = this.props.navigation
    this.setState({ loading: true })
    ///call api call
    // if (signUp) {
    //   const userType = checkBoxEnabled ? 'vendor' : 'customer'
    //   const response = await authStore.register({ email, "username": name, password,type: userType })
    //   this?.props?.navigation?.navigate('OtpScreen',{email})
    //   this.setState({ loading: false })
    //   await authStore.setUser(response.data)
    //   await authStore.setToken(response.data)
      
    // } else {
      
    //   const response = await authStore.login({ "username": email, password })

    //   if (response) {
    //     await authStore.setUser(response.data)
    //     await authStore.setToken(response.data.access_token)
    //     await authStore?.sendTokenNotification()
    //     this.props.navigation.pop()
    //   }
    //   this.setState({ loading: false })
    // }
    // signUp
    //   ? await authStore.register({ email, "username": name, password })
    //   : authStore.login({ "username": email, password })
    // navigate('OtpScreen', email)
  }

  // componentDidUpdate() {
  //   this.setHeader()
  // }


  render() {
    // const { signUp, email, name, phoneNumber, password, loading } = this.state
    // const buttonValue = signUp ? 'Sign Up' : 'Sign In'
    // const textValue = !signUp ? "Don't have an account? Signup" : 'Already have an account? Sign in'

    // const isEnabled = isEmail(email) && password.length > 4 && ((!signUp) || (name.length > 0 && phoneNumber.length > 0))

    return (
      <KeyboardAvoidingView
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex:1,}}>
      <ScrollView style={[styles.mainView]}>
        <View style={styles.cardView}>
        
           <Image source={Images.logoIcon} style={styles.logoImage} />
            <Text style={{ textAlign: 'center', fontSize: 20, color: Colors.middleBlue }}>Join the Beano family</Text>

          <View style={styles.body}>

            {this.showCardInput()}




            <Button  style={{ opacity: 1 , marginTop: 80, backgroundColor: Colors.middleBlue, width: '90%', height: 55, borderRadius: 8, flexDirection: 'row', alignItems: 'center' }} onPress={() => this.signTrigger()}>
              {/* {loading
                ? <ActivityIndicator style={{ alignItems: 'center', flex: 1, }} size='large' color='white' />
                : <View style={{ flexDirection: 'row', alignItems: 'center', }}> */}

                  <Text style={{ fontSize: 20, color: Colors.white, flex: 1, textAlign: 'center' }}>{'Sign In'}</Text>
                {/* </View>} */}
            </Button>

            <Button style={{marginVertical:20,height:50}} onPress={() => this.toggleSignInScreens()}>
                <Text style={{ fontSize: 15, color: Colors.midLightGrey, marginHorizontal: 20, paddingTop: 10, paddingBottom: 10 }}>{"Don't have an account? Signup"}</Text>
            </Button>


          </View>

        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

export default ProfileScreen
