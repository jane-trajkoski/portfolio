import { getSettings } from "../lib/settings";

export default async function Footer() {
  const s = await getSettings();
  return (
    <div className="ftr">
      <span>tjdev.io</span>
      <span>
        <a className="lk" href={s.github}>github</a> &middot;{" "}
        <a className="lk" href={s.linkedin}>linkedin</a>
      </span>
    </div>
  );
}
