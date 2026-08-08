"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ZoomImage } from "@/components/ui/ZoomImage";
import { RevealGroup, staggerItem } from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/constants";

const HEX_CLIP = "polygon(50% 0%, 100% 32%, 100% 100%, 0% 100%, 0% 32%)";

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 bg-ink py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          kicker="What We Do"
          title="Services Built for Your Big Day"
          description="From the first pre-wedding frame to the final printed album — every service is crafted to tell your story with a cinematic touch."
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.02] px-6 pb-8 pt-10 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div
                className="relative aspect-4/5 w-40 overflow-hidden ring-2 ring-white/70 transition-shadow duration-500 group-hover:ring-white sm:w-44"
                style={{ clipPath: HEX_CLIP }}
              >
                <ZoomImage
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full"
                  scale={1.18}
                />
              </div>

              <div
                className="mt-[-2px] w-40 py-2.5 text-center text-xs font-bold uppercase tracking-wide text-black sm:w-44"
                style={{ backgroundColor: service.color }}
              >
                {service.title}
              </div>

              <p className="mt-5 text-center text-sm leading-relaxed text-foreground/60">
                {service.description}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
