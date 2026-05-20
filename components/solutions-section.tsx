"use client"

import { Brain, Database, ShieldCheck, ShoppingCart, Blocks } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n/context"
import { homeTranslations } from "@/lib/i18n/translations/home"

export function SolutionsSection() {
  const { language } = useLanguage()
  const t = homeTranslations[language].solutions

  const solutions = [
    {
      name: "cyberxdefend.com",
      href: "https://cyberxdefend.com/",
      description: t.cyberxdefendDescription,
      icon: ShieldCheck,
    },
    {
      name: "shopmuse.io",
      href: "https://shopmuse.io",
      description: t.shopmuseDescription,
      icon: ShoppingCart,
    },
    {
      name: "chainfoundry.dev",
      href: "https://chainfoundry.dev",
      description: t.chainfoundryDescription,
      icon: Blocks,
    },
    {
      name: "multimind.dev",
      href: "https://multimind.dev",
      description: t.multimindDescription,
      icon: Brain,
    },
    {
      name: "dbabridge.com",
      href: "https://dbabridge.com/",
      description: t.dbabridgeDescription,
      icon: Database,
    },
  ]

  return (
    <section id="solutions" className="py-24 md:py-32 bg-secondary/20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 uppercase tracking-tight text-balance">
            {t.title}
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed text-pretty">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {solutions.map((solution) => (
            <Card
              key={solution.name}
              className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-card group"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-7 h-7 text-primary" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  <a
                    href={solution.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary transition-colors underline-offset-4 hover:underline"
                  >
                    {solution.name}
                  </a>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
