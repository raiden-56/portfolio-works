import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import RequestQuoteRoundedIcon from '@mui/icons-material/RequestQuoteRounded';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import LocalTaxiRoundedIcon from '@mui/icons-material/LocalTaxiRounded';
import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import NearMeRoundedIcon from '@mui/icons-material/NearMeRounded';
import PrivacyTipRoundedIcon from '@mui/icons-material/PrivacyTipRounded';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import TourRoundedIcon from '@mui/icons-material/TourRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import CardMembershipRoundedIcon from '@mui/icons-material/CardMembershipRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import InstallMobileRoundedIcon from '@mui/icons-material/InstallMobileRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';

// Case study for https://github.com/raiden-56/payana (Payana, “ಪಯಣ”, journey; the README calls it a working name).
// Payana is not hosted anywhere: GitHub Pages is off, and the deploy workflow and Terraform under infra/ have no live
// environment behind them. The screenshots come from a throwaway local run of a copy of the repo, following its README:
// PostGIS and Redis in Docker, migrations and the development seed, the NestJS API and the Angular dev server, captured
// headless at 1440×770. Every person, phone number and registration number on screen is invented seed data. Customers
// and drivers signed in with seeded numbers and the one-time code the development SMS adapter prints on the sign-in
// screen; staff signed in with the seeded super admin account and its development authenticator secret. During the
// capture one request was sent, three seeded drivers quoted on it and the customer accepted one quote.
const shot = (file) => `/projects/payana/${file}`;

export default {
  product: 'Payana',
  accent: '#B8411F',
  tagline:
    'A hyperlocal mobility marketplace for the Karavali coast, starting in Gokarna: travellers ask once, compare quotes from verified local auto, taxi and tour drivers and book, while drivers and owners get verified, list vehicles and quote, and staff verify, moderate and configure.',
  cover: shot('04-quotes.webp'),
  overview: [
    'Payana is a marketplace and lead platform, not a transport operator. A customer describes a trip once (ride now, book ahead, outstation or sightseeing), the request goes to verified drivers whose vehicle category and service area match, and each driver replies with their own fare, inclusions and a pickup note. The customer compares the quotes, accepts one and gets a booking, and only then do the two sides see each other’s phone numbers. Drivers, vehicle owners and fleet owners register by phone, add vehicles with rates and upload identity, licence, RC, insurance, permit and fitness papers; verification officers approve or reject each document before a listing goes live. Staff also run bookings and disputes, support, regions and vehicle categories, tour packages, subscription plans, local adverts, feature switches and the audit log. Payana isn’t publicly hosted: the screenshots here come from a local run with the repo’s fictional seed data.',
    'The repo is spec-first: a constitution, product and non-functional requirements (270 numbered requirements), 18 feature specs with Given/When/Then criteria, 17 ADRs, a data model, threat model, test strategy, release plan and traceability matrix. A shared TypeScript contracts package holds the types and the full route map that both sides compile against. The API is a NestJS 12 modular monolith with 10 modules and 127 REST endpoints under /api/v1, PostgreSQL 17 + PostGIS with 35 tables created by SQL migrations, Redis for OTP limits and coordination, an outbox poller and scheduled jobs, phone OTP sign-in for customers and drivers, and password plus TOTP for staff. The web app is an Angular 22 PWA built on signals and lazy routes with its own design system. SMS, payments and storage sit behind ports with development adapters, and there is no map provider yet, so nearby drivers are shown as a distance and a compass direction. There are 140 automated tests (64 API unit, 24 API integration against real Postgres and Redis, 52 web unit), GitHub Actions CI, and Terraform for AWS ap-south-1 with 8 modules and 86 resources.',
  ],
  highlights: [
    { value: 127, label: 'REST endpoints under /api/v1' },
    { value: 35, label: 'PostgreSQL tables' },
    { value: 10, label: 'Booking statuses' },
    { value: 270, label: 'Numbered requirements in the specs' },
  ],
  stack: [
    'Angular 22',
    'TypeScript 6',
    'Signals + standalone components',
    'Angular service worker (PWA)',
    'NestJS 12',
    'TypeORM + SQL migrations',
    'PostgreSQL 17 + PostGIS 3.5',
    'Redis 7',
    'argon2 · jose · otplib',
    'Swagger / OpenAPI',
    'S3-compatible storage',
    'Vitest',
    'Docker Compose',
    'Terraform (AWS)',
    'GitHub Actions',
  ],
  architecture: [
    { title: 'packages/contracts', text: 'The API contract in TypeScript: every request and response type, the status enums and transition tables, the role-to-permission map and an ApiRoutes object with all 127 paths, used by both the NestJS controllers and the Angular API client so a route can’t drift between them.' },
    { title: 'apps/api', text: 'A NestJS modular monolith with 10 modules (identity, catalog, marketplace, bookings, billing, engagement, promotions, platform, storage, admin), each split into domain, application, infrastructure and presentation. Writes are idempotent, money is integer paise, security actions are audited and domain events go through an outbox.' },
    { title: 'apps/web', text: 'An Angular 22 PWA with three layouts: the public site and customer pages, the partner console (10 sections) and the admin console (12 sections). Guards only steer people; the API authorises every call. Analytics and ads load only after consent.' },
    { title: 'infra/ + .github/', text: 'Terraform for staging and production on AWS ap-south-1 (network, RDS PostgreSQL, ElastiCache, ECS Fargate API behind a load balancer, S3 + CloudFront web hosting, storage, observability and a GitHub OIDC deploy role) with plan tests, plus a CI workflow and a manual deploy workflow.' },
  ],

  why: {
    intro:
      'In a temple-and-beach town like Gokarna, a visitor usually finds a ride by walking to the auto stand and haggling, and a good local driver depends on being in the right spot at the right time. Payana puts the asking on the customer’s phone and the answering on the driver’s, with verification in between, and it is written down that the platform never sets the fare.',
    points: [
      {
        icon: RequestQuoteRoundedIcon,
        title: 'Ask once, get real prices',
        text: 'One request reaches every matching verified driver. Each replies with a fare, what it includes and a pickup note, and the customer picks. The rough estimate is labelled as a straight-line guide, never as a fare.',
      },
      {
        icon: VerifiedUserRoundedIcon,
        title: 'Verified before visible',
        text: 'Nobody appears in search or receives requests until a verification officer has approved their identity, licence and the RC, insurance, permit and fitness papers of each vehicle.',
      },
      {
        icon: PrivacyTipRoundedIcon,
        title: 'Privacy by default',
        text: 'Drivers see only the customer’s first name until a quote is accepted, a driver’s exact position is never public, and Google tags stay off until a visitor accepts the privacy banner.',
      },
      {
        icon: CurrencyRupeeRoundedIcon,
        title: 'The fare goes to the driver',
        text: 'Customers pay the driver directly in cash or UPI. Payana earns from optional driver plans, featured placements and local adverts, and an optional booking fee that is off by default.',
      },
    ],
    audience: [
      { title: 'Visitors and pilgrims', text: 'Book a station transfer, a beach hop or a day tour without haggling, and see who is coming before the trip.' },
      { title: 'Local auto and taxi drivers', text: 'Get verified once, go online, receive matching requests and win trips with your own price.' },
      { title: 'Vehicle and fleet owners', text: 'List several vehicles, set rates per vehicle and authorise hired drivers to drive them.' },
      { title: 'Operations staff', text: 'Five staff roles verify partners, handle disputes and tickets, manage plans and packages, run adverts and configure the platform.' },
    ],
  },

  solves: [
    {
      problem: 'Visitors don’t know what a fair price is and end up haggling at the stand.',
      solution: 'Several drivers quote on the same request, the quotes sort by price or rating, and each shows the fare, inclusions such as fuel or waiting time, exclusions and how long the offer stands.',
    },
    {
      problem: 'There’s no way to tell whether a driver or vehicle is legitimate.',
      solution: 'Eight document types, four of them required for every vehicle, reviewed one by one with seven rejection reasons, an expiry warning 30 days ahead and a verified badge only after approval.',
    },
    {
      problem: 'A quote can be far from what the customer expected.',
      solution: 'Customers see a rough estimate from per-category rates, and the driver’s quote form warns when the fare is far above that estimate before it is sent.',
    },
    {
      problem: 'Customers worry about handing their phone number to strangers.',
      solution: 'The number is shared only when the customer accepts a quote, and only for that booking while it is active.',
    },
    {
      problem: 'A booked trip can go quiet until pickup time.',
      solution: 'Ten booking statuses with a progress bar from Booked to Done, driver steps for on the way, arrived, started and completed, a “What has happened” history, and a rule that a driver can set off at most six hours before pickup.',
    },
    {
      problem: '“Nearby” is meaningless if the location is old.',
      solution: 'Each driver’s position is graded live (under 2 minutes), recent (under 15 minutes), stale or unknown, and a stale position is never shown as current.',
    },
    {
      problem: 'Owners with several vehicles can’t list drivers who don’t own a car.',
      solution: 'Three partner types (owner-driver, fleet owner, hired driver) and owner-to-driver authorisations that are invited, accepted and revoked in the Team section.',
    },
    {
      problem: 'Launching a new town usually means a code change.',
      solution: 'Regions, vehicle categories, places, plans, packages and fees are data the admin edits. Gokarna is live and Kumta, Honnavar, Murudeshwar and Karwar are seeded as coming soon.',
    },
  ],

  features: [
    { icon: RequestQuoteRoundedIcon, title: 'Ride requests', text: 'Four trip types with their own windows (10 minutes for ride now, 12 hours for book ahead, 24 hours for outstation and sightseeing), up to 20 passengers, bags, notes, and up to three open requests per customer.' },
    { icon: CompareArrowsRoundedIcon, title: 'Compare and accept quotes', text: 'Quotes arrive without a refresh, sort by price or rating, show the driver’s rating, trips and vehicle, and accepting one closes the others and creates the booking.' },
    { icon: ExploreRoundedIcon, title: 'Find a ride', text: 'Search verified drivers by pickup point within 10 km by default (up to 50), sort by recommended, nearest, rating or price, filter by category, seats and “available now”, with distance and compass direction on each card.' },
    { icon: EventAvailableRoundedIcon, title: 'Bookings', text: 'Ten statuses including no-show and disputed, driver transitions enforced by the API, nine cancellation reasons, receipts for completed trips, reviews with driver replies, and a frozen copy of the cancellation policy on each booking.' },
    { icon: TourRoundedIcon, title: 'Sightseeing packages', text: 'Five seeded tours, from the Five Beaches Trail to Murudeshwar and the Honnavar backwaters, each requestable as a sightseeing trip.' },
    { icon: FactCheckRoundedIcon, title: 'Partner onboarding', text: 'A guided “Get verified” flow for profile, vehicles, personal documents and vehicle documents, with masked document numbers, expiry dates and clear reasons when something is rejected.' },
    { icon: DirectionsCarRoundedIcon, title: 'Vehicles and rates', text: 'Vehicles with an Indian registration format check, seats, bags and AC, base fare, per-km, waiting and full-day rates, and a listing that goes live only when the documents are approved.' },
    { icon: LocalTaxiRoundedIcon, title: 'Request inbox and quotes', text: 'Verified drivers see matching requests with distance to pickup and competing quote counts, quote with inclusions, exclusions, ETA and validity, withdraw a quote or hide a request.' },
    { icon: DashboardRoundedIcon, title: 'Partner dashboard', text: 'Availability (available, busy, offline), the vehicle being driven, location sharing every 20 seconds while the app is open, and 7, 30 or 90-day metrics on paid plans.' },
    { icon: GroupsRoundedIcon, title: 'Team and authorisations', text: 'Fleet owners invite hired drivers to their vehicles; authorisations move through invited, active, revoked and expired.' },
    { icon: CardMembershipRoundedIcon, title: 'Plans and featured listings', text: 'Starter (free), Plus (₹299 a month) and Pro (₹799 a month) plans, featured search placement at ₹49 a day beyond the plan allowance, invoices, and a manual payment adapter until a gateway is added.' },
    { icon: VerifiedUserRoundedIcon, title: 'Verification and moderation', text: 'A verification queue filtered by status and area, per-document approve or reject, a case decision (approve, ask for changes, reject), listing takedowns, review moderation and user suspension.' },
    { icon: AdminPanelSettingsRoundedIcon, title: 'Admin console', text: 'Twelve sections (overview, verifications, users, bookings, support, regions and vehicles, tour packages, plans, advertisements, settings, audit log, staff) for five staff roles with 22 permissions; the super admin always needs an authenticator code.' },
    { icon: TuneRoundedIcon, title: 'Settings and feature switches', text: 'Seven feature switches the API also enforces, support contacts and default town, and an optional booking fee (flat, percentage and cap), each change written to the audit log.' },
    { icon: CampaignRoundedIcon, title: 'Analytics, ads and adverts', text: 'GA4, Google Ads conversion labels for five business events and AdSense slots, all off until IDs are added and a visitor consents, plus local business campaigns with impression and click counts.' },
    { icon: PrivacyTipRoundedIcon, title: 'Account and privacy', text: 'Consent preferences, an emergency contact, up to ten saved places, active sessions with remote sign-out, and account deletion with a 14-day grace period.' },
    { icon: SupportAgentRoundedIcon, title: 'Support and notifications', text: 'Support tickets with message threads for customers and drivers, a staff queue with status and priority, and in-app notifications (push and e-mail are logged only for now).' },
    { icon: InstallMobileRoundedIcon, title: 'PWA and accessibility', text: 'Installable on phones with a service worker, mobile-first layouts from 320 px, WCAG 2.2 AA as a release gate and motion that turns off under reduced-motion settings.' },
  ],

  steps: [
    { icon: TerminalRoundedIcon, title: 'Run it locally', text: 'Payana isn’t hosted, so clone the repo and, with Node 24 and Docker, run npm run setup, infra:up, api:migrate, api:seed, api:dev and web:dev, then open http://localhost:4200.' },
    { icon: LoginRoundedIcon, title: 'Sign in by phone', text: 'Use a seeded customer number from the README. No SMS gateway is connected in development, so the six-digit code is shown on the sign-in screen with a “Use it” link.' },
    { icon: ExploreRoundedIcon, title: 'Find a ride', text: 'Open Find a ride and pick a pickup point to see the nearest verified drivers with their distance, direction, vehicle and rate per km.' },
    { icon: RequestQuoteRoundedIcon, title: 'Send a request', text: 'Press Book a ride, choose the kind of trip, pickup and drop, the time, a vehicle category and how many people and bags, then Send to drivers.' },
    { icon: CompareArrowsRoundedIcon, title: 'Accept a quote', text: 'Quotes appear on the request as drivers reply. Sort by price or rating, press Accept and confirm to get a booking with the driver’s contact and vehicle.' },
    { icon: DashboardRoundedIcon, title: 'Work as a driver', text: 'Sign in with “I drive” and a seeded driver number to reach the partner dashboard, set your status, open Requests and send a quote.' },
    { icon: DirectionsCarRoundedIcon, title: 'List and verify', text: 'In Vehicles add a vehicle and its rates, then upload its papers in Documents. A seeded driver in “changes requested” shows what a rejected document looks like.' },
    { icon: AdminPanelSettingsRoundedIcon, title: 'Run the platform', text: 'At /admin/sign-in use a seeded staff account from the README with the authenticator code from npm --prefix apps/api run totp, then review the waiting partner under Verifications.' },
  ],
  shortcuts: [
    { keys: ['←', '→'], action: 'Switch between trip types on the home page booking card' },
    { keys: ['↑', '↓'], action: 'Move through place suggestions in a pickup or drop field' },
    { keys: ['Enter'], action: 'Choose the highlighted place' },
    { keys: ['Esc'], action: 'Close the place suggestions, or the navigation drawer' },
    { keys: ['Enter'], action: 'Add an inclusion or exclusion in the quote form, or a language on the partner profile' },
  ],

  screenshots: [
    {
      src: shot('01-home.webp'),
      icon: HomeRoundedIcon,
      title: 'Home',
      text: '“Ride the coast with a local.” Live in Gokarna, with a booking card for now, later, outstation or day tour, pickup and drop fields and Get quotes, beside a Kudle Beach photo and a count of 14 verified drivers in Gokarna.',
    },
    {
      src: shot('02-find-a-ride.webp'),
      icon: NearMeRoundedIcon,
      title: 'Find a ride',
      text: '14 verified drivers within 10 km of Gokarna Bus Stand, nearest first: Girish Naik 50 m away, Om Beach Travels and Suresh Ambiga 200 m. Cards show featured and plan badges, rating, seats, bags, languages, availability with a compass direction such as “50 m SW”, and the rate per km.',
    },
    {
      src: shot('03-request.webp'),
      icon: RequestQuoteRoundedIcon,
      title: 'Book a ride',
      text: 'Anita Rao (seed data) books ahead from Gokarna Bus Stand to Gokarna Road Railway Station in an SUV for five people and four bags. The summary card gives a rough estimate of ₹320–₹490 for about 9.7 km in a straight line and says drivers have 12 hours to reply.',
    },
    {
      src: shot('04-quotes.webp'),
      icon: CompareArrowsRoundedIcon,
      title: 'Comparing quotes',
      text: 'Three quotes so far from the three matching drivers, sorted by price: Om Beach Travels at ₹480 with fuel, waiting and AC included is marked Lowest price, and Ramesh Gunaga offers ₹520 in a Marazzo with a child seat. Each card shows the rating, trips, vehicle, note and how long it stays valid.',
    },
    {
      src: shot('05-booking.webp'),
      icon: EventAvailableRoundedIcon,
      title: 'Booking confirmed',
      text: 'Booking PY-QFA2D for Wednesday 5:45 am, with the progress bar at Booked. The driver’s seeded number is shared only for this booking, the Ertiga’s plate is shown, the ₹480 fare is paid to the driver in cash or UPI, and cancellation is free before the trip starts.',
    },
    {
      src: shot('06-partner-dashboard.webp'),
      icon: DashboardRoundedIcon,
      title: 'Partner dashboard',
      text: 'Suresh Ambiga is verified and Available in his Dzire, sharing his position to within about 20 m. The 30-day figures show 4 requests received, 2 quotes sent, 2 bookings won, 3 trips completed, a 4.7 rating and ₹6,500 in fares paid to him directly.',
    },
    {
      src: shot('07-send-quote.webp'),
      icon: LocalTaxiRoundedIcon,
      title: 'Writing a quote',
      text: 'Ramesh Gunaga opens Anita’s request: only her first name, the route, time, five people and four bags, her note, the estimate she saw and two competing quotes. He quotes ₹520 for his Marazzo with fuel and waiting included; her phone number is shared only if she accepts.',
    },
    {
      src: shot('08-vehicles.webp'),
      icon: DirectionsCarRoundedIcon,
      title: 'Fleet vehicles',
      text: 'Om Beach Travels, a fleet owner, lists a Maruti Suzuki Ertiga and a Tata Tiago. Both are Verified and Listed with 4 of 4 documents approved, and each has its own rates (₹21/km from ₹150 and ₹15/km from ₹80) with Rates, Documents and Edit actions.',
    },
    {
      src: shot('09-verification-case.webp'),
      icon: FactCheckRoundedIcon,
      title: 'Verification case',
      text: 'A verification officer’s view of Shridhar Bhandari, a new owner-driver in review: his driving licence and identity proof with number, expiry and submission time, Open file, Approve and Reject buttons, and a decision panel warning that 6 documents are not approved yet.',
    },
    {
      src: shot('10-admin-settings.webp'),
      icon: TuneRoundedIcon,
      title: 'Feature switches',
      text: 'Admin Settings → Features: sightseeing packages, outstation trips, reviews, driver sign-up, paid plans, featured listings and local business adverts, each switchable for everyone. The API refuses requests for a feature that is off, and the bar at the bottom confirms everything is saved.',
    },
  ],
};
