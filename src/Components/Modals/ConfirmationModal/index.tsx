import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Text, View, Image, KeyboardAvoidingView } from 'react-native'

import CenteredModal from '../ConfirmationModal'
import NativeButton from '../../Buttons/NativeButton'
// import CenteredModal, NativeButton } from '@sowlutions-tech/crowdmouth-react-native-library'

import { informationModalStore, themeStore } from 'Stores/StoreFactory'
import DismissKeyboard from '../../DismissKeyboard'


import styles from './styles'

@observer
class ConfirmationModal extends Component {
  // TEXTS = languageStore.textLocale
  STYLES = styles

  render() {
    let {
      // show = false,
      title,
      description,
      onConfirm,
      hideCancel,
      confirmTitle,
      imageSource,
      Component,
    } = informationModalStore

    const show = true

    if (!show) {
      return null
    }

    // confirmTitle = confirmTitle ? confirmTitle : hideCancel ? this.TEXTS.general.okay : this.TEXTS.general.yes
    // cancelTitle = cancelTitle ? cancelTitle : this.TEXTS.general.no

    confirmTitle = confirmTitle ? confirmTitle : hideCancel ? 'Okay' : 'yes'

    return (
      <CenteredModal onPress={() => { return null}}>
        <DismissKeyboard>
          <View>
            <View style={this.STYLES.body}>
              <Text style={this.STYLES.text}>{title}</Text>
              {/* {imageSource && <Image source={imageSource} style={this.STYLES.image} />} */}
              {/*   =============== unComment Here */}
              {description !== '' ? <Text style={this.STYLES.description}>{description}</Text> : null}
              {/* {!hidePoints && <Text style={this.STYLES.description}>{`${this.TEXTS.general.currentBalance}: ${balancePoints} ${this.TEXTS.general.pts}`}</Text>} */}
              {Component}
            </View>
            <View style={this.STYLES.modalButtonView}>


              <NativeButton
                onPress={() => {
                  confirmationModalStore.close()
                  onConfirm && onConfirm()
                }}
                style={this.STYLES.confirmButton}
              >
                <Text style={this.STYLES.buttonText}>{confirmTitle}</Text>
              </NativeButton>
            </View>
          </View>
        </DismissKeyboard>
      </CenteredModal>
    )
  }
}

export default ConfirmationModal


