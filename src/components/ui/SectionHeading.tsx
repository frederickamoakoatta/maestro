interface SectionHeadingProps {
  eyebrow: string
  title: string
  className?: string
  titleTag?: 'h1' | 'h2'
  centered?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  className = '',
  titleTag: TitleTag = 'h1',
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : 'text-start'} ${className}`}>
      <span className="maestro-section-heading__eyebrow splitTextStyleTwo cursor-small tw-text-xl fw-bold fst-italic tw-mb-305 d-block">
        {eyebrow}
      </span>
      <TitleTag className="splitTextStyleOne cursor-big tw-mb-8">{title}</TitleTag>
    </div>
  )
}
