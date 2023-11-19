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
    flex: 1,
    backgroundColor: Colors.headerLightPink,
  },
  titleView: {
    paddingHorizontal: 20,
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
  headerRight: {
    color: Colors.veryDarkBlue
  },
  cardView: {
    flex: 1,
    // width: '100%',
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // marginTop: DimensionHelper.getHeight(10),
    // paddingHorizontal: 20,
    paddingTop: DimensionHelper.getHeight(19)
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
