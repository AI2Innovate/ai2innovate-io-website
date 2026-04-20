"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"
import { homeTranslations } from "@/lib/i18n/translations/home"

export function CTASection() {
  const { language } = useLanguage()
  const t = homeTranslations[language].cta

  return (
    <section className="py-24 md:py-32 bg-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 uppercase tracking-tight text-balance leading-tight">
            {t.title}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed text-pretty">
            {t.subtitle}
          </p>
          <Button
            size="lg"
            className="bg-white hover:bg-white/90 text-accent rounded-xl text-lg font-semibold px-12 py-7 shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
            asChild
          >
            <a href="#contact">
              {t.button} <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="font-medium">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="font-medium">No Long-Term Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="font-medium">Results-Driven</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
