import type { CareerBenefit, CompanyPageContent, JobOpening } from '../../../types'

export const careersPage: CompanyPageContent = {
  id: 'company.careers',
  title: 'Careers',
  eyebrow: 'Company',
  heading: 'Help build the software that keeps goods and people moving',
  headerImage: 'sliders/maestro-slider-07.jpg',
  description:
    'Join the team behind Maestro—a modern logistics platform developed by theSOFTtribe, one of Africa’s longest-established indigenous software companies.',
  intro:
    'We are looking for people who care about solving real operational problems, shipping reliable software and supporting customers across Africa and beyond. Whether you work in engineering, product, customer success or operations, you will help organisations digitise logistics from booking through to delivery.',
}

export const careerBenefits: CareerBenefit[] = [
  {
    title: 'Meaningful impact',
    description: 'Build technology used by transport operators, fleets and logistics teams every day.',
    icon: 'rocket',
  },
  {
    title: 'Proven foundation',
    description: 'Work with a company that has delivered enterprise software since 1991.',
    icon: 'buildings',
  },
  {
    title: 'Room to grow',
    description: 'Maestro is expanding—there is space to learn, lead and shape the platform roadmap.',
    icon: 'chart-bar',
  },
  {
    title: 'Collaborative culture',
    description: 'Engineering, product and customer teams work closely to ship and support together.',
    icon: 'users',
  },
  {
    title: 'Local roots, global standards',
    description: 'Responsive local support backed by internationally recognised engineering practices.',
    icon: 'globe',
  },
  {
    title: 'Continuous learning',
    description: 'Exposure to cloud platforms, integrations, mobile apps and enterprise deployments.',
    icon: 'shield-check',
  },
]

export const jobOpenings: JobOpening[] = [
  {
    id: 'senior-software-engineer',
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Accra, Ghana',
    type: 'Full-time',
    summary:
      'Help design and build core Maestro platform capabilities—from customer booking and dispatch to fleet management, integrations and reporting.',
    responsibilities: [
      'Design, build and maintain backend services and APIs that power Maestro logistics workflows.',
      'Collaborate with product and customer teams to translate operational requirements into reliable software.',
      'Improve performance, security and observability across cloud-hosted services.',
      'Participate in code reviews, technical planning and platform architecture discussions.',
      'Support production releases and contribute to incident resolution when needed.',
    ],
    requirements: [
      '5+ years of professional software engineering experience.',
      'Strong experience with modern web backends and REST or GraphQL APIs.',
      'Comfort working with relational databases and cloud deployment environments.',
      'Ability to write clear, maintainable code and communicate trade-offs with teammates.',
      'Interest in logistics, mobility or enterprise SaaS products.',
    ],
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    department: 'Product',
    location: 'Accra, Ghana',
    type: 'Full-time',
    summary:
      'Own product discovery and delivery for Maestro modules used by fleet operators, dispatch teams and customer-facing logistics workflows.',
    responsibilities: [
      'Gather requirements from customers, implementations and internal stakeholders.',
      'Define user stories, acceptance criteria and release priorities for engineering teams.',
      'Partner with design and engineering to ship features from concept through launch.',
      'Track product usage, customer feedback and operational outcomes to inform the roadmap.',
      'Document workflows and communicate product direction across the organisation.',
    ],
    requirements: [
      '3+ years of product management experience, ideally in B2B or enterprise software.',
      'Strong analytical skills and comfort working with technical teams.',
      'Excellent written and verbal communication skills.',
      'Experience translating complex operational processes into simple product experiences.',
      'Willingness to engage directly with customers during discovery and rollout.',
    ],
  },
  {
    id: 'customer-success-manager',
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Accra, Ghana',
    type: 'Full-time',
    summary:
      'Support Maestro customers through onboarding, adoption and long-term success—helping logistics teams get maximum value from the platform.',
    responsibilities: [
      'Lead customer onboarding plans and implementation milestones.',
      'Train operations teams on Maestro booking, dispatch, tracking and reporting features.',
      'Monitor account health and proactively address adoption or support risks.',
      'Gather customer feedback and share insights with product and engineering teams.',
      'Coordinate escalations and maintain strong relationships with key stakeholders.',
    ],
    requirements: [
      '3+ years in customer success, account management or implementation roles.',
      'Experience supporting enterprise or mid-market software customers.',
      'Strong presentation and facilitation skills.',
      'Organised, empathetic and comfortable working across technical and business teams.',
      'Interest in logistics, transport or fleet operations is a plus.',
    ],
  },
  {
    id: 'implementation-consultant',
    title: 'Implementation Consultant',
    department: 'Professional Services',
    location: 'Accra, Ghana',
    type: 'Full-time',
    summary:
      'Configure and deploy Maestro for new customers—mapping their logistics processes to platform capabilities and ensuring a smooth go-live.',
    responsibilities: [
      'Run discovery workshops to understand customer fleet, booking and dispatch workflows.',
      'Configure Maestro modules, user roles, integrations and operational settings.',
      'Deliver training for administrators, dispatchers and customer support teams.',
      'Support data migration, testing and cutover planning for new deployments.',
      'Document implementation decisions and hand over to customer success after go-live.',
    ],
    requirements: [
      '2+ years in software implementation, consulting or business analysis.',
      'Ability to map operational processes to system configuration.',
      'Strong project coordination and stakeholder management skills.',
      'Comfort learning new platforms quickly and explaining them clearly.',
      'Willingness to travel occasionally for on-site customer engagements.',
    ],
  },
]

export const careersApplyCta = {
  title: 'Don’t see the right role?',
  description:
    'We are always interested in hearing from talented people. Send your CV and a short note about what you would like to work on.',
  buttonLabel: 'Get in touch',
  href: '/contact',
}

export const careersEmptyState = {
  icon: 'users',
  title: 'No open roles right now',
  description:
    'We don’t have any vacancies at the moment, but we’re always interested in meeting talented people. Get in touch and tell us what you’d like to work on.',
  actionLabel: 'Get in touch',
  actionHref: '/contact',
}

export const careerApplyForm = {
  title: 'Apply for this role',
  subtitle: 'Submit your details and we will be in touch about this opportunity.',
  fullNameLabel: 'Full name',
  fullNamePlaceholder: 'Jane Mensah',
  cvLabel: 'CV / Résumé',
  cvHint: 'PDF or Word document',
  coverLetterLabel: 'Cover letter',
  coverLetterHint: 'PDF or Word document',
  chooseFile: 'Choose file',
  submitLabel: 'Submit application',
  successTitle: 'Application received',
  successText:
    'Thank you. Our team will review your application and contact you if there is a match for this role.',
  closeLabel: 'Close',
}

export function getJobOpening(slug: string): JobOpening | undefined {
  return jobOpenings.find((job) => job.id === slug)
}

export function jobDetailPath(job: JobOpening): string {
  return `/company/careers/${job.id}`
}
