# zearøw

The zearøw company website — a static site built with Nuxt 4 and deployed to GitHub Pages at [zearow.com](https://zearow.com).

## Stack

- **[Nuxt 4](https://nuxt.com)** — Vue 3 meta-framework, configured for static generation
- **[Nuxt UI v4](https://ui.nuxt.com)** — component library + Tailwind CSS v4
- **[Nuxt Content v3](https://content.nuxt.com)** — markdown-based blog
- **[@nuxtjs/sitemap](https://nuxtseo.com/sitemap)** — auto-generated sitemap
- **Comfortaa** — primary typeface (via `@nuxt/fonts`)
- **[Web3Forms](https://web3forms.com) + [hCaptcha](https://hcaptcha.com)** — contact form (no backend needed)

## Local development

Requires Node.js 22+.

```bash
npm install
npm run dev          # starts on http://localhost:3000
```

## Build

```bash
npm run generate     # produces .output/public/ (static site)
npm run preview      # serve the build locally
```

## Project structure

```
app/
  app.vue            # root layout (header, footer, background)
  pages/             # routes (index, about, services, blog, contact, …)
  components/        # HeroParticles, ScrollReveal, BackToTop, SectionDivider
  assets/css/        # global styles + theme variables
content/blog/        # markdown blog posts (frontmatter: title, description, badge, date)
public/              # static files (logos, og-image, undraw illustrations, CNAME)
server/routes/       # blog/rss.xml endpoint
nuxt.config.ts       # modules, sitemap, github-pages preset
app.config.ts        # Nuxt UI theme overrides
```

## Branding

The site uses three brand colors and one typeface:

- White `#FFFFFF` · Graphite `#333333` · Steel Blue `#4A7C9B`
- Comfortaa (300–700)

Full guidelines live at [/branding](https://zearow.com/branding).

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `nuxi generate` and publishes `.output/public/` to GitHub Pages. Custom domain is configured via `public/CNAME`.

## Acknowledgements

Illustrations from [unDraw](https://undraw.co/) by Katerina Limpitsouni.
