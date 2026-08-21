import { siteContact } from '../../contact'

export const contactPage = {
  id: 'company.contact',
  title: 'Contact Us',
  eyebrow: 'Get in touch',
  heading: 'Book a personalised demonstration',
  description:
    'See how Maestro can be configured for your organisation and discover how a modern logistics management platform can help improve customer experience, increase operational efficiency and support long-term business growth.',
  intro:
    'Whether you manage a corporate fleet, operate a logistics company or build a digital logistics marketplace, Maestro provides the technology foundation to help your organisation grow with confidence.',
  headerImage: 'sliders/maestro-slider-08.jpg',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Horizons+Offices+Airport+Accra&t=&z=15&ie=UTF8&iwloc=&output=embed',
}

export const contactInquiryTypes = [
  { id: 'demo', label: 'Request a Demo' },
  { id: 'quote', label: 'Request a Quote' },
  { id: 'team', label: 'Speak to Our Team' },
  { id: 'support', label: 'Support' },
]

export const contactCards = [
  {
    id: 'visit',
    title: 'Visit us',
    value: siteContact.address,
    href: siteContact.mapsUrl,
    icon: 'map-pin',
    external: true,
  },
  {
    id: 'call',
    title: 'Call us',
    value: siteContact.phone,
    href: siteContact.phoneHref,
    icon: 'phone',
    external: false,
  },
  {
    id: 'email',
    title: 'Email us',
    value: siteContact.email,
    href: `mailto:${siteContact.email}`,
    icon: 'envelope-simple',
    external: false,
  },
]
