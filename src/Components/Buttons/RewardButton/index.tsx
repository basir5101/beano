import React from 'react'
import { View, Image as RNImage } from 'react-native'
import ContentLoader, { Rect } from 'react-content-loader/native'

import NativeButton from '../NativeButton'
import Text from '../../Text'
import { Image } from '../../Image'

import { themeStore } from '../../../Stores/StoreFactory'

import DimensionHelper from '../../../Helpers/DimensionHelper'
import Images from '../../../Assets/Images'
import styles from './styles'

type RewardsButtonProps = {
  isBackgroundDark: boolean;
  navigation: any;
  withPoints: boolean;
  onPress: any;
  item: { name: string; artist: string };
  reward: Array<Object>;
  isSpecial: boolean
};

const Row = ({
  isBackgroundDark = true,
  navigation,
  onPress,
  reward,
  isSpecial = false,
  ...item
}: RewardsButtonProps) => {
  const STYLES = styles(themeStore.colors)

  const imageSource = item.attachments && item.attachments.length > 0
    ? item.attachments[0].thumbnail
    : reward.image ? reward.image.thumbnail
      : reward.reward_template && reward.reward_template.image ? reward.reward_template.image.original : null

  return (
    <NativeButton
      style={STYLES.profileButton}
      onPress={() => {
        onPress ? onPress(item) : navigation.navigate('???')
      }}
    >
      <Image
        source={{ uri: imageSource }}
        style={STYLES.image}
      />
      {reward && reward.reward_type === 'video' && <RNImage source={Images.videoIcon} style={STYLES.videoIcon} />}
      <View style={STYLES.textView}>
        <Text numberOfLines={1} style={STYLES.name(isSpecial)}>
          {reward && reward.name}
        </Text>
        <Text numberOfLines={1} style={STYLES.subTitle(isSpecial)}>
          {reward && reward.user.name}
        </Text >
      </View>
    </NativeButton >
  )
}

let ownerContainerWidth = DimensionHelper.getWidth(110)
let onwerContainerHeight = DimensionHelper.getHeight(180)

const Loader = ({ }: ProfileButtonProps) => {
  const ownerRectFields = () => {
    return [
      { x: DimensionHelper.getWidth(0), y: DimensionHelper.getHeight(0), rx: '0', ry: '0', width: 102, height: 102 },

      { x: DimensionHelper.getWidth(13), y: DimensionHelper.getHeight(90), rx: '3', ry: '3', width: '70', height: '10' },
      { x: DimensionHelper.getWidth(22), y: DimensionHelper.getHeight(110), rx: '3', ry: '3', width: '45', height: '10' },
      { x: DimensionHelper.getWidth(13), y: DimensionHelper.getHeight(130), rx: '3', ry: '3', width: '60', height: '7' },
      { x: DimensionHelper.getWidth(22), y: DimensionHelper.getHeight(148), rx: '3', ry: '3', width: '45', height: '7' },
    ]
  }

  const rectFields = ownerRectFields()
  const width = ownerContainerWidth
  const height = onwerContainerHeight
  const COLORS = themeStore.colors
  return (
    <ContentLoader
      speed={2}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor={COLORS.contentLoaderBackground}
      foregroundColor={COLORS.contentLoaderForeground}
    >
      {rectFields.map((field, index) => <Rect key={`rect_field_${index}`} {...field} />)}
    </ContentLoader>
  )
}

export default { Row, Loader }
