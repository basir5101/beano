/* eslint-disable no-magic-numbers */
import { PixelRatio, Dimensions, Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info';

const { width, height } = Dimensions.get('window')
const PLATFORM = Platform.OS
const IS_IPHONE_X = PLATFORM === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896)
const BASE_HEIGHT = IS_IPHONE_X ? 830 : 780
const BASE_WIDTH = DeviceInfo.isTablet() ? 570 : 360
const scale = Platform.select({
  android: width / BASE_WIDTH,
  ios: width / BASE_WIDTH - 0.2
})

class DimensionHelper {
  getHeight(elementHeight) {
    const elementPercentage = elementHeight / BASE_HEIGHT * 100
    return Math.round(PixelRatio.roundToNearestPixel(height * elementPercentage / 100))
  }

  getWidth(elementWidth) {
    const elementPercentage = elementWidth / BASE_WIDTH * 100
    return Math.round(PixelRatio.roundToNearestPixel(width * elementPercentage / 100))
  }

  get extraFromTop() {
    return IS_IPHONE_X ? 30 : 0
  }

  normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    }

    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

export default new DimensionHelper()
