"use client";

import { Camera, Clapperboard, BookImage, Sparkles } from "lucide-react";
import { Reveal, RevealGroup, staggerItem } from "@/components/ui/Reveal";
import { ZoomImage } from "@/components/ui/ZoomImage";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

const VALUES = [
  {
    icon: Camera,
    title: "Cinematic Storytelling",
    description: "Every frame composed like a still from a film, not just a photograph.",
  },
  {
    icon: Sparkles,
    title: "Candid Direction",
    description: "Genuine emotion first — we guide gently, we don't stage everything.",
  },
  {
    icon: Clapperboard,
    title: "Wedding Films",
    description: "Gimbal-smooth cinematography edited to the rhythm of your day.",
  },
  {
    icon: BookImage,
    title: "Premium Albums",
    description: "Frame-by-frame designed albums, printed to be held for years.",
  },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative aspect-4/5 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 sm:mx-0 mx-auto">
              <ZoomImage
                src="/images/about/about-1.svg"
                alt="Zoom Clicks behind the scenes"
                className="h-full w-full"
                overlay="none"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 h-28 w-28 rounded-2xl bg-linear-to-br from-zoom-crimson via-zoom-orange to-zoom-gold opacity-90 sm:-right-8 sm:h-36 sm:w-36" />
          </Reveal>

          <div>
            <Reveal>
              <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-zoom-gold">
                <span className="h-px w-8 bg-zoom-gold/70" />
                About Us
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                We Don&apos;t Just Take Photos —{" "}
                <span className="brand-gradient-text">We Frame Feelings.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
                Based in {SITE.city}, {SITE.state}, Zoom Clicks is built around
                one idea — that your wedding day deserves to be remembered the
                way it felt, not just the way it looked. From candid pre-wedding
                shoots to full cinematic wedding films, we bring a director&apos;s eye
                and a storyteller&apos;s patience to every frame.
              </p>
            </Reveal>

            <RevealGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {VALUES.map(({ icon: Icon, title, description }) => (
                <motion.div
                  key={title}
                  variants={staggerItem}
                  className="flex items-start gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-zoom-gold ring-1 ring-white/10">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-foreground/60">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
