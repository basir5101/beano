/* eslint-disable no-magic-numbers */
import React, { Component, useCallback, useEffect } from 'react'
import { View, Image, TouchableOpacity, Dimensions, Alert, Pressable } from 'react-native'
import { SwiperFlatList } from 'react-native-swiper-flatlist'
// import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

import Video from '../../Components/Video'
import Text from '../../Components/Text'
// import Button from 'Components/Buttons/Button'
// import StreakView from 'Components/StreakView'
// import * as ImagePicker from 'react-native-image-picker'
// import { authStore, loadingModalStore, shopsStore } from 'Stores/StoreFactory'
// import DropDownPicker from 'react-native-dropdown-picker'
import Images from '../../Assets/Images'
import styles from './styles'
import { shopsStore } from '../../Stores/fakeData'

import videoClone from '../../Assets/Videos/cloneTest.mp4'
import blanco1 from '../../Assets/Videos/blanco1.mp4'
import blanco2 from '../../Assets/Videos/blanco2.mp4'
import Colors from '../../Assets/Constants/Colors'
import blanco3 from '../../Assets/Videos/blanco3.mp4'
import blanco4 from '../../Assets/Videos/blanco4.mp4'
import blanco5 from '../../Assets/Videos/blanco5.mp4'
import blanco6 from '../../Assets/Videos/blanco6.mp4'
import blanco7 from '../../Assets/Videos/blanco7.mp4'
import oneDegree1 from '../../Assets/Videos/oneDegree1.mp4'
import oneDegree2 from '../../Assets/Videos/oneDegree2.mp4'
import oneDegree3 from '../../Assets/Videos/oneDegree3.mp4'
import oneDegree4 from '../../Assets/Videos/oneDegree4.mp4'
import oneDegree5 from '../../Assets/Videos/oneDegree5.mp4'
import oneDegree6 from '../../Assets/Videos/oneDegree6.mp4'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
// import RNPickerSelect from 'react-native-picker-select';

// import { observer } from 'mobx-react'
import { useIsFocused } from '@react-navigation/native'
// // @observer
// @observer
class FeedScreen extends Component {
  // static propTypes = {
  //   navigation: PropTypes.object
  // }

  constructor(props) {
    super(props)

    this.state = {
      streak: 21,
      isLiked: false,
      isPaused: false,
      dataArray: [
        { index: 0, name: 'Blanco', title: 'Blanco', video: videoClone, image: Images.blancoLogo },
        { index: 1, name: 'Blanco', title: 'blanco speciality coffee', video: blanco1, image: Images.blancoLogo },
        { index: 8, name: 'jumeirah: one degree cafe', title: 'One Degree Cafe', video: oneDegree1, image: Images.oneDegreeLogo },
        { index: 3, name: 'Blanco', title: 'Blanco', video: blanco3, image: Images.blancoLogo },

        { index: 9, name: 'One Degree Cafe', title: 'One Degree Cafe', video: oneDegree2, image: Images.oneDegreeLogo },
        { index: 4, name: 'Blanco', title: 'Blanco', video: blanco4, image: Images.blancoLogo },

        { index: 10, name: 'One Degree Cafe', title: 'One Degree Cafe', video: oneDegree3, image: Images.oneDegreeLogo },
        { index: 6, name: 'Blanco', title: 'Blanco', video: blanco6, image: Images.blancoLogo },

        { index: 11, name: 'One Degree Cafe', title: 'One Degree Cafe', video: oneDegree4, image: Images.oneDegreeLogo },
        { index: 7, name: 'Blanco', title: 'Blanco', video: blanco7, image: Images.blancoLogo },
        { index: 2, name: 'Blanco', title: 'Blanco', video: blanco2, image: Images.blancoLogo },

        { index: 12, name: 'One Degree Cafe', title: 'One Degree Cafe', video: oneDegree5, image: Images.oneDegreeLogo },
        { index: 5, name: 'Blanco', title: 'Blanco', video: blanco5, image: Images.blancoLogo },

        { index: 13, name: 'One Degree Cafe', title: 'One Degree Cafe', video: oneDegree6, image: Images.oneDegreeLogo },
      ],
      currentIndex: 0,
      pauseVideo: false,
      selectedVideo: '',
      stores: [],
      refactoredData: [],
      storesItems: [],
      firstItem: 0,
      selectedStore: '',
      isMuted: false,
      branches: [],
      selectedBranch: ''
    }
  }


  // // this.TEXTS = LanguageStore.textLocale


  // setHeader() {
  //   const { navigation } = this.props
  //   const isVendor = authStore.userType === 'vendor'


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

  // async componentDidMount() {
  //   // this.setHeader()
  //   //onPress={() => navigation.navigate('StoreDetailsScreen')}
  //   // this.props.navigation.setParams({
  //   // })
  //   // this.props.navigation.addListener('willFocus', (playload) => {
  //   // });
  //   const focusListener = this?.props?.navigation?.addListener('focus', async () => {
  //     this?.setState({ firstItem: this?.props?.route?.params?.firstItem })
  //     await shopsStore?.getVendorStores()
  //     this?.setState({ stores: shopsStore?.storesList })
  //     await shopsStore.getNearbyStores({
  //       "within": 4000,
  //       "latitude": 32.8336224,
  //       "longitude": 35.6548414,
  //       "storeLike": "",
  //       "category": ""
  //     })
  //   })
  //   loadingModalStore.show = true
  //   const isVendor = authStore.userType === 'vendor'
  //   this?.setState({ firstItem: this?.props?.route?.params?.firstItem })
  //   !isVendor && await shopsStore.getReels()
  //   await shopsStore?.getVendorStores()
  //   this?.setState({ stores: shopsStore?.storesList })
  //   await shopsStore.getNearbyStores({
  //     "within": 4000,
  //     "latitude": 32.8336224,
  //     "longitude": 35.6548414,
  //     "storeLike": "",
  //     "category": ""
  //   })

  //   loadingModalStore.show = false

  //   //   this.setState({dataArray:shopsStore.reels})
  // }

  // toggleLike(index) {
  //   const isLiked = this.state[`isLiked${index}`]
  //   this.setState({ [`isLiked${index}`]: !isLiked })
  // }
  // togglePause(index) {
  //   const pauseVideo = this.state[`pauseVideo${index}`]
  //   this.setState({ [`pauseVideo${index}`]: !pauseVideo })
  // }

  // // onViewableitemsChanged = useRef(({ changed }) => {
  // //   const mediaRefs = useRef([])
  // //   changed.forEach(element => {
  // //     const cell = mediaRefs.current[element]
  // //   })
  // // })
  // onViewableitemsChanged = ({ viewableItems }) => {
  //   // const mediaRefs = useRef([])
  //   // Get the first viewable item
  //   const NB_ITEMS_SCREEN = 4
  //   const firstViewableItem = viewableItems[0]

  //   // Get its index into the items
  //   const index = this.state.dataArray.findIndex(item => item.key === firstViewableItem);

  //   // If the index is a multiple of the number of items displayable on the screen
  //   // by checking for a reminder on the modulo operation
  //   if ((index % NB_ITEMS_SCREEN) === 0) {

  //     // get page
  //     const currentPage = index / NB_ITEMS_SCREEN;
  //     if (currentPage !== this.state.currentPage) {
  //       // Do something and update currentPage in this.state
  //     }
  //   }
  // }

  // onChangeIndex = ({ index }) => {
  //   this.setState({ currentIndex: index })
  // }


  // async chooseVideo() {
  //   if (!this?.state?.selectedBranch && !this?.state?.selectedStore) {
  //     Alert?.alert('Make sure to select a store and a branch')
  //     return null
  //   }
  //   const options = {
  //     mediaType: 'video',
  //     includeBase64: true,
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images'
  //     }
  //   }

  //   await ImagePicker.launchImageLibrary(options, response => {
  //     if (response.didCancel) {
  //       loadingModalStore.show = false
  //       return 'canceled'

  //     } else if (response.error) {
  //       loadingModalStore.show = false
  //       return 'canceled'


  //     } else if (response.customButton) {
  //       loadingModalStore.show = false
  //       return 'canceled'

  //     } else {
  //       if (response.assets[0].type == 'video/mp4') {
  //         this.setState({ selectedVideo: `${response.assets[0].uri}` })
  //         loadingModalStore.show = false
  //         return 'canceled'


  //       }
  //     }
  //   })
  //   loadingModalStore.show = true
  //   await shopsStore.addVideoToFeed({ uri: this.state.selectedVideo, "branch": this?.state?.selectedBranch })
  //   loadingModalStore.show = false
  //   // You can also use as a promise without 'callback':
  //   // const result = await launchImageLibrary(options)
  // }
  render() {
    // const { navigation } = this.props
    // const isVendor = authStore.userType === 'vendor'
    // navigation.addListener('blur', () => {
    //   this.setState({ pauseVideo: true })
    // })
    // navigation.addListener('focus', () => this.setState({ pauseVideo: false }))
    const RenderItem = ({ item, index }) => {
      const { navigation } = this.props
      const { currentIndex, isPaused } = this.state
      const isLiked = this.state[`isLiked${item?.index}`]
      const pauseVideo = this.state[`pauseVideo${item?.index}`]
      // const data = shopsStore?.stores?.find((obj) => obj?.name?.toLowerCase()?.includes(item?.metadata?.branch?.name?.toLowerCase()))
      const data = shopsStore?.stores?.find((obj) => obj?.name?.toLowerCase()?.includes(item?.name?.toLowerCase()))
      const isLoggedIn = true;
      const isFocused = useIsFocused()
      return (
        <View style={[styles.renderView, { flex: 1, overflow: 'hidden' }]}>
          <Pressable style={{ position: 'absolute', marginTop: Dimensions?.get('window')?.height / 2 - 100, alignSelf: 'center', height: 200, width: 200, backgroundColor: 'transparent', zIndex: 2352523523 }} onPress={() => this?.togglePause(item?.index)}></Pressable>
        
          <Video isMuted={this?.state?.isMuted} paused={!isFocused || pauseVideo || (currentIndex !== index)} source={item.video} setRef={(ref) => { this.video = ref }} />
     
          <TouchableOpacity style={styles.videoTitleView} onPress={() => data && navigation?.navigate('StoreDetailsScreen', { data })}>

            <View style={{ backgroundColor: 'white', borderRadius: 10 }}>

            
              <Image source={item.image} style={styles.companyLogoImage} /></View>
            <View style={styles.companyTitleView}>
              <Text style={styles.companyName}>{item?.title}</Text>
            </View>
          </TouchableOpacity>
          {!isLoggedIn ? null : <TouchableOpacity onPress={() => {
            shopsStore.likeReel({
              "uuid": item?.metadata?.uuid,
              "like": !isLiked
            })
            this?.toggleLike(item?.index)
          }} style={{ position: 'absolute', right: 10, top: Dimensions?.get('window')?.height / 1.8, zIndex: 1000 }}>
            <MaterialIcon name={isLiked ? 'volume-off' : 'volume-up'} size={35} color={Colors?.lightPink} />
          </TouchableOpacity>}
          <TouchableOpacity onPress={() => this?.setState(prev => ({ isMuted: !prev?.isMuted }))} style={{ position: 'absolute', right: 10, top: Dimensions?.get('window')?.height / 1.6, zIndex: 1000 }}>
            <MaterialIcon name={this?.state?.isMuted ? 'volume-off' : 'volume-up'} size={35} color={Colors?.middleBlue} />
          </TouchableOpacity>
          <TouchableOpacity style={{ position: 'absolute', left: 10, top: Dimensions?.get('window')?.height / 1.8, zIndex: 1000 }}>
            <MaterialIcon name={'comment'} size={35} color={Colors?.middleBlue} />
          </TouchableOpacity>
          <TouchableOpacity style={{ position: 'absolute', left: 10, top: Dimensions?.get('window')?.height / 1.6, zIndex: 1000 }}>
            <MaterialIcon name={'ios-share'} size={35} color={Colors?.middleBlue} />
          </TouchableOpacity>
          <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', paddingBottom: -15, marginRight: 15 }}>
          </View>
          {pauseVideo ? <View style={{ position: 'absolute', top: Dimensions?.get('window')?.height / 2, alignSelf: 'center' }}>
            <MaterialIcon name='play-arrow' size={65} color={Colors?.middleBlue} />
          </View> : null}
        </View >
      )
    }
    // let refactoredDataVar = []
    // const data = shopsStore?.reels
    // data.map((item, index) => {
    //   if (index == this?.state?.firstItem) {
    //     refactoredDataVar.unshift(item)
    //   } else refactoredDataVar?.push(item)
    // })

    const { dataArray } = this.state
    // const PickerSelect = () => {
    //   const pickerCallback = useCallback(() => {
    //     return <RNPickerSelect
    //       placeholder={{ label: !!this?.state?.selectedStore ? this?.state?.selectedStore : 'Select a store' }}

    //       onValueChange={async (value) => {
    //         this.setState({ selectedStore: value })
    //         loadingModalStore.show = true

    //         await shopsStore.getBranchesList({ "store": value, "noImages": true, "vendor": authStore?.user?.user?.email || authStore?.user?.email })
    //         this?.setState({ branches: shopsStore?.branchesList })
    //         loadingModalStore.show = false



    //       }

    //       }
    //       items={this?.state?.stores?.map((item) => { return { label: item?.title, value: item?.name } })}
    //     />
    //   }, [shopsStore.storesList?.length, this?.state?.stores?.length, this?.state?.stores])

    //   return pickerCallback()
    // }
    // const PickerBranch = () => {
    //   const pickerCallback = useCallback(() => {
    //     return <RNPickerSelect
    //       placeholder={{ label: !!this?.state?.selectedBranch ? this?.state?.selectedBranch : 'Select a branch' }}
    //       onValueChange={(value) => { this.setState({ selectedBranch: value }) }}
    //       items={shopsStore?.branchesList?.filter((item) => item?.store?.toLowerCase() == this?.state?.selectedStore?.toLowerCase())?.map((item) => { return { label: item?.name, value: item?.name } })}
    //     />
    //   }, [shopsStore?.branchesList?.length, this?.state?.branches?.length, this?.state?.branches])
    //   return pickerCallback()
    // }

    return (

      <View style={styles.mainView}>

        <View style={styles.cardView}>
          {/* {isVendor
            ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
              <Text style={styles.feedTitle}>Upload your video to the feed</Text>

              <PickerSelect />
              <PickerBranch />
              <TouchableOpacity onPress={() => this.chooseVideo()}>
                <Image source={Images.plusIcon} style={styles.feedUploadVideo} />
              </TouchableOpacity>


            </View>
            : */}
           { this.state.dataArray?.length > 0 ? <SwiperFlatList
              vertical={true}
              style={{
                // borderTopLeftRadius: 30,
                // borderTopRightRadius: 30,
              }}
              // data={refactoredDataVar}
              // data={data}
              data={dataArray}
              renderItem={({ item, index }) => <RenderItem item={item} index={index} />}
              pagingEnabled
              keyExtractor={(item, index) => index.toString()}
              decelerationRate={'normal'}
              showsVerticalScrollIndicator={false}
              onViewableItemsChanged={this.onViewableitemsChanged}
              onChangeIndex={this.onChangeIndex}
            /> : null} 
        </View>
      </View>

    )
  }
}

export default FeedScreen