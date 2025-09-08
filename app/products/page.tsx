"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import {
  ArrowRight,
  Github,
  ExternalLink,
  Bell,
  CheckCircle,
  Database,
  Bot,
  Shield,
  Globe,
  BarChart3,
  Server,
  Zap,
  GitBranch,
  Layers,
  Archive,
} from "lucide-react"

export default function ProductsPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-background/80 py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t("productsTitle")}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {t("productsHeroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* MultiMindSDK Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="secondary" className="bg-accent/10 text-accent">
                  {t("openSource")}
                </Badge>
                <Github className="h-5 w-5 text-muted-foreground" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                {t("multiMindSDKTitle")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">{t("multiMindSDKSubtitle")}</p>

              <div className="space-y-4 mb-8">
                {[
                  "Async API for high-performance operations",
                  "Multi-model support across providers",
                  "Built-in tools & persistent memory",
                  "Agent graphs and workflow orchestration",
                  "Comprehensive observability and monitoring",
                  "Docker/Kubernetes ready for production",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="https://github.com/multimindlab/multimind-sdk" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="https://www.multimind.dev/" target="_blank">
                    Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {/* <Button variant="outline" size="lg" asChild>
                  <Link href="/contact?interest=multimind-support">
                    Get Support
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button> */}
              </div>
            </div>

            <div className="relative">
              <Card className="border-border/50 bg-gradient-to-br from-card to-card/80">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Start Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="text-sm text-muted-foreground overflow-x-auto">
                    {`import { MultiMind } from '@ai2innovate/multimind-sdk'

const mind = new MultiMind({
  providers: ['openai', 'anthropic'],
  memory: { type: 'persistent' },
  tools: ['web-search', 'calculator']
})

const response = await mind.chat({
  message: "Analyze market trends",
  agent: "research-analyst"
})

console.log(response.content)`}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Data Pipelines Section */}
      <section className="bg-card/30 py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {[
                  { icon: Shield, title: "Standards-Based", desc: "STDM/OMOP compliance" },
                  { icon: Database, title: "Privacy & Governance", desc: "Built-in data protection" },
                  { icon: BarChart3, title: "Analytics & Dashboards", desc: "Real-time insights" },
                  { icon: Globe, title: "API-First", desc: "RESTful and GraphQL APIs" },
                ].map((feature, index) => (
                  <Card key={index} className="border-border/50 bg-card/50">
                    <CardHeader className="pb-3">
                      <feature.icon className="h-6 w-6 text-primary mb-2" />
                      <CardTitle className="text-base">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">{feature.desc}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {t("enterprise")}
                </Badge>
                <Database className="h-5 w-5 text-muted-foreground" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                {t("dataPipelinesTitle")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">{t("dataPipelinesSubtitle")}</p>

              <div className="space-y-4 mb-8">
                {[
                  "Standards-based architecture (STDM/OMOP)",
                  "Privacy-first design with governance controls",
                  "Real-time analytics and interactive dashboards",
                  "API-first approach with comprehensive documentation",
                  "Scalable infrastructure for enterprise workloads",
                  "Integration with popular ML and data tools",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" asChild>
                <Link href="/contact?interest=data-pipelines">
                  {t("requestDemo")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Big Data & Governance Suite Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {t("enterprise")}
                </Badge>
                <Server className="h-5 w-5 text-muted-foreground" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                {t("bigDataSuiteTitle")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">{t("bigDataSuiteSubtitle")}</p>
              <p className="text-base text-muted-foreground mb-8">{t("bigDataSuiteDescription")}</p>

              <Button size="lg" asChild>
                <Link href="/contact?interest=big-data-suite">
                  {t("requestDemo")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { icon: Archive, title: "Apache Atlas", desc: "Metadata & lineage", color: "text-blue-500" },
                  { icon: Zap, title: "Apache Kafka", desc: "Real-time streaming", color: "text-orange-500" },
                  { icon: GitBranch, title: "Apache NiFi", desc: "Data flows", color: "text-green-500" },
                  { icon: BarChart3, title: "Apache Spark", desc: "Distributed compute & ML", color: "text-red-500" },
                  {
                    icon: Layers,
                    title: "Delta Lake / Iceberg",
                    desc: "Data lakehouse & governance",
                    color: "text-purple-500",
                  },
                ].map((tech, index) => (
                  <Card key={index} className="border-border/50 bg-card/50 hover:bg-card/70 transition-colors">
                    <CardHeader className="pb-3">
                      <tech.icon className={`h-6 w-6 ${tech.color} mb-2 group-hover:scale-110 transition-transform`} />
                      <CardTitle className="text-base">{tech.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">{tech.desc}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Platform Section */}
      <section className="bg-card/30 py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-muted text-muted-foreground">
                {t("comingSoon")}
              </Badge>
              <Bot className="h-5 w-5 text-muted-foreground" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              {t("agentsPlatformTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-12">{t("agentsPlatformSubtitle")}</p>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mb-12">
              {[
                { icon: Bot, title: "Playbooks", description: "Pre-built workflows for common business processes" },
                { icon: Globe, title: "Multi-Channel", description: "Deploy across web, phone, chat, and mobile" },
                { icon: BarChart3, title: "Analytics", description: "Comprehensive insights and performance metrics" },
              ].map((feature, index) => (
                <Card key={index} className="border-border/50 bg-card/50">
                  <CardHeader>
                    <feature.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">{t("agentsPlatformEarlyAccess")}</p>
              <Button size="lg" asChild>
                <Link href="/contact?interest=agents-platform">
                  {t("getNotified")}
                  <Bell className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Healium Automation Framework Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-muted text-muted-foreground">
                {t("comingSoon")}
              </Badge>
              <CheckCircle className="h-5 w-5 text-muted-foreground" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              {t("healiumFrameworkTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">{t("healiumFrameworkSubtitle")}</p>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
              {[
                {
                  icon: Bot,
                  title: "AI-Powered Test Generation",
                  description: "Automatically generate comprehensive test suites using advanced AI algorithms",
                },
                {
                  icon: Globe,
                  title: "Multi-Platform Testing Support",
                  description: "Seamless testing across web, mobile, desktop, and API platforms",
                },
                {
                  icon: CheckCircle,
                  title: "Web Testing Integration",
                  description: "Selenium, Playwright, Cypress, TestCafe integrations out of the box",
                },
                {
                  icon: Server,
                  title: "Cloud Device Farm Integration",
                  description: "Test on real devices across multiple cloud providers and configurations",
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Built-in security scanning and compliance validation for enterprise needs",
                },
                {
                  icon: BarChart3,
                  title: "Advanced Analytics",
                  description: "Comprehensive test reporting, metrics, and performance insights",
                },
              ].map((feature, index) => (
                <Card key={index} className="border-border/50 bg-card/50">
                  <CardHeader>
                    <feature.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">{t("healiumFrameworkEarlyAccess")}</p>
              <Button size="lg" asChild>
                <Link href="/contact?interest=healium-framework">
                  {t("getEarlyAccess")}
                  <Bell className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Suite Section */}
      <section className="bg-card/30 py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {t("enterprise")}
              </Badge>
              <Bot className="h-5 w-5 text-muted-foreground" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Enterprise AI Solutions Suite
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive AI-powered solutions designed for enterprise needs across industries
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              {
                icon: Shield,
                title: "Data Quality & Cleaning",
                subtitle: "GenAI Solution",
                description: "AI-powered data validation, cleaning, and quality assurance for enterprise datasets",
                color: "text-blue-500",
              },
              {
                icon: CheckCircle,
                title: "AI Governance & EU AI Act Compliance",
                subtitle: "Regulatory Compliance",
                description:
                  "Comprehensive governance framework ensuring EU AI Act compliance and ethical AI deployment",
                color: "text-green-500",
              },
              {
                icon: Bot,
                title: "Customer Support Automation",
                subtitle: "Voice + Chat Agents",
                description: "Intelligent multi-channel customer support with voice and chat AI agents",
                color: "text-purple-500",
              },
              {
                icon: BarChart3,
                title: "Regulatory Reporting",
                subtitle: "Finance/Healthcare/ESG",
                description: "Automated compliance reporting for financial services, healthcare, and ESG requirements",
                color: "text-orange-500",
              },
              {
                icon: Shield,
                title: "Fraud & Anomaly Detection",
                subtitle: "Real-time Monitoring",
                description: "Advanced ML models for real-time fraud detection and anomaly identification",
                color: "text-red-500",
              },
              {
                icon: Database,
                title: "Enterprise Knowledge Assistant",
                subtitle: "RAG Solution",
                description: "Intelligent knowledge retrieval and assistance using Retrieval-Augmented Generation",
                color: "text-cyan-500",
              },
              {
                icon: Globe,
                title: "Healthcare & One-Health AI Analytics",
                subtitle: "Medical Intelligence",
                description: "Comprehensive health analytics covering human, animal, and environmental health data",
                color: "text-teal-500",
              },
              {
                icon: Zap,
                title: "Workforce Productivity AI",
                subtitle: "Automation & Insights",
                description: "AI-driven workforce optimization, task automation, and productivity enhancement",
                color: "text-yellow-500",
              },
              {
                icon: Layers,
                title: "Sustainability & ESG Analytics",
                subtitle: "Environmental Intelligence",
                description:
                  "Advanced analytics for sustainability metrics, ESG reporting, and environmental impact assessment",
                color: "text-emerald-500",
              },
              {
                icon: Server,
                title: "Industrial IoT + Edge AI",
                subtitle: "Smart Manufacturing",
                description: "Edge AI solutions for industrial IoT, predictive maintenance, and smart manufacturing",
                color: "text-indigo-500",
              },
            ].map((solution, index) => (
              <Card key={index} className="border-border/50 bg-card/50 hover:bg-card/70 transition-colors group">
                <CardHeader className="pb-3">
                  <solution.icon
                    className={`h-6 w-6 ${solution.color} mb-2 group-hover:scale-110 transition-transform`}
                  />
                  <CardTitle className="text-base leading-tight">{solution.title}</CardTitle>
                  <Badge variant="outline" className="text-xs w-fit">
                    {solution.subtitle}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{solution.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Custom AI solutions tailored to your industry and business requirements
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/contact?interest=ai-solutions-suite">
                  Discuss Your Needs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">
                  View Our Services
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
