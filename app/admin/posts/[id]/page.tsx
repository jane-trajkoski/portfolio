import Link from "next/link";
import { prisma } from "@/lib/db";
import { assertAdmin } from "@/lib/auth";
import { savePost } from "../../actions";

export const dynamic = "force-dynamic";

export default async function EditPost({ params }: { params: { id: string } }) {
  assertAdmin();
  const isNew = params.id === "new";
  const post = isNew ? null : await prisma.post.findUnique({ where: { id: params.id } });
  const date = post?.date
    ? new Date(post.date).toISOString().slice(0, 10)
    : new Date().toISOString().slice(0, 10);

  return (
    <main className="wrap">
      <div className="adm">
        <div className="adm-top">
          <h1 className="adm-h">{isNew ? "New post" : "Edit post"}</h1>
          <Link className="adm-link" href="/admin">&larr; back</Link>
        </div>
        <form action={savePost} className="adm-form">
          {!isNew && <input type="hidden" name="id" value={post!.id} />}
          <input className="adm-in" name="title" defaultValue={post?.title ?? ""} placeholder="title" required />
          <div className="adm-row">
            <input className="adm-in" name="slug" defaultValue={post?.slug ?? ""} placeholder="slug (auto from title if blank)" />
            <input className="adm-in" name="date" type="date" defaultValue={date} />
          </div>
          <input className="adm-in" name="tags" defaultValue={post?.tags.join(", ") ?? ""} placeholder="tags, comma separated" />
          <input className="adm-in" name="summary" defaultValue={post?.summary ?? ""} placeholder="summary" />
          <textarea className="adm-ta" name="body" defaultValue={post?.body ?? ""} placeholder="body (markdown)" />
          <label className="adm-link"><input type="checkbox" name="published" defaultChecked={post?.published ?? true} /> published</label>
          <button className="adm-btn" type="submit">Save post</button>
        </form>
      </div>
    </main>
  );
}
