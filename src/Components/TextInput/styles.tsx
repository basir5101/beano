/* eslint-disable no-magic-numbers */

import { StyleSheet, I18nManager } from 'react-native'
import DimensionHelper from '../../Helpers/DimensionHelper'

export default (Colors: Object) =>
  StyleSheet.create({
    section: {
      backgroundColor: Colors.white,
      flexDirection: 'row',
      marginBottom: DimensionHelper.getHeight(19),
      borderColor: 'transparent',
      width: DimensionHelper.getWidth(346.66),
      height: DimensionHelper.getHeight(48),
      zIndex: 9999,
    },
    imageView: {
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: DimensionHelper.getWidth(12),
    },
    image: focused => ({
      width: DimensionHelper.getWidth(20),
      height: DimensionHelper.getWidth(20),
      resizeMode: 'contain',
      opacity: focused ? 1 : 0.5
    }),
    icon: {
      fontSize: 24,
      color: Colors.grey,
    },
    input: {
      textAlign: I18nManager.isRTL ? 'right' : 'left',
      textAlignVertical: 'center',
      // fontFamily: FontFamily.light,
      color: Colors.lightBlack,
      fontSize: 14,
      // height: DimensionHelper.getHeight(48),
      width: DimensionHelper.getWidth(250),
      marginHorizontal: DimensionHelper.getWidth(7),
    },
    mediumFont: {
      // fontFamily: FontFamily.medium,
    },
    inputPadding: {
      paddingHorizontal: DimensionHelper.getWidth(10),
    },
    focused: {
      borderColor: Colors.lightPink,
    },
    warning: {
      borderColor: Colors.red,
    },
    smallSize: {
      width: DimensionHelper.getWidth(290),
    },
    greyBackground: {
      backgroundColor: Colors.disabledGrey,
    },
    smallerFont: {
      // fontFamily: FontFamily.regular,
      fontSize: 16,
    },
    isVSmall: {
      width: DimensionHelper.getWidth(45),
      borderRadius: 4,
      marginBottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    VSmallText: {
      width: DimensionHelper.getWidth(23),
      fontSize: 14,
      // fontFamily: FontFamily.regular,
      padding: 0,
      textAlign: 'center',
    },
    border: {
      borderWidth: 1,
      borderColor: Colors.grey,
    },
    textArea: {
      height: DimensionHelper.getHeight(130),
    },
    textAreaInput: {
      height: DimensionHelper.getHeight(130),
      textAlignVertical: 'top',
    },
    flagView: {
      height: DimensionHelper.getHeight(50),
      width: DimensionHelper.getWidth(55),
      justifyContent: 'center',
      alignItems: 'center',
    },
    flagsView: {
      height: DimensionHelper.getHeight(50),
      borderRadius: DimensionHelper.getWidth(25),
    },
    flagsInput: {
      height: DimensionHelper.getHeight(50),
      width: DimensionHelper.getWidth(291.66),
      fontSize: 16,
      top: 0,
    },
    noIconsWidth: {
      width: DimensionHelper.getWidth(280),
    },
  })
