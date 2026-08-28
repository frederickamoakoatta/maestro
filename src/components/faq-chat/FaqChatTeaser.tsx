import { faqChatCopy } from '../../data/content/faq-chat'

interface FaqChatTeaserProps {
  onAccept: () => void
  onDismiss: () => void
}

export function FaqChatTeaser({ onAccept, onDismiss }: FaqChatTeaserProps) {
  return (
    <div className="maestro-faq-chat__teaser" role="complementary" aria-label="FAQ chat invitation">
      <p className="maestro-faq-chat__teaser-text cursor-small">{faqChatCopy.teaserGreeting}</p>
      <div className="maestro-faq-chat__teaser-actions">
        <button type="button" className="maestro-faq-chat__teaser-link cursor-small" onClick={onAccept}>
          {faqChatCopy.teaserYes}
        </button>
        <button type="button" className="maestro-faq-chat__teaser-link cursor-small" onClick={onDismiss}>
          {faqChatCopy.teaserNo}
        </button>
      </div>
    </div>
  )
}
