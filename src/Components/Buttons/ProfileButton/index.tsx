import React from 'react'

import Button from '../Button'
import Text from '../../Text'
import Tag from '../../Tag'
import { Thumbnail } from '../../Image'
import DimensionHelper from '../../../Helpers/DimensionHelper'

import ContentLoader, { Rect } from 'react-content-loader/native'

import { themeStore } from '../../../Stores/StoreFactory'

import styles from './styles'

type ProfileButtonProps = {
  isBackgroundDark: boolean;
  navigation: any;
  withPoints: boolean;
  onPress: any;
  following: boolean;
  disabled: boolean;
  isSpecial: boolean;

  item: {
    id: number;
    name: string;
    points: number;
    class_name: string;
    cover_photo: string;
    following: boolean;
    points_toward_user: number;
    receiver_user: { image: { thumbnail: string }, name: string };
    image: {
      thumbnail: string;
    };
  }
};

const Row = ({
  isBackgroundDark = true,
  navigation,
  withPoints,
  onPress,
  item = {},
  following = false,
  disabled = false,
  isSpecial = false
}: ProfileButtonProps) => {
  let { id, image, points, points_toward_user, class_name, name, receiver_user, cover_photo } = item
  points = Math.round(points)
  points_toward_user = Math.round(points_toward_user)

  const STYLES = styles(themeStore.colors)
  let imageSource = null

  if (image) {
    imageSource = image.thumbnail
  } else if (receiver_user) {
    imageSource = receiver_user.image.thumbnail
  }

  return (
    <Button
      style={STYLES.profileButton}
      disabled={disabled}
      radius={70}
      onPress={() => {
        onPress ? onPress(item) : navigation.navigate('CreatorDetails', { name, class_name, image: imageSource, id, cover_photo, following })
      }}
    >
      <Thumbnail
        style={STYLES.profile}
        noShadow={!themeStore.isDark}
        source={{
          uri: imageSource
        }}
      />
      <Text style={STYLES.name(isBackgroundDark, isSpecial)}>
        {receiver_user ? receiver_user.name : name}
      </Text>
      {withPoints && <Tag text={`${points ? points : points_toward_user}pts`} />}
    </Button>
  )
}

let ownerContainerWidth = DimensionHelper.getWidth(70)
let onwerContainerHeight = DimensionHelper.getHeight(150)

const Loader = ({ }: ProfileButtonProps) => {
  const ownerRectFields = () => {
    return [
      { x: DimensionHelper.getWidth(2), y: DimensionHelper.getWidth(25), rx: '100', ry: '100', width: '55', height: '53' },
      { x: DimensionHelper.getWidth(5), y: DimensionHelper.getHeight(80), rx: '3', ry: '10', width: '45', height: '5' },
      { x: DimensionHelper.getWidth(5), y: DimensionHelper.getHeight(95), rx: '3', ry: '10', width: '45', height: '5' },
    ]
  }

  const rectFields = ownerRectFields()
  const width = ownerContainerWidth
  const height = onwerContainerHeight
  const COLORS = themeStore.colors
  return (
    (
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
  )
}

export default { Row, Loader }
