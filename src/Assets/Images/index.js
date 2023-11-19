import { Platform } from 'react-native'

export default {
  tabBar: {
    home: require('./TabBar/home.png'),
    coffeeCup: require('./TabBar/coffeeCup.png'),
    play: require('./TabBar/play.png'),
    scanQr: require('./TabBar/scanQr.png'),
    person: require('./TabBar/person.png'),
    cart: require('./cart.png'),
  },

  card: {
    cardImage: require('./Home/homeScreenCardImage.png'),
    blancoVid: require('./Home/blancoVid.jpg'),
    ONDGVID: require('./Home/ONDG.jpg'),

    starBUX: require('./Home/starbuxVid.jpg'),

    blancoFeed: require('./blancoFeed.png'),
  },
  introScreen: {
    male: require('./IntroScreen/male.png'),
    female: require('./IntroScreen/female.png'),
    holdMug: require('./IntroScreen/holdMug.png'),
    coffeePouring: require('./IntroScreen/coffeePouring.png'),
    holdCoffeeCup: require('./IntroScreen/holdCoffeeCup.png'),
    coffeeCheers: require('./IntroScreen/coffeeCheers.png'),
    nissanPatrol: require('./IntroScreen/nissanPatrol.png'),
    carPlate: {
      abouDhabi: require('./IntroScreen/carPlate/abouDhabi.png'),
      ajman: require('./IntroScreen/carPlate/ajman.png'),
      dubai: require('./IntroScreen/carPlate/dubai.png'),
      fajira: require('./IntroScreen/carPlate/fajira.png'),
      rak: require('./IntroScreen/carPlate/rak.png'),
      sharjah: require('./IntroScreen/carPlate/sharjah.png'),
      ummAlQuwain: require('./IntroScreen/carPlate/ummAlQuwain.png'),
    }
  },


  BeanoQrCode: require('./BeanoQrCode.png'),
  search: require('./search.png'),
  share: require('./share.png'),
  filledHeart: require('./filledHeart.png'),
  emptyHeart: require('./emptyHeart.png'),
  mail: require('./mail.png'),
  smartphone: require('./smartphone.png'),
  delivery: require('./delivery.png'),
  star: require('./star.png'),
  speedingCar: require('./speedingCar.png'),
  informationCircle: require('./informationCircle.png'),
  quote: require('./quote.png'),
  paper: require('./paper.png'),
  settings: require('./settings.png'),
  logOut: require('./logOut.png'),
  lock: require('./lock.png'),
  closeCircle: require('./closeCircle.png'),
  plus: require('./plus.png'),
  threeDays: require('./threeDays.png'),
  fourDays: require('./fourDays.png'),
  fire: require('./fire.png'),
  imageIcon: require('./imageIcon.png'),
  plusIcon: require('./plusIcon.png'),

  logoIcon: require('./logo.png'),
  blancoLogo: require('./blancoLogo.jpg'),
  oneDegreeLogo: require('./oneDegreeLogo.jpg'),

  starbucksLogo: require('./starbucksLogo.png'),
  nearbyMaps: require('./nearbyMaps.png'),
  feedTest: require('./feedTest.png'),

  logo: require('./pops-logo.png'),
  breaks: require('./breaks.png'),
  break: require('./break.png'),
  working: require('./working.png'),
  workHours: require('./workHours.png'),
  placeholder: require('./no-image-placeholder.png'),
  uploadImagePlaceholder: require('./uploadImagePlaceholder.png'),
  alertIcon: require('./alert-icon.png'),
  burgermenu: require('./burgermenu.png'),
  closeIcon: require('./CLOSEBUTTON.png'),
  addIcon: require('./Add.png'),
  profilePlaceholder: require('./no-image-placeholder.png'),
  efficiency: require('./efficiency.png'),
  arrowDown: require('./arrowDown.png'),
  arrowUp: require('./arrowUp.png'),
  leftArrow: require('./leftArrow.png'),
  rightArrow: require('./rightArrow.png'),
  calendar: require('./calendar.png'),
  clockIcon: require('./clockIcon.png'),

  avatarNoImage: require('./avatarNoImage.png'),
  bluetoothcheckin: require('./bluetoothcheckin.png'),
  locationCheckin: require('./locationCheckin.png'),
  notefromemployee: require('./notefromemployee.png'),

  menu: {
    requests: require('./Drawer/requests.jpg'),
    settings: require('./Drawer/settings.png'),
    logs: require('./Drawer/logs.png'),
  },
  intro: {
    checkin: require('./Intro/checkin.gif'),
    homeScreen: Platform.select({
      android: require('./Intro/employeeHomescreen.android.png'),
      ios: require('./Intro/employeeHomescreen.ios.png'),
    }),
    requestDayOff: Platform.select({
      android: require('./Intro/requestDayOff.android.gif'),
      ios: require('./Intro/requestDayOff.ios.png'),
    }),
  }
}
