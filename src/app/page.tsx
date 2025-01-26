import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"


export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <ServicesSection />
    </main>
  )
}

