/* eslint-disable no-magic-numbers */
import { StyleSheet } from 'react-native'
import DimensionHelper from '../../../Helpers/DimensionHelper'

export default (Colors: Object) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingVertical: DimensionHelper.getHeight(4),
    },
    radioButton: {
      height: DimensionHelper.getHeight(12),
      width: DimensionHelper.getHeight(12),
      borderRadius: DimensionHelper.getHeight(12) / 2,
      borderWidth: 1,
      borderColor: Colors.darkTextColor,
      opacity: 0.88,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.darkTextColor,
      marginRight: DimensionHelper.getWidth(10),
    },
    radioButtonInnerView: {
      height: DimensionHelper.getHeight(7),
      width: DimensionHelper.getHeight(7),
      borderRadius: DimensionHelper.getHeight(7) / 2,
      backgroundColor: Colors.darkTextColor,
    },
  })
