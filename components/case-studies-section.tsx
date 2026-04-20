"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/context"
import { homeTranslations } from "@/lib/i18n/translations/home"
import { getCaseStudies } from "@/lib/i18n/translations/case-studies"

export function CaseStudiesSection() {
  const { language } = useLanguage()
  const t = homeTranslations[language].caseStudies
  const caseStudies = getCaseStudies(language).slice(0, 3)

  return (
    <section id="case-studies" className="py-24 md:py-32 bg-secondary/20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-accent uppercase tracking-wide">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 uppercase tracking-tight text-balance">
            {t.title}
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed text-pretty">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="border-2 hover:border-accent/50 hover:shadow-2xl transition-all duration-500 bg-card group overflow-hidden"
            >
              <div className="relative h-48 bg-gradient-to-br from-accent/10 to-chart-2/10 overflow-hidden">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
                  {study.metric}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-xs text-chart-2 font-semibold uppercase tracking-wide mb-2">{study.industry}</div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">{study.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{study.description}</p>
                <div className="flex items-center gap-2 text-accent font-semibold text-sm mb-4">
                  <TrendingUp className="w-4 h-4" />
                  <span>{study.outcome}</span>
                </div>
                <Link href={`/case-studies/${study.slug}`}>
                  <Button variant="ghost" className="w-full group/btn hover:bg-accent/10">
                    {t.viewCaseStudy}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
