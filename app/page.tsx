"use client"

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Process from "@/components/process"
import CaseStudies from "@/components/case-studies"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navigation />
      <Hero />
      <Services />
      <Process />
      <CaseStudies />
      <AboutSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </main>
  )
}
