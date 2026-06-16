import Link from "next/link";
import { prisma } from "@/lib/db";
import { assertAdmin } from "@/lib/auth";
import { saveProject } from "../../actions";

export const dynamic = "force-dynamic";

export default async function EditProject({ params }: { params: { id: string } }) {
  assertAdmin();
  const isNew = params.id === "new";
  const p = isNew ? null : await prisma.project.findUnique({ where: { id: params.id } });

  return (
    <main className="wrap">
      <div className="adm">
        <div className="adm-top">
          <h1 className="adm-h">{isNew ? "New project" : "Edit project"}</h1>
          <Link className="adm-link" href="/admin">&larr; back</Link>
        </div>
        <form action={saveProject} className="adm-form">
          {!isNew && <input type="hidden" name="id" value={p!.id} />}
          <input className="adm-in" name="title" defaultValue={p?.title ?? ""} placeholder="title" required />
          <input className="adm-in" name="tagline" defaultValue={p?.tagline ?? ""} placeholder="tagline" />
          <input className="adm-in" name="stack" defaultValue={p?.stack.join(", ") ?? ""} placeholder="stack, comma separated" />
          <div className="adm-row">
            <input className="adm-in" name="live" defaultValue={p?.live ?? "#"} placeholder="live url" />
            <input className="adm-in" name="blog" defaultValue={p?.blog ?? "/blog"} placeholder="blog url" />
          </div>
          {p?.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.image} alt={p?.imageAlt ?? ""} style={{ width: 120, borderRadius: 8, border: "1px solid rgba(148,163,184,.25)" }} />
          ) : null}
          <label className="adm-link">
            upload image
            <input className="adm-in" type="file" name="imageFile" accept="image/*" />
          </label>
          <input className="adm-in" name="image" defaultValue={p?.image ?? ""} placeholder="...or paste an image URL (leave file empty)" />
          <input className="adm-in" name="imageAlt" defaultValue={p?.imageAlt ?? ""} placeholder="image alt text" />
          <div className="adm-row">
            <input className="adm-in" name="order" type="number" defaultValue={p?.order ?? 0} placeholder="order" />
            <label className="adm-link"><input type="checkbox" name="featured" defaultChecked={p?.featured ?? false} /> featured</label>
          </div>
          <button className="adm-btn" type="submit">Save project</button>
        </form>
      </div>
    </main>
  );
}
