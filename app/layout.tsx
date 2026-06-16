import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import Starfield from "@/components/Starfield";
import ScrollTop from "@/components/ScrollTop";
import { Roboto, Orbitron } from "next/font/google";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const orbitron = Orbitron({
  weight: ['400', '500', '600', '700','800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
});

export const metadata: Metadata = {
  title: "tjdev.io — TJ, solo developer",
  description:
    "Solo developer. Problem solver. Lifelong gamer. I forge fast, playful software that ships.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${orbitron.variable}`}>
    <body>
    <Starfield />
    <div className="nebula" aria-hidden="true" />
    {children}
    <ScrollTop />
    <Analytics />
    </body>
    </html>
  );
}
