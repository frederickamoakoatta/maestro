import type { FaqChatQuickReply } from '../../types/faqChat'

interface FaqChatQuickRepliesProps {
  replies: FaqChatQuickReply[]
  onSelect: (reply: FaqChatQuickReply) => void
  disabled?: boolean
}

export function FaqChatQuickReplies({ replies, onSelect, disabled }: FaqChatQuickRepliesProps) {
  if (!replies.length) return null

  return (
    <div className="maestro-faq-chat__quick-replies" aria-label="Suggested replies">
      {replies.map((reply) => (
        <button
          key={reply.id}
          type="button"
          className="maestro-faq-chat__quick-reply cursor-small"
          disabled={disabled}
          onClick={() => onSelect(reply)}
        >
          {reply.label}
        </button>
      ))}
    </div>
  )
}
