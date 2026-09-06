# Portafolio Web — Mariana García

Personal portfolio built with React, TypeScript, and Vite, showcasing my background as a Computer Science engineer specialized in full-stack development.

**Live site:** https://marianaagrcg.github.io/Portafolio-Web/

## Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for dev server and build
- [Tailwind CSS](https://tailwindcss.com/) + custom CSS design system
- [Font Awesome](https://fontawesome.com/), [Lucide](https://lucide.dev/) and [Simple Icons](https://simpleicons.org/) for iconography
- Deployed to GitHub Pages via [`gh-pages`](https://www.npmjs.com/package/gh-pages)

## Getting started

```bash
npm install   # install dependencies
npm run dev   # start the dev server (rebuilds on save via nodemon + vite)
```

## Scripts

| Script            | Description                                  |
| ------------------ | --------------------------------------------- |
| `npm run dev`      | Local development server with auto-reload     |
| `npm run build`    | Type-check and build for production (`dist/`) |
| `npm run preview`  | Preview the production build locally          |
| `npm run lint`     | Run ESLint over the project                   |
| `npm run deploy`   | Build and publish `dist/` to GitHub Pages     |

## Project structure

```
src/
├── assets/images/   # Images referenced by components
├── components/      # Page sections (Welcome, AboutMe, Experience, Projects, …)
│   └── ui/          # Small shared UI pieces (icons, tokens)
├── pages/           # Top-level page composition
├── App.tsx          # App shell + scroll-reveal animation setup
└── main.tsx         # React entry point
```
