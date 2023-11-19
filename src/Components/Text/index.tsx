import React from 'react'
import {
  Text as RNText,
  TextStyle
} from 'react-native'

import styles from './styles'

type TextProps = {
  style: Object | Array<Object> | Array<TextStyle>;
  children: any;
};

const Text = ({ style, children, ...props }: TextProps) => {
  return (
    <RNText {...props} style={[styles.text, style]}>
      {children}
    </RNText >
  )
}

export default Text
