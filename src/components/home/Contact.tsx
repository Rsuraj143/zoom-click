"use client";

import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
} from "@/components/ui/BrandIcons";
import {
  ADDRESS_LINES,
  CALL_LINK,
  EMAIL,
  EMAIL_LINK,
  MAP_EMBED_SRC,
  MAP_LINK,
  PHONE_DISPLAY,
  SOCIALS,
  WHATSAPP_LINK,
} from "@/lib/constants";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          kicker="Get In Touch"
          title="Let's Plan Your Shoot"
          description="Reach out on WhatsApp for the fastest response, or drop by our studio in Berhampur."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
            >
              Chat on WhatsApp
            </a>

            <div className="flex flex-col gap-5 text-sm text-foreground/75">
              <a href={CALL_LINK} className="flex items-center gap-4 hover:text-foreground transition-colors">
                <IconBadge color="var(--color-zoom-green)">
                  <Phone size={18} />
                </IconBadge>
                <span>{PHONE_DISPLAY}</span>
              </a>
              <a href={EMAIL_LINK} className="flex items-center gap-4 hover:text-foreground transition-colors">
                <IconBadge color="var(--color-zoom-crimson)">
                  <Mail size={18} />
                </IconBadge>
                <span className="break-all">{EMAIL}</span>
              </a>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:text-foreground transition-colors"
              >
                <IconBadge color="var(--color-zoom-blue)">
                  <MapPin size={18} />
                </IconBadge>
                <span>
                  {ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </a>
            </div>

            <div className="mt-2 flex items-center gap-3 border-t border-white/10 pt-6">
              <SocialLink href={SOCIALS.instagram.url}>
                <InstagramIcon size={18} />
              </SocialLink>
              <SocialLink href={SOCIALS.facebook.url}>
                <FacebookIcon size={18} />
              </SocialLink>
              <SocialLink href={SOCIALS.youtube.url}>
                <YoutubeIcon size={18} />
              </SocialLink>
              <span className="ml-2 text-xs text-foreground/50">
                {SOCIALS.instagram.handle} · {SOCIALS.youtube.handle}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Zoom Clicks location"
              src={MAP_EMBED_SRC}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-ink/90 px-4 py-2 text-xs font-semibold text-foreground shadow-lg"
            >
              Open in Maps <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>
      </div>

      <div className="mt-20 h-1.5 w-full bg-linear-to-r from-zoom-purple via-zoom-blue via-zoom-green via-zoom-gold via-zoom-orange to-zoom-crimson" />
    </section>
  );
}

function IconBadge({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10"
      style={{ color }}
    >
      {children}
    </span>
  );
}

function SocialLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-foreground/70 transition-all hover:-translate-y-0.5 hover:border-zoom-gold hover:text-zoom-gold"
    >
      {children}
    </a>
  );
}
