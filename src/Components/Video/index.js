import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text } from 'react-native'
import Video from 'react-native-video'
// import MediaControls, { PLAYER_STATES } from 'react-native-media-controls'

import NativeButton from '../Buttons/NativeButton'

// import { themeStore, videoModalStore } from 'Stores/StoreFactory'

import styles from './styles'
import Images from '../../Assets/Images'
import Colors from 'Constants/Colors'

class VideoPlayer extends React.Component {
  static propTypes = {
    source: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.COLORS = Colors
    this.PLAYER_STATES = { PLAYING: true, }

    this.state = {
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,
      playerState: this.PLAYER_STATES.PLAYING,
      screenType: 'content',
    }
  }

  onSeek(seek) {
    this.videoPlayer && this.videoPlayer.seek(seek)
  }

  onPaused(playerState) {
    this.setState({
      paused: !this.state.paused,
      playerState,
    })
  }

  async onReplay() {
    this.videoPlayer && await this.videoPlayer.seek(0)
    this.setState({ currentTime: 0, playerState: this.PLAYER_STATES.PLAYING, paused: false, })
  }

  onProgress(data) {
    const { isLoading, playerState } = this.state
    // Video Player will continue progress even if the video already ended
    if (!isLoading && playerState !== this.PLAYER_STATES.ENDED) {
      this.setState({ currentTime: data.currentTime })
    }

    // To be abel to replay video
    if (Math.round(data.currentTime) === Math.round(this.state.duration)) {
      this.setState({ playerState: this.PLAYER_STATES.ENDED, currentTime: this.state.duration, paused: true })
    }
  }

  onLoad(data) {
    this.setState({ duration: data.duration, isLoading: false })
  }

  onLoadStart() {
    this.setState({ isLoading: true })
  }

  close() {
    // videoModalStore.close()
  }
  render() {
    const { source, setRef, paused,isMuted } = this.props

    return (
      // <View style={{ flex: 1 }}>
      <Video
        id='Video_LogDetails'
        testID='Video_LogDetails'
        onLoad={(data) => this.onLoad(data)}
        onLoadStart={(data) => this.onLoadStart(data)}
        onProgress={(data) => this.onProgress(data)}
        paused={paused}
        playbackRate={this.props?.playbackRate ?? 1}
        ref={videoPlayer => {
          this.videoPlayer = videoPlayer
          setRef(videoPlayer)
        }}
        resizeMode='cover'
        onError={(e)=>console.log('video error',e)}
        source={source}
        repeat={true}
        muted={isMuted}
        style={[styles.mediaPlayer,this?.props?.style]}
        volume={10}
      />
      // <Text>HElloooo</Text>
      /* <MediaControls
        id='MediaControls_LogDetails'
        testID='MediaControls_LogDetails'
        duration={this.state.duration}
        isLoading={this.state.isLoading}
        mainColor={this.COLORS.pink}
        // onFullScreen={() => this.onFullScreen()}
        onPaused={(playerState) => this.onPaused(playerState)}
        onReplay={() => this.onReplay()}
        onSeek={(seek) => this.onSeek(seek)}
        playerState={this.state.playerState}
        progress={this.state.currentTime}
      // toolbar={() => this.renderToolbar()}
      /> */
      /* <NativeButton
            onPress={() => this.close()}
            style={styles.closeButtonContainer}>
            <Image source={Images.close} style={styles.icon} />
          </NativeButton> */
      // </View>
    )
  }
}

export default VideoPlayer
