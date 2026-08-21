import { ContactForm } from '../components/company/ContactForm'
import { PageHeader } from '../components/layout/PageHeader'
import { Icon } from '../components/ui/Icon'
import { contactCards, contactPage } from '../data/content/company/contact'
import { aosAttrs } from '../utils/aos'

export function ContactPage() {
  return (
    <>
      <PageHeader
        title={contactPage.title}
        path="/contact"
        eyebrow={contactPage.eyebrow}
        backgroundImage={contactPage.headerImage}
      />

      <section className="maestro-contact py-140">
        <div className="container">
          <div className="row gy-4 tw-mb-15">
            {contactCards.map((card, index) => (
              <div key={card.id} className="col-md-4" {...aosAttrs(index * 80)}>
                <a
                  href={card.href}
                  className="maestro-contact-card cursor-small"
                  {...(card.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                >
                  <span className="maestro-contact-card__icon" aria-hidden="true">
                    <Icon name={card.icon} weight="bold" />
                  </span>
                  <span className="maestro-contact-card__label">{card.title}</span>
                  <strong className="maestro-contact-card__value">{card.value}</strong>
                </a>
              </div>
            ))}
          </div>

          <div className="row gy-5 align-items-start">
            <div className="col-lg-5" {...aosAttrs(0)}>
              <span className="maestro-section-heading__eyebrow splitTextStyleTwo cursor-small tw-text-xl fw-bold fst-italic tw-mb-305 d-block">
                {contactPage.eyebrow}
              </span>
              <h2 className="maestro-contact__title cursor-big">{contactPage.heading}</h2>
              <p className="maestro-contact__lead cursor-small">{contactPage.description}</p>
              <p className="maestro-contact__intro cursor-small">{contactPage.intro}</p>
            </div>
            <div className="col-lg-7" {...aosAttrs(140, 'fade-left')}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="maestro-contact-map">
        <iframe
          title="Maestro office location"
          src={contactPage.mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
