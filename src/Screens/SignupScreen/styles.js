/* eslint-disable no-magic-numbers */
import { StyleSheet, Dimensions, Platform } from 'react-native'
import Colors from 'Constants/Colors'
import DimensionHelper from 'Helpers/DimensionHelper'
// import DeviceStore from 'Stores/DeviceStore'

const { width } = Dimensions.get('window')


const styles = {
  // avatarOverlayStyle: {
  //   alignSelf: 'center',
  //   borderWidth: 5,
  //   borderRadius: AVATAR_SIZE / 2,
  // },

  // employeeSelectionBadge: {
  //   position: 'absolute',
  //   width: AVATAR_SIZE / 4,
  //   height: AVATAR_SIZE / 4,
  //   borderRadius: AVATAR_SIZE / 8,
  //   alignItems: 'center',
  //   top: 0,
  //   right: AVATAR_SIZE / 4,
  // }
}

module.exports = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.headerLightPink,
  },
  logoImage: {
    alignSelf: 'center',
    width: DimensionHelper.getWidth(120),
    height: DimensionHelper.getHeight(160),
  },


  profileImageView: {
    paddingHorizontal: 20,
    backgroundColor: Colors.veryLightPink,
    width: DimensionHelper.getWidth(134),
    height: DimensionHelper.getHeight(134),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    marginTop: DimensionHelper.getHeight(-70)
  },
  profileImageSubView: {
    width: DimensionHelper.getWidth(100),
    height: DimensionHelper.getHeight(100),
    backgroundColor: Colors.midDarkPink,
    borderRadius: 80,
    alignSelf: 'center',
    justifyContent: 'center',

  },
  profileImageBackgroundView: {
    backgroundColor: Colors.white,
    borderRadius: 80,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: "futura",
    color: '#5A3830',
    fontSize: DimensionHelper.normalize(25)
  },
  subTitle: {
    fontSize: DimensionHelper.normalize(15)
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    // paddingRight: DimensionHelper.getWidth(10)
  },
  searchInput: {
    marginTop: DimensionHelper.getHeight(20),
    borderRadius: 20,
  },
  headerLeft: {
    width: DimensionHelper.getWidth(24),
    height: DimensionHelper.getHeight(16),
    marginLeft: DimensionHelper.getWidth(20)
  },
  headerRight: {
    color: Colors.veryDarkBlue
  },
  cardView: {
    // width: '100%',
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // marginTop: DimensionHelper.getHeight(10),
    // paddingHorizontal: 20,
    paddingTop: DimensionHelper.getHeight(19),
    marginTop: DimensionHelper.getHeight(10)
  },
  body: {
    alignItems: 'center',
  },
  textView: {
    marginTop: DimensionHelper.getHeight(15),
    backgroundColor: '#F9F9F9',
    // width: '90%',
    height: DimensionHelper.getHeight(60),
    borderRadius: 8,
  },
  cardImage: {
    resizeMode: 'contain',
    width: DimensionHelper.getWidth(18),
    height: DimensionHelper.getHeight(18),
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  codeDigitInputBox: {
    height: DimensionHelper.getHeight(50),
    width: DimensionHelper.getWidth(42),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    marginHorizontal: DimensionHelper.getWidth(8),
  },
  codeDigitInput: {
    fontSize: DimensionHelper.normalize(26),
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Colors.pink,
  },



  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  headerView: {
    alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
  },
  headerTitle: {
    fontSize: DimensionHelper.normalize(20),
    color: 'black',
    fontWeight: 'bold'
  },
  headerSubTitle: {
    fontSize: DimensionHelper.normalize(12),
    top: -DimensionHelper.getHeight(1)
  },
  infoBarContainer: {
    backgroundColor: Colors.blue,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGrey
  },

  // avatarOverlayStyle: {
  //   ...styles.avatarOverlayStyle,
  //   borderColor: '#f1f1f1'
  // },
  // avatarOverlayStyleGreen: {
  //   ...styles.avatarOverlayStyle,
  //   borderColor: 'green',
  // },
  // avatarOverlayStyleRed: {
  //   ...styles.avatarOverlayStyle,
  //   borderColor: 'red',
  // },

})
