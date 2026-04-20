"use client"

import { ShoppingCart, Brain, Code2, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n/context"
import { homeTranslations } from "@/lib/i18n/translations/home"

export function ServicesSection() {
  const { language } = useLanguage()
  const t = homeTranslations[language].services

  const services = [
    {
      icon: Brain,
      title: t.service1Title,
      description: t.service1Description,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Code2,
      title: t.service2Title,
      description: t.service2Description,
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
    },
    {
      icon: ShoppingCart,
      title: t.service3Title,
      description: t.service3Description,
      color: "text-sky-400",
      bgColor: "bg-sky-400/10",
    },
    {
      icon: Shield,
      title: t.service4Title,
      description: t.service4Description,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ]

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/20 scroll-mt-20">
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

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-accent/50 hover:shadow-2xl transition-all duration-500 bg-card group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardHeader className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-8 h-8 ${service.color}`} strokeWidth={2.5} />
                </div>
                <CardTitle className="text-2xl font-bold text-card-foreground mb-3">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
