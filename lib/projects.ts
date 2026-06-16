import { prisma } from "./db";

export type Project = {
  id?: string;
  title: string;
  tagline: string;
  stack: string[];
  live: string;
  blog: string;
  featured?: boolean;
  image?: string | null;
  imageAlt?: string | null;
};

const hasDb = !!process.env.DATABASE_URL;

const sample: Project[] = [
  {
    title: "QuestBoard",
    tagline: "Gamified task tracker — to-dos become loot & XP.",
    stack: ["Next.js", "TypeScript", "Postgres", "Prisma", "Vercel"],
    live: "#",
    blog: "/blog",
    featured: true,
  },
  {
    title: "Pixel Forge",
    tagline: "A tiny browser platformer + level editor at 60fps.",
    stack: ["WebGL", "React", "Vite", "Canvas"],
    live: "#",
    blog: "/blog",
  },
];

export async function getProjects(): Promise<Project[]> {
  if (!hasDb) return sample;
  try {
    const rows = await prisma.project.findMany({
      orderBy: [{ featured: "desc" }, { order: "asc" }],
    });
    return rows.map((r) => ({
      id: r.id,
      title: r.title,
      tagline: r.tagline,
      stack: r.stack,
      live: r.live,
      blog: r.blog,
      featured: r.featured,
      image: r.image,
      imageAlt: r.imageAlt,
    }));
  } catch {
    return sample;
  }
}
