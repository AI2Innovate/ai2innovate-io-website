"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Send } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"
import { homeTranslations } from "@/lib/i18n/translations/home"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error"
    message: string
  } | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    requirement: "",
  })

  const { language } = useLanguage()
  const t = homeTranslations[language].contact

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = (await response.json()) as { message?: string }

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your message.")
      }

      setSubmitStatus({
        type: "success",
        message: "Thanks! Your message has been sent successfully.",
      })
      setFormData({
        name: "",
        email: "",
        company: "",
        requirement: "",
      })
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to send your message right now."
      setSubmitStatus({
        type: "error",
        message,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-accent uppercase tracking-wide">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 uppercase tracking-tight text-balance">
            {t.title}
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed text-pretty">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 bg-card">
              <CardHeader>
                <CardTitle className="text-2xl">{t.formTitle}</CardTitle>
                <CardDescription>{t.formSubtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder={t.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-2"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder={t.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-2"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder={t.companyPlaceholder}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="border-2"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder={t.requirementPlaceholder}
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="border-2 min-h-32"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 rounded-xl"
                  >
                    {isSubmitting ? "Sending..." : t.sendButton} <Send className="ml-2 h-4 w-4" />
                  </Button>
                  {submitStatus && (
                    <p
                      className={`text-sm ${
                        submitStatus.type === "success" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {submitStatus.message}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="border-2 bg-gradient-to-br from-accent/10 to-chart-2/10">
                <CardHeader>
                  <CardTitle className="text-2xl">{t.emailTitle}</CardTitle>
                  <CardDescription>{t.emailSubtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:info@ai2innovate.io"
                    className="flex items-center gap-3 text-lg font-semibold text-accent hover:text-accent/80 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    info@ai2innovate.io
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
