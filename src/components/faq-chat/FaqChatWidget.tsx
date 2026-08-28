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
  const isOpen = view === 'open'

  useEffect(() => {
    if (!isOpen) return
    const focusable = panelRef.current?.querySelector<HTMLElement>('textarea, button, a')
    focusable?.focus()
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const mediaQuery = window.matchMedia('(max-width: 991px)')
    const syncScrollLock = () => {
      document.body.style.overflow = mediaQuery.matches ? 'hidden' : ''
    }

    syncScrollLock()
    mediaQuery.addEventListener('change', syncScrollLock)

    return () => {
      mediaQuery.removeEventListener('change', syncScrollLock)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="maestro-faq-chat__backdrop"
          aria-label="Close chat"
          onClick={minimize}
        />
      )}

      <div
        className={`maestro-faq-chat${isOpen ? ' is-open' : ''}`}
        aria-label="FAQ assistant"
      >
        {isOpen && (
          <div ref={panelRef} className="maestro-faq-chat__panel-wrap">
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
    </>
  )
}
