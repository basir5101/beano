/* eslint-disable no-magic-numbers */
import { StyleSheet, ViewStyle, ImageStyle } from 'react-native'
import DimensionHelper from '../../../Helpers/DimensionHelper'

interface Styles {
  profileButton: ViewStyle;
  name: any;
  image: ImageStyle;
  subTitle: any;
  textView: ViewStyle;
}

export default (Colors: Object) =>
  StyleSheet.create<Styles>({
    profileButton: {
      // width: DimensionHelper.getWidth(64),
      // height: DimensionHelper.getHeight(89),
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: DimensionHelper.getWidth(20),
    },
    name: isSpecial => ({
      color: isSpecial ? Colors.white : Colors.textColor,
      fontSize: DimensionHelper.normalize(14),
      maxWidth: DimensionHelper.getWidth(72),
      textAlign: 'center',
      paddingTop: DimensionHelper.getHeight(8),
      lineHeight: DimensionHelper.getHeight(16),
    }),
    subTitle: isSpecial => ({
      color: isSpecial ? Colors.white : Colors.textColor,
      fontSize: DimensionHelper.normalize(12),
      maxWidth: DimensionHelper.getWidth(64),
      textAlign: 'center',
      paddingTop: DimensionHelper.getHeight(5),
      lineHeight: DimensionHelper.getHeight(16),
    }),
    textView: {
      height: DimensionHelper.getHeight(80),
    },
    image: {
      width: DimensionHelper.getWidth(85),
      height: DimensionHelper.getWidth(85),
      resizeMode: 'contain',
    },
    videoIcon: {
      position: 'absolute',
      width: 40,
      height: 40,
      resizeMode: 'contain',
      left: DimensionHelper.getWidth(25),
      top: DimensionHelper.getHeight(22)
    },
  })
