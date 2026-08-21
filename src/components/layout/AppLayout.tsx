import type { ReactNode } from 'react'
import { useAOS } from '../../hooks/useAOS'
import { useCustomCursor } from '../../hooks/useCustomCursor'
import { useMobileMenu } from '../../hooks/useMobileMenu'
import { useOffcanvas } from '../../hooks/useOffcanvas'
import { usePreloader } from '../../hooks/usePreloader'
import { useScrollHeader } from '../../hooks/useScrollHeader'
import { Footer } from './Footer'
import { CustomCursor } from './CustomCursor'
import { HeaderThree } from './HeaderThree'
import { HeaderTopThree } from './HeaderTopThree'
import { MobileMenu } from './NavMenu'
import { OffcanvasSidebar } from './OffcanvasSidebar'
import { Preloader } from './Preloader'
import { ScrollToTop } from './ScrollToTop'

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  const preloaderVisible = usePreloader()
  const { open: mobileOpen, toggle: toggleMobile, close: closeMobile } = useMobileMenu()
  const { open: offcanvasOpen, toggle: toggleOffcanvas, close: closeOffcanvas } = useOffcanvas()

  useCustomCursor()
  useAOS()
  const isHeaderFixed = useScrollHeader()

  return (
    <>
      <Preloader visible={preloaderVisible} />
      <ScrollToTop />
      <CustomCursor />
      <OffcanvasSidebar open={offcanvasOpen} onClose={closeOffcanvas} />
      <MobileMenu open={mobileOpen} onClose={closeMobile} />

      <div
        className={`absolute-headers md-bg-main-two-600 position-absolute top-0 tw-start-0 tw-end-0 w-100 tw-z-99 header py-0${isHeaderFixed ? ' fixed-header' : ''}`}
      >
        <HeaderTopThree />
        <HeaderThree
          isScrolled={isHeaderFixed}
          isMobileMenuOpen={mobileOpen}
          onToggleMobileMenu={toggleMobile}
          onToggleOffcanvas={toggleOffcanvas}
        />
      </div>

      <main>{children}</main>
      <Footer />
    </>
  )
}
