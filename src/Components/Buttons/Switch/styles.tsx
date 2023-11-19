/* eslint-disable no-magic-numbers */
import { StyleSheet } from 'react-native'
import DimensionHelper from '../../../Helpers/DimensionHelper'

export default (Colors: Object) =>
  StyleSheet.create({
    buttonShadow: {
      shadowOpacity: 0.2,
      backgroundColor: Colors.pink,
      width: DimensionHelper.getWidth(51),
      height: DimensionHelper.getHeight(24),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      shadowColor: Colors.pink,
      shadowRadius: 10,
    },
  })
