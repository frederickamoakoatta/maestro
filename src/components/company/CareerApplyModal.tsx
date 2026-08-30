import { useEffect, useId, useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { careerApplyForm } from '../../data/content/company/careers'
import { Icon } from '../ui/Icon'

const ACCEPTED_FILE_TYPES =
  '.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'

interface CareerApplyModalProps {
  open: boolean
  onClose: () => void
  jobTitle: string
}

interface ApplyFormState {
  fullName: string
  cv: File | null
  coverLetter: File | null
}

const initialForm: ApplyFormState = {
  fullName: '',
  cv: null,
  coverLetter: null,
}

function FileUploadField({
  id,
  label,
  hint,
  file,
  onChange,
  required,
}: {
  id: string
  label: string
  hint: string
  file: File | null
  onChange: (file: File | null) => void
  required?: boolean
}) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.files?.[0] ?? null)
  }

  return (
    <div className="maestro-career-apply__field">
      <label htmlFor={id} className="maestro-career-apply__label cursor-small">
        {label}
      </label>
      <div className="maestro-career-apply__file">
        <input
          ref={inputRef}
          id={id}
          type="file"
          accept={ACCEPTED_FILE_TYPES}
          required={required}
          className="maestro-career-apply__file-input"
          onChange={handleChange}
        />
        <button
          type="button"
          className="maestro-career-apply__file-btn cursor-small"
          onClick={() => inputRef.current?.click()}
        >
          <Icon name="file-text" weight="bold" />
          {careerApplyForm.chooseFile}
        </button>
        <span className="maestro-career-apply__file-name cursor-small">
          {file ? file.name : hint}
        </span>
      </div>
    </div>
  )
}

export function CareerApplyModal({ open, onClose, jobTitle }: CareerApplyModalProps) {
  const titleId = useId()
  const panelRef = useRef<HTMLElement>(null)
  const [form, setForm] = useState<ApplyFormState>(initialForm)
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  useEffect(() => {
    if (!open) return

    document.body.style.overflow = 'hidden'
    const focusable = panelRef.current?.querySelector<HTMLElement>('input[type="text"], button')
    focusable?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  useEffect(() => {
    if (open) return
    setForm(initialForm)
    setStatus('idle')
  }, [open])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sent')
  }

  if (!open) return null

  return (
    <>
      <div
        className="maestro-career-apply-overlay is-open"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        ref={panelRef}
        className="maestro-career-apply is-open"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="maestro-career-apply__header">
          <div>
            <p className="maestro-career-apply__eyebrow cursor-small">{jobTitle}</p>
            <h2 id={titleId} className="maestro-career-apply__title cursor-big">
              {careerApplyForm.title}
            </h2>
          </div>
          <button
            type="button"
            className="maestro-career-apply__close cursor-small"
            onClick={onClose}
            aria-label={careerApplyForm.closeLabel}
          >
            <Icon name="x" weight="bold" />
          </button>
        </div>

        {status === 'sent' ? (
          <div className="maestro-career-apply__success" role="status">
            <span className="maestro-career-apply__success-icon" aria-hidden="true">
              <Icon name="check" weight="bold" />
            </span>
            <h3 className="maestro-career-apply__success-title cursor-big">
              {careerApplyForm.successTitle}
            </h3>
            <p className="maestro-career-apply__success-text cursor-small">
              {careerApplyForm.successText}
            </p>
            <button type="button" className="maestro-career-apply__submit cursor-small" onClick={onClose}>
              {careerApplyForm.closeLabel}
            </button>
          </div>
        ) : (
          <form className="maestro-career-apply__form" onSubmit={handleSubmit}>
            <p className="maestro-career-apply__subtitle cursor-small">{careerApplyForm.subtitle}</p>

            <label className="maestro-career-apply__field" htmlFor="career-apply-name">
              <span className="maestro-career-apply__label cursor-small">
                {careerApplyForm.fullNameLabel}
              </span>
              <input
                id="career-apply-name"
                type="text"
                name="fullName"
                autoComplete="name"
                required
                value={form.fullName}
                placeholder={careerApplyForm.fullNamePlaceholder}
                onChange={(event) => setForm((current) => ({ ...current, fullName: event.target.value }))}
              />
            </label>

            <FileUploadField
              id="career-apply-cv"
              label={careerApplyForm.cvLabel}
              hint={careerApplyForm.cvHint}
              file={form.cv}
              required
              onChange={(cv) => setForm((current) => ({ ...current, cv }))}
            />

            <FileUploadField
              id="career-apply-cover-letter"
              label={careerApplyForm.coverLetterLabel}
              hint={careerApplyForm.coverLetterHint}
              file={form.coverLetter}
              required
              onChange={(coverLetter) => setForm((current) => ({ ...current, coverLetter }))}
            />

            <button type="submit" className="maestro-career-apply__submit cursor-small">
              {careerApplyForm.submitLabel}
              <Icon name="caret-right" weight="bold" />
            </button>
          </form>
        )}
      </aside>
    </>
  )
}
