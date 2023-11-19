/* eslint-disable no-magic-numbers */

import DimensionHelper from 'Helpers/DimensionHelper'

export default {
  width: DimensionHelper.getWidth(303.53),
  paddingBottom: 10,
  paddingHorizontal: DimensionHelper.getWidth(28),
  borderRadius: 9,
  borderWidth: 1,
  elevation: 3,
  disabledOpacity: 0.5,
  disabledElevation: 1,
  shadow: (props = {}) => {
    return {
      elevation: props.elevation || 3,
      shadowColor: '#000',
      shadowOffset: {
        width: props.width || 0,
        height: props.height || 2,
      },
      shadowOpacity: 0.30,
      shadowRadius: 3,
    }
  }
}
