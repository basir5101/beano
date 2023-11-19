import React, { Component } from 'react'
import { View, Modal, ActivityIndicator } from 'react-native'
import { observer } from 'mobx-react'

import { confirmationModalStore } from 'Stores/StoreFactory'
import styles from './styles'


@observer
class LoadingModal extends Component {
  // COLORS = themeStore.colors
  STYLES = styles

  render() {
    let {
      show,
      spinnerSize = 'large',
      spinnerColor = 'red',
    } = confirmationModalStore

    return (
      <Modal
        key='bottom_modal'
        animationType='fade'
        visible={show}
        transparent={true}>
        <View style={this.STYLES.mainContainerView}>
          <ActivityIndicator size={spinnerSize} color={'#52f53a'} />
        </View>
      </Modal>
    )
  }
}
export default LoadingModal
