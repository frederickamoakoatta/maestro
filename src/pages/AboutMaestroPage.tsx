import { HomeCtaSection } from '../components/home/HomeCtaSection'
import { IndustriesOverviewSection } from '../components/home/IndustriesOverviewSection'
import { WhatIsMaestroSection } from '../components/home/WhatIsMaestroSection'
import { WhyMaestroSection } from '../components/home/WhyMaestroSection'
import { PageHeader } from '../components/layout/PageHeader'

export function AboutMaestroPage() {
  return (
    <>
      <PageHeader
        title="About Maestro"
        path="/company/about-maestro"
        backgroundImage="sliders/maestro-slider-07.jpg"
      />
      <WhatIsMaestroSection variant='light'/>
      <IndustriesOverviewSection />
      <WhyMaestroSection />
      <HomeCtaSection />
    </>
  )
}
