type IconProps = {
  size?: number;
  className?: string;
};

export function InstagramIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M13.5 21v-7.2h2.4l.45-2.8h-2.85V9.2c0-.8.3-1.35 1.5-1.35h1.35V5.35C15.9 5.25 15 5.2 14.1 5.2c-2.4 0-4.05 1.45-4.05 4.1v2.7H7.6v2.8h2.45V21h3.45Z" />
    </svg>
  );
}

export function YoutubeIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M21.6 7.7a2.7 2.7 0 0 0-1.9-1.9C18 5.3 12 5.3 12 5.3s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C2 9.4 2 12 2 12s0 2.6.4 4.3a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.3.4-4.3s0-2.6-.4-4.3ZM10 15V9l5.2 3-5.2 3Z" />
    </svg>
  );
}
