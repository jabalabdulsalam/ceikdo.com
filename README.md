# ceikdo.com

🌀 Personal portfolio website built with React, React Router and Tailwind CSS 4.

## Introduction

This website was built from scratch using React 19, React Router 7 and Tailwind CSS 4, bundled with Vite, and was first initialized in October 2026. It showcases my projects, services, experience and articles. All of its content lives in a single data file, so it can easily be connected to a REST API later. It will undergo regular updates in the future.

## SEO and GEO

The site includes route-specific English metadata, canonical URLs, Open Graph and Twitter cards, JSON-LD structured data for the person, service, articles and breadcrumbs, plus `robots.txt` and `sitemap.xml` in the public directory. After deployment, submit `https://ceikdo.com/sitemap.xml` to Google Search Console and Bing Webmaster Tools.

<!--
## Performance

**PageSpeed Insights : Desktop**
Report URL: https://pagespeed.web.dev/analysis/...

**PageSpeed Insights : Mobile**
Report URL: https://pagespeed.web.dev/analysis/...
-->

## Getting Started

If you are interested in running this project on your local machine, you can do so in just 3 easy steps below.

### 1. Clone this template using one of the three ways:

1. Clone using git

```
git clone https://github.com/jabalabdulsalam/ceikdo.com
```

2. Using `degit`

```
npx degit jabalabdulsalam/ceikdo.com YOUR_APP_NAME
```

3. Deploy to Vercel, Netlify, Cloudflare Pages, etc. Since the project uses `BrowserRouter`, make sure all routes are rewritten to `index.html`.

### 2. Install dependencies

```
npm install
```

### 3. Run the development server

```
npm run dev
```

Open http://localhost:5173 with your browser to see the result. You can start customizing the website by editing `src/data/portfolio.js` and replacing the images in `public/images`.

## License

Licensed under the [MIT license](LICENSE).
