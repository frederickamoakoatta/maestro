import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { hubRedirects, routes } from './data/navigation'
import { pageHeaderImages } from './data/page-headers'
import { AboutMaestroPage } from './pages/AboutMaestroPage'
import { AboutTheSofttribePage } from './pages/AboutTheSofttribePage'
import { CareerDetailPage } from './pages/CareerDetailPage'
import { CareersPage } from './pages/CareersPage'
import { FaqsPage } from './pages/FaqsPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { IndustriesPage } from './pages/IndustriesPage'
import { NewsArticlePage } from './pages/NewsArticlePage'
import { NewsInsightsPage } from './pages/NewsInsightsPage'
import { PlaceholderPage } from './pages/PlaceholderPage'
import { SolutionsPage } from './pages/SolutionsPage'

const dedicatedPaths = new Set([
  '/solutions',
  '/industries',
  '/resources/faqs',
  '/contact',
  '/company/about-maestro',
  '/company/about-thesofttribe',
  '/company/careers',
  '/company/news-insights',
])

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resources/faqs" element={<FaqsPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/company/about-maestro" element={<AboutMaestroPage />} />
          <Route path="/company/about-thesofttribe" element={<AboutTheSofttribePage />} />
          <Route path="/company/careers" element={<CareersPage />} />
          <Route path="/company/careers/:slug" element={<CareerDetailPage />} />
          <Route path="/company/news-insights" element={<NewsInsightsPage />} />
          <Route path="/company/news-insights/:slug" element={<NewsArticlePage />} />
          {hubRedirects.map((redirect) => (
            <Route
              key={redirect.from}
              path={redirect.from}
              element={<Navigate to={redirect.to} replace />}
            />
          ))}
          {routes
            .filter((route) => !dedicatedPaths.has(route.path))
            .map((route) => (
              <Route
                key={route.id}
                path={route.path}
                element={
                  <PlaceholderPage
                    title={route.title}
                    path={route.path}
                    headerImage={route.headerImage ?? pageHeaderImages[route.id]}
                  />
                }
              />
            ))}
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App
