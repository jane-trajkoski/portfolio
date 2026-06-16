import { PrismaClient } from "@prisma/client";
import { samplePosts } from "@/lib/sample-posts";

const prisma = new PrismaClient();

const projects = [
  {
    title: "QuestBoard",
    tagline: "Gamified task tracker — to-dos become loot & XP.",
    stack: ["Next.js", "TypeScript", "Postgres", "Prisma", "Vercel"],
    live: "#",
    blog: "/blog",
    featured: true,
    order: 0,
  },
  {
    title: "Pixel Forge",
    tagline: "A tiny browser platformer + level editor at 60fps.",
    stack: ["WebGL", "React", "Vite", "Canvas"],
    live: "#",
    blog: "/blog",
    featured: false,
    order: 1,
  },
];

async function main() {
  for (const p of samplePosts) {
    await prisma.post.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        slug: p.slug,
        title: p.title,
        date: new Date(p.date),
        summary: p.summary,
        tags: p.tags ?? [],
        body: p.body,
      },
    });
  }

  for (const pr of projects) {
    const existing = await prisma.project.findFirst({ where: { title: pr.title } });
    if (!existing) await prisma.project.create({ data: pr });
  }

  await prisma.settings.upsert({
    where: { id: 1 },
    update: {},
    create: { id: 1 },
  });

  console.log("Seeded posts, projects, and settings.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
