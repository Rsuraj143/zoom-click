"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { NeuralCanvas } from "@/components/ui/NeuralCanvas";
import { WHATSAPP_LINK, SITE } from "@/lib/constants";
import { INTRO_TOTAL_MS } from "@/lib/motion";

const introDelay = INTRO_TOTAL_MS / 1000 - 0.35;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const baseDelay = reduceMotion ? 0 : introDelay;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: reduceMotion ? 1 : 1.22, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, delay: baseDelay, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0 hero-shimmer" />
        <div className="absolute hero-glow" />
        <NeuralCanvas className="absolute inset-0 z-1 opacity-90" />
        <div className="hero-rings absolute z-1" aria-hidden>
          <div className="hero-ring absolute inset-0" />
          <div className="hero-ring absolute inset-0" />
          <div className="hero-ring absolute inset-0" />
          <div className="hero-ring absolute inset-0" />
          <div
            className="hero-node absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              top: "50%",
              left: "50%",
              background: "linear-gradient(135deg, var(--color-zoom-crimson), var(--color-zoom-blue))",
            }}
          />
          <div
            className="hero-node absolute h-2.5 w-2.5 rounded-full bg-zoom-gold"
            style={{ top: "18%", right: "28%" }}
          />
          <div
            className="hero-node absolute h-2 w-2 rounded-full bg-zoom-green"
            style={{ top: "70%", left: "16%" }}
          />
        </div>
      </motion.div>

      <div className="absolute inset-0 hero-veil" />
      <div className="absolute inset-0 vignette" />
      <div className="absolute inset-0 film-grain opacity-20" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 py-32 sm:px-8 lg:px-12">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: baseDelay + 0.15, duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-zoom-gold"
        >
          <span className="h-px w-10 bg-zoom-gold/70" />
          Wedding · Pre-Wedding · Cinematography
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: baseDelay + 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display max-w-4xl text-balance text-4xl font-semibold leading-[1.08] sm:text-6xl lg:text-7xl"
        >
          {SITE.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: baseDelay + 0.5, duration: 0.8 }}
          className="mt-6 max-w-xl text-base text-foreground/75 sm:text-lg"
        >
          Zoom Clicks is a wedding &amp; pre-wedding photography and
          cinematography studio based in {SITE.city}, {SITE.state} — turning
          your day into a film worth replaying.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: baseDelay + 0.68, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            Book on WhatsApp
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-zoom-gold hover:text-zoom-gold"
          >
            View Our Work
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        aria-label="Scroll to explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: baseDelay + 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-foreground/60"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </motion.a>
    </section>
  );
}
