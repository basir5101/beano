import React from 'react'
import { View, ViewStyle, TextStyle, ActivityIndicator } from 'react-native'


import Text from '../../Text'
import NativeButton from '../../Buttons/NativeButton'

import Colors from 'Constants/Colors'

// import { themeStore } from '../../../Stores/StoreFactory'

import styles from './styles'

type MainButtonProps = {
  text: string;
  buttonStyle: ViewStyle;
  containerStyle: ViewStyle;
  textStyle: TextStyle;
  notCentered: boolean;
  onPress: any;
  loading: boolean;
  loaderColor: string;
  loaderSize: string;
  disabled: boolean;
};

const MainButton = ({
  text,
  buttonStyle,
  containerStyle,
  textStyle,
  onPress = () => { },
  notCentered = false,
  loading = false,
  loaderColor = Colors.white,
  loaderSize = 'large',

  ...props
}: MainButtonProps) => {
  const COLORS = Colors
  const STYLES = styles(COLORS)


  return (
    <View style={[notCentered ? {} : STYLES.centerView, containerStyle]}>

      <View style={[STYLES.buttonShadow, buttonStyle]}>
        <NativeButton style={STYLES.bottomButton} onPress={onPress} {...props}>
          {loading
            ? <ActivityIndicator size={loaderSize} color={loaderColor} />
            : <Text style={[STYLES.buttonText, textStyle]}>{text}</Text>
          }
        </NativeButton>
      </View>

    </View>
  )
}

export default MainButton
