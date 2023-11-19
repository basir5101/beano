import React, { Component } from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { Text as RNText, View, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import AppIntroSlider from 'react-native-app-intro-slider'
// import LinearGradient from 'react-native-linear-gradient'
// import Icon from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/FontAwesome';

// import ChangeLanguageDropDown from 'Components/ChangeLanguageDropDown'
import Text from 'Components/Text'
import AnimatedText from 'Components/AnimatedText'
import TextInput from 'Components/TextInput'

// import AppStore from 'Stores/AppStore'
import { loadingModalStore, shopsStore } from 'Stores/StoreFactory'

import Images from 'Images'
import styles from './styles'
import Colors from 'Constants/Colors'
import { t } from 'i18next'


@observer
class ordersInroScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    doneIntro: PropTypes.func,
  }

  constructor(props) {
    super(props)

    this.state = {
      enableSkip: true,
      language: '',
      gender: '',
      position:0
    }

    // this.TEXTS = LanguageStore.textLocale
  }

  // componentDidMount() {
  //   this.props.navigation.setOptions({
  //     headerVisible: false,
  //     headerShown: false
  //   })
  // }

  get slides() {

    const showContent = ({ index, data }) => {
      const subtTitleExists = data.subTitle && data.subTitle.length > 0
      return (
        <TouchableWithoutFeedback onPress={()=>{
          if(this.state.position === 3)  {this._onDone()  }else{
            this.slider.goToSlide(this.state.position + 1)
            this.setState(prev=>({position:prev.position+1}))
          }
         
        }}>
        <View style={{ width: '100%', height: '100%' }}>
          {data.image && <View style={{ justifyContent: 'flex-end', width: '100%' }}>
            <Image source={data.image} style={styles.image} />
          </View>}
          <Text style={data.image ? styles.introTitle : styles.introTitleWithoutImage}>{data.title}</Text>
        </View>
        </TouchableWithoutFeedback>
      )
    }


    return [
      {
        row: showContent,
        containerStyle: styles.mainContainer,
        index: 2,
        title: 'Order 3 days in a row & get 20% off',
        subTitle: '',
        image: Images.threeDays
      },
      {
        row: showContent,
        containerStyle: styles.mainContainer,
        index: 3,
        title: 'Start a beano streak',
        image: Images.fire
      },
      {
        row: showContent,
        containerStyle: styles.mainContainer,
        index: 4,
        title: 'Extend by ordering',
        image: Images.fourDays
      },
      {
        row: showContent,
        containerStyle: styles.mainContainer,
        index: 4,
        title: 'Lose your streak? Devastating - but you’ll still get 15% off!',
        // image: Images.fourDays
      },
    ]
  }

  _renderDoneButton = () => {
    return  <TouchableOpacity style={{backgroundColor:'white',borderRadius:20,padding:10,paddingHorizontal:15}} onPress={this._onDone}>
    <Text style={{color:Colors?.middleBlue}}>{t('generics.start')}</Text>
  </TouchableOpacity>
  }
c
  _renderNavigationArrowButtons = (value) => {
    if (value === 'next') {
      return <View style={{width:70,height:70,alignItems:'flex-end'}}>
      <Image source={Images.rightArrow} style={[styles.nextButtonIcon]} />
    </View>
    } else {
      return  <View style={{width:70,height:70,alignItems:'flex-start'}}>
      <Image source={Images.leftArrow} style={styles.nextButtonIcon} />
</View>
    }
  }

  _renderItem = ({ item }) => (
    <View style={item.containerStyle}>
      {item.row && <item.row index={item.index} data={item} />}
    </View>
  )

  _onDone = () => {
    // authStore.setIntroScreen(false)
    // loadingModalStore.show = true
    // loadingModalStore.getVendorList()
    shopsStore.showStoreIntroScreen = false
    shopsStore.setIntroOfStore(false)
  }

  render() {
    // const { general } = this.TEXTS
    const { enableSkip } = this.state

    return (
      <>
        {/* <ChangeLanguageDropDown /> */}
        <AppIntroSlider
          data={this.slides}
          showSkipButton={false}
          ref={(ref) => (this.slider = ref)}
          showNextButton={enableSkip}
          showPrevButton={true}
          scrollEnabled={enableSkip}
          dotClickEnabled={enableSkip}
          onSlideChange={(data) => {
            this.setState({position:data})
          }
          }
          activeDotStyle={{ backgroundColor: Colors.brown }}
          dotStyle={{ backgroundColor: Colors.midLightBrown }}
          onDone={() => this._onDone()}
          // onSlideChange={(data) => data < 2 && this.state.gender.length == 0 && this.setState({ enableSkip: false })}
          renderItem={this._renderItem}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={() => this._renderNavigationArrowButtons('next')}
          renderPrevButton={() => this._renderNavigationArrowButtons('back')}
        />
      </>
    )
  }
}

export default ordersInroScreen
