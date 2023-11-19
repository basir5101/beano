/* eslint-disable no-magic-numbers */
import { StyleSheet } from 'react-native'
import DimensionHelper from 'Helpers/DimensionHelper'

export default (Colors: Object) => StyleSheet.create({
  input: {
    width: DimensionHelper.getWidth(300),
    height: DimensionHelper.getHeight(35),
    marginBottom: DimensionHelper.getHeight(10),
    borderColor: Colors.grey,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  zipCodeInput: {
    width: DimensionHelper.getWidth(94),
    height: DimensionHelper.getHeight(35),
    marginBottom: DimensionHelper.getHeight(10),
    borderColor: Colors.grey,
    alignItems: 'center',
    marginRight: DimensionHelper.getWidth(10),
  },
  stateInput: {
    width: DimensionHelper.getWidth(196),
    height: DimensionHelper.getHeight(35),
    marginBottom: DimensionHelper.getHeight(10),
    borderColor: Colors.grey,
    alignItems: 'center',
  },
  textArea: {
    width: DimensionHelper.getWidth(300),
    height: DimensionHelper.getHeight(87),
    marginBottom: DimensionHelper.getHeight(10),
    borderColor: Colors.grey,
  },
  inputView: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: DimensionHelper.getHeight(8),
  }
})
