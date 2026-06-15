import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/format";

export const metadata = {
  title: "Blog — tjforge.dev",
  description: "Notes on building software, games, and the web.",
};

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <main className="wrap">
      <Nav />
      <h1 className="pagetitle">// the blog</h1>
      <p className="pagelede">Notes on building software, games, and the web.</p>

      <div className="posts blogfull">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="post postcard">
            <div>
              <span className="ptitle">{p.title}</span>
              <p className="psummary">{p.summary}</p>
            </div>
            <span className="pdate">{formatDate(p.date)}</span>
          </Link>
        ))}
      </div>

      <Footer />
    </main>
  );
}
