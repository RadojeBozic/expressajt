import { createI18n } from 'vue-i18n'

import sr from './locales/sr.json'
// import en from './locales/en.json'  // Ako budeš dodavao više jezika

const i18n = createI18n({
  legacy: false,
  locale: 'sr',
  fallbackLocale: 'sr',
  messages: {
    sr,
    // en,
  },
})

export default i18n
