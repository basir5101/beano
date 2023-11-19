import React from 'react'
import { TouchableNativeFeedback, View } from 'react-native'

// import { themeStore } from '../../../Stores/StoreFactory'

const Button = ({ radius = 60, style, children, Colors, ...props }: any) => {
  const COLORS = Colors

  return (
    <TouchableNativeFeedback
      {...props}
      background={TouchableNativeFeedback.Ripple(
        `${COLORS && COLORS.replyBlack}80`,
        true,
        radius
      )}
    >
      <View style={style}>{children}</View>
    </TouchableNativeFeedback>
  )
}

export default Button
