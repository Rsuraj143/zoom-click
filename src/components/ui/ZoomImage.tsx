"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import clsx from "clsx";

type ZoomImageProps = {
  src: string;
  alt: string;
  className?: string;
  overlay?: "soft" | "strong" | "none";
  scale?: number;
  children?: ReactNode;
};

export function ZoomImage({
  src,
  alt,
  className,
  overlay = "soft",
  scale = 1.12,
  children,
}: ZoomImageProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={clsx("group relative overflow-hidden bg-ink-soft", className)}
      role="img"
      aria-label={alt}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
        whileHover={reduceMotion ? undefined : { scale }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />
      {overlay !== "none" && (
        <div
          className={clsx(
            "absolute inset-0 pointer-events-none",
            overlay === "strong"
              ? "bg-linear-to-t from-black/85 via-black/20 to-transparent"
              : "bg-linear-to-t from-black/50 via-transparent to-transparent"
          )}
        />
      )}
      {children}
    </div>
  );
}
