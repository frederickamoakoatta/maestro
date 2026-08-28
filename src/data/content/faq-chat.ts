import { faqs } from './resources/faqs'
import type { FaqChatQuickReply } from '../../types/faqChat'

export const faqChatCopy = {
  agentName: 'Maestro',
  headerTitle: 'Chat with Maestro',
  onlineStatus: 'We are online!',
  teaserGreeting: 'Hello — need help with Maestro FAQs?',
  teaserYes: 'Yes, please!',
  teaserNo: 'No, thanks.',
  welcomeMessage:
    'Hi there! I can help answer questions about Maestro — from platform features and customer experience to security, integrations and implementation.',
  inputPlaceholder: 'Enter your message...',
  sendLabel: 'Send message',
  openChatLabel: 'Open FAQ chat',
  minimizeLabel: 'Minimize chat',
  closeLabel: 'Close chat',
  typingLabel: 'Maestro is typing',
  errorMessage: 'Something went wrong. Please try again or visit our FAQs page.',
  viewAllFaqs: 'View all FAQs',
  viewAllFaqsHref: '/resources/faqs',
  contactTeam: 'Talk to our team',
  contactHref: '/contact',
}

export const starterQuickReplies: FaqChatQuickReply[] = [
  ...faqs.slice(0, 4).map((faq) => ({
    id: faq.id,
    label: faq.question,
  })),
  {
    id: 'contact',
    label: faqChatCopy.contactTeam,
    href: faqChatCopy.contactHref,
  },
]

export const followUpQuickReplies: FaqChatQuickReply[] = [
  ...faqs.slice(4, 7).map((faq) => ({
    id: faq.id,
    label: faq.question,
  })),
  {
    id: 'all-faqs',
    label: faqChatCopy.viewAllFaqs,
    href: faqChatCopy.viewAllFaqsHref,
  },
]
