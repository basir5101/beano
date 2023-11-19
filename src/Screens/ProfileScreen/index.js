/* eslint-disable no-magic-numbers */
import React, { Component,useCallback } from 'react'
import { View, Image, ScrollView,TouchableOpacity,ActivityIndicator } from 'react-native'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import CountDown from 'react-native-countdown-component'

import { authStore,shopsStore} from 'Stores/StoreFactory'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Text from 'Components/Text'
import Button from 'Components/Buttons/Button'
import StreakView from 'Components/StreakView'

import Colors from 'Constants/Colors'
import Images from '../../Assets/Images'
import styles from './styles'
import { changeLanguage, t } from 'i18next'
import AsyncStorage from '@react-native-community/async-storage'


@observer
class ProfileScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  constructor(props) {
    super(props)

    this.state = {
      streak: 21,
      loading:false
      // points: authStore.user ? 150 : 0,

    }
    // this.TEXTS = LanguageStore.textLocale
  }

  componentDidMount() {
   
  }

  setHeader() {
    const { navigation } = this.props
    const isVendor = authStore.userType === 'vendor'

    navigation.setOptions({
      headerTitle: () => <View><Text style={{ fontSize: 20, color: Colors.veryDarkBlue }}>Profile</Text></View>,
      headerRight: () => {
        return (!isVendor && <StreakView title={'title'} description={'description'} />)
      }
    })
  }

  showDetailCards() {
    const username = authStore?.user?.user?.username || authStore.user?.username
    const email = authStore?.user?.user?.email || authStore.user?.email
    const data = [
      { title: 'name', text: username, image: Images.tabBar.person, imageType: 'person' },
      { title: 'Phone Number', text: '0569929923', image: Images.smartphone, imageType: 'phone' },
      { title: 'Email ID', text: email, image: Images.mail, imageType: 'mail' },
    ]

    return (
      <View style={{ width: '90%' }}>
        {
          data && data.map((d) => {
            return (
              <View style={styles.textView}>
                <View style={{ flexDirection: 'row', marginTop: 5, marginHorizontal: 20 }}>
                  <Image source={d.image} style={styles.cardImage} />

                  <Text style={{ fontSize: 15, color: Colors.middleBlue, opacity: 0.5, marginLeft: 12 }}>{d.title}</Text>
                </View>
                <Text style={{ fontSize: 20, color: Colors.middleBlue, marginHorizontal: 20, marginTop: 5 }}>{d.text}</Text>
              </View>
            )
          })
        }
      </View >
    )
  }

  componentDidMount() {
    this.setHeader()
  }


  render() {
    const { navigate } = this.props.navigation
    const isVendor = authStore.userType === 'vendor'
    const isLoggedIn = !!authStore?.user && !!( authStore.user.username || authStore?.user?.user?.username)
    const streakData = shopsStore.streakDetails

const ShowButtons = ()=>{
  const showButtons = useCallback(()=>{
    return <>
    <Button disabled={false} style={{ opacity: true ? 1 : 0.5, marginTop: true ? 20 : 80, backgroundColor: Colors.middleBlue, width: '90%', height: 55, borderRadius: 8, flexDirection: 'row', alignItems: 'center',alignSelf:'center',justifyContent:'center' }} onPress={async()=>{
           await AsyncStorage.setItem('language','en')
           authStore.setLanguage('en')
            changeLanguage('en')
          }}>
            <Text style={{color:'white'}}>{t('settings.en')}</Text>
          </Button>
          <Button disabled={false} style={{ opacity: true ? 1 : 0.5, marginTop: true ? 20 : 80, backgroundColor: Colors.middleBlue, width: '90%', height: 55, borderRadius: 8, flexDirection: 'row', alignItems: 'center',alignSelf:'center',justifyContent:'center' }} onPress={async ()=>{
           await AsyncStorage.setItem('language','ar')
            authStore.setLanguage('ar')
            changeLanguage('ar')}}>
            <Text style={{color:'white'}}>{t('settings.ar')}</Text>
          </Button>
          </>
  },[authStore.language])
  return showButtons()
}
 
    return (

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.mainView}>
        {/* <View style={styles.profileImageView}>
        </View> */}

        <View style={styles.cardView}>
          <View style={styles.profileImageView}>
            <View style={styles.profileImageSubView}>
              <View style={styles.profileImageBackgroundView}>
                <Image source={Images.introScreen.male} style={styles.profileImage} />
              </View>
            </View>
          </View>
       {isLoggedIn && streakData?.end ?   <View style={{alignSelf:'center',marginTop:10}}>
          <MaterialIcon size={50} color={Colors.lightPink} name='hourglass-bottom'/>
          </View> : null}
          {isLoggedIn && streakData?.end ?   <View style={{alignSelf:'center',marginTop:10}}>
          <Text style={{color:Colors.middleBlue}}>{`Enjoy ${shopsStore?.streakDetails?.userDiscount || 15}% off on all coffee items`}</Text>

          </View> : null}

          {/* <Card /> */}
          <View style={styles.body}>
            {/* <Text style={styles.points}>{points} Points</Text> */}
        

            {(authStore.user && (authStore?.user?.user?.username || authStore?.user?.username))
              ? this.showDetailCards()
              : <Button style={{ marginTop: 20, backgroundColor: Colors.middleBlue, width: '90%', height: 55, borderRadius: 8, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigate('SignupScreen')}>
             
                <Text style={{ fontSize: 20, color: Colors.white, flex: 1, textAlign: 'center' }}>Sign Up</Text>
              </Button>}

            {(authStore.user && (authStore?.user?.user?.username || authStore?.user?.username) ) && !isVendor &&
              <TouchableOpacity onPress={()=>navigate('OrdersScreen')} style={{ marginTop: 20, backgroundColor: '#F9F9F9', width: '90%', height: 55, borderRadius: 8, flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }}>
                <Image source={Images.paper} style={{ resizeMode: 'contain', width: 18, height: 18, marginTop: 3 }} />
                <Text style={{ fontSize: 20, color: Colors.middleBlue, marginHorizontal: 20, }}>Your Orders</Text>

                <View style={{ marginLeft: 120 }}>
                  <Image source={Images.rightArrow} style={{ resizeMode: 'contain', width: 18, height: 18, marginTop: 3 }} />
                </View>
              </TouchableOpacity>}

            {/* <TouchableOpacity style={{ marginTop: 20, backgroundColor: '#F9F9F9', width: '90%', height: 55, borderRadius: 8, flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }} onPress={()=>this?.props?.navigation?.navigate('SettingsScreen')}>
              <Image source={Images.settings} style={{ resizeMode: 'contain', width: 18, height: 18, marginTop: 3 }} />
              <Text style={{ fontSize: 20, color: Colors.middleBlue, marginHorizontal: 20, }}>Settings</Text>

              <View style={{ marginLeft: 160 }}>
                <Image source={Images.rightArrow} style={{ resizeMode: 'contain', width: 18, height: 18, marginTop: 3 }} />
              </View>
            </TouchableOpacity> */}

            <View style={{ marginTop: 20, backgroundColor: '#F9F9F9', width: '90%', height: 55, borderRadius: 8, flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }}>
              <Image source={Images.quote} style={{ resizeMode: 'contain', width: 18, height: 18, marginTop: 3 }} />
              <Text style={{ fontSize: 20, color: Colors.middleBlue, marginHorizontal: 20, }}>Help</Text>

              <View style={{ marginLeft: 188 }}>
                <Image source={Images.rightArrow} style={{ resizeMode: 'contain', width: 18, height: 18, marginTop: 3 }} />
              </View>
            </View>

            <View style={{ marginTop: 20, backgroundColor: '#F9F9F9', width: '90%', height: 55, borderRadius: 8, flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }}>
              <Image source={Images.informationCircle} style={{ resizeMode: 'contain', width: 18, height: 18, marginTop: 3 }} />
              <Text style={{ fontSize: 20, color: Colors.middleBlue, marginHorizontal: 20, }}>About App</Text>

              <View style={{ marginLeft: 130, }}>
                <Image source={Images.rightArrow} style={{ resizeMode: 'contain', width: 18, height: 18, marginTop: 3, }} />
              </View>
            </View>
            {/* 
            {data && data.map((d) => {
              return (
                <View style={styles.textView}>
                  <View style={{ flexDirection: 'row', marginTop: 5, marginHorizontal: 20 }}>
                    <Image source={Images.tabBar.person} style={styles.cardImage} />

                    <Text style={{ fontSize: 15, color: Colors.middleBlue, opacity: 0.5, marginLeft: 12 }}>Name</Text>
                  </View>
                  <Text style={{ fontSize: 20, color: Colors.middleBlue, marginHorizontal: 20, marginTop: 5 }}>Leila Geller</Text>
                </View>
              )
            })} */}

            {/* <View style={styles.textView}>
              <View style={{ flexDirection: 'row', marginTop: 5, marginHorizontal: 20 }}>
                <Image source={Images.tabBar.person} style={styles.cardImage} />

                <Text style={{ fontSize: 15, color: Colors.middleBlue, opacity: 0.5, marginLeft: 12 }}>Name</Text>
              </View>
              <Text style={{ fontSize: 20, color: Colors.middleBlue, marginHorizontal: 20, marginTop: 5 }}>Leila Geller</Text>
            </View> */}

          </View>
          {authStore?.user ?<Button disabled={false} style={{ opacity: true ? 1 : 0.5, marginTop: true ? 20 : 80, backgroundColor: Colors.middleBlue, width: '90%', height: 55, borderRadius: 8, flexDirection: 'row', alignItems: 'center',alignSelf:'center',justifyContent:'center' }} onPress={async () => {
          if(Object?.keys(authStore?.user ?? {})?.length == 0){
            Alert?.alert('You should be logged in')
          }
          
          this?.setState({loading:true})
          await authStore.logout()
          this?.props?.navigation?.goBack()
          this?.setState({loading:false})

          }}>
              {this.state.loading
                ? <ActivityIndicator style={{ alignItems: 'center', flex: 1 }} size='large' color='white' />
                :
                  <Text style={{ fontSize: 20, color: Colors.white, }}>{'Log Out'}</Text>
                }
            </Button> : null}
          <ShowButtons />
        </View>
      </ScrollView>

    )
  }
}

export default ProfileScreen
