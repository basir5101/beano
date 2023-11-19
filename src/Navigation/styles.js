/* eslint-disable no-magic-numbers */
import { StyleSheet, I18nManager } from 'react-native'
import Colors from 'Constants/Colors'
import FontSize from 'Constants/FontSize'
import DimensionHelper from 'Helpers/DimensionHelper'

const styles = StyleSheet.create({
  test: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingRight: DimensionHelper.getWidth(10)
  },
  container: {
    flex: 1
  },
  drawerView: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1
  },
  logo: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain'
  },
  noneActiveLabel: {
    fontSize: DimensionHelper.normalize(14),
    fontFamily: 'Futura',
    textAlign: 'left'
  },
  signOutButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '100%',
    backgroundColor: Colors.white,
    borderTopColor: Colors.grey,
    borderTopWidth: 1
  },
  signOutText: {
    color: Colors.black,
    fontSize: DimensionHelper.normalize(16),
    fontWeight: 'bold'
  },
  thumbView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 120,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
    paddingLeft: 15
  },
  title: {
    color: Colors.veryDarkBlue,
    textAlign: 'left'
  },
  depTitle: {
    color: Colors.black,
    fontWeight: '100',
    paddingVertical: 2,
    maxWidth: '60%',
    textAlign: 'left'
  },
  role: {
    color: Colors.grey,
    width: '40%',
    textAlign: 'left'
  },
  address: {
    alignItems: 'center',
    width: DimensionHelper.getWidth(140),
    justifyContent: I18nManager.isRTL ? 'flex-end' : 'flex-start',
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
  },
  addressIcon: {
    color: Colors.darkGrey,
    fontSize: FontSize.small
  },
  addressText: {
    color: Colors.grey,
    paddingHorizontal: 5,
    maxWidth: '85%'
  },
  textView: {
    paddingLeft: 15,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  switchTextView: {
    paddingVertical: 15
  },
  text: {
    paddingHorizontal: 20,
    fontWeight: 'bold',
    color: Colors.black
  },
  iconStyle: {
    width: DimensionHelper.getWidth(17),
    height: DimensionHelper.getWidth(17 * 1.0625),
    resizeMode: 'contain',
    top: 3
  },
  homeIcon: {
    width: DimensionHelper.getWidth(20),
    height: DimensionHelper.getWidth(20 * 1.0625),
    resizeMode: 'contain',
    top: 3
  },
  feedIcon: {
    width: DimensionHelper.getWidth(40),
    height: DimensionHelper.getWidth(40 * 1.0625),
    resizeMode: 'contain',
    top: 6
  },
  badge: {
    width: DimensionHelper.getWidth(8),
    height: DimensionHelper.getWidth(8),
    borderRadius: 30,
    backgroundColor: Colors.orange,
    position: 'absolute',
    top: 2,
    right: DimensionHelper.getWidth(40)
  },


  focusedImage: {
    width: DimensionHelper.getWidth(20),
    height: DimensionHelper.getWidth(20),
    resizeMode: 'contain',
  },
  image: {
    width: DimensionHelper.getWidth(18),
    height: DimensionHelper.getWidth(18),
    resizeMode: 'contain',
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  labelText: {
    fontSize: DimensionHelper.normalize(13),
    fontFamily: 'Futura',
    paddingHorizontal: DimensionHelper.getWidth(7.5)
  }
})

export default styles
