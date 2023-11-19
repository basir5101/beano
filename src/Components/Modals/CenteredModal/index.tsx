import React from 'react'
import { View, Modal, TouchableWithoutFeedback, KeyboardAvoidingView, Image } from 'react-native'
import { observer } from 'mobx-react'

import NativeButton from '../../Buttons/NativeButton'
import Button from '../../Buttons/Button'
import Text from '../../Text'

import { informationModalStore, authStore } from 'Stores/StoreFactory'

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
class CenteredModal extends React.Component<Props, State>{
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
      onConfirm,
      hideCancel,
      confirmTitle,
      imageSource,
      Component,
    } = informationModalStore

    const { children, onPress } = this.props

    const isLoggedIn = authStore.user &&( authStore.user.username || authStore?.user?.user?.username)
    
    const title = 'Caffeine Streak'
    const description = `Your caffeine feed is ${isLoggedIn ? 1 : 0}🔥 days old Hurry up to order a coffee before the countdown ends so you don’t loose your streak`
    const close = 'Close'

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
          <TouchableWithoutFeedback onPress={() => informationModalStore.close()}>
            <View style={styles.container} >
              <TouchableWithoutFeedback>
                <View style={this.STYLES.boxContainer}>
                  <Button onPress={() => informationModalStore.close()} style={{ alignItems: 'flex-end', }}>
                    <Image source={Images.closeCircle} style={{ resizeMode: 'contain', width: 28, height: 28, marginTop: 11, marginRight: 11 }} />
                  </Button>


                  <DismissKeyboard>
                    <View>
                      <View style={this.STYLES.body}>
                        <Text style={this.STYLES.text}>{title}</Text>
                        {Component}
                        {description !== '' ? <Text style={this.STYLES.description}>{description}</Text> : null}
                      </View>
                      <View style={this.STYLES.modalButtonView}>
                        <NativeButton
                          onPress={() => {
                            informationModalStore.close()
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
          </TouchableWithoutFeedback>
          {/* </KeyboardAvoidingView> */}
        </Modal>
      </Modal>
    )
  }
}

export default CenteredModal
