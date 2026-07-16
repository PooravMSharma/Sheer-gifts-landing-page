# Sheer Gifts Jaipur

Marketing site for **Sheer Gifts**, a bespoke gifting studio in Jaipur that makes
custom hampers, personalised keepsakes and floral gestures.

It is a single-page site: hero, brand story, gifting gallery, signature gifting,
customer feedback, FAQ and a closing call to action. There is no cart or
checkout — every call to action opens a pre-filled WhatsApp order message.
The page itself is a server component; only the three interactive pieces
(gallery, hero video, feedback carousel) run on the client.

Built with Next.js (App Router) on [vinext](https://github.com/cloudflare/vinext),
deployed as a Cloudflare Worker.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
```

## Project Structure

```
app/
  page.tsx               the whole page — copy, sections, WhatsApp/Instagram links
  layout.tsx             metadata, Open Graph, favicon, theme colour
  gifting-gallery.tsx    client component: gift cards + accessible detail modal
  hero-video.tsx         client component: autoplaying hero reel with pause control
  feedback-carousel.tsx  client component: the customer review carousel
  chatgpt-auth.ts        unused starter helper for ChatGPT header auth
  globals.css            all styling (the markup uses plain semantic class names)
public/brand/            logo and product photography
public/brand/client/     client-supplied photos and video reels
worker/index.ts          Cloudflare Worker entry, incl. the image optimization route
```

## Editing the Site

Most content changes happen in three files:

- **Copy, links, section content** — [app/page.tsx](app/page.tsx). The WhatsApp
  number and pre-filled order message live in the `whatsappUrl` constant at the
  top; the Instagram handle is in `instagramUrl`. Both are passed down to the
  gallery, so change them here and every CTA follows.
- **The four gift categories** — the `giftingCategories` array in
  [app/gifting-gallery.tsx](app/gifting-gallery.tsx). Each entry drives both the
  card and its modal: title, image, tag, detail chips and the "lovely for" line.
- **The customer reviews** — the `reviews` array in
  [app/feedback-carousel.tsx](app/feedback-carousel.tsx). Each entry is a
  screenshot, its `alt`, the pull quote and a short context line.

New photos and videos go in [public/brand/client/](public/brand/client/) and are
referenced by path. The hero video is an MP4 reel with a poster image that shows
while it loads, and it pauses automatically for visitors who have
`prefers-reduced-motion` set.

The feedback carousel renders the `reviews` array twice — the second copy is
`aria-hidden` and exists only so the scroll can loop seamlessly. It has two
different motions depending on viewport: above 620px the cards orbit in 3D
(driven by inline `--orbit-*` custom properties that the animation frame sets),
and below that it is a plain horizontal scroll. Both pause on hover, drag and
arrow keys, and neither runs under `prefers-reduced-motion`.

## Accessibility Notes

These are load-bearing — keep them intact when editing:

- The gifting modal traps focus, closes on `Escape`, marks `<main>` as `inert`
  while open, and restores focus to the card that opened it.
- The hero video is muted, has a visible pause/play control, and respects
  reduced-motion preferences.
- The feedback carousel is a focusable labelled `region`, browsable with the
  arrow keys, and its duplicated card set is hidden from assistive tech.
- Every image and video carries a descriptive `alt` or `aria-label`.

## Commands

- `npm run dev` — start local development
- `npm run build` — build the Worker output into `dist/`
- `npm start` — serve a build locally
- `npm run lint` — ESLint
- `npm test` — **currently stale.** It builds, then asserts the vinext starter's
  loading skeleton, which this site replaced — it looks for an `app/_sites-preview/`
  directory and a `react-loading-skeleton` dependency that no longer exist, so it
  cannot pass. Rewrite or delete
  [tests/rendered-html.test.mjs](tests/rendered-html.test.mjs) before relying on it.
- `npm run db:generate` — Drizzle migrations; unused, see Infrastructure below

## Infrastructure

`.openai/hosting.json` declares optional Cloudflare D1 and R2 bindings; both are
`null` because the site is all static content — no database, no uploads.
[db/schema.ts](db/schema.ts) is intentionally empty, and [examples/d1/](examples/d1/)
holds an unused D1 example should a database ever be needed.
[vite.config.ts](vite.config.ts) simulates any declared bindings locally.

Other starter leftovers, harmless but not wired into anything: the package is
still named `site-creator-vinext-starter`, and
[app/chatgpt-auth.ts](app/chatgpt-auth.ts) implements a ChatGPT header-based
sign-in helper that nothing on the site imports.

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
- [Next.js App Router](https://nextjs.org/docs/app)
