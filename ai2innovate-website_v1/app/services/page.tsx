"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import {
  ArrowRight,
  Zap,
  Cpu,
  Database,
  Bot,
  Search,
  Shield,
  Building2,
  Heart,
  Factory,
  Banknote,
  Globe,
  CheckCircle,
  Settings,
  TestTube,
  Code,
} from "lucide-react"

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-background/80 py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t("servicesTitle")}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {t("servicesHeroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("servicePillarsTitle")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("servicePillarsSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: t("aiStrategyIntegrationTitle"),
                description: t("aiStrategyIntegrationDescription"),
                features: [
                  t("aiReadinessAssessment"),
                  t("technologyRoadmapping"),
                  t("integrationPlanning"),
                  t("changeManagement"),
                ],
              },
              {
                icon: Cpu,
                title: t("embeddedEdgeAITitle"),
                description: t("embeddedEdgeAIDescription"),
                features: [
                  t("firmwareDevelopment"),
                  t("sensorFusionAlgorithms"),
                  t("tinyMLOptimization"),
                  t("realTimeProcessing"),
                ],
              },
              {
                icon: Database,
                title: t("dataEngineeringMLOpsTitle"),
                description: t("dataEngineeringMLOpsDescription"),
                features: [
                  t("dataPipelineArchitecture"),
                  t("mLOpsImplementation"),
                  t("modelDeployment"),
                  t("monitoringObservability"),
                ],
              },
              {
                icon: Bot,
                title: t("customAIvoiceAgentsTitle"),
                description: t("customAIvoiceAgentsDescription"),
                features: [
                  t("conversationalAI"),
                  t("voiceInterfaceDesign"),
                  t("multiModalInteractions"),
                  t("customIntegrations"),
                ],
              },
              {
                icon: Search,
                title: t("ragRetrievalSystemsTitle"),
                description: t("ragRetrievalSystemsDescription"),
                features: [t("vectorDatabases"), t("semanticSearch"), t("knowledgeGraphs"), t("documentIntelligence")],
              },
              {
                icon: Shield,
                title: t("openSourceEnterpriseSupportTitle"),
                description: t("openSourceEnterpriseSupportDescription"),
                features: [t("247Support"), t("customDevelopment"), t("securityHardening"), t("trainingWorkshops")],
              },
              {
                icon: Settings,
                title: t("devOpsTitle"),
                description: t("devOpsDescription"),
                features: [
                  t("ciCdPipelineSetup"),
                  t("infrastructureAsCode"),
                  t("containerOrchestration"),
                  t("monitoringAlerting"),
                ],
              },
              {
                icon: TestTube,
                title: t("testAutomationQATitle"),
                description: t("testAutomationQADescription"),
                features: [
                  t("automatedTestingFrameworks"),
                  t("performanceTesting"),
                  t("securityTesting"),
                  t("qualityMetricsReporting"),
                ],
              },
              {
                icon: Code,
                title: t("fullStackDevelopmentTitle"),
                description: t("fullStackDevelopmentDescription"),
                features: [
                  t("frontendDevelopment"),
                  t("backendAPIDesign"),
                  t("databaseArchitecture"),
                  t("mobileApplications"),
                ],
              },
            ].map((service, index) => (
              <Card key={index} className="border-border/50 bg-gradient-to-br from-card to-card/80 h-full">
                <CardHeader>
                  <service.icon className="h-8 w-8 text-primary mb-3" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-card/30 py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("industryUseCasesTitle")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("industryUseCasesSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {[
              {
                icon: Heart,
                title: t("healthcareAnalyticsTitle"),
                description: t("healthcareAnalyticsDescription"),
                benefits: [
                  t("improvedPatientOutcomes"),
                  t("predictiveHealthAnalytics"),
                  t("regulatoryCompliance"),
                  t("crossDomainInsights"),
                ],
              },
              {
                icon: Cpu,
                title: t("fieldDevicesTitle"),
                description: t("fieldDevicesDescription"),
                benefits: [
                  t("realTimeProcessing"),
                  t("reducedLatency"),
                  t("offlineCapabilities"),
                  t("costOptimization"),
                ],
              },
              {
                icon: Bot,
                title: t("contactCenterAutomationTitle"),
                description: t("contactCenterAutomationDescription"),
                benefits: [t("247Availability"), t("consistentQuality"), t("costReduction"), t("agentAugmentation")],
              },
              {
                icon: Search,
                title: t("documentIntelligenceTitle"),
                description: t("documentIntelligenceDescription"),
                benefits: [
                  t("automatedProcessing"),
                  t("semanticSearch"),
                  t("complianceTracking"),
                  t("knowledgeDiscovery"),
                ],
              },
            ].map((useCase, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <useCase.icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Timeline */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("engagementProcessTitle")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("engagementProcessSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                phase: "POC",
                duration: "2–4 weeks",
                title: t("proofOfConceptTitle"),
                description: t("proofOfConceptDescription"),
                deliverables: [
                  t("technicalFeasibilityStudy"),
                  t("workingPrototype"),
                  t("performanceBenchmarks"),
                  t("riskAssessment"),
                ],
              },
              {
                phase: "Pilot",
                duration: "4–8 weeks",
                title: t("pilotImplementationTitle"),
                description: t("pilotImplementationDescription"),
                deliverables: [
                  t("productionDeployment"),
                  t("userTraining"),
                  t("performanceMonitoring"),
                  t("successMetrics"),
                ],
              },
              {
                phase: "Scale",
                duration: "Ongoing",
                title: t("scaleHandoverTitle"),
                description: t("scaleHandoverDescription"),
                deliverables: [t("fullDeployment"), t("documentation"), t("teamTraining"), t("supportTransition")],
              },
            ].map((phase, index) => (
              <Card key={index} className="border-border/50 bg-gradient-to-br from-card to-card/80 relative">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {phase.phase}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{phase.duration}</span>
                  </div>
                  <CardTitle className="text-xl">{phase.title}</CardTitle>
                  <CardDescription className="text-base">{phase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-sm text-foreground mb-3">{t("keyDeliverables")}</h4>
                  <ul className="space-y-2">
                    {phase.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                {index < 2 && (
                  <div className="absolute -right-4 top-1/2 hidden lg:block">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                {t("bookDiscoveryCall")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("industriesWeServeTitle")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("industriesWeServeSubtitle")}</p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: Building2, name: t("publicSector") },
              { icon: Heart, name: t("healthcare") },
              { icon: Factory, name: t("manufacturing") },
              { icon: Banknote, name: t("finance") },
              { icon: Globe, name: t("saas") },
            ].map((industry, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm text-center p-6">
                <industry.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground">{industry.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
