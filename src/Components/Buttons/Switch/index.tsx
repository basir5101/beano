import React from 'react'
import { Switch as RNSwitch } from 'react-native-switch'
import { Shadow } from 'react-native-neomorph-shadows'

import { themeStore } from '../../../Stores/StoreFactory'

import DimensionHelper from '../../../Helpers/DimensionHelper'
import styles from './styles'

type SwitchProps = {
  setValue: any;
  value: string | boolean;
};

const Switch = ({ setValue, value }: SwitchProps) => {
  const Colors = themeStore.colors
  const STYLES = styles(themeStore.colors)

  return (
    <Shadow style={STYLES.buttonShadow}>
      <RNSwitch
        activeText={''}
        inActiveText={''}
        circleBorderWidth={0}
        backgroundActive={Colors.blackPink}
        backgroundInactive={Colors.offWhite}
        circleActiveColor={Colors.switchPink}
        circleInActiveColor={Colors.white}
        changeValueImmediately={true}
        switchLeftPx={2}
        switchRightPx={2}
        switchWidthMultiplier={2.3}
        switchBorderRadius={30}
        renderActiveText={false}
        renderInActiveText={false}
        barHeight={DimensionHelper.getHeight(26)}
        circleSize={DimensionHelper.getWidth(23)}
        onValueChange={async (value: boolean) => {
          setValue(value)
        }}
        value={value}
      />
    </Shadow>
  )
}

export default Switch
