import Link from "next/link";
import { prisma } from "@/lib/db";
import { assertAdmin } from "@/lib/auth";
import { logout, deletePost, deleteProject, saveSettings } from "./actions";

export const dynamic = "force-dynamic";

export default async function Admin() {
  assertAdmin();
  const [posts, projects, s] = await Promise.all([
    prisma.post.findMany({ orderBy: { date: "desc" } }),
    prisma.project.findMany({ orderBy: { order: "asc" } }),
    prisma.settings.findUnique({ where: { id: 1 } }),
  ]);

  return (
    <main className="wrap">
      <div className="adm">
        <div className="adm-top">
          <h1 className="adm-h">tjdev.io admin</h1>
          <form action={logout}>
            <button className="adm-del" type="submit">log out</button>
          </form>
        </div>

        <div className="adm-card">
          <h2 className="adm-h">Site / hero</h2>
          <form action={saveSettings} className="adm-form">
            <div className="adm-row">
              <input className="adm-in" name="heroLine1" defaultValue={s?.heroLine1 ?? "Hey, I'm TJ."} placeholder="hero line 1" />
              <input className="adm-in" name="heroAccent" defaultValue={s?.heroAccent ?? "I forge things"} placeholder="hero accent (cyan)" />
              <input className="adm-in" name="heroLine2" defaultValue={s?.heroLine2 ?? "for the web."} placeholder="hero line 2" />
            </div>
            <input className="adm-in" name="subtitle" defaultValue={s?.subtitle ?? "Solo developer. Problem solver. Lifelong gamer."} placeholder="subtitle" />
            <div className="adm-row">
              <input className="adm-in" name="availableText" defaultValue={s?.availableText ?? "available for work"} placeholder="availability label" />
              <label className="adm-link"><input type="checkbox" name="available" defaultChecked={s?.available ?? true} /> available</label>
            </div>
            <div className="adm-row">
              <input className="adm-in" name="github" defaultValue={s?.github ?? ""} placeholder="github url" />
              <input className="adm-in" name="linkedin" defaultValue={s?.linkedin ?? ""} placeholder="linkedin url" />
            </div>
            <button className="adm-btn" type="submit">Save settings</button>
          </form>
        </div>

        <div className="adm-card">
          <div className="adm-top">
            <h2 className="adm-h">Projects</h2>
            <Link className="adm-link" href="/admin/projects/new">+ new project</Link>
          </div>
          <div className="adm-list">
            {projects.map((p) => (
              <div className="adm-item" key={p.id}>
                <span>{p.title}{p.featured ? " ★" : ""}</span>
                <span className="adm-row">
                  <Link className="adm-link" href={`/admin/projects/${p.id}`}>edit</Link>
                  <form action={deleteProject}>
                    <input type="hidden" name="id" value={p.id} />
                    <button className="adm-del" type="submit">delete</button>
                  </form>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="adm-card">
          <div className="adm-top">
            <h2 className="adm-h">Posts</h2>
            <Link className="adm-link" href="/admin/posts/new">+ new post</Link>
          </div>
          <div className="adm-list">
            {posts.map((p) => (
              <div className="adm-item" key={p.id}>
                <span>{p.title}{p.published ? "" : " (draft)"}</span>
                <span className="adm-row">
                  <Link className="adm-link" href={`/admin/posts/${p.id}`}>edit</Link>
                  <form action={deletePost}>
                    <input type="hidden" name="id" value={p.id} />
                    <button className="adm-del" type="submit">delete</button>
                  </form>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
