import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import ViewKanbanRoundedIcon from '@mui/icons-material/ViewKanbanRounded';
import FolderSharedRoundedIcon from '@mui/icons-material/FolderSharedRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import CardMembershipRoundedIcon from '@mui/icons-material/CardMembershipRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import InstallMobileRoundedIcon from '@mui/icons-material/InstallMobileRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import HubRoundedIcon from '@mui/icons-material/HubRounded';

// Case study for https://github.com/raiden-56/PartnerBridge (PartnerBridge – B2B partnership discovery, networking and
// collaboration platform). Its read-only preview is meant to be served by GitHub Pages at
// https://raiden-56.github.io/PartnerBridge/, but Pages is not switched on for the repo yet, so these screenshots
// come from a local build of that same Pages preview: the repo was copied to a scratch folder, `npm run pages:build`
// was run with PAGES_BASE_PATH=/PartnerBridge and PAGES_PUBLIC_URL=https://raiden-56.github.io/PartnerBridge (as the
// workflow does), and out-pages/ was served under /PartnerBridge/ and captured headless at 1440×770 with
// puppeteer-core. The preview is a snapshot of the app in local demo mode with fictional demo companies: the build
// starts the app, signs in as the guest company owner and platform admin and saves each page, so every page is
// static and nothing a visitor does is saved. The capture entered only through the sign-in page’s guest-mode links
// (“Continue as company owner”, then “Switch to platform admin” in the preview bar); no password was typed, no account
// was created and no form was submitted. The only change made on a page was opening two “Show score breakdown”
// panels on Smart matches. Dates and relative times are those of the snapshot, so they drift in the live preview.
const shot = (file) => `/projects/partnerbridge/${file}`;

export default {
  product: 'PartnerBridge',
  accent: '#2563EB',
  tagline:
    'An open B2B marketplace where companies find partners, send structured partnership requests and then run each partnership in a private workspace shared by both companies: chat, tasks, milestones, documents, agreements and deals.',
  cover: shot('06-workspace-chat.webp'),
  overview: [
    'PartnerBridge follows a partnership from first contact to results: Discover → Connect → Negotiate → Establish → Collaborate → Grow. A company publishes its profile through a seven-step onboarding wizard, saying what it offers and what it is looking for across 14 partnership types (distributor, reseller, referral, technology, white-label, joint venture and more). Others find it through a directory with full-text search and 12 filters, or through smart matches that score every company with eight visible rules. Contact happens through a structured partnership request (subject, introduction, proposed collaboration, expected benefits and commercial model) that moves through eight statuses from draft to accepted. Accepting a request, or an application to a published opportunity, creates a partnership and a private workspace for both companies, with realtime chat, a task board, milestones, versioned documents, agreement records that each side approves, and deals with referral tracking. Analytics, team roles and permissions, plans with usage limits, notifications and a 15-module admin console complete the platform.',
    'It is a Next.js 16 App Router app on Supabase: 48 PostgreSQL tables, Row Level Security on every table, SECURITY DEFINER functions for workflow steps such as accepting a request, Realtime for chat and notifications, and Storage for logos, workspace files and verification documents. Every server action is validated with Zod and re-checks permissions. Payments go through Razorpay with HMAC-verified callbacks and webhooks, email through Resend, push through Web Push, and the app is an installable PWA with an offline outbox for messages. `npm run db:check` applies the migrations to an embedded Postgres (PGlite) and runs 40+ tenant-isolation and workflow tests. A local demo mode needs no Supabase at all: it runs the real migrations in PGlite inside the Next.js server, loads fictional demo companies and offers four guest personas. The GitHub Pages preview is a static snapshot of that demo, so pages can be browsed but buttons and forms only show a “read-only preview” message, and search, filters, exports and anything that saves need the running app.',
  ],
  highlights: [
    { value: 8, label: 'Partnership request statuses' },
    { value: 9, label: 'Tabs in each shared workspace' },
    { value: 15, label: 'Admin console modules' },
    { value: 48, label: 'PostgreSQL tables with RLS' },
  ],
  stack: [
    'Next.js 16 (App Router)',
    'React 19',
    'TypeScript',
    'Tailwind CSS 4',
    'Radix UI',
    'Framer Motion',
    'Recharts',
    'Supabase (Postgres, Auth, Storage, Realtime)',
    'Row Level Security',
    'Zod 4',
    'Razorpay',
    'Resend',
    'Web Push (VAPID)',
    'PWA service worker',
    'exceljs · pdf-lib',
    'PGlite',
    'Vitest',
    'GitHub Actions',
  ],
  architecture: [
    { title: 'src/app', text: 'App Router routes for the marketing site and public company profiles, sign-in and onboarding, the company dashboard (/dashboard, with a nine-tab workspace per partnership) and the /admin console. A proxy redirects anonymous visitors away from private areas, and pages call notFound() when RLS returns nothing.' },
    { title: 'src/actions + src/lib', text: 'One server-action file per domain (requests, workspace, opportunities, team, billing, admin…) with Zod validation and requireOrg(permission) checks. lib holds the permission matrix, the rule-based matching engine, analytics computed from live rows, notifications, billing limits and the Razorpay provider.' },
    { title: 'supabase/migrations', text: 'Six migrations: schema, functions and triggers, RLS policies, storage buckets, reference data (industries, 14 partnership categories, plans) and billing helpers. Triggers protect columns such as verification status and platform role, and accepting a request locks the row and is idempotent.' },
    { title: 'src/lib/local-supabase + scripts', text: 'Local demo mode answers the app’s Supabase calls from an embedded Postgres at /local-sb. scripts/build-pages.ts builds the app under a base path, crawls it as a visitor, the guest owner and the admin, and writes the static GitHub Pages preview; check-migrations.ts runs the RLS tests.' },
  ],

  why: {
    intro:
      'Most B2B partnerships still start with a cold message and continue in scattered email threads, shared drives and spreadsheets that neither side fully owns. PartnerBridge is where a company owner or partnership manager goes each day to find companies whose offer fits theirs, answer partnership requests, and then work with each partner in one shared place, with tasks, agreements and the revenue the partnership brings in.',
    points: [
      {
        icon: TravelExploreRoundedIcon,
        title: 'Find partners by fit, not by luck',
        text: 'Profiles state what a company offers and what it is looking for, so search, filters and smart matches can surface a distributor for a food brand or a development studio for a marketing agency.',
      },
      {
        icon: SendRoundedIcon,
        title: 'Proposals instead of cold messages',
        text: 'A partnership request has to say what you propose, what both sides gain and the commercial model. The receiver can accept, reject or start a discussion, and duplicate open requests are blocked.',
      },
      {
        icon: HandshakeRoundedIcon,
        title: 'One workspace per partnership',
        text: 'Both companies share chat, tasks, milestones, documents, agreements and deals, while internal documents and each company’s team access stay under its own control.',
      },
      {
        icon: HubRoundedIcon,
        title: 'How it differs',
        text: 'B2B directories and networking sites stop at the introduction; PartnerBridge carries on after the yes. Its match scores show every factor and weight, agreement approvals are labelled as internal records rather than e-signatures, and deal revenue is kept in three separate figures: estimated pipeline, revenue claimed by the deal owner, and revenue verified by the other company. In this portfolio, CollabSpace and CrewDesk are workspaces for one team (a product team’s canvas, docs and tasks, or a team of AI agents), whereas PartnerBridge’s workspace is shared between two separate companies, with database rules deciding what each side can see. Karavali Go is a marketplace where customers book drivers and pay a booking fee; here nothing is bought, the outcome is a partnership, and the platform earns only from company subscriptions.',
      },
    ],
    audience: [
      { title: 'Company owners', text: 'Publish the company profile, decide which partnerships to pursue, manage the team and plan, and see what partnerships bring in.' },
      { title: 'Partnership managers', text: 'Work through incoming requests and applications every day, post opportunities, and run the workspaces they are assigned to.' },
      { title: 'Partner companies', text: 'Distributors, resellers, agencies, SaaS vendors and logistics firms looking for complementary businesses to sell with or through.' },
      { title: 'Platform staff', text: 'Moderators verify companies and handle reports; super admins also manage plans, payments, categories, email templates, settings and the audit log.' },
    ],
  },

  solves: [
    {
      problem: 'It’s hard to tell which companies would make good partners.',
      solution: 'Smart matches score each company out of 100 with eight weighted rules (partnership-type fit, complementary services, industry, goals, geography, size, target market, capabilities) and list the reasons, shared interests and suggested collaborations.',
    },
    {
      problem: 'Cold outreach gets ignored.',
      solution: 'Requests have a fixed structure: partnership category (with suggestions from what the other company seeks), subject, personal introduction, proposed collaboration, expected benefits and commercial model.',
    },
    {
      problem: 'Nobody knows where a request stands.',
      solution: 'Incoming, outgoing and draft tabs with eight statuses (draft, sent, viewed, negotiation, accepted, rejected, cancelled, expired), a timeline that records when it was viewed, and a daily job that expires stale requests.',
    },
    {
      problem: 'After the yes, the collaboration scatters across tools.',
      solution: 'Accepting creates the partnership and its workspace in one transaction, with chat, a kanban board with comments, milestones with Google Calendar links, documents, agreements, deals, an activity timeline and a workspace team.',
    },
    {
      problem: 'Sensitive files leak to the other side.',
      solution: 'Workspace documents are marked internal or shared, internal ones are invisible to the partner company at database level, versions are kept, and every download is logged.',
    },
    {
      problem: 'Partnership revenue is guesswork.',
      solution: 'Deals record the referral source, stage and expected value; won deals carry the owner’s attributed revenue and a separate amount that only the partner company can verify.',
    },
    {
      problem: 'Fake or unverified companies erode trust.',
      solution: 'Verification is optional but reviewed by staff, who see the registration details and warnings when the domain or email doesn’t match the website. Verified companies get a badge and a filter.',
    },
    {
      problem: 'Partners can see each other’s data in shared tools.',
      solution: 'Row Level Security on every table, permission checks in every server action and column-protection triggers, verified by 40+ automated tests that run as real tenants.',
    },
  ],

  features: [
    { icon: PublicRoundedIcon, title: 'Marketing site', text: 'Hero with a partner network graph, live platform stats, featured companies, categories, open opportunities, pricing, FAQ and a contact form with a honeypot and rate limit.' },
    { icon: RocketLaunchRoundedIcon, title: 'Onboarding wizard', text: 'Seven steps saved one by one: about you, company, description, partnerships offered and sought, goals, optional verification and publish.' },
    { icon: TravelExploreRoundedIcon, title: 'Company discovery', text: 'Full-text search over companies, products, services and locations, 12 filters (verified, industry, partnership types, location, size, founding year, capability, target market, open to requests), sorting, grid or list and pagination.' },
    { icon: BusinessRoundedIcon, title: 'Company profiles', text: 'Description, mission, partnership interests, goals, products and services, and contact details that are private by default with per-field visibility, plus request, contact, save, share, report and block.' },
    { icon: AutoAwesomeRoundedIcon, title: 'Smart matches', text: 'A transparent rule-based score with a per-factor breakdown, reasons and suggested collaborations. Admins can change the weights, and the plan sets how many recommendations are shown.' },
    { icon: WorkRoundedIcon, title: 'Opportunities and applications', text: 'Publish, pause or close partnership opportunities, receive applications, shortlist or reject them, and accept one to open a workspace.' },
    { icon: SendRoundedIcon, title: 'Partnership requests', text: 'Eight statuses, duplicate prevention per sender, receiver and category, a discussion step, and an idempotent accept that always returns the same partnership.' },
    { icon: ForumRoundedIcon, title: 'Realtime chat', text: 'Workspace and direct conversations with read receipts, up to five attachments per message, unread counts, search, and an offline outbox that sends queued messages when the connection returns.' },
    { icon: ViewKanbanRoundedIcon, title: 'Tasks and milestones', text: 'A drag-and-drop board (to do, in progress, blocked, done) with priorities, assignees, due dates and comments, plus milestones with progress and Add to Google Calendar links.' },
    { icon: FolderSharedRoundedIcon, title: 'Shared documents', text: 'Seven categories, internal or shared visibility, version history, signed short-lived download links and an access log.' },
    { icon: HistoryEduRoundedIcon, title: 'Agreement records', text: 'Effective, expiry and renewal dates, commercial terms, versions and an approval from each company before an agreement can be marked active or later terminated.' },
    { icon: TrendingUpRoundedIcon, title: 'Deals and referrals', text: 'Six stages from lead to won or lost, referral source, expected value and closing date, with estimated pipeline, attributed revenue and partner-verified revenue never added together.' },
    { icon: InsightsRoundedIcon, title: 'Partnership analytics', text: 'Ten KPIs, three revenue figures and six charts (partnerships over time, requests versus acceptances, types, monthly referrals, deal pipeline, engagement), filterable and exportable to CSV, Excel or PDF.' },
    { icon: GroupsRoundedIcon, title: 'Team and permissions', text: 'Owner, admin, partnership manager and member roles with grantable permissions, invites with hashed tokens, workspace-level access and ownership transfer.' },
    { icon: CardMembershipRoundedIcon, title: 'Plans and billing', text: 'Free, Growth, Business and Enterprise plans with trials and monthly limits on requests, applications, opportunities and team size, paid through Razorpay with invoices and cancellation.' },
    { icon: NotificationsActiveRoundedIcon, title: 'Notifications', text: 'In-app notifications in realtime, email and opt-in web push, with per-type preferences, plus daily reminders and expiry jobs.' },
    { icon: AdminPanelSettingsRoundedIcon, title: 'Admin console', text: '15 modules from company verification, users, request monitoring and reports to subscriptions, payments, plans, taxonomy, announcements, email templates, settings and audit logs, with separate moderator and super-admin scopes.' },
    { icon: InstallMobileRoundedIcon, title: 'Installable PWA', text: 'Web manifest, a hand-written service worker that never caches private pages, an offline page, an install prompt and an update toast.' },
    { icon: LockRoundedIcon, title: 'Security and privacy', text: 'RLS everywhere, protected columns, database rate limits, open-redirect and CSV-injection protection, self-service data export and account deletion.' },
  ],

  steps: [
    { icon: LoginRoundedIcon, title: 'Continue as company owner', text: 'Open the preview, choose Login, then Continue as company owner in the Guest mode box. You browse as Aarav Mehta of Northstar Digital Solutions, a fictional web studio.' },
    { icon: TravelExploreRoundedIcon, title: 'Look for partners', text: 'Open Discover to browse the demo companies, then a profile such as BrightWave Marketing to see what it offers and what it is looking for. Search and filters need the running app.' },
    { icon: AutoAwesomeRoundedIcon, title: 'Check smart matches', text: 'Smart matches ranks companies for Northstar. Open Show score breakdown on a card to see exactly where each point came from.' },
    { icon: SendRoundedIcon, title: 'Answer a request', text: 'In Requests → Incoming, open UrbanNest Interiors’ referral proposal. Accept, Start discussion and Reject are shown; in the preview they only display the read-only message.' },
    { icon: HandshakeRoundedIcon, title: 'Open the workspace', text: 'Partnerships → BrightWave Marketing opens the shared workspace. Go through Messages, Tasks, Milestones and Documents, where one file is marked Internal.' },
    { icon: HistoryEduRoundedIcon, title: 'Agreements and deals', text: 'Agreements shows a referral agreement approved by Northstar and awaiting BrightWave. Deals lists four deals, three of them referrals, with pipeline, attributed and verified revenue.' },
    { icon: VerifiedUserRoundedIcon, title: 'Switch to platform admin', text: 'Use Switch to platform admin in the yellow preview bar to see the admin overview, the verification queue and the other console modules.' },
    { icon: TerminalRoundedIcon, title: 'Beyond the demo', text: 'The full version runs on Supabase (PostgreSQL with Row Level Security) and saves every change; its local demo mode adds four guest personas, and the hosted preview is read-only.' },
  ],
  shortcuts: [
    { keys: ['Enter'], action: 'Send a chat message' },
    { keys: ['Shift', 'Enter'], action: 'New line in a chat message' },
    { keys: ['Enter'], action: 'Apply the Country filter in Discover' },
  ],

  screenshots: [
    {
      src: shot('01-landing.webp'),
      icon: PublicRoundedIcon,
      title: 'The open B2B partnership marketplace',
      text: 'The public home page: “Great Businesses Grow Better Together” with Find Business Partners and List Your Company, and a graph linking your company to technology, marketing, distribution, logistics and other partners. The yellow bar marks the read-only preview and offers the two guest views.',
    },
    {
      src: shot('02-discover.webp'),
      icon: TravelExploreRoundedIcon,
      title: 'Discover companies',
      text: 'The guest owner’s directory of seven demo companies, featured ones first, each with industry, city, size, a verified tick and what it offers and seeks. Filters on the left cover verified only, industry and partnership types, with search, sorting and a grid or list view above.',
    },
    {
      src: shot('03-company-profile.webp'),
      icon: BusinessRoundedIcon,
      title: 'Company profile',
      text: 'BrightWave Marketing, a Bengaluru agency: description, mission, products and services, and partnership interests (looking for technology, referral and white-label; offering marketing, referral and affiliate). Contact details stay private until a request or message.',
    },
    {
      src: shot('04-smart-matches.webp'),
      icon: AutoAwesomeRoundedIcon,
      title: 'Smart matches with score breakdown',
      text: 'Apex Logistics scores 69% and Horizon Travel Group 67% for Northstar. Each card lists why (matching partnership types, complementary services, overlapping locations, shared customers) and suggested collaborations, and the opened breakdown shows the points from each rule.',
    },
    {
      src: shot('05-partnership-request.webp'),
      icon: SendRoundedIcon,
      title: 'Incoming partnership request',
      text: 'UrbanNest Interiors proposes a referral partnership for office fit-out clients: introduction, a 90-day pilot, expected benefits and a 10% referral fee, with Accept, Start discussion and Reject. The timeline shows when it was created, sent and viewed.',
    },
    {
      src: shot('06-workspace-chat.webp'),
      icon: ForumRoundedIcon,
      title: 'Shared partnership workspace',
      text: 'The private BrightWave × Northstar workspace with its nine tabs. In Messages, BrightWave reports the first referral, Northstar’s reply shows a Seen receipt, and the composer takes attachments.',
    },
    {
      src: shot('07-agreements.webp'),
      icon: HistoryEduRoundedIcon,
      title: 'Agreement awaiting approval',
      text: 'A referral and co-marketing agreement under review: effective and expiry dates, 10% referral fee and costs shared 50/50. Northstar has approved it and BrightWave has not yet. A banner says these approvals are not legally binding e-signatures.',
    },
    {
      src: shot('08-deals.webp'),
      icon: TrendingUpRoundedIcon,
      title: 'Deals and referral revenue',
      text: 'Four deals with stage, owner, expected value and closing date. ₹12L estimated pipeline, ₹2.8L attributed and ₹2.7L verified revenue are shown separately; the won Café Brew Co. deal is ₹2,80,000 claimed and ₹2,65,000 confirmed by BrightWave.',
    },
    {
      src: shot('09-analytics.webp'),
      icon: InsightsRoundedIcon,
      title: 'Partnership analytics',
      text: 'Charts built from Northstar’s own records: cumulative partnerships, requests sent and received against acceptances, partnerships by type and monthly referrals received and sent. Above them are KPI cards, the three revenue figures and the filter and export bar.',
    },
    {
      src: shot('10-admin-verification.webp'),
      icon: VerifiedUserRoundedIcon,
      title: 'Admin verification queue',
      text: 'The super admin’s console with its 15 modules. UrbanNest Interiors waits for verification, with warnings that its domain differs from its website and its representative’s email isn’t on the company domain, next to Approve, Request more information and Reject.',
    },
  ],
};
