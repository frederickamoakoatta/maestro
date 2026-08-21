import type { ContentBlock, LogisticsExpectation } from '../../../types'

export const platformOverview: ContentBlock = {
  eyebrow: 'One Platform. Complete Control.',
  title: 'Digitise logistics from enquiry to delivery',
  paragraphs: [
    'Modern logistics extends far beyond managing vehicles. Customers expect to request services online, receive quotations instantly, pay securely, track deliveries in real time and receive timely updates throughout their journey.',
    'Operations teams need complete visibility over vehicles, drivers, bookings, dispatch, payments and performance. Maestro brings all of this together in one integrated platform, helping organisations digitise their logistics operations from end to end.',
  ],
}

export const logisticsChanging: ContentBlock & { items: LogisticsExpectation[] } = {
  eyebrow: 'Logistics is Changing',
  title: 'Customers expect a digital experience at every step',
  description:
    'Customers increasingly expect the same convenience from logistics providers that they receive from leading digital platforms. At the same time, operators must coordinate fleets, drivers, dispatch, compliance and customer service while controlling costs.',
  items: [
    {
      title: 'Request services online',
      description: 'Book collections and deliveries from any device, anytime.',
      icon: 'globe',
    },
    {
      title: 'Receive timely quotations',
      description: 'Instant, transparent pricing without waiting on callbacks.',
      icon: 'clock',
    },
    {
      title: 'Pay digitally',
      description: 'Secure online payments that close the loop faster.',
      icon: 'credit-card',
    },
    {
      title: 'Schedule collections',
      description: 'Choose collection windows that fit your operation.',
      icon: 'calendar-check',
    },
    {
      title: 'Track progress in real time',
      description: 'Live visibility from dispatch through to final delivery.',
      icon: 'share-network',
    },
    {
      title: 'Receive notifications',
      description: 'Status updates the moment something changes.',
      icon: 'bell',
    },
    {
      title: 'Access invoices and receipts',
      description: 'Digital documents available whenever you need them.',
      icon: 'receipt',
    },
    {
      title: 'Rate completed services',
      description: 'Capture feedback to keep service quality consistently high.',
      icon: 'star',
    },
  ],
}

export const whatIsMaestro: ContentBlock = {
  eyebrow: 'What is Maestro?',
  title: 'Cloud logistics management for the full operation',
  paragraphs: [
    'Maestro is a cloud-based logistics management platform that enables organisations to manage customer bookings, quotations, online payments, fleets, drivers, dispatch, deliveries and operational reporting from one secure system.',
    'Designed for organisations of every size, Maestro combines customer experience with operational excellence to help logistics providers operate more efficiently while delivering exceptional service.',
  ],
}

export const whyChooseMaestro: ContentBlock = {
  eyebrow: 'Why Organisations Choose Maestro',
  title: 'Manage the entire journey—not just the fleet',
  paragraphs: [
    'Unlike traditional fleet management software that focuses primarily on vehicles, Maestro manages the entire logistics operation.',
    'From the moment a customer requests a service until payment is received and delivery is completed, every stage is managed from one integrated platform—delivering greater visibility, stronger customer service and improved operational efficiency.',
  ],
}

export const softtribePartner: ContentBlock = {
  eyebrow: 'Powered by Proven Enterprise Software',
  title: 'Built by SOFTtribe',
  paragraphs: [
    'Maestro is developed by theSOFTtribe, one of Africa’s longest-established indigenous software companies.',
    'Founded in 1991, theSOFTtribe has spent more than three decades designing, developing and supporting secure enterprise software for governments, educational institutions and private sector organisations across Africa.',
    'That experience now powers Maestro—a modern logistics platform built for organisations that expect reliability, scalability and long-term technology partnership.',
  ],
}
