import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import CloudOffRoundedIcon from '@mui/icons-material/CloudOffRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import DoorFrontRoundedIcon from '@mui/icons-material/DoorFrontRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import FingerprintRoundedIcon from '@mui/icons-material/FingerprintRounded';
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';
import WindPowerRoundedIcon from '@mui/icons-material/WindPowerRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';

// Case study for https://github.com/raiden-56/windgaurd (the repo name is spelled this way; the product is
// WINDGUARD – workforce attendance and site operations for wind farms, substations and remote sites).
// Screenshots are from the live GitHub Pages demo at https://raiden-56.github.io/windgaurd/, captured headless at
// 1440×770 in light mode on 24 November 2026 around 23:30 IST, so the Third Shift (22:00–06:00) is the live one.
// The Pages build runs the real NestJS API and a PostgreSQL (PGlite) database inside the browser, seeded with
// sample data relative to the moment of the first visit, so names, counts and dates in the live demo change. The
// capture script signed in only with the login page’s own “Demo accounts” buttons (Company Admin and the Nakhatrana
// site supervisor), which fill in the published demo credentials; nothing was typed. For shot 04 it made the page
// believe it was offline (navigator.onLine overridden), reopened the register from the device copy and pressed
// Check in for the one unmarked guard, which stays queued in that browser. Toasts were hidden with CSS.
const shot = (file) => `/projects/windgaurd/${file}`;

export default {
  product: 'WINDGUARD',
  accent: '#2563EB',
  tagline:
    'The paper attendance register and muster roll, rebuilt for security guards and site staff at wind farms and substations: supervisors mark every shift, the register keeps working without a signal, and nothing is changed without a trace.',
  cover: shot('03-attendance-register.webp'),
  overview: [
    'WINDGUARD is a workforce attendance and site operations platform for contractors who guard wind farms, substations and other remote facilities. Its motto is “Every Shift. Every Worker. Accounted For.” Guards and site staff never sign in: site supervisors open the daily register for their site, date and shift and mark each worker Present, Absent, Leave or Half day, or record check-in and check-out, with a reason for any manual time. A submitted register goes to an administrator to approve and lock, and after that every change is a correction request showing the old and new values. Around the register sit configurable shifts (including overnight ones), a weekly roster with understaffing and overlap checks, supervisor handovers, employee profiles, a gate register for visitors and vehicles, register-format reports, a digital monthly muster roll with certification, workforce analytics, Excel/CSV import and an append-only audit log. It is an installable PWA, and the register can be filled in offline and synced later.',
    'The codebase is an npm-workspaces monorepo. apps/api is a NestJS 11 API with Prisma 7 on PostgreSQL (33 models, 108 endpoints): all attendance rules live in a pure attendance engine, every organisational table carries an organizationId, supervisors are scoped to their assigned sites on every query, and a PostgreSQL trigger rejects any UPDATE or DELETE on the audit log. Background jobs use BullMQ when Redis is configured and run in-process otherwise. Sign-in is by passkey (WebAuthn) or password, with admin-issued recovery codes. apps/web is a Next.js 16 App Router front end with React 19, Tailwind CSS 4, Radix primitives, TanStack Query and Table, Recharts, IndexedDB and a service worker. For GitHub Pages, apps/demo bundles the real controllers, services, engine and seed into a Web Worker backed by PGlite (PostgreSQL in WebAssembly) in IndexedDB: the first visit downloads about 25 MB and builds roughly 76 sample workers with 120 days of history, the data stays in that browser, and the Demo chip resets it. Push notifications and the offline service worker are not part of the demo, and the codebase has no automated tests.',
  ],
  highlights: [
    { value: 4, label: 'User roles (workers get no login)' },
    { value: 25, label: 'Fine-grained permissions' },
    { value: 33, label: 'Prisma data models' },
    { value: 108, label: 'API endpoints' },
  ],
  stack: [
    'Next.js 16 (App Router)',
    'React 19',
    'TypeScript',
    'Tailwind CSS 4',
    'Radix UI',
    'TanStack Query + Table',
    'React Hook Form + Zod 4',
    'Recharts',
    'Motion',
    'IndexedDB (idb) + service worker',
    'NestJS 11',
    'Prisma 7',
    'PostgreSQL',
    'BullMQ (optional Redis)',
    'SimpleWebAuthn passkeys',
    'ExcelJS · PDFKit',
    'Web Push',
    'Luxon',
    'PGlite (browser demo)',
    'esbuild',
  ],
  architecture: [
    { title: 'apps/api/src/modules', text: 'NestJS modules for auth, attendance, shifts and roster, employees, sites, users, reports, imports, dashboard and misc (gate, notifications, settings). A permission guard checks one of 25 permissions per endpoint, and a 10-minute sweep flags missing check-outs, unfilled shifts, unfinished registers and stale handovers.' },
    { title: 'attendance.engine.ts', text: 'The pure calculation engine: working hours minus the break once the half-day threshold is reached, late after start plus grace, overtime past the organisation threshold, half days, and approved leave kept out of the attendance-percentage denominator. Overnight shifts belong to the date they start, in the site’s own timezone.' },
    { title: 'apps/web', text: 'Next.js 16 front end with a permission-aware sidebar, a site switcher and a separate supervisor home. The register keeps a minimal roster (no phone numbers or addresses) in IndexedDB for three days, queues offline actions with a client ID, device time and record version, and posts them to /api/attendance/sync, which reports conflicts instead of overwriting.' },
    { title: 'apps/demo', text: 'The GitHub Pages build: esbuild bundles the real API, engine and seed into a Web Worker with PGlite in IndexedDB, and the same migrations (including the audit-log trigger) create the schema. One tab owns the database at a time; a second tab offers to take it over.' },
  ],

  why: {
    intro:
      'At a wind farm or substation, attendance still means a paper register at the gate and a muster roll copied out at month end. Guards work three rotating shifts, the night shift crosses midnight, the signal comes and goes, and when the contractor’s client or a labour inspector asks who was on duty, someone digs through books and corrects totals by hand. WINDGUARD is the register a site supervisor fills in on a phone or laptop each shift, and the office uses to approve, report and certify the month.',
    points: [
      {
        icon: HowToRegRoundedIcon,
        title: 'Supervisors mark, workers don’t log in',
        text: 'Guards get no accounts at all. The supervisor of each site and shift marks the register, checks people in and out and adds remarks; administrators approve and lock it, and auditors can only read.',
      },
      {
        icon: CloudOffRoundedIcon,
        title: 'Works where the signal doesn’t',
        text: 'An opened register is saved on the device. Without a connection the supervisor keeps marking, entries are queued with the device time, and on reconnect they sync with the real sync time recorded separately.',
      },
      {
        icon: HistoryRoundedIcon,
        title: 'Nothing is changed silently',
        text: 'Duplicate check-ins are refused, manual times need a reason, submitted registers change only through corrections with old and new values, and the audit log is append-only at database level.',
      },
      {
        icon: WindPowerRoundedIcon,
        title: 'How it differs',
        text: 'Most attendance apps assume office staff clocking themselves in on a phone or kiosk, and most guard-tour tools track patrols rather than pay registers. WINDGUARD is built around the contractor’s register: shift-wise marking by a supervisor, offline capture with conflict checks, approval and locking, and a statutory-style muster roll. In this portfolio, LeaveFlow handles who is away and who covers their work, SpaceFlow books desks for office staff who book for themselves, and CrewDesk manages AI agents; WINDGUARD is the only one that records frontline shift attendance, for people who never touch the app.',
      },
    ],
    audience: [
      { title: 'Site supervisors', text: 'Open the current shift’s register, mark every guard, record check-in and check-out, hand over to the next supervisor and request corrections.' },
      { title: 'Security contractors’ admins', text: 'Approve and lock registers, review corrections, manage sites, shifts, rosters, employees and supervisors, and export reports.' },
      { title: 'Register keepers and payroll', text: 'Print or export the monthly muster roll and register-format reports with hours, late arrivals and overtime, then certify the month.' },
      { title: 'Auditors and clients', text: 'Read-only access to registers, reports and an audit trail that shows who recorded or changed each entry and why.' },
    ],
  },

  solves: [
    {
      problem: 'Paper registers are filled in late, lost or rewritten.',
      solution: 'A daily register per site, date and shift, marked by the supervisor on the spot, with the entry mode (live, manual, offline, corrected) shown on each row.',
    },
    {
      problem: 'Remote sites lose signal in the middle of a shift.',
      solution: 'Minimal rosters are stored on the device for three days, offline actions are queued with a client ID and device timestamp, and Background Sync or reconnecting sends them to the server.',
    },
    {
      problem: 'Two people mark the same guard differently.',
      solution: 'A unique index on employee, shift and work date, upserts in transactions, a 409 on duplicate check-ins, and offline entries that report a conflict instead of overwriting a newer server record.',
    },
    {
      problem: 'Night shifts end up on the wrong day.',
      solution: 'The work date is the shift’s start date in the site’s timezone, so a 22:00–06:00 check-out stays on the date the shift began.',
    },
    {
      problem: 'Totals are corrected by hand after the fact.',
      solution: 'Once submitted, a register changes only through a correction request that shows previous and proposed values and needs an administrator’s approval, and every change lands in the audit log.',
    },
    {
      problem: 'Shifts run short without anyone noticing.',
      solution: 'Each shift has a required headcount; the roster flags unassigned positions, understaffed shifts and overlapping assignments, and the dashboard lists open positions and unmarked workers.',
    },
    {
      problem: 'The month-end muster roll takes days to copy out.',
      solution: 'A digital muster roll fills itself from the registers, with configurable abbreviations and totals, and can be printed, exported to PDF or Excel, and certified by the register keeper.',
    },
    {
      problem: 'Approved leave shows up as absence.',
      solution: 'Approved leave records become Leave on the register automatically and are excluded from the attendance percentage by default, which is a configurable rule.',
    },
  ],

  features: [
    { icon: DashboardRoundedIcon, title: 'Overview dashboard', text: 'Today’s attendance percentage and status split, KPIs for present, absent, on leave, on duty, open positions, late check-ins, missing check-outs and not yet marked, a shift board per site, an attention list, trends and a live activity feed.' },
    { icon: PhoneAndroidRoundedIcon, title: 'Supervisor home', text: 'A simpler home for site supervisors: their assigned site, the live shift with scheduled, present, absent and pending counts, one button to open that shift’s register, and what still needs attention.' },
    { icon: HowToRegRoundedIcon, title: 'Daily attendance register', text: 'Pick a site, date and shift; mark P, A, L or H, check in and out, enter manual times with a reason, add remarks, select rows for bulk marking or mark all present, then submit the register.' },
    { icon: FactCheckRoundedIcon, title: 'Approvals and locking', text: 'Submitted registers queue for approval with their summary and history; administrators approve, lock or reopen them, and an all-records view lists every entry across sites.' },
    { icon: CloudOffRoundedIcon, title: 'Offline capture and sync', text: 'Registers open from the device copy without a connection, actions are queued and badged, and the Offline sync page shows what is waiting, saved rosters, server sync history and any conflicts to keep or correct.' },
    { icon: EditNoteRoundedIcon, title: 'Corrections', text: 'Supervisors request changes to submitted entries; admins see each field’s previous and updated value with the reason, then approve or reject.' },
    { icon: CalendarMonthRoundedIcon, title: 'Shifts and weekly roster', text: 'Shifts with break, grace, required workers, supervisor, colour and active days on a 24-hour timeline, and a weekly roster with copy previous day, duplicate week, generate from defaults and understaffing and overlap checks.' },
    { icon: SwapHorizRoundedIcon, title: 'Shift handovers', text: 'The outgoing supervisor records who was present and missing (taken from the register), pending issues and remarks, and the incoming supervisor confirms.' },
    { icon: BadgeRoundedIcon, title: 'Employee directory and profiles', text: 'A searchable, sortable directory by status, site, designation, shift and type with column choice and bulk actions; profiles show a 13-week attendance heatmap, 90-day figures, site history and leave records.' },
    { icon: AccountTreeRoundedIcon, title: 'Sites and projects', text: 'Company → project → site → deployment points, each site with its own timezone, shifts and supervisors, a site dashboard with 30-day trends and a cross-site comparison.' },
    { icon: SupervisorAccountRoundedIcon, title: 'Supervisor management', text: 'Application users with roles, site assignments, extra grants (roster management, historical edits), recovery codes and session revocation.' },
    { icon: DoorFrontRoundedIcon, title: 'Gate register', text: 'Visitors and vehicles in and out of the site gate, with visitor type, company, purpose, person to meet and vehicle number, kept separate from employee attendance.' },
    { icon: AssessmentRoundedIcon, title: 'Attendance reports', text: 'Daily, weekly, monthly, quarterly, yearly or custom reports filtered by project, site, employee, designation, supervisor, shift or status, exported to Excel, PDF or CSV with an official header and signature lines.' },
    { icon: MenuBookRoundedIcon, title: 'Digital muster roll', text: 'The monthly Form of Register of Attendance as a date matrix with configurable abbreviations and totals, certified by the register keeper and printed or exported to PDF or Excel.' },
    { icon: InsightsRoundedIcon, title: 'Workforce analytics', text: 'Attendance by site, absences by weekday, punctuality trend, late arrivals by shift, the most-absent employees and how attendance was captured.' },
    { icon: UploadFileRoundedIcon, title: 'Import and export', text: 'A validated Excel/CSV employee import (template, upload, column mapping, validation, import, summary with error report) and one-click exports, each one audited.' },
    { icon: NotificationsActiveRoundedIcon, title: 'Notifications', text: 'In-app alerts for unfinished registers, missing check-outs, unfilled shifts, approvals, corrections, sync results and handovers, plus optional Web Push per device.' },
    { icon: FingerprintRoundedIcon, title: 'Passkeys and roles', text: 'WebAuthn passkey sign-in with password fallback, four roles (Super Admin, Company Admin, Supervisor, Viewer), multi-organisation tenancy and site-scoped supervisors.' },
  ],

  steps: [
    { icon: LoginRoundedIcon, title: 'Open the live demo', text: 'Visit the GitHub Pages demo and wait about 15 seconds the first time while the database is built in your browser. Open “Demo accounts (sample data)” on the sign-in page and pick an account to fill the form.' },
    { icon: DashboardRoundedIcon, title: 'Read today as an admin', text: 'Sign in as the Company Admin: the overview shows today’s attendance, the shift board for the three sites, open positions and what needs attention.' },
    { icon: PhoneAndroidRoundedIcon, title: 'Switch to a supervisor', text: 'Sign out and sign in as the Nakhatrana supervisor. The home page shows the live shift and an Open register button.' },
    { icon: HowToRegRoundedIcon, title: 'Mark the register', text: 'Mark a guard P, A, L or H, press Check in or Check out, or use the row menu to enter a manual time with a reason. Submit the register when every row is marked.' },
    { icon: CloudOffRoundedIcon, title: 'Look at offline sync', text: 'Attendance → Offline sync shows saved rosters and the queue. On an installed production build you can turn off the network, keep marking and watch the entries sync when it returns.' },
    { icon: FactCheckRoundedIcon, title: 'Approve and correct', text: 'Back as the admin, approve submitted registers under Attendance → Approvals and review correction requests with their previous and proposed values.' },
    { icon: NightsStayRoundedIcon, title: 'Plan shifts and hand over', text: 'In Shift Management, check the weekly roster for understaffed shifts and read the supervisor handovers between shifts.' },
    { icon: TerminalRoundedIcon, title: 'Run it locally', text: 'With Node 20+, run npm install, npm run db:local, npm run db:migrate and npm run db:seed, then npm run dev for the API on port 4000 and the web app on port 3100. Use the Demo chip in the live demo to reset its data.' },
  ],
  shortcuts: [],

  screenshots: [
    {
      src: shot('01-overview.webp'),
      icon: DashboardRoundedIcon,
      title: 'Overview dashboard',
      text: 'The Company Admin’s view at 23:29 IST: 94.6% of scheduled workers accounted for, 53 present including 16 on the running night shift, 1 open position and 2 not yet marked, the shift board for Jaisalmer and Muppandal, and an attention list with 10 registers awaiting approval and 2 correction requests.',
    },
    {
      src: shot('02-supervisor-home.webp'),
      icon: PhoneAndroidRoundedIcon,
      title: 'Supervisor home',
      text: 'Harish, the Nakhatrana Wind Farm supervisor, sees only his site: the live Third Shift (22:00–06:00), the day’s scheduled, present, absent and pending counts, a large Open S3 register button and the one guard still to be marked.',
    },
    {
      src: shot('03-attendance-register.webp'),
      icon: HowToRegRoundedIcon,
      title: 'Daily attendance register',
      text: 'The Third Shift register, marked “available offline on this device”. Six guards are On Duty with their check-in times and a Check out button; Ajay Chavda at the 66/220 kV pooling substation hasn’t been checked in yet, so his row still offers Check in and all four status buttons.',
    },
    {
      src: shot('04-offline-register.webp'),
      icon: CloudOffRoundedIcon,
      title: 'Marking without a connection',
      text: 'The same register with the network gone: it opens from the roster saved on the device, the top bar reads Offline · 1 queued, Submit is hidden, and Ajay’s check-in is badged Queued until it can be synced and checked against the server.',
    },
    {
      src: shot('05-shift-roster.webp'),
      icon: CalendarMonthRoundedIcon,
      title: 'Weekly roster',
      text: 'Jaisalmer Wind Park for 23–29 November: each shift’s required headcount against who is assigned each day, checks for unassigned positions, understaffed shifts and overlapping assignments, and buttons to generate the week or duplicate it to the next.',
    },
    {
      src: shot('06-corrections.webp'),
      icon: EditNoteRoundedIcon,
      title: 'Correction requests',
      text: 'Two pending corrections from the Muppandal supervisor: Present changed to Half Day, and a later check-out with a remark about a turbine crane escort. Each shows the previous and updated value and the reason, waiting for an admin to approve or reject.',
    },
    {
      src: shot('07-muster-roll.webp'),
      icon: MenuBookRoundedIcon,
      title: 'Digital muster roll',
      text: 'The November Form of Register of Attendance for Jaisalmer Wind Park: one row per guard with designation and deployment point, a day-by-day matrix of P, A, H and IC codes, and Print, PDF, Excel and Certify actions.',
    },
    {
      src: shot('08-reports.webp'),
      icon: AssessmentRoundedIcon,
      title: 'Monthly attendance report',
      text: 'A register-format report for all sites in November: 96.3% attendance, 1,415 working days, 10,760 hours worked, 44 absences, 14 leave days and 234 late arrivals, above an employee-wise summary with overtime and attendance percentage, ready for CSV, PDF or Excel.',
    },
    {
      src: shot('09-employee-profile.webp'),
      icon: BadgeRoundedIcon,
      title: 'Employee profile',
      text: 'Kishore Solanki, Head Guard at the Nakhatrana store yard: 100% attendance over 90 days with 16 late arrivals, a 13-week heatmap, recent entries with lateness and supervisor remarks, and buttons for a 90-day report, recording leave and editing.',
    },
    {
      src: shot('10-gate-register.webp'),
      icon: DoorFrontRoundedIcon,
      title: 'Gate register',
      text: 'Visitors and vehicles at the site gates on 24 November (20 entries, 15 vehicles, 429 this month): couriers, transmission-utility inspectors and turbine OEM engineers with purpose, person to meet, vehicle number and in and out times.',
    },
  ],
};
