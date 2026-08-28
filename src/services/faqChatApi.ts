import { faqChatCopy, followUpQuickReplies, starterQuickReplies } from '../data/content/faq-chat'
import { faqs } from '../data/content/resources/faqs'
import type { FaqChatRequest, FaqChatResponse } from '../types/faqChat'

const API_URL = import.meta.env.VITE_FAQ_CHAT_API_URL as string | undefined

function normalizeText(value: string): string {
  return value.toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim()
}

function findFaqMatch(message: string) {
  const normalized = normalizeText(message)

  return faqs.find((faq) => {
    const question = normalizeText(faq.question)
    const answer = normalizeText(faq.answer)
    return (
      normalized.includes(question) ||
      question.includes(normalized) ||
      normalized.split(' ').some((word) => word.length > 3 && (question.includes(word) || answer.includes(word)))
    )
  })
}

async function sendMockFaqChatMessage(payload: FaqChatRequest): Promise<FaqChatResponse> {
  await new Promise((resolve) => window.setTimeout(resolve, 600))

  const isWelcome = payload.message === '__welcome__'
  if (isWelcome) {
    return {
      reply: faqChatCopy.welcomeMessage,
      sessionId: payload.sessionId ?? `mock-${Date.now()}`,
      quickReplies: starterQuickReplies,
    }
  }

  const matched = findFaqMatch(payload.message)
  if (matched) {
    return {
      reply: matched.answer,
      sessionId: payload.sessionId ?? `mock-${Date.now()}`,
      quickReplies: followUpQuickReplies,
    }
  }

  return {
    reply:
      'I could not find a precise answer to that. You can browse all FAQs on our website or contact our team for personalised help.',
    sessionId: payload.sessionId ?? `mock-${Date.now()}`,
    quickReplies: [
      { id: 'all-faqs', label: faqChatCopy.viewAllFaqs, href: faqChatCopy.viewAllFaqsHref },
      { id: 'contact', label: faqChatCopy.contactTeam, href: faqChatCopy.contactHref },
    ],
  }
}

async function sendRestFaqChatMessage(payload: FaqChatRequest): Promise<FaqChatResponse> {
  const response = await fetch(API_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`FAQ chat API responded with ${response.status}`)
  }

  return (await response.json()) as FaqChatResponse
}

export async function sendFaqChatMessage(payload: FaqChatRequest): Promise<FaqChatResponse> {
  if (!API_URL) {
    return sendMockFaqChatMessage(payload)
  }

  return sendRestFaqChatMessage(payload)
}

export function isFaqChatApiConfigured(): boolean {
  return Boolean(API_URL)
}
