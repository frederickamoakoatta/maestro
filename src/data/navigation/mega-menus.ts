import type { MegaMenuColumn } from '../../types'

export const solutionsMegaMenu: MegaMenuColumn[] = [
  {
    title: 'Customer experience',
    items: [
      {
        id: 'solutions.customer-booking',
        label: 'Customer Booking',
        href: '/solutions#customer-booking',
        icon: 'calendar-check',
        description: 'Let customers book shipments online in a few clicks.',
      },
      {
        id: 'solutions.quotation-management',
        label: 'Quotation Management',
        href: '/solutions#quotation-management',
        icon: 'file-text',
        description: 'Create, send, and track quotes from one place.',
      },
      {
        id: 'solutions.digital-payments',
        label: 'Digital Payments',
        href: '/solutions#digital-payments',
        icon: 'credit-card',
        description: 'Collect payments and reconcile them automatically.',
      },
      {
        id: 'solutions.proof-of-delivery',
        label: 'Proof of Delivery',
        href: '/solutions#proof-of-delivery',
        icon: 'package',
        description: 'Capture signatures, photos, and delivery timestamps.',
      },
      {
        id: 'solutions.api-integrations',
        label: 'API Integrations',
        href: '/solutions#api-integrations',
        icon: 'plugs-connected',
        description: 'Connect Maestro to your ERP, CRM, and tools.',
      },
    ],
  },
  {
    title: 'Operations',
    items: [
      {
        id: 'solutions.fleet-management',
        label: 'Fleet Management',
        href: '/solutions#fleet-management',
        icon: 'truck',
        description: 'Track vehicles, maintenance, and utilization.',
      },
      {
        id: 'solutions.driver-management',
        label: 'Driver Management',
        href: '/solutions#driver-management',
        icon: 'users',
        description: 'Assign work and monitor driver performance.',
      },
      {
        id: 'solutions.dispatch-management',
        label: 'Dispatch Management',
        href: '/solutions#dispatch-management',
        icon: 'broadcast',
        description: 'Coordinate jobs and optimize dispatch in real time.',
      },
      {
        id: 'solutions.live-tracking',
        label: 'Live Tracking',
        href: '/solutions#live-tracking',
        icon: 'map-trifold',
        description: 'Follow shipments and vehicles with live GPS.',
      },
      {
        id: 'solutions.reporting-analytics',
        label: 'Reporting & Analytics',
        href: '/solutions#reporting-analytics',
        icon: 'chart-bar',
        description: 'Turn operational data into clear insights.',
      },
    ],
  },
]

export const industriesMegaMenu: MegaMenuColumn[] = [
  {
    title: 'Transport & delivery',
    items: [
      {
        id: 'industries.logistics',
        label: 'Logistics',
        href: '/industries#logistics',
        icon: 'truck',
        description: 'Tools for freight and supply chain operators.',
      },
      {
        id: 'industries.courier-services',
        label: 'Courier Services',
        href: '/industries#courier-services',
        icon: 'package',
        description: 'Last-mile delivery with proof and live updates.',
      },
      {
        id: 'industries.moving-relocation',
        label: 'Moving & Relocation',
        href: '/industries#moving-relocation',
        icon: 'map-trifold',
        description: 'Schedule crews, inventory, and move-day work.',
      },
      {
        id: 'industries.distribution',
        label: 'Distribution',
        href: '/industries#distribution',
        icon: 'broadcast',
        description: 'Plan routes from warehouse to door.',
      },
    ],
  },
  {
    title: 'Enterprise & heavy',
    items: [
      {
        id: 'industries.manufacturing',
        label: 'Manufacturing',
        href: '/industries#manufacturing',
        icon: 'factory',
        description: 'Inbound and outbound production logistics.',
      },
      {
        id: 'industries.government',
        label: 'Government',
        href: '/industries#government',
        icon: 'buildings',
        description: 'Secure, compliant public-sector transport.',
      },
      {
        id: 'industries.construction',
        label: 'Construction',
        href: '/industries#construction',
        icon: 'hard-hat',
        description: 'Move materials and equipment across sites.',
      },
      {
        id: 'industries.mining',
        label: 'Mining',
        href: '/industries#mining',
        icon: 'mountains',
        description: 'Heavy haul and remote-site logistics.',
      },
    ],
  },
]

export const companyMegaMenu: MegaMenuColumn[] = [
  {
    title: 'About',
    items: [
      {
        id: 'company.about-maestro',
        label: 'About Maestro',
        href: '/company/about-maestro',
        icon: 'info',
        description: 'Our mission to modernize transport and logistics.',
      },
      {
        id: 'company.about-thesofttribe',
        label: 'About theSOFTtribe',
        href: '/company/about-thesofttribe',
        icon: 'buildings',
        description: 'The team and technology behind Maestro.',
      },
    ],
  },
  {
    title: 'Connect',
    items: [
      {
        id: 'company.news-insights',
        label: 'News & Insights',
        href: '/company/news-insights',
        icon: 'newspaper',
        description: 'Product updates and industry stories.',
      },
      {
        id: 'company.contact',
        label: 'Contact Us',
        href: '/contact',
        icon: 'chats-circle',
        description: 'Talk to us about demos, support, or partnerships.',
      },
    ],
  },
]
