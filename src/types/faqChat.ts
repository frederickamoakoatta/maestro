export type FaqChatRole = 'user' | 'assistant'

export type FaqChatView = 'teaser' | 'launcher' | 'open'

export interface FaqChatMessage {
  id: string
  role: FaqChatRole
  content: string
  createdAt: number
}

export interface FaqChatQuickReply {
  id: string
  label: string
  href?: string
}

export interface FaqChatHistoryItem {
  role: FaqChatRole
  content: string
}

export interface FaqChatRequest {
  message: string
  sessionId?: string
  history: FaqChatHistoryItem[]
}

export interface FaqChatResponse {
  reply: string
  sessionId?: string
  quickReplies?: FaqChatQuickReply[]
}

/** Emit Labs Chatbot API — POST /api/v1/bots/{bot}/chat */
export interface EmitChatRequest {
  client_id: string
  question: string
}

export interface EmitChatAction {
  type: 'contact'
  label: string
  href: string
}

export interface EmitChatResponse {
  interaction_id: string
  bot: string
  outcome: 'answered' | 'fallback'
  answer: string
  answered: boolean
  actions?: EmitChatAction[] | null
}
