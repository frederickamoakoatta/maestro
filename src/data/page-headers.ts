/** Optional per-page header images, keyed by route id. Omit for the default solid dark banner. */
export const pageHeaderImages: Partial<Record<string, string>> = {
  // 'solutions.fleet-management': 'sliders/maestro-slider-05.jpg',
  // 'company.contact': 'sliders/maestro-slider-09.jpg',
}

const SECTION_LABELS: Record<string, string> = {
  solutions: 'Solutions',
  industries: 'Industries',
  company: 'Company',
  resources: 'Resources',
  contact: 'Contact Us',
}

export function pageSectionLabel(path: string): string | undefined {
  const segment = path.replace(/^\//, '').split('/')[0]
  return segment ? SECTION_LABELS[segment] : undefined
}
