# Pyris — Portfolio

A clean, modern personal portfolio built with React, TypeScript, and Vite.

## Features

- **Collapsible bio section** with avatar, description, and social links; its state is shareable with `bio=shown` or `bio=hidden` in the URL
- **Projects tab** showcasing projects and contributions with search or tag filters; switching or closing a panel clears its selection
- **Technical Skills tab** with categorized skill cards and experience badges
- **About Me tab** with bio, education, and contact info
- **Dark / Light theme toggle** with per-theme color palettes
- **Clipboard copy** on contact cards
- **Sliding tab animation** between sections

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the dev server                |
| `npm run build`   | Type-check and build for production |
| `npm run preview` | Preview the production build        |
| `npm run lint`    | Run ESLint                          |
| `npm run format`  | Format files with Prettier          |

## Tech Stack

- [React](https://react.dev) + TypeScript
- [Vite](https://vite.dev)

## Customization

Edit the section files in `src/data` to update your socials, projects, skills, education, and contact info. Replace the placeholder project roles with your own. Each file also contains its entry type. Theme colors are defined as CSS custom properties in `src/index.css`.
