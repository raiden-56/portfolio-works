import LocalTaxiRoundedIcon from '@mui/icons-material/LocalTaxiRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import RequestQuoteRoundedIcon from '@mui/icons-material/RequestQuoteRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import CardMembershipRoundedIcon from '@mui/icons-material/CardMembershipRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import TourRoundedIcon from '@mui/icons-material/TourRounded';
import ReviewsRoundedIcon from '@mui/icons-material/ReviewsRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import ToggleOnRoundedIcon from '@mui/icons-material/ToggleOnRounded';

// Case study for https://github.com/raiden-56/karavali-go (Karavali Go – hyperlocal mobility and travel marketplace,
// launching in Gokarna). Screenshots are from the GitHub Pages demo at https://raiden-56.github.io/karavali-go/,
// captured headless at 1440×770 with puppeteer-core. The Pages build (`ng build -c pages`) has no server: every
// /api/v1 call is answered in the browser by an in-memory mock of the same API (apps/web/src/app/mock), with sample
// data for Gokarna kept in localStorage and recreated after 12 hours, so the dates and countdowns you see in the live
// demo move with the day you visit. Each role was opened in its own clean browser profile using only the sign-in
// page’s guest buttons (“Continue as guest”, “driver portal”, “admin console”); no phone number, OTP or passcode
// was typed and no account was created. Nothing was submitted: the outstation form was prefilled by a route card’s
// “Get quotes” button and the quote dialog was only opened. The floating “Demo mode” pill and the sign-in toast
// were hidden with CSS so they don’t cover content.
const shot = (file) => `/projects/karavali-go/${file}`;

export default {
  product: 'Karavali Go',
  accent: '#0E7C6B',
  tagline:
    'Verified local autos, taxis and tempo travellers for coastal Karnataka: find a driver on the map, compare fixed quotes for outstation trips and tours, and run the marketplace from a driver portal and an admin console.',
  cover: shot('02-nearby-drivers.webp'),
  overview: [
    'Karavali Go is a hyperlocal mobility and travel marketplace whose launch market is Gokarna, with Kumta, Honnavar, Murudeshwar and Karwar modelled as service areas ready to switch on. Customers see verified drivers who are online nearby on a live map, ask for a ride now, a scheduled ride, an outstation trip or a tour package, and compare fixed quotes from several drivers, each with its inclusions, exclusions and validity. Accepting a quote creates the booking in one transaction, and only a ₹49 booking fee plus GST on that fee is paid online; the fare goes to the driver after the trip. Drivers, owner-drivers and fleet owners onboard, upload their licence, RC, insurance and permit, go online with their location, quote on matching requests and move each trip through its states. Admins work through a verification queue with a 48-hour SLA and also handle bookings, refunds, pricing, plans, ads, tour packages, support tickets, review moderation and an audit log, each area behind its own permission.',
    'The codebase is a spec-driven monorepo: specs/ holds the product and functional requirements, eight feature specs, seven ADRs, a threat model, a traceability matrix and the API contract. apps/api is a NestJS 12 modular monolith with Zod validation and Swagger, Drizzle ORM on PostgreSQL 17 + PostGIS (24 tables) and Redis for OTPs, rate limits and locks, exposing 86 routes under /api/v1. Sign-in is phone OTP with rotating refresh cookies, and admins also need a passcode. The Angular 22 web app holds the customer site, the driver portal and the admin console, and CI runs 12 API unit tests, 12 end-to-end tests against a seeded API and 6 web tests. The README is clear that payments use a mock provider, SMS is only logged, documents go to local disk, there are no push notifications or WebSockets (the app polls) and nothing is deployed yet. The GitHub Pages copy is a guest demo: an in-browser mock of the API answers every call, demo drivers send quotes a few seconds after you post a request, and everything you do stays in your own browser. Real OTPs, payments, SMS, uploads and notifications need the backend.',
  ],
  highlights: [
    { value: 4, label: 'Trip types' },
    { value: 8, label: 'Booking states' },
    { value: 24, label: 'PostgreSQL tables' },
    { value: 86, label: 'API routes' },
  ],
  stack: [
    'Angular 22',
    'TypeScript 6',
    'Signals + standalone components',
    'RxJS',
    'Leaflet + OpenStreetMap',
    'NestJS 12',
    'Zod 4',
    'OpenAPI / Swagger',
    'Drizzle ORM',
    'PostgreSQL 17 + PostGIS 3.5',
    'Redis 7',
    'JWT + refresh rotation',
    'Helmet · throttler',
    '@nestjs/schedule',
    'Vitest + Supertest',
    'Docker Compose + nginx',
    'GitHub Actions',
  ],
  architecture: [
    { title: 'apps/web', text: 'Angular 22 SPA with standalone components and signals, split into three lazy areas: the public and customer site, the /driver portal and the /admin console. Route guards check the role and each admin permission, a poll() helper refreshes requests, quotes and trips while the tab is visible, and Leaflet draws the maps.' },
    { title: 'apps/api/src/modules', text: 'A NestJS modular monolith: auth, catalog, trips, driver, admin, support and jobs. A global guard requires sign-in unless a route is public, roles and the eight admin permissions are checked per endpoint, domain events become in-app notifications, and every admin action is audited.' },
    { title: 'apps/api/src/db', text: 'Drizzle schema and SQL migrations for 24 tables on PostgreSQL + PostGIS, with radius search for nearby drivers. Redis holds hashed OTPs, rate limits and locks; cron jobs expire stale requests, quotes and plans every minute and send document-expiry reminders at 09:00 IST.' },
    { title: 'apps/web/src/app/mock', text: 'The Pages build swaps in a demo-mode file through Angular fileReplacements, so regular builds contain no mock code. An HTTP interceptor routes every /api/v1 call to a 1,531-line in-browser copy of the API rules, with seed data in localStorage and demo drivers that quote on new requests.' },
  ],

  why: {
    intro:
      'Gokarna has no app-based ride hailing. Visitors arriving at the bus stand, the railway station or a Goa airport bargain on the spot with no way to tell whether a driver is licensed or insured. Locals phone around to compare prices for a family trip, and drivers depend on stand queues and hotel commissions. Karavali Go puts verified drivers and agreed fares in one place without taking a cut of the fare.',
    points: [
      {
        icon: VerifiedUserRoundedIcon,
        title: 'Only verified drivers are listed',
        text: 'A driver can go online only after an admin has approved their ID, licence, RC, insurance and permit, plus an owner authorisation when the vehicle belongs to someone else.',
      },
      {
        icon: RequestQuoteRoundedIcon,
        title: 'The fare is agreed before pickup',
        text: 'Drivers send fixed quotes listing what is included and what is extra. The customer compares them and accepts one, and the other quotes are declined automatically.',
      },
      {
        icon: HandshakeRoundedIcon,
        title: 'No commission on the fare',
        text: 'The platform earns from a small booking fee, driver subscription plans, featured listings and local ads. The fare itself is paid to the driver after the trip.',
      },
      {
        icon: LockRoundedIcon,
        title: 'Privacy for both sides',
        text: 'Customers see driver locations rounded to about 100 m. Drivers see a first name and initial until a booking is confirmed, document numbers are masked, and phone numbers are shown only while a booking is active.',
      },
    ],
    audience: [
      { title: 'Visitors', text: 'Get from the bus stand to Om Beach now, book a beach trail or a waterfall tour, or arrange an airport transfer back to Goa.' },
      { title: 'Local residents', text: 'Post one outstation request for a family trip and compare quotes instead of calling several drivers.' },
      { title: 'Drivers and fleet owners', text: 'Autos, sedans, SUVs and tempo travellers build a verified profile with ratings and receive requests that fit their vehicle and area.' },
      { title: 'Operators', text: 'Verification, operations and super admins each see only the console areas their permissions allow, and every decision is audited.' },
    ],
  },

  solves: [
    {
      problem: 'Visitors can’t tell whether a driver is licensed or insured.',
      solution: 'Every listed driver has passed document review, and their profile shows a Verified badge, the vehicle with its registration number, languages, trip count and public reviews.',
    },
    {
      problem: 'Fares are haggled on the spot.',
      solution: 'Each quote is a fixed fare with its inclusions (tolls, driver allowance, free waiting) and exclusions, shown with a breakdown of fare, booking fee and GST before you accept.',
    },
    {
      problem: 'Comparing prices for an outstation trip takes several phone calls.',
      solution: 'One request reaches every verified driver in the service area whose vehicle fits the passengers. Quotes arrive on a single page that sorts by best value, rating or earliest pickup.',
    },
    {
      problem: 'Nobody knows which drivers are free right now.',
      solution: 'A live map and list show online drivers within 1, 3, 5 or 10 km by category, with distance, ETA, rate per km and minimum fare. Featured drivers are listed first, and drivers whose location has gone stale are hidden.',
    },
    {
      problem: 'Cancellations and refunds are argued case by case.',
      solution: 'Written rules: the fee is refunded for a ride-now cancelled within 5 minutes or another trip cancelled at least 2 hours before pickup, and always when the driver cancels. Admins can cancel any active booking with or without a refund.',
    },
    {
      problem: 'Driver paperwork expires without anyone noticing.',
      solution: 'Expiry dates are required for the licence, insurance, permit and fitness certificate. The driver dashboard warns about documents close to expiry, the admin queue has an Expiring tab, and a daily job sends reminders.',
    },
    {
      problem: 'Verification requests get forgotten.',
      solution: 'The admin queue counts down a 48-hour SLA per applicant, flags those close to breaching it, and allows approval only once every required document has been approved.',
    },
    {
      problem: 'Local drivers have no digital presence.',
      solution: 'A public profile with ratings and replies to reviews, plus Basic, Pro and Fleet plans and featured listings for extra visibility, all paid through a mock gateway in this version.',
    },
  ],

  features: [
    { icon: MapRoundedIcon, title: 'Nearby drivers on a map', text: 'Leaflet and OpenStreetMap with your position and the online drivers marked by ETA, category chips (Auto, Sedan, SUV, Tempo Traveller), a 1 to 10 km radius and approximate locations.' },
    { icon: LocalTaxiRoundedIcon, title: 'Four trip types', text: 'Ride now, scheduled, outstation and tour package. The form checks the service area, pickup time (15 minutes to 60 days ahead), passengers and bags, and shows a distance, time and typical fare estimate.' },
    { icon: RequestQuoteRoundedIcon, title: 'Compare quotes', text: 'Quotes from several drivers sorted by best value, rating or pickup time, with inclusions, exclusions, validity, a countdown for the open request and the price breakdown for the selected quote.' },
    { icon: HandshakeRoundedIcon, title: 'One-step booking', text: 'Accepting a quote locks the request, creates the booking, records the booking-fee payment and declines the other quotes in one transaction, protected by an Idempotency-Key.' },
    { icon: TimelineRoundedIcon, title: 'Trip timeline', text: 'Confirmed, driver en route, arrived, in progress, completed. Only forward, single-step changes are allowed, each change is timestamped and notified, and cancellations follow the refund rules.' },
    { icon: TourRoundedIcon, title: 'Routes and tour packages', text: 'Popular routes to Murudeshwar, Honnavar, Karwar and Goa Airport prefill an outstation request, and admin-managed sightseeing packages are priced per vehicle.' },
    { icon: BadgeRoundedIcon, title: 'Driver onboarding', text: 'Individual, owner-driver or fleet owner, with bio, languages, rate per km and minimum fare. Registration numbers are normalised and unique, and the owner relationship is recorded.' },
    { icon: UploadFileRoundedIcon, title: 'Document upload', text: 'Seven document types, JPG, PNG or PDF up to 5 MB checked by file signature, masked numbers, required expiry dates and private file access for the driver and verification admins.' },
    { icon: ToggleOnRoundedIcon, title: 'Go online and quote', text: 'Verified drivers go online with their location and get a feed of requests that fit their vehicle and area, with a suggested fare from their rates and a quote dialog for fare, vehicle, inclusions and validity.' },
    { icon: DashboardRoundedIcon, title: 'Driver dashboard', text: 'Requests today, trips and earnings this week, rating and cancellation rate, alerts for expiring documents, upcoming bookings, the current plan and featured status.' },
    { icon: CardMembershipRoundedIcon, title: 'Plans and featured listings', text: 'Basic (₹299), Pro (₹599) and Fleet (₹1,499) monthly plans with included featured days, and featured boosts at ₹199 per 7 days that put a driver first in nearby search.' },
    { icon: ReviewsRoundedIcon, title: 'Reviews and replies', text: 'One review per completed trip, public driver replies, and admin moderation that recalculates the rating from the reviews still visible.' },
    { icon: FactCheckRoundedIcon, title: 'Verification queue', text: 'Pending, re-submitted, expiring and all tabs, an SLA countdown, approve or reject per document with a reason, and approve, reject, suspend or reinstate for the driver.' },
    { icon: AdminPanelSettingsRoundedIcon, title: 'Admin console', text: 'Twelve sections: overview, bookings, payments and refunds, support tickets, verification, users and drivers, reviews, plans, ads, tour packages, fees and pricing rules, and the audit log.' },
    { icon: TuneRoundedIcon, title: 'Configurable pricing', text: 'Booking fee, GST rate, quote window, free-cancellation hours, featured price, search radius and location staleness can be changed from the console, with bounds and an audited before/after.' },
    { icon: SupportAgentRoundedIcon, title: 'Notifications and support', text: 'In-app notifications for quotes, bookings, trip updates and document decisions, plus support tickets in five categories that admins move through open, in progress and resolved.' },
    { icon: LockRoundedIcon, title: 'Security', text: 'Phone OTPs hashed in Redis and rate limited, 15-minute access tokens with rotating refresh cookies and reuse detection, an admin passcode with lockout, Zod validation and request IDs on errors.' },
  ],

  steps: [
    { icon: LoginRoundedIcon, title: 'Continue as guest', text: 'Open the live demo, choose Sign in, then Continue as guest. You are signed in as Anika Rao, a visitor in Gokarna. No SMS is sent and your actions stay in your browser.' },
    { icon: MapRoundedIcon, title: 'See who is nearby', text: 'On the home page, scroll to Available near you. Filter by vehicle, change the radius, and open a driver’s profile for their vehicle, rates and reviews.' },
    { icon: LocalTaxiRoundedIcon, title: 'Post a request', text: 'Pick a trip type, or press Get quotes on a route card, set the date and passengers and send it. Demo drivers reply with quotes within a few seconds.' },
    { icon: RequestQuoteRoundedIcon, title: 'Compare and accept', text: 'In My trips, open the Murudeshwar request to compare quotes. Accepting one shows the booking fee and GST, confirms the booking and declines the rest.' },
    { icon: TimelineRoundedIcon, title: 'Follow the trip', text: 'Open a booking to see its timeline, the map with pickup and drop, the driver card and the payment breakdown, then cancel or leave a review.' },
    { icon: SendRoundedIcon, title: 'Try the driver portal', text: 'Sign out, then on the sign-in page choose “driver portal” to work as Raghavendra Naik: go online or offline, send a quote, advance a booking or switch plans.' },
    { icon: FactCheckRoundedIcon, title: 'Run the admin console', text: 'Choose “admin console” to sign in as the super admin. Approve the documents of a driver in the verification queue, cancel a booking or change the booking fee, then check the audit log.' },
    { icon: TerminalRoundedIcon, title: 'Beyond the demo', text: 'The full version runs the API on PostGIS and Redis: real OTP sign-in, document uploads and the complete API, which the in-browser demo stands in for.' },
  ],
  shortcuts: [
    { keys: ['Enter'], action: 'Search bookings by code, customer or driver in the admin console' },
    { keys: ['Enter'], action: 'Search users and drivers by name or phone in the admin console' },
  ],

  screenshots: [
    {
      src: shot('01-book-outstation.webp'),
      icon: LocalTaxiRoundedIcon,
      title: 'Book an outstation trip',
      text: 'The guest customer’s home page after pressing Get quotes on the Goa Airport route card: the Outstation tab is filled with Gokarna Bus Stand to Goa Airport (GOX), a sedan and a date, with an estimate of 182 km and a typical fare of ₹3,015–₹3,470. Above it are counts of 8 verified drivers, 8 online and a 4.8 average rating.',
    },
    {
      src: shot('02-nearby-drivers.webp'),
      icon: MapRoundedIcon,
      title: 'Available near you',
      text: 'Eight online drivers around Gokarna Bus Stand on an OpenStreetMap map, each marker showing the ETA inside a 3 km radius. The list puts the featured auto driver first, with rating, distance, rate per km and minimum fare, and filters by Auto, Sedan, SUV or Tempo Traveller.',
    },
    {
      src: shot('03-compare-quotes.webp'),
      icon: RequestQuoteRoundedIcon,
      title: 'Compare quotes',
      text: 'Anika’s outstation request to Murudeshwar Temple with four quotes from ₹2,150 to ₹2,450. Each lists its inclusions, extras, pickup time and validity, a countdown shows how long the request stays open, and the side panel breaks down the cheapest quote: fare, ₹49 booking fee and ₹9 GST.',
    },
    {
      src: shot('04-booking-timeline.webp'),
      icon: TimelineRoundedIcon,
      title: 'Booking timeline',
      text: 'A completed ride-now booking from Om Beach to Gokarna Bus Stand: each step from Confirmed to Completed with its time, the map with pickup and drop, the driver card, and a ₹110 fare plus ₹58 paid online, with the customer’s review below.',
    },
    {
      src: shot('05-driver-profile.webp'),
      icon: BadgeRoundedIcon,
      title: 'Driver profile',
      text: 'The public profile of an owner-driver with an auto: Verified and Featured badges, a 4.9 rating from 212 reviews, 1,184 trips, four languages, the vehicle with its registration, indicative rates and reviews with the driver’s replies.',
    },
    {
      src: shot('06-driver-dashboard.webp'),
      icon: DashboardRoundedIcon,
      title: 'Driver dashboard',
      text: 'The guest driver is online and sharing his location. An alert says his insurance expires soon, cards show requests today, trips and earnings this week and his rating, and the feed lists incoming ride-now, scheduled and tour requests with suggested fares next to his Pro plan.',
    },
    {
      src: shot('07-driver-quote.webp'),
      icon: SendRoundedIcon,
      title: 'Send a quote',
      text: 'The quote dialog for a scheduled railway station to Kudle Beach request: a fixed fare prefilled from the driver’s rates, the vehicle, what is included, what is extra, a pickup time and how long the quote stays valid. The dialog was only opened; nothing was sent.',
    },
    {
      src: shot('08-driver-subscription.webp'),
      icon: CardMembershipRoundedIcon,
      title: 'Plans and featured listing',
      text: 'Basic, Pro and Fleet Owner plans with their monthly prices, features and included featured days, the current Pro plan with its renewal date, and a ₹199 boost to stay featured for another 7 days. Payments here go through a mock gateway.',
    },
    {
      src: shot('09-admin-overview.webp'),
      icon: AdminPanelSettingsRoundedIcon,
      title: 'Admin overview',
      text: 'The super admin’s view of Gokarna: 2 drivers awaiting verification (one close to breaching the SLA), 8 drivers online, bookings today, platform revenue this month and open tickets, above the latest bookings. The sidebar groups the twelve console sections.',
    },
    {
      src: shot('10-admin-verification.webp'),
      icon: FactCheckRoundedIcon,
      title: 'Verification queue',
      text: 'Two applicants with their documents uploaded and SLA countdowns of 5 and 38 hours. On the right, a sedan driver’s five documents with masked numbers and expiry dates can be viewed, approved or rejected, and the driver can only be approved once every document is approved.',
    },
  ],
};
