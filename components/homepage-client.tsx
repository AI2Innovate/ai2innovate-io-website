"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"

const ArrowRight = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const Github = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12S3 4.477 3 10a9.9 9.9 0 001.021-.131z" />
  </svg>
)

const ExternalLink = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const Bell = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 17h5l-5 5v-5zM4.021 9.869A8.5 8.5 0 0112.473 1.5c4.694 0 8.5 3.806 8.5 8.5 0 1.017-.146 2-.414 2.927l1.414 1.414A10.48 10.48 0 0023 10c0-5.523-4.477-10-10-10S3 4.477 3 10a9.9 9.9 0 001.021-.131z"
    />
  </svg>
)

const Zap = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const Database = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
)

const Bot = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="11" width="18" height="10" rx="2" ry="2"></rect>
    <circle cx="12" cy="5" r="2"></circle>
    <path d="M12 7v4"></path>
    <line x1="8" y1="16" x2="8" y2="16"></line>
    <line x1="16" y1="16" x2="16" y2="16"></line>
    <line x1="9" y1="1" x2="9" y2="4"></line>
    <line x1="15" y1="1" x2="15" y2="4"></line>
    <line x1="9" y1="20" x2="9" y2="23"></line>
    <line x1="15" y1="20" x2="15" y2="23"></line>
    <line x1="20" y1="9" x2="23" y2="9"></line>
    <line x1="20" y1="14" x2="23" y2="14"></line>
    <line x1="1" y1="9" x2="4" y2="9"></line>
    <line x1="1" y1="14" x2="4" y2="14"></line>
  </svg>
)

const Search = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
)

const Cpu = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
    <rect x="9" y="9" width="6" height="6"></rect>
    <line x1="9" y1="1" x2="9" y2="4"></line>
    <line x1="15" y1="1" x2="15" y2="4"></line>
    <line x1="9" y1="20" x2="9" y2="23"></line>
    <line x1="15" y1="20" x2="15" y2="23"></line>
    <line x1="20" y1="9" x2="23" y2="9"></line>
    <line x1="20" y1="14" x2="23" y2="14"></line>
    <line x1="1" y1="9" x2="4" y2="9"></line>
    <line x1="1" y1="14" x2="4" y2="14"></line>
  </svg>
)

const Shield = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

export function HomePageClient() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Zap,
      title: t("aiStrategy"),
      description: t("aiStrategyDesc"),
    },
    {
      icon: Cpu,
      title: t("embeddedAI"),
      description: t("embeddedAIDesc"),
    },
    {
      icon: Database,
      title: t("dataEngineering"),
      description: t("dataEngineeringDesc"),
    },
    {
      icon: Bot,
      title: t("customAI"),
      description: t("customAIDesc"),
    },
    {
      icon: Search,
      title: t("ragSystems"),
      description: t("ragSystemsDesc"),
    },
    {
      icon: Shield,
      title: t("openSourceSupport"),
      description: t("openSourceSupportDesc"),
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-background/80">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t("heroTitle")}{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t("heroTitleHighlight")}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{t("heroSubtitle")}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/contact">
                  {t("workWithUs")}
                  <ArrowRight />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/products">{t("exploreProducts")}</Link>
              </Button>
            </div>
            {/* <p className="mt-8 text-sm text-muted-foreground">{t("heroLocation")}</p> */}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t("ourProducts")}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("productsSubtitle")}</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            {/* MultiMindSDK */}
            <Card className="relative overflow-hidden border-border/50 bg-gradient-to-br from-card to-card/80">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    {t("openSource")}
                  </Badge>
                  <Github />
                </div>
                <CardTitle className="text-xl">MultiMindSDK</CardTitle>
                <CardDescription>
                  AI orchestration SDK for multi-model agents, tools, memory, and production pipelines.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Async API
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Multi-model
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Tools & Memory
                    </Badge>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="https://github.com/multimindlab/multimind-sdk" target="_blank">
                      {t("viewGitHub")}
                      <ExternalLink />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Data Pipelines */}
            <Card className="relative overflow-hidden border-border/50 bg-gradient-to-br from-card to-card/80">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {t("enterprise")}
                  </Badge>
                  <Database />
                </div>
                <CardTitle className="text-xl">Data Pipelines</CardTitle>
                <CardDescription>
                  Enterprise-ready pipelines for AI, MLOps, and analytics—standards-based and scalable.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Data Processing
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Privacy & Governance
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      API-first
                    </Badge>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/products#data-pipelines">
                      {t("learnMore")}
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Agents Platform */}
            <Card className="relative overflow-hidden border-border/50 bg-gradient-to-br from-card to-card/80">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-muted text-muted-foreground">
                    {t("comingSoon")}
                  </Badge>
                  <Bot />
                </div>
                <CardTitle className="text-xl">MultiMindLab Agents Platform</CardTitle>
                <CardDescription>No-code agent builder for sales, healthcare, and support automations.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Playbooks
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Multi-channel
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Analytics
                    </Badge>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="https://www.multimind.dev/" target="_blank">
                      {t("View Website")}
                      <ExternalLink />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-card/30 py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t("ourServices")}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("servicesSubtitle")}</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  {service.icon()}
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/services">
                {t("viewAllServices")}
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      {/* <section className="py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{t("trustedBy")}</h2>
            <p className="mt-4 text-muted-foreground">{t("clientsSubtitle")}</p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex h-16 items-center justify-center rounded-lg bg-muted/20 px-4">
                <div className="text-sm font-medium text-muted-foreground">Client Logo {i}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Open Source Callout */}
      <section className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t("openInnovation")}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("openSourceSubtitle")}</p>
            <div className="mt-8">
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/multimindlab/multimind-sdk" target="_blank">
                  {t("browseGitHub")}
                  <Github />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
