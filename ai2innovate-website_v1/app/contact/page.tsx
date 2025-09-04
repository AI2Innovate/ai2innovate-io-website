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
import { Mail, MapPin, Clock, Send, Building2, Handshake, HeadphonesIcon } from "lucide-react"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    topic: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
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

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-16">
            {[
              {
                icon: Mail,
                title: t("generalInquiries"),
                email: "hello@ai2innovate.io",
                description: "Questions about our services, general information, or project discussions",
              },
              {
                icon: Handshake,
                title: t("partnerships"),
                email: "partnerships@ai2innovate.io",
                description: "Strategic partnerships, integrations, and collaboration opportunities",
              },
              {
                icon: HeadphonesIcon,
                title: t("support"),
                email: "support@ai2innovate.io",
                description: "Technical support for our products and existing client assistance",
              },
            ].map((contact, index) => (
              <Card key={index} className="border-border/50 bg-gradient-to-br from-card to-card/80 text-center">
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="topic">Topic *</Label>
                    <Select value={formData.topic} onValueChange={(value) => handleInputChange("topic", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="consulting">Consulting Services</SelectItem>
                        <SelectItem value="products">Product Information</SelectItem>
                        <SelectItem value="partnerships">Partnerships</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="careers">Careers</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your project, requirements, or questions..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    {t("sendMessage")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 sm:py-32">
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
      </section>
    </div>
  )
}
