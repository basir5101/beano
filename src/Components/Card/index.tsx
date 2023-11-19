import React from 'react'
import { View, Image, ImageSourcePropType, FlatList, Platform, ImageBackground } from 'react-native'
import { Path, Svg, ClipPath, Defs, G } from 'react-native-svg'

import Text from '../Text'
import NativeButton from '../Buttons/NativeButton'
import List from '../List'
import { shopsStore, authStore } from '../../Stores/StoreFactory'
import Video from '../Video/index'

import Images from '../../Assets/Images'

import styles from './styles'



class Card extends React.Component {

  constructor(props) {
    super(props)

  }
  showCardHeaderTitles() {
    return (
      <View style={styles.cardView}>
        <Image source={Images.card.cardImage} style={styles.cardImage} />
        <View styles={{ textAlign: 'center' }}>
          <Text style={styles.cardContent}>vegan</Text>
        </View>
      </View >
    )
  }

  render() {
    const { source, data, isVideo = false, isLongList, cardHeader, isSmall, isVertical, hasCardTitle, cardTitle, hasNavigationHeader, hasSubtitle, subTitle, onPress, onCardPress, isCategories = false, ...props } = this.props


    const mask = { width: '100%', height: '100%' }
    // const layoutData = [{ "id": "0", "url": Images.card.starBUX, "width": 700, "height": 700 },
    // { "id": "1", "url": Images.card.blancoVid, "width": 600, "height": 427 },
    // { "id": "2", "url": Images.card.ONDGVID, "width": 700, "height": 700 },]
    const layoutData = shopsStore.reels
    const isLongListt = !isLongList ? false : (data && data.length > 2)


    return (
      <View style={styles.view}>
        {hasNavigationHeader && <View style={styles.titleView}>
          <Text style={[styles.cardHeader]}>{cardHeader}</Text>
          {isLongListt && <NativeButton style={styles.viewAll} onPress={() => onPress && onPress()}>
            <Text style={styles.viewAll}>View all</Text>
          </NativeButton>}
        </View>}


        <FlatList
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 10
          }}
          data={data || layoutData}
          renderItem={({ item, index }) => {
            return (isSmall
              ? < NativeButton style={styles.smallCardView} onPress={() => onCardPress && onCardPress(item,index)}>
                <Image source={item && item.image ? { uri: item.image } : Images.card.cardImage} style={styles.smallCardImage(isCategories)} />
                <Text style={styles.smallCardText(isCategories)}>{isCategories ? item?.description : item.title || item.name || cardTitle}</Text>
                {/* {cardTitle && <View style={{ flex: 1, }}>
                  <Text style={styles.cardContent}>{item.title || item.name || cardTitle}</Text>
                  {hasSubtitle && <Text style={styles.cardSubTitle}>{`By ${item.store}` || subTitle}</Text>}
                </View>} */}
              </NativeButton>
              : <NativeButton style={styles.cardView(cardTitle, isVertical)} onPress={() => onCardPress && onCardPress(item)}>
                {!isVideo && <Image source={item && item.image ? { uri: item.image } : item?.url && item.url ? item.url : Images.card.cardImage} style={styles.cardImage(hasSubtitle, isVertical)} />}
                {isVideo && <View style={styles.cardImage(hasSubtitle, isVertical)}>
                  <Video isMuted={true} source={{
                    uri: `https://a-p-e.herokuapp.com/user/reels/watch?uuid=${item?.metadata?.uuid}${authStore?.token ? `&access_token=${authStore.token}` : ''}`, type: 'mp4', headers: {
                      'range': 'bytes=0-'
                    }
                  }}
                    setRef={(ref) => { this.video = ref }}
                  />

                </View>}
                {cardTitle && <View style={{ flex: 1, }}>
                  <Text style={[styles.cardContent, this?.props?.titleStyles]}>{item.title || item.name || cardTitle}</Text>
                  {hasSubtitle && <Text style={styles.cardSubTitle}>{`By ${item.store}` || subTitle}</Text>}
                </View>}
              </NativeButton>)
          }
          }
        />

        {/* <View style={styles.cardView}>
          <Image source={Images.card.cardImage} style={styles.cardImage(hasSubtitle)} />
          <View style={{ flex: 1, }}>
            <Text style={styles.cardContent}>Vegan</Text>
            {hasSubtitle && <Text style={styles.cardSubTitle}>By Starbucks</Text>}
          </View>
        </View > */}
      </View >
    )
  }
}

export default Card
