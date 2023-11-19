/* eslint-disable no-magic-numbers */
import React, { Component } from 'react'
import { View, Image, SafeAreaView, ActivityIndicator } from 'react-native'
// import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import Keyboard from 'react-native-keyboard'

import { authStore } from '../../Stores/StoreFactory'

import Text from 'Components/Text'
import Button from 'Components/Buttons/Button'

import Colors from 'Constants/Colors'
import Images from '../../Assets/Images'
import styles from './styles'

const CODE_LENGTH = 5

// @observer
class OtpScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  constructor(props) {
    super(props)

    this.state = {
      code: '',
      timer: '',
      loading: false
    }
    this.setHeader()
    // this.TEXTS = LanguageStore.textLocale
  }

  setHeader() {
    const { navigation } = this.props
    const { signUp } = this.state

    navigation.setOptions({
      headerTitle: () => <View><Text style={{ fontSize: 20, color: Colors.veryDarkBlue }}>OTP</Text></View>,
      headerLeft: () => {
        return (
          <View style={styles.headerLeftButtonsContainer}>
            <Button onPress={() => navigation.pop(2)}>
              <Image source={Images.leftArrow} style={styles.headerLeft} />
            </Button>
          </View>
        )
      },
      headerRight: () => {
        return (
          <View>
            <Text style={styles.headerRight}></Text>
          </View>
        )
      }
    })
  }

  setInput(name, value) {
    this.setState({ [name]: value })
  }

  handleKeyPress(key: number) {
    const { email } = this.props.route.params
    const {code} = this.state
    
    if (this.state.code.length < CODE_LENGTH && this.state.timer === '00:00:00') {
      confirmationModalStore.error('requestAnotherCode')
    } else if (this.state.code.length < CODE_LENGTH) {
      this.setState({
        code: this.state.code + key
      }, () => {
        if (this.state.code.length === CODE_LENGTH) {
          this.setState({
            code: this.state.code + key
          })
          this.setState({ loading: true })
         const res = authStore.verifyEmail({
              "username": email,
              code:this?.state?.code
            })
            if(res?.success){
              this?.props?.navigation?.navigate('SignupScreen')
            }
            
            
        }
      })
    }
  }

  _handleClear() {
    this.setState({
      code: ''
    })
  }

  _handleDelete() {
    this.setState({
      code: this.state.code.slice(0, this.state.code.length - 1)
    })
  }

  renderCodeInputs() {
    const { code } = this.state
    let ret = []

    for (let i = 0; i < CODE_LENGTH; i++) {
      ret.push(
        (
          <View style={styles.codeDigitInputBox} key={i}>
            <Text style={[styles.codeDigitInput,{color:'black'}]}>
              {code[i]}
            </Text>
          </View>
        )
      )
    }

    return ret
  }

  componentDidUpdate() {
    this.setHeader()
  }


  render() {
    const { navigation } = this.props
    const { state, goBack } = this.props.navigation

    const { loading } = this.state
    const isResendDisabled = this.state.timer !== '00:00:00'

    return (

      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Image source={Images.logoIcon} style={styles.logo} />
          <Text style={styles.title}>{'we sent you the Otp, please check your inbox'}</Text>
          {/* <Text style={styles.subTitle}>{'subTitle'}</Text> */}
          {/* <View style={[styles.inputFieldsView, I18nManager.isRTL && { flexDirection: 'row-reverse' }]}> */}
          <View style={[styles.inputFieldsView]}>
            <View style={styles.row}>
              {this.renderCodeInputs()}
            </View>
            <View style={styles.resendButton}>
              {loading
                ? <ActivityIndicator size={'large'} color={Colors.darkTextColor} />
                : <>
                  <Text style={styles.timer}>{this.state.timer.length === 0
                    ? ' '
                    : this.state.timer}</Text>
                  {/* <NativeButton
                    disabled={isResendDisabled}
                    onPress={() => this.resendCode()}>
                    <Text style={styles.resendText(isResendDisabled)}>{'resendCode'}</Text>
                  </NativeButton> */}
                </>
              }
            </View>
          </View>
        </View>
        {/* <Button onPress={() => navigation.pop(2)}><Text>Go Back</Text></Button> */}
        <Keyboard
          id='Code_TextInput'
          keyboardType='number-pad'
          onClear={this._handleClear.bind(this)}
          onDelete={this._handleDelete.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
      </SafeAreaView>

    )
  }
}

export default OtpScreen
