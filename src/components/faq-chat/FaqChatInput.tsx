import { useState, type FormEvent, type KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import { faqChatCopy } from '../../data/content/faq-chat'
import { Icon } from '../ui/Icon'

interface FaqChatInputProps {
  onSend: (message: string) => void
  disabled?: boolean
}

export function FaqChatInput({ onSend, disabled }: FaqChatInputProps) {
  const [value, setValue] = useState('')

  const submit = () => {
    const trimmed = value.trim()
    if (!trimmed || disabled) return
    onSend(trimmed)
    setValue('')
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    submit()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      submit()
    }
  }

  return (
    <form className="maestro-faq-chat__composer" onSubmit={handleSubmit}>
      <div className="maestro-faq-chat__composer-row">
        <textarea
          className="maestro-faq-chat__input cursor-small"
          placeholder={faqChatCopy.inputPlaceholder}
          value={value}
          rows={1}
          disabled={disabled}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Message"
        />
        <button
          type="submit"
          className="maestro-faq-chat__send cursor-small"
          aria-label={faqChatCopy.sendLabel}
          disabled={disabled || !value.trim()}
        >
          <Icon name="arrow-up" weight="bold" />
        </button>
      </div>
      <Link to={faqChatCopy.viewAllFaqsHref} className="maestro-faq-chat__faqs-link cursor-small">
        {faqChatCopy.viewAllFaqs}
      </Link>
    </form>
  )
}
