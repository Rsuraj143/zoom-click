"use client";

import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Zoom Clicks on WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group fixed bottom-6 right-6 z-50 flex items-center"
    >
      <span className="mr-3 hidden sm:inline-block whitespace-nowrap rounded-full bg-ink/90 border border-ink-line px-3 py-1.5 text-xs font-medium text-foreground opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
        Chat with us
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
        <svg
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="#0b0b0b"
          className="relative"
          aria-hidden
        >
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.34.68 4.52 1.86 6.37L4 29l7.83-1.82A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3Zm0 21.8a9.7 9.7 0 0 1-4.95-1.36l-.35-.21-4.53 1.05 1.08-4.41-.23-.36A9.75 9.75 0 0 1 6.2 15c0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8Zm5.36-7.34c-.29-.15-1.72-.85-1.98-.94-.27-.1-.46-.15-.66.15-.19.29-.76.94-.93 1.13-.17.19-.34.22-.63.07-1.72-.86-2.85-1.53-3.99-3.47-.3-.52.3-.48.86-1.6.1-.19.05-.36-.03-.5-.09-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.5-.17 0-.36-.02-.56-.02-.19 0-.5.07-.76.36-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.19 2.03 3.1 4.93 4.22 2.05.79 2.85.86 3.88.71.62-.09 1.72-.7 1.96-1.38.24-.67.24-1.24.17-1.38-.07-.14-.27-.22-.56-.36Z" />
        </svg>
      </span>
    </motion.a>
  );
}
