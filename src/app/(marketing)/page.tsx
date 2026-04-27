import { HeroSection } from '@/components/marketing/HeroSection'
import { StatsMarquee } from '@/components/marketing/StatsMarquee'
import { PlatformSection } from '@/components/marketing/PlatformSection'
import { FeaturesSection } from '@/components/marketing/FeaturesSection'
import { FAQSection } from '@/components/marketing/FAQSection'
import { CTASection } from '@/components/marketing/CTASection'

export default function LandingPage() {
  return (
    <>
      <main id="main-content">
        <HeroSection />
        <StatsMarquee />
        <PlatformSection />
        <FeaturesSection />
        <FAQSection />
        <CTASection />
      </main>
    </>
  )
}
