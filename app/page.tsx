import Link from "next/link";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/format";

export default async function Home() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <main className="wrap">
      <Nav />
      <Hero />

      <div className="rule" />
      <h2 className="lbl" id="work">// selected work</h2>
      <WorkGrid />

      <h2 className="lbl" id="posts">// latest posts</h2>
      <div className="posts">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="post">
            <span className="ptitle">{p.title}</span>
            <span className="pdate">{formatDate(p.date)}</span>
          </Link>
        ))}
      </div>

      <h2 className="lbl" id="hello">// say hello</h2>
      <ContactForm />

      <Footer />
    </main>
  );
}
