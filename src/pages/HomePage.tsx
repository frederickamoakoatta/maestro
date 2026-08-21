import { CapabilitiesSection } from '../components/home/CapabilitiesSection'
import { HeroBannerFourSlider } from '../components/home/HeroBannerFourSlider'
import { HomeCtaSection } from '../components/home/HomeCtaSection'
import { HowMaestroWorksSection } from '../components/home/HowMaestroWorksSection'
import { IndustriesOverviewSection } from '../components/home/IndustriesOverviewSection'
import { LogisticsChangingSection } from '../components/home/LogisticsChangingSection'
import { OutcomesSection } from '../components/home/OutcomesSection'
import { PlatformOverviewSection } from '../components/home/PlatformOverviewSection'
import { TrustSection } from '../components/home/TrustSection'
import { WhatIsMaestroSection } from '../components/home/WhatIsMaestroSection'
import { WhyMaestroSection } from '../components/home/WhyMaestroSection'

export function HomePage() {
  return (
    <>
      <HeroBannerFourSlider />
      <PlatformOverviewSection />
      <WhatIsMaestroSection />
      <LogisticsChangingSection />
      <IndustriesOverviewSection />
      <CapabilitiesSection />
      <WhyMaestroSection />
      <OutcomesSection />
      <HowMaestroWorksSection />
      <TrustSection />
      <HomeCtaSection />
    </>
  )
}
