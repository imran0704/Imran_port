# Imran — Modern Next.js Portfolio with Sanity CMS

A high-performance, modern developer portfolio built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Sanity Headless CMS**.

Designed following architectural minimalism, editorial typography, and disciplined UI/UX principles with a luminous **Light Mode** aesthetic.

---

## 🌟 Key Features

1. **Luminous Light Mode Aesthetic**:
   - High-contrast, clean slate color palette (`#0F172A` text on `#FAFAF9` warm paper canvas).
   - Crisp hairline borders (`#E2E8F0`), refined white cards, and electric blue (`#2563EB`) accent highlights.
   - Purposeful micro-interactions with no annoying animations or laggy effects.

2. **Hero Section with Dedicated Photo Frame**:
   - Prominent architectural portrait frame designed for your developer photo.
   - Dual floating glass badges showcasing years of experience and project milestones.
   - Live availability pill ("Available for hire"), editorial headline, and quick social links.

3. **Pinned Horizontal Scroll Showcase (The Centerpiece)**:
   - As you scroll down the page vertically, this section pins to the screen and smoothly translates featured project cards horizontally across the viewport.
   - Includes real-time progress scrub bar (`0% → 100%`) and accessible next/previous arrows.

4. **Complete Project Archive Grid**:
   - Filterable 3-column responsive grid with interactive category pills (*All*, *Full Stack*, *Frontend & UI*, *Design System*, *Mobile / SaaS*).

5. **Experience Timeline & Skills Matrix**:
   - Chronological career progression with company tags, role achievements, and technologies.
   - Four structured skill categories with verified proficiency levels.

6. **Interactive Contact Section**:
   - Direct one-click email copy button with copied tooltip.
   - Functional inquiry message form with instant success feedback.

7. **Zero-Friction Fallback Data**:
   - Renders realistic, high-quality showcase data immediately out of the box even before Sanity credentials are provided!

---

## 🚀 Quick Start

Run the development server:

```bash
# From inside the my-portfolio directory:
cd my-portfolio
npm run dev

# Or from the root directory:
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Sanity Headless CMS Setup Guide

### 1. What is required from your side?

To connect your live Sanity content, you only need:
1. **Sanity Project ID** (e.g. `a1b2c3d4`)
2. **Dataset Name** (defaults to `production`)
3. **API Version** (defaults to `2024-01-01`)
4. **CORS Configuration** (adding `http://localhost:3000` in Sanity manage dashboard)

### 2. Step-by-Step Setup

#### Step A: Create or Use an Existing Sanity Project
If you don't have a Sanity project yet, create one for free:
- Visit [https://www.sanity.io](https://www.sanity.io) and log in.
- Create a project (e.g. `imran-portfolio`).
- Note your **Project ID** from [https://www.sanity.io/manage](https://www.sanity.io/manage).

#### Step B: Add Environment Variables
Create a file named `.env.local` inside `my-portfolio/`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

*(You can copy from `.env.example`).*

#### Step C: Add CORS Origin
In your Sanity Management dashboard:
1. Go to **API** &rarr; **CORS Origins**.
2. Click **Add CORS origin**.
3. Origin: `http://localhost:3000` (and your production domain once deployed).
4. Allow credentials: **Yes** &rarr; Save.

#### Step D: Schemas Already Built For You
All schema definitions are ready in `/sanity/schemas/`:
- `profile.ts` (Name, role, bio, photo/avatar, contact, stats)
- `project.ts` (Title, slug, category, screenshot, tags, metrics, URLs, featured flag)
- `experience.ts` (Company, role, period, achievements, technologies)
- `skillGroup.ts` (Category, skills, proficiency)
- `testimonial.ts` (Author, quote, company, avatar)

---

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── globals.css         # Light-mode theme, custom scrollbar, animations
│   ├── layout.tsx          # Root layout with Geist font and SEO metadata
│   └── page.tsx            # Main portfolio server component
├── components/
│   ├── Navbar.tsx          # Sticky glassmorphic navbar with mobile drawer
│   ├── Hero.tsx            # Hero with dedicated photo frame & CTAs
│   ├── HorizontalProjects.tsx # Pinned horizontal scroll section
│   ├── ProjectGrid.tsx     # Filterable 3-column project archive
│   ├── Experience.tsx      # Career progression timeline
│   ├── Skills.tsx          # Technical repertoire cards
│   ├── About.tsx           # Philosophy & design engineering principles
│   ├── Testimonials.tsx    # Endorsement quote cards
│   ├── Contact.tsx         # Quick email copy + inquiry form
│   ├── Footer.tsx          # Minimalist footer
│   └── Icons.tsx           # Lightweight custom SVGs (0 extra dependencies)
├── lib/
│   └── sanity/
│       ├── client.ts       # Sanity fetcher with automatic fallback
│       ├── queries.ts      # GROQ query constants
│       ├── types.ts        # TypeScript interfaces
│       └── mockData.ts     # Realistic default content
├── sanity/
│   └── schemas/            # Full Sanity CMS schemas ready for Studio
├── sanity.config.ts        # Sanity Studio configuration
└── next.config.ts          # Configured with remote image domains
```
