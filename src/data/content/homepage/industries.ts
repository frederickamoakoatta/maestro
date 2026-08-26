import type { IndustryOverviewItem } from '../../../types'

export const industriesOverview: IndustryOverviewItem[] = [
  {
    title: 'Logistics & Transport',
    description: 'Digitise transport operations from customer enquiry through delivery.',
    idealFor: ['Haulage companies', 'Freight operators', '3PL providers'],
    href: '/industries#logistics',
    icon: 'truck',
  },
  {
    title: 'Moving & Relocation',
    description: 'Manage residential and commercial moves with online bookings, quotations, payments and live tracking.',
    idealFor: ['Residential movers', 'Office relocation', 'Storage businesses'],
    href: '/industries#moving-relocation',
    icon: 'package',
  },
  {
    title: 'Courier & Delivery',
    description: 'Coordinate deliveries efficiently while providing customers with complete visibility.',
    idealFor: ['Courier companies', 'Last-mile delivery', 'Express logistics'],
    href: '/industries#courier-services',
    icon: 'map-pin',
  },
  {
    title: 'Manufacturing & Distribution',
    description: 'Improve delivery performance and fleet utilisation across your supply chain.',
    idealFor: ['FMCG companies', 'Manufacturers', 'Wholesale distributors'],
    href: '/industries#manufacturing',
    icon: 'factory',
  },
  {
    title: 'Government & Public Sector',
    description: 'Increase operational visibility, accountability and reporting across public-sector transport.',
    idealFor: ['Ministries', 'Municipal authorities', 'Public agencies'],
    href: '/industries#government',
    icon: 'buildings',
  },
  {
    title: 'Construction, Mining & Industrial',
    description: 'Manage large fleets and distributed operations through one secure platform.',
    idealFor: ['Heavy vehicle fleets', 'Multi-site operations', 'Industrial logistics'],
    href: '/industries#construction',
    icon: 'hard-hat',
  },
]
