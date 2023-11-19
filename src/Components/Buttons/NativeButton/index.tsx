import React from 'react'
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  View,
} from 'react-native'

type AndroidButtonProps = {
  style: Object | Array<Object>;
  children: any;
};

const AndroidButton = ({ style, children, ...props }: AndroidButtonProps) => {
  return (
    <TouchableNativeFeedback useForeground={true} {...props}>
      <View style={[style, { overflow: 'hidden' }]}>{children}</View>
    </TouchableNativeFeedback>
  )
}

const ButtonWrapper = Platform.select({
  ios: TouchableOpacity,
  android: AndroidButton,
  any: TouchableNativeFeedback,
})

export default ButtonWrapper
