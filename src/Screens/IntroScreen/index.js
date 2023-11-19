import React, { Component } from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { Text as RNText, View, Image, TouchableOpacity, TouchableWithoutFeedback, Pressable } from 'react-native'
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
import { loadingModalStore, authStore } from 'Stores/StoreFactory'

import Images from 'Images'
import styles from './styles'
import Colors from 'Constants/Colors'
import { changeLanguage, t } from 'i18next'
import AsyncStorage from '@react-native-community/async-storage'


@observer
class IntroScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    doneIntro: PropTypes.func,
  }

  constructor(props) {
    super(props)

    this.state = {
      enableSkip: false,
      language: '',
      gender: '',
      position:0,
    }

    // this.TEXTS = LanguageStore.textLocale
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerVisible: false,
      headerShown: false
    })
  }

  get slides() {
    const TEXTS = {
      introScreen: {
        title1: 'title1',
        desc1: 'desc1',
        title2: 'title2',
        desc2: 'desc2',
      }
    }

    const chooseCard = async (type, value) => {
      await AsyncStorage.setItem('language',value)
      changeLanguage(value)
      this.setState({ enableSkip: true })
      this.slider.goToSlide(this.state.position + 1)
      this.setState(prev=>({position:prev.position+1}))
      type === 'language'
        ? this.setState({ language: value })
        : this.setState({ gender: value })
    }

    const chooseCardnotlang = (type, value) => {
      this.setState({ enableSkip: true })
      this.slider.goToSlide(this.state.position + 1)
      this.setState(prev=>({position:prev.position+1}))
      type === 'language'
        ? this.setState({ language: value })
        : this.setState({ gender: value })
    }

    const startByTakingALanguage = ({ }) => {
      // const { introScreen } = LanguageStore.textLocale
      const isArSelected = this.state.language === 'ar'
      const isEnSelected = this.state.language === 'en'

      const selectedIndex = (isEnSelected && 0) || (isArSelected && 1) || undefined

      return (
        <View>
          <AnimatedText style={styles.animatedTitle} text={['Hello', 'هلا']} selectedIndex={selectedIndex}></AnimatedText>
          <View style={styles.mainChooseBoxView}>
            <TouchableOpacity style={styles.cardView(isArSelected)} onPress={() => chooseCard('language', 'ar')}>
              <Text style={styles.cardText}>ع</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardView((isEnSelected))} onPress={() => chooseCard('language', 'en')}>
              <RNText style={styles.cardText}>a</RNText>
            </TouchableOpacity>
          </View>
        </View>
      )
    }

    const startByTakingGender = () => {
      const isMaleSelected = this.state.gender === t('generics.male')
      const isFemaleSelected = this.state.gender === t('generics.female')

      const selectedIndex = (isMaleSelected && 0) || (isFemaleSelected && 1) || undefined

      return (
        <Pressable>
          <AnimatedText style={styles.animatedTitle} text={[t('generics.male'), t('generics.female')]} selectedIndex={selectedIndex}></AnimatedText>
          <View style={styles.mainChooseBoxView}>
            <TouchableOpacity style={styles.cardView(isMaleSelected)} onPress={() => chooseCardnotlang('gender', t('generics.male'))}>
              <Image defaultSource={Images.introScreen.male} style={styles.cardImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardView(isFemaleSelected)} onPress={() => chooseCardnotlang('gender', t('generics.female'))}>
              <Image defaultSource={Images.introScreen.female} style={styles.cardImage} />
            </TouchableOpacity>
          </View>
        </Pressable>
      )
    }

    const showCoffeeContent = ({ index, data }) => {
      const subtTitleExists = data.subTitle && data.subTitle.length > 0
      return (
        <TouchableWithoutFeedback onPress={()=>{
          this.slider.goToSlide(this.state.position + 1)
      this.setState(prev=>({position:prev.position+1}))
        }}>
        <View  style={{ width: '100%', height: '100%', }}>
          <Text style={styles.title}>{data.title}</Text>
          {subtTitleExists && <Text style={styles.subTitle}>{data.subTitle}</Text>}
          <View style={[data.index != 3 && { justifyContent: 'flex-end'},{ width: '100%', height: subtTitleExists ? '78%' : '88%' }]}>
            <Image source={data.image} style={styles.image} />
          </View>
        </View>
        </TouchableWithoutFeedback>
      )
    }


   

    const showWelcomeContent = ({ index, data }) => {
      return (
        <TouchableWithoutFeedback onPress={()=>authStore?.setIntroScreen(false)} >
          <View style={{ width: '100%', height: '100%', }}>
          <View style={styles.welcomeView}>
            <Text style={[styles.welcomeTitle,{width:'60%'}]}>{data.title}</Text>
            <Text style={[styles?.welcomeTitle,{fontSize:15,width:'65%'}]}>{data?.subTitle}</Text>
          </View>
          <Image source={Images.introScreen.holdCoffeeCup} style={styles.fullscreenImage} />
          </View>
        </TouchableWithoutFeedback>
      )
    }

    const { introScreen } = TEXTS

    return [
      {
        row: startByTakingALanguage,
        title: introScreen.title1,
        text: introScreen.desc1,
        gif: Images.logo,
        containerStyle: styles.mainCheckBoxContainer,
        imageStyle: styles.logoIcon,
        colors: ['#cee6fd', '#63E2FF'],
        index: 0
      },
      {
        row: startByTakingGender,
        title: introScreen.title2,
        text: introScreen.desc2,
        containerStyle: styles.mainCheckBoxContainer,
        gif: Images.intro.homeScreen,
        colors: ['#63E2FF', '#B066FE'],
        index: 1
      },
      {
        row: showCoffeeContent,
        containerStyle: styles.mainContainer,
        index: 2,
        title: t('generics.enjoy'),
        subTitle: t('generics.discount'),
        image: Images.introScreen.coffeeCheers
      },
      {
        row: showCoffeeContent,
        containerStyle: styles.mainContainer,
        index: 3,
        title: t('generics.cruise'),
        image: Images.introScreen.nissanPatrol
      },
      {
        row: showCoffeeContent,
        containerStyle: styles.mainContainer,
        index: 4,
        title: t('generics.barista'),
        image: Images.introScreen.coffeePouring
      },
      // {
      //   row: userOnBoarding,
      //   containerStyle: styles.mainContainer,
      //   index: 4,
      //   title: 'User Details',
      //   inputs: [
      //     {
      //       title: 'First name',
      //       placeholder: 'John'
      //     },
      //     {
      //       title: 'Last name',
      //       placeholder: 'Doe'
      //     },
      //     {
      //       title: 'User Name',
      //       placeholder: 'JohnDoeDrinkingCoffee'
      //     }
      //   ]
      // },
      //{
      //   row: userOnBoarding,
      //   containerStyle: styles.mainContainer,
      //   index: 5,
      //   title: 'Contact Details',
      //   inputs: [
      //     {
      //       title: 'Phone number',
      //       placeholder: '+971 123 1234'
      //     },
      //     {
      //       title: 'Email Address',
      //       placeholder: 'JohnDoe@gmail.com'
      //     },
      //   ]
      // },
      // {
      //   row: dateOfBirthOnBoarding,
      //   containerStyle: styles.mainContainer,
      //   index: 6,
      //   title: 'Date of Birth'
      // },


      // {
      //   row: selectCarPlate,
      //   containerStyle: styles.mainContainer,
      //   index: 7,
      //   title: 'Plate number',
      //   plates: [
      //     {
      //       image: Images.introScreen.carPlate.dubai
      //     },
      //     {
      //       image: Images.introScreen.carPlate.abouDhabi
      //     },
      //     {
      //       image: Images.introScreen.carPlate.sharjah
      //     },
      //     {
      //       image: Images.introScreen.carPlate.rak
      //     },
      //     {
      //       image: Images.introScreen.carPlate.ajman
      //     },
      //     {
      //       image: Images.introScreen.carPlate.ummAlQuwain
      //     },
      //     {
      //       image: Images.introScreen.carPlate.fajira
      //     },
      //   ]
      // },
      {
        row: showWelcomeContent,
        containerStyle: styles.mainContainer,
        index: 8,
        title: t('generics.welcome'),
        subTitle:t('generics.sub')
      }

    ]
  }

  _renderDoneButton = () => {
    return <TouchableOpacity style={{backgroundColor:Colors.middleBlue,borderRadius:20,padding:10,paddingHorizontal:15}} onPress={()=>authStore?.setIntroScreen(false)}>
    <Text style={{color:'white',fontSize:15}}>{t('generics.start')}</Text>
  </TouchableOpacity>
  }

  _renderNavigationArrowButtons = (value) => {
    if (value === 'next') {
      return <View style={{width:70,height:70,alignItems:'flex-end'}}>
        <Image source={Images.rightArrow} style={[styles.nextButtonIcon]} />
      </View>
      
    } else {
      return <View style={{width:70,height:70,alignItems:'flex-start'}}>
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
    authStore.setIntroScreen(false)
    loadingModalStore.show = true
    loadingModalStore.getVendorList()
  }

  render() {
    // const { general } = this.TEXTS
    const { enableSkip } = this.state
    return (
      <>
        {/* <ChangeLanguageDropDown /> */}
        <AppIntroSlider
          ref={(ref) => (this.slider = ref)}
          data={this.slides}
          showSkipButton={false}
          showNextButton={enableSkip}
          showPrevButton={true}
          scrollEnabled={enableSkip}
          dotClickEnabled={enableSkip}
          activeDotStyle={{ backgroundColor: Colors.brown }}
          dotStyle={{ backgroundColor: Colors.midLightBrown }}
          onDone={() => this._onDone()}
          onSlideChange={(data) => {
            this.setState({position:data})
            data < 2 && this.state.gender.length == 0 && this.setState({ enableSkip: false })
          }
          }
          renderItem={this._renderItem}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={() => this._renderNavigationArrowButtons('next')}
          renderPrevButton={() => this._renderNavigationArrowButtons('back')}
        />
      </>
    )
  }
}

export default IntroScreen
