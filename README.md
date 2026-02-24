# Portfolio Website

Personal portfolio website for Ricardo Serrano-Smith. Built as a single-page scrolling site with sections for About, Experience, Skills, and Contact.

## Tech Stack

- **Build Tool:** Vite 6
- **Styling:** Dart Sass (SCSS)
- **Fonts:** Inter (Google Fonts), Font Awesome 6
- **Hosting:** Netlify
- **Domain:** Namecheap

## Getting Started

### Prerequisites

- Node.js 20+

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

Output goes to `dist/`.

### Preview Production Build

```bash
npm run preview
```

### Format

```bash
npm run format
```

## Project Structure

```
src/
  index.html          # Main single-page site
  pages/              # Project detail pages
  js/
    main.js           # Entry point (nav, scroll reveal, hamburger menu)
    typewriter.js      # Typewriter text animation
  scss/
    main.scss         # Primary styles
    _config.scss      # Variables and helpers
    _nav.scss         # Sticky nav and hamburger menu
    _utilities.scss   # Utility classes and section styles
    _item_grid.scss   # Project card grid
    _media.scss       # Responsive breakpoints
  img/                # Images and assets
```

## License

ISC
