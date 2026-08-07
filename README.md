# Systems Engineering Portfolio | Asiimwe Gilbert

[![Deploy static content to Pages](https://github.com/asiimwe-dev/asiimwe-dev.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/asiimwe-dev/asiimwe-dev.github.io/actions/workflows/deploy.yml)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-blue?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)

This is a personal portfolio website for Asiimwe Gilbert, a systems engineer and software developer. The site showcases a collection of projects, technical skills, and professional experiences.

**Live Site:** [asiimwe-dev.github.io](https://asiimwe-dev.github.io/)

---

## 🏗️ Architectural Overview

This project is built with a "Systems First" approach, prioritizing performance, scalability, and clean separation of concerns.

### Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/) for optimized routing and server-side rendering capability.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for a utility-first, highly maintainable design system.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for hardware-accelerated, high-frame-rate interactive elements.
- **Icons**: [Lucide React](https://lucide.dev/) for a consistent, lightweight iconography system.
- **Language**: [TypeScript](https://www.typescriptlang.org/) for strict type safety across the data model and UI components.

### Key Engineering Features

- **Performance Optimized**:
  - Implementation of `will-change` CSS hints for GPU-accelerated transforms.
  - Reduced complexity in `BinaryRain` animation (75% element reduction) for mobile CPU efficiency.
  - Optimized backdrop-blur intensity to maintain 60fps scrolling.
- **Responsive Architecture**: Fully adaptive UI that transitions from a text-based desktop navigation to an icon-based mobile matrix.
- **CI/CD Pipeline**: Integrated GitHub Actions for automated building, linting, and static deployment.
- **Data-Driven UI**: Centralized configuration in `src/data/portfolio.ts` allows for decoupling content from presentation logic.

---

## 📂 Project Structure

```text
/src
  /app            # Next.js App Router (Layouts, Global Styles, 404)
  /components
    /layout       # Sticky Navbar, Dynamic Footer
    /sections     # Modular page sections (Hero, About, Projects, etc.)
    /ui           # Atomic components and animation wrappers
  /data           # Centralized data models and portfolio content
  /lib            # Utility functions (Tailwind merging, etc.)
/public           # Static assets (Images, Resume)
/.github          # Automated Deployment Workflows
/legacy           # Preservation of original static site history
```

---

## 🛠️ Local Development

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

```bash
git clone https://github.com/asiimwe-dev/asiimwe-dev.github.io.git
cd asiimwe-dev.github.io
npm install
```

### Development Server

```bash
npm run dev
```

Navigate to `http://localhost:3000` to view the development environment.

### Production Build

To verify the static export locally:

```bash
npm run build
```

---

## 🚀 Deployment

This repository uses **GitHub Actions** for seamless deployment.

1. **Source Control**: Every push to the `main` branch triggers the `deploy.yml` workflow.
2. **Build Process**: The runner installs dependencies, executes a production build, and runs ESLint checks.
3. **Artifact Generation**: A static bundle is generated in the `out/` directory.
4. **Live Update**: The artifact is deployed directly to GitHub Pages via the `actions/deploy-pages` utility.

---

## 📜 Professional Standard

Designed and engineered with precision by **Asiimwe Gilbert** © 2026.  
_Building scalable systems that drive regional economic evolution._
