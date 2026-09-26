import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/content";
import { WhatsAppIcon } from "./SocialIcons";

/**
 * Floating WhatsApp chat button, rendered once in the root layout so it shows on every page.
 * The committee number is messages-only, so the number itself is never shown as text.
 * Positioned bottom-right, offset by the device safe-area insets on notched phones.
 * (No back-to-top button exists on the site; if one is added, offset it above this button.)
 */
export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(WHATSAPP_MESSAGES.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with the committee on WhatsApp (messages only)"
      title="Chat with the committee on WhatsApp (messages only)"
      data-floating-whatsapp
      className="group fixed z-[60] flex items-center gap-2 bottom-[calc(1rem+env(safe-area-inset-bottom))] right-[calc(1rem+env(safe-area-inset-right))] md:bottom-[calc(1.5rem+env(safe-area-inset-bottom))] md:right-[calc(1.5rem+env(safe-area-inset-right))] print:hidden"
    >
      <span
        aria-hidden
        className="pointer-events-none hidden rounded-full bg-white px-3 py-1.5 text-sm font-medium text-[#128C7E] shadow-lg opacity-0 translate-x-2 transition-all duration-200 md:inline-block md:group-hover:opacity-100 md:group-hover:translate-x-0 md:group-focus-visible:opacity-100 md:group-focus-visible:translate-x-0"
      >
        Chat with us
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 ring-1 ring-black/5 transition-transform duration-200 group-hover:scale-105 group-hover:bg-[#1ebe5a] group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-white motion-reduce:transition-none motion-reduce:group-hover:scale-100">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
    </a>
  );
}
