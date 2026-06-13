import { useState } from "react"
import { LoadingScreen } from "@/components/LoadingScreen"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { WhatWeDoSection } from "@/components/WhatWeDoSection"
import { EcosystemSection } from "@/components/EcosystemSection"
import { OpenAIClubSection } from "@/components/OpenAIClubSection"
import { MagazineSection } from "@/components/MagazineSection"
import { EventsSection } from "@/components/EventsSection"
import { TeamSection } from "@/components/TeamSection"
import { TechHeadSection } from "@/components/TechHeadSection"
import { RoadmapSection } from "@/components/RoadmapSection"
import { GallerySection } from "@/components/GallerySection"
import { ContactSection } from "@/components/ContactSection"
import { ScrollProgress, BackToTop, CustomCursor } from "@/components/UIExtras"

export function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />
      {loaded && (
        <>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <WhatWeDoSection />
            <EcosystemSection />
            <OpenAIClubSection />
            <MagazineSection />
            <EventsSection />
            <TeamSection />
            <TechHeadSection />
            <RoadmapSection />
            <GallerySection />
            <ContactSection />
          </main>
          <BackToTop />
        </>
      )}
    </>
  )
}

export default App
