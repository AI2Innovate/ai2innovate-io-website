"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Users, Heart, Mail, Building2, Globe, Code, Lightbulb, Target } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-background/80 py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t("aboutTitle")}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{t("aboutHeroSubtitle")}</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <Target className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                {t("ourMissionTitle")}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">{t("missionStatement")}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {[
                {
                  icon: Lightbulb,
                  title: t("innovationFirstTitle"),
                  description: t("innovationFirstDescription"),
                },
                {
                  icon: Code,
                  title: t("openByDesignTitle"),
                  description: t("openByDesignDescription"),
                },
                {
                  icon: Users,
                  title: t("realImpactTitle"),
                  description: t("realImpactDescription"),
                },
              ].map((value, index) => (
                <Card key={index} className="border-border/50 bg-gradient-to-br from-card to-card/80 text-center">
                  <CardHeader>
                    <value.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Footprint */}
      {/* <section className="bg-card/30 py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Globe className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("globalFootprintTitle")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("globalFootprintSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                country: t("belgium"),
                role: t("headquarters"),
                entity: t("ai2innovateSRL"),
                description: t("belgiumDescription"),
                highlights: [
                  t("businessStrategy"),
                  t("clientRelations"),
                  t("euMarketFocus"),
                  t("strategicPartnerships"),
                ],
              },
              {
                country: t("slovakia"),
                role: t("operations"),
                entity: t("mozaycSRO"),
                description: t("slovakiaDescription"),
                highlights: [t("projectDelivery"), t("technicalOperations"), t("qualityAssurance"), t("clientSupport")],
              },
              {
                country: t("portugal"),
                role: t("researchAndDevelopment"),
                entity: t("portugalCriativoLDA"),
                description: t("portugalDescription"),
                highlights: [t("aiResearch"), t("openSource"), t("innovationLabs"), t("technicalLeadership")],
              },
            ].map((location, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {location.role}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{location.country}</CardTitle>
                  <CardDescription className="text-sm font-medium text-muted-foreground">
                    {location.entity}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{location.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Key Focus Areas:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {location.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="text-xs text-muted-foreground">
                          • {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Culture Section */}
      <section className="bg-card/30 py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-2xl">We</span>
              <Heart className="h-6 w-6 text-red-500 fill-current" />
              <span className="text-2xl">open-source contributors and builders</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              {t("ourCultureTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">{t("ourCultureDescription")}</p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
              {[
                { label: t("openSourceProjects"), value: "15+" },
                { label: t("countriesServed"), value: "15+" },
                { label: t("teamMembers"), value: "25+" },
                { label: t("yearsOfExperience"), value: "20+" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <Card className="border-border/50 bg-gradient-to-br from-card to-card/80 p-8">
              <div className="text-center">
                <Building2 className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{t("joinOurTeamTitle")}</h3>
                <p className="text-muted-foreground mb-6">{t("joinOurTeamDescription")}</p>
                <Button asChild>
                  <Link href="mailto:careers@ai2innovate.io">
                    <Mail className="mr-2 h-4 w-4" />
                    {t("exploreCareers")}
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t("readyToInnovate")}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("letsDiscuss")}</p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">
                  {t("sayHello")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
