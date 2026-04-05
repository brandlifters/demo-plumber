# FlowRight Plumbing Co. — Demo Site

A polished, portfolio-ready demo website for a fictional local plumbing business.
Built for the **BrandLifters** demo pipeline — frontend-only, no backend, no database.

---

## About This Demo

| Field             | Value                                      |
|-------------------|--------------------------------------------|
| Business          | FlowRight Plumbing Co.                     |
| Industry          | Residential Plumbing                       |
| Location          | Denver Metro Area, CO                      |
| Tech Stack        | Vanilla HTML · CSS · JavaScript            |
| Deployment        | Vercel (static, no build step)             |
| Demo Phone        | (720) 555-0192 *(not a real number)*       |
| Demo Email        | info@flowrightplumbing.demo *(not real)*   |

---

## Pages

| File              | Page                       |
|-------------------|----------------------------|
| `index.html`      | Home — hero, services overview, testimonials, area, CTA |
| `services.html`   | Full services listing + FAQ accordion                    |
| `about.html`      | Company story, credentials, values                       |
| `contact.html`    | Demo contact form, hours, service area                   |

---

## Getting Started

### Prerequisites
- Node.js 18+ (only needed for local dev server)

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

> Uses `npx serve .` under the hood — a lightweight static file server.

---

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel will detect the static config from `vercel.json` and deploy immediately.

### Option B — Vercel Dashboard

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**
3. Import the repo
4. No build settings needed — Vercel will serve the static files directly
5. Click **Deploy**

### vercel.json

The project includes a minimal `vercel.json`:

```json
{
  "buildCommand": null,
  "outputDirectory": ".",
  "framework": null
}
```

No build step, no framework config. It just serves the files as-is.

---

## Project Structure

```
plumber-demo/
├── index.html          Home page
├── services.html       Services listing + FAQ
├── about.html          About / company story
├── contact.html        Contact form (demo)
├── styles.css          Full stylesheet (CSS variables, responsive)
├── script.js           Nav, mobile menu, form demo handler
├── demo.config.json    BrandLifters pipeline metadata
├── package.json        npm config (dev server only)
├── vercel.json         Vercel static deployment config
└── README.md           This file
```

---

## Design System

| Token          | Value     |
|----------------|-----------|
| Primary Blue   | `#1B4F8C` |
| Primary Dark   | `#0F2F5A` |
| Accent Orange  | `#F97316` |
| Background     | `#F8FAFC` |
| Text           | `#1A202C` |
| Font           | Inter (Google Fonts) |

---

## Demo Notes

- The contact form is **non-functional by design** — it shows a success state on submit but sends no data anywhere.
- All phone numbers, emails, and addresses are fictional and clearly marked.
- The site has no backend, no database, no authentication.
- Safe to deploy publicly as a portfolio or testing demo.

---

*BrandLifters Demo Pipeline · FlowRight Plumbing Co.*
