/* eslint-disable no-magic-numbers */
import React, { Component } from 'react'
import { View, Text, ScrollView, StatusBar, RefreshControl, Dimensions, ActivityIndicator } from 'react-native'
// import { Center, Container, NativeBaseProvider } from 'native-base'
// import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
// import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
// import { shopsStore, } from 'Stores/StoreFactory'

// import TextInput from 'Components/TextInput'
// import Card from 'Components/Card'
import HorizontalCard from '../../Components/Cards/HorizontalCard'
// import StreakView from 'Components/StreakView'

// import Colors from 'Constants/Colors'
import Images from '../../Assets/Images'
import styles from './styles'
import TextInput from '../../Components/TextInput'
import { shopsStore } from '../../Stores/fakeData'


// @observer
class CategoriesScreen extends Component {
  // static propTypes = {
  //   navigation: PropTypes.object
  // }

  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      query : ''
    }
    // this.TEXTS = LanguageStore.textLocale
  }

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
  //   this.setHeader()
  //   this.setState({ loading: true }) 
  //   await shopsStore.getCategoriesList()
  //   this.setState({ loading: false })
  // }

  showCards() {
    const { navigation } = this.props
    const {data,isCoffees,isFeat} = this?.props?.route?.params || {}

    const {query} = this.state
    return (((data?.length > 0 && data) || (shopsStore.categoriesList && shopsStore.categoriesList))?.map((data, id) => {
      return (
        <HorizontalCard containerStyle={{width:'90%',alignSelf:'center',marginTop:20}} titleStyle={{fontSize:15}} title={data?.description} buttonText={isCoffees ? 'Details'  :'Stores'} onPress={() => isCoffees ? navigation.navigate('Product Details',{data}) : navigation.navigate(isFeat ? 'CustomerBranchesScreen' : 'StoresScreen', { data })} {...this.props} data={data} />
      )
    })
    )
  }


  render() {
    // const data = this?.props?.route?.params?.data
    // const { navigation } = this.props
    const { loading } = this.state


    return (

      <ScrollView
        // contentContainerStyle={{ flexGrow: 1 }} style={styles.mainView}
      >
         <View style={styles.titleView}>
          <TextInput
            containerStyle={styles.searchInput}
            value={this.state.query}
            iconLeft={{ source: Images.search, isImage: true }}
            onChangeText={(field,val) => this.setState({ query: val })}
            placeholder={'Find your favorite coffee'} isFullWidth={true} />
        </View> 

        <View
          style={styles.cardView}
        >

          {loading
            ?  <View style={{backgroundColor:'white',flex:1,borderTopRightRadius:35,borderTopLeftRadius:35,paddingTop:30, paddingHorizontal:10}}>
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

        </View>
      </ScrollView>

    )
  }
}

export default CategoriesScreen
