import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import localePathDetector from './locale-path-detector'

import zhCN from './zh-CN'
import zhHK from './zh-HK'
import en from './en'

// 添加路径检查组件，当路径中存在多语言时该值为第一优先级
// /en/profiles/:id -> en
const languageDetector = new LanguageDetector()
languageDetector.addDetector(localePathDetector)

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['localePathDetector', 'querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'locale',
      lookupCookie: 'locale',
      lookupLocalStorage: 'locale',
      lookupSessionStorage: 'locale',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
    },
    resources: {
      'zh-CN': zhCN,
      'zh-HK': zhHK,
      en,
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      escapeValue: false,
    },
  })
export default i18n
