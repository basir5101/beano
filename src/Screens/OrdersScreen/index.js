/* eslint-disable no-magic-numbers */
import React, { Component } from 'react'
import { View, Text, ScrollView, StatusBar, RefreshControl, Modal, ActivityIndicator } from 'react-native'
import { Center, Container, NativeBaseProvider } from 'native-base'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

import { shopsStore,authStore } from 'Stores/StoreFactory'

import TextInput from 'Components/TextInput'
import Card from 'Components/Card'
import HorizontalCard from 'Components/Cards/HorizontalCard'
import StreakView from 'Components/StreakView'

import Colors from 'Constants/Colors'
import Images from '../../Assets/Images'
import styles from './styles'
import DimensionHelper from '../../Helpers/DimensionHelper'


@observer
class OrdersScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      searchStores: '',
      category: this.props.route.params ? this.props.route.params.data.name : ''
    }
    // this.TEXTS = LanguageStore.textLocale
  }

  setHeader() {
    const { navigation } = this.props

    navigation.setOptions({
      headerTitle: () => <View><Text style={{ fontSize: 20,color:'black' }}>Orders</Text></View>,
      // headerLeft: () => <View style={styles.headerLeftButtonsContainer}></View>,
      headerRight: () => {
        return (<View></View>)
      }
    })
  }


  async componentDidMount() {

    this.setHeader()


    //call get nearby branches
    this.focusListener = this?.props?.navigation?.addListener('focus',async()=>{
      await shopsStore.getVendorOrders() 
    await shopsStore.getCustomerOrders()
    })
    this.setState({ loading: true })
 
    await shopsStore.getVendorOrders() 
    await shopsStore.getCustomerOrders()
 
    this.setState({ loading: false })

  }

  async searchStores(searchStoresText) {
    const { category } = this.state
    this.setState({ loading: true })
    await shopsStore.getNearbyStores({
      "within": 4000,
      "latitude": 32.8336224,
      "longitude": 35.6548414,
      "storeLike": searchStoresText,
      "category": category
    })
    this.setState({ loading: false })
  }

  showCards(data) {
    const { navigation } = this.props
    return (data?.length > 0 && data.map((d, id) => {
      return (
        <HorizontalCard containerStyle={{width:'90%',alignSelf:'center',marginVertical:DimensionHelper.getHeight(20)}} key={id} data={d} hasSubtitle={true} title={d.items[0].productName} {...this.props} />
      )
    })
    )
  }


  render() {
    const isVendor = authStore.userType === 'vendor'
    const { loading } = this.state

    return (

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.mainView}>

        <View style={styles.cardView}>

          {loading
            ? <ActivityIndicator style={{ flex: 1, alignItems: 'center' }} size={'large'} color={'grey'} />
            : this.showCards(isVendor ? shopsStore.vendorOrders : shopsStore.customerOrders)}


        </View>

      </ScrollView>

    )
  }
}

export default OrdersScreen
