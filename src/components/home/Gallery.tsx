"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ZoomImage } from "@/components/ui/ZoomImage";
import { GALLERY_ITEMS, type GalleryItem } from "@/lib/constants";

const CATEGORIES: Array<GalleryItem["category"] | "All"> = [
  "All",
  "Wedding",
  "Pre-Wedding",
  "Portraits",
  "Cinematic",
];

function spanClasses(span?: GalleryItem["span"]) {
  return clsx(
    span === "wide" && "sm:col-span-2",
    span === "tall" && "row-span-2",
    span === "big" && "sm:col-span-2 row-span-2"
  );
}

export function Gallery() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");

  const items = useMemo(
    () =>
      active === "All"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === active),
    [active]
  );

  return (
    <section id="gallery" className="relative scroll-mt-24 bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          kicker="Our Work"
          title="Moments We've Framed"
          description="A glimpse into the weddings, pre-weddings and portraits we've had the honour of capturing across Berhampur and beyond."
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={clsx(
                "rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors",
                active === category
                  ? "bg-zoom-gold text-black"
                  : "border border-white/15 text-foreground/70 hover:border-zoom-gold/60 hover:text-zoom-gold"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-14 grid grid-cols-2 auto-rows-[160px] gap-4 sm:auto-rows-[220px] sm:gap-5 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.div
                layout
                key={item.src}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={spanClasses(item.span)}
              >
                <ZoomImage
                  src={item.src}
                  alt={item.alt}
                  overlay="strong"
                  className="h-full w-full rounded-xl"
                >
                  <span className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/0 transition-colors duration-500 group-hover:text-white/90">
                    {item.category}
                  </span>
                </ZoomImage>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
