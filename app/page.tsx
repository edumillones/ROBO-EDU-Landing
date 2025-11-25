import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { FuzzyLogicSection } from "@/components/fuzzy-logic-section"
import { HardwareSection } from "@/components/hardware-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <FuzzyLogicSection />
      <HardwareSection />
      <Footer />
    </main>
  )
}
