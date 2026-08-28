import { faqChatCopy } from '../../data/content/faq-chat'
import { Icon } from '../ui/Icon'

interface FaqChatHeaderProps {
  onMinimize: () => void
  onClose: () => void
}

export function FaqChatHeader({ onMinimize, onClose }: FaqChatHeaderProps) {
  return (
    <div className="maestro-faq-chat__header">
      <div className="maestro-faq-chat__header-top">
        <div className="maestro-faq-chat__agent">
          <span className="maestro-faq-chat__avatar" aria-hidden="true">
            <Icon name="chats-circle" weight="fill" />
          </span>
          <div>
            <p className="maestro-faq-chat__agent-name cursor-small">{faqChatCopy.headerTitle}</p>
            <p className="maestro-faq-chat__agent-status cursor-small">{faqChatCopy.onlineStatus}</p>
          </div>
        </div>
        <div className="maestro-faq-chat__header-actions">
          <button
            type="button"
            className="maestro-faq-chat__icon-btn cursor-small"
            aria-label={faqChatCopy.minimizeLabel}
            onClick={onMinimize}
          >
            <Icon name="caret-down" weight="bold" />
          </button>
          <button
            type="button"
            className="maestro-faq-chat__icon-btn cursor-small"
            aria-label={faqChatCopy.closeLabel}
            onClick={onClose}
          >
            <Icon name="x" weight="bold" />
          </button>
        </div>
      </div>
    </div>
  )
}
