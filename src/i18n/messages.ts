import ru from '@/i18n/locales/ru'
import en from '@/i18n/locales/en'

//TODO: Make lazy loading for i18n

export const messages = {
  en,
  ru,
} as const
export type SupportedLocale = keyof typeof messages

export const SUPPORTED_LOCALES = Object.keys(messages) as SupportedLocale[]
