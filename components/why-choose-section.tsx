"use client"

import { Zap, TrendingUp, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n/context"
import { homeTranslations } from "@/lib/i18n/translations/home"

export function WhyChooseSection() {
  const { language } = useLanguage()
  const t = homeTranslations[language].whyUs

  const benefits = [
    {
      icon: Users,
      title: t.benefit1Title,
      description: t.benefit1Description,
    },
    {
      icon: Zap,
      title: t.benefit2Title,
      description: t.benefit2Description,
    },
    {
      icon: TrendingUp,
      title: t.benefit3Title,
      description: t.benefit3Description,
    },
  ]

  return (
    <section id="why-us" className="py-24 md:py-32 bg-background scroll-mt-20">
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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-2 hover:border-accent/50 hover:shadow-xl transition-all duration-300 bg-card group text-center"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <benefit.icon className="w-8 h-8 text-accent" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
