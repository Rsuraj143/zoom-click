import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zoom-click.vercel.app"),
  title: "Zoom Clicks | Wedding & Pre-Wedding Photography in Berhampur, Odisha",
  description:
    "Zoom Clicks — cinematic wedding shoots, pre & post wedding photography, cinematography, video editing and album designing in Berhampur, Odisha. Capturing life's precious moments, one click at a time.",
  keywords: [
    "Zoom Clicks",
    "wedding photography Berhampur",
    "pre wedding shoot Odisha",
    "cinematography Berhampur",
    "wedding videographer Odisha",
  ],
  openGraph: {
    title: "Zoom Clicks | Wedding & Pre-Wedding Photography",
    description: "Capturing life's precious moments, one click at a time.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-foreground">
        {children}
      </body>
    </html>
  );
}
