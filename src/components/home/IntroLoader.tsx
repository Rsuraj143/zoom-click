"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { SITE } from "@/lib/constants";
import { INTRO_TOTAL_MS, INTRO_EXIT_MS } from "@/lib/motion";

export function IntroLoader({ onComplete }: { onComplete?: () => void }) {
  const [show, setShow] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!reduceMotion) {
      document.body.style.overflow = "hidden";
    }
    const timer = setTimeout(
      () => setShow(false),
      reduceMotion ? 0 : INTRO_TOTAL_MS - INTRO_EXIT_MS
    );
    return () => clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "";
        onComplete?.();
      }}
    >
      {show && (
        <motion.div
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-ink overflow-hidden"
          exit={{ scale: 7, opacity: 0 }}
          transition={{ duration: INTRO_EXIT_MS / 1000, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 vignette" />
          <div className="absolute inset-0 film-grain opacity-30" />

          <motion.div
            className="absolute h-64 w-64 rounded-full bg-linear-to-br from-zoom-crimson via-zoom-gold to-zoom-blue blur-3xl"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.35, scale: [0.6, 1.1, 1] }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.55 }}
            animate={{ opacity: 1, scale: [0.55, 1.06, 1] }}
            transition={{ duration: 1, times: [0, 0.7, 1], ease: "easeOut" }}
            className="relative"
          >
            <Logo
              priority
              className="h-40 w-auto drop-shadow-[0_0_50px_rgba(0,0,0,0.7)] sm:h-56"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="relative mt-6 text-[11px] sm:text-sm text-center tracking-[0.3em] uppercase text-foreground/50 px-6"
          >
            {SITE.tagline}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
