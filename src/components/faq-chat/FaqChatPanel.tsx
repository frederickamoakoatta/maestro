import type { FaqChatMessage as FaqChatMessageType, FaqChatQuickReply } from '../../types/faqChat'
import { FaqChatHeader } from './FaqChatHeader'
import { FaqChatInput } from './FaqChatInput'
import { FaqChatMessages } from './FaqChatMessages'

interface FaqChatPanelProps {
  messages: FaqChatMessageType[]
  quickReplies: FaqChatQuickReply[]
  isLoading: boolean
  onMinimize: () => void
  onClose: () => void
  onSend: (message: string) => void
  onSelectQuickReply: (reply: FaqChatQuickReply) => void
}

export function FaqChatPanel({
  messages,
  quickReplies,
  isLoading,
  onMinimize,
  onClose,
  onSend,
  onSelectQuickReply,
}: FaqChatPanelProps) {
  return (
    <div
      className="maestro-faq-chat__panel"
      role="dialog"
      aria-modal="true"
      aria-label="FAQ chat"
    >
      <FaqChatHeader onMinimize={onMinimize} onClose={onClose} />
      <FaqChatMessages
        messages={messages}
        quickReplies={quickReplies}
        isLoading={isLoading}
        onSelectQuickReply={onSelectQuickReply}
      />
      <FaqChatInput onSend={onSend} disabled={isLoading} />
    </div>
  )
}
