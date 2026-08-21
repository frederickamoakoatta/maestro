import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { routes } from './data/navigation'
import { pageHeaderImages } from './data/page-headers'
import { FaqsPage } from './pages/FaqsPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { PlaceholderPage } from './pages/PlaceholderPage'

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resources/faqs" element={<FaqsPage />} />
          {routes
            .filter((route) => route.path !== '/resources/faqs' && route.path !== '/contact')
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
