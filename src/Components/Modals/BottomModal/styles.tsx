/* eslint-disable no-magic-numbers */

import { StyleSheet,Dimensions } from 'react-native'
import DimensionHelper from '../../../Helpers/DimensionHelper'
import Colors from 'Constants/Colors'

module.exports = StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width:Dimensions.get('window').width,
    justifyContent: 'flex-end',
  },
  boxContainer: {
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    shadowColor: Colors.grey,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    backgroundColor: Colors.white,
  },

  body: {
    alignItems: 'center',
  },
  text: {
    color: Colors.darkBrown,
    // fontFamily: FontFamily.regular,
    fontSize: DimensionHelper.normalize(26),
    paddingTop: DimensionHelper.getHeight(15),
    textAlign: 'center',
    paddingBottom: DimensionHelper.getHeight(22),
    lineHeight: DimensionHelper.getHeight(25),
    maxWidth: DimensionHelper.getWidth(185)
  },
  description: {
    textAlign: 'center',
    // fontFamily: FontFamily.medium,
    fontSize: DimensionHelper.normalize(18),
    color: Colors.darkBrown,
    lineHeight: DimensionHelper.getHeight(21),
    paddingBottom: DimensionHelper.getHeight(20),
    maxWidth: DimensionHelper.getWidth(230)
  },
  modalButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.lightPink,
    height: DimensionHelper.getHeight(60),
    paddingHorizontal: DimensionHelper.getWidth(30)
  },
  bottomButton: {
    backgroundColor: Colors.middleBlue,
    borderRadius: 10,
    paddingVertical: DimensionHelper.getHeight(5),
    height: DimensionHelper.getHeight(40),
    justifyContent: 'center',
    // width: DimensionHelper.getWidth(110),
    width: '100%',
  },
  buttonText: {
    color: Colors.white,
    // fontFamily: FontFamily.regular,
    fontSize: DimensionHelper.normalize(18),
    textAlign: 'center'
  }



})
