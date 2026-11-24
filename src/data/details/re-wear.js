import ScaleRoundedIcon from '@mui/icons-material/ScaleRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import CheckroomRoundedIcon from '@mui/icons-material/CheckroomRounded';
import RecyclingRoundedIcon from '@mui/icons-material/RecyclingRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import WarehouseRoundedIcon from '@mui/icons-material/WarehouseRounded';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import PriceChangeRoundedIcon from '@mui/icons-material/PriceChangeRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import PhotoCameraRoundedIcon from '@mui/icons-material/PhotoCameraRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import InstallMobileRoundedIcon from '@mui/icons-material/InstallMobileRounded';
import RouteRoundedIcon from '@mui/icons-material/RouteRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';

// Case study for https://github.com/raiden-56/re-wear (ReWear – clothing buyback and sustainable-fashion commerce,
// “Clear your wardrobe. Earn from every KG.”). Screenshots are from the GitHub Pages copy at
// https://raiden-56.github.io/re-wear/, captured headless at 1440×770 with puppeteer-core. That copy is a static,
// read-only snapshot of the public website only (scripts/static-preview.mjs renders the public pages and shop items
// from a seeded database into HTML): there is no server behind it, so sign-in, the sell wizard, bookings, payouts
// and the role apps (/app, /collector, /warehouse, /admin, /business, /recycler, /partner) are in the code but not in
// the preview, and the figures shown (kg collected, ₹ paid, stock by grade, B2B lots) are the seed data frozen at
// build time. No form was filled or submitted and nobody signed in. Each page was scrolled through once so the
// scroll-reveal animations and count-ups finish, and the preview’s floating “Static preview” note was hidden with CSS
// so it doesn’t cover content.
const shot = (file) => `/projects/re-wear/${file}`;

export default {
  product: 'ReWear',
  accent: '#174B37',
  tagline:
    'Sell old clothes by the kilogram: book a free doorstep pickup, watch every bag weighed with a photo of the scale, approve the valuation and get paid straight to UPI, while every garment is graded for resale, bulk B2B sale, recycling or donation.',
  cover: shot('01-home.webp'),
  overview: [
    'ReWear is a clothing buyback and circular-fashion platform for Indian cities (seeded for Bengaluru, Pune and Hyderabad). A household picks one of four ways to sell (Quick Sell by KG, Premium Resale, Recycling or Donation to an NGO), chooses from 13 clothing categories with their own per-kg rates, sees a server-side estimate and books a free 2-hour pickup slot. A pickup executive verifies a 4-digit doorstep code, weighs the bags (gross minus tare, per category, with rejected weight kept apart) and must attach a photo of the scale. The customer approves that valuation in the app or by reading a one-time code to the collector, and the money goes directly to their UPI ID, with a UTR and a downloadable receipt. At the warehouse the clothes are received, sorted into six grades and tracked by the gram as QR-labelled stock, then sold one by one in a pre-loved shop, sold by the kilo to verified businesses, dispatched to recyclers or handed to NGOs. Eight role-based apps share one Next.js PWA: customer, pickup executive, warehouse manager, admin, super admin, B2B buyer, recycler partner and donation partner.',
    'It is a Next.js 16 App Router monolith in TypeScript with React 19, Tailwind CSS 4 and server actions that do auth, Zod validation and then call a shared service layer. PostgreSQL holds 59 Prisma models plus 11 database CHECK constraints, such as a free-pickup rule that keeps the pickup fee at zero and weighing and valuation totals that must add up. Money is stored in integer paise and weight in integer grams. Pure domain modules (pricing selection, valuation maths, weighing reconciliation, booking and payout state machines, the free-pickup policy) are unit tested, and integration tests run the real services against a test database: 27 unit and 24 integration tests in all. SMS, WhatsApp, email, UPI payouts (RazorpayX), shop payments (Razorpay) and storage (Supabase) sit behind provider interfaces with console or sandbox versions for development. The GitHub Pages link is only a static snapshot of the public website: the role apps are in the code but not in the Pages preview, and sign-in, booking, payouts, the pincode checker and the contact form all need the server.',
  ],
  highlights: [
    { value: 8, label: 'Role-based apps' },
    { value: 4, label: 'Ways to sell' },
    { value: 11, label: 'Booking states' },
    { value: 59, label: 'Prisma models' },
  ],
  stack: [
    'Next.js 16 (App Router)',
    'React 19',
    'TypeScript',
    'Server actions',
    'Tailwind CSS 4',
    'Radix UI (shadcn-style)',
    'Framer Motion',
    'React Hook Form + Zod 4',
    'Recharts',
    'Prisma 6',
    'PostgreSQL',
    'Phone OTP + Google sign-in',
    'ExcelJS · qrcode',
    'Razorpay / RazorpayX adapters',
    'PWA (manifest + service worker)',
    'Vitest',
    'Docker Compose',
  ],
  architecture: [
    { title: 'src/app', text: 'One App Router route group per audience: the public site and shop, login and onboarding, and the /app, /collector, /warehouse, /admin, /business, /recycler and /partner apps (77 pages). Each role lands on its own home, and route handlers cover uploads, private files, quotes, slots, signed webhooks, the reconcile cron, exports and printable receipts.' },
    { title: 'src/server/domain', text: 'Pure business rules with no I/O: which pricing rule applies (service area over city over global), valuation and deduction maths in paise, gross/tare/category weight reconciliation, the booking and payout state machines and the free-pickup policy. Unit tests cover them directly.' },
    { title: 'src/server/services', text: 'Transactional services shared by every app: booking, assignment, collection, valuation, payouts, ledger, warehouse, marketplace, B2B, partners, reports and analytics. A 42-permission RBAC matrix is checked inside each service, not just in the UI, and every sensitive change writes an audit row with before and after values.' },
    { title: 'prisma + scripts', text: '59 models, 33 enums and three migrations, one of which adds the CHECK constraints for free pickup, matching totals and stock that never goes negative. The seed builds a realistic demo, scripts/local-db.mjs runs an isolated Postgres, and scripts/static-preview.mjs renders the public pages for GitHub Pages.' },
  ],

  why: {
    intro:
      'People with a cupboard of clothes they no longer wear usually have two choices: give them away or bargain with a scrap buyer over a hand scale. ReWear is for the household that wants to clear out and get paid fairly, and for the team that has to collect, weigh, pay, sort and resell those clothes every day. The customer books a pickup and approves a valuation; collectors run a daily route with a weighing form; warehouse managers receive, grade and dispatch stock; admins set prices, approve payouts and reconcile them; and business buyers, recyclers and NGOs take the sorted output.',
    points: [
      {
        icon: ScaleRoundedIcon,
        title: 'A weight you can check',
        text: 'Gross weight, bag tare, net weight and each category’s weight are entered at the door with a required photo of the scale. Nothing is paid until the customer approves that exact valuation version.',
      },
      {
        icon: PaymentsRoundedIcon,
        title: 'Paid to UPI, not to a wallet',
        text: 'After approval and pickup a payout is created for the booking. Up to ₹1,500 it is approved automatically, larger ones go to an admin, and it only shows Successful after the provider confirms it.',
      },
      {
        icon: RecyclingRoundedIcon,
        title: 'Every kilogram goes somewhere',
        text: 'Collected clothes are graded as premium reusable, standard reusable, repairable, recyclable, upcycling material or rejected, and each grade has its own outlet: the shop, B2B lots, recyclers or NGOs.',
      },
      {
        icon: CompareArrowsRoundedIcon,
        title: 'What sets it apart',
        text: 'Most clothing apps sell to shoppers, and Nyou Market, Clothes E-commerce and Namma Vastrika in this portfolio are storefronts for new stock. ReWear starts from the other side: it buys used clothes from households by weight, and its shop is just one outlet for what it collects. Like TowPilot and Karavali Go it gives each role its own app, but here the platform pays out to customers (a ledger, UPI payouts, reconciliation) and tracks physical stock by the gram from doorstep to dispatch. Free pickup is enforced in code and in the database, not left as a setting.',
      },
    ],
    audience: [
      { title: 'Households', text: 'Clear a wardrobe, a child’s outgrown clothes or old bedsheets, see the rates first and get paid to UPI, or donate the lot to an NGO instead.' },
      { title: 'Pickup executives', text: 'Work through today’s route, open navigation, verify the doorstep code, record weights and photos and complete the pickup without ever touching rates or payout values.' },
      { title: 'Warehouse and ops staff', text: 'Receive batches, sort them into grades, label and move stock, create shop listings and dispatches; admins run pricing, payouts, finance, reports and settings.' },
      { title: 'Buyers and partners', text: 'Verified thrift stores, wholesalers, recyclers and upcyclers buy graded lots by the kilo and negotiate in-app; recyclers confirm received weight and NGOs acknowledge donations.' },
    ],
  },

  solves: [
    {
      problem: 'Sellers can’t tell whether the weight or the rate is fair.',
      solution: 'Rates come from approved pricing rules and are shown before booking. Each booking stores a snapshot of those rates, so later price changes never alter it, and the collector must photograph the scale reading.',
    },
    {
      problem: 'Pickup fees and “transport” deductions eat into small payouts.',
      solution: 'The pickup fee is a constant zero, checked by a database constraint, and any deduction whose reason mentions pickup, collection, convenience or logistics is rejected. Minimum quantities can only be added as a published per-area policy.',
    },
    {
      problem: 'Anyone could turn up claiming to be the collector.',
      solution: 'Each booking has a 4-digit doorstep code that the assigned collector must enter before weighing, and collectors can only open pickups assigned to them.',
    },
    {
      problem: 'Payouts get stuck, sent twice or marked paid too early.',
      solution: 'One payout per booking, one provider attempt per idempotency key, retries only from Failed or Reversed, and a reconcile job that re-asks the provider with the same key. Only a verified webhook or a status check can mark it Successful.',
    },
    {
      problem: 'The warehouse finds a different weight than the doorstep.',
      solution: 'Received weight is compared with collected weight and flagged above a 5% variance. Re-inspection issues a new valuation version that the customer must approve or dispute before the payout is released.',
    },
    {
      problem: 'Stock disappears between collection and sale.',
      solution: 'One batch per booking, every change recorded as an inventory movement, stock that cannot go negative, adjustments approved by a second manager, and a weight trail from collected to received, sorted and dispatched.',
    },
    {
      problem: 'One person can quietly change the price list.',
      solution: 'Pricing is maker–checker: an admin proposes a rate, a different admin approves it, the old rule is closed on the new rule’s start date, and the history keeps the old and new price.',
    },
    {
      problem: 'Sorted clothes still need buyers.',
      solution: 'Premium pieces become individual shop listings, graded lots are offered to verified businesses with a minimum order and in-app counter-offers, recyclable stock is dispatched to recyclers and wearables go to NGO partners.',
    },
  ],

  features: [
    { icon: CheckroomRoundedIcon, title: 'Five-step sell wizard', text: 'Choose how to sell, pick categories (or an NGO for a donation), set an approximate weight and bag count, see the server estimate, then choose an address, date and free 2-hour slot.' },
    { icon: PriceChangeRoundedIcon, title: 'Live per-kg rate card', text: 'Thirteen categories with Quick Sell, Premium Resale and Recycling rates, filtered by city, plus an earnings calculator. Rules can be global, per city or per service area, with effective dates.' },
    { icon: LocalShippingRoundedIcon, title: 'Free pickup slots', text: 'Pincode serviceability, 2-hour slots up to 14 days ahead with capacity locks, blackout days, reschedule or cancel until the trip starts, and automatic assignment to the least-loaded collector.' },
    { icon: RouteRoundedIcon, title: 'Collector app', text: 'Today’s route and KPIs, a calendar and history, Google Maps navigation, start trip, doorstep-code verification, the weighing form and pickup completion.' },
    { icon: PhotoCameraRoundedIcon, title: 'Digital weighing with evidence', text: 'Gross and tare in grams, a weight per category and a rejected weight that must reconcile with net within 50 g, a required scale photo and optional evidence photos.' },
    { icon: FactCheckRoundedIcon, title: 'Valuation approval', text: 'Approve in the app or by a 6-digit code read out to the collector. Rejecting opens a dispute or a return, and every re-weighing creates a new version to approve.' },
    { icon: PaymentsRoundedIcon, title: 'Direct UPI payouts', text: 'Saved UPI IDs, auto-approval up to ₹1,500, admin review above it, provider attempts and retries, webhook handling, reconciliation with UTRs and printable payout receipts.' },
    { icon: WarehouseRoundedIcon, title: 'Receiving and sorting', text: 'Receive a batch with its received weight, sort it into six grades per category, inspect items and request re-inspection, with variance flags against the collected weight.' },
    { icon: QrCode2RoundedIcon, title: 'Traceable inventory', text: 'Lots and single units with QR labels, transfers between locations, adjustments that need a second manager and a weight trail for every batch.' },
    { icon: StorefrontRoundedIcon, title: 'Pre-loved shop', text: 'Inspected pieces with brand, size, condition and MRP, search and filters, wishlist, bag, a 15-minute stock reservation at checkout, flat shipping with a free threshold, refunds and verified reviews.' },
    { icon: HandshakeRoundedIcon, title: 'B2B portal', text: 'GSTIN-verified businesses see graded lots priced per kg with a minimum order, request a quantity, trade counter-offers, confirm, track dispatch and download tax invoices. Partner pricing tiers apply per buyer.' },
    { icon: RecyclingRoundedIcon, title: 'Recyclers and NGOs', text: 'Recycler dispatches with received-weight confirmation and settlements, and donation bookings that NGOs acknowledge, with donation receipts.' },
    { icon: AccountBalanceRoundedIcon, title: 'Double-entry ledger', text: 'Balanced, idempotent journals for payout accruals and settlements, reversals, shop captures and refunds, B2B and recycler revenue and operating costs.' },
    { icon: InsightsRoundedIcon, title: 'Admin console and reports', text: 'KPIs and charts by collection, revenue, category, city and collector, bookings and assignment, pricing approvals, operations, finance, support tickets, CSV and Excel exports, settings and the audit log.' },
    { icon: InstallMobileRoundedIcon, title: 'Installable PWA', text: 'Manifest with app shortcuts, install and update prompts, an offline page and banner, and a service worker that caches only build assets and public images, never API responses.' },
    { icon: LockRoundedIcon, title: 'Security and privacy', text: 'Phone OTP (HMAC-hashed, single use, rate limited) or Google sign-in, revocable HTTP-only sessions, signed and de-duplicated webhooks, private file storage, CSV injection guards, data export and account deletion.' },
  ],

  steps: [
    { icon: HomeRoundedIcon, title: 'Open the preview', text: 'Visit the GitHub Pages link. It is a read-only snapshot of the public website; a small note at the bottom explains that sign-in, pickups, payouts and the role apps need the full server.' },
    { icon: PriceChangeRoundedIcon, title: 'Check today’s rates', text: 'Open Pricing to see each category’s Quick Sell, Premium Resale and Recycling rate per kg, switch cities, and try the earnings calculator with a few categories and a weight.' },
    { icon: ScaleRoundedIcon, title: 'Learn the process', text: 'How it works walks through the eight steps from booking to a second life, and Guidelines lists what is accepted, what isn’t and how to prepare for pickup.' },
    { icon: ShoppingBagRoundedIcon, title: 'Browse the shop', text: 'Shop pre-loved lists the inspected resale pieces. Open one for its condition, size, MRP saving and inspection note; buying needs sign-in, which the preview can’t do.' },
    { icon: BusinessRoundedIcon, title: 'See the B2B and impact pages', text: 'For business shows the graded lots with price per kg, stock and minimum order, and Sustainability shows kilograms diverted, estimated CO₂e and water saved and stock by grade.' },
    { icon: TerminalRoundedIcon, title: 'Run the full app', text: 'Clone the repo, npm install, copy .env.example to .env, start Postgres with npm run db:local or Docker, then run prisma migrate deploy, npm run db:seed and npm run dev on port 3000.' },
    { icon: LoginRoundedIcon, title: 'Sign in as each role', text: 'In development the README lists seeded mobile numbers for every role, from customer and collector to warehouse, admin, B2B buyer, recycler and NGO, using a fixed development code.' },
    { icon: ReceiptLongRoundedIcon, title: 'Walk the core flow', text: 'Book a pickup as the customer, weigh it as the collector, approve the valuation, complete the pickup, reconcile the payout as admin and download the receipt, then sort the batch in the warehouse.' },
  ],
  shortcuts: [],

  screenshots: [
    {
      src: shot('01-home.webp'),
      icon: HomeRoundedIcon,
      title: 'Home',
      text: '“Your old clothes still have value.” Free doorstep pickup in Bengaluru, Pune and Hyderabad, Start selling and See today’s rates buttons, and counters for 2,544 kg collected, ₹38,808 paid to customers and a ₹0 pickup fee, beside an example weighing of 11.48 kg net after 0.65 kg bag tare.',
    },
    {
      src: shot('02-categories.webp'),
      icon: CategoryRoundedIcon,
      title: 'Clothing categories',
      text: 'From sarees to school uniforms: category tiles with their Quick Sell rate per kg, from ₹12 for kidswear and T-shirts to ₹22 for jackets. Several categories can go in one pickup and the collector weighs each separately.',
    },
    {
      src: shot('03-how-it-works.webp'),
      icon: RouteRoundedIcon,
      title: 'How it works',
      text: 'The first four of eight steps: book in two minutes, the collector verifies a 4-digit booking code at your door, gross and tare weighing per category, and a photo of the scale attached to your booking.',
    },
    {
      src: shot('04-pricing.webp'),
      icon: PriceChangeRoundedIcon,
      title: 'Rates per kilogram',
      text: 'The rate table with Quick Sell, Premium Resale and Recycling columns for each category and a city filter, next to the earnings calculator: three categories at 10 kg give an estimate of ₹133, with pickup at ₹0 and payment to UPI.',
    },
    {
      src: shot('05-weighing.webp'),
      icon: ScaleRoundedIcon,
      title: 'Free pickup and weighing',
      text: 'No pickup, convenience or transport fee, doorstep or lobby collection by collectors who confirm a booking code, and the weighing explained: 12.13 kg gross minus 0.65 kg tare is 11.48 kg net, split into jeans, T-shirts and kidswear with their amounts.',
    },
    {
      src: shot('06-upi-payout.webp'),
      icon: PaymentsRoundedIcon,
      title: 'Direct UPI payment',
      text: 'An example ₹186 payout to a masked UPI ID with its UTR, and the payout states Approved, Payout initiated, Processing and Successful. The page notes that a payment is only marked successful after the bank confirms it.',
    },
    {
      src: shot('07-shop.webp'),
      icon: StorefrontRoundedIcon,
      title: 'Pre-loved shop',
      text: 'Inspected resale pieces with condition badges, brand and price, plus search, category, size, price and sort filters and the wishlist and bag buttons, which need sign-in in the full app.',
    },
    {
      src: shot('08-product.webp'),
      icon: ShoppingBagRoundedIcon,
      title: 'Product page',
      text: 'A white lace midi dress at ₹1,299 against an MRP of ₹3,990, size S, Excellent condition, the date it passed premium inspection, shipping and cancellation terms and a Sign in to buy button.',
    },
    {
      src: shot('09-sustainability.webp'),
      icon: RecyclingRoundedIcon,
      title: 'Impact and stock by grade',
      text: '2,544 kg of clothes diverted with estimated CO₂e and water savings, and live stock across the sorting hubs by grade: standard reusable, repairable, unsorted, recyclable, premium reusable and upcycling material.',
    },
    {
      src: shot('10-b2b.webp'),
      icon: BusinessRoundedIcon,
      title: 'B2B lots',
      text: 'Graded lots for verified businesses, from recyclables at ₹12/kg to Grade-A reusable bales at ₹65/kg, each with stock, minimum order and the partner types it is offered to, under the verified-accounts, grading, negotiation and invoicing promises.',
    },
  ],
};
