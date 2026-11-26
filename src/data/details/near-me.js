import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import SensorsRoundedIcon from '@mui/icons-material/SensorsRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import EmergencyRoundedIcon from '@mui/icons-material/EmergencyRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DirectionsRoundedIcon from '@mui/icons-material/DirectionsRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import InstallMobileRoundedIcon from '@mui/icons-material/InstallMobileRounded';
import WifiOffRoundedIcon from '@mui/icons-material/WifiOffRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import PrivacyTipRoundedIcon from '@mui/icons-material/PrivacyTipRounded';
import ThumbsUpDownRoundedIcon from '@mui/icons-material/ThumbsUpDownRounded';
import MyLocationRoundedIcon from '@mui/icons-material/MyLocationRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';

// Case study for https://github.com/raiden-56/near-me (NearMe – “Everything Around You”, a location-first PWA).
// Screenshots are from the GitHub Pages build at https://raiden-56.github.io/near-me/, captured headless at
// 1440×770 with puppeteer-core. Geolocation was granted and pinned to the app’s own default starting point
// (VITE_DEFAULT_LAT/LON 12.9142, 77.6095, BTM Layout, Bengaluru), which the app reverse-geocodes to Kuvempu Nagar;
// no real person’s location was used. Each shot waited for the OpenFreeMap tiles and the place data to load.
// The site was browsed as a guest only: nobody signed in, no account was created, nothing was posted to the feed
// and no event, review or business was submitted. For the last shot four places were saved, which only writes to
// the browser’s own IndexedDB. The “Places and maps are real” banner was closed with its own button; the PWA
// install card (it slides in after 12 s) and toasts were hidden with CSS so they don’t cover content. Ratings,
// reviews, live updates, deals and events in the shots are the app’s labelled sample data.
const shot = (file) => `/projects/near-me/${file}`;

export default {
  product: 'NearMe',
  accent: '#E97845',
  tagline:
    'Everything around you in one installable app: nearby places from OpenStreetMap, a map with directions, a live neighbourhood feed, deals, events and emergency help, with no API keys and no sign-in needed to browse.',
  cover: shot('01-discover.webp'),
  overview: [
    'NearMe is a location-first web app for the everyday question “what is near me, is it open and is it worth going right now?”. It finds where you are, or uses an area you pick, and fills a Discover screen, a map and 48 categories in 9 groups (food, health, shopping, automotive, home services, fitness, daily needs, travel and safety) with real places from OpenStreetMap. A place page brings together the facts the map holds (opening hours, phone, website, cuisine, amenities), photos, reviews, offers and current live updates, with directions by car, bike or on foot. Around that sit NearMe Live, a feed of short-lived neighbourhood updates such as queues, closures, parking, traffic and power cuts; local deals and events; an Emergency page that puts the national numbers and the closest hospitals and pharmacies first; and saved places with collections that open offline. A business portal and an admin area are part of the same build.',
    'What sets it apart from map or directory apps is that every live update has a lifetime, a verification state and a confidence score, so expired or disputed reports never show as current. Everything that is sample data is labelled “Sample” and can be switched off, and hospitals, clinics, pharmacies and police never get a sample rating. It also needs no keys, accounts or backend: places, tiles, geocoding, routing and photos all come from public OpenStreetMap and Wikimedia services, and anything you write stays on the device until Supabase is connected. In this portfolio, TravelCanvas (Tripore) is a signed-in journal of places you have already been, Karavali Go is a ride marketplace for one coastal town, and ForecastFinder looks up weather for a city you type. NearMe is about what is around you right now, in any area OpenStreetMap covers, and you can open it as a guest. It is built with React 19, TypeScript and Vite, uses MapLibre for the map, and ships a Supabase schema (PostgreSQL + PostGIS with Row Level Security) that has been validated but not yet connected.',
  ],
  highlights: [
    { value: 48, label: 'Place categories' },
    { value: 11, label: 'Live update types' },
    { value: 34, label: 'Postgres tables (ready)' },
    { value: 53, label: 'Unit tests' },
  ],
  stack: [
    'React 19',
    'TypeScript',
    'Vite 8',
    'Tailwind CSS 4',
    'Radix UI',
    'React Router 8',
    'TanStack Query 5',
    'Zustand 5 + IndexedDB (idb)',
    'Zod 4 · React Hook Form',
    'Motion',
    'MapLibre GL + OpenFreeMap tiles',
    'Overpass · Nominatim · Photon',
    'OSRM routing',
    'Wikimedia Commons',
    'Recharts',
    'vite-plugin-pwa (Workbox)',
    'Supabase: PostgreSQL + PostGIS, RLS',
    'Vitest',
    'GitHub Actions → GitHub Pages',
  ],
  architecture: [
    { title: 'src/features + app shell', text: 'One app shell (sidebar or bottom navigation, banners, sheets) around lazily loaded screens: Discover, search, categories, map, place, Live, deals, events, emergency, saved, profile and settings. The /business portal and /admin area are separate route trees that are only downloaded the first time someone opens them.' },
    { title: 'src/services/places', text: 'A tiles → Overpass → Nominatim pipeline. The poi layer of the same OpenFreeMap vector tiles the map draws gives every place in the radius in about 100 ms, and records are then upgraded with full OSM tags. Overpass mirrors are tried in parallel 2.5 s apart behind a circuit breaker, and results are cached in IndexedDB so the last area opens offline.' },
    { title: 'src/lib + src/services', text: 'UI talks to hooks and hooks to services, never to a provider directly. Plain modules hold the search intent parser, an opening-hours parser, the trust and confidence rules for live updates, routing, photos and an outbox that sends reviews and updates written offline. In local mode the backend is a Zustand store persisted to IndexedDB.' },
    { title: 'supabase/', text: 'Six migrations: extensions and enums, 34 tables, triggers and RPCs with a pg_cron schedule, 74 Row Level Security policies, storage buckets and reference data, plus a dev seed. They were checked on PGlite with real PostGIS (423 behavioural checks) but are not yet applied to a live project, and the services still use the local store.' },
    { title: 'PWA (vite.config.ts)', text: 'Manifest with icons and shortcuts to the map, Live, Emergency and Saved. Workbox precaches the app shell, serves map tiles cache-first, place data network-first and images stale-while-revalidate, and the app adds its own install card, iOS instructions, update prompt, offline banner and a push handler.' },
  ],

  why: {
    intro:
      'The same small decisions come up every day: which pharmacy nearby is open, whether the ATM has cash, how long the queue is at the petrol pump, where to park, what is on this weekend. The answers are spread over a map app, a directory, WhatsApp groups and word of mouth, and much of it is out of date. NearMe answers them in one place for the area around you. It uses real OpenStreetMap places and adds a neighbourhood layer that clears itself when it goes stale.',
    points: [
      {
        icon: ExploreRoundedIcon,
        title: 'Find what you need nearby',
        text: 'Type the problem in your own words (“puncture”, “cheap cafe”, “pharmacy open now”) or tap a category. Results come back ranked by distance, rating or price, with filters for open now, available now and distance.',
      },
      {
        icon: SensorsRoundedIcon,
        title: 'Know before you go',
        text: 'NearMe Live shows queues, waiting times, closures, parking, traffic, road works and outages reported in the last few minutes or hours. Each update expires on its own, from 20 minutes for a queue to 12 hours for a price.',
      },
      {
        icon: EmergencyRoundedIcon,
        title: 'Help when it matters',
        text: 'The Emergency page puts the national numbers first, then the closest hospitals (emergency departments first), pharmacies (open ones first), clinics and police. It never uses community reports as its source.',
      },
      {
        icon: VerifiedRoundedIcon,
        title: 'Honest about its data',
        text: 'Every place and fact comes from OpenStreetMap and links to its source. Ratings, reviews, deals, events and live updates that are generated are tagged “Sample”, can be switched off in Settings, and are never attached to health or safety services.',
      },
    ],
    audience: [
      { title: 'Residents', text: 'Check what is open, where the queue is short and whether there is a power cut before leaving home, and keep favourite places in collections.' },
      { title: 'Newcomers and visitors', text: 'Get a city guide for any area: what is around, what is popular, what is on this weekend and how to get there on foot, by bike or by car.' },
      { title: 'Local businesses', text: 'Claim a listing, keep hours and services right, post live availability and offers, reply to reviews and see views, calls and direction requests.' },
      { title: 'Moderators', text: 'Review flagged content and business verifications, decide which categories lead the home screen and tune how long each kind of update lasts.' },
    ],
  },

  solves: [
    {
      problem: 'Maps show places but not whether going there is worth it right now.',
      solution: 'Place pages and the map carry current live updates (queue, waiting time, availability, closure), and the “Available now” filter keeps only places where a current update says it is free or the queue is short.',
    },
    {
      problem: 'Community reports go stale and stay up.',
      solution: 'Each update type has its own lifetime, posting the same update again refreshes it instead of duplicating it, and expired updates move to an “Earlier” list and are never shown as current.',
    },
    {
      problem: 'You cannot tell which reports to trust.',
      solution: 'Updates are marked Business confirmed, Community verified (three or more confirmations), Unverified or Disputed, with a confidence level from the reporter’s reputation, confirmations, disagreements and age.',
    },
    {
      problem: 'Search boxes need the exact category name.',
      solution: 'The local intent parser understands synonyms and typos (“restarant” becomes restaurant), “open now”, “cheap” or “under ₹2000”, “best”, “low queue” and “X near <landmark>”, and adds related categories, such as mechanics and roadside help for a puncture.',
    },
    {
      problem: 'Location data is personal.',
      solution: 'Location is never required: a denied permission falls back to an area you pick. A GPS fix is stored rounded to about 100 m with no history, area updates sit on a ~300 m grid, and nobody sees anyone else’s position.',
    },
    {
      problem: 'Directory apps need keys, accounts and a server before they show anything.',
      solution: 'NearMe runs on public OpenStreetMap services with no keys and works fully as a guest. In local mode accounts, reviews, updates and saved places live in IndexedDB until Supabase is connected.',
    },
    {
      problem: 'A weak connection makes a city guide useless.',
      solution: 'The last area, saved places and recently viewed places open offline, map tiles are cached, an offline banner says live data is paused, and reviews or updates written offline are queued and sent on reconnect.',
    },
    {
      problem: 'Small businesses have no simple way to say they are open, busy or running an offer.',
      solution: 'The business portal lets an owner claim a place, verify with one document, set hours, services and photos, post “Business confirmed” live updates and offers, and reply to reviews.',
    },
  ],

  features: [
    { icon: ExploreRoundedIcon, title: 'Discover', text: 'A home screen for your area: quick actions (Near Me, Open Now, Deals, Explore Map, Emergency), a category row with live counts, then Popular, Open right now, Nearby essentials, Deals, Top rated, Local favourites, Trending, weekend ideas, New places and Recently viewed.' },
    { icon: MapRoundedIcon, title: 'Explore map', text: 'MapLibre on OpenFreeMap tiles recoloured to the brand palette, with clustered category pins, the search radius drawn as a ring, category chips, the same filters as search, a list or map view and “search this area” after you pan.' },
    { icon: DirectionsRoundedIcon, title: 'Directions', text: 'OSRM routes by car, bike or on foot with time, distance and turn-by-turn steps drawn on the map, and a “Start navigation” hand-off to Google Maps.' },
    { icon: SearchRoundedIcon, title: 'Smart search', text: 'Plain-language queries parsed on the device: synonyms, typo correction, open now, budget and price caps, top rated, low queue, landmarks and related categories. It also has voice input and remembers recent searches if you allow it.' },
    { icon: CategoryRoundedIcon, title: '48 categories', text: 'Nine groups from food and health to home services and safety. Each category page has sorting (best match, nearest, top rated, lowest price), open now, available now, distance from 500 m to 10 km or custom, rating and price.' },
    { icon: PlaceRoundedIcon, title: 'Place pages', text: 'Photos tagged by source, OSM facts (cuisine, services and amenities), opening hours with “Closes 10 pm”, address and walking time, call, website, share and save, current live updates, offers, reviews, similar places nearby and “Report a problem”.' },
    { icon: SensorsRoundedIcon, title: 'NearMe Live', text: 'Eleven update types with two-tap answers, topic filters (queues, availability, roads, parking, outages, events, prices), Verified only or Needs confirmation, a 1 to 10 km radius, and Still true / Not accurate votes, one per person.' },
    { icon: ThumbsUpDownRoundedIcon, title: 'Reviews', text: 'One review per person per place with food, service, ambience and value scores, a rating breakdown, sorting by recent, helpful, highest or lowest, and business replies.' },
    { icon: LocalOfferRoundedIcon, title: 'Deals', text: 'Offers from nearby businesses by category and distance, sorted by nearest or ending soon. Promoted offers are kept in their own section, and saved deals stay until they expire.' },
    { icon: EventRoundedIcon, title: 'Events', text: 'What is on over the coming days, filtered by today, this weekend or free entry and by music, markets, food, culture, sports, wellness or workshops. You can mark “I’m interested”, share an event or submit one.' },
    { icon: EmergencyRoundedIcon, title: 'Emergency and essentials', text: 'Country-specific emergency numbers (112, 108, 100, 101, 1091 and 1098 in India), then the nearest hospitals, pharmacies, clinics, police and fire stations with call and directions buttons.' },
    { icon: BookmarkRoundedIcon, title: 'Saved places and collections', text: 'Save any place without an account, group places into collections (five starter ones or your own) and browse them as a list or on a map, available offline.' },
    { icon: EmojiEventsRoundedIcon, title: 'Contributions and levels', text: 'Add a missing place, suggest an edit or category, add photos or report a closure. Points count only once a contribution is verified, and lift you from Explorer to Local Scout, Neighborhood Expert and Community Hero.' },
    { icon: StorefrontRoundedIcon, title: 'Business portal', text: 'Claim or add a listing, verify it with one document, manage hours, services, photos, offers and live availability, reply to reviews and see daily views, calls, direction requests and saves on Free, Plus (₹499) or Pro (₹1,499) plans.' },
    { icon: AdminPanelSettingsRoundedIcon, title: 'Admin area', text: 'Dashboard and analytics, moderation and reports, business verification, users, reviews, deals, events, the categories that lead the home screen, and policy settings such as update lifetimes and confirmations needed.' },
    { icon: InstallMobileRoundedIcon, title: 'Installable PWA', text: 'Standalone install with its own install card, iOS “Add to Home Screen” help, home-screen shortcuts, an update prompt and a push notification handler.' },
    { icon: WifiOffRoundedIcon, title: 'Offline first', text: 'Cached tiles and place data, offline saved and recently viewed places, a clear offline banner, and an outbox that sends queued reviews and updates when the connection returns.' },
    { icon: PrivacyTipRoundedIcon, title: 'Privacy and data controls', text: 'Coarsened location with no history, a switch for sample content, an opt-out for search history, light and dark themes, reduced motion, and one button to erase everything on the device.' },
  ],

  steps: [
    { icon: MyLocationRoundedIcon, title: 'Set your area', text: 'Open the live demo and allow location, or skip it and NearMe starts in BTM Layout, Bengaluru. Change the area any time from “Exploring around” at the top.' },
    { icon: ExploreRoundedIcon, title: 'Start on Discover', text: 'Use a quick action or a category, or scroll through what is popular, open right now and essential nearby.' },
    { icon: SearchRoundedIcon, title: 'Search in plain words', text: 'Press / or click the search bar and type what you need, like “puncture”, “best biryani” or “pharmacy open now”. Narrow the results with the filters on the left.' },
    { icon: PlaceRoundedIcon, title: 'Open a place', text: 'Check the opening hours, call or visit the website, read reviews, and press Directions to compare drive, cycle and walk times on the map.' },
    { icon: SensorsRoundedIcon, title: 'Check NearMe Live', text: 'See what neighbours and businesses report right now and how much to trust it. Posting or confirming an update needs a sign-in.' },
    { icon: LocalOfferRoundedIcon, title: 'Browse deals and events', text: 'Filter offers by category and distance and events by day or type. Save a deal or mark an event you are interested in.' },
    { icon: BookmarkRoundedIcon, title: 'Save and go offline', text: 'Bookmark places and sort them into collections. Install the app from the install card or Settings so they open without a connection.' },
    { icon: TerminalRoundedIcon, title: 'Run it yourself', text: 'Clone the repo, run npm install and npm run dev, and copy .env.example to .env.local to change providers, the starting area or connect Supabase. In local mode, Settings → Workspaces opens the business portal and admin area for a device account.' },
  ],
  shortcuts: [{ keys: ['/'], action: 'Open search from any screen (ignored while typing in a field)' }],

  screenshots: [
    {
      src: shot('01-discover.webp'),
      icon: ExploreRoundedIcon,
      title: 'Discover your area',
      text: 'The home screen for Kuvempu Nagar in Bengaluru, the app’s default area: quick actions for Near Me, Open Now, Deals, Explore Map and Emergency, then categories with counts from OpenStreetMap (128 restaurants, 48 cafes, 35 medical stores, 52 ATMs within 2 km) above Popular around you, drawn from 1,239 places.',
    },
    {
      src: shot('02-explore-map.webp'),
      icon: MapRoundedIcon,
      title: 'Explore the map',
      text: 'All 1,239 places within 2 km, clustered on the warm-recoloured OpenFreeMap map with the search radius as a dashed ring. The list on the left uses the same filters as search: category chips, Open now, sort order and Available now. The round button on the map opens the live updates.',
    },
    {
      src: shot('03-category.webp'),
      icon: CategoryRoundedIcon,
      title: 'Browse a category',
      text: 'Cafes: 48 within 2 km, nearest first. The sidebar sorts by best match, distance, rating or price and filters by open now, available now, distance (500 m to 10 km or custom), rating and price. Ratings here are sample data.',
    },
    {
      src: shot('04-smart-search.webp'),
      icon: SearchRoundedIcon,
      title: 'Search in plain words',
      text: 'Typing just “puncture” is understood as Bike repair and Mechanics, with Two-wheeler mechanics and Roadside assistance added as related searches, giving 40 results within 2 km. The microphone in the search bar starts voice search.',
    },
    {
      src: shot('05-place-details.webp'),
      icon: PlaceRoundedIcon,
      title: 'Place details',
      text: 'A cafe’s page with its cuisine and outdoor seating from OpenStreetMap, “Open · Closes 10 pm” from the listed hours, the address with a 7-minute walk, phone and website, and Directions, Call, Website, Review, Share and Save. The Right now section invites a live update.',
    },
    {
      src: shot('06-directions.webp'),
      icon: DirectionsRoundedIcon,
      title: 'Directions',
      text: 'Pressing Directions on the place page opens the map with an OSRM route: 2 minutes and 830 m by car, with Cycle and Walk tabs, turn-by-turn Steps and a Start navigation hand-off. Zoomed in, the clusters split into category pins with names.',
    },
    {
      src: shot('07-live-feed.webp'),
      icon: SensorsRoundedIcon,
      title: 'NearMe Live',
      text: '14 current updates within 2 km, 7 of them verified, grouped by topic. A 20-minute wait reported by a Local Scout is Unverified with medium confidence and 30 minutes left, and a long billing queue is Community verified. The side panel explains what each state means. All updates shown are labelled Sample.',
    },
    {
      src: shot('08-events.webp'),
      icon: EventRoundedIcon,
      title: 'What’s on nearby',
      text: 'Events grouped by day with type filters: an open mic night today at a coffee shop 1.6 km away with a ₹199 cover, and a regional food festival and a film screening tomorrow, each with time, venue, distance, price and an “I’m interested” count.',
    },
    {
      src: shot('09-emergency.webp'),
      icon: EmergencyRoundedIcon,
      title: 'Emergency and essentials',
      text: 'The national emergency number 112 with ambulance, police, fire, women’s and child helplines, a note that listings come from OpenStreetMap and never from community reports, and the closest hospitals (emergency departments first) and pharmacies (open ones first, one open 24 hours at 110 m).',
    },
    {
      src: shot('10-saved.webp'),
      icon: BookmarkRoundedIcon,
      title: 'Saved places',
      text: 'Four saved places on a map next to their cards, filtered by Food or Health. Above them are the starter collections (Favorite Restaurants, Weekend Places, Places to Visit, Emergency Services, My Neighborhood). Saved places are kept on the device and open without a connection.',
    },
  ],
};
