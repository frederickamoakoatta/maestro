import { Icon } from '../ui/Icon'

interface FaqChatLauncherProps {
  hasUnread: boolean
  onClick: () => void
}

export function FaqChatLauncher({ hasUnread, onClick }: FaqChatLauncherProps) {
  return (
    <button
      type="button"
      className="maestro-faq-chat__launcher cursor-small"
      aria-label="Open FAQ chat"
      onClick={onClick}
    >
      <Icon name="chats-circle" weight="fill" />
      {hasUnread && <span className="maestro-faq-chat__badge" aria-hidden="true">1</span>}
    </button>
  )
}
