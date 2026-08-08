export const SITE = {
  name: "Zoom Clicks",
  tagline: "Capturing life's precious moments, one click at a time.",
  city: "Berhampur",
  state: "Odisha",
};

export const PHONE_DISPLAY = "8917434880";
export const PHONE_INTL = "918917434880";

export const WHATSAPP_MESSAGE =
  "Hi Zoom Clicks! I'd like to enquire about booking a photoshoot.";

export const WHATSAPP_LINK = `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const CALL_LINK = `tel:+${PHONE_INTL}`;

export const EMAIL = "zoomclicks03@gmail.com";
export const EMAIL_LINK = `mailto:${EMAIL}`;

export const ADDRESS_LINES = [
  "Digapahandi Road, Opp. of Duduma Colony Bustand,",
  "Near 1st Gate, Berhampur (GM), Odisha.",
];

export const ADDRESS_FULL =
  "Digapahandi Road, Opp of Duduma Colony Bustand, Near 1st Gate, Berhampur (GM), Odisha";

export const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS_FULL
)}&output=embed`;

export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS_FULL
)}`;

export const SOCIALS = {
  instagram: {
    handle: "@zoom._.clicks",
    url: "https://instagram.com/zoom._.clicks",
  },
  facebook: {
    handle: "Zoom Clicks",
    url: "https://facebook.com/",
  },
  youtube: {
    handle: "@ZOOMCLICKS7046",
    url: "https://youtube.com/@ZOOMCLICKS7046",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type ServiceItem = {
  title: string;
  description: string;
  image: string;
  color: string;
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Pre & Post Wedding",
    description:
      "Dreamy outdoor stories that capture the romance before and after the big day.",
    image: "/images/services/pre-post-wedding.svg",
    color: "var(--color-zoom-blue)",
  },
  {
    title: "Pre Birthday",
    description:
      "Playful, colourful shoots that freeze the little milestones worth remembering.",
    image: "/images/services/pre-birthday.svg",
    color: "var(--color-zoom-purple)",
  },
  {
    title: "Wedding Shoot",
    description:
      "Every ritual, every emotion — documented with a candid, cinematic eye.",
    image: "/images/services/wedding-shoot.svg",
    color: "var(--color-zoom-green)",
  },
  {
    title: "Cinematography",
    description:
      "Gimbal-smooth, story-led wedding films that feel like a movie of your own.",
    image: "/images/services/cinematography.svg",
    color: "var(--color-zoom-gold)",
  },
  {
    title: "Video Editing",
    description:
      "Colour-graded, music-timed edits that turn raw footage into a keepsake.",
    image: "/images/services/video-editing.svg",
    color: "var(--color-zoom-crimson)",
  },
  {
    title: "Album Designing",
    description:
      "Premium printed albums, laid out frame by frame to relive the day forever.",
    image: "/images/services/album-designing.svg",
    color: "var(--color-zoom-orange)",
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  category: "Wedding" | "Pre-Wedding" | "Portraits" | "Cinematic";
  span?: "wide" | "tall" | "big";
};

export const GALLERY_ITEMS: GalleryItem[] = [
  { src: "/images/gallery/01.svg", alt: "Wedding couple portrait", category: "Wedding", span: "tall" },
  { src: "/images/gallery/02.svg", alt: "Pre-wedding couple in a field", category: "Pre-Wedding", span: "wide" },
  { src: "/images/gallery/03.svg", alt: "Candid wedding ritual moment", category: "Wedding" },
  { src: "/images/gallery/04.svg", alt: "Portrait session", category: "Portraits" },
  { src: "/images/gallery/05.svg", alt: "Cinematic behind the scenes", category: "Cinematic", span: "tall" },
  { src: "/images/gallery/06.svg", alt: "Pre-wedding sunset shoot", category: "Pre-Wedding" },
  { src: "/images/gallery/07.svg", alt: "Wedding celebration", category: "Wedding", span: "wide" },
  { src: "/images/gallery/08.svg", alt: "Portrait close up", category: "Portraits", span: "tall" },
];
