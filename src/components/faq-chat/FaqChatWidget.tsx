import { useEffect, useRef } from 'react'
import { useFaqChat } from '../../hooks/useFaqChat'
import { FaqChatLauncher } from './FaqChatLauncher'
import { FaqChatPanel } from './FaqChatPanel'
import { FaqChatTeaser } from './FaqChatTeaser'

export function FaqChatWidget() {
  const {
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
  } = useFaqChat()

  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (view !== 'open') return
    const focusable = panelRef.current?.querySelector<HTMLElement>('textarea, button, a')
    focusable?.focus()
  }, [view])

  return (
    <div className="maestro-faq-chat" aria-label="FAQ assistant">
      {view === 'open' && (
        <div ref={panelRef}>
          <FaqChatPanel
            messages={messages}
            quickReplies={quickReplies}
            isLoading={isLoading}
            onMinimize={minimize}
            onClose={close}
            onSend={sendMessage}
            onSelectQuickReply={selectQuickReply}
          />
        </div>
      )}

      {view === 'teaser' && <FaqChatTeaser onAccept={acceptTeaser} onDismiss={dismissTeaser} />}

      {(view === 'teaser' || view === 'launcher') && (
        <FaqChatLauncher hasUnread={hasUnread} onClick={openChat} />
      )}
    </div>
  )
}
