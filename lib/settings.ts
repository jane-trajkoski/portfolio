import { prisma } from "./db";

export type Settings = {
  heroLine1: string;
  heroAccent: string;
  heroLine2: string;
  subtitle: string;
  available: boolean;
  availableText: string;
  github: string;
  linkedin: string;
};

export const DEFAULT_SETTINGS: Settings = {
  heroLine1: "Hey, I'm TJ.",
  heroAccent: "I forge things",
  heroLine2: "for the web.",
  subtitle: "Solo developer. Problem solver. Lifelong gamer.",
  available: true,
  availableText: "available for work",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};

const hasDb = !!process.env.DATABASE_URL;

export async function getSettings(): Promise<Settings> {
  if (!hasDb) return DEFAULT_SETTINGS;
  try {
    const s = await prisma.settings.findUnique({ where: { id: 1 } });
    if (!s) return DEFAULT_SETTINGS;
    return {
      heroLine1: s.heroLine1,
      heroAccent: s.heroAccent,
      heroLine2: s.heroLine2,
      subtitle: s.subtitle,
      available: s.available,
      availableText: s.availableText,
      github: s.github,
      linkedin: s.linkedin,
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}
