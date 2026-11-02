import SosRoundedIcon from '@mui/icons-material/SosRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import RequestQuoteRoundedIcon from '@mui/icons-material/RequestQuoteRounded';
import MyLocationRoundedIcon from '@mui/icons-material/MyLocationRounded';
import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import SellRoundedIcon from '@mui/icons-material/SellRounded';
import CardMembershipRoundedIcon from '@mui/icons-material/CardMembershipRounded';
import ShareLocationRoundedIcon from '@mui/icons-material/ShareLocationRounded';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded';
import CarCrashRoundedIcon from '@mui/icons-material/CarCrashRounded';
import AltRouteRoundedIcon from '@mui/icons-material/AltRouteRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';

// Case study for https://github.com/raiden-56/towpilot (TowPilot — the README calls it a working name; the brand
// is configurable in Settings). Screenshots are from the GitHub Pages demo at https://raiden-56.github.io/towpilot/ —
// a frontend-only build with "Continue as guest": every API call is answered in the browser from generated sample
// data, so they were captured as the guest Customer, Driver and Administrator (no sign-in, nothing saved). The live
// build loads its logo from /favicon.svg at the domain root, which 404s on Pages; the capture script served the
// app's own favicon there so the brand mark isn't a broken image.
const shot = (file) => `/projects/towpilot/${file}`;

export default {
  product: 'TowPilot',
  accent: '#b45309',
  tagline:
    'A towing and roadside-assistance platform for India — an SOS app for stranded drivers, a guided app for tow crews and a full dispatch, finance and reporting back office, all in one product.',
  cover: shot('08-dispatch-centre.webp'),
  overview: [
    'TowPilot connects vehicle owners who need emergency help with verified tow-truck drivers and recovery crews, and gives the towing business a back office to run it. One React app serves three apps. The customer app (/app) has a six-step SOS request with GPS or pin location, a guided damage assessment, an upfront quote with every line shown, live tracking, OTP codes for pickup and handover, invoices and memberships. The driver app (/driver) handles on-duty location sharing, job offers, a 13-step recovery checklist with photo evidence, quote revisions, earnings and a Safety button that is always on screen. The admin app (/admin) has 16 sections, from a live dispatch centre to payroll, profit reports and an audit log. It is built for India: INR stored as integer paise, GST, mobile-OTP sign-in, IST and an April financial year, Razorpay, and DPDP-aware privacy controls.',
    'Behind it is an Express 5 + TypeScript API on PostgreSQL (Prisma, 64 models) with Socket.IO and a background job worker. The business rules are pure, unit-tested modules: a 21-state booking state machine, the pricing engine, dispatch ranking, the truck-and-crew recommendation and the finance metrics. Concurrency is enforced in the database, financial history is never edited, and every provider (SMS, email, payments, maps, storage) has a clearly labelled sandbox adapter. The GitHub Pages demo is frontend-only: “Continue as guest” answers every API call in the browser from a generated Bengaluru sample operation, which resets on reload. Real OTP sign-in, payments, SMS, live GPS and real-time updates need the API. The README is upfront about what is still missing: S3 storage, push notifications and number masking are not wired yet, rate limits are per instance, nearby-driver search runs in the app instead of PostGIS, there are no prepaid fleet wallets or shift scheduling, and legal, tax and DPDP reviews plus a penetration test are still needed before a commercial launch.',
  ],
  highlights: [
    { value: 3, label: 'Apps in one product' },
    { value: 21, label: 'Booking states' },
    { value: 13, label: 'Driver checklist steps' },
    { value: 210, label: 'Documented API operations' },
  ],
  stack: [
    'React 19',
    'TypeScript',
    'Vite 7',
    'Material UI 7',
    'TanStack Query',
    'Redux Toolkit',
    'React Router 7',
    'React Hook Form',
    'Zod',
    'Recharts',
    'Leaflet + OpenStreetMap',
    'Express 5',
    'Prisma 6 + PostgreSQL',
    'Socket.IO',
    'Vitest',
    'Playwright',
    'Docker',
  ],
  architecture: [
    { title: 'apps/web', text: 'One React SPA with the customer, driver and admin apps behind role guards. Server state is in TanStack Query, the session and UI in Redux Toolkit, forms in React Hook Form + Zod, and maps in Leaflet.' },
    { title: 'apps/api/src/domain', text: 'Pure business rules with no I/O: booking state machine, pricing engine, payment-status derivation, dispatch eligibility and scoring, recovery recommendation, maintenance reminders, fair performance scoring and permissions.' },
    { title: 'apps/api modules, jobs & integrations', text: 'Express routes and services per area, a PostgreSQL job queue (FOR UPDATE SKIP LOCKED) with recurring sweeps, authenticated Socket.IO rooms, and sandbox or live adapters for SMS, email, Razorpay, maps and storage.' },
    { title: 'apps/web/src/guest', text: 'Guest mode for static hosting: a small in-browser router with about 210 mock handlers over a sample database generated at load time, so the Pages demo runs with no server.' },
  ],

  why: {
    intro:
      'A breakdown is an emergency, and many towing businesses still run it on phone calls, guesswork and paper. The customer doesn’t know who is coming or what it will cost, the driver is working from memory, and the office can’t tell whether a job made money. TowPilot gives all three the same job, live, from the first SOS to the finance report.',
    points: [
      {
        icon: RequestQuoteRoundedIcon,
        title: 'No surprise prices',
        text: 'Every quote shows each line and stores a snapshot of the pricing used. Extra work needs a revised quote the customer approves, and at job close any increase beyond the disclosed actuals is rejected.',
      },
      {
        icon: PasswordRoundedIcon,
        title: 'Clear custody of the vehicle',
        text: 'Condition reports with photos at pickup and delivery, plus one-time pickup and handover codes, settle disputes about damage and about who got the keys.',
      },
      {
        icon: AltRouteRoundedIcon,
        title: 'Dispatch you can trust',
        text: 'Verified, available drivers are ranked by distance, workload and rating. Offers time out and move on to the next driver, and unsafe or unclear jobs wait for a dispatcher to review them.',
      },
      {
        icon: CurrencyRupeeRoundedIcon,
        title: 'Know if you’re making money',
        text: 'Invoices, cash, refunds, expenses, payroll and payouts sit in one ledger, with profit, margin, cash-flow and receivables reports. Financial history is never edited.',
      },
    ],
    audience: [
      { title: 'Stranded vehicle owners', text: 'Ask for help in a few taps, see the price first, track the truck and pay online.' },
      { title: 'Fleet managers', text: 'Book recoveries for company vehicles under a contract with negotiated discounts, SLA priority and monthly limits.' },
      { title: 'Tow drivers & recovery crews', text: 'Go on duty, accept offers, follow a guided checklist with evidence, and see earnings and performance.' },
      { title: 'Owners, dispatchers & finance', text: 'A live dispatch centre, fleet and staff records, versioned pricing, and a full finance and reporting back office.' },
    ],
  },

  solves: [
    {
      problem: 'A stranded customer doesn’t know who is coming, when, or what it will cost.',
      solution: 'An SOS request with GPS capture, an upfront itemised quote, live tracking with an ETA, and a link they can share to let others track it.',
    },
    {
      problem: 'Prices change on site and customers feel overcharged.',
      solution: 'Quotes store a snapshot of the pricing used. Extra work needs an approved revision, and the final invoice is worked out from that snapshot plus disclosed actuals only.',
    },
    {
      problem: 'Arguments about vehicle condition and who took the keys.',
      solution: 'Condition reports with photos at pickup and delivery, and OTP custody codes at pickup and handover. Drivers never see the code values.',
    },
    {
      problem: 'The wrong truck or crew is sent, especially for EVs or overturned or flooded vehicles.',
      solution: 'A guided damage assessment recommends truck type, equipment and crew, and sends unsafe or unclear cases to a dispatcher for manual review.',
    },
    {
      problem: 'Dispatch depends on whoever answers the phone.',
      solution: 'Automatic ranking of eligible drivers, 90-second offers by default, automatic retries, and escalations for missed ETAs, stale locations and long waits.',
    },
    {
      problem: 'Drivers are rated unfairly and have no safety backup.',
      solution: 'A performance score that counts only verified complaints and never penalises reporting an incident, plus a Safety button and safety hold that are always available.',
    },
    {
      problem: 'The business can’t see whether it is making money.',
      solution: 'One ledger for invoices, payments, refunds, expenses, payroll and payouts, with profit and loss, trends, profitability by service and receivables ageing.',
    },
    {
      problem: 'Imported tools treat Indian compliance as an afterthought.',
      solution: 'GST on every invoice, INR in integer paise, an April financial year, Razorpay, mobile-OTP sign-in, and a personal-data export for DPDP.',
    },
  ],

  features: [
    { icon: SosRoundedIcon, title: 'SOS request wizard', text: 'Six steps (service and vehicle, pickup, destination, condition, contact, review and quote) with a draft saved on the device, or schedule a job 30 minutes to 30 days ahead.' },
    { icon: MyLocationRoundedIcon, title: 'Pickup location capture', text: 'Use GPS, search, paste a map link or tap the map. Add road, KM marker, gate, floor and parking level, check the service area, and say whether the spot is safe.' },
    { icon: CarCrashRoundedIcon, title: 'Guided damage assessment', text: 'Nine yes / no / not-sure questions plus breakdown type, EV flag, access and passengers. These recommend a truck, equipment and crew, and flag cases for manual review.' },
    { icon: RequestQuoteRoundedIcon, title: 'Transparent quotes', text: 'Base, distance, equipment, crew, night or holiday and discount lines with 18% GST. The price is held for 30 minutes, and cancellation fees are disclosed up front.' },
    { icon: ShareLocationRoundedIcon, title: 'Live tracking & custody codes', text: 'A map with the truck, the pickup and the drop-off, an ETA, pickup and handover codes, a timeline and share-tracking links.' },
    { icon: PaymentsRoundedIcon, title: 'Invoices & payments', text: 'Pay through Razorpay or a clearly labelled sandbox checkout. Cash stays pending until finance confirms it; refunds and credit notes correct mistakes.' },
    { icon: CardMembershipRoundedIcon, title: 'Memberships & fleet contracts', text: 'Plans with covered services, extra free kilometres and discounts, plus business accounts with contract discounts, SLA response times and monthly limits.' },
    { icon: LocalShippingRoundedIcon, title: 'Driver app', text: 'Availability with on-duty GPS sharing, job offers to accept or reject before they time out, the active job, job history, earnings and profile.' },
    { icon: ChecklistRoundedIcon, title: '13-step recovery checklist', text: 'From accept to close: verify the customer’s code, record condition with photos, confirm equipment, authorise, load, deliver, hand over with a code and invoice.' },
    { icon: HealthAndSafetyRoundedIcon, title: 'Safety & exceptions', text: 'A Safety button that is always visible for incident reports, plus safety hold, customer not reachable, release job and unable to complete, each with a reason.' },
    { icon: MapRoundedIcon, title: 'Dispatch centre', text: 'A live board that refreshes every 15 s, with a map of bookings and drivers, unassigned and safety-review queues, manual assignment, and a rejections and timeouts view.' },
    { icon: EngineeringRoundedIcon, title: 'People, fleet & maintenance', text: 'Employee verification and documents, trucks with equipment and capacity, and rule-based service, document-expiry and inspection reminders.' },
    { icon: SellRoundedIcon, title: 'Versioned pricing', text: 'Rate cards by service, zone, vehicle class or fleet contract, where editing publishes a new version. Also service zones, promo codes and a price simulator.' },
    { icon: InsightsRoundedIcon, title: 'Finance & reports', text: 'Invoices, payments, refunds, expenses, reconciliation and ageing, payroll and payouts, and 9 report tabs with CSV and PDF export, with or without sample data.' },
  ],

  steps: [
    { icon: ExploreRoundedIcon, title: 'Enter as a guest', text: 'Open the demo and press Continue as guest, then pick a portal: Administrator, Dispatcher, Finance, Customer or Driver. Everything is sample data, and a reload starts fresh.' },
    { icon: SosRoundedIcon, title: 'Ask for help', text: 'As the Customer, press Get help now. Choose a vehicle and a service, set the pickup point and say whether the vehicle is in a safe place.' },
    { icon: CarCrashRoundedIcon, title: 'Describe the problem', text: 'Pick a destination (saved places work), then tell it what happened and answer the condition questions. Answer “not sure” if you don’t know.' },
    { icon: ReceiptLongRoundedIcon, title: 'Get the quote', text: 'Press Review, then Get my quote. Getting a quote is free and nothing is dispatched until you confirm. Each line, the GST and the cancellation terms are shown.' },
    { icon: ShareLocationRoundedIcon, title: 'Track the truck', text: 'Open Bookings → the active car tow to see the truck on the map, the ETA, your driver, and the pickup and handover codes.' },
    { icon: ChecklistRoundedIcon, title: 'Work the job as a driver', text: 'Exit and re-enter as the Driver. Open job shows the recovery checklist with the current step highlighted; the Safety button stays in the corner.' },
    { icon: DashboardRoundedIcon, title: 'Run operations', text: 'Exit and choose Administrator. The Overview and Dispatch centre show live operations; Incidents & escalations lets you acknowledge or resolve flagged jobs.' },
    { icon: TerminalRoundedIcon, title: 'Run the full stack', text: 'For real OTP sign-in, payments and live updates, clone the repo, run npm run db:local, db:deploy and db:seed, then dev:api and dev:web. Sandbox adapters stand in for SMS and payments.' },
  ],
  shortcuts: [
    { keys: ['Ctrl', 'Enter'], action: 'Send a support-ticket reply' },
    { keys: ['Enter'], action: 'Search in the location picker' },
  ],

  screenshots: [
    {
      src: shot('01-customer-home.webp'),
      icon: SosRoundedIcon,
      title: 'Customer home',
      text: 'The guest customer, Priya, sees a big Get help now button, an option to schedule for later, a reminder to call 112 first if anyone is hurt, and her active booking. The bottom bar holds Home, Bookings, Billing and Account.',
    },
    {
      src: shot('02-upfront-quote.webp'),
      icon: RequestQuoteRoundedIcon,
      title: 'An upfront quote',
      text: 'The last step of the request wizard: base charge, taxable value, 18% GST and the total, held for 30 minutes. Below it are the included kilometres, waiting and cancellation terms, and why this truck and crew were recommended. Membership benefits were switched off for this quote.',
    },
    {
      src: shot('03-live-tracking.webp'),
      icon: ShareLocationRoundedIcon,
      title: 'Live tracking',
      text: 'A booking on its way: the status, an ETA and a map with the pickup (P), the drop-off (D) and the truck, plus how long ago the driver’s location updated. Further down are the driver card, the pickup and handover codes, and the progress timeline.',
    },
    {
      src: shot('04-driver-today.webp'),
      icon: LocalShippingRoundedIcon,
      title: 'Driver: today',
      text: 'The driver app for Ravi, the guest driver: his active job with status and pickup, the job offers list, the Sharing location chip in the header, and the Safety button that stays on every screen.',
    },
    {
      src: shot('05-recovery-checklist.webp'),
      icon: ChecklistRoundedIcon,
      title: 'Recovery checklist',
      text: 'The guided job workflow. Finished steps show their times, the current step (“Arrive & verify customer”) opens with a safety reminder, Open in Maps and the next action, and later steps are greyed out until it is their turn.',
    },
    {
      src: shot('06-driver-earnings.webp'),
      icon: PaymentsRoundedIcon,
      title: 'Driver earnings',
      text: 'Earnings for today, this week, this month, last month or this financial year: job earnings, incentives, deductions, reimbursements and pending payout, with every earning line linked to its booking.',
    },
    {
      src: shot('07-admin-overview.webp'),
      icon: DashboardRoundedIcon,
      title: 'Admin overview',
      text: 'The back office’s KPI dashboard. Live operations (active and unassigned bookings, available drivers and trucks), service performance (response and arrival times, cancellations, satisfaction) and financials, with a period picker and a switch to leave out sample data.',
    },
    {
      src: shot('08-dispatch-centre.webp'),
      icon: MapRoundedIcon,
      title: 'Dispatch centre',
      text: 'The live board: jobs that need a provider, safety reviews, active jobs, available drivers, stale locations and open escalations, above a live map of every open booking and every driver with a location across Bengaluru.',
    },
    {
      src: shot('09-escalations.webp'),
      icon: ReportProblemRoundedIcon,
      title: 'Incidents & escalations',
      text: 'Automatic escalations, each with the booking, its status and a plain-language detail: no provider found, a premium collision waiting for manual review, a driver who declined, and a safety hold. Each one can be acknowledged or resolved.',
    },
    {
      src: shot('10-reports.webp'),
      icon: InsightsRoundedIcon,
      title: 'Reports & analytics',
      text: 'The Trends tab for this financial year: monthly accrual revenue against costs, with an operating-profit line. It can group by day, week, month, quarter or year, or show as a table, and sits alongside profit and loss, profitability by service, zones, drivers, trucks, customers, cancellations and demand.',
    },
  ],
};
