import { Translations } from '~/types/app'

export const t = (key: string, translations: Translations): string => {
  // console.log(key, translations)
  return translations.localeTranslations[key] || translations.fallbackTranslations[key]
}
