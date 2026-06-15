# tjforge.dev

The portfolio + blog for TJ, a solo developer. Built with **Next.js (App Router)**.
Features the line-art mascot **Forge** with a small personality state machine, a
forging "in-progress" card, a contact form, a markdown-rendered blog, and a custom
404. Deep-navy + electric-cyan palette inspired by Astro Bot.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm run start   # production
```

It runs out of the box with bundled sample blog posts — no CMS or env vars needed.

## Deploy (Vercel)

1. Push this folder to a Git repo.
2. Import the repo at vercel.com (framework auto-detected as Next.js).
3. Add the env vars from `.env.example` if/when you connect a CMS.
4. Point your domain `tjforge.dev` at the project.

## Where the blog comes from

All blog reads go through two functions in `lib/posts.ts`:

```ts
getAllPosts(): Promise<Post[]>
getPostBySlug(slug): Promise<Post | null>
```

The rest of the site only ever calls those, so swapping CMS is a one-file change.

- **Default (`CMS_PROVIDER` unset):** uses `lib/sample-posts.ts` so the site runs
  immediately. Edit/add posts there to try things locally.
- **Sanity:** set `CMS_PROVIDER=sanity`, `SANITY_PROJECT_ID`, and `SANITY_DATASET`
  in `.env`. The adapter (`fromSanity()` in `lib/posts.ts`) expects a `post`
  document with fields `title`, `slug`, `date`, `summary`, `tags`, and a markdown
  `body` string. Adjust the GROQ projection to match your schema.
- **Other CMS (Contentful, Notion, Hashnode, …):** implement one more function that
  returns `Post[]` and add a `case` to the `switch` in `load()`. A `Post` is just:

  ```ts
  type Post = { slug, title, date, summary, tags?, body /* markdown */ };
  ```

Post bodies are markdown and rendered with `marked` on the blog post page, styled by
the `.prose` rules in `app/globals.css`.

## The mascot

`components/Bot.tsx` is the hero mascot. It's a client component with three faces:

- **asleep** (single line eyes) on load
- **happy** (curved eyes + a little bounce) after the first mouse move
- **thinking** (`o.O ↔ O.o`, swapping every ~5s) after a few idle seconds, which
  also starts the chat-bubble nudges

Other expressions reuse the same line-art style: the nav "say hello" button hides a
waving Forge that peeks out on hover (`components/Nav.tsx`), the in-progress work card
has Forge hammering an anvil (`components/ForgeBot.tsx`), the contact form swaps to a
celebrating Forge on submit (`components/ContactForm.tsx`), and the 404 page has a
"lost" Forge with a question mark orbiting its head (`app/not-found.tsx`).

All motion is CSS; `prefers-reduced-motion` disables it.

## Project structure

```
app/
  layout.tsx              root layout + metadata
  page.tsx                home (hero, work, recent posts, contact)
  globals.css             palette + all styles
  icon.svg                favicon (cyan tile + Forge head)
  not-found.tsx           404 with the lost mascot
  blog/page.tsx           all posts
  blog/[slug]/page.tsx    single post (markdown -> HTML)
components/
  Bot.tsx                 hero mascot face state machine (client)
  Nav.tsx                 nav + hover "say hello" wave bot
  Hero.tsx  WorkGrid.tsx  ForgeBot.tsx  ContactForm.tsx  Footer.tsx
lib/
  posts.ts                CMS data layer (swappable)
  sample-posts.ts         bundled fallback content
  format.ts               date helpers
```

## Wiring up the contact form

`components/ContactForm.tsx` currently just shows the success state on submit. To
actually send messages, drop your service into the `onSubmit` handler (Formspree,
Resend, or a Next.js route handler at `app/api/contact/route.ts`).
