export type Language = "en" | "fr" | "de" | "nl" | "sk"

export interface LanguageConfig {
  code: Language
  name: string
  flag: string
}

export const languages: LanguageConfig[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  { code: "sk", name: "Slovenčina", flag: "🇸🇰" },
]
