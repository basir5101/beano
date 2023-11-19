import React from 'react'
import { View } from 'react-native'

import Text from '../..//Text'
import NativeButton from '../..//Buttons/NativeButton'

import { themeStore } from '../../../Stores/StoreFactory'

import styles from './styles'

type SelectButtonProps = {
  item: { title: string; id: number; name: string; };
  onPress: any;
  selected: boolean;
  disabled: boolean;
  activeStyle: Object | Array<Object>;
};

const SelectButton = ({
  item,
  selected = false,
  disabled = false,
  onPress = () => { },
  activeStyle,
}: SelectButtonProps) => {
  const COLORS = themeStore.colors
  const STYLES = styles(COLORS)

  return (
    <NativeButton
      disabled={disabled}
      onPress={onPress}
      style={[
        STYLES.interestsButton,
        !disabled && selected && [STYLES.selectedButton, activeStyle],
      ]}
    >
      <Text style={[STYLES.interestsText, selected && STYLES.selectedText, (activeStyle || disabled) && STYLES.darktext]}>
        {(item.name || item.title).toUpperCase()}
      </Text>
    </NativeButton>
  )
}

export default SelectButton
