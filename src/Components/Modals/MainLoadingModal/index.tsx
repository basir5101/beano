import React from 'react'
import { View, Modal, TouchableWithoutFeedback, ActivityIndicator, KeyboardAvoidingView, Image } from 'react-native'
import { observer } from 'mobx-react'

import NativeButton from '../../Buttons/NativeButton'
import Button from '../../Buttons/Button'
import Text from '../../Text'

import { loadingModalStore, authStore } from 'Stores/StoreFactory'

import DismissKeyboard from '../../DismissKeyboard'

import Images from '../../../Assets/Images'

import styles from './styles'

type Props = {
  onPress: any;
  children: Object;
}

type State = {
  visible: boolean;
}

@observer
class MainLoadingModal extends React.Component<Props, State>{
  state = {
    visible: false
  }

  STYLES = styles

  componentDidMount() {
    setTimeout(() => {
      this.setState({ visible: true })
    }, 1)
  }

  render() {
    let {
      show,
      // title,
      // description,
    } = loadingModalStore

    const { children, onPress } = this.props

    const isLoggedIn = authStore.user &&( authStore.user.username || authStore?.user?.user?.username)

    if (!show) {
      return null
    }

    return (
      <Modal
        key='background_modal'
        animationType={'none'}
        transparent={true}
      >
        <View style={styles.backgroundView} />

        <Modal
          key='bottom_modal'
          animationType={'slide'}
          visible={this.state.visible}
          transparent={true}>
          {/* <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}> */}
          {/* <TouchableWithoutFeedback onPress={() => informationModalStore.close()}> */}
          <View style={styles.container} >
            <TouchableWithoutFeedback>
              <View style={this.STYLES.boxContainer}>

                <DismissKeyboard>
                  <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size={'large'} color={'white'} />

                    {/* <View style={this.STYLES.body}>
                        <Text style={this.STYLES.text}>{title}</Text>
                        {Component}
                        {description !== '' ? <Text style={this.STYLES.description}>{description}</Text> : null}
                      </View> */}
                    {/* <View style={this.STYLES.modalButtonView}>
                        <NativeButton
                          onPress={() => {
                            informationModalStore.close()
                            onConfirm && onConfirm()
                          }}
                          style={this.STYLES.bottomButton}
                        >
                          <Text style={this.STYLES.buttonText}>{close}</Text>
                        </NativeButton>
                      </View> */}
                  </View>
                </DismissKeyboard>


              </View>
            </TouchableWithoutFeedback>
          </View>
          {/* </TouchableWithoutFeedback> */}
          {/* </KeyboardAvoidingView> */}
        </Modal>
      </Modal>
    )
  }
}

export default MainLoadingModal
