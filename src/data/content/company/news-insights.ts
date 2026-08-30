import type { CompanyPageContent, InsightArticle, InsightCategory } from '../../../types'

export const newsInsightsPage: CompanyPageContent = {
  id: 'company.news-insights',
  title: 'News & Insights',
  eyebrow: 'Company',
  heading: 'Product updates and industry perspectives',
  headerImage: 'sliders/maestro-slider-06.jpg',
  description:
    'Stay up to date with Maestro product news, logistics industry trends and stories from the team building modern transport technology.',
  intro:
    'From fleet visibility and customer booking to enterprise security and integrations, we share practical insights for organisations modernising how they move goods, equipment and people.',
}

export const insightCategories: { id: InsightCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'product', label: 'Product' },
  { id: 'industry', label: 'Industry' },
  { id: 'company', label: 'Company' },
]

export const newsInsightsEmptyState = {
  icon: 'newspaper',
  title: 'No articles yet',
  description:
    'We’re preparing news and insights about Maestro and the logistics industry. Check back soon for product updates and stories from our team.',
}

export const newsInsightsFilterEmptyState = {
  icon: 'magnifying-glass',
  title: 'No articles in this category',
  description: 'Try another filter or view all articles to see everything we’ve published.',
}

export const insightArticles: InsightArticle[] = [
  {
    id: 'maestro-platform-overview',
    title: 'Why modern logistics needs one integrated platform',
    excerpt:
      'Fragmented tools create blind spots across booking, dispatch and delivery. Maestro brings customer engagement and fleet operations into a single source of truth.',
    category: 'product',
    categoryLabel: 'Product',
    date: '12 Aug 2026',
    readTime: '5 min read',
    image: 'sliders/maestro-slider-05.jpg',
    body: [
      'Logistics organisations often rely on a patchwork of spreadsheets, phone calls and disconnected systems. Customer bookings live in one place, dispatch happens in another and financial records sit elsewhere entirely.',
      'That fragmentation slows teams down. Dispatchers lack visibility when customer information is incomplete. Finance teams reconcile payments manually. Customers call operations for updates that should be available online.',
      'Maestro addresses this by connecting the full logistics journey in one platform—from enquiry and quotation through booking, dispatch, live tracking, proof of delivery and invoicing.',
      'When every module shares the same data, teams respond faster, reduce errors and deliver a more consistent customer experience. Operators gain one source of truth instead of chasing updates across tools.',
      'For growing logistics businesses, an integrated platform also simplifies scaling. New branches, fleets and service lines can be added without rebuilding processes around separate software products.',
    ],
  },
  {
    id: 'digitising-african-logistics',
    title: 'Digitising logistics operations across Africa',
    excerpt:
      'Organisations are moving from phone calls and paper forms to online booking, live tracking and digital payments—raising customer expectations across the continent.',
    category: 'industry',
    categoryLabel: 'Industry',
    date: '28 Jul 2026',
    readTime: '6 min read',
    image: 'sliders/maestro-slider-04.jpg',
    body: [
      'Across Africa, logistics providers are under pressure to modernise. Customers increasingly expect digital booking, transparent pricing, mobile payments and live delivery updates.',
      'Traditional operators built on phone-based coordination can still deliver excellent service, but the cost of manual administration rises as volumes grow. Duplicate data entry, missed updates and limited reporting make it harder to compete.',
      'Digitisation does not mean replacing operational expertise—it means giving teams better tools. Online booking captures complete job information up front. Dispatch dashboards coordinate vehicles and drivers more efficiently. Digital payments improve cash flow and reduce reconciliation effort.',
      'Organisations that adopt integrated logistics software are better positioned to serve corporate clients, public-sector contracts and consumer markets that expect modern service experiences.',
      'The opportunity is significant: transport and logistics remain essential to commerce across the continent, and technology can help operators scale without losing control or accountability.',
    ],
  },
  {
    id: 'built-by-thesofttribe',
    title: 'Maestro and three decades of enterprise software experience',
    excerpt:
      'Developed by theSOFTtribe, Maestro builds on more than thirty years of designing secure software for governments, institutions and private sector organisations.',
    category: 'company',
    categoryLabel: 'Company',
    date: '15 Jul 2026',
    readTime: '4 min read',
    image: 'sliders/maestro-slider-08.jpg',
    body: [
      'Maestro is developed by theSOFTtribe, one of Africa’s longest-established indigenous software companies. Founded in 1991, theSOFTtribe has spent more than three decades building secure enterprise systems for governments, educational institutions and private sector organisations.',
      'That experience shapes how Maestro is engineered. The platform is designed for reliability, role-based access, auditability and long-term support—not just feature launches.',
      'Logistics customers need confidence that their operational data is protected and that the platform will evolve with their business. Maestro combines modern customer and fleet capabilities with the delivery discipline of an established technology partner.',
      'For organisations evaluating logistics software, the question is not only what the product does today, but who will support it tomorrow. Maestro is built with that partnership in mind.',
    ],
  },
  {
    id: 'last-mile-visibility',
    title: 'Last-mile delivery: what customers expect in 2026',
    excerpt:
      'Real-time tracking, proactive notifications and proof of delivery are no longer premium features—they are baseline requirements for courier and delivery businesses.',
    category: 'industry',
    categoryLabel: 'Industry',
    date: '3 Jul 2026',
    readTime: '5 min read',
    image: 'sliders/maestro-slider-09.jpg',
    body: [
      'Last-mile delivery has become one of the most visible parts of the logistics journey. Customers remember the experience at the door, not just the warehouse handoff.',
      'In 2026, baseline expectations include booking confirmation, dispatch notification, live tracking, estimated arrival times and proof of delivery. Businesses that cannot provide this visibility face more support calls and lower customer trust.',
      'Courier operators also need internal visibility—knowing which drivers are active, which jobs are delayed and where exceptions occur. Without that insight, service quality becomes difficult to manage at scale.',
      'Integrated platforms help bridge the gap between customer experience and operations. Notifications are triggered automatically from dispatch and tracking events. Proof of delivery creates an audit trail that reduces disputes.',
      'For last-mile providers, visibility is no longer a marketing differentiator. It is operational infrastructure.',
    ],
  },
  {
    id: 'fleet-utilisation',
    title: 'Turning fleet data into better utilisation decisions',
    excerpt:
      'Reporting and analytics help operators understand vehicle activity, driver performance and revenue trends—supporting smarter dispatch and asset planning.',
    category: 'product',
    categoryLabel: 'Product',
    date: '19 Jun 2026',
    readTime: '5 min read',
    image: 'sliders/maestro-slider-06.jpg',
    body: [
      'Fleet utilisation is one of the strongest levers for profitability in transport and logistics. Yet many operators still lack clear visibility into how vehicles, drivers and routes perform over time.',
      'Operational reporting helps teams answer practical questions: Which vehicles are underused? Where are delays most common? How do bookings convert to completed trips? What revenue trends are emerging by service line or branch?',
      'When reporting is connected to the same system that manages bookings and dispatch, data is more trustworthy. Teams spend less time consolidating spreadsheets and more time acting on insight.',
      'Executive dashboards complement day-to-day operational reports, giving leaders a view of fleet performance, customer growth and financial outcomes in one place.',
      'Better data does not replace experienced dispatchers—but it helps them make faster, more informed decisions as operations grow.',
    ],
  },
  {
    id: 'public-sector-fleet',
    title: 'Strengthening accountability in public-sector transport',
    excerpt:
      'Government and municipal fleets benefit from digitised dispatch, operational reporting and audit trails that improve governance and transparency.',
    category: 'industry',
    categoryLabel: 'Industry',
    date: '5 Jun 2026',
    readTime: '6 min read',
    image: 'sliders/maestro-slider-07.jpg',
    body: [
      'Public-sector transport operations must balance service delivery with accountability. Ministries, departments and municipal authorities need visibility over fleet activity, dispatch decisions and reporting outputs.',
      'Paper-based or fragmented systems make audits difficult and limit transparency. Digitised fleet management creates a clearer record of vehicle assignments, trip activity and operational performance.',
      'Role-based access and audit logs help organisations control who can view or change sensitive operational data. Standardised reporting supports internal governance and external review.',
      'For government logistics teams, modern software also improves service to citizens and internal departments. Requests can be tracked, jobs can be assigned systematically and outcomes can be reported with confidence.',
      'As public institutions modernise, transport operations should not be left behind. Integrated logistics platforms can strengthen both efficiency and accountability.',
    ],
  },
]

export function getInsightArticle(slug: string): InsightArticle | undefined {
  return insightArticles.find((article) => article.id === slug)
}

export function insightDetailPath(article: InsightArticle): string {
  return `/company/news-insights/${article.id}`
}

export function relatedInsightArticles(article: InsightArticle, limit = 3): InsightArticle[] {
  return insightArticles
    .filter((item) => item.id !== article.id && item.category === article.category)
    .slice(0, limit)
}
