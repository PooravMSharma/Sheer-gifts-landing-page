# Sheer Gifts Jaipur

Marketing site for **Sheer Gifts**, a bespoke gifting studio in Jaipur that makes
custom hampers, personalised keepsakes and floral gestures.

It is a single-page site: hero, brand story, gifting gallery, signature gifting,
customer feedback, FAQ and a closing call to action. There is no cart or
checkout — every call to action opens a pre-filled WhatsApp order message.

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
  page.tsx             the whole page — copy, sections, WhatsApp/Instagram links
  layout.tsx           metadata, Open Graph, favicon, theme colour
  gifting-gallery.tsx  client component: gift cards + accessible detail modal
  hero-video.tsx       client component: autoplaying hero reel with pause control
  globals.css          all styling (the markup uses plain semantic class names)
public/brand/          logo and product photography
public/brand/client/   client-supplied photos and video reels
worker/index.ts        Cloudflare Worker entry, incl. the image optimization route
```

## Editing the Site

Most content changes happen in two files:

- **Copy, links, section content** — [app/page.tsx](app/page.tsx). The WhatsApp
  number and pre-filled order message live in the `whatsappUrl` constant at the
  top; the Instagram handle is in `instagramUrl`.
- **The four gift categories** — the `giftingCategories` array in
  [app/gifting-gallery.tsx](app/gifting-gallery.tsx). Each entry drives both the
  card and its modal: title, image, tag, detail chips and the "lovely for" line.

New photos and videos go in [public/brand/client/](public/brand/client/) and are
referenced by path. The hero video is an MP4 reel with a poster image that shows
while it loads, and it pauses automatically for visitors who have
`prefers-reduced-motion` set.

## Accessibility Notes

These are load-bearing — keep them intact when editing:

- The gifting modal traps focus, closes on `Escape`, marks `<main>` as `inert`
  while open, and restores focus to the card that opened it.
- The hero video is muted, has a visible pause/play control, and respects
  reduced-motion preferences.
- Every image and video carries a descriptive `alt` or `aria-label`.

## Commands

- `npm run dev` — start local development
- `npm run build` — build the Worker output into `dist/`
- `npm run lint` — ESLint
- `npm test` — **currently stale.** It still asserts the vinext starter's loading
  skeleton, which this site replaced. Rewrite or delete
  [tests/rendered-html.test.mjs](tests/rendered-html.test.mjs) before relying on it.

## Infrastructure

`.openai/hosting.json` declares optional Cloudflare D1 and R2 bindings; both are
`null` because the site is all static content — no database, no uploads.
[db/schema.ts](db/schema.ts) is intentionally empty, and [examples/d1/](examples/d1/)
holds an unused D1 example should a database ever be needed.
[vite.config.ts](vite.config.ts) simulates any declared bindings locally.

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
- [Next.js App Router](https://nextjs.org/docs/app)
