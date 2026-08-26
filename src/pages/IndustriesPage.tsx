import { CatalogHubPage } from '../components/shared/CatalogHubPage'
import { industriesPage } from '../data/content/industries'

export function IndustriesPage() {
  return (
    <CatalogHubPage
      page={industriesPage}
      path="/industries"
      idealForLabel="Ideal for"
    />
  )
}
