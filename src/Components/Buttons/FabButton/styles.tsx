/* eslint-disable no-magic-numbers */
import { StyleSheet, Platform } from 'react-native'
import DimensionHelper from '../../../Helpers/DimensionHelper'

const buttonSize = Platform.select({
  android: 48,
  ios: 40,
})

export default StyleSheet.create({
  icon: {
    width: DimensionHelper.getWidth(buttonSize),
    height: DimensionHelper.getWidth(buttonSize),
    borderRadius: 90,
    zIndex: 999,
  },
  fabView: {
    width: DimensionHelper.getWidth(buttonSize),
    height: DimensionHelper.getWidth(buttonSize),
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: DimensionHelper.getHeight(18),
    right: DimensionHelper.getWidth(13),
    elevation: 3,
  },
})
