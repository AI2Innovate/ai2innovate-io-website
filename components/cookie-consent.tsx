"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { useLanguage } from "@/lib/i18n/context"
import { legalTranslations } from "@/lib/i18n/translations/legal"
import styles from "./cookie-consent.module.css"

const STORAGE_KEY = "ai2_cookie_consent"
const GA_ID = "G-CH5415SHTC"

type Consent = "accepted" | "rejected"

function readConsent(): Consent | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    if (value === "accepted" || value === "rejected") return value
  } catch {
    /* ignore */
  }
  return null
}

function writeConsent(value: Consent) {
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    /* ignore */
  }
}

export function CookieConsent() {
  const { language } = useLanguage()
  const t = legalTranslations[language].cookieBanner
  const [consent, setConsent] = useState<Consent | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setConsent(readConsent())
    setReady(true)
  }, [])

  const decide = (value: Consent) => {
    writeConsent(value)
    setConsent(value)
  }

  const analyticsAllowed = consent === "accepted"

  return (
    <>
      {analyticsAllowed ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
          <Analytics />
        </>
      ) : null}

      {ready && consent === null ? (
        <div className={styles.banner} role="dialog" aria-live="polite" aria-label={t.title}>
          <div className={styles.inner}>
            <div>
              <h2 className={styles.title}>{t.title}</h2>
              <p className={styles.description}>{t.description}</p>
            </div>
            <div className={styles.actions}>
              <button type="button" className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => decide("accepted")}>
                {t.accept}
              </button>
              <button type="button" className={`${styles.btn} ${styles.btnGhost}`} onClick={() => decide("rejected")}>
                {t.reject}
              </button>
              <Link href="/cookies" className={styles.link}>
                {t.learnMore}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
