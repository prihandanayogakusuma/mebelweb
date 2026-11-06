import { trackEvent } from '../../lib/analytics'
import { generalMessage, whatsappUrl } from '../../lib/whatsapp'
import { WhatsAppIcon } from '../common/WhatsAppButton'

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl(generalMessage())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      onClick={() => trackEvent('whatsapp_click', { source: 'floating' })}
      className="fixed right-4 bottom-4 z-30 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-charcoal/25 transition-colors hover:bg-whatsapp-dark md:right-6 md:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  )
}
