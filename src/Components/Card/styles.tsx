/* eslint-disable no-magic-numbers */
import { StyleSheet, Dimensions } from 'react-native'
import DimensionHelper from '../../Helpers/DimensionHelper'
import Colors from '../../Assets/Constants/Colors'


export default StyleSheet.create({
  mainView: {
    flexDirection: 'row',
  },
  view: {
    // flex: 1
    paddingTop: DimensionHelper.getHeight(19),
  },
  titleView: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  cardHeader: {
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
  cardView: (hasCardTitle, isVertical) => ({
    marginTop: DimensionHelper.getHeight(13),
    marginRight: DimensionHelper.getWidth(13),
    borderRadius: 21,
    flexDirection: 'row',
    backgroundColor: hasCardTitle ? Colors.lightPink : Colors.lightPink,
    width: DimensionHelper.getWidth(hasCardTitle ? 280 : isVertical ? 130 : 150),
    shadowColor: Colors.shadowGrey,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3
  }),
  cardImage: (hasSubtitle, isVertical) => ({
    width: DimensionHelper.getWidth(isVertical ? 130 : 150),
    height: DimensionHelper.getHeight(hasSubtitle ? 150 : isVertical ? 220 : 113),
    borderTopLeftRadius: 21,
    borderBottomLeftRadius: 21,

    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
  }),
  cardContent: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: DimensionHelper.normalize(30),
    paddingTop: DimensionHelper.getHeight(20),
    color: Colors.orangeBrown,

  },

  smallCardView: {
    marginTop: DimensionHelper.getHeight(13),
    marginRight: DimensionHelper.getWidth(13),
    borderRadius: 21,
    // flexDirection: 'row',
    backgroundColor: Colors.lightPink,
    width: DimensionHelper.getWidth(100),
    shadowColor: Colors.shadowGrey,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallCardImage: (isCategories) => ({
    width: DimensionHelper.getWidth(isCategories ? 70 : 40),
    height: DimensionHelper.getHeight(isCategories ? 70 : 40),
    // borderTopLeftRadius: 21,
    // borderBottomLeftRadius: 21,

    // borderBottomRightRadius: 25,
    // borderTopRightRadius: 25,
  }),
  smallCardText: (isCategories) => ({
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: DimensionHelper.normalize(isCategories ? 12 : 17),
    paddingVertical: DimensionHelper.getHeight(5),
    color: Colors.darkBlue,
  }),
  cardSubTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: DimensionHelper.normalize(17),
    color: Colors.orangeBrown
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
  textContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
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