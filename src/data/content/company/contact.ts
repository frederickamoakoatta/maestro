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
    'https://maps.google.com/maps?q=Number+1+Airport+Square+Accra&t=&z=15&ie=UTF8&iwloc=&output=embed',
}

export const contactInquiryTypes = [
  { id: 'request_demo', label: 'Request a Demo' },
  { id: 'request_quote', label: 'Request a Quote' },
  { id: 'speak_to_team', label: 'Speak to Our Team' },
  { id: 'support', label: 'Support' },
] as const

export const contactFormCopy = {
  submitLabel: 'Send message',
  submittingLabel: 'Sending…',
  successTitle: 'Message received',
  successText:
    'Thank you. Our team will get back to you shortly to arrange a demonstration or answer your enquiry.',
  resetLabel: 'Send another message',
  errorFallback: 'Something went wrong while sending your message. Please try again.',
  rateLimited: 'Too many requests. Please wait a moment and try again.',
}

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
