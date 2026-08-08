import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
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
  NAV_LINKS,
  PHONE_DISPLAY,
  SITE,
  SOCIALS,
  SERVICES,
} from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="relative border-t border-ink-line bg-ink">
      <div className="h-1.5 w-full bg-linear-to-r from-zoom-crimson via-zoom-orange via-zoom-gold via-zoom-green to-zoom-blue" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-start gap-4">
            <Logo className="h-16 w-auto" />
            <p className="text-sm text-foreground/60 max-w-xs">
              {SITE.tagline}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <SocialIcon href={SOCIALS.instagram.url} label="Instagram">
                <InstagramIcon size={18} />
              </SocialIcon>
              <SocialIcon href={SOCIALS.facebook.url} label="Facebook">
                <FacebookIcon size={18} />
              </SocialIcon>
              <SocialIcon href={SOCIALS.youtube.url} label="YouTube">
                <YoutubeIcon size={18} />
              </SocialIcon>
              <SocialIcon href={EMAIL_LINK} label="Email">
                <Mail size={18} />
              </SocialIcon>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-zoom-gold mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-zoom-gold mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              {SERVICES.map((service) => (
                <li key={service.title}>{service.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-zoom-gold mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm text-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-zoom-blue" />
                <span>
                  {ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-zoom-green" />
                <a href={CALL_LINK} className="hover:text-foreground transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-zoom-crimson" />
                <a href={EMAIL_LINK} className="hover:text-foreground transition-colors break-all">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-line pt-8 text-xs text-foreground/40 sm:flex-row">
          <p>© {year} Zoom Clicks. All rights reserved.</p>
          <p>Berhampur (GM), Odisha</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-line text-foreground/70 transition-all hover:-translate-y-0.5 hover:border-zoom-gold hover:text-zoom-gold"
    >
      {children}
    </a>
  );
}
