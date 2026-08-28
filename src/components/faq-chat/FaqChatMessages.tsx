import { useEffect, useRef } from 'react'
import type { FaqChatMessage as FaqChatMessageType, FaqChatQuickReply } from '../../types/faqChat'
import { FaqChatMessage } from './FaqChatMessage'
import { FaqChatQuickReplies } from './FaqChatQuickReplies'
import { faqChatCopy } from '../../data/content/faq-chat'

interface FaqChatMessagesProps {
  messages: FaqChatMessageType[]
  quickReplies: FaqChatQuickReply[]
  isLoading: boolean
  onSelectQuickReply: (reply: FaqChatQuickReply) => void
}

export function FaqChatMessages({ messages, quickReplies, isLoading, onSelectQuickReply }: FaqChatMessagesProps) {
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, isLoading, quickReplies])

  return (
    <div className="maestro-faq-chat__messages" aria-live="polite">
      {messages.map((message) => (
        <FaqChatMessage key={message.id} message={message} />
      ))}

      {isLoading && (
        <div className="maestro-faq-chat__typing" aria-label={faqChatCopy.typingLabel}>
          <span />
          <span />
          <span />
        </div>
      )}

      {!isLoading && (
        <FaqChatQuickReplies replies={quickReplies} onSelect={onSelectQuickReply} />
      )}

      <div ref={endRef} />
    </div>
  )
}
