import type { FaqCategory, FaqItem } from '../../../types'

export const faqPage = {
  id: 'resources.faqs',
  title: 'FAQs',
  eyebrow: 'Resources',
  introEyebrow: 'Have a question?',
  heading: 'Frequently asked questions',
  description:
    'Answers to the most common questions about Maestro—from how the platform works to security, integrations and implementation.',
  headerImage: 'sliders/maestro-slider-07.jpg',
}

export const faqCategories: { id: FaqCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All questions' },
  { id: 'platform', label: 'Platform' },
  { id: 'customers', label: 'Customers' },
  { id: 'enterprise', label: 'Enterprise' },
  { id: 'implementation', label: 'Implementation' },
]

export const faqs: FaqItem[] = [
  {
    id: 'what-is-maestro',
    category: 'platform',
    question: 'What is Maestro?',
    answer:
      'Maestro is a cloud-based logistics management platform that enables organisations to manage customer bookings, quotations, online payments, fleet operations, dispatch, deliveries and reporting from one integrated system.',
  },
  {
    id: 'who-is-maestro-for',
    category: 'platform',
    question: 'Who is Maestro designed for?',
    answer:
      'Maestro is suitable for logistics companies, transport operators, moving companies, courier businesses, manufacturers, distributors, government organisations and any enterprise operating vehicles or logistics services.',
  },
  {
    id: 'is-maestro-cloud-based',
    category: 'platform',
    question: 'Is Maestro cloud-based?',
    answer:
      'Yes. Maestro is delivered as secure cloud software, eliminating the need for on-premise infrastructure while providing automatic updates and secure access from anywhere.',
  },
  {
    id: 'online-bookings',
    category: 'customers',
    question: 'Can customers make bookings online?',
    answer:
      'Yes. Customers can submit service requests, receive quotations, approve bookings and manage their logistics services through digital channels.',
  },
  {
    id: 'online-payments',
    category: 'customers',
    question: 'Does Maestro support online payments?',
    answer: 'Yes. Customers can make secure payments using supported digital payment methods.',
  },
  {
    id: 'track-deliveries',
    category: 'customers',
    question: 'Can customers track their deliveries?',
    answer:
      'Yes. Customers receive live updates throughout the delivery journey and can monitor the progress of their bookings.',
  },
  {
    id: 'integrations',
    category: 'enterprise',
    question: 'Can Maestro integrate with our existing systems?',
    answer:
      'Yes. Maestro supports integration with ERP systems, accounting software, HR platforms, CRM solutions, payment gateways and other enterprise applications through secure APIs.',
  },
  {
    id: 'data-security',
    category: 'enterprise',
    question: 'Is our data secure?',
    answer:
      'Yes. Security is fundamental to the platform. Maestro uses enterprise-grade security controls, encryption and role-based access to protect organisational data.',
  },
  {
    id: 'multiple-countries',
    category: 'enterprise',
    question: 'Can Maestro support multiple countries?',
    answer:
      'Yes. The platform is designed to support organisations operating across multiple locations and markets.',
  },
  {
    id: 'implementation-time',
    category: 'implementation',
    question: 'How long does implementation take?',
    answer:
      'Implementation timelines depend on the size and complexity of your organisation. Our team works closely with each client to ensure a structured and successful rollout.',
  },
  {
    id: 'training-support',
    category: 'implementation',
    question: 'Do you provide training and support?',
    answer:
      'Yes. We provide implementation support, user training and ongoing technical assistance to help organisations maximise the value of the platform.',
  },
]
