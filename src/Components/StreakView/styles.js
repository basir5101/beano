/* eslint-disable no-magic-numbers */
import { StyleSheet } from 'react-native'
import Colors from 'Constants/Colors'
import DimensionHelper from 'Helpers/DimensionHelper'


module.exports = StyleSheet.create({
  countDown: {
    paddingTop: 3,
    paddingBottom: 30
  },
  digitStyle: {
    backgroundColor: 'transparent',
    height: DimensionHelper.getHeight(25),
    width: DimensionHelper.getWidth(30)
  },
  digitTextStyle: {
    color: Colors.middleBlue,
    opacity: 0.5,
    fontSize: DimensionHelper.normalize(25),
    lineHeight:  DimensionHelper.getHeight(25)
  },
  timeLabel: {
    color: Colors.middleBlue,
    opacity: 0.5,
    fontSize: DimensionHelper.normalize(8),
  }

})
