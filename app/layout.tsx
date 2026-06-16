import "./globals.css";
import type { Metadata } from "next";
import Starfield from "@/components/Starfield";
import ScrollTop from "@/components/ScrollTop";

export const metadata: Metadata = {
  title: "tjdev.io — TJ, solo developer",
  description:
    "Solo developer. Problem solver. Lifelong gamer. I forge fast, playful software that ships.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>
    <Starfield />
    <div className="nebula" aria-hidden="true" />
    {children}
    <ScrollTop />
    </body>
    </html>
  );
}
