/* eslint-disable no-magic-numbers */
import { StyleSheet, Platform } from 'react-native'
import DimensionHelper from '../../../Helpers/DimensionHelper'

export default (Colors: Object) =>
  StyleSheet.create({
    interestsButton: {
      paddingHorizontal: DimensionHelper.getWidth(18),
      paddingVertical: DimensionHelper.getHeight(4),
      borderRadius: 88,
      borderWidth: 2,
      borderColor: Colors.borderGrey,
      marginVertical: DimensionHelper.getHeight(12),
      marginHorizontal: DimensionHelper.getWidth(6),
    },
    interestsText: {
      fontSize: DimensionHelper.normalize(15),
      color: Colors.mediumGrey,
      top: Platform.select({
        android: DimensionHelper.getHeight(1),
        ios: 0,
      })
    },
    selectedButton: {
      backgroundColor: Colors.pink,
      borderColor: Colors.pink,
    },
    selectedText: {
      color: Colors.white,
    },
    darktext: {
      color: Colors.darkTextColor,
    }
  })
