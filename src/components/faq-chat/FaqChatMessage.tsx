import type { FaqChatMessage as FaqChatMessageType } from '../../types/faqChat'

interface FaqChatMessageProps {
  message: FaqChatMessageType
}

export function FaqChatMessage({ message }: FaqChatMessageProps) {
  const isUser = message.role === 'user'

  return (
    <div className={`maestro-faq-chat__message${isUser ? ' is-user' : ' is-assistant'}`}>
      <div className="maestro-faq-chat__bubble cursor-small">{message.content}</div>
    </div>
  )
}
