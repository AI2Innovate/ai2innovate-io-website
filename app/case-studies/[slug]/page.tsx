import { getCaseStudies, getCaseStudyBySlug } from "@/lib/i18n/translations/case-studies"
import type { Language } from "@/lib/i18n/types"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle2, TrendingUp, Clock, Building2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

// Generate static params for all case studies in all languages
export async function generateStaticParams() {
  const languages: Language[] = ["en", "fr", "de", "nl", "sk"]
  const params: { slug: string }[] = []

  languages.forEach((lang) => {
    const studies = getCaseStudies(lang)
    studies.forEach((study) => {
      params.push({ slug: study.slug })
    })
  })

  return params
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  // Try to find the case study in any language
  const languages: Language[] = ["en", "fr", "de", "nl", "sk"]
  let caseStudy

  for (const lang of languages) {
    caseStudy = getCaseStudyBySlug(params.slug, lang)
    if (caseStudy) break
  }

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    }
  }

  return {
    title: `${caseStudy.title} - ${caseStudy.industry} Success Story | AI2INNOVATE`,
    description: caseStudy.description,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.description,
      images: [caseStudy.image],
      type: "article",
    },
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  // For now, default to English. This will be updated when we add the language switcher
  const language: Language = "en"
  const caseStudy = getCaseStudyBySlug(params.slug, language)

  if (!caseStudy) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Case Study Not Found</h1>
          <Link href="/#case-studies">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Case Studies
            </Button>
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-4">
          <Link href="/#case-studies">
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Case Studies
            </Button>
          </Link>

          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-chart-2/20 border border-chart-2/30 rounded-full mb-6">
              <span className="text-sm font-semibold text-chart-2 uppercase tracking-wide">{caseStudy.industry}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight text-balance">
              {caseStudy.title}
            </h1>

            <p className="text-2xl text-white/80 mb-8 leading-relaxed text-pretty">{caseStudy.description}</p>

            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span className="font-medium">{caseStudy.clientType}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-medium">{caseStudy.timeline}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span className="font-bold text-chart-2">{caseStudy.metric}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-0">
        <div className="container mx-auto px-4">
          <div className="relative -mt-16 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={caseStudy.image || "/placeholder.svg"}
              alt={caseStudy.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6 uppercase tracking-tight">Overview</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">{caseStudy.fullDescription}</p>
          </div>

          {/* Challenge */}
          <Card className="mb-8 border-2 border-destructive/20 bg-destructive/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-tight flex items-center gap-3">
                <span className="text-3xl">🎯</span> The Challenge
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed">{caseStudy.challenge}</p>
            </CardContent>
          </Card>

          {/* Solution */}
          <Card className="mb-8 border-2 border-accent/20 bg-accent/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-tight flex items-center gap-3">
                <span className="text-3xl">💡</span> Our Solution
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">{caseStudy.solution}</p>

              <div className="mt-6">
                <h4 className="font-semibold text-primary mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg text-sm font-medium text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="mb-8 border-2 border-chart-2/20 bg-chart-2/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 uppercase tracking-tight flex items-center gap-3">
                <span className="text-3xl">📊</span> Measurable Results
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-chart-2 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-foreground/80 leading-relaxed">{result}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-accent-foreground mb-6 uppercase tracking-tight text-balance">
            Ready for Similar Results?
          </h2>
          <p className="text-xl text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with proven AI solutions
          </p>
          <Link href="/#contact">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-lg">
              Book Your Free Strategy Call
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
