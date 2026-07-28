"use client"

import { useEffect, useState, type CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import { Sora, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google"
import { useLanguage } from "@/lib/i18n/context"
import { dnaTranslations, formatDnaYear } from "@/lib/i18n/translations/dna"
import { legalTranslations, type LegalPageContent } from "@/lib/i18n/translations/legal"
import { LanguageSwitcher } from "@/components/language-switcher"
import dnaStyles from "@/components/dna-home/dna-home.module.css"
import styles from "./legal-page.module.css"

const sora = Sora({ subsets: ["latin"], variable: "--font-dna-heading" })
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dna-body",
})
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dna-mono",
})

type LegalPageProps = {
  kind: "privacy" | "cookies"
}

export function LegalPage({ kind }: LegalPageProps) {
  const { language } = useLanguage()
  const nav = dnaTranslations[language].nav
  const t = legalTranslations[language]
  const page: LegalPageContent = kind === "privacy" ? t.privacy : t.cookies
  const year = new Date().getFullYear()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1100) setIsMobileMenuOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <div
      className={`${styles.root} ${dnaStyles.root} ${sora.variable} ${plexSans.variable} ${plexMono.variable}`}
      style={
        {
          ["--font-heading" as never]: "var(--font-dna-heading)",
          ["--font-body" as never]: "var(--font-dna-body)",
          ["--font-mono" as never]: "var(--font-dna-mono)",
        } as CSSProperties
      }
    >
      <div className={styles.vignette} aria-hidden />

      <nav className={dnaStyles.nav}>
        <div className={dnaStyles.navIn}>
          <Link className={dnaStyles.logo} href="/" onClick={closeMobileMenu} aria-label="AI2Innovate home">
            <Image
              src="/AI2innovate-logo.png"
              alt="AI2Innovate"
              width={160}
              height={160}
              className={dnaStyles.logoImg}
              priority
            />
          </Link>

          <div className={dnaStyles.navDesktop}>
            <Link href="/#services">{nav.services}</Link>
            <Link href="/#industries">{nav.industries}</Link>
            <Link href="/#solutions">{nav.solutions}</Link>
            <Link href="/#why-us">{nav.whyUs}</Link>
            <div className={dnaStyles.lang}>
              <LanguageSwitcher />
            </div>
            <Link href="/#contact" className={[dnaStyles.btn, dnaStyles.btnAmber, dnaStyles.navCta].join(" ")}>
              {nav.bookFreeCall}
            </Link>
          </div>

          <div className={dnaStyles.navMobileActions}>
            <div className={dnaStyles.lang}>
              <LanguageSwitcher />
            </div>
            <button
              type="button"
              className={dnaStyles.menuToggle}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              <span className={isMobileMenuOpen ? dnaStyles.menuToggleOpen : undefined} />
              <span className={isMobileMenuOpen ? dnaStyles.menuToggleOpen : undefined} />
              <span className={isMobileMenuOpen ? dnaStyles.menuToggleOpen : undefined} />
            </button>
          </div>
        </div>

        <div className={[dnaStyles.mobileMenu, isMobileMenuOpen ? dnaStyles.mobileMenuOpen : ""].join(" ")}>
          <Link href="/#services" onClick={closeMobileMenu}>
            {nav.services}
          </Link>
          <Link href="/#industries" onClick={closeMobileMenu}>
            {nav.industries}
          </Link>
          <Link href="/#solutions" onClick={closeMobileMenu}>
            {nav.solutions}
          </Link>
          <Link href="/#why-us" onClick={closeMobileMenu}>
            {nav.whyUs}
          </Link>
          <Link
            href="/#contact"
            className={[dnaStyles.btn, dnaStyles.btnAmber, dnaStyles.mobileMenuCta].join(" ")}
            onClick={closeMobileMenu}
          >
            {nav.bookFreeCall}
          </Link>
        </div>
      </nav>

      <main className={styles.main}>
        <Link href="/" className={styles.back}>
          {t.backHome}
        </Link>
        <p className={styles.eyebrow}>{t.legalEyebrow}</p>
        <h1 className={styles.title}>{page.title}</h1>
        <p className={styles.updated}>{page.lastUpdatedLabel}</p>
        <p className={styles.intro}>{page.intro}</p>

        {page.sections.map((section) => (
          <section key={section.title} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 64)}>{p}</p>
            ))}
            {section.bullets ? (
              <ul className={styles.bullets}>
                {section.bullets.map((item) => (
                  <li key={item.slice(0, 64)}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <div className={styles.contactBox}>
          <h2>{page.contactTitle}</h2>
          <pre>{page.contactBody}</pre>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerIn}>
          <span>{formatDnaYear(t.copyright, year)}</span>
          <div className={styles.footerLinks}>
            <Link href="/privacy">{t.privacyLink}</Link>
            <Link href="/cookies">{t.cookiesLink}</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
