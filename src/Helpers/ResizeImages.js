import ImageResizer from 'react-native-image-resizer'

const resizeImages = ({ uri, width, height, compressFormat = 'JPEG', quality = 80, rotation = 0, outputPath }) => {
  return ImageResizer.createResizedImage(uri, width, height, compressFormat, quality, rotation)
    .then(response => {
      return response.uri
    })
    .catch(() => {
      return uri
    })
}

export { resizeImages }
