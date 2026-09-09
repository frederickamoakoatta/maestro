import { useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { contactFormCopy, contactInquiryTypes } from '../../data/content/company/contact'
import { EnquiryApiError, submitMaestroEnquiry } from '../../services/enquiryApi'
import type { MaestroEnquiryType } from '../../types/enquiry'
import { Icon } from '../ui/Icon'

const initialForm = {
  name: '',
  organisation: '',
  email: '',
  phone: '',
  inquiry: 'request_demo' as MaestroEnquiryType,
  message: '',
}

export function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const submissionIdRef = useRef(crypto.randomUUID())

  const handleChange =
    (field: keyof typeof initialForm) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }))
      if (status === 'error') {
        setStatus('idle')
        setErrorMessage(null)
      }
    }

  const resetForm = () => {
    submissionIdRef.current = crypto.randomUUID()
    setForm(initialForm)
    setStatus('idle')
    setErrorMessage(null)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'submitting') return

    setStatus('submitting')
    setErrorMessage(null)

    try {
      await submitMaestroEnquiry({
        submission_id: submissionIdRef.current,
        full_name: form.name.trim(),
        organisation: form.organisation.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        enquiry_type: form.inquiry,
        message: form.message.trim(),
      })
      setStatus('sent')
    } catch (error) {
      const message =
        error instanceof EnquiryApiError
          ? error.status === 429
            ? contactFormCopy.rateLimited
            : error.message || contactFormCopy.errorFallback
          : contactFormCopy.errorFallback

      setErrorMessage(message)
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="maestro-contact-form maestro-contact-form--success" role="status">
        <span className="maestro-contact-form__success-icon" aria-hidden="true">
          <Icon name="check" weight="bold" />
        </span>
        <h3 className="maestro-contact-form__success-title cursor-big">{contactFormCopy.successTitle}</h3>
        <p className="maestro-contact-form__success-text cursor-small">{contactFormCopy.successText}</p>
        <button type="button" className="maestro-contact-form__reset cursor-small" onClick={resetForm}>
          {contactFormCopy.resetLabel}
        </button>
      </div>
    )
  }

  const isSubmitting = status === 'submitting'

  return (
    <form className="maestro-contact-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="maestro-contact-form__grid">
        <label className="maestro-contact-form__field">
          <span>Full name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            maxLength={200}
            disabled={isSubmitting}
            value={form.name}
            onChange={handleChange('name')}
            placeholder="Jane Mensah"
          />
        </label>
        <label className="maestro-contact-form__field">
          <span>Organisation</span>
          <input
            type="text"
            name="organisation"
            autoComplete="organization"
            required
            maxLength={200}
            disabled={isSubmitting}
            value={form.organisation}
            onChange={handleChange('organisation')}
            placeholder="Company name"
          />
        </label>
        <label className="maestro-contact-form__field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            maxLength={320}
            disabled={isSubmitting}
            value={form.email}
            onChange={handleChange('email')}
            placeholder="you@company.com"
          />
        </label>
        <label className="maestro-contact-form__field">
          <span>Phone</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            required
            maxLength={50}
            disabled={isSubmitting}
            value={form.phone}
            onChange={handleChange('phone')}
            placeholder="+233"
          />
        </label>
        <label className="maestro-contact-form__field maestro-contact-form__field--full">
          <span>How can we help?</span>
          <select
            name="inquiry"
            value={form.inquiry}
            disabled={isSubmitting}
            onChange={handleChange('inquiry')}
          >
            {contactInquiryTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.label}
              </option>
            ))}
          </select>
        </label>
        <label className="maestro-contact-form__field maestro-contact-form__field--full">
          <span>Message</span>
          <textarea
            name="message"
            rows={5}
            required
            maxLength={5000}
            disabled={isSubmitting}
            value={form.message}
            onChange={handleChange('message')}
            placeholder="Tell us about your operation and what you would like to see."
          />
        </label>
      </div>

      {errorMessage && (
        <p className="maestro-contact-form__error cursor-small" role="alert">
          {errorMessage}
        </p>
      )}

      <button type="submit" className="maestro-contact-form__submit cursor-small" disabled={isSubmitting}>
        {isSubmitting ? contactFormCopy.submittingLabel : contactFormCopy.submitLabel}
        {!isSubmitting && <Icon name="caret-right" weight="bold" />}
      </button>
    </form>
  )
}
