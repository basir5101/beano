/* eslint-disable no-magic-numbers */
import { StyleSheet } from 'react-native'
import DimensionHelper from 'Helpers/DimensionHelper'
// import FontFamily from 'Constants/FontFamily'
import Colors from 'Constants/Colors'

export default () => StyleSheet.create({
  modalButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  body: {
    alignItems: 'center'
  },
  text: {
    color: Colors.blue,
    // fontFamily: FontFamily.regular,
    fontSize: DimensionHelper.normalize(18),
    textAlign: 'center',
    paddingBottom: DimensionHelper.getHeight(22),
    lineHeight: DimensionHelper.getHeight(25),
    maxWidth: DimensionHelper.getWidth(185)
  },
  description: {
    textAlign: 'center',
    // fontFamily: FontFamily.medium,
    fontSize: DimensionHelper.normalize(16),
    color: Colors.darkTextColor,
    lineHeight: DimensionHelper.getHeight(21),
    paddingBottom: DimensionHelper.getHeight(20),
    maxWidth: DimensionHelper.getWidth(212)
  },

  cancelButton: {
    borderRadius: 55,
    backgroundColor: `${Colors.blue}80`,
    paddingVertical: DimensionHelper.getHeight(5),
    width: DimensionHelper.getWidth(110),
  },
  confirmButton: {
    backgroundColor: Colors.blue,
    borderRadius: 55,
    paddingVertical: DimensionHelper.getHeight(5),
    width: DimensionHelper.getWidth(110),
  },
  buttonText: {
    color: Colors.white,
    // fontFamily: FontFamily.regular,
    fontSize: DimensionHelper.normalize(15),
    textAlign: 'center'
  },
  image: {
    width: DimensionHelper.getWidth(100),
    height: DimensionHelper.getHeight(100),
    resizeMode: 'contain',
    marginBottom: DimensionHelper.getHeight(25)
  }
})
