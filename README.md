# Data Driven Fitness

Marketing site for datadrivenfitness.com.au, built with Next.js (App Router).

## Structure

- `/` — Home
- `/about` — About
- `/products/liftiq` — LiftIQ product page
- `/blog` — Blog index (posts live in `lib/posts.js` — add a new object to the
  array to publish a new post, no CMS needed)
- `/contact` — Contact form (uses Netlify Forms, no backend required)

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deploying to Netlify

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project**, connect the repo.
3. Build command: `npm run build`. Publish directory: `.next`.
   (Already configured in `netlify.toml` via `@netlify/plugin-nextjs`.)
4. Once deployed, add your custom domain under **Site settings → Domain
   management** and point `www.datadrivenfitness.com.au` (and the apex domain)
   at Netlify per their DNS instructions.

## Things to finish before launch

- [ ] Replace the `#` link on the LiftIQ page with your live LiftIQ Netlify URL
- [ ] Confirm LiftIQ feature copy / stats on the homepage and product page —
      these are placeholder descriptions, written from the product name alone
- [ ] Replace blog posts in `lib/posts.js` with real content (currently
      placeholder posts)
- [ ] Verify the Netlify Forms contact form is receiving submissions after
      first deploy (Site settings → Forms)
- [ ] Add real social/OG image (`app/opengraph-image` convention) if wanted
