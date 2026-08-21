import { useEffect, useState } from 'react'
import type { FaqItem } from '../../types'
import { Icon } from '../ui/Icon'

interface FaqAccordionProps {
  items: FaqItem[]
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)

  useEffect(() => {
    setOpenId(items[0]?.id ?? null)
  }, [items])

  return (
    <div className="maestro-faq-list">
      {items.map((item, index) => {
        const isOpen = item.id === openId
        const panelId = `faq-panel-${item.id}`
        const buttonId = `faq-button-${item.id}`

        return (
          <article key={item.id} className={`maestro-faq-item${isOpen ? ' is-open' : ''}`}>
            <h3 className="maestro-faq-item__heading">
              <button
                id={buttonId}
                type="button"
                className="maestro-faq-item__trigger cursor-small"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span className="maestro-faq-item__index">{String(index + 1).padStart(2, '0')}</span>
                <span className="maestro-faq-item__question">{item.question}</span>
                <span className="maestro-faq-item__icon" aria-hidden="true">
                  <Icon name={isOpen ? 'minus' : 'plus'} weight="bold" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="maestro-faq-item__panel"
              hidden={!isOpen}
            >
              <p className="maestro-faq-item__answer cursor-small">{item.answer}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}
