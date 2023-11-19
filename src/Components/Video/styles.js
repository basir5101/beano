import { StyleSheet, Platform } from 'react-native'
import DimensionHelper from 'Helpers/DimensionHelper'

export default StyleSheet.create({
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
  },
  closeButtonContainer: {
    height: DimensionHelper.getWidth(30),
    width: DimensionHelper.getWidth(30),
    alignItems: 'flex-end',
    paddingLeft: DimensionHelper.getWidth(320),
    paddingTop: DimensionHelper.getWidth(10),
  },
  icon: {
    width: DimensionHelper.getWidth(20),
    height: Platform.select({
      ios: DimensionHelper.getWidth(20),
      android: DimensionHelper.getWidth(19),
    }),
    resizeMode: 'contain',
  },
})
