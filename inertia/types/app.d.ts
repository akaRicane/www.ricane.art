export type Translations = {
  localeTranslations: {
    [x: string]: string
  }
  fallbackTranslations: {
    [x: string]: string
  }
  fallbackLocale: string
  readonly locale: string
}

export type UrlString = string
