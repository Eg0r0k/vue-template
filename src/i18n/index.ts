import { createI18n } from 'vue-i18n'
import { type SupportedLocale, messages } from './messages'
import { useStorage } from '@vueuse/core'
import { isSupportedLocale, setHtmlLangAttribute } from '@/utils/localeUtils'

type MessageSchema = (typeof messages)['en']

export const DEFAULT_LOCALE: SupportedLocale = 'en'

export const getSavedLocale = (): SupportedLocale | null => {
  const savedLocale = useStorage<SupportedLocale>('user-locale', DEFAULT_LOCALE)
  return savedLocale.value && isSupportedLocale(savedLocale.value) ? savedLocale.value : null
}

export const getBrowserLocale = (): SupportedLocale | null => {
  const browserLocale = navigator.language?.split('-')[0]
  return browserLocale && isSupportedLocale(browserLocale)
    ? (browserLocale as SupportedLocale)
    : null
}

export const getInitialLocale = (): SupportedLocale => {
  const savedLocale = getSavedLocale()
  if (savedLocale) {
    setHtmlLangAttribute(savedLocale)
    return savedLocale
  }

  const browserLocale = getBrowserLocale()
  if (browserLocale) {
    setHtmlLangAttribute(browserLocale)
    return browserLocale
  }
  setHtmlLangAttribute(DEFAULT_LOCALE)
  return DEFAULT_LOCALE
}

export const i18n = createI18n<[MessageSchema], SupportedLocale>({
  legacy: false,
  messages,
  locale: getInitialLocale(),
  fallbackLocale: DEFAULT_LOCALE,
})
