"use client"

import { useEffect, useMemo, useRef, useState, type CSSProperties, type FormEvent } from "react"
import Image from "next/image"
import { Sora, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google"
import { useLanguage } from "@/lib/i18n/context"
import { dnaTranslations, formatDnaYear } from "@/lib/i18n/translations/dna"
import { LanguageSwitcher } from "@/components/language-switcher"
import styles from "./dna-home.module.css"

const sora = Sora({ subsets: ["latin"], variable: "--font-dna-heading" })
const plexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-dna-body" })
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-dna-mono" })

type Rgb = { r: number; g: number; b: number }

function hexToRgb(h: string): Rgb {
  return {
    r: Number.parseInt(h.slice(1, 3), 16),
    g: Number.parseInt(h.slice(3, 5), 16),
    b: Number.parseInt(h.slice(5, 7), 16),
  }
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

export function DnaHome() {
  const { language } = useLanguage()
  const t = dnaTranslations[language]
  const year = new Date().getFullYear()

  const rootRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error"
    message: string
  } | null>(null)

  const solutions = useMemo(
    () => [
      {
        name: "cyberxdefend.com",
        href: "https://cyberxdefend.com",
        description: t.solutions.cyberxdefend,
        color: "#FF6B9D",
      },
      {
        name: "shopmuse.io",
        href: "https://shopmuse.io",
        description: t.solutions.shopmuse,
        color: "#FFB454",
      },
      {
        name: "chainfoundry.dev",
        href: "https://chainfoundry.dev",
        description: t.solutions.chainfoundry,
        color: "#3EE6C1",
      },
      {
        name: "multimind.dev",
        href: "https://multimind.dev",
        description: t.solutions.multimind,
        color: "#8B7CFF",
      },
      {
        name: "dbabridge.com",
        href: "https://dbabridge.com",
        description: t.solutions.dbabridge,
        color: "#3EE6C1",
      },
    ],
    [t.solutions],
  )

  useEffect(() => {
    const prevBg = document.body.style.background
    document.body.style.background = "#070B16"
    return () => {
      document.body.style.background = prevBg
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1100) setIsMobileMenuOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  useEffect(() => {
    const root = rootRef.current
    const canvas = canvasRef.current
    if (!root || !canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let W = 0
    let H = 0
    let DPR = 1
    let raf = 0

    function resize() {
      DPR = clamp(window.devicePixelRatio || 1, 1, 2)
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W * DPR
      canvas.height = H * DPR
      canvas.style.width = `${W}px`
      canvas.style.height = `${H}px`
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }

    resize()
    window.addEventListener("resize", resize)

    const baseA = hexToRgb("#3EE6C1")
    const accent: Rgb = { ...baseA }
    let accentTarget: Rgb = { ...baseA }

    const sections = Array.from(root.querySelectorAll("section[data-color], header[data-color]"))
    const secObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const col = (e.target as HTMLElement).getAttribute("data-color") || "#3EE6C1"
            accentTarget = hexToRgb(col)
          }
        }
      },
      { threshold: 0.45 },
    )
    sections.forEach((s) => secObserver.observe(s))

    let scrollY = window.scrollY
    let targetScroll = scrollY
    let mouseX = 0
    let targetMouseX = 0

    const onScroll = () => {
      targetScroll = window.scrollY
    }
    const onMouseMove = (e: MouseEvent) => {
      if (W <= 0) return
      targetMouseX = e.clientX / W - 0.5
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("mousemove", onMouseMove, { passive: true })

    const particles: Array<{ x: number; y: number; r: number; vy: number; ph: number; a: number }> = []
    const P_COUNT = 36
    for (let i = 0; i < P_COUNT; i++) {
      particles.push({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() * 1.8 + 0.6,
        vy: Math.random() * 0.12 + 0.03,
        ph: Math.random() * Math.PI * 2,
        a: Math.random() * 0.5 + 0.15,
      })
    }

    const rgba = (c: Rgb, a: number) => `rgba(${c.r | 0},${c.g | 0},${c.b | 0},${a})`

    let tt = 0
    function draw() {
      ctx.clearRect(0, 0, W, H)

      scrollY = lerp(scrollY, targetScroll, 0.06)
      mouseX = lerp(mouseX, targetMouseX, 0.05)
      accent.r = lerp(accent.r, accentTarget.r, 0.03)
      accent.g = lerp(accent.g, accentTarget.g, 0.03)
      accent.b = lerp(accent.b, accentTarget.b, 0.03)

      const isMobile = W < 1100
      const docH = Math.max(1, document.documentElement.scrollHeight - H)
      const prog = Math.min(1, scrollY / docH)
      const cx = isMobile ? W * 0.5 : W * (0.72 - 0.24 * Math.sin(prog * Math.PI))
      const radius = isMobile ? W * 0.3 : Math.min(W * 0.16, 230)
      const twist = 0.012
      const phase = (reduceMotion ? 0 : tt * 0.4) + scrollY * 0.0042 + mouseX * 1.2
      const step = 7
      const rungEvery = 38

      const grad = ctx.createRadialGradient(cx, H * 0.5, 0, cx, H * 0.5, Math.max(W, H) * 0.55)
      grad.addColorStop(0, rgba(accent, 0.07))
      grad.addColorStop(1, "rgba(0,0,0,0)")
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, W, H)

      function strandPoint(y: number, off: number) {
        const a = y * twist + phase + off
        return { x: cx + Math.sin(a) * radius, z: Math.cos(a) }
      }

      function dot(x: number, y: number, r: number, c: Rgb, z: number) {
        const depth = (z + 1) / 2
        ctx.beginPath()
        ctx.arc(x, y, Math.max(0.8, r), 0, Math.PI * 2)
        ctx.fillStyle = rgba(c, 0.25 + depth * 0.6)
        ctx.fill()
      }

      for (let y = -rungEvery; y < H + rungEvery; y += rungEvery) {
        const yy = y + ((scrollY * 0.25) % rungEvery)
        const p1 = strandPoint(yy, 0)
        const p2 = strandPoint(yy, Math.PI)
        const depth = (p1.z + 1) / 2
        ctx.beginPath()
        ctx.moveTo(p1.x, yy)
        ctx.lineTo(p2.x, yy)
        ctx.strokeStyle = rgba(accent, 0.06 + depth * 0.16)
        ctx.lineWidth = 1
        ctx.stroke()
        dot(p1.x, yy, 2.2 + p1.z, { r: 62, g: 230, b: 193 }, p1.z)
        dot(p2.x, yy, 2.2 + p2.z, { r: 139, g: 124, b: 255 }, p2.z)
      }

      function drawStrand(off: number, col: Rgb) {
        for (const pass of [0, 1] as const) {
          ctx.beginPath()
          let started = false
          for (let y = -step; y < H + step; y += step) {
            const p = strandPoint(y, off)
            const front = p.z >= 0
            if ((pass === 1) === front) {
              if (!started) {
                ctx.moveTo(p.x, y)
                started = true
              } else {
                ctx.lineTo(p.x, y)
              }
            } else if (started) {
              ctx.strokeStyle = rgba(col, pass === 1 ? 0.85 : 0.22)
              ctx.lineWidth = pass === 1 ? 2.4 : 1.4
              ctx.stroke()
              ctx.beginPath()
              started = false
            }
          }
          if (started) {
            ctx.strokeStyle = rgba(col, pass === 1 ? 0.85 : 0.22)
            ctx.lineWidth = pass === 1 ? 2.4 : 1.4
            ctx.stroke()
          }
        }
      }

      drawStrand(0, { r: 62, g: 230, b: 193 })
      drawStrand(Math.PI, { r: 139, g: 124, b: 255 })

      for (const p of particles) {
        p.y -= p.vy / H
        if (p.y < -0.02) {
          p.y = 1.02
          p.x = Math.random()
        }
        const px = p.x * W + Math.sin(tt + p.ph) * 14
        const py = p.y * H
        ctx.beginPath()
        ctx.arc(px, py, p.r, 0, Math.PI * 2)
        ctx.fillStyle = rgba(accent, p.a * 0.5)
        ctx.fill()
      }

      if (!reduceMotion) tt += 0.016
      raf = window.requestAnimationFrame(draw)
    }

    raf = window.requestAnimationFrame(draw)

    const revealEls = Array.from(root.querySelectorAll("[data-reveal='1']"))
    const revObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            ;(e.target as HTMLElement).classList.add(styles.revealIn)
            revObserver.unobserve(e.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    )
    revealEls.forEach((el) => revObserver.observe(el))

    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("mousemove", onMouseMove)
      secObserver.disconnect()
      revObserver.disconnect()
    }
  }, [])

  const onContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const form = e.currentTarget
    const fd = new FormData(form)
    const name = String(fd.get("name") || "").trim()
    const email = String(fd.get("email") || "").trim()
    const requirement = String(fd.get("message") || "").trim()

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, requirement }),
      })

      const result = (await response.json()) as { message?: string }

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your message.")
      }

      setSubmitStatus({
        type: "success",
        message: "Thanks! Your message has been sent successfully.",
      })
      form.reset()
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to send your message right now."
      setSubmitStatus({
        type: "error",
        message,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      ref={rootRef}
      className={[
        styles.root,
        sora.variable,
        plexSans.variable,
        plexMono.variable,
        // map our font vars into module-scoped names
      ].join(" ")}
      style={
        {
          // allow module CSS to reference these
          ["--font-heading" as never]: "var(--font-dna-heading)",
          ["--font-body" as never]: "var(--font-dna-body)",
          ["--font-mono" as never]: "var(--font-dna-mono)",
        } as CSSProperties
      }
    >
      <canvas ref={canvasRef} className={styles.dnaCanvas} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />

      <nav className={styles.nav}>
        <div className={styles.navIn}>
          <a className={styles.logo} href="#top" onClick={closeMobileMenu}>
            <Image
              src="/AI2innovate-logo.png"
              alt="AI2Innovate"
              width={160}
              height={160}
              className={styles.logoImg}
              priority
            />
          </a>

          <div className={styles.navDesktop}>
            <a href="#services">{t.nav.services}</a>
            <a href="#industries">{t.nav.industries}</a>
            <a href="#solutions">{t.nav.solutions}</a>
            <a href="#why-us">{t.nav.whyUs}</a>
            <div className={styles.lang}>
              <LanguageSwitcher />
            </div>
            <a href="#contact" className={[styles.btn, styles.btnAmber, styles.navCta].join(" ")}>
              {t.nav.bookFreeCall}
            </a>
          </div>

          <div className={styles.navMobileActions}>
            <div className={styles.lang}>
              <LanguageSwitcher />
            </div>
            <button
              type="button"
              className={styles.menuToggle}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              <span className={isMobileMenuOpen ? styles.menuToggleOpen : undefined} />
              <span className={isMobileMenuOpen ? styles.menuToggleOpen : undefined} />
              <span className={isMobileMenuOpen ? styles.menuToggleOpen : undefined} />
            </button>
          </div>
        </div>

        <div className={[styles.mobileMenu, isMobileMenuOpen ? styles.mobileMenuOpen : ""].join(" ")}>
          <a href="#services" onClick={closeMobileMenu}>
            {t.nav.services}
          </a>
          <a href="#industries" onClick={closeMobileMenu}>
            {t.nav.industries}
          </a>
          <a href="#solutions" onClick={closeMobileMenu}>
            {t.nav.solutions}
          </a>
          <a href="#why-us" onClick={closeMobileMenu}>
            {t.nav.whyUs}
          </a>
          <a
            href="#contact"
            className={[styles.btn, styles.btnAmber, styles.mobileMenuCta].join(" ")}
            onClick={closeMobileMenu}
          >
            {t.nav.bookFreeCall}
          </a>
        </div>
      </nav>

      <main id="top" className={styles.main}>
        {/* HERO */}
        <header className={styles.hero} data-color="#3EE6C1">
          <div className={[styles.wrap, styles.heroGrid].join(" ")}>
            <div>
              <div className={[styles.eyebrow, styles.reveal].join(" ")} data-reveal="1">
                <span className={styles.seq}>SEQ 00 · ORIGIN</span>
              </div>
              <h1 className={[styles.h1, styles.reveal, styles.d1].join(" ")} data-reveal="1">
                {t.hero.titleLine1}
                <br />
                {t.hero.titleLine2}{" "}
                <span className={styles.heroA}>D</span>
                <span className={styles.heroB}>N</span>
                <span className={styles.heroA}>A</span>.
              </h1>
              <p className={[styles.lede, styles.reveal, styles.d2].join(" ")} data-reveal="1">
                {t.hero.subtitle}
              </p>
              <div className={[styles.heroCtas, styles.reveal, styles.d3].join(" ")} data-reveal="1">
                <a className={[styles.btn, styles.btnAmber].join(" ")} href="#contact">
                  {t.hero.ctaPrimary}
                </a>
                <a className={[styles.btn, styles.btnGhost].join(" ")} href="#services">
                  {t.hero.ctaSecondary}
                </a>
              </div>
              <div className={[styles.geneTicker, styles.reveal, styles.d4].join(" ")} data-reveal="1">
                <span>
                  <b>A</b> · {t.hero.geneTicker1}
                </span>
                <span>
                  <b>T</b> · {t.hero.geneTicker2}
                </span>
                <span>
                  <b>C</b> · {t.hero.geneTicker3}
                </span>
                <span>
                  <b>G</b> · {t.hero.geneTicker4}
                </span>
              </div>
            </div>
            <div aria-hidden="true" />
          </div>
        </header>

        {/* SERVICES */}
        <section id="services" className={styles.section} data-color="#3EE6C1">
          <div className={styles.wrap}>
            <div className={[styles.eyebrow, styles.reveal].join(" ")} data-reveal="1">
              <span className={styles.seq}>SEQ 01</span> {t.services.eyebrow}
            </div>
            <h2 className={[styles.h2, styles.reveal, styles.d1].join(" ")} data-reveal="1">
              {t.services.title}
            </h2>
            <p className={[styles.lede, styles.reveal, styles.d2].join(" ")} data-reveal="1">
              {t.services.subtitle}
            </p>

            <div className={styles.genes}>
              <article className={[styles.gene, styles.reveal].join(" ")} data-reveal="1" style={{ ["--gc" as never]: "#3EE6C1" } as CSSProperties}>
                <span className={styles.geneCode}>GENE A-01 · AI</span>
                <div className={styles.pairs} aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <h3 className={styles.h3}>{t.services.gene1Title}</h3>
                <p>{t.services.gene1Description}</p>
              </article>

              <article
                className={[styles.gene, styles.reveal, styles.d1].join(" ")}
                data-reveal="1"
                style={{ ["--gc" as never]: "#8B7CFF" } as CSSProperties}
              >
                <span className={styles.geneCode}>GENE T-02 · TALENT</span>
                <div className={styles.pairs} aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <h3 className={styles.h3}>{t.services.gene2Title}</h3>
                <p>{t.services.gene2Description}</p>
              </article>

              <article
                className={[styles.gene, styles.reveal, styles.d2].join(" ")}
                data-reveal="1"
                style={{ ["--gc" as never]: "#FFB454" } as CSSProperties}
              >
                <span className={styles.geneCode}>GENE C-03 · COMMERCE</span>
                <div className={styles.pairs} aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <h3 className={styles.h3}>{t.services.gene3Title}</h3>
                <p>{t.services.gene3Description}</p>
              </article>

              <article
                className={[styles.gene, styles.reveal, styles.d3].join(" ")}
                data-reveal="1"
                style={{ ["--gc" as never]: "#FF6B9D" } as CSSProperties}
              >
                <span className={styles.geneCode}>GENE G-04 · GUARD</span>
                <div className={styles.pairs} aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <h3 className={styles.h3}>{t.services.gene4Title}</h3>
                <p>{t.services.gene4Description}</p>
              </article>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section id="industries" className={styles.section} data-color="#8B7CFF">
          <div className={styles.wrap}>
            <div className={[styles.eyebrow, styles.reveal].join(" ")} data-reveal="1">
              <span className={styles.seq}>SEQ 02</span> {t.industries.eyebrow}
            </div>
            <h2 className={[styles.h2, styles.reveal, styles.d1].join(" ")} data-reveal="1">
              {t.industries.title}
            </h2>
            <p className={[styles.lede, styles.reveal, styles.d2].join(" ")} data-reveal="1">
              {t.industries.subtitle}
            </p>

            <div className={styles.codons}>
              <div className={[styles.codon, styles.reveal].join(" ")} data-reveal="1">
                <span className={styles.tag}>RTL</span>
                <h3 className={styles.h3}>{t.industries.retailTitle}</h3>
                <p>{t.industries.retailDesc}</p>
              </div>
              <div className={[styles.codon, styles.reveal, styles.d1].join(" ")} data-reveal="1">
                <span className={styles.tag}>HLT</span>
                <h3 className={styles.h3}>{t.industries.healthcareTitle}</h3>
                <p>{t.industries.healthcareDesc}</p>
              </div>
              <div className={[styles.codon, styles.reveal, styles.d2].join(" ")} data-reveal="1">
                <span className={styles.tag}>FIN</span>
                <h3 className={styles.h3}>{t.industries.financeTitle}</h3>
                <p>{t.industries.financeDesc}</p>
              </div>
              <div className={[styles.codon, styles.reveal, styles.d3].join(" ")} data-reveal="1">
                <span className={styles.tag}>MFG</span>
                <h3 className={styles.h3}>{t.industries.manufacturingTitle}</h3>
                <p>{t.industries.manufacturingDesc}</p>
              </div>
              <div className={[styles.codon, styles.reveal, styles.d4].join(" ")} data-reveal="1">
                <span className={styles.tag}>TEC</span>
                <h3 className={styles.h3}>{t.industries.technologyTitle}</h3>
                <p>{t.industries.technologyDesc}</p>
              </div>
              <div className={[styles.codon, styles.reveal, styles.d5].join(" ")} data-reveal="1">
                <span className={styles.tag}>PRO</span>
                <h3 className={styles.h3}>{t.industries.professionalTitle}</h3>
                <p>{t.industries.professionalDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section id="solutions" className={styles.section} data-color="#FFB454">
          <div className={styles.wrap}>
            <div className={[styles.eyebrow, styles.reveal].join(" ")} data-reveal="1">
              <span className={styles.seq}>SEQ 03</span> {t.solutions.eyebrow}
            </div>
            <h2 className={[styles.h2, styles.reveal, styles.d1].join(" ")} data-reveal="1">
              {t.solutions.title}
            </h2>
            <p className={[styles.lede, styles.reveal, styles.d2].join(" ")} data-reveal="1">
              {t.solutions.subtitle}
            </p>

            <div className={styles.strandList}>
              {solutions.map((s, idx) => (
                <div
                  key={s.name}
                  className={[
                    styles.product,
                    styles.reveal,
                    idx === 1 ? styles.d1 : "",
                    idx === 2 ? styles.d2 : "",
                    idx === 3 ? styles.d3 : "",
                    idx === 4 ? styles.d4 : "",
                  ].join(" ")}
                  data-reveal="1"
                  style={{ ["--pc" as never]: s.color } as CSSProperties}
                >
                  <span className={styles.node} aria-hidden="true" />
                  <a className={styles.productName} href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.name}
                  </a>
                  <span className={styles.productDesc}>{s.description}</span>
                  <a
                    className={styles.arrow}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.solutions.visit}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section id="why-us" className={styles.section} data-color="#3EE6C1">
          <div className={styles.wrap}>
            <div className={[styles.eyebrow, styles.reveal].join(" ")} data-reveal="1">
              <span className={styles.seq}>SEQ 04</span> {t.whyUs.eyebrow}
            </div>
            <h2 className={[styles.h2, styles.reveal, styles.d1].join(" ")} data-reveal="1">
              {t.whyUs.title}
            </h2>
            <p className={[styles.lede, styles.reveal, styles.d2].join(" ")} data-reveal="1">
              {t.whyUs.subtitle}
            </p>

            <div className={styles.helixStats}>
              <div className={[styles.stat, styles.reveal].join(" ")} data-reveal="1">
                <h3 className={styles.h3}>
                  <span>BASE PAIR 01</span>
                  {t.whyUs.benefit1Title}
                </h3>
                <p>{t.whyUs.benefit1Description}</p>
              </div>
              <div className={[styles.stat, styles.reveal, styles.d1].join(" ")} data-reveal="1">
                <h3 className={styles.h3}>
                  <span>BASE PAIR 02</span>
                  {t.whyUs.benefit2Title}
                </h3>
                <p>{t.whyUs.benefit2Description}</p>
              </div>
              <div className={[styles.stat, styles.reveal, styles.d2].join(" ")} data-reveal="1">
                <h3 className={styles.h3}>
                  <span>BASE PAIR 03</span>
                  {t.whyUs.benefit3Title}
                </h3>
                <p>{t.whyUs.benefit3Description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={[styles.section, styles.sectionTightTop].join(" ")} data-color="#FFB454">
          <div className={styles.wrap}>
            <div className={[styles.ctaBand, styles.reveal].join(" ")} data-reveal="1">
              <h2 className={styles.h2}>{t.cta.title}</h2>
              <p className={styles.lede}>{t.cta.subtitle}</p>
              <a className={[styles.btn, styles.btnAmber].join(" ")} href="#contact">
                {t.cta.button}
              </a>
              <div className={styles.ctaPerks}>
                <span>{t.cta.perk1}</span>
                <span>{t.cta.perk2}</span>
                <span>{t.cta.perk3}</span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className={[styles.section, styles.sectionContact].join(" ")} data-color="#8B7CFF">
          <div className={styles.wrap}>
            <div className={[styles.eyebrow, styles.reveal].join(" ")} data-reveal="1">
              <span className={styles.seq}>SEQ 05</span> {t.contact.eyebrow}
            </div>
            <h2 className={[styles.h2, styles.reveal, styles.d1].join(" ")} data-reveal="1">
              {t.contact.title}
            </h2>
            <p className={[styles.lede, styles.reveal, styles.d2].join(" ")} data-reveal="1">
              {t.contact.subtitle}
            </p>

            <div className={styles.contactGrid}>
              <form className={styles.reveal} data-reveal="1" onSubmit={onContactSubmit}>
                <div className={styles.field}>
                  <label htmlFor="cf-name">{t.contact.nameLabel}</label>
                  <input id="cf-name" name="name" type="text" required autoComplete="name" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="cf-email">{t.contact.emailLabel}</label>
                  <input id="cf-email" name="email" type="email" required autoComplete="email" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="cf-msg">{t.contact.messageLabel}</label>
                  <textarea
                    id="cf-msg"
                    name="message"
                    required
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>
                <button className={[styles.btn, styles.btnAmber].join(" ")} type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : t.contact.sendButton}
                </button>
                {submitStatus && (
                  <p className={submitStatus.type === "success" ? styles.formSuccess : styles.formError}>
                    {submitStatus.message}
                  </p>
                )}
              </form>

              <div className={[styles.contactSide, styles.reveal, styles.d1].join(" ")} data-reveal="1">
                <h3 className={styles.h3}>{t.contact.emailTitle}</h3>
                <p>{t.contact.emailSubtitle}</p>
                <a className={styles.mailLink} href="mailto:info@ai2innovate.io">
                  info@ai2innovate.io
                </a>
                <div className={styles.socials}>
                  <a href="https://www.linkedin.com/company/ai2innovate/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <a href="https://github.com/ai2innovate" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.footGrid}>
            <div className={styles.footBrand}>
              <a className={styles.logo} href="#top">
                <Image
                  src="/AI2innovate-logo.png"
                  alt="AI2Innovate"
                  width={160}
                  height={160}
                  className={styles.logoImg}
                />
              </a>
              <p>{t.footer.tagline}</p>
            </div>
            <div>
              <h4>{t.footer.quickLinks}</h4>
              <ul>
                <li>
                  <a href="#services">{t.footer.linkServices}</a>
                </li>
                <li>
                  <a href="#industries">{t.footer.linkIndustries}</a>
                </li>
                <li>
                  <a href="#solutions">{t.footer.linkSolutions}</a>
                </li>
                <li>
                  <a href="/privacy">{t.footer.linkPrivacy}</a>
                </li>
                <li>
                  <a href="/cookies">{t.footer.linkCookies}</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>{t.footer.services}</h4>
              <ul>
                <li>
                  <span>{t.footer.service1}</span>
                </li>
                <li>
                  <span>{t.footer.service2}</span>
                </li>
                <li>
                  <span>{t.footer.service3}</span>
                </li>
                <li>
                  <span>{t.footer.service4}</span>
                </li>
                <li>
                  <span>{t.footer.service5}</span>
                </li>
              </ul>
            </div>
            <div>
              <h4>{t.footer.getInTouch}</h4>
              <ul>
                <li>
                  <a href="mailto:info@ai2innovate.io">info@ai2innovate.io</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/ai2innovate/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ai2innovate" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.copyright}>
            <span>{formatDnaYear(t.footer.copyright, year)}</span>
            <span className={styles.copyrightSeq}>{formatDnaYear(t.footer.sequenceComplete, year)}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

