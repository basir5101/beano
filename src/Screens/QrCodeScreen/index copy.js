/* eslint-disable no-magic-numbers */
import React, { Component } from 'react'
import { View, Image, RefreshControl, Modal, TouchableOpacity } from 'react-native'
import { Center, Container, NativeBaseProvider } from 'native-base'
// import QRCodeScanner from 'react-native-qrcode-scanner'
// import { useCameraDevices } from 'react-native-vision-camera';
// import { Camera } from 'react-native-vision-camera';
// import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner'
import QRCode from 'react-native-qrcode-svg'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

import { shopsStore } from 'Stores/StoreFactory'

import TextInput from 'Components/TextInput'
import Text from 'Components/Text'
import Card from 'Components/Card'
import StreakView from 'Components/StreakView'

import Colors from 'Constants/Colors'
import Images from '../../Assets/Images'
import styles from './styles'


// @observer
export default function QrCodeScreen() {
  // static propTypes = {
  //   navigation: PropTypes.object
  // }

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     streak: 21,
  //     isCameraVisible: true,
  //     recording: false,
  //     loading: false,
  //     title: '',
  //     notes: [],
  //     warningModal: false,
  //     employeePressable: true,
  //     textToSearch: ''
  //   }
  //   // this.TEXTS = LanguageStore.textLocale
  // }

  // setHeader() {
  //   const { navigation } = this.props

  //   navigation.setOptions({
  //     headerTitle: () => <View></View>,
  //     headerLeft: () => <View style={styles.headerLeftButtonsContainer}></View>,
  //     headerRight: () => {
  //       return (<StreakView title={'title'} description={'description'} />)
  //     }
  //   })
  // }

  // showSaluteTitle() {
  //   return (
  //     <View>
  //       <Text style={styles.title}>
  //         Hello Leila
  //       </Text>
  //       <Text style={styles.subTitle}>
  //         Feeling a coffee?
  //       </Text >
  //     </View>
  //   )
  // }

  // componentDidMount() {
  //   this.setHeader()
  // }


  // render() {
  const devices = useCameraDevices();
  const device = devices.back;

  // const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
  //   checkInverted: true,
  // });
  return (

    <View style={styles.mainView}>
      <View style={styles.titleView}>
        {/* {this.showSaluteTitle()} */}

        {/* <TextInput containerStyle={styles.searchInput} placeholder={'Find your favorite coffee'} isFullWidth={true} /> */}
        <Text>You can use your qr code to scan it by the vendor to get your discount</Text>
      </View>

      <View style={styles.cardView}>

        {/* <Card /> */}
        {/* <Image source={Images.BeanoQrCode} style={styles.qrCode} /> */}
        {shopsStore.cartTicket ? <QRCode
          size={260}
          value={shopsStore.cartTicket}
        />
          : <Text>Your cart is empty</Text>}

        {/* {device != null && <Camera
          style={{ width: '100%' }}
          device={device}
          isActive={true}
          frameProcessor={frameProcessor}
          frameProcessorFps={5}
        />} */}


      </View>
    </View>

  )
  // }
}

// export default QrCodeScreen
