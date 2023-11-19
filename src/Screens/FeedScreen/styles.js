/* eslint-disable no-magic-numbers */
import { StyleSheet, Dimensions, Platform } from 'react-native'
import Colors from 'Constants/Colors'
import DimensionHelper from 'Helpers/DimensionHelper'
// import DeviceStore from 'Stores/DeviceStore'

module.exports = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.headerLightPink,
  },
  headerRight: {
    color: Colors.veryDarkBlue
  },
  cardView: {
    flex: 1,
    // width: '100%',
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // marginTop: DimensionHelper.getHeight(10),
    // paddingHorizontal: 20,
    // paddingTop: DimensionHelper.getHeight(19)
  },
  renderView: {
    flex: 1,
    // height: DimensionHelper.getHeight(707)
    height: Dimensions.get('window').height - DimensionHelper.getHeight(80),
    // height: DimensionHelper.getHeight(707)
  },
  videoTitleView: {
    flexDirection: 'row',
    paddingTop: DimensionHelper.getHeight(55),
    paddingLeft: DimensionHelper.getWidth(20)
  },
  companyLogoImage: {
    width: DimensionHelper.getWidth(45),
    height: DimensionHelper.getHeight(45),
    borderRadius: 25
  },
  companyTitleView: {
    marginLeft: DimensionHelper.getWidth(10),
    justifyContent: 'center'
  },
  companyName: {
    color: Colors.white,
    fontSize: DimensionHelper.normalize(25),
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  postTime: {
    color: Colors.white,
    fontSize: DimensionHelper.normalize(12),
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  like: {
    width: DimensionHelper.getWidth(26),
    height: DimensionHelper.getHeight(23),
    marginBottom: DimensionHelper.getHeight(20),
    marginRight: DimensionHelper.getWidth(4)
  },
  share: {
    width: DimensionHelper.getWidth(22),
    height: DimensionHelper.getHeight(29),
    marginRight: DimensionHelper.getWidth(6),
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  feedTitle: {
    fontSize: DimensionHelper.normalize(35),
    color: Colors.darkBlue,
    textAlign: 'center'
  },
  feedUploadVideo: {
    marginTop: DimensionHelper.getHeight(30),
    width: DimensionHelper.getWidth(60),
    height: DimensionHelper.getHeight(60),
  },



  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  headerView: {
    alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
  },
  headerTitle: {
    fontSize: DimensionHelper.normalize(20),
    color: 'black',
    fontWeight: 'bold'
  },
  headerSubTitle: {
    fontSize: DimensionHelper.normalize(12),
    top: -DimensionHelper.getHeight(1)
  },
  infoBarContainer: {
    backgroundColor: Colors.blue,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGrey
  },

  // avatarOverlayStyle: {
  //   ...styles.avatarOverlayStyle,
  //   borderColor: '#f1f1f1'
  // },
  // avatarOverlayStyleGreen: {
  //   ...styles.avatarOverlayStyle,
  //   borderColor: 'green',
  // },
  // avatarOverlayStyleRed: {
  //   ...styles.avatarOverlayStyle,
  //   borderColor: 'red',
  // },

})
