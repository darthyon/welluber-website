import { HeroSection } from '@/components/marketing/HeroSection'
import { StatsMarquee } from '@/components/marketing/StatsMarquee'
import { NetworkSection } from '@/components/marketing/NetworkSection'
import { FeaturesSection } from '@/components/marketing/FeaturesSection'
import { AudienceSection } from '@/components/marketing/AudienceSection'
import { FAQSection } from '@/components/marketing/FAQSection'
import { CTASection } from '@/components/marketing/CTASection'

export default function LandingPage() {
  return (
    <>
      <main id="main-content">
        <HeroSection />
        <StatsMarquee />
        <NetworkSection />
        <AudienceSection />
        <FeaturesSection />
        <FAQSection />
        <CTASection />
      </main>
    </>
  )
}
