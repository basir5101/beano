const COLORS = {
  headerLightPink: '#F5EAE6',
  veryLightPink: '#FFF8F5',
  midDarkPink: '#E6B7A7',
  veryDarkBlue: '#212D3D',

  tabBarBlue: '#416575',
  middleBlue: '#416575',

  lightPink: '#F5EAE6',
  shadowGrey: '#171717',
  midLightGrey: '#8A8C8F',

  brown: '#A2928A',
  midLightBrown: '#C7B9B6',
  darkBrown: '#5A3830',
  orangeBrown: '#682C0B',
  lightOrange: '#D2AF9A',

  headerGrey: '#f8f8f8',
  tabBarGrey: '#c7c7cc',
  darkGrey: '#828390',
  loaderGrey: '#504f5d',
  loaderLightGrey: '#d0d5dc',
  grey: '#8e8e93',
  middleGrey: '#c7c7cc',
  lightGrey: '#f5f5f8',
  borderGrey: '#d1d1d6',

  headerLightBlue: '#eaf3fb',
  blue: '#2689f5',
  darkBlue: '#2c3658',
  lightBlue: '#b9c0cb',
  // middleBlue: '#9fcffb',
  veryLightBlue: '#EAF8FC',

  red: '#ff3b30',
  black: '#0e142b',
  white: '#ffffff',
  unsellectedHeaderButton: '#ac1918',
  progressGreen: '#17d3a7',
  purple: '#8660f0',

  workDaysColor: '#2689f5c0',
  orange: '#db6700',
  lateColor: '#fdab38',
  offColor: '#2c365840',

  onTimeGraph: '#00c5a2',
  lateGraph: '#00bfff',
  earlyGraph: '#b545e4',

  green: '#4dc862',
  lightGreen: '#00e0ad',
  yellow: '#ffd11a',


  checkedIn: '#10af2b',
  checkedOut: '#ff3b30',
  noStatus: '#8e8e93',
  unfilledColor: '#f3f3f3',


  early: '#10af2b',
  late: '#ff3b30',
  onTime: '#8e8e93',


  navBarColor: '#49E5C2',
  highlightedButton: '#49E5C2',
  greyedButton: '#A5C1C8',
  dimmedButton: '#ACF2E5',
  separator: '#E3E4E7',
  lightBlack:'black',
  lightBlueGrey: '#A5C1C8',
  blueGrey: '#82A7B0',
  darkBlueGrey: '#6E8D95',

  border: '#E1EDF0',
  dimmedCheckOut: '#D8E7E7',
  warningRed: '#f40000',
  warningGrey: '#979797',
  warningLightGrey: '#f7f7f7',

  // lightOrange: '#ff8621',

  connectedColors: {
    connected: 'green',
    connecting: '#fafa00',
    disconnected: 'red',
  },
}

export default {
  ...COLORS,
  ...{
    MAIN_COLOR: COLORS.darkBlue
  },
}
