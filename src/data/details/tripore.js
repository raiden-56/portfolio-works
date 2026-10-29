import MapRoundedIcon from '@mui/icons-material/MapRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import FolderSharedRoundedIcon from '@mui/icons-material/FolderSharedRounded';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import RouteRoundedIcon from '@mui/icons-material/RouteRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AddLocationAltRoundedIcon from '@mui/icons-material/AddLocationAltRounded';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';

// Case study for https://github.com/raiden-56/Tripora (branded TravelCanvas on the live site,
// "Travel Diaries" in the repo docs). Screenshots are from the public site at https://tripore.netlify.app
// — the in-app screens sit behind sign-in, so only the landing page and the public journey page are shown.
const shot = (file) => `/projects/tripore/${file}`;

export default {
  product: 'TravelCanvas',
  accent: '#1f7040',
  tagline:
    'Your personal travel memory map — every place you’ve been, every memory you’ve captured and every trip still waiting, on one living map.',
  cover: shot('01-hero.webp'),
  overview: [
    'Tripore (TravelCanvas, called Travel Diaries in the repo) turns scattered travel history — photos on phones and WhatsApp, wishlists in a notes app, half-planned trips in a group chat — into one map-first record of your life on the road. Each destination is pinned on a world or India map as visited, planned or wishlist, and memories, notes and a Google Drive folder hang off the place they belong to.',
    'Around that map sit the tools to keep the loop going: India Explorer progress across all 36 states and UTs, travel statistics and a yearly recap, a "What’s Next?" engine that suggests places from your own history, a day-by-day itinerary planner, trips with checklists, budgets and shared expenses, a local-guide marketplace and a shareable public journey page. It is a React + Vite frontend backed by a layered FastAPI service with PostgreSQL, Redis and Celery.',
  ],
  highlights: [
    { value: 80, label: 'API endpoints' },
    { value: 18, label: 'In-app screens' },
    { value: 36, label: 'States & UTs tracked' },
    { value: 53, label: 'Backend tests' },
  ],
  stack: [
    'React 19',
    'TypeScript',
    'Vite',
    'Tailwind CSS v4',
    'Framer Motion',
    'Zustand',
    'Leaflet',
    'FastAPI',
    'SQLAlchemy 2.0',
    'PostgreSQL',
    'Alembic',
    'Redis',
    'Celery',
    'JWT',
    'Docker',
  ],
  architecture: [
    { title: 'web/', text: 'React + TypeScript app: the public marketing site, public journey pages and the signed-in app behind /app.' },
    { title: 'app/ (FastAPI)', text: 'Layered backend — routes → services → repositories → SQLAlchemy models, with ownership checks on every user row.' },
    { title: 'Data & jobs', text: 'PostgreSQL (SQLite in dev) via Alembic migrations; Redis for caching and rate limits; Celery for story and GIF generation.' },
    { title: 'integrations/', text: 'Swappable adapters for the AI provider, Google Drive links, Razorpay payments and object storage.' },
  ],

  why: {
    intro:
      'Booking apps sell you the next trip, journaling apps don’t think in geography and photo apps sort by camera-roll date. Nothing shows “here’s everywhere I’ve actually been” — TravelCanvas is the map-first, memory-first place for that, and for turning it into the next trip.',
    points: [
      {
        icon: MapRoundedIcon,
        title: 'Geography first',
        text: 'Every entry is a pin on a real map, coloured by status, so your travel history reads at a glance instead of as a list.',
      },
      {
        icon: PhotoLibraryRoundedIcon,
        title: 'Memories live with places',
        text: 'Photos, notes, tags and a Drive folder sit under the destination they came from — Coorg’s photos live under Coorg.',
      },
      {
        icon: BookmarkAddRoundedIcon,
        title: 'Wishlists that become trips',
        text: 'A prioritised bucket list with one-tap “Add to Planned”, then countdowns, checklists and budgets for the trip itself.',
      },
      {
        icon: ShareRoundedIcon,
        title: 'Worth sharing',
        text: 'A public journey page, yearly recap and shareable photo albums replace a plain Instagram grid or a static PDF.',
      },
    ],
    audience: [
      { title: 'Everyday travellers', text: 'A visual record of every country, state and city they’ve visited.' },
      { title: 'Bucket-list keepers', text: 'People who want their dream list to turn into real, plannable trips.' },
      { title: 'Group trip planners', text: 'Shared checklists, budgets, collaborators and split expenses instead of a spreadsheet.' },
      { title: 'Travel creators', text: 'A good-looking public journey page and recap to share their year on the road.' },
    ],
  },

  solves: [
    {
      problem: '“Where have I actually been?”',
      solution: 'A world and India map with visited / planned / wishlist / favourite markers, filters and real travel statistics.',
    },
    {
      problem: 'Places I wanted to visit get forgotten.',
      solution: 'A structured wishlist with High / Medium / Low priority and an “Add to Planned” button on each card.',
    },
    {
      problem: 'Trip photos are a mess.',
      solution: 'Memories are attached to a destination, shown in a masonry gallery with a full-screen viewer and search by title or tag.',
    },
    {
      problem: 'Files live in Drive, disconnected from the trip.',
      solution: 'Each destination or trip can carry a Google Drive folder link, one click away from its details panel.',
    },
    {
      problem: 'Not sure where to go next.',
      solution: '“What’s Next?” and Discover rows suggest places based on the states, countries and favourites you’ve already explored.',
    },
    {
      problem: 'Planning a trip is chaotic.',
      solution: 'Upcoming trips get a countdown, a checklist, planned-vs-actual budget, invited collaborators and Splitwise-style expenses.',
    },
    {
      problem: 'Building an itinerary from scratch.',
      solution: 'Enter origin, destination, days, budget, style and interests and get a saved, day-by-day plan with places, activities and food.',
    },
    {
      problem: 'Sharing a travel year is clumsy.',
      solution: 'A yearly recap card, a public journey page and token-based photo album links that need no login to view.',
    },
  ],

  features: [
    { icon: MapRoundedIcon, title: 'Interactive travel map', text: 'Leaflet world and India maps with colour-coded status pins, hover previews and status filters.' },
    { icon: FlagRoundedIcon, title: 'India Explorer', text: 'Progress across all 36 states and union territories, with each state’s destinations one click away.' },
    { icon: AddLocationAltRoundedIcon, title: 'Destinations', text: 'Location search that auto-fills coordinates, plus status, dates, rating, notes and Maps / Drive links.' },
    { icon: PhotoLibraryRoundedIcon, title: 'Memories & Photo Hub', text: 'Memories tied to places, a masonry gallery with full-screen viewer, and photo uploads (JPEG, PNG, WebP up to 10 MB).' },
    { icon: FolderSharedRoundedIcon, title: 'Google Drive folders', text: 'Attach a Drive folder link to any destination or trip so files stay organised by place.' },
    { icon: TravelExploreRoundedIcon, title: 'Discover & What’s Next', text: 'Curated rows — Hidden Gems, Weekend Trips, Road Trips, “Because you loved…” — built from your own history.' },
    { icon: RouteRoundedIcon, title: 'Trip planner', text: 'A deterministic generator turns origin, days, budget, style and interests into a saved day-by-day itinerary.' },
    { icon: AutoAwesomeRoundedIcon, title: 'Canvas AI', text: 'A travel assistant that answers from your own destinations, behind a provider interface ready for a real LLM.' },
    { icon: ChecklistRoundedIcon, title: 'Upcoming trips', text: 'Countdown banner, preparation checklist and category budgets with planned vs actual totals.' },
    { icon: AccountBalanceWalletRoundedIcon, title: 'Collaborators & expenses', text: 'Invite editors or viewers to a trip, log shared expenses and see balances and who-owes-whom settlements.' },
    { icon: PersonSearchRoundedIcon, title: 'Local guide marketplace', text: 'Search guides, request a booking, accept / reject / complete it and leave a review — or become a guide.' },
    { icon: GroupsRoundedIcon, title: 'Community feed', text: 'Share trip highlights with other travellers, with likes and comments.' },
    { icon: InsightsRoundedIcon, title: 'Statistics & achievements', text: 'Countries, states, trips and travel days, activity by year, and milestones tied to real progress.' },
    { icon: AutoStoriesRoundedIcon, title: 'Stories, recap & sharing', text: 'Background-generated travel stories, a yearly recap, a public journey page and share links for albums.' },
  ],

  steps: [
    { icon: LoginRoundedIcon, title: 'Start your journey', text: 'Sign up and run the five-step onboarding (places you’ve been, traveller type, next destinations), or choose Explore Demo to try it with sample data.' },
    { icon: AddLocationAltRoundedIcon, title: 'Pin your destinations', text: 'Explore Map → Add Destination → search the place to auto-fill it, set Visited, Planned or Wishlist and Add to Journey.' },
    { icon: AddPhotoAlternateRoundedIcon, title: 'Capture memories', text: 'Add Memory with a title, destination, date, description and tags; paste a Google Drive folder link on the destination for its files.' },
    { icon: FlagRoundedIcon, title: 'Track your progress', text: 'Switch the map to India to open India Explorer, then check Travel Statistics and My Journeys for your timeline and achievements.' },
    { icon: EventRoundedIcon, title: 'Plan the next trip', text: 'Upcoming Trips → Add Trip, or press Add to Planned on a wishlist card. Open the trip for its checklist, budget, collaborators and expenses.' },
    { icon: RouteRoundedIcon, title: 'Draft an itinerary', text: 'In Trip Planner enter origin, destination, days, people, budget, style and interests and generate a day-by-day plan.' },
    { icon: PersonSearchRoundedIcon, title: 'Book a local guide', text: 'Hire a Guide → filter by place → send a booking request and review the guide after the trip.' },
    { icon: ShareRoundedIcon, title: 'Share your journey', text: 'Open your Public Journey link from Profile, share a photo album link, or show off your yearly recap.' },
  ],
  shortcuts: [],
  manual: 'https://github.com/raiden-56/Tripora/blob/main/USER_GUIDE.md',

  screenshots: [
    {
      src: shot('01-hero.webp'),
      icon: PublicRoundedIcon,
      title: 'Your journey, beautifully mapped',
      text: 'The landing hero puts a live Leaflet map front and centre, with sample counts for countries, destinations and memories — the whole product in one picture.',
    },
    {
      src: shot('02-live-map.webp'),
      icon: MapRoundedIcon,
      title: 'Live map demo',
      text: 'A working map with the demo traveller’s destinations, filterable by All, Visited, Planned and Wishlist. Pin colours match the statuses used inside the app.',
    },
    {
      src: shot('03-features.webp'),
      icon: ViewQuiltRoundedIcon,
      title: 'Everything in one place',
      text: 'The eight building blocks — travel map, memory vault, trip planner, Google Drive, statistics, wishlist, AI assistant and travel stories — on one grid.',
    },
    {
      src: shot('04-memories.webp'),
      icon: PhotoLibraryRoundedIcon,
      title: 'Memories belong to places',
      text: 'Photos are grouped by the trip and destination they came from rather than by camera-roll date, which is the core idea behind the memory vault.',
    },
    {
      src: shot('05-india-explorer.webp'),
      icon: FlagRoundedIcon,
      title: 'India Explorer',
      text: 'A progress bar out of 36 states and UTs with visited states highlighted, plus a World Explorer toggle — a concrete goal to keep exploring.',
    },
    {
      src: shot('06-canvas-ai.webp'),
      icon: AutoAwesomeRoundedIcon,
      title: 'Canvas AI suggestions',
      text: 'Ask “I loved Coorg and Hampi — where next?” and get destination cards with the reason, best season, ideal length and travel style for each.',
    },
    {
      src: shot('07-trip-planner.webp'),
      icon: RouteRoundedIcon,
      title: 'Itinerary in one click',
      text: 'Starting point, destination, days, budget and style in; a day-by-day plan of places and activities out. In the app the plan is saved to your account.',
    },
    {
      src: shot('08-yearly-recap.webp'),
      icon: CelebrationRoundedIcon,
      title: 'Your year in travel',
      text: 'The yearly recap card rolls up states, destinations, trips and memories for the year and is built to be shared.',
    },
    {
      src: shot('09-travel-stories.webp'),
      icon: AutoStoriesRoundedIcon,
      title: 'Every trip has a story',
      text: 'Trips become story cards with days, places and memory counts — the backend generates the written story in the background so nothing blocks.',
    },
    {
      src: shot('10-public-journey.webp'),
      icon: ShareRoundedIcon,
      title: 'Public journey page',
      text: 'A shareable profile with country, state and destination counts and favourite places, viewable without signing in.',
    },
  ],
};
