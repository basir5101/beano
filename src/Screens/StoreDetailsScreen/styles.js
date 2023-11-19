/* eslint-disable no-magic-numbers */
import { StyleSheet, Dimensions, Platform } from 'react-native'
import Colors from 'Constants/Colors'
import DimensionHelper from 'Helpers/DimensionHelper'
// import DeviceStore from 'Stores/DeviceStore'

const { width } = Dimensions.get('window')


const styles = {
  // avatarOverlayStyle: {
  //   alignSelf: 'center',
  //   borderWidth: 5,
  //   borderRadius: AVATAR_SIZE / 2,
  // },

  // employeeSelectionBadge: {
  //   position: 'absolute',
  //   width: AVATAR_SIZE / 4,
  //   height: AVATAR_SIZE / 4,
  //   borderRadius: AVATAR_SIZE / 8,
  //   alignItems: 'center',
  //   top: 0,
  //   right: AVATAR_SIZE / 4,
  // }
}

module.exports = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  titleView: {
    // paddingHorizontal: 20,

    // width: '100%',
    // height: '100%'
  },
  title: {
    fontFamily: "futura",
    color: '#5A3830',
    fontSize: DimensionHelper.normalize(25)
  },
  subTitle: {
    fontSize: DimensionHelper.normalize(10)
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    // paddingRight: DimensionHelper.getWidth(10)
  },
  searchInput: {
    marginTop: DimensionHelper.getHeight(20),
    borderRadius: 20,
  },
  headerRight: {
    color: Colors.veryDarkBlue
  },
  cardView: {
    flex: 1,
    // width: '100%',DimensionHelper.getHeight(100),
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    paddingTop: DimensionHelper.getHeight(19),
    shadowColor: Colors.lightPink,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 1,
    shadowRadius: 2
  },
  cardImage: {
    width: Dimensions.get('window').width,
    height: DimensionHelper.getHeight(250),

  },
  headerView: {
    flexDirection: 'row',
    marginHorizontal: DimensionHelper.getWidth(20)
  },
  storeName: {
    flex: 1,
    fontSize: DimensionHelper.normalize(20),
    color: Colors.middleBlue
  },
  subHeaderView: {
    flexDirection: 'row',
    marginHorizontal: DimensionHelper.getWidth(20),
    marginTop: DimensionHelper.getHeight(13),
    alignItems: 'center'
  },
  ratingView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  storeLocation: {
    fontSize: DimensionHelper.normalize(18),
    color: Colors.darkBrown
  },
  distanceToStore: {
    color: Colors.middleBlue,
    fontSize: DimensionHelper.normalize(18)
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightPink,
    padding: 7,
    borderRadius: 12,
  },
  ratingScore: {
    color: Colors.middleBlue,
    fontSize: DimensionHelper.normalize(13)
  },
  ratingsCount: {
    color: Colors.midLightGrey,
    marginLeft: DimensionHelper.getWidth(8),
    fontSize: DimensionHelper.normalize(12)
  },
  starRatingImage: {
    resizeMode: 'contain',
    width: DimensionHelper.getWidth(30),
    height: DimensionHelper.getHeight(20),
  },
  deliveryImage: {
    resizeMode: 'contain',
    width: DimensionHelper.getWidth(30),
    height: DimensionHelper.getHeight(20),
    marginRight: DimensionHelper.getWidth(12)
  },
  lineSeparator: {
    marginTop: DimensionHelper.getHeight(20),
    borderWidth: 1,
    borderColor: Colors.lightOrange,
    opacity: 0.3,
    marginHorizontal: DimensionHelper.getWidth(20)
  },
  menuTitleView: {
    marginTop: DimensionHelper.getHeight(20),
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Colors.darkBrown
  },
  menuTitle: {
    fontSize: DimensionHelper.normalize(18),
    color: Colors.darkBrown
  },




  //// Intro Screen Styles
  mainContainer: {
    // paddingTop: DimensionHelper.getHeight(50)
    flex: 1,
    backgroundColor: '#416575',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedTitle: {
    textAlign: 'center',
    fontSize: DimensionHelper.normalize(45),
    color: Colors.middleBlue,
    height: DimensionHelper.getHeight(45)
  },
  mainCheckBoxContainer: {
    flex: 1,
    backgroundColor: Colors.lightPink,
    paddingTop: DimensionHelper.getHeight(180),
    alignItems: 'center',
  },
  mainChooseBoxView: {
    flexDirection: 'row',
    paddingTop: DimensionHelper.getHeight(80)
  },
  // introMainView: {
  //   flexDirection: 'row',
  // },
  introCardView: isSelected => ({
    marginHorizontal: DimensionHelper.getWidth(10),
    borderRadius: 15,
    width: DimensionHelper.getWidth(152),
    height: DimensionHelper.getHeight(227),
    backgroundColor: Colors.middleBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: isSelected ? 3 : 0,
    borderColor: isSelected ? Colors.white : '#'
  }),
  cardText: {
    color: Colors.white,
    fontSize: DimensionHelper.normalize(200),
  },
  introCardImage: {
    width: '100%',
    height: '100%'
  },
  nextButtonIcon: {
    tintColor: Colors.white,
    width: DimensionHelper.getWidth(13),
    height: DimensionHelper.getHeight(23)
  },
  image: {
    // flex: 1,
    width: '100%',
    height: '70%',
    resizeMode: 'contain',
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end'
  },
  fullscreenImage: {
    width: '100%',
    height: '100%',
    zIndex: -1,
    position: 'absolute'
  },
  introTitle: {
    color: Colors.white,
    fontSize: DimensionHelper.normalize(20),
    textAlign: 'center',
  },
  introTitleWithoutImage: {
    color: Colors.white,
    fontSize: DimensionHelper.normalize(20),
    textAlign: 'center',
    marginTop: DimensionHelper.getHeight(300)
  },
  introSubTitle: {
    color: Colors.darkBrown,
    fontSize: DimensionHelper.normalize(20),
    textAlign: 'center',
    paddingTop: DimensionHelper.getHeight(10)
  },
  onBoardingTitle: {
    color: Colors.middleBlue,
    fontSize: DimensionHelper.normalize(47),
    textAlign: 'center',
    paddingTop: DimensionHelper.getHeight(150)
  },
  onBoardingInputView: {
    alignItems: 'center',
    marginHorizontal: 10,
    paddingTop: DimensionHelper.getHeight(20)
  },
  onBoardingText: {
    marginLeft: DimensionHelper.getWidth(10),
    fontSize: DimensionHelper.normalize(14),
    color: Colors.middleBlue,
  },
  welcomeView: {
    alignItems: 'flex-end',
    paddingRight: DimensionHelper.getWidth(15),
    paddingTop: DimensionHelper.getWidth(40),
  },
  welcomeTitle: {
    color: Colors.middleBlue,
    fontSize: DimensionHelper.normalize(40),
    width: DimensionHelper.getWidth(150),
    textAlign: 'left'
  },
  textInput: {
    // marginTop: DimensionHelper.getHeight(20),
    borderRadius: 8,
    backgroundColor: Colors.middleBlue,
    height: 58,
  },
  selectPlateTitle: {
    color: Colors.middleBlue,
    fontSize: DimensionHelper.normalize(47),
    textAlign: 'center',
    paddingTop: DimensionHelper.getHeight(50)
  },
  plateImage: {
    width: DimensionHelper.getWidth(300),
    height: DimensionHelper.getHeight(80),
  },
  dropdownArrowView: {
    alignItems: 'center',
    marginHorizontal: 10,
    paddingTop: DimensionHelper.getHeight(100)
  },
  dateCardTitle: {
    textAlign: 'center',
    fontSize: DimensionHelper.normalize(20),
    color: Colors.middleBlue,
    paddingBottom: DimensionHelper.getHeight(2)
  },
  cardChildView: {
    alignItems: 'center',
    justifyContent: 'center',
    // width: DimensionHelper.getWidth(52),
    height: DimensionHelper.getHeight(65),
    borderRadius: 10,
    backgroundColor: Colors.middleBlue,
  },
  cardChild: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: DimensionHelper.normalize(18),
    paddingHorizontal: DimensionHelper.getWidth(15)
  },
  cardDropdownView: {
    justifyContent: 'center',
    paddingLeft: DimensionHelper.getWidth(20),
    paddingRight: DimensionHelper.getWidth(20),
    paddingTop: DimensionHelper.getHeight(22)
  },
  dropdownArrow: {
    width: DimensionHelper.getWidth(13),
    height: DimensionHelper.getHeight(7),
  },



  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  // headerView: {
  //   alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
  // },
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
