import { SUPPORTED_LOCALES, type SupportedLocale } from '@/i18n/messages'

export const isSupportedLocale = (locale: unknown): locale is SupportedLocale => {
  return typeof locale === 'string' && SUPPORTED_LOCALES.includes(locale as SupportedLocale)
}
export const setHtmlLangAttribute = (locale: SupportedLocale): void => {
  document.querySelector('html')?.setAttribute('lang', locale)
}
