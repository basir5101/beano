import React from 'react'
import { Image, ImageSourcePropType } from 'react-native'

import NativeButton from '../NativeButton'

import styles from './styles'

type FabButtonProps = {
  onPress: any;
  source: ImageSourcePropType;
  onLongPress: any;
};

class FabButton extends React.Component<FabButtonProps> {
  render() {
    const { source, ...props } = this.props

    return (
      <NativeButton style={styles.fabView} {...props}>
        <Image source={source} style={styles.icon} />
      </NativeButton>
    )
  }
}

export default FabButton
