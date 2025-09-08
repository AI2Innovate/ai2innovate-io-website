"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { useTheme } from "@/lib/theme-context"

const MenuIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const XIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const SunIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const MoonIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
)

const GlobeIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
)

const ChevronDownIcon = () => (
  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const languageDropdownRef = useRef<HTMLDivElement>(null)

  const languages = [
    { code: "en" as const, name: "English", flag: "🇺🇸" },
    { code: "nl" as const, name: "Nederlands", flag: "🇳🇱" },
    { code: "fr" as const, name: "Français", flag: "🇫🇷" },
    { code: "pt" as const, name: "Português", flag: "🇵🇹" },
  ]

  const currentLangDisplay = languages.find((lang) => lang.code === language)?.name || "English"

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ai2Innovate%20-%20Light%20-%20No%20Tagline-MlkbWkLvmn75G3mA6PgDkSpmhmXbSe.png"
              alt="Ai2Innovate"
              className="h-8 w-auto"
            />
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/products"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("products")}
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("services")}
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("about")}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("contact")}
            </Link>

            <div className="flex items-center space-x-2">
              {/* Language Dropdown */}
              <div className="relative" ref={languageDropdownRef}>
                <button
                  onClick={() => {
                    console.log('Language button clicked!');
                    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
                  }}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-md hover:bg-accent"
                >
                  <GlobeIcon />
                  <span>{currentLangDisplay}</span>
                  <ChevronDownIcon />
                </button>
                
                {isLanguageDropdownOpen && (
                  <div className="absolute right-0 top-full mt-1 w-48 bg-background border border-border rounded-md shadow-lg z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          console.log('Language selected:', lang.code);
                          setLanguage(lang.code);
                          setIsLanguageDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground first:rounded-t-md last:rounded-b-md"
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <Button asChild>
              <Link href="/contact">{t("workWithUs")}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <XIcon /> : <MenuIcon />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href="/products"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {t("products")}
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {t("services")}
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {t("about")}
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {t("contact")}
              </Link>

              <div className="flex items-center justify-between px-3 py-2 border-t border-border/40 mt-2 pt-4">
                {/* <Button variant="ghost" size="sm" onClick={toggleTheme} aria-label="Toggle theme">
                  {isDark ? <SunIcon /> : <MoonIcon />}
                  <span className="ml-2">{isDark ? "Light" : "Dark"}</span>
                </Button> */}

                {/* Mobile Language Dropdown */}
                <div className="relative" ref={languageDropdownRef}>
                  <button
                    onClick={() => {
                      console.log('Mobile language button clicked!');
                      setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
                    }}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-md hover:bg-accent"
                  >
                    <GlobeIcon />
                    <span>{currentLangDisplay}</span>
                    <ChevronDownIcon />
                  </button>
                  
                  {isLanguageDropdownOpen && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 w-48 bg-background border border-border rounded-md shadow-lg z-50">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            console.log('Mobile language selected:', lang.code);
                            setLanguage(lang.code);
                            setIsLanguageDropdownOpen(false);
                            setIsOpen(false);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground first:rounded-t-md last:rounded-b-md"
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="px-3 py-2">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    {t("workWithUs")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
