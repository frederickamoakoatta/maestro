import { HomeCtaSection } from '../components/home/HomeCtaSection'
import { TrustSection } from '../components/home/TrustSection'
import { PageHeader } from '../components/layout/PageHeader'

export function AboutTheSofttribePage() {
  return (
    <>
      <PageHeader
        title="About theSOFTtribe"
        path="/company/about-thesofttribe"
        backgroundImage="sliders/maestro-slider-08.jpg"
      />
      <TrustSection showAboutLink={false} />
      <HomeCtaSection />
    </>
  )
}
