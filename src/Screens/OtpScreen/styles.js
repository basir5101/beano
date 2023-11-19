/* eslint-disable no-magic-numbers */
import { StyleSheet, Dimensions, Platform } from 'react-native'
import Colors from 'Constants/Colors'
import DimensionHelper from 'Helpers/DimensionHelper'
// import DeviceStore from 'Stores/DeviceStore'

const { width } = Dimensions.get('window')


module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
    // backgroundColor: themeStore.isDark ? Colors.background : Colors.lightBackground
  },
  headerLeft: {
    width: DimensionHelper.getWidth(20),
    height: DimensionHelper.getHeight(18),
    resizeMode: 'contain',
    marginLeft: DimensionHelper.getWidth(3)
  },
  logo: {
    width: DimensionHelper.getWidth(254),
    height: DimensionHelper.getHeight(71),
    resizeMode: 'contain',
    marginBottom: DimensionHelper.getHeight(51)
  },
  title: {
    color: Colors.darkTextColor,
    fontSize: DimensionHelper.normalize(18),
    // fontFamily: FontFamily.semibold,
    marginBottom: DimensionHelper.getHeight(91)
  },
  subTitle: {
    fontSize: DimensionHelper.normalize(18),
    color: Colors.textColor,
    // fontFamily: FontFamily.regular,
    marginBottom: DimensionHelper.getHeight(17),
    width: DimensionHelper.getWidth(316),
    textAlign: 'center',
  },
  inputFieldsView: {
    flex: 0.4,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingBottom: DimensionHelper.getHeight(55)
  },
  row: {
    flexDirection: 'row',
    width: '100%',
  },
  codeDigitInputBox: {
    height: DimensionHelper.getHeight(50),
    width: DimensionHelper.getWidth(42),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    marginHorizontal: DimensionHelper.getWidth(8)
  },
  codeDigitInput: {
    fontSize: DimensionHelper.normalize(26),
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Colors.pink,
    // fontFamily: FontFamily.regular,
  },
  resendContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  },
  timer: {
    // fontFamily: FontFamily.light,
    fontSize: 25,
    color: Colors.textColor,
    paddingBottom: DimensionHelper.getHeight(5)
  },
  emptyTimer: {
    height: DimensionHelper.getHeight(5)
  },
  resendText: (isResendDisabled) => ({
    color: isResendDisabled ? `${Colors.textColor}50` : Colors.pink,
    // fontFamily: FontFamily.regular,
    fontSize: DimensionHelper.normalize(15)
  }),
  resendButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: DimensionHelper.getHeight(36)
  },
})
