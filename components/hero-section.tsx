"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"
import { homeTranslations } from "@/lib/i18n/translations/home"

export function HeroSection() {
  const { language } = useLanguage()
  const t = homeTranslations[language].hero

  return (
    <section className="relative bg-gradient-to-b from-background via-background to-secondary/20 pt-32 py-24 md:py-40 overflow-hidden">
      {/* Gateway Arc Background with enhanced styling */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <svg width="1200" height="600" viewBox="0 0 1200 600" fill="none">
          <path d="M 150 600 Q 600 150 1050 600" stroke="currentColor" strokeWidth="100" className="text-primary" />
        </svg>
      </div>

      {/* Animated gradient orbs for depth */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced badge */}
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-8 uppercase tracking-tight text-balance leading-none animate-fade-in-up delay-300">
            {t.title}{" "}
            <span className="bg-gradient-to-r from-accent to-chart-2 bg-clip-text text-transparent">
              {t.titleHighlight}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed text-pretty animate-fade-in-up delay-500">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-700">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl text-lg font-semibold px-8 py-6 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all hover:scale-105"
              asChild
            >
              <a href="#contact">
                {t.ctaPrimary} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
