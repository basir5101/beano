const ENGLISH = 'en'
const ARABIC = 'ar'
// const FRENCH = 'fr'
const DEFAULT_LOCALE = ENGLISH
const LANGUAGE_KEY = '@Beano:Locale_Key'


class Keys {
  getBaseUrl() {
    // return 'https://api.popsers.com/api/v2/'
    // return 'https://staging-api.popsers.com/api/v2/'
    return 'https://a-p-e.herokuapp.com'
  }

  getDefaultLocale() {
    return DEFAULT_LOCALE
  }

  get supportedLanguages() {
    return [
      { title: 'English', value: ENGLISH },
      { title: 'العربية', value: ARABIC },
      // { title: 'Français', value: FRENCH },
    ]
  }

  get english() {
    return ENGLISH
  }

  get arabic() {
    return ARABIC
  }

  // get french() {
  //   return FRENCH
  // }

  get languageKey() {
    return LANGUAGE_KEY
  }
}

export default new Keys()
