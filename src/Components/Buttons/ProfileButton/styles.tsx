/* eslint-disable no-magic-numbers */
import { StyleSheet, ViewStyle } from 'react-native'
import DimensionHelper from '../../../Helpers/DimensionHelper'

interface Styles {
  profileButton: ViewStyle;
  name: any;
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
    name: (isBackgroundDark: boolean, isSpecial: boolean) => ({
      color: isSpecial ? Colors.white : isBackgroundDark ? Colors.textColor : Colors.darkTextColor,
      fontSize: DimensionHelper.normalize(12),
      maxWidth: DimensionHelper.getWidth(64),
      textAlign: 'center',
      height: DimensionHelper.getHeight(45),
      paddingTop: DimensionHelper.getHeight(8),
      lineHeight: DimensionHelper.getHeight(16),
    }),
    profile: {
      backgroundColor: Colors.lightBackground
    }
  })
