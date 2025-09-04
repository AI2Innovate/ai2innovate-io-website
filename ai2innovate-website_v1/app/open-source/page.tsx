import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Github,
  ExternalLink,
  Star,
  GitFork,
  MessageSquare,
  Users,
  Shield,
  BookOpen,
  Code,
  Heart,
  CheckCircle,
  Calendar,
  Headphones,
  Target,
} from "lucide-react"

export default function OpenSourcePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-background/80 py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Open by Default
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Building the future of AI through transparent, collaborative, and community-driven development
            </p>
          </div>
        </div>
      </section>

      {/* Why Open Source */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <Heart className="h-12 w-12 text-red-500 fill-current mx-auto mb-6" />
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">Why Open Source?</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transparency, quality, velocity. We build in the open and help enterprises adopt OSS safely.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {[
                {
                  icon: Shield,
                  title: "Transparency",
                  description:
                    "Every line of code is open for inspection. No black boxes, no hidden agendas. You know exactly what you're getting.",
                },
                {
                  icon: Target,
                  title: "Quality",
                  description:
                    "Community scrutiny leads to better code. Thousands of eyes make bugs shallow and security vulnerabilities rare.",
                },
                {
                  icon: ArrowRight,
                  title: "Velocity",
                  description:
                    "Don't reinvent the wheel. Build on proven foundations and contribute back to accelerate everyone's progress.",
                },
              ].map((benefit, index) => (
                <Card key={index} className="border-border/50 bg-gradient-to-br from-card to-card/80 text-center">
                  <CardHeader>
                    <benefit.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project: MultiMindSDK */}
      <section className="bg-card/30 py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Code className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Featured Project</h2>
            <p className="mt-4 text-lg text-muted-foreground">Our flagship open-source contribution</p>
          </div>

          <div className="mx-auto max-w-4xl">
            <Card className="border-border/50 bg-gradient-to-br from-card to-card/80">
              <CardHeader className="text-center pb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    Open Source
                  </Badge>
                  <Github className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-2xl mb-2">MultiMindSDK</CardTitle>
                <CardDescription className="text-base">
                  Unified AI orchestration for agents, tools, memory, workflows, and guardrails
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div className="text-center">
                    <Star className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">1.2k</div>
                    <div className="text-sm text-muted-foreground">Stars</div>
                  </div>
                  <div className="text-center">
                    <GitFork className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">180</div>
                    <div className="text-sm text-muted-foreground">Forks</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-6 w-6 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">45</div>
                    <div className="text-sm text-muted-foreground">Contributors</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Key Features:</h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {[
                      "Async API for high performance",
                      "Multi-model provider support",
                      "Built-in tools & memory",
                      "Agent workflow orchestration",
                      "Comprehensive observability",
                      "Production-ready deployment",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button size="lg" asChild>
                    <Link href="https://github.com/ai2innovate/multimind-sdk" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub Repository
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="https://github.com/ai2innovate/multimind-sdk/issues" target="_blank">
                      Issues
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="https://github.com/ai2innovate/multimind-sdk/discussions" target="_blank">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Discussions
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Users className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Join Our Community</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We welcome contributions from developers of all skill levels
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Contribution Guidelines",
                description:
                  "Learn how to contribute effectively with our comprehensive guidelines covering code style, testing, and review processes.",
                link: "View Guidelines",
                href: "https://github.com/ai2innovate/multimind-sdk/blob/main/CONTRIBUTING.md",
              },
              {
                icon: Shield,
                title: "Code of Conduct",
                description:
                  "Our community standards ensure a welcoming, inclusive environment for all contributors regardless of background.",
                link: "Read Code of Conduct",
                href: "https://github.com/ai2innovate/multimind-sdk/blob/main/CODE_OF_CONDUCT.md",
              },
              {
                icon: Users,
                title: "Contributor Guide",
                description:
                  "Step-by-step instructions for first-time contributors, from setting up your development environment to submitting your first PR.",
                link: "Get Started",
                href: "https://docs.multimind.ai/contributing",
              },
            ].map((resource, index) => (
              <Card key={index} className="border-border/50 bg-gradient-to-br from-card to-card/80">
                <CardHeader>
                  <resource.icon className="h-8 w-8 text-primary mb-3" />
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription className="text-base">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href={resource.href} target="_blank">
                      {resource.link}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Support */}
      <section className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Headphones className="h-12 w-12 text-accent mx-auto mb-6" />
                <CardTitle className="text-2xl mb-4">Enterprise Open Source Support</CardTitle>
                <CardDescription className="text-base">
                  Professional support and services for production deployments of our open-source projects
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {[
                    {
                      icon: Shield,
                      title: "Enterprise SLAs",
                      description: "Guaranteed response times and uptime commitments for mission-critical deployments",
                    },
                    {
                      icon: Calendar,
                      title: "Training Days",
                      description: "On-site or remote training sessions for your development and operations teams",
                    },
                    {
                      icon: Target,
                      title: "Roadmap Sessions",
                      description: "Collaborative planning sessions to align our development with your business needs",
                    },
                  ].map((service, index) => (
                    <div key={index} className="text-center">
                      <service.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Button size="lg" asChild>
                    <Link href="/contact?interest=oss-support">
                      Get Support
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
