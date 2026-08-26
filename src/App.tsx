import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { hubRedirects, routes } from './data/navigation'
import { pageHeaderImages } from './data/page-headers'
import { AboutMaestroPage } from './pages/AboutMaestroPage'
import { AboutTheSofttribePage } from './pages/AboutTheSofttribePage'
import { FaqsPage } from './pages/FaqsPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { IndustriesPage } from './pages/IndustriesPage'
import { PlaceholderPage } from './pages/PlaceholderPage'
import { SolutionsPage } from './pages/SolutionsPage'

const dedicatedPaths = new Set([
  '/solutions',
  '/industries',
  '/resources/faqs',
  '/contact',
  '/company/about-maestro',
  '/company/about-thesofttribe',
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
