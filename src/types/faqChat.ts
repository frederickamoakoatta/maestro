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
