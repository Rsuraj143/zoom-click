import { Reveal } from "./Reveal";
import clsx from "clsx";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <Reveal>
        <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-zoom-gold">
          <span className="h-px w-8 bg-zoom-gold/70" />
          {kicker}
          {align === "center" && <span className="h-px w-8 bg-zoom-gold/70" />}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-balance">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={clsx(
              "max-w-2xl text-base sm:text-lg text-foreground/70",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
