// Blog data layer.
//
// Everything the app needs from "the blog" goes through getAllPosts() and
// getPostBySlug(). Swap the CMS by implementing those two functions for your
// provider — the rest of the site never changes.
//
// Out of the box this returns the bundled sample posts so the site runs with
// zero config. Set CMS_PROVIDER=sanity (+ env vars) to pull from Sanity.

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO date, e.g. "2026-06-10"
  summary: string;
  tags?: string[];
  body: string; // markdown
};

const provider = process.env.CMS_PROVIDER || "sample";

export async function getAllPosts(): Promise<Post[]> {
  const posts = await load();
  return [...posts].sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await load();
  return posts.find((p) => p.slug === slug) || null;
}

async function load(): Promise<Post[]> {
  switch (provider) {
    case "sanity":
      return fromSanity();
    // case "contentful": return fromContentful();
    // case "notion":     return fromNotion();
    default:
      return (await import("./sample-posts")).samplePosts;
  }
}

// --- Sanity adapter -------------------------------------------------------
// Assumes a `post` document type with fields: title, slug, date, summary,
// tags, and a `body` string holding markdown (e.g. via the sanity markdown
// plugin). Adjust the GROQ projection to match your schema.
async function fromSanity(): Promise<Post[]> {
  const id = process.env.SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET || "production";
  if (!id) throw new Error("SANITY_PROJECT_ID is not set");

  const query =
    '*[_type == "post" && defined(slug.current)]{' +
    '"slug": slug.current, title, "date": coalesce(date, _createdAt), summary, tags, body' +
    "}";
  const url =
    `https://${id}.api.sanity.io/v2023-05-03/data/query/${dataset}` +
    `?query=${encodeURIComponent(query)}`;

  // revalidate every 5 min (Next.js ISR). Bump or set to 0 as you like.
  const res = await fetch(url, { next: { revalidate: 300 } });
  if (!res.ok) throw new Error(`Sanity fetch failed: ${res.status}`);
  const json = (await res.json()) as { result: Post[] };
  return json.result || [];
}
