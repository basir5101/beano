/* eslint-disable no-magic-numbers */
import React, { Component } from 'react'
import { View, ScrollView, Image, Dimensions} from 'react-native'
import { observer } from 'mobx-react'
import { autorun } from 'mobx'
import PropTypes from 'prop-types'
// import MapView from 'react-native-maps'
import * as ImagePicker from 'react-native-image-picker'



import { shopsStore, authStore, loadingModalStore } from 'Stores/StoreFactory'

import TextInput from 'Components/TextInput'
import Button from 'Components/Buttons/Button'
import Text from 'Components/Text'
import HorizontalCard from 'Components/Cards/HorizontalCard'

import Colors from 'Constants/Colors'
import Images from '../../Assets/Images'
import styles from './styles'


@observer
class AddBranchScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  constructor(props) {
    super(props)

    this.state = {
      streak: 21,
      loading: false,

      selectedImage: '',
      branchName: '',
      description: '',
      branchTitle: '',
      branchEmail: '',
      branchNumber: '+971',
      latitude:'',
      longitude:''
    }
    // this.TEXTS = LanguageStore.textLocale
  }

  setHeader() {
    const { navigation } = this.props


    navigation.setOptions({
      headerTitle: () => <View><Text style={{ fontSize: 25, color: Colors.middleBlue, }}>Add Branch</Text></View>,
      // headerLeft: () => <View style={styles.headerLeftButtonsContainer}></View>,
      headerRight: () => {
        return (<View></View>)
      }
    })
  }

  showSaluteTitle() {
    const isLoggedIn = authStore.user &&( authStore.user.username || authStore?.user?.user?.username)
    return (
      <View>
        <Text style={styles.title}>
          Hello {isLoggedIn ? 'Firas' : ''}
        </Text>
        <Text style={styles.subTitle}>
          Feeling a coffee?
        </Text >
      </View>
    )
  }

  async componentDidMount() {
    autorun(() => this.setHeader())

    this.setState({ loading: false })
  }

  setInput(name, value) {
    this.setState({ [name]: value })
  }

  showVendorInputs() {

    const data = [
      { title: 'branchName', text: 'Leila Geller', image: Images.tabBar.person, imageType: 'person', placeholder: 'Branch Name', name: 'branchName' },
      { title: 'description', text: 'Leila Geller', image: Images.tabBar.person, imageType: 'person', placeholder: 'Description', name: 'description' },
      { title: 'email', text: 'leila.geller@gmail.com', image: Images.mail, imageType: 'mail', placeholder: 'Johndoe@gmail.com', usedForSignIn: true, name: 'branchEmail' },
      { title: 'phone', text: 'leila.geller@gmail.com', image: Images.mail, imageType: 'mail', placeholder: '+1 123456789', usedForSignIn: true, name: 'branchNumber' },
      { title: 'latitude', text: '0', image: Images.locationCheckin, imageType: 'mail', placeholder: 'Latitude', usedForSignIn: true, name: 'latitude' },
      { title: 'longitude', text: '0', image: Images.locationCheckin, imageType: 'mail', placeholder: 'Longitude', usedForSignIn: true, name: 'longitude' },
    ]

    return (
      <View style={{  width: Dimensions.get('window').width,alignItems:'center' }}>
        {
          data && data.map((d) => {
            // const showSignInTabs = (signUp || d.usedForSignIn)
            return (
              <View>
                {<View style={styles.textView}>
                  {/* <View style={{ flexDirection: 'row', marginTop: 5, marginHorizontal: 20, }}>
                    <Image source={d.image} style={styles.cardImage} />

                    <Text style={{ fontSize: 15, color: Colors.middleBlue, opacity: 0.5, marginLeft: 12 }}>{d.title}</Text>
                  </View> */}
                  <TextInput
                    value={this.state[d.name]}
                    field={d.name}
                    onChangeText={(field, value) => this.setInput(field, value)}
                    hasShadow={false}
                    isPassword={d.isPassword}
                    placeholder={d.placeholder}
                    containerStyle={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8, backgroundColor: '#F9F9F9', color: Colors.middleBlue, width: '100%', height: 40, fontSize: 20 }} />
                </View>}
              </View>
            )
          })
        }
      </View>
    )
  }

  showStores() {
    const { navigation } = this.props

    return (shopsStore.storesList && shopsStore.storesList.map((data, id) => {
      return (
        <HorizontalCard title={data.name} buttonText={'Stores'} onPress={() => navigation.navigate('StoresScreen', { data })} {...this.props} data={data} />
      )
    })
    )
  }

  async chooseImage() {
    const options = {
      maxWidth: 900,
      maxHeight: 400,
      mediaType: 'photo',
      includeBase64: true,
      quality:0.5,
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }
    await ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        const source = { uri: response.uri }
        this.setState({ selectedImage: `data:image/png;base64,${response.assets[0].base64}` })
        // setImage(source);
      }
    })

    // You can also use as a promise without 'callback':
    // const result = await launchImageLibrary(options)
  }

  async createNewBranch() {
    const { navigation } = this.props
    const { branchName, description, latitude,longitude, branchEmail, branchNumber, selectedImage } = this.state

    //(branchName.length > 0 && description.length > 0 && branchTitle.length > 0 && branchEmail.length > 0 && branchNumber.length > 0 && selectedImage.length > 0)
    const params = {
      "name": branchName,
      "description": description,
      "store": this.props?.route?.params?.name,
      "email": branchEmail,
      "title":this.props?.route?.params?.name?.toUpperCase(),
      "latitude": latitude,
      "longitude": longitude,
      "phone": branchNumber,
      "image": selectedImage
    }

    loadingModalStore.show = true
    await shopsStore.createNewBranch(params)
    loadingModalStore.show = false
    navigation.pop()

  }


  render() {

    const { branchName, description, branchTitle, branchEmail, branchNumber, selectedImage,latitude,longitude } = this.state
    const enabled = !!branchName && !!branchEmail && !!selectedImage && !!latitude && !!longitude && !!branchNumber && !!description && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(branchEmail)

    return (

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.mainView}>

        <View style={styles.cardView}>

          {/* <Text style={{ fontSize: 25, color: Colors.middleBlue, }}>Add Store</Text> */}


          {this.showVendorInputs()}

          <Button style={{ marginTop: 20, backgroundColor: '#F9F9F9', width: '90%', height: 55, borderRadius: 8, flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }} onPress={() => this.chooseImage()}>
            <Text style={{ fontSize: 20, color: Colors.middleBlue, flex: 1, }}>Choose Image</Text>
            {selectedImage.length > 1 && <Image source={{ uri: selectedImage }} style={styles.smallCardImage} />}
            <View style={{ width: 41, height: 41, borderRadius: 25, alignItems: 'center', justifyContent: 'center', }}>
              <Image source={Images.imageIcon} style={{ resizeMode: 'contain', width: 18, height: 18 }} />
            </View>
          </Button>

          <Button disabled={!enabled} style={{ marginTop: 20, backgroundColor: Colors.middleBlue, width: '90%', height: 55, borderRadius: 8, flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }} onPress={() => this.createNewBranch()}>
            <Text style={{ fontSize: 20, color: Colors.white, marginRight: 41, flex: 1, textAlign: 'center' }}>Add Branch</Text>
          </Button>

        </View>

      </ScrollView>

    )
  }
}

export default AddBranchScreen
