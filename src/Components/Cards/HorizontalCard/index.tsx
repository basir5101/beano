import React from 'react'
import { View, Image, ImageSourcePropType, Platform } from 'react-native'
import { Path, Svg, ClipPath, Defs, G } from 'react-native-svg'

import Text from '../../Text'
import Button from '../../Buttons/Button'
import List from '../../List'

import Images from '../../../Assets/Images'

import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import DimensionHelper from '../../../Helpers/DimensionHelper'

type HorizontalCardProps = {
  onPress: any;
  source: ImageSourcePropType;
  onLongPress: any;
};

class HorizontalCard extends React.Component<HorizontalCardProps> {

  render() {
    const { hasPrice, data, hasSubtitle, title, options, buttonText, navigation, onPress, ...props } = this.props

    // const price = 0
    const price = parseInt(options && options[0] && options[0].values[0].price) || 0.00

    return (
      <View style={[styles.mainView,{width:'90%',alignItems:'flex-start'},this.props.containerStyle]}>
        <View style={styles.view}>
          <TouchableOpacity onPress={this?.props?.onImagePress && this?.props?.onImagePress} style={styles.imageView}>
            <Image source={data && data.image ? { uri: data.image } : data && data.items ? { uri: data.items[0].image } : Images.card.cardImage} style={[styles.cardImage(hasPrice),{resizeMode:'cover',width:DimensionHelper.getWidth(100)}]} />
          </TouchableOpacity>
 
          <View style={[styles.textContainer,{paddingLeft:20,alignItems:'flex-start'}]}>
            <View>
              <Text style={[styles.title(hasPrice),this?.props?.titleStyle ?? {},{textTransform:'capitalize'}]}>{title}</Text>
              {hasSubtitle && <View style={styles.subTitleView}>
                <Text style={styles.subTitle}>{data && data.items ? `Quantity: ${data.items[0].quantity}` : 'Street: P.O Box 206'}</Text>
                <Text style={styles.subTitle}>{data && data.items ? `Price: ${data.items[0].options[0].selected[0].price} AED` : 'City: Dubai'}</Text>
                <Text style={styles.thirdSubtitle}>{data.items ? '' : '30 min away'}</Text>
              </View>}
              {hasPrice && <View>
                <Text style={styles.priceText}>AED {price.toFixed(2)}</Text>
                <Button style={styles.buyButton} onPress={() => onPress && onPress(data)}>
                  <Text style={styles.buttonText}>{buttonText}</Text>
                </Button>
              </View>}
            </View>
          </View>

          <View style={styles.buttonView}>
            {!hasPrice && buttonText && buttonText.length > 1 && <Button style={styles.button} onPress={() => onPress && onPress()}>
              <Text style={styles.buttonText}>{buttonText}</Text>
            </Button>}
          </View>
        </View >
      </View>
    )
  }
}

export default HorizontalCard
