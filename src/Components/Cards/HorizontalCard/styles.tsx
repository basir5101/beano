/* eslint-disable no-magic-numbers */
import { StyleSheet, Dimensions } from 'react-native'
import DimensionHelper from '../../../Helpers/DimensionHelper'
import Colors from '../../../Assets/Constants/Colors'


export default StyleSheet.create({
  mainView: {

  },
  view: {
    flexDirection: 'row',
    height: DimensionHelper.getHeight(100),
    backgroundColor: Colors.white,
    borderRadius: 20,
    // borderWidth: 1,
    shadowColor: Colors.lightPink,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3
  },
  imageView: {
    alignItems: 'flex-start'
  },
  cardImage: hasPrice => ({
    width: DimensionHelper.getWidth(hasPrice ? 112 : 84),
    height: DimensionHelper.getHeight(100),
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  }),
  textContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: hasPrice => ({
    fontSize: DimensionHelper.normalize(hasPrice ? 19 : 24),
    color: hasPrice ? Colors.darkBrown : Colors.middleBlue,
  }),
  subTitleView: {
    // alignItems: 'flex-start'
  },
  subTitle: {
    textAlign: 'left',
    fontSize: DimensionHelper.normalize(12),
    color: Colors.grey
  },
  thirdSubtitle: {
    textAlign: 'left',
    fontSize: DimensionHelper.normalize(12),
    color: Colors.middleBlue
  },
  buttonView: {
    alignItems: 'flex-end',
    marginRight: DimensionHelper.getWidth(8),
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: DimensionHelper.getHeight(27),
    width: DimensionHelper.getWidth(70),
    borderRadius: 20,
    backgroundColor: Colors.middleBlue,
    color: 'white'
  },
  priceText: {
    fontSize: DimensionHelper.normalize(16),
    color: Colors.middleBlue,
    opacity: 0.8
  },
  buyButton: {
    marginTop: DimensionHelper.getHeight(10),
    justifyContent: 'center',
    alignItems: 'center',
    height: DimensionHelper.getHeight(27),
    width: DimensionHelper.getWidth(87),
    borderRadius: 5,
    backgroundColor: Colors.middleBlue,
    color: 'white'
  },
  buttonText: {
    color: 'white',
    fontSize: DimensionHelper.normalize(14)
  },


  // titleView: {
  //   flexDirection: 'row',
  //   paddingHorizontal: 20,
  // },
  cardTitle: {
    fontSize: DimensionHelper.normalize(20),
    color: Colors.darkBrown
    // fontFamily: 'futura'
  },
  viewAll: {
    flex: 1,
    textAlign: 'right',
    fontSize: DimensionHelper.normalize(16),
    paddingTop: DimensionHelper.getHeight(3),
    color: Colors.darkBrown
    // fontFamily: 'futura',
  },
  cardView: {
    marginTop: DimensionHelper.getHeight(13),
    borderRadius: 21,
    flexDirection: 'row',
    backgroundColor: Colors.lightPink,
    width: DimensionHelper.getWidth(300),
    shadowColor: Colors.shadowGrey,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3
  },
  cardContent: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: DimensionHelper.normalize(30)
  },




  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    position: 'absolute',
  },
  mask: {
    width: DimensionHelper.getWidth(20),
    aspectRatio: 100 * 1.73 / 100 * 1.71409
    // flex: 5,
    // justifyContent: 'flex-end',
  },
  // textContainer: {
  //   flex: 1,
  //   width: '100%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: 'red',
  // },
  text: {
    fontSize: 50,
    textAlign: 'center',
  },
  mask: {
    width: Dimensions.get('window').width,
    height: 50,
    bgColor: '#ecf0f1'
  }
})