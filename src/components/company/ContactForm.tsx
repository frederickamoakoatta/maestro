import { useState, type ChangeEvent, type FormEvent } from 'react'
import { contactInquiryTypes } from '../../data/content/company/contact'
import { Icon } from '../ui/Icon'

const initialForm = {
  name: '',
  organisation: '',
  email: '',
  phone: '',
  inquiry: 'demo',
  message: '',
}

export function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  const handleChange =
    (field: keyof typeof initialForm) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sent')
  }

  if (status === 'sent') {
    return (
      <div className="maestro-contact-form maestro-contact-form--success" role="status">
        <span className="maestro-contact-form__success-icon" aria-hidden="true">
          <Icon name="check" weight="bold" />
        </span>
        <h3 className="maestro-contact-form__success-title cursor-big">Message received</h3>
        <p className="maestro-contact-form__success-text cursor-small">
          Thank you. Our team will get back to you shortly to arrange a demonstration or answer your enquiry.
        </p>
        <button
          type="button"
          className="maestro-contact-form__reset cursor-small"
          onClick={() => {
            setForm(initialForm)
            setStatus('idle')
          }}
        >
          Send another message
        </button>
      </div>
    )
  }

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
            value={form.phone}
            onChange={handleChange('phone')}
            placeholder="+233"
          />
        </label>
        <label className="maestro-contact-form__field maestro-contact-form__field--full">
          <span>How can we help?</span>
          <select name="inquiry" value={form.inquiry} onChange={handleChange('inquiry')}>
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
            value={form.message}
            onChange={handleChange('message')}
            placeholder="Tell us about your operation and what you would like to see."
          />
        </label>
      </div>
      <button type="submit" className="maestro-contact-form__submit cursor-small">
        Send message
        <Icon name="caret-right" weight="bold" />
      </button>
    </form>
  )
}
