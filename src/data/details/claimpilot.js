import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import RuleRoundedIcon from '@mui/icons-material/RuleRounded';
import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded';
import BuildCircleRoundedIcon from '@mui/icons-material/BuildCircleRounded';
import FolderSpecialRoundedIcon from '@mui/icons-material/FolderSpecialRounded';
import DocumentScannerRoundedIcon from '@mui/icons-material/DocumentScannerRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import TimerRoundedIcon from '@mui/icons-material/TimerRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';

// Case study for https://github.com/raiden-56/ClaimPilot (ClaimPilot – product ownership, warranty management and
// claim assistance). Screenshots are from the GitHub Pages build at https://raiden-56.github.io/ClaimPilot/, captured
// headless at 1440×770 in light mode from an identical local copy of that build. The Pages build has no server: after
// “Explore as Guest” every /api call is answered in the browser from a snapshot of the real guest demo
// (frontend/src/demo), with dates moved forward so countdowns stay current, so exact day counts and dates in the
// live demo drift from the ones described here. The capture script signed in only with the guest button (no
// password, no account), typed one issue into the coverage checker and let the letter editor generate a draft;
// nothing was saved.
const shot = (file) => `/projects/claimpilot/${file}`;

export default {
  product: 'ClaimPilot',
  accent: '#2D6A4F',
  tagline:
    'A home for everything you own: purchases, invoices and warranty countdowns in one place, plus a guided path through claims, claim letters, escalations, replacements and refunds when something breaks.',
  cover: shot('02-product-coverage.webp'),
  overview: [
    'ClaimPilot is a full-stack product ownership, warranty and claim assistance platform. You register what you buy in a five-step wizard (product, purchase, warranty, documents, review), keep invoices and certificates in a private vault, and see every warranty as a countdown worked out from the dates you saved, with manufacturer cover and extended, accidental-damage, AMC, seller or third-party plans tracked as separate records. When something fails, a coverage checker compares the issue with your saved dates and exclusions, a six-step wizard raises the claim, and the claim moves through a 15-status workflow with a history row for every change. A document generator writes ten kinds of claim letter from your saved facts only, marking anything missing as [Missing: …], and the app also tracks service visits, replacements, refunds and four-level escalations, with reports, reminders and an Admin Console. It never promises an outcome: approvals, refunds and rejections can only be recorded as a verified update from the provider.',
    'The backend is an Express + TypeScript API with Prisma 6 on PostgreSQL 16 (35 models), split into 15 modules with 198 REST endpoints and a Swagger UI. It has JWT access tokens with rotating refresh cookies and reuse detection, private local or S3 storage behind five-minute signed links, invoice OCR (tesseract.js or pdf-parse), PDF and Word export, email and a daily reminder scan. Letters come from a template engine; AI drafting through Anthropic’s API can be switched on with an API key, and any error, timeout or refusal falls back to the template. There are 40 backend unit tests, 30 API tests and 34 frontend tests. The GitHub Pages copy is a read-only guest demo: reads come from a snapshot of the guest data stored in the browser, and the coverage checker, letter preview and duplicate-serial check run the backend’s own code there. Saving shows the app’s “create a free account” prompt, and real accounts, uploads, OCR, emails and PDF/Word export need the server.',
  ],
  highlights: [
    { value: 15, label: 'Claim statuses in the workflow' },
    { value: 10, label: 'Claim letter types' },
    { value: 35, label: 'Prisma data models' },
    { value: 198, label: 'REST API endpoints' },
  ],
  stack: [
    'React 18',
    'TypeScript',
    'Vite 6',
    'Material UI 6',
    'Redux Toolkit (RTK Query)',
    'React Router 6',
    'React Hook Form + Zod',
    'Framer Motion',
    'Recharts',
    'TanStack Table',
    'TipTap',
    'Express',
    'Prisma 6',
    'PostgreSQL 16',
    'JWT + refresh rotation',
    'pdfkit · docx · exceljs',
    'tesseract.js OCR',
    'node-cron · nodemailer',
    'Vitest + Supertest',
    'Docker',
  ],
  architecture: [
    { title: 'frontend', text: 'React SPA with an app shell, a collapsible sidebar and a Ctrl/⌘ K command palette. RTK Query endpoints per module refresh the access token automatically; forms use React Hook Form with Zod, letters are edited in TipTap, and the theme has matching light and dark modes.' },
    { title: 'backend/src/modules', text: '15 Express modules (auth, products, warranties, documents, claims, escalations, generator, services, replacements, notifications, reports, catalogue, lookups, users, admin), each with Zod-validated routes, a service layer and Prisma, behind auth, role and guest-guard middleware.' },
    { title: 'backend/src/lib', text: 'The business rules: warranty.ts derives seven coverage statuses from saved dates only, claimWorkflow.ts holds the claim state machine and the verified-update rule, and coverage.ts is the non-saving coverage check, shared with the browser demo.' },
    { title: 'frontend/src/demo', text: 'The GitHub Pages build answers /api in the browser from a snapshot of the real guest demo, filtering, sorting and paging lists locally and running the coverage check and letter templates from backend/src. Every save gets the API’s own guest-restricted answer.' },
  ],

  why: {
    intro:
      'Warranty paperwork tends to live in a drawer, an inbox and a shopping app at the same time. When a product fails, people dig for the invoice, guess whether it is still covered, and write to support from scratch. ClaimPilot keeps the purchase, the warranty and the claim together, and stays honest that only the manufacturer can decide.',
    points: [
      {
        icon: ReceiptLongRoundedIcon,
        title: 'One record per thing you own',
        text: 'Each product holds its purchase, warranties, documents, service visits, claims, replacements, notes and an activity timeline, so the facts are ready the day something breaks.',
      },
      {
        icon: TimerRoundedIcon,
        title: 'Countdowns from your own dates',
        text: 'Warranty status is computed only from the saved start and end dates. Add-on plans are separate records, and a product is Under Extension when the manufacturer cover has ended but a plan is still running.',
      },
      {
        icon: RuleRoundedIcon,
        title: 'No promises it can’t keep',
        text: 'The coverage checker says what your saved terms suggest, never that a claim will be approved. Approvals, refunds and rejections can only be entered as a verified update with its source.',
      },
      {
        icon: EditNoteRoundedIcon,
        title: 'Letters without invented facts',
        text: 'Claim letters use only saved data. Anything missing is marked as a highlighted [Missing: …] placeholder, and you review the draft and send it yourself.',
      },
    ],
    audience: [
      { title: 'Households', text: 'Keep every appliance, gadget and piece of furniture with its invoice, warranty countdown and service history.' },
      { title: 'People with a broken product', text: 'Check what the saved warranty says, raise a claim step by step and prepare the letters to send.' },
      { title: 'Anyone stuck with support', text: 'Log every call and email, then escalate level by level with the complaint numbers and dates already filled in.' },
      { title: 'Administrators', text: 'Run the platform: users, brands and catalogue, claim status settings, escalation levels, notification templates and audit logs.' },
    ],
  },

  solves: [
    {
      problem: 'Invoices and warranty cards get lost exactly when they’re needed.',
      solution: 'A private Documents Vault with 14 categories, tags, versions and product or claim links, plus OCR that reads an invoice and asks you to confirm the fields before applying them.',
    },
    {
      problem: 'Nobody remembers when a warranty ends.',
      solution: 'Countdowns and progress rings on every product, expirations bucketed into 7, 15, 30 and 60 days, and reminders at 60, 30, 15 and 7 days before the end by default.',
    },
    {
      problem: 'An extended warranty or AMC is easy to forget about.',
      solution: 'Each plan is its own record with provider, policy number, terms and exclusions, and the combined coverage timeline shows the manufacturer and add-on periods side by side.',
    },
    {
      problem: 'You can’t tell whether a fault is likely to be covered.',
      solution: 'The coverage checker matches the issue against saved exclusions (liquid, drops, power surges, tampering and more), checks the period, and lists the documents and details the manufacturer will ask for.',
    },
    {
      problem: 'Claims drift for weeks with no record of who said what.',
      solution: 'A 15-status workflow with allowed transitions, a history entry for every change, a communications log, evidence uploads and reminders for claims left open past 30 and 60 days.',
    },
    {
      problem: 'Writing a formal complaint or appeal takes an evening.',
      solution: 'Ten letter types in four tones (formal, polite, firm, urgent), filled from the saved product, purchase, warranty and claim facts, editable, versioned and exportable to PDF or Word.',
    },
    {
      problem: 'It’s unclear what was actually sent versus only drafted.',
      solution: 'Escalations keep “prepared” and “filed by you” apart, record the date and reference when you file, and flag a follow-up date that has passed.',
    },
    {
      problem: 'Replacement products lose their history.',
      solution: 'A replacement links the new unit to the original, which is marked as replaced and keeps all its claims; refunds are tracked separately with their own timeline.',
    },
  ],

  features: [
    { icon: DashboardRoundedIcon, title: 'Overview dashboard', text: 'Count-up KPI cards for products, active, expiring and expired warranties, open and resolved claims and pending service, plus warranty distribution, expiry buckets, claim activity, categories, milestones and quick actions.' },
    { icon: Inventory2RoundedIcon, title: 'My Products', text: 'Five-step registration wizard, grid and list views, filters, duplicate-serial detection, QR code, ownership transfer, sold, disposed and archived states, a PDF product report and ten detail tabs.' },
    { icon: VerifiedUserRoundedIcon, title: 'Warranty Center', text: 'All warranties across six types with seven statuses (active, expiring soon, expired, not started, under extension, lifetime, unknown), countdowns, exclusions, providers and a combined coverage timeline.' },
    { icon: FactCheckRoundedIcon, title: 'Coverage checker', text: 'Describe the issue and see the period verdict, each warranty’s status, saved exclusions that match, missing documents and details, and what only the provider can confirm. It saves nothing.' },
    { icon: AssignmentRoundedIcon, title: 'Guided claim wizard', text: 'Six steps (product, problem, warranty check, evidence, claim details, review) with severity, troubleshooting tried, preferred service method and evidence photos, videos or PDFs.' },
    { icon: RuleRoundedIcon, title: 'Claim workflow', text: '15 statuses from Draft to Closed with a server-side state machine, a history row for every change, and approvals or rejections accepted only as a verified external update with its source.' },
    { icon: HistoryEduRoundedIcon, title: 'Document generator', text: 'Ten letter types, from the initial claim and repair request to rejection appeal and consumer grievance, in four tones, with a rich-text editor, versions, PDF/DOCX export, an email draft and save to the vault.' },
    { icon: AutoAwesomeRoundedIcon, title: 'Optional AI drafting', text: 'With AI_PROVIDER=anthropic and an API key, the template draft is rewritten by Claude under strict rules (saved facts only, placeholders kept). Any failure falls back to the template, which is the default.' },
    { icon: TrendingUpRoundedIcon, title: 'Escalation Center', text: 'Four configurable levels from customer support to an external consumer grievance channel, seven statuses, a communication timeline and only admin-verified grievance channels.' },
    { icon: SwapHorizRoundedIcon, title: 'Replacements & refunds', text: 'Separate tracking with timelines (eight replacement and seven refund statuses), provider confirmation for approvals, and the replacement unit linked to the original product.' },
    { icon: BuildCircleRoundedIcon, title: 'Service History', text: 'Visits, upcoming appointments and follow-ups, receipts, before and after photos, costs, warranty-covered versus paid visits and a service-centre performance table.' },
    { icon: FolderSpecialRoundedIcon, title: 'Documents Vault', text: 'Drag-and-drop upload with progress, 14 categories, tags, links to products and claims, version history, preview, and magic-byte file checks with signed five-minute download links.' },
    { icon: DocumentScannerRoundedIcon, title: 'Invoice OCR', text: 'Reads invoices with tesseract.js or a PDF’s text layer and proposes the product name, model and serial, seller, invoice number, purchase date, amount and tax, which you confirm before anything is applied.' },
    { icon: SearchRoundedIcon, title: 'Product Discovery', text: 'An admin-managed brand directory and catalogue. Unverified warranty or support details stay hidden, and every entry shows its source and verification date.' },
    { icon: NotificationsActiveRoundedIcon, title: 'Notifications & reminders', text: 'In-app and email notifications of 11 types, with optional browser notifications, preferences and a daily scheduler whose reminders are de-duplicated per user, entity and milestone.' },
    { icon: InsightsRoundedIcon, title: 'Reports & Analytics', text: 'Portfolio and covered value, claims by status and brand, resolution time, repair spend, replacements and refunds, service-centre performance, PDF and Excel export, and “not enough data” guards.' },
    { icon: AdminPanelSettingsRoundedIcon, title: 'Admin Console', text: 'Nine sections: dashboard, users and roles, reference data, catalogue, claim configuration, notification templates, demo data, system settings and audit logs.' },
    { icon: LockRoundedIcon, title: 'Security & guest mode', text: 'bcrypt, rotating refresh cookies with reuse detection, Helmet, CORS, rate limits, ownership checks on every record, audited support grants, and a guest role that can only read and preview.' },
  ],

  steps: [
    { icon: LoginRoundedIcon, title: 'Explore as Guest', text: 'Open the live demo and press Explore as Guest on the sign-in page. You land in Alex Guest’s sample household; nothing you do is saved.' },
    { icon: DashboardRoundedIcon, title: 'Read the overview', text: 'The dashboard shows how many products are covered, which warranties end soon (switch between 7, 15, 30 and 60 days) and the latest claim activity.' },
    { icon: Inventory2RoundedIcon, title: 'Open a product', text: 'In My Products, open the MacBook Air: its manufacturer warranty has ended but AppleCare+ is active, so the coverage timeline shows it as Under Extension.' },
    { icon: FactCheckRoundedIcon, title: 'Check coverage', text: 'In Warranty Center → Coverage checker, pick a product, describe the problem and press Check saved coverage to see the period, matching exclusions and missing paperwork.' },
    { icon: AssignmentRoundedIcon, title: 'Follow a claim', text: 'In Claims Management → All Claims, open a claim to see its progress, evidence, communications, service visits and the full status history.' },
    { icon: HistoryEduRoundedIcon, title: 'Prepare a letter', text: 'From a claim, press Generate letter, choose a letter type and tone, and read the draft. Placeholders show what is still missing. Saving and PDF/Word export need the server.' },
    { icon: TrendingUpRoundedIcon, title: 'Escalate and track outcomes', text: 'The Escalation Center shows each level, prepared or filed; Replacements & Refunds tracks the outcome, and Reports & Analytics sums it all up.' },
    { icon: TerminalRoundedIcon, title: 'Run the real server', text: 'Clone the repo, start PostgreSQL with docker compose -f docker-compose.dev.yml up -d, then migrate, seed and run the API (port 4010) and the web app (port 5320) to use accounts, uploads, OCR and exports.' },
  ],
  shortcuts: [
    { keys: ['Ctrl / ⌘', 'K'], action: 'Open or close the search and command palette' },
    { keys: ['↑', '↓'], action: 'Move through palette results' },
    { keys: ['Enter'], action: 'Open the selected palette result' },
    { keys: ['Enter'], action: 'Add an exclusion on a warranty’s detail page' },
  ],

  screenshots: [
    {
      src: shot('01-overview.webp'),
      icon: DashboardRoundedIcon,
      title: 'Overview dashboard',
      text: 'Alex Guest’s sample household: quick actions to register a product, create a claim, upload an invoice, generate a letter or add a service visit, then KPI cards for 12 products, 9 active warranties, 3 expiring within 30 days, 5 open and 4 resolved claims and 2 pending service visits.',
    },
    {
      src: shot('02-product-coverage.webp'),
      icon: Inventory2RoundedIcon,
      title: 'Product coverage timeline',
      text: 'The MacBook Air’s manufacturer warranty has expired, but AppleCare+ runs until September 2028, so the product is Under Extension. The ring counts the days left and the timeline places both periods against today, above ten tabs for purchase, documents, service, claims and more.',
    },
    {
      src: shot('03-warranty-center.webp'),
      icon: VerifiedUserRoundedIcon,
      title: 'Warranty Center',
      text: 'All 16 warranty records filtered by status (active, expiring soon, expired, not started, lifetime, unknown), the warranties ending in the next 30 days with their countdowns, and a shortcut to the coverage checker.',
    },
    {
      src: shot('04-coverage-checker.webp'),
      icon: FactCheckRoundedIcon,
      title: 'Coverage checker',
      text: '“Screen cracked after a drop and some water got inside” on the Galaxy S25 Ultra. Both warranties are active but not verified against the official policy, and the saved exclusions “Liquid damage” and “Physical damage due to drops” are flagged for the provider to confirm. No documents are missing.',
    },
    {
      src: shot('05-claim-history.webp'),
      icon: AssignmentRoundedIcon,
      title: 'Claim and status history',
      text: 'A vacuum claim that was rejected as normal wear and is now Escalated. The progress bar sits at In review, tabs hold evidence, three communications, a service visit, a letter and two requests, and the rejection appears in the history as a verified external update with the provider’s reference.',
    },
    {
      src: shot('06-claim-letter.webp'),
      icon: HistoryEduRoundedIcon,
      title: 'Rejection appeal letter',
      text: 'The generator’s draft of a warranty rejection appeal for that claim, in a formal tone: complaint number, model, serial, warranty dates and the recorded rejection all come from saved data, and the one missing fact (a phone number) is listed as a placeholder to fill.',
    },
    {
      src: shot('07-documents-vault.webp'),
      icon: FolderSpecialRoundedIcon,
      title: 'Documents Vault',
      text: '39 sample documents by category (12 purchase invoices, 8 product photos, 5 service receipts and more), with filters for type, tag, product, claim and date, and cards showing the linked product, claim and tags.',
    },
    {
      src: shot('08-service-history.webp'),
      icon: BuildCircleRoundedIcon,
      title: 'Service History',
      text: 'An upcoming follow-up for the TV and a scheduled washing-machine repair, then the visit timeline grouped by month, each with its status, visit type, charges, warranty-covered flag and linked claim.',
    },
    {
      src: shot('09-reports.webp'),
      icon: InsightsRoundedIcon,
      title: 'Reports & Analytics',
      text: 'Total product value, value still under warranty, repair spend, completed refunds and an average resolution time of 21 days, above the warranty coverage donut, claims created versus resolved per month and claims by status.',
    },
    {
      src: shot('10-escalation.webp'),
      icon: TrendingUpRoundedIcon,
      title: 'Escalation level 2',
      text: 'The vacuum claim escalated to the service centre manager: the four-level stepper, the reason and manufacturer response, a follow-up date marked overdue, and a panel that separates what ClaimPilot prepared from what the user filed, here recorded on 15 October with its reference.',
    },
  ],
};
