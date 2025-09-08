"use client"

import type React from "react"
import { useLanguage } from "@/lib/language-context"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Clock, Send, Building2, Handshake, HeadphonesIcon, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    topic: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://formspree.io/f/xqadwvzr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          topic: formData.topic,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Contact Form: ${formData.topic || 'General Inquiry'} from ${formData.name}`,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: "",
          email: "",
          company: "",
          topic: "",
          message: "",
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-background/80 py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t("contactTitle")}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{t("contactHeroSubtitle")}</p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t("getInTouchTitle")}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("getInTouchSubtitle")}</p>
          </div>

          <div className="flex justify-center mb-16">
            {[
              {
                icon: Mail,
                title: t("generalInquiries"),
                email: "info@ai2innovate.io",
                description: t("contactDescription"),
              },
            ].map((contact, index) => (
              <Card key={index} className="border-border/50 bg-gradient-to-br from-card to-card/80 text-center w-full max-w-md">
                <CardHeader>
                  <contact.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm">{contact.description}</CardDescription>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href={`mailto:${contact.email}`}>
                      {contact.email}
                      <Mail className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-card/30 py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{t("sendMessageTitle")}</CardTitle>
                <CardDescription>{t("sendMessageSubtitle")}</CardDescription>
              </CardHeader>
              <CardContent>
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-800">
                    <CheckCircle className="h-5 w-5" />
                    <span>{t("successMessage")}</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-800">
                    <AlertCircle className="h-5 w-5" />
                    <span>{t("errorMessage")}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("nameLabel")} *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder={t("namePlaceholder")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("emailLabel")} *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder={t("emailPlaceholder")}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">{t("companyLabel")}</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder={t("companyPlaceholder")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="topic">{t("topicLabel")} *</Label>
                    <Select value={formData.topic} onValueChange={(value) => handleInputChange("topic", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder={t("topicPlaceholder")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">{t("generalInquiry")}</SelectItem>
                        <SelectItem value="consulting">{t("consultingServices")}</SelectItem>
                        <SelectItem value="products">{t("productInformation")}</SelectItem>
                        <SelectItem value="partnerships">{t("partnerships")}</SelectItem>
                        <SelectItem value="support">{t("technicalSupport")}</SelectItem>
                        <SelectItem value="careers">{t("careers")}</SelectItem>
                        <SelectItem value="other">{t("other")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("messageLabel")} *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder={t("messagePlaceholder")}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? t("sendingMessage") : t("sendMessage")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      {/* <section className="py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <MapPin className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t("ourLocationsTitle")}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("ourLocationsSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                country: "Belgium",
                role: "Headquarters",
                entity: "Ai2Innovate SRL",
                description: "Strategic headquarters in the heart of Europe",
              },
              {
                country: "Slovakia",
                role: "Operations",
                entity: "Mozayc s.r.o.",
                description: "Operational excellence and project delivery",
              },
              {
                country: "Portugal",
                role: "R&D",
                entity: "Portugal Criativo LDA",
                description: "Innovation hub and research center",
              },
            ].map((location, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm text-center">
                <CardHeader>
                  <Building2 className="h-6 w-6 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{location.country}</CardTitle>
                  <CardDescription className="text-sm font-medium">{location.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{location.entity}</p>
                  <p className="text-xs text-muted-foreground">{location.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <Clock className="h-4 w-4" />
              <span>{t("responseTime")}</span>
            </div>
            <p className="text-xs text-muted-foreground">{t("confidentiality")}</p>
          </div>
        </div>
      </section> */}
    </div>
  )
}
