import type { Post } from "./posts";

// Bundled fallback content so the site runs without any CMS configured.
// Once your CMS is connected (CMS_PROVIDER=sanity), these are ignored.
export const samplePosts: Post[] = [
  {
    slug: "building-my-portfolio-with-nextjs",
    title: "How I built my portfolio with Next.js and why I loved it",
    date: "2026-06-10",
    summary:
      "Going from a static concept to a deployable site — the mascot, the markdown blog, and the Vercel deploy.",
    tags: ["next.js", "design"],
    body: [
      "# How I built my portfolio with Next.js",
      "",
      "I wanted something that felt like *me* — a little playful, a little game-y,",
      "but still credible enough that clients take it seriously.",
      "",
      "## The mascot",
      "",
      "The whole thing is anchored by **Forge**, a little robot blacksmith who",
      "wakes up when you move your mouse and gets bored (and chatty) when you don't.",
      "",
      "## The stack",
      "",
      "- Next.js App Router",
      "- A swappable CMS data layer for posts",
      "- Plain CSS — no framework, just the cyan-on-navy palette",
      "",
      "> Ship early, polish in public.",
    ].join("\n"),
  },
  {
    slug: "wordpress-to-react",
    title: "Things I learned going from WordPress to React",
    date: "2026-05-22",
    summary:
      "Components, state, and the moment it finally clicked. A field guide for anyone making the jump.",
    tags: ["react", "career"],
    body: [
      "# WordPress to React",
      "",
      "For years I shipped sites on WordPress. Here's what surprised me when I",
      "switched to React.",
      "",
      "1. Thinking in components changes everything.",
      "2. State is a feature, not a chore.",
      "3. The build step pays for itself fast.",
      "",
      "It took a few weeks for it to click — and then there was no going back.",
    ].join("\n"),
  },
  {
    slug: "frontend-tools-i-use",
    title: "The frontend tools I actually use every day",
    date: "2026-04-30",
    summary: "No hype, just the handful of tools that survive contact with real work.",
    tags: ["tools"],
    body: [
      "# The tools I actually use",
      "",
      "Short list, honest list:",
      "",
      "- **VS Code** with a tiny set of extensions",
      "- **Vite / Next.js** depending on the job",
      "- **A notebook** for the stuff that doesn't fit in a ticket",
      "",
      "Everything else is negotiable.",
    ].join("\n"),
  },
];
