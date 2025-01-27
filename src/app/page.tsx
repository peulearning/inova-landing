import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { HowWeWork } from "@/components/how-we-work"
import { AboutSection } from "@/components/about-section"
import { Testimonials } from "@/components/testimonials"
import { ContactSection } from "@/components/contact-section"


export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <HowWeWork />
      <AboutSection />
      <Testimonials />
      <ContactSection />
    </main>
  )
}

