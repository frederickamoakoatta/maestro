import type { TrustPillar } from '../../../types'

export const trustPillars: TrustPillar[] = [
  {
    title: 'Built by theSOFTtribe',
    description:
      'Founded in 1991, theSOFTtribe is one of Africa’s longest-established indigenous software companies—now powering Maestro with decades of enterprise experience.',
    icon: 'buildings',
  },
  {
    title: 'Enterprise-Grade Security',
    description: 'Your operational data is protected with security at the core of the platform.',
    icon: 'shield-check',
    bullets: [
      'Secure cloud infrastructure',
      'Data encryption',
      'Role-based access control',
      'Automated backups',
      'High availability',
    ],
  },
  {
    title: 'Built for Growth',
    description:
      'Whether you expand into new cities, countries or business lines, Maestro provides the flexibility to support your evolving operations.',
    icon: 'globe',
  },
  {
    title: 'Local Support, Global Standards',
    description:
      'Responsive local support backed by internationally recognised software engineering practices—from implementation and training to ongoing assistance.',
    icon: 'headset',
  },
]

export const homeCta = {
  eyebrow: 'Ready to Transform Your Logistics Operations?',
  title: 'The future of logistics is connected, intelligent and customer-centric',
  description:
    'Maestro helps organisations replace fragmented processes with one integrated platform that manages customer engagement, fleet operations, dispatch, payments, deliveries and business intelligence from end to end.',
  backgroundImage: 'apps/maestro-bg-03.jpg',
  primaryCta: { label: 'Request a Demo', href: '/contact' },
  secondaryCta: { label: 'Request a Quote', href: '/contact' },
  tertiaryCta: { label: 'Speak to Our Team', href: '/contact' },
}
