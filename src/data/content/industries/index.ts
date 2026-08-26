import type { CatalogPage } from '../../../types'

export const industriesPage: CatalogPage = {
  id: 'industries',
  title: 'Industries',
  eyebrow: 'Industries We Serve',
  heading: 'Built for organisations that move',
  description:
    'Every industry has unique logistics challenges, but they all require visibility, efficiency and accountability. Maestro is designed to support organisations that move goods, equipment and people, helping them digitise logistics operations from customer booking through to final delivery.',
  headerImage: 'sliders/maestro-slider-04.jpg',
  sections: [
    {
      id: 'logistics',
      title: 'Logistics',
      icon: 'truck',
      description:
        'Operate your transport business more efficiently with one integrated platform. Manage customer enquiries, quotations, bookings, dispatch, drivers, fleet operations, live tracking, proof of delivery and invoicing from one system.',
      idealFor: [
        'Haulage companies',
        'Freight operators',
        'Transport service providers',
        'Third-party logistics (3PL) providers',
      ],
    },
    {
      id: 'moving-relocation',
      title: 'Moving & Relocation',
      icon: 'map-trifold',
      description:
        'Deliver a seamless moving experience for residential and commercial customers. From online booking and quotations to scheduling, payment, live tracking and proof of delivery, Maestro helps you digitise every stage of the relocation process.',
      idealFor: [
        'Residential movers',
        'Office relocation companies',
        'International relocation providers',
        'Storage and moving businesses',
      ],
    },
    {
      id: 'courier-services',
      title: 'Courier Services',
      icon: 'package',
      description:
        'Improve delivery performance while providing customers with complete visibility. Manage collections, deliveries, driver assignments and customer notifications through one integrated platform.',
      idealFor: [
        'Courier companies',
        'Last-mile delivery providers',
        'Parcel delivery businesses',
        'Express logistics operators',
      ],
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      icon: 'factory',
      // Adapted: PDF combines Manufacturers & Distributors; lead sentence differentiates this section.
      adapted: true,
      description:
        'Gain greater control over manufacturing delivery operations. Coordinate vehicles, drivers and deliveries while providing customers with accurate delivery information and improving fleet utilisation.',
      idealFor: ['FMCG companies', 'Manufacturers', 'Retail supply chains'],
    },
    {
      id: 'distribution',
      title: 'Distribution',
      icon: 'broadcast',
      // Adapted: PDF combines Manufacturers & Distributors; lead sentence differentiates this section.
      adapted: true,
      description:
        'Gain greater control over distribution and wholesale delivery operations. Coordinate vehicles, drivers and deliveries while providing customers with accurate delivery information and improving fleet utilisation.',
      idealFor: ['Wholesale distributors', 'Retail supply chains', 'FMCG companies'],
    },
    {
      id: 'government',
      title: 'Government',
      icon: 'buildings',
      description:
        'Improve accountability across government transport operations. Digitise fleet management, dispatch and operational reporting while strengthening governance and transparency.',
      idealFor: [
        'Ministries',
        'Departments',
        'Municipal authorities',
        'Public agencies',
        'Security services',
        'Educational institutions',
      ],
    },
    {
      id: 'construction',
      title: 'Construction',
      icon: 'hard-hat',
      // Adapted: PDF combines Construction, Mining & Industrial; lead sentence differentiates this section.
      adapted: true,
      description:
        'Coordinate complex construction logistics across multiple sites. Manage heavy vehicles, equipment movement and operational reporting while maintaining complete visibility over field operations.',
      idealFor: ['Heavy vehicle fleets', 'Multi-site operations', 'Equipment movement'],
    },
    {
      id: 'mining',
      title: 'Mining',
      icon: 'mountains',
      // Adapted: PDF combines Construction, Mining & Industrial; lead sentence differentiates this section.
      adapted: true,
      description:
        'Coordinate complex mining and industrial logistics across multiple sites. Manage heavy vehicles, equipment movement and operational reporting while maintaining complete visibility over field operations.',
      idealFor: ['Heavy vehicle fleets', 'Remote-site operations', 'Industrial logistics'],
    },
  ],
}
