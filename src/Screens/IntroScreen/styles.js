/* eslint-disable no-magic-numbers */
import { StyleSheet, Dimensions } from 'react-native'
import Colors from 'Constants/Colors'
import DimensionHelper from 'Helpers/DimensionHelper'

const { width, height } = Dimensions.get('window')

const PERCENT_TO_REMOVE = 0.45

// export default (Colors: Object) => StyleSheet.create({

module.exports = StyleSheet.create({
  mainContainer: {
    // paddingTop: DimensionHelper.getHeight(50)
    flex: 1,
    backgroundColor: Colors.lightPink,
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
  mainView: {
    flexDirection: 'row',
  },
  cardView: isSelected => ({
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
  cardImage: {
    width: '100%',
    height: '100%'
  },
  nextButtonIcon: {
    width: DimensionHelper.getWidth(20),
    height: DimensionHelper.getHeight(30)
  },
  image: {
    // flex: 1,
    width: '100%',
    height: '90%',
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
  title: {
    color: Colors.darkBrown,
    fontSize: DimensionHelper.normalize(47),
    textAlign: 'center',
    paddingTop: DimensionHelper.getHeight(100)
  },
  subTitle: {
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

  buttonCircle: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {
    flex: 1,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontFamily: 'Roboto-Medium',
    backgroundColor: Colors.transparent,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontSize: DimensionHelper.normalize(18),
    maxWidth: DimensionHelper.getWidth(350)
  },
  // title: {
  //   fontSize: DimensionHelper.normalize(28),
  //   color: Colors.white,
  //   fontFamily: 'Roboto-Medium',
  //   backgroundColor: Colors.transparent,
  //   textAlign: 'center',
  //   marginBottom: 16,
  //   maxWidth: DimensionHelper.getWidth(320)
  // },
  addSchedule: {
    top: -DimensionHelper.getHeight(20),
    height: DimensionHelper.getHeight(372),
    width: DimensionHelper.getWidth(372),
    resizeMode: 'contain'
  },
  addEmployee: {
    top: -DimensionHelper.getHeight(30),
    height: DimensionHelper.getHeight(420),
    width: DimensionHelper.getWidth(420),
    resizeMode: 'contain'
  },
  icon: {
    height: DimensionHelper.getHeight(400),
    width: DimensionHelper.getWidth(400),
    resizeMode: 'contain'
  },
  logoIcon: {
    height: DimensionHelper.getHeight(115),
    width: DimensionHelper.getWidth(115),
    resizeMode: 'contain'
  },
  appLogo: {
    height: DimensionHelper.getHeight(140),
    width: DimensionHelper.getWidth(140),
    resizeMode: 'contain',
    paddingTop: DimensionHelper.getHeight(10)
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  animationContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * PERCENT_TO_REMOVE,
    width: width * PERCENT_TO_REMOVE,
    bottom: 40,
  },
  buttonIcon: {
    color: Colors.white
  },
  logContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: DimensionHelper.getHeight(25),
    paddingBottom: DimensionHelper.getHeight(35)
  },
  // mainContainer: {
  //   // paddingTop: DimensionHelper.getHeight(50)
  //   flex: 1,
  //   backgroundColor: Colors.lightPink,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  videoButton: {
    borderRadius: 13,
    borderColor: Colors.white,
    borderWidth: 1,
    paddingHorizontal: DimensionHelper.getWidth(25),
    paddingVertical: DimensionHelper.getHeight(8),
    marginTop: DimensionHelper.getHeight(25)
  },
  buttonText: {
    fontSize: DimensionHelper.normalize(16),
    color: Colors.white,
    fontFamily: 'Roboto-Medium',
  },
  optionText: {
    color: Colors.white,
    fontFamily: 'Roboto-Medium',
    backgroundColor: Colors.transparent,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontSize: DimensionHelper.normalize(20),
    // maxWidth: DimensionHelper.getWidth(340)
  },
  optionView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: DimensionHelper.getWidth(300),
    height: DimensionHelper.getHeight(200),
    borderRadius: 13,
    borderColor: Colors.white,
    borderWidth: 1,
  },
  placeholderImage: {
    zIndex: 999,
    paddingTop: DimensionHelper.getHeight(30),
    width,
  },
})
