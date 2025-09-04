import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Building2,
  Heart,
  Factory,
  Banknote,
  Globe,
  Clock,
  Target,
  CheckCircle,
  Quote,
  Star,
} from "lucide-react"

export default function ClientsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-background/80 py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Trusted by Industry Leaders
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              We help scale from proof-of-concept to production—on time and on budget
            </p>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Clients</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Forward-thinking organizations across Europe and beyond
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 mb-16">
            {[
              "ProUnity Solutions",
              "TechCorp Europe",
              "InnovateLab",
              "DataFlow Systems",
              "SmartEdge Technologies",
              "HealthTech Partners",
              "FinanceAI Group",
              "ManufacturingPlus",
              "GovTech Solutions",
              "CloudScale Ventures",
            ].map((client, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="flex h-20 items-center justify-center p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-muted-foreground">{client}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">Benelux & EU focus with global reach</p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <span>50+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>12 Countries Served</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>98% On-Time Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-card/30 py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Industries We Serve</h2>
            <p className="mt-4 text-lg text-muted-foreground">Specialized expertise across key sectors</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                icon: Building2,
                name: "Public Sector",
                description: "Government agencies and public institutions leveraging AI for citizen services",
              },
              {
                icon: Heart,
                name: "Healthcare",
                description: "Medical institutions and health tech companies improving patient outcomes",
              },
              {
                icon: Factory,
                name: "Manufacturing",
                description: "Industrial companies optimizing operations with smart automation and IoT",
              },
              {
                icon: Banknote,
                name: "Finance",
                description: "Financial institutions enhancing security, compliance, and customer experience",
              },
              {
                icon: Globe,
                name: "SaaS",
                description: "Software companies integrating AI capabilities into their platforms",
              },
            ].map((industry, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm text-center">
                <CardHeader>
                  <industry.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{industry.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Success Stories</h2>
            <p className="mt-4 text-lg text-muted-foreground">Real results from real projects</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {[
              {
                industry: "Healthcare",
                title: "AI-Powered Patient Analytics Platform",
                challenge:
                  "A major healthcare provider needed to analyze patient data across multiple systems to improve treatment outcomes and reduce costs.",
                approach:
                  "We implemented a unified data pipeline with real-time analytics, integrating OMOP standards for healthcare data interoperability.",
                outcome:
                  "40% reduction in diagnostic time, 25% improvement in treatment accuracy, and full GDPR compliance.",
                metrics: [
                  { label: "Diagnostic Time Reduction", value: "40%" },
                  { label: "Treatment Accuracy", value: "+25%" },
                  { label: "Data Processing Speed", value: "10x faster" },
                ],
              },
              {
                industry: "Manufacturing",
                title: "Smart Factory IoT Implementation",
                challenge:
                  "A manufacturing company wanted to implement predictive maintenance and optimize production efficiency across multiple facilities.",
                approach:
                  "We deployed edge AI devices with custom firmware for real-time sensor data processing and predictive analytics.",
                outcome: "60% reduction in unplanned downtime, 30% increase in overall equipment effectiveness (OEE).",
                metrics: [
                  { label: "Downtime Reduction", value: "60%" },
                  { label: "OEE Improvement", value: "+30%" },
                  { label: "Maintenance Cost Savings", value: "€2.5M annually" },
                ],
              },
              {
                industry: "Finance",
                title: "Automated Document Processing System",
                challenge:
                  "A financial institution needed to process thousands of loan applications daily while maintaining compliance and accuracy.",
                approach:
                  "We built an intelligent document processing system using RAG technology and custom AI models for financial document analysis.",
                outcome: "85% reduction in processing time, 99.2% accuracy rate, and full regulatory compliance.",
                metrics: [
                  { label: "Processing Time", value: "-85%" },
                  { label: "Accuracy Rate", value: "99.2%" },
                  { label: "Cost per Application", value: "-70%" },
                ],
              },
              {
                industry: "SaaS",
                title: "AI-Enhanced Customer Support Platform",
                challenge:
                  "A SaaS company needed to scale customer support while maintaining high satisfaction rates and reducing response times.",
                approach:
                  "We integrated intelligent chatbots with human handoff capabilities and implemented sentiment analysis for priority routing.",
                outcome: "50% reduction in response time, 35% increase in customer satisfaction, 24/7 availability.",
                metrics: [
                  { label: "Response Time", value: "-50%" },
                  { label: "Customer Satisfaction", value: "+35%" },
                  { label: "Resolution Rate", value: "92%" },
                ],
              },
            ].map((caseStudy, index) => (
              <Card key={index} className="border-border/50 bg-gradient-to-br from-card to-card/80">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {caseStudy.industry}
                    </Badge>
                    <Target className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg">{caseStudy.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">Approach</h4>
                      <p className="text-sm text-muted-foreground">{caseStudy.approach}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">Outcome</h4>
                      <p className="text-sm text-muted-foreground">{caseStudy.outcome}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {caseStudy.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center p-3 bg-muted/20 rounded-lg">
                        <div className="text-lg font-bold text-primary">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <Quote className="h-8 w-8 text-accent mx-auto mb-6" />
                <blockquote className="text-lg text-muted-foreground mb-6 italic">
                  "Ai2Innovate transformed our approach to AI implementation. Their expertise in both open-source
                  technologies and enterprise requirements made them the perfect partner for our digital transformation
                  journey. The results exceeded our expectations."
                </blockquote>
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-foreground">Dr. Sarah Mitchell</div>
                  <div className="text-sm text-muted-foreground">CTO, TechCorp Europe</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to join our success stories?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how we can help accelerate your AI journey
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact?interest=references">
                  Request References
                  <CheckCircle className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
