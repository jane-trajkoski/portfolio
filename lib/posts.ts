import { prisma } from "./db";

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  summary: string;
  tags?: string[];
  body: string; // markdown
};

const hasDb = !!process.env.DATABASE_URL;

function toPost(r: {
  slug: string;
  title: string;
  date: Date;
  summary: string;
  tags: string[];
  body: string;
}): Post {
  return {
    slug: r.slug,
    title: r.title,
    date: r.date instanceof Date ? r.date.toISOString() : String(r.date),
    summary: r.summary,
    tags: r.tags,
    body: r.body,
  };
}

async function sample(): Promise<Post[]> {
  const { samplePosts } = await import("./sample-posts");
  return [...samplePosts].sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getAllPosts(): Promise<Post[]> {
  if (!hasDb) return sample();
  try {
    const rows = await prisma.post.findMany({
      where: { published: true },
      orderBy: { date: "desc" },
    });
    return rows.map(toPost);
  } catch {
    return sample();
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!hasDb) return (await sample()).find((p) => p.slug === slug) ?? null;
  try {
    const r = await prisma.post.findUnique({ where: { slug } });
    return r ? toPost(r) : null;
  } catch {
    return (await sample()).find((p) => p.slug === slug) ?? null;
  }
}
