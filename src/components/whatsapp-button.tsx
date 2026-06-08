import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Start WhatsApp chat instantly"
      title="Chat on WhatsApp instantly"
      className="fixed bottom-6 right-6 z-[60] flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(37,211,102,0.45)] transition-transform hover:scale-105 sm:px-5"
    >
      <MessageCircle className="h-6 w-6 shrink-0" />
      <span className="hidden sm:inline">Chat Instantly</span>
    </a>
  );
}
