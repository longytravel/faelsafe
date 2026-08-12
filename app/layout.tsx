import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

/**
 * Faelsafe's own display face. Loaded through next/font/local rather than a raw
 * @font-face rule so the URL is rewritten correctly under a basePath (GitHub
 * Pages) as well as at the domain root (Vercel).
 */
const neuropolitical = localFont({
  src: "../public/faelsafe/neuropolitical.ttf",
  variable: "--font-neuropolitical",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faelsafe × Vibe Coding | Software built in hours, not months",
  description:
    "A working demonstration for Faelsafe Life Safety Ltd: what vibe coding is in plain English, ten things we could build to win Faelsafe more work, and an honest review of faelsafe.co.uk with a redesigned homepage you can click through.",
  openGraph: {
    title: "Faelsafe × Vibe Coding",
    description:
      "Ten commercial ideas, a plain-English explainer, and a rebuilt faelsafe.co.uk homepage.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f16b21",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${roboto.variable} ${neuropolitical.variable}`}
    >
      <body className="antialiased bg-paper text-ink-secondary overflow-x-clip">
        {children}
      </body>
    </html>
  );
}
