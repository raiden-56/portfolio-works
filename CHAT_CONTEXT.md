# Chat Context — Ganesh Mesta · Works Dashboard

A record of the conversation that built this project, so the next session (or person) can pick it up without the original chat. It covers what was asked, what was decided, and where everything lives.

- **Owner:** Ganesh Mesta
- **Location:** `C:\practise-folder\works`
- **Stack:** React 19 · MUI 9 · Redux Toolkit · React Router 7 · Vite 8
- **Run it:** `npm install` once, then `npm run dev` → http://localhost:5173
- **Build:** `npm run build` (outputs `dist/`, ready for Netlify)

---

## 1. Goal

One single place to see **all of Ganesh's work** — every app hosted on Netlify (team `raiden-56`) — as a clean, professional portfolio dashboard with a carousel, a card grid, search/filters and a detail popup that links to each live site.

---

## 2. Conversation timeline

### Request 1 — Build the dashboard
> Create one app (React JS + MUI + Redux) that brings every Netlify project into a single dashboard. Use the pasted image as UI reference ("My Visual Diary" — centered title, pill filters, coverflow carousel). 4-column card grid. Clicking a card opens a modal with image, description and a button to the live site. On image hover, a button at the bottom-right that opens the site directly. Search + filters in a single centered line. My name in the center. Build it in `C:\practise-folder\works`. Use the same images Netlify shows on its project cards (Chrome is logged in at app.netlify.com/teams/raiden-56/projects).

**Done:**
- Read the Netlify projects page in Chrome → **38 projects** across 2 pages (name, deploy source, publish date, screenshot URL).
- Saved them in `src/data/projects.js`. Live URL = `https://<name>.netlify.app`.
- Built: coverflow carousel, 4-column grid, detail modal, hover **Visit** button, single-line search + category pills + sort/filter menu, favourites, dark/light toggle.
- Fixed a crash where the carousel index went past a shrunk list after searching.

### Request 1b (mid-task) — Hide projects
> If I don't want to show some projects, there should be a hide option.

**Done:** hide icon on every card + "Hide" in the modal, **Undo** toast, **Hidden** manager dialog (unhide one / all). Hidden IDs are saved in `localStorage` and removed from carousel, grid and stats.

### Follow-up — Descriptions
Ganesh chose to **edit project descriptions himself** in `src/data/projects.js`. (Many original descriptions were guesses from project names.) He has since edited that file — don't overwrite it.

### Request 2 — Menu, pages, less rounding
> Cards are too rounded. Add a menu: Home and Projects. Home keeps the carousel, Projects lists all projects. My name as the logo. Clean.

**Done:**
- Sticky top **NavBar**: "Ganesh Mesta." logo, Home / Projects links, hidden-projects and theme buttons.
- React Router pages: `/` (Home) and `/projects` (Projects). Added `public/_redirects` for Netlify SPA routing.
- Corner radius cut from ~64px to 12–14px. (Cause: MUI multiplies numeric `borderRadius` in `sx` by `theme.shape.borderRadius` — use px strings.)
- Fixed a blank page: `window.scrollTo` returns a Promise in this browser, and an arrow-function `useEffect` returned it to React.

### Request 3 — Carousel on first screen, all projects, Poppins
> The carousel should be visible without scrolling, around/just below the center. Put all projects in the carousel. Use a rounder font like Poppins. Clean and professional.

**Done:**
- Home's first section fills the viewport; carousel height scales with screen height (`STAGE_HEIGHT` in `Carousel.jsx`), cards stay landscape on phones.
- Carousel shows **every visible project** (starred first, then newest).
- Whole app uses **Poppins**.
- Ganesh chose to **keep autoplay** (4.5s, pauses on hover / modal / pause button).

### Request 4 — Illustrations instead of screenshots, purple, animations
> Screenshots don't look professional. Create vector illustrations related to each project (reference: purple unDraw-style cards with title, description and outlined tech chips). Purple as primary color. Add animations.

**Done:**
- Hand-built **animated SVG illustrations** (no external images).
- Cards redesigned like the reference: illustration on top, bold title, 2-line description, purple outlined tag pills, purple glow on hover.
- Modal has an **Illustration / Live preview** switch (live preview = original Netlify screenshot).
- Purple theme; page animations: fade-up hero, scroll-reveal cards, count-up stats, drifting purple glow orbs, animated nav underline, purple **back-to-top** button. All motion respects `prefers-reduced-motion`.
- Animations only run while an illustration is on screen (IntersectionObserver).

### Request 5 — Make every illustration different
> The vector images look very similar. Make everything different.

**Done:** replaced the 15 shared templates with **38 one-of-a-kind scenes**, each with its **own palette** (14 palettes), **own background shape** and **own decoration**. See the table in §5.

### Ganesh's own changes (outside the chat)
- Edited `src/data/projects.js` (descriptions etc.).
- Switched the default theme to **light** (`themeMode: 'light'` in `worksSlice.js`, storage `VERSION = 3` in `store/index.js`). Keep light as default.
- Hid 5 projects in the browser (33 of 38 visible on his machine).

---

## 3. Project structure

```
src/
  main.jsx                Redux Provider + global CSS
  App.jsx                 Theme, router, background orbs, footer, global dialogs
  theme.js                MUI theme (purple primary, Poppins, light/dark)
  index.css               All keyframes: illustration (ill-*) + page animations
  data/projects.js        ⭐ The project list — edit titles/descriptions/tags here
  store/
    worksSlice.js         State, actions, selectors (filter, sort, hide, favourite…)
    index.js              Store + localStorage persistence (hidden, favourites, theme, sort)
  pages/
    HomePage.jsx          Intro + carousel (first screen), stats, "Recently shipped"
    ProjectsPage.jsx      Title, FilterBar, full grid
  components/
    NavBar.jsx            Logo, Home/Projects, hidden + theme buttons
    Carousel.jsx          Coverflow carousel (autoplay, arrows, swipe, keyboard)
    FilterBar.jsx         Search + category pills + "View more" + sort/source/favourites menu
    ProjectGrid.jsx       ProjectCard, CardGrid (4 columns), filtered grid + empty state
    ProjectMedia.jsx      Illustration or screenshot + hover Visit / favourite / hide buttons
    ProjectModal.jsx      Detail popup (art/live toggle, prev/next, copy link, Visit website)
    HiddenProjects.jsx    Hidden-projects dialog + "hidden — Undo" snackbar
    Reveal.jsx            Scroll-in fade animation wrapper
    BackToTop.jsx         Purple floating back-to-top button
  illustrations/
    Illustration.jsx      Renders a project's art (bg + backdrop + decor + scene)
    artMap.js             ⭐ Which scene / palette / background / decor each project gets
    kit.jsx               Palettes, backdrops, decorations, shared pieces (Avatar, Cloud…)
    scenesA.jsx           Scenes 1–19
    scenesB.jsx           Scenes 20–38 + generic Website fallback
public/_redirects         Netlify SPA rewrite (/* → /index.html)
```

---

## 4. Features checklist

| Feature | Where |
|---|---|
| Name as logo, Home / Projects menu | `NavBar.jsx` |
| Carousel visible on first screen, all projects, autoplay | `HomePage.jsx`, `Carousel.jsx` |
| 4-column responsive grid (4 → 3 → 2 → 1) | `ProjectGrid.jsx` |
| Search + filters in one centered line | `FilterBar.jsx` |
| Sort (newest / oldest / A–Z / Z–A), source filter, favourites only | `FilterBar.jsx`, `worksSlice.js` |
| Card click → modal (art, description, tags, date, URL, Visit website) | `ProjectModal.jsx` |
| Hover **Visit** button bottom-right of image → live site | `ProjectMedia.jsx` |
| Hide / unhide / undo, saved in browser | `HiddenProjects.jsx`, `store/index.js` |
| Favourites (heart) | `ProjectMedia.jsx`, `ProjectModal.jsx` |
| Light / dark theme (light default) | `theme.js`, `worksSlice.js` |
| Unique animated illustration per project | `illustrations/` |
| Page animations, back-to-top | `index.css`, `Reveal.jsx`, `BackToTop.jsx`, `HomePage.jsx` |

---

## 5. Illustration map

| Project | Scene | Palette | Background |
|---|---|---|---|
| ganesh-mesta | Laptop typing code, avatar "Hi!", `</>` chip | violet | arch |
| ganesh-mesta-old | Retro CRT with pixel face, history clock | slate | rings |
| madhumitha-k | Profile card with growing skill bars | rose | circle |
| dream-interior-design | Living room: sofa, glowing lamp, plant | amber | arch |
| layora | Page builder, block dragged into drop zone | emerald | grid |
| flipora | Open book with turning page, PDF badge | teal | circle |
| tripore | Globe with orbiting plane, suitcase, pin | sky | hills |
| personal-loan-tracker | House in progress ring, coins, falling balance | emerald | split |
| newprathampublicschool | School bus driving past school | orange | hills |
| little-angelss | ABC blocks, balloons, crayon | coral | bubbles |
| bapuji-college | Grad cap over book stack, diploma | indigo | arch |
| suchi-swagtika | Storefront, striped awning, swinging OPEN sign | teal | circle |
| intervexa | Video interview call, typing chat, checklist | cyan | split |
| floowpilot | Flowchart with decision diamond, bolt | blue | grid |
| filoraa | Fanned PDFs merging | coral | squares |
| camoora | Camera with turning lens, flash, prints | slate | circle |
| digitall-marketing | Megaphone, sound waves, rising hearts | orange | rings |
| mamta-stay | Cottage, lit windows, chimney smoke, STAY sign | cyan | hills |
| namma-vastrika | Clothes rack with swaying garments | rose | arch |
| bright-up | Glowing bulb + laptop lesson | amber | circle |
| organization-tree | Avatar org chart | blue | grid |
| salary-hike-calculators | Wallet, rising bars, trend arrow, % | lime | split |
| nyoumarket | Shopping bag with floating products | sky | squares |
| hire-guide | Mountains, trail, flag, compass | teal | hills |
| eat-central | Burger with steam, drink | orange | circle |
| coin-tosss | Flipping gold coin, Heads/Tails chips | gold | rings |
| my-appnest | Phone with app icons popping in | violet | squares |
| suggest-password | Password field, strength meter, key, dice | cyan | grid |
| tech-parallax | Night hills sliding at different speeds | indigo | plain |
| encrypt-decryption | Shield, rotating arrows, binary rain | emerald | rings |
| game-of-tik-tak-toe | Board drawing itself, winning line | coral | squares |
| clothes-e-commerce-web | Laptop product page, swinging hanger, cart | sky | circle |
| drag-drop-kanban-board | Kanban board, card being dragged | blue | grid |
| forecastfinder-weather | Spinning sun, cloud, rain, 24° card | cyan | hills |
| to-do-list-data | Clipboard ticking/striking items, pencil | lime | split |
| otp-generator-ui | Phone OTP boxes, SMS bubble, verified shield | violet | bubbles |
| generate-bar-code | Barcode label with scanning laser, QR | amber | grid |
| referlooop | Ring of people passing a gift | rose | rings |

Projects **not** in `artMap.js` automatically get the generic **Website** scene with a category icon, palette/background/decor picked from the project id.

---

## 6. How to…

**Add a project** — add an object to `src/data/projects.js` (`name`, `title`, `image` or `null`, `source`, `publishedAt`, `category`, `description`, `tags`, optional `featured: true`). It appears everywhere automatically; for a custom illustration, add a line to `ART` in `artMap.js`.

**Change a card's look** — edit its line in `artMap.js`: `art(Scene, 'palette', 'background', 'decor', shadow)`.
- Palettes: violet, teal, coral, sky, emerald, amber, indigo, rose, orange, cyan, lime, blue, gold, slate
- Backgrounds: blob, circle, arch, split, rings, hills, grid, squares, bubbles, plain
- Decor: stars, clouds, confetti, leaves, lines, dots, sparkle, gears, none

**Use a custom domain** — set `url` on that project in `projects.js` (otherwise `https://<name>.netlify.app`).

**Feature in carousel first** — `featured: true` in `projects.js`.

**Deploy to Netlify** — `npm run build`, deploy `dist/` (`_redirects` is copied automatically).

---

## 7. Gotchas learned in this chat

- **MUI `borderRadius` numbers are multiplied** by `theme.shape.borderRadius` in `sx` — use `'12px'` strings.
- **Never return an expression from `useEffect`** shorthand (`() => window.scrollTo(...)`) — `scrollTo` returns a Promise here and React crashes. Use a block body.
- **SVG animation + `transform` attribute don't mix** — CSS animation overrides the attribute. Position with a wrapping `<g transform>` (the `At` helper in `kit.jsx`), animate the inner group.
- **`transform-origin` affects `transform` attributes too** — that's why only `[class*='ill-']` elements get a centred origin; custom pivots are overridden with `.ill .ill-bar` etc. (higher specificity).
- **MUI icons inside SVG** need real `x/y/width/height` attributes — CSS size isn't applied to a nested `<svg>`.
- **MUI dark-mode Paper** adds a grey elevation overlay — disabled via `MuiPaper.styleOverrides.root.backgroundImage: 'none'`.
- **Netlify screenshot URLs** go through `app.netlify.com/.netlify/images?url=…`; the real image is the `url` param on `d33wubrfki0l68.cloudfront.net` (publicly loadable).
- Changing the default theme? Bump `VERSION` in `store/index.js` so old saved themes don't override the new default.

---

## 8. Open items / ideas

- Project descriptions, categories and tags — Ganesh is editing these himself.
- Live URLs assume `<name>.netlify.app`; confirm any custom domains.
- The JS bundle is ~550 KB (Vite warns above 500 KB); could code-split the Projects page or icons if needed.
- Not yet deployed — the app itself could be published to Netlify as Ganesh's portfolio.
