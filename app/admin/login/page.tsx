import { login } from "../actions";

export const dynamic = "force-dynamic";

export default function Login({ searchParams }: { searchParams: { error?: string } }) {
  return (
    <main className="wrap">
      <div className="adm" style={{ maxWidth: 360, marginTop: 60 }}>
        <h1 className="adm-h">tjdev.io admin</h1>
        {searchParams?.error ? <p className="adm-err">Wrong password.</p> : null}
        <form action={login} className="adm-form">
          <input className="adm-in" type="password" name="password" placeholder="password" autoFocus required />
          <button className="adm-btn" type="submit">Sign in</button>
        </form>
      </div>
    </main>
  );
}
