# Pyris — Portfolio

A clean, modern personal portfolio built with React, TypeScript, and Vite.

## Features

- **Collapsible bio section** with avatar, description, and social links; its state is shareable with `bio=shown` or `bio=hidden` in the URL
- **Projects tab** with external links or project detail popups, plus search or tag filters; switching or closing a panel clears its selection
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

In the project data, use `type: "external"` with a `url` for a new-tab link, or `type: "popup"` with a `description`, `gallery`, and `buttons` for an on-page detail view. Gallery images use `imageUrl` and `objectFit` and can be opened in a full-screen viewer; buttons use `text` and `url` and open in a new tab. Empty galleries or button lists are omitted.

The sample popup entries and their images, descriptions, tags, and link are placeholders; replace or remove them with your own project details.
