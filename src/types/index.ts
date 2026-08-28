export interface NavItem {
  id: string
  label: string
  href?: string
  description?: string
  icon?: string
  children?: NavItem[]
  megaMenu?: MegaMenuColumn[]
  megaFeature?: MegaMenuFeature
}

export interface MegaMenuColumn {
  title: string
  items: NavItem[]
}

export interface MegaMenuFeature {
  eyebrow: string
  title: string
  description: string
  image: string
  cta: { label: string; href: string }
}

export interface FooterColumn {
  id: string
  title: string
  links: NavItem[]
}

export interface RouteDefinition {
  id: string
  path: string
  title: string
  headerImage?: string
}

export interface HeroSlide {
  title: string
  paragraph: string
  backgroundImage: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}

export interface FeatureItem {
  number: string
  icon: string
  title: string
  description: string
  highlighted?: boolean
  aosDelay: number
}

export interface ServiceTab {
  id: string
  label: string
  icon: string
}

export interface ProjectItem {
  image: string
  category: string
  title: string
  href: string
  aosDelay: number
}

export interface TestimonialItem {
  quote: string
  name: string
  role: string
  image: string
}

export interface BlogPost {
  image: string
  date: string
  dateBgClass: string
  tag: string
  tagBgClass: string
  author: string
  comments: string
  title: string
  href: string
  aosDelay: number
}

export interface LanguageOption {
  label: string
  flag: string
}

export interface ContentBlock {
  eyebrow: string
  title: string
  description?: string
  paragraphs?: string[]
}

export interface LogisticsExpectation {
  title: string
  description: string
  icon: string
}

export interface CapabilityItem {
  title: string
  description: string
  href: string
  icon: string
}

export interface CapabilityGroup {
  id: string
  title: string
  icon: string
  items: CapabilityItem[]
}

export interface OutcomeItem {
  title: string
  description: string
  icon: string
}

export interface IndustryOverviewItem {
  title: string
  description: string
  idealFor: string[]
  href: string
  icon: string
}

export interface ProcessStep {
  step: string
  title: string
  description: string
  icon: string
}

export interface TrustPillar {
  title: string
  description: string
  icon: string
  bullets?: string[]
}

export type FaqCategory = 'platform' | 'customers' | 'enterprise' | 'implementation'

export interface FaqItem {
  id: string
  question: string
  answer: string
  category: FaqCategory
}

export interface CatalogSection {
  id: string
  title: string
  description: string
  icon: string
  features?: string[]
  benefits?: string[]
  idealFor?: string[]
  /** Marks copy adapted from a combined PDF block (not verbatim). */
  adapted?: boolean
}

export interface CatalogPage {
  id: string
  title: string
  eyebrow: string
  heading: string
  description: string
  headerImage?: string
  sections: CatalogSection[]
}

export interface CompanyPageContent {
  id: string
  title: string
  eyebrow: string
  heading: string
  description: string
  intro?: string
  headerImage?: string
}

export interface CareerBenefit {
  title: string
  description: string
  icon: string
}

export interface JobOpening {
  id: string
  title: string
  department: string
  location: string
  type: string
  summary: string
  responsibilities: string[]
  requirements: string[]
}

export type InsightCategory = 'product' | 'industry' | 'company'

export interface InsightArticle {
  id: string
  title: string
  excerpt: string
  category: InsightCategory
  categoryLabel: string
  date: string
  readTime: string
  image: string
  body: string[]
}
