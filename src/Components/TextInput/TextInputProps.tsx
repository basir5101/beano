import { ImageSourcePropType } from 'react-native'

export type TextInputProps = {
  value: string;
  field: string;
  placeholder: string;
  placeholderTextColor: string;
  onChangeText: any;
  nextField: Object;
  setRef: any;
  extraProps: Object;
  disabled: boolean;
  selectedAndDisabled: boolean;
  iconLeft: {
    source: ImageSourcePropType | string | Object | number;
    isImage: boolean;
  } | null;
  iconRight: {
    source: ImageSourcePropType | string | Object | number;
    isImage: boolean;
  } | null;
  textArea: boolean;
  onFocus: any;
  onBlur: any;
  isPassword: boolean;
  isSmall: boolean;
  isFullWidth: boolean;
  hasShadow: boolean;
  isGrey: boolean;
  isEmail: boolean;
  containerStyle: Object;
  isVSmall: boolean;
  hasBorder: boolean;
  extraOnFocus: any;
  extraOnBlur: any;
  required: boolean;
  showFlags: boolean;
  leftPress: any;
  rightPress: any;
};

export type State = {
  focused: boolean;
  strength: number | null;
  secureText: boolean;
  validEmail: boolean;
  validPass: boolean;
  value: string;
};