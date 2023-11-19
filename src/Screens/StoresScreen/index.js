/* eslint-disable no-magic-numbers */
import React, { Component } from 'react'
import { View, Text, ScrollView, StatusBar, RefreshControl, Modal, ActivityIndicator, Dimensions } from 'react-native'
// import { Center, Container, NativeBaseProvider } from 'native-base'
// import { observer } from 'mobx-react'
// import PropTypes from 'prop-types'

// import { shopsStore, } from 'Stores/StoreFactory'
// import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

// import TextInput from 'Components/TextInput'
// import Card from 'Components/Card'
// import HorizontalCard from 'Components/Cards/HorizontalCard'
// import StreakView from 'Components/StreakView'

// import Colors from 'Constants/Colors'
// import Images from '../../Assets/Images'
// import styles from './styles'


// @observer
class StoresScreen extends Component {
  // static propTypes = {
  //   navigation: PropTypes.object
  // }

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     loading: false,
  //     searchStores: '',
  //     category: this.props.route.params ? this.props.route.params.data.name : '',
  //   }
  //   // this.TEXTS = LanguageStore.textLocale
  // }

  // setHeader() {
  //   const { navigation } = this.props

  //   navigation.setOptions({
  //     headerTitle: () => <View></View>,
  //     // headerLeft: () => <View style={styles.headerLeftButtonsContainer}></View>,
  //     headerRight: () => {
  //       return (<StreakView title={'title'} description={'description'} />)
  //     }
  //   })
  // }


  // async componentDidMount() {
  //   const { searchStores, category } = this.state
  //   this.setHeader()
  //   //call get nearby branches
  //   this.setState({ loading: true })
  //   this.focusListener = this.props.navigation.addListener('focus',async ()=>{
  //     await shopsStore.getNearbyStores({
  //       "within": 4000,
  //       "latitude": 32.8336224,
  //       "longitude": 35.6548414,
  //       "storeLike": searchStores,
  //       "category": category
  //     })
  //   })

  //   await shopsStore.getNearbyStores({
  //     "within": 4000,
  //     "latitude": 32.8336224,
  //     "longitude": 35.6548414,
  //     "storeLike": searchStores,
  //     "category": category
  //   })
  //   this.setState({ loading: false })
  // }

  // async searchStores(searchStoresText) {
  //   const { category } = this.state
  //   this.setState({searchStores:searchStoresText})
  //   this.setState({ loading: true })
  //   await shopsStore.getNearbyStores({
  //     "within": 4000,
  //     "latitude": 32.8336224,
  //     "longitude": 35.6548414,
  //     "storeLike": searchStoresText,
  //     "category": category
  //   })
  //   this.setState({ loading: false })
  // }

  // showCards() {
  //   const { navigation } = this.props
  //   const {store} = this?.props?.route?.params || {}
  //   return (shopsStore.stores && shopsStore.stores.filter(item=>(!!item?.enabled &&  store ? item?.store === store : true))?.map((d, id) => {
  //     return (
  //       <HorizontalCard onImagePress={()=>navigation.navigate('StoreDetailsScreen', { data: d })} titleStyle={{fontSize:15}} containerStyle={{width:'90%',alignSelf:'center',marginBottom:20}}  key={id} data={d} hasSubtitle={true} title={d.name} buttonText={'Menu'} onPress={() => navigation.navigate('StoreDetailsScreen', { data: d })} {...this.props} />
  //     )
  //   })
  //   )
  // }


  render() {
    // const { navigation } = this.props
    // const { loading } = this.state

    return (

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.mainView}>
        {/* <View style={styles.titleView}>

          <TextInput
            onChangeText={(field, text) => this.searchStores(text)}
            containerStyle={styles.searchInput}
            value={this.state.searchStores}
            iconLeft={{ source: Images.search, isImage: true }}
            placeholder={'Find your favorite coffee'} isFullWidth={true} />
        </View>

        <View style={styles.cardView}>

          {loading
            ? <View style={{backgroundColor:'white',flex:1,borderTopRightRadius:35,borderTopLeftRadius:35,paddingTop:30, paddingHorizontal:10}}>
            <SkeletonPlaceholder borderRadius={4} marginBottom={20}>
             <SkeletonPlaceholder.Item flexDirection='column' paddingLeft={'2.5%'}>
             <SkeletonPlaceholder.Item width={Dimensions.get('window').width/1.1} height={130} borderRadius={15} marginRight={15} marginBottom={25}/>
             <SkeletonPlaceholder.Item width={Dimensions.get('window').width/1.1} height={130} borderRadius={15} marginRight={15} marginBottom={25}/>
             <SkeletonPlaceholder.Item width={Dimensions.get('window').width/1.1} height={130} borderRadius={15} marginRight={15} marginBottom={25}/>
             <SkeletonPlaceholder.Item width={Dimensions.get('window').width/1.1} height={130} borderRadius={15} marginRight={15} marginBottom={25}/>
          
           </SkeletonPlaceholder.Item>
         </SkeletonPlaceholder>
         </View> 
            : this.showCards()}


        </View> */}

      </ScrollView>

    )
  }
}

export default StoresScreen
