import React from 'react'
import { useCallback } from 'react';
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { Animated, View } from 'react-native'
import Text from '../Text'

import styles from './styles'
import Colors from 'Constants/Colors'

class AnimatedText extends React.Component {
  static propTypes = {
    source: PropTypes.object
  }

  constructor(props) {
    super(props)

    this.state = {

      isVisible: true,
      input1Animation: new Animated.Value(1),
      animation: new Animated.Value(1),
      text: this.props.text[this.props.selectedIndex] || this.props.text[0] || 'Hello',
      loop: 0,
    }

    this.startAnimation()
    this.loopTextChange()
  }

  async loopTextChange() {

    const { text, selectedIndex } = this.props
    var timing = 2500
    if (selectedIndex === undefined) {
      for (var i = 0; i < 3; i++) {
        var toggle = (i % 2)
        timing += 4000
        await setTimeout(() => {
          this.setState({ text: text[1] })
        }, 2500)
        // await setTimeout(() => {
        //   this.setState({ text: toggle ? 'Hello' : 'هلا' })
        // }, timing)
        // await setTimeout(this.loop(), 1000);
        await setTimeout(() => {
          this.setState({ text: text[toggle] })
        }, timing)
      }
    } else {
      // await setTimeout(() => {
      //   this.setState({ text: text[selectedIndex] })
      // }, 2500)
    }
  }

  startAnimation() {
    const { input1Animation, input2Animation, animation, isVisible } = this.state
    const { text, selectedIndex } = this.props


    // Animated.loop(
    //   Animated.timing(input1Animation, {
    //     toValue: isVisible === 0 ? 1 : 0,
    //     duration: 2000,
    //     useNativeDriver: true
    //   })).start(() => {
    //     //setVisibility(!isVisible)//set the new state, so the next click will have different value
    //     this.setState({ isVisible: !isVisible })
    //   })


    if (selectedIndex === undefined) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(input1Animation, {
            toValue: 0,
            duration: 1000,
            delay: 1500,
            useNativeDriver: true
          }),
          Animated.timing(input1Animation, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true
          }),
        ]),
        {
          iterations: 2,
        }
      ).start((event) => null)
    }
  }


  render() {
    const { style, selectedIndex } = this.props

    const { input1Animation, text } = this.state

    const animatedStyle = {
      opacity: input1Animation
    }

    return (
      <Animated.View style={[animatedStyle]}>
        <Text style={style}>{text}</Text>
      </Animated.View>
    )
  }
}

export default AnimatedText
