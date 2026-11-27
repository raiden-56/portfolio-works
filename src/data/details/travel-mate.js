import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import ViewTimelineRoundedIcon from '@mui/icons-material/ViewTimelineRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import RouteRoundedIcon from '@mui/icons-material/RouteRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import LuggageRoundedIcon from '@mui/icons-material/LuggageRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import SellRoundedIcon from '@mui/icons-material/SellRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';

// Case study for https://github.com/raiden-56/travel-mate (TravelMate – “Your entire journey. One place.”).
// Screenshots are from the GitHub Pages demo at https://raiden-56.github.io/travel-mate/, captured headless at
// 1440×770 with puppeteer-core. The Pages build is a static export of the Next.js app with an in-browser
// implementation of the API (travelmate-web/src/demo): accounts, trips, expenses and checklists live in the
// visitor’s own browser, while weather (Open-Meteo) and driving routes (OSRM demo server) are live calls. The demo
// has no guest button; the capture signed in with the sign-in page’s own “Fill in demo admin” button (that
// administrator exists only in the browser’s storage). No password was typed and no account was created. In that
// throwaway profile the demo planner drafted a 3-day Gokarna trip, which was saved, and three sample expenses, a
// beach checklist and its suggestions were added; nothing left the browser. Weather, countdowns (“In 22 days”) and
// demo-planner timings depend on the day you visit. The maps use OpenStreetMap tiles since travel-mate 026abd0
// (CARTO’s basemaps started asking for an API key); the three map screenshots were retaken from the live site after
// that fix, so every shot is the live build as is. Sonner toasts were hidden with CSS; the amber “Demo” banner is part
// of the page and was left in.
const shot = (file) => `/projects/travel-mate/${file}`;

export default {
  product: 'TravelMate',
  accent: '#283C32',
  tagline:
    'Discover a destination, draft a realistic day-by-day plan, see it on a map, and keep the budget and packing list beside it, all in one trip workspace.',
  cover: shot('07-route-map.webp'),
  overview: [
    'TravelMate is a trip planner for short trips to places in and around Karnataka. You browse ten curated destinations (Coorg, Goa, Gokarna, Hampi, Chikmagalur, Dandeli, Jog Falls, Karwar, Murudeshwar and Udupi) by mood, budget and trip length, and read a guide for each: 66 curated places with durations, cost ranges and the best time of day, plus getting there, tips, FAQs and a live weather forecast. A three-step planner asks for dates, travellers, travel style, interests, pace, budget, transport, stay, diet and accessibility needs. It drafts a day-by-day plan from those curated places with times, meal breaks and overnight stays, and you review it before saving. Each trip then gets one workspace with Overview, Itinerary, Map, Budget, Checklist and Settings tabs. You can drag activities between days, see warnings about overlaps, tight transfers and overspending, and ask the planner to make the trip cheaper, less hectic or more adventurous. The map shows the day’s driving route, and the budget compares planned estimates with real expenses. Packing lists start from eight templates, and suggestions take the weather forecast into account. An admin portal manages destinations, places, users and an audit log.',
    'The codebase has two apps. travelmate-web is Next.js 15 (App Router, TypeScript, Tailwind v4, TanStack Query, Zustand, React Hook Form + Zod, dnd-kit, Leaflet, Framer Motion and GSAP). travelmate-api is a Spring Boot 3 modular monolith on Java 17 with 73 REST endpoints, JWT access tokens with rotating refresh cookies, permission-based security, Flyway migrations for 24 tables, and PostgreSQL 16 + PostGIS (or H2 in PostgreSQL mode for zero-setup local runs). Integrations sit behind ports. Claude plans trips when ANTHROPIC_API_KEY is set, and otherwise a deterministic “Offline planner” is used and labelled. Routes come from OSRM with a labelled straight-line fallback, weather from Open-Meteo, and every response says where its data came from. Phase 1 (discover, plan, edit, map, budget, checklist, admin) is built, with 36 API tests, 38 web unit tests and 10 Playwright end-to-end tests. Collaboration, expense splitting, documents, offline sync, bookings and payments, and travel memories are documented as Phases 2–4 and are not in the app yet. The Claude path and the PostGIS profile have not been exercised yet. The GitHub Pages copy is a static export with an in-browser version of the API, so trips are saved only in your browser. Weather and routes there are live.',
  ],
  highlights: [
    { value: 10, label: 'Curated destinations' },
    { value: 66, label: 'Curated places with estimates' },
    { value: 73, label: 'REST API endpoints' },
    { value: 24, label: 'Database tables' },
  ],
  stack: [
    'Next.js 15 (App Router)',
    'React 19',
    'TypeScript',
    'Tailwind CSS v4',
    'TanStack Query',
    'Zustand',
    'React Hook Form + Zod',
    'dnd-kit',
    'Leaflet + react-leaflet',
    'Framer Motion · GSAP',
    'Spring Boot 3.4 (Java 17)',
    'Spring Security + JWT',
    'Spring Data JPA · Flyway',
    'PostgreSQL 16 + PostGIS',
    'H2 (local profile)',
    'springdoc OpenAPI',
    'Open-Meteo · OSRM',
    'Anthropic Claude (optional)',
    'Vitest · JUnit · Playwright',
    'Docker Compose',
  ],
  architecture: [
    { title: 'travelmate-web/src/app', text: 'Route groups for the public site (landing, explore, destination guides with SEO metadata, JSON-LD, sitemap and robots), auth, the signed-in traveller app with the six-tab trip workspace, and the admin portal. Feature folders hold typed API calls, TanStack Query hooks and Zod schemas, and components never call fetch directly.' },
    { title: 'travelmate-api', text: 'A Spring Boot modular monolith: auth, users/profiles, destinations, search, favorites, trips, itinerary, ai, maps, weather, budget, checklist, admin and audit. Each module runs controller → service → repository with DTOs at the edge, code checks permissions rather than role names, and trip access goes through a single TripAccessService.' },
    { title: 'Integration ports', text: 'AiPlannerEngine (Claude or a deterministic planner), RouteProvider (OSRM or straight-line), WeatherProvider (Open-Meteo) and EmailSender (logged in dev). Each result carries its source and whether it is approximate or simulated, and the UI shows that label instead of inventing a drive time or forecast.' },
    { title: 'travelmate-web/src/demo', text: 'For GitHub Pages, next.config picks *.demo.tsx routes over *.dyn.tsx and trip URLs use ?id=. A 1,100-line in-browser router implements the API contract over seed data in localStorage, with its own planner, validations and a demo administrator. Weather and routes still call Open-Meteo and OSRM, and “Reset demo” restores the seed.' },
  ],

  why: {
    intro:
      'Planning a few days away usually means a list of places in a notes app, distances checked one by one in a maps app, a budget in a spreadsheet and a packing list somewhere else, plus an itinerary that looks fine until you see the drive times. TravelMate is for the traveller planning one specific trip: a weekend in Gokarna or three days in Coorg. It keeps the plan, the map, the money and the packing list for that trip together and is clear about which numbers are estimates.',
    points: [
      {
        icon: VerifiedRoundedIcon,
        title: 'Plans built from real places',
        text: 'The planner only uses curated places from the catalogue, each with a duration, cost range and best time of day. With Claude switched on, the model is limited to catalogue ids and every item is validated on the server.',
      },
      {
        icon: WarningAmberRoundedIcon,
        title: 'A plan you can actually follow',
        text: 'Days follow the pace you chose and include meal breaks and overnight stays. The itinerary flags overlaps, transfers that are too tight, hops over 100 km, days with more than six activities and spending above the budget, and it never changes anything without asking.',
      },
      {
        icon: DashboardRoundedIcon,
        title: 'One workspace per trip',
        text: 'Overview, itinerary, map, budget and checklist share the same trip, so a changed day updates the planned cost, and packing suggestions use the trip’s length, destination and weather forecast.',
      },
      {
        icon: CompareArrowsRoundedIcon,
        title: 'How it differs',
        text: 'Booking and itinerary-wallet apps organise reservations you already made, and generic AI trip generators can invent places, prices and drive times. TravelMate plans before anything is booked, from a curated catalogue. Every cost, route and forecast is marked as an estimate or shows its source, and nothing is ever shown as a booking. In this portfolio, TravelCanvas (Tripore) looks back: it is a memory map of places visited, planned or wished for, with memories pinned to each place. TravelMate looks ahead at one upcoming trip, with drive times and a day-by-day plan, and travel memories are only a Phase 4 item here. Karavali Go books the ride to and around Gokarna through verified drivers. TravelMate plans what you do once you are there and has no bookings or payments yet.',
      },
    ],
    audience: [
      { title: 'Weekend and short-trip travellers', text: 'Pick a destination by mood, budget or trip length, get a two- or three-day plan in a minute and adjust it day by day.' },
      { title: 'Families and mixed groups', text: 'Set the pace, diet and accessibility needs up front, and use “Make it family-friendly” or “Make it less hectic” on a saved trip.' },
      { title: 'Budget-minded planners', text: 'Set a total and category budgets, compare the itinerary’s estimated cost with what you actually spend, and ask the planner for a cheaper version.' },
      { title: 'Content administrators', text: 'Add and edit destinations and their places, publish or unpublish them, suspend or reactivate users and read the audit log.' },
    ],
  },

  solves: [
    {
      problem: 'It’s hard to know which places are worth the drive.',
      solution: 'Ten curated destination guides with mood tags, a recommended stay, a typical daily spend, the best time to visit and 66 places, each with its duration, cost range, best time of day and accessibility notes.',
    },
    {
      problem: 'A blank itinerary is slow to fill.',
      solution: 'A three-step planner turns dates, travellers, style, interests, pace and budget into a day-by-day draft with times, meal breaks and overnight stays that you review before it is saved.',
    },
    {
      problem: 'Plans look fine until the drive times don’t add up.',
      solution: 'The itinerary checks every day for overlaps, transfers shorter than the travel time, hops over 100 km, overloaded days and activities past the trip’s end, and links each warning to its day.',
    },
    {
      problem: 'Reworking a plan means starting over.',
      solution: 'Ask the planner to change a saved trip, for example to make it cheaper, less hectic or more adventurous, add a waterfall or a day, or optimise the route. You see the proposal first, and kept or booked activities stay put.',
    },
    {
      problem: 'Stops are scattered across a maps app.',
      solution: 'The trip map numbers each day’s stops, draws the OSRM driving route with distance and time, can reorder stops for a shorter drive, and lets you add a nearby or saved place to a day from the map.',
    },
    {
      problem: 'Budgets drift without anyone noticing.',
      solution: 'A total and per-category budget, planned costs taken from the itinerary’s estimates, logged expenses with category, date and payment method, and remaining and over-budget figures, all stored as exact decimals.',
    },
    {
      problem: 'Packing lists are generic.',
      solution: 'Eight templates (weekend, beach, trekking, camping, international, road trip, family, business) and suggestions based on trip length, destination type and the forecast, such as a rain jacket when rain is likely. Nothing is added until you confirm.',
    },
    {
      problem: 'Travel apps present guesses as facts.',
      solution: 'Seed content carries a “Curated sample” badge, costs an “Estimate” badge, integration data its source, and planner output says which engine produced it. A straight-line distance is never shown as a drive time.',
    },
  ],

  features: [
    { icon: TravelExploreRoundedIcon, title: 'Destination discovery', text: 'Search by name, region or activity, filter by daily budget and trip length, sort by featured, name or lowest budget, use 17 mood chips, find destinations near you and save favourites.' },
    { icon: PlaceRoundedIcon, title: 'Destination guides', text: 'Pre-rendered pages with overview, things to do, a category-filtered map, getting there, tips and safety, FAQs, a gallery and similar destinations, plus SEO metadata, JSON-LD and a sitemap.' },
    { icon: SearchRoundedIcon, title: 'Unified search', text: 'A Ctrl/⌘ K dialog with live suggestions across destinations, places and categories, keyboard navigation, recent searches and a full results page.' },
    { icon: WbSunnyRoundedIcon, title: 'Live weather', text: 'Current conditions and a daily forecast from Open-Meteo on destination pages and the trip overview. If the service fails, the app says “Weather unavailable” instead of showing a placeholder.' },
    { icon: AutoAwesomeRoundedIcon, title: 'Trip planner', text: 'Three steps: where and when, your style (12 travel styles, 14 interests, relaxed, balanced or packed pace, budget, transport, stay) and details (diet, accessibility). A badge names the engine: Claude, offline planner or demo planner.' },
    { icon: EditNoteRoundedIcon, title: 'Proposal review', text: 'The draft shows each day’s timeline with the reason every stop was picked and the total against your budget. Save it as a new trip, try again, change preferences, or apply it to an existing trip without touching kept items.' },
    { icon: ViewTimelineRoundedIcon, title: 'Itinerary board', text: 'Days and Overview views, drag and drop within and across days (mouse or keyboard), add or edit activities with times, cost, priority and status (planned, booked, completed, skipped, cancelled), and keep an item so the planner leaves it alone.' },
    { icon: WarningAmberRoundedIcon, title: 'Plan checks', text: 'Overlapping times, transfers too tight for the distance, hops over 100 km, more than six activities in a day, unusual durations, days past the trip’s end and planned costs above the budget. They are suggestions only.' },
    { icon: TuneRoundedIcon, title: 'Ask the planner', text: 'Free-text or one-tap requests (cheaper, less hectic, more adventure, add a waterfall, optimise the route, family-friendly, add one day) return a proposed plan that you apply or discard.' },
    { icon: RouteRoundedIcon, title: 'Trip map', text: 'Day or all-days view with numbered stops, the OSRM driving route with distance and time (or a labelled straight-line distance), stop-order optimisation, and layers for places to see and saved places that can be added to a day.' },
    { icon: AccountBalanceWalletRoundedIcon, title: 'Budget & expenses', text: 'Total and category budgets, per-person amount, planned versus spent per category, remaining and over-budget states, and expenses with currency, category, date, payment method and notes. Creation is idempotent and amounts are decimal-safe.' },
    { icon: ChecklistRoundedIcon, title: 'Checklists', text: 'Several lists per trip, eight templates, items grouped by category, progress bars, hide-done, and rule-based suggestions with their reasons and source (rules + Open-Meteo).' },
    { icon: EventNoteRoundedIcon, title: 'Trips', text: 'Create a trip yourself or from the planner, with a status lifecycle (planning, upcoming, in progress, completed, cancelled), a countdown, duplicate, archive, cancel, delete and optimistic locking against conflicting edits.' },
    { icon: DashboardRoundedIcon, title: 'Home, saved & profile', text: 'A personalised home with your next trip, travel stats, logged spending and featured places. A Saved page holds your favourites, and your profile stores your home city, preferred currency and travel styles, which the planner uses as defaults.' },
    { icon: AdminPanelSettingsRoundedIcon, title: 'Admin portal', text: 'Dashboard, destination and place management with draft and publish, user suspension and reactivation, and an append-only audit log. Every action is checked by permission on the server.' },
    { icon: SellRoundedIcon, title: 'Honesty labels', text: '“Curated sample”, “Estimate”, source labels and engine badges are required by the design system, and the static demo always shows a banner explaining what is stored locally and what is live.' },
    { icon: DarkModeRoundedIcon, title: 'Dark mode & mobile', text: 'A warm ivory and forest palette with a matching dark theme, a bottom tab bar on phones, dialogs that become bottom sheets, and motion that respects prefers-reduced-motion.' },
    { icon: LockRoundedIcon, title: 'Security', text: 'Stateless JWT access tokens, rotating refresh tokens in an HttpOnly SameSite=Strict cookie kept first-party through the Next.js proxy, permission checks per endpoint, per-trip access checks and rate limiting.' },
  ],

  steps: [
    { icon: TravelExploreRoundedIcon, title: 'Browse without signing in', text: 'Open the live demo, go to Explore, filter by mood or budget, and open a destination such as Gokarna for its places, map and weather. Press Ctrl K to search.' },
    { icon: LoginRoundedIcon, title: 'Sign in to the demo', text: 'On the sign-in page, press “Fill in demo admin”, then Sign in, or register an account. Either way, it exists only in your browser, and Reset demo in the banner clears everything.' },
    { icon: AutoAwesomeRoundedIcon, title: 'Describe your trip', text: 'Open TravelMate AI (or Plan a trip here on a destination page), choose the destination, dates, days and travellers, then your style, interests, pace, budget, transport and stay.' },
    { icon: EditNoteRoundedIcon, title: 'Review and save the plan', text: 'Read the day-by-day proposal and its total against your budget, press Try again for another version, then Save as trip.' },
    { icon: ViewTimelineRoundedIcon, title: 'Shape the itinerary', text: 'Drag activities between days, keep the ones you like, check the warnings panel, and ask the planner to make the trip cheaper or less hectic.' },
    { icon: MapRoundedIcon, title: 'Check it on the map', text: 'In the Map tab, pick a day to see the driving route, its distance and time, and press Optimize stop order for a shorter drive.' },
    { icon: LuggageRoundedIcon, title: 'Track money and packing', text: 'Set a budget and log expenses in Budget. In Checklist, start from a template and press Suggest for this trip for weather-aware items.' },
    { icon: TerminalRoundedIcon, title: 'Beyond the demo', text: 'The full version runs the Spring Boot API with PostgreSQL + PostGIS and Redis, and can draft plans with Claude; the demo answers in the browser instead.' },
  ],
  shortcuts: [
    { keys: ['Ctrl / ⌘', 'K'], action: 'Open or close search' },
    { keys: ['↑', '↓'], action: 'Move through search suggestions' },
    { keys: ['Enter'], action: 'Open the selected suggestion, or all results' },
    { keys: ['Space', '↑ ↓ ← →', 'Space'], action: 'Pick up, move and drop an itinerary activity with the keyboard' },
  ],

  screenshots: [
    {
      src: shot('01-landing.webp'),
      icon: TravelExploreRoundedIcon,
      title: 'Landing page',
      text: '“Your entire journey. One place.” over a photo of Coorg, with a “Where to next?” search and a Plan a trip button. The amber banner on every page of the static demo explains that data stays in the browser and that weather and routes are live.',
    },
    {
      src: shot('02-explore.webp'),
      icon: PlaceRoundedIcon,
      title: 'Explore destinations',
      text: 'Search, budget (under ₹2,000, ₹3,500 or ₹5,000 a day), trip length, sort and Near me, above 17 mood chips and the ten curated destinations with their recommended stay and estimated daily spend, such as Gokarna at 2–3 days and ₹1,500–₹4,000 a day.',
    },
    {
      src: shot('03-destination.webp'),
      icon: WbSunnyRoundedIcon,
      title: 'Destination guide',
      text: 'Things to do in Gokarna, each with duration, cost range marked Estimate, best time of day and accessibility notes. On the side are the best season, recommended stay, typical daily spend and the live Open-Meteo forecast with its source label.',
    },
    {
      src: shot('04-planner.webp'),
      icon: AutoAwesomeRoundedIcon,
      title: 'Planner preferences',
      text: 'Step 2 of 3 for a Gokarna trip from Bengaluru: Relaxed and Adventure styles, interests in beaches, temples, trekking and sunsets, a balanced pace of three to four things a day, a ₹18,000 budget, travel by bus and a homestay.',
    },
    {
      src: shot('05-plan-proposal.webp'),
      icon: EditNoteRoundedIcon,
      title: 'Proposed plan',
      text: 'The demo planner’s draft: 3 days in Gokarna for 2 with nine places, an estimated ₹12,670 within budget, and a day 1 timeline (Mahabaleshwar Temple, Gokarna Main Beach, a vegetarian meal and Kudle Beach at sunset), each with the reason it was chosen. Nothing is saved until Save as trip.',
    },
    {
      src: shot('06-itinerary.webp'),
      icon: ViewTimelineRoundedIcon,
      title: 'Itinerary board',
      text: 'Day 1 of the saved trip as draggable cards with start and end times, durations, estimated costs and the planner’s reasons, down to the homestay overnight. The sticky “Day 1 on the map” panel numbers the same stops.',
    },
    {
      src: shot('07-route-map.webp'),
      icon: RouteRoundedIcon,
      title: 'Route map',
      text: 'Day 1’s three stops linked by an OSRM driving route of 7.5 km and 14 minutes, labelled “Source · osrm”, with Optimize stop order and layers for places to see and saved places, on OpenStreetMap tiles.',
    },
    {
      src: shot('08-budget.webp'),
      icon: AccountBalanceWalletRoundedIcon,
      title: 'Budget & expenses',
      text: 'A ₹18,000 budget (₹9,000 per person), ₹12,670 planned from itinerary estimates, ₹7,000 spent and ₹11,000 remaining, with planned versus spent bars per category and three logged expenses: the KSRTC sleeper bus, the homestay and a thali lunch and dinner.',
    },
    {
      src: shot('09-packing-suggestions.webp'),
      icon: LuggageRoundedIcon,
      title: 'Packing suggestions',
      text: 'Suggestions for the trip from rules and the Open-Meteo forecast, each with its reason: sunscreen because Gokarna is a beach destination, a rain jacket because rain is likely this week, electrolytes for hot days and clothes for three days. They are added to the beach checklist only after you confirm.',
    },
    {
      src: shot('10-trip-overview.webp'),
      icon: DashboardRoundedIcon,
      title: 'Trip overview',
      text: 'The trip in one view: planning status, dates, travellers and a countdown, the next day’s stops with trip progress, money (budget, planned and spent), packing (4 of 24 packed) and the 7-day weather for Gokarna.',
    },
  ],
};
