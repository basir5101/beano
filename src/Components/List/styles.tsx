import { StyleSheet } from 'react-native'
import DimensionHelper from 'Helpers/DimensionHelper'

export default (Colors: Object) => StyleSheet.create({
  list: {
    minHeight: DimensionHelper.getHeight(300),
  },

  loadMoreContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadMoreButton: {
    paddingVertical: DimensionHelper.getHeight(10),
  },
  loadMoreText: {
    color: Colors.textColor,
    fontSize: DimensionHelper.normalize(16),
    textAlign: 'center',
    marginVertical: DimensionHelper.getHeight(10)
  },
  noMoreRequestsText: {
    color: Colors.pink,
    fontSize: DimensionHelper.normalize(16),
    textAlign: 'center',
    marginVertical: DimensionHelper.getHeight(10)
  }
})
