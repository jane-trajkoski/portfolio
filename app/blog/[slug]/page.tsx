import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getPostBySlug } from "@/lib/posts";
import { formatLongDate } from "@/lib/format";

export const dynamic = "force-dynamic";



export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Not found — tjdev.io" };
  return { title: `${post.title} — tjdev.io`, description: post.summary };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const html = marked.parse(post.body) as string;

  return (
    <main className="wrap">
      <Nav />
      <article className="article">
        <Link href="/blog" className="back">
          &larr; all posts
        </Link>
        <h1 className="articletitle">{post.title}</h1>
        <p className="articlemeta">
          {formatLongDate(post.date)}
          {post.tags && post.tags.length > 0 ? " · " + post.tags.join(" · ") : ""}
        </p>
        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <Footer />
    </main>
  );
}
