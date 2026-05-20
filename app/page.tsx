import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { IndustriesSection } from "@/components/industries-section"
import { SolutionsSection } from "@/components/solutions-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <SolutionsSection />
      <WhyChooseSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
