import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Image } from 'react-native'
import CountDown from 'react-native-countdown-component'

import { informationModalStore, authStore,shopsStore } from 'Stores/StoreFactory'


import Button from '../Buttons/Button'
import Text from '../Text'

import Images from 'Images'
import styles from './styles'

export default class DrawerButton extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  }
  render() {
    const { title, description } = this.props

    const isLoggedIn = !!authStore?.user && !!( authStore.user.username || authStore?.user?.user?.username)

    const streakData = shopsStore.streakDetails
    const date1 = new Date();
const dateChanged=!!streakData?.end ? streakData?.end?.split(', ')?.[0]?.split('/') : ''
const dateChangedJoined =!!streakData?.end ? `${dateChanged[2]}-${dateChanged[0]}-${dateChanged[1]}` : ''
const date2 =!!streakData?.end ? new Date(`${dateChangedJoined}T${streakData?.end?.split(', ')?.[1]}`) : ''
    const diffTimeInSeconds = (isLoggedIn && streakData?.end) ? Math.abs(date2 - date1)/1000 : 0;
    return (
      <Button onPress={() => informationModalStore.open({
        title, description,
        Component: (
          <CountDown
            style={styles.countDown}
            until={diffTimeInSeconds}
            timeToShow={['H', 'M', 'S']}
            size={20}
            digitStyle={styles.digitStyle}
            timeLabelStyle={styles.timeLabel}
          />
        )
      })}>
        <Text style={[styles.headerRight,{color:'black'}]}>{streakData?.userStreak ?? 0}🔥</Text>
      </Button >
    )
  }
}
