/* eslint-disable no-magic-numbers */
import { StyleSheet, } from 'react-native'
import DimensionHelper from '../../../Helpers/DimensionHelper'
// import FontFamily from '../../../Constants/FontFamily'


export default (Colors: Object) => StyleSheet.create({
  buttonShadow: {
    shadowOpacity: 0.4,
    backgroundColor: Colors.pink,
    width: DimensionHelper.getWidth(335),
    height: DimensionHelper.getHeight(45),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: Colors.pink,
    shadowRadius: 10,
  },
  bottomButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999
  },
  buttonText: {
    color: Colors.white,
    fontSize: DimensionHelper.normalize(17),
    // fontFamily: FontFamily.medium
  },
  centerView: {
    alignItems: 'center',
  }
})
