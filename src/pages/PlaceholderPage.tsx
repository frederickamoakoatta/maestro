import { PageHeader } from '../components/layout/PageHeader'

interface PlaceholderPageProps {
  title: string
  path: string
  headerImage?: string
}

export function PlaceholderPage({ title, path, headerImage }: PlaceholderPageProps) {
  return (
    <>
      <PageHeader title={title} path={path} backgroundImage={headerImage} />
      <section className="py-140">
        <div className="container">
          <p className="cursor-small text-neutral-1000 mb-0">Content coming soon.</p>
        </div>
      </section>
    </>
  )
}
