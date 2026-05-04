import { HeroSection } from '@/components/marketing/HeroSection'
import { PlatformSection } from '@/components/marketing/PlatformSection'
import { FeaturesSection } from '@/components/marketing/FeaturesSection'
import { CTASection } from '@/components/marketing/CTASection'

export default function LandingPage() {
  return (
    <>
      <main id="main-content">
        <HeroSection />
        <PlatformSection />
        <FeaturesSection />
        <CTASection />
      </main>
    </>
  )
}
