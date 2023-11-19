
import React from 'react'
import {
  TextInput as RNTextInput,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import NativeButton from '../Buttons/NativeButton'

import DimensionHelper from '../../Helpers/DimensionHelper'

import { themeStore } from '../../Stores/StoreFactory'
import Colors from '../../Assets/Constants/Colors'

import { TextInputProps, State } from './TextInputProps'

import styles from './styles'

const TEXT_AREA_SIZE = { big: 6, small: 1 }

class TextInput extends React.Component<TextInputProps, State> {
  static defaultProps = {
    value: '',
    disabled: false,
    hasShadow: true,
    nextField: null,
    placeholder: '',
    isPassword: false,
    isSmall: false,
    isFullWidth: false,
    isGrey: false,
    extraProps: {},

    iconLeft: null,
    iconRight: null,
    rightPress: null,
    leftPress: null,

    textArea: false,
    isEmail: false,
    containerStyle: {},
    isVSmall: false,
    hasBorder: false,
    required: false,
    showFlags: false,
  };

  constructor(props: TextInputProps) {
    super(props)

    this.COLORS = Colors
    this.STYLES = styles(Colors)

    this.state = {
      focused: false,
      strength: null,
      secureText: props.isPassword || false,
      validEmail: true,
      validPass: true,
      value: props.value,
    }
  }

  onFocus() {
    const { onFocus = null } = this.props
    onFocus && onFocus()
    this.setState({ focused: true })
  }

  onBlur() {
    const { onBlur = null } = this.props
    onBlur && onBlur()
    this.setState({ focused: false })
  }

  validateEmail(email: string) {
    // eslint-disable-next-line no-useless-escape, max-len
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  onChangeText(field: string, text: string) {
    this.setState({ value: text })
    const { onChangeText } = this.props
  onChangeText &&  onChangeText(field, text)
  }

  onTextInputBlur() {
    const { extraOnBlur, isEmail, value } = this.props

    extraOnBlur && extraOnBlur()
    this.onBlur()
    if (isEmail) {
      this.setState({
        validEmail: this.validateEmail(value),
      })
    }
  }

  renderIcon({
    source,
    isImage = false,
    isClearButton = false
  }: {
    source: ImageSourcePropType | string | Object | number;
    isImage: boolean;
    isClearButton: boolean;
  }, onPress: any) {
    const { focused } = this.state

    if (typeof source === 'string') {
      return (
        <NativeButton onPress={() => onPress && onPress()} style={this.STYLES.imageView}>
          <Icon name={source} style={this.STYLES.icon} />
        </NativeButton>
      )
    } else if (isImage) {
      return (
        <NativeButton
          disabled={!onPress}
          onPress={() => {
            if (isClearButton) {
              this.setState({ value: '' })
            }
            onPress && onPress()
          }}
          style={this.STYLES.imageView}>
          <Image source={source} style={this.STYLES.image(focused)} />
        </NativeButton>
      )
    }
    return <View style={this.STYLES.imageView}>{source}</View>
  }

  render() {
    let width = DimensionHelper.getWidth(340),
      height = DimensionHelper.getHeight(45)

    const {
      field,
      value,
      disabled,
      containerStyle,
      setRef,
      nextField,
      placeholder,
      placeholderTextColor,
      isSmall,
      isFullWidth,
      isGrey,
      hasBorder,
      required,
      extraProps,
      iconLeft,
      iconRight,
      textArea,
      isVSmall,
      leftPress,
      rightPress,
      extraOnFocus,
    } = this.props

    let textInputView = [this.STYLES.section]
    let textInputStyle = [this.STYLES.input]

    if (this.state.focused) {
      textInputView.push(this.STYLES.focused)
    } else if (hasBorder) {
      textInputView.push(this.STYLES.border)
    }
    if (iconLeft === null) {
      textInputView.push(this.STYLES.inputPadding)
      textInputStyle.push(this.STYLES.noIconsWidth)
    }
    if (isFullWidth) {
      width = '100%'
      height = DimensionHelper.getHeight(40)
    }
    if (isSmall) {
      textInputView.push(this.STYLES.smallSize)
      width = DimensionHelper.getWidth(290)
    }
    if (isGrey) {
      textInputView.push(this.STYLES.greyBackground)
      textInputStyle.push(this.STYLES.smallerFont)
    }
    if (isVSmall) {
      textInputView.push(this.STYLES.isVSmall)
      textInputStyle = this.STYLES.VSmallText
      width = DimensionHelper.getWidth(45)
    }
    if (textArea) {
      textInputView.push(this.STYLES.textArea)
      textInputStyle.push(this.STYLES.textAreaInput)
      height = DimensionHelper.getHeight(130)
    }
    if (value) {
      textInputStyle.push(this.STYLES.mediumFont)
    }

    return (
      <View style={[textInputView, { width, height }, containerStyle]}>
        {iconLeft && this.renderIcon(iconLeft, leftPress)}
        <RNTextInput
          key={`${field}_text_input`}
          ref={(input) => {
            setRef && setRef(field, input)
          }}
          value={this.props.value}
          selectionColor={this.COLORS.pink}
          onChangeText={(text) => this.onChangeText(field, text)}
          multiline={this.props?.multiline ?? textArea }
          numberOfLines={this.props?.multilineNum ?? textArea ? TEXT_AREA_SIZE.big : TEXT_AREA_SIZE.small}
          editable={!disabled}
          blurOnSubmit={!nextField && !textArea}
          returnKeyType={nextField && !textArea ? 'next' : null}
          onSubmitEditing={() => {
            nextField && nextField.focus()
          }}
          
          secureTextEntry={this.state.secureText}
          underlineColorAndroid='transparent'
          placeholder={`${required ? '* ' : ''}${placeholder}`}
          placeholderTextColor={placeholderTextColor || this.COLORS.grey}
          style={[textInputStyle,this.props.inputStyleProp]}
          onFocus={() => {
            extraOnFocus && extraOnFocus()
            this.onFocus()
          }}
          onBlur={() => {
            this.onTextInputBlur()
          }}
          {...extraProps}
        />
        {iconRight && this.renderIcon(iconRight, rightPress)}
      </View>
    )
  }
}

export default TextInput
