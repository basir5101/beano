import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import { themeStore } from '../../../Stores/StoreFactory'

import styles from './styles'

type Props = {
  children: Array<Object>;
  onPress: any;
  selected: boolean;
  disabled: boolean;
}

class RadioButton extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
    this.COLORS = themeStore.colors
    this.STYLES = styles(this.COLORS)
  }

  render() {
    const { children, onPress, selected, disabled } = this.props

    return (
      <TouchableOpacity
        onPress={() => onPress()}
        disabled={disabled}
        style={this.STYLES.container}
      >
        <View
          style={[
            this.STYLES.radioButton,
            selected && { borderColor: this.COLORS.pink },
          ]}
        >
          <View
            style={[
              this.STYLES.radioButtonInnerView,
              selected && { backgroundColor: this.COLORS.pink },
            ]}
          />
        </View>
        {children}
      </TouchableOpacity>
    )
  }
}

export default RadioButton
