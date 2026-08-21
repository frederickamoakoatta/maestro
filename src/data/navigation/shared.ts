import type { NavItem } from '../../types'

export const solutionLinks: NavItem[] = [
  { id: 'solutions.customer-booking', label: 'Customer Booking', href: '/solutions/customer-booking' },
  { id: 'solutions.quotation-management', label: 'Quotation Management', href: '/solutions/quotation-management' },
  { id: 'solutions.digital-payments', label: 'Digital Payments', href: '/solutions/digital-payments' },
  { id: 'solutions.fleet-management', label: 'Fleet Management', href: '/solutions/fleet-management' },
  { id: 'solutions.driver-management', label: 'Driver Management', href: '/solutions/driver-management' },
  { id: 'solutions.dispatch-management', label: 'Dispatch Management', href: '/solutions/dispatch-management' },
  { id: 'solutions.live-tracking', label: 'Live Tracking', href: '/solutions/live-tracking' },
  { id: 'solutions.proof-of-delivery', label: 'Proof of Delivery', href: '/solutions/proof-of-delivery' },
  { id: 'solutions.reporting-analytics', label: 'Reporting & Analytics', href: '/solutions/reporting-analytics' },
  { id: 'solutions.api-integrations', label: 'API Integrations', href: '/solutions/api-integrations' },
]

export const industryLinks: NavItem[] = [
  { id: 'industries.logistics', label: 'Logistics', href: '/industries/logistics' },
  { id: 'industries.moving-relocation', label: 'Moving & Relocation', href: '/industries/moving-relocation' },
  { id: 'industries.courier-services', label: 'Courier Services', href: '/industries/courier-services' },
  { id: 'industries.manufacturing', label: 'Manufacturing', href: '/industries/manufacturing' },
  { id: 'industries.distribution', label: 'Distribution', href: '/industries/distribution' },
  { id: 'industries.government', label: 'Government', href: '/industries/government' },
  { id: 'industries.construction', label: 'Construction', href: '/industries/construction' },
  { id: 'industries.mining', label: 'Mining', href: '/industries/mining' },
]

export const companyHeaderLinks: NavItem[] = [
  { id: 'company.about-maestro', label: 'About Maestro', href: '/company/about-maestro' },
  { id: 'company.about-thesofttribe', label: 'About theSOFTtribe', href: '/company/about-thesofttribe' },
  { id: 'company.news-insights', label: 'News & Insights', href: '/company/news-insights' },
  { id: 'company.contact', label: 'Contact Us', href: '/contact' },
]

export const companyFooterLinks: NavItem[] = [
  { id: 'company.about-maestro', label: 'About Maestro', href: '/company/about-maestro' },
  { id: 'company.about-thesofttribe', label: 'About theSOFTtribe', href: '/company/about-thesofttribe' },
  { id: 'company.careers', label: 'Careers', href: '/company/careers' },
  { id: 'company.news-insights', label: 'News & Insights', href: '/company/news-insights' },
  { id: 'company.contact', label: 'Contact Us', href: '/contact' },
]

export const resourceLinks: NavItem[] = [
  { id: 'resources.faqs', label: 'FAQs', href: '/resources/faqs' },
  { id: 'resources.product-roadmap', label: 'Product Roadmap', href: '/resources/product-roadmap' },
  { id: 'resources.documentation', label: 'Documentation', href: '/resources/documentation' },
  { id: 'resources.privacy-policy', label: 'Privacy Policy', href: '/resources/privacy-policy' },
  { id: 'resources.terms-of-use', label: 'Terms of Use', href: '/resources/terms-of-use' },
]

export const headerTopLinks = [
  { label: 'Help', href: '/contact' },
  { label: 'Support', href: '/contact' },
  { label: 'Faqs', href: '/resources/faqs' },
]

export const socialLinks = [
  { href: 'https://www.twitter.com', icon: 'twitter-logo' as const, weight: 'fill' as const },
  { href: 'https://www.facebook.com', icon: 'facebook-logo' as const, weight: 'fill' as const },
  { href: 'https://www.instagram.com', icon: 'instagram-logo' as const, weight: 'bold' as const },
  { href: 'https://www.youtube.com', icon: 'youtube-logo' as const, weight: 'fill' as const },
]
