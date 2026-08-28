import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { faqChatCopy, followUpQuickReplies, starterQuickReplies } from '../data/content/faq-chat'
import { sendFaqChatMessage } from '../services/faqChatApi'
import type { FaqChatMessage, FaqChatQuickReply, FaqChatView } from '../types/faqChat'

const TEASER_DISMISSED_KEY = 'maestro-faq-chat-teaser-dismissed'
const SESSION_ID_KEY = 'maestro-faq-chat-session-id'

function createMessage(role: FaqChatMessage['role'], content: string): FaqChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    role,
    content,
    createdAt: Date.now(),
  }
}

function readTeaserDismissed(): boolean {
  try {
    return sessionStorage.getItem(TEASER_DISMISSED_KEY) === '1'
  } catch {
    return false
  }
}

function readSessionId(): string | undefined {
  try {
    return sessionStorage.getItem(SESSION_ID_KEY) ?? undefined
  } catch {
    return undefined
  }
}

function persistSessionId(sessionId?: string) {
  if (!sessionId) return
  try {
    sessionStorage.setItem(SESSION_ID_KEY, sessionId)
  } catch {
    // ignore storage errors
  }
}

export function useFaqChat() {
  const navigate = useNavigate()
  const [view, setView] = useState<FaqChatView>(() => (readTeaserDismissed() ? 'launcher' : 'teaser'))
  const [messages, setMessages] = useState<FaqChatMessage[]>([])
  const [quickReplies, setQuickReplies] = useState<FaqChatQuickReply[]>([])
  const [sessionId, setSessionId] = useState<string | undefined>(() => readSessionId())
  const [isLoading, setIsLoading] = useState(false)
  const [hasUnread, setHasUnread] = useState(() => !readTeaserDismissed())
  const [hasWelcomed, setHasWelcomed] = useState(false)
  const welcomeRequested = useRef(false)

  const dismissTeaser = useCallback(() => {
    try {
      sessionStorage.setItem(TEASER_DISMISSED_KEY, '1')
    } catch {
      // ignore storage errors
    }
    setView('launcher')
    setHasUnread(false)
  }, [])

  const requestWelcome = useCallback(async () => {
    if (welcomeRequested.current || hasWelcomed) return
    welcomeRequested.current = true
    setIsLoading(true)

    try {
      const response = await sendFaqChatMessage({
        message: '__welcome__',
        sessionId,
        history: [],
      })

      setSessionId(response.sessionId)
      persistSessionId(response.sessionId)
      setMessages([createMessage('assistant', response.reply)])
      setQuickReplies(response.quickReplies ?? starterQuickReplies)
      setHasWelcomed(true)
    } catch {
      setMessages([createMessage('assistant', faqChatCopy.errorMessage)])
      setQuickReplies(starterQuickReplies)
    } finally {
      setIsLoading(false)
    }
  }, [hasWelcomed, sessionId])

  const openChat = useCallback(() => {
    setView('open')
    setHasUnread(false)
    void requestWelcome()
  }, [requestWelcome])

  const acceptTeaser = useCallback(() => {
    try {
      sessionStorage.setItem(TEASER_DISMISSED_KEY, '1')
    } catch {
      // ignore storage errors
    }
    openChat()
  }, [openChat])

  const minimize = useCallback(() => {
    setView('launcher')
  }, [])

  const close = useCallback(() => {
    setView('launcher')
  }, [])

  const dispatchMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim()
      if (!trimmed || isLoading) return

      const userMessage = createMessage('user', trimmed)
      const history = [...messages, userMessage].map((message) => ({
        role: message.role,
        content: message.content,
      }))

      setMessages((current) => [...current, userMessage])
      setQuickReplies([])
      setIsLoading(true)

      try {
        const response = await sendFaqChatMessage({
          message: trimmed,
          sessionId,
          history,
        })

        setSessionId(response.sessionId)
        persistSessionId(response.sessionId)
        setMessages((current) => [...current, createMessage('assistant', response.reply)])
        setQuickReplies(response.quickReplies ?? followUpQuickReplies)
      } catch {
        setMessages((current) => [...current, createMessage('assistant', faqChatCopy.errorMessage)])
        setQuickReplies(starterQuickReplies)
      } finally {
        setIsLoading(false)
      }
    },
    [isLoading, messages, sessionId],
  )

  const sendMessage = useCallback(
    (text: string) => {
      void dispatchMessage(text)
    },
    [dispatchMessage],
  )

  const selectQuickReply = useCallback(
    (reply: FaqChatQuickReply) => {
      if (reply.href) {
        navigate(reply.href)
        minimize()
        return
      }

      void dispatchMessage(reply.label)
    },
    [dispatchMessage, minimize, navigate],
  )

  useEffect(() => {
    if (view !== 'open') return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        minimize()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [minimize, view])

  return {
    view,
    messages,
    quickReplies,
    isLoading,
    hasUnread,
    openChat,
    acceptTeaser,
    dismissTeaser,
    minimize,
    close,
    sendMessage,
    selectQuickReply,
  }
}
