import React from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'

const DismissKeyboard = ({ children }: { children: Object }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

export default DismissKeyboard
