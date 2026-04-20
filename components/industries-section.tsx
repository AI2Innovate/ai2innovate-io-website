"use client"

import { Building2, ShoppingBag, HeartPulse, Factory, Rocket, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n/context"
import { homeTranslations } from "@/lib/i18n/translations/home"

export function IndustriesSection() {
  const { language } = useLanguage()
  const t = homeTranslations[language].industries

  const industries = [
    {
      icon: ShoppingBag,
      title: t.retail,
      description: "Digital storefronts and inventory management",
    },
    {
      icon: HeartPulse,
      title: t.healthcare,
      description: "Patient management and compliance solutions",
    },
    {
      icon: Briefcase,
      title: t.finance,
      description: "Secure payment systems and data analytics",
    },
    {
      icon: Factory,
      title: t.manufacturing,
      description: "Supply chain optimization and automation",
    },
    {
      icon: Rocket,
      title: t.technology,
      description: "Scalable tech infrastructure from day one",
    },
    {
      icon: Building2,
      title: t.professional,
      description: "Client management and workflow automation",
    },
  ]

  return (
    <section id="industries" className="py-24 md:py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-chart-2/10 border border-chart-2/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-chart-2 uppercase tracking-wide">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 uppercase tracking-tight text-balance">
            {t.title}
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed text-pretty">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="border-2 hover:border-chart-2/50 hover:shadow-xl transition-all duration-300 bg-card group cursor-pointer"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-chart-2/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-7 h-7 text-chart-2" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">{industry.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
