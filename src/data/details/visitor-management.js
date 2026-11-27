import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ForwardToInboxRoundedIcon from '@mui/icons-material/ForwardToInboxRounded';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded';
import TabletAndroidRoundedIcon from '@mui/icons-material/TabletAndroidRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import DomainRoundedIcon from '@mui/icons-material/DomainRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import PrivacyTipRoundedIcon from '@mui/icons-material/PrivacyTipRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import InstallMobileRoundedIcon from '@mui/icons-material/InstallMobileRounded';
import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded';
import SwitchAccountRoundedIcon from '@mui/icons-material/SwitchAccountRounded';

// Case study for https://github.com/raiden-56/visitor-management (GateFlow – visitor management system, “Smarter
// visitor experiences. Safer workplaces.”). The live GitHub Pages site https://raiden-56.github.io/visitor-management/
// is built from the guest-mode branch (not merged into main), so this page describes that branch. That build has no
// API: the single “Continue as guest” button on the login page opens every screen on sample data generated in the
// browser and kept in sessionStorage for the tab. Screenshots were captured headless at 1440×770 with puppeteer-core,
// signing in only with that guest button (no password, no account). The sample data is generated relative to the
// moment of the visit, so the browser clock was shifted to 27 Nov 2026 11:20 IST with a Date shim to show a working
// morning; names, counts and times in the live demo change with the day and hour you visit. Shot 03 typed a made-up
// visitor into the invitation form (nothing was sent), shot 05 selected a visitor at the desk, and shot 07 opened
// the public kiosk page /visit/NWT/PNQ-HQ?kiosk=1 in the same guest tab. Nothing was submitted and no CSS was hidden.
const shot = (file) => `/projects/visitor-management/${file}`;

export default {
  product: 'GateFlow',
  accent: '#246B45',
  tagline:
    'The front desk’s visitor book, rebuilt: hosts invite guests ahead with a QR pass, walk-ins register themselves at a lobby kiosk, nobody gets in before the host approves, and every arrival, departure and decision is logged per organization.',
  cover: shot('06-visitor-pass.webp'),
  overview: [
    'GateFlow is an installable web app (PWA) for registering, approving, admitting and auditing visitors across many organizations on one platform. Employees invite expected guests, who receive a QR visitor pass by email, SMS, WhatsApp or a copied link; reception registers walk-ins in a guided five-step or quick form, with a returning-visitor lookup, a camera photo and a consent step; and strangers can register themselves by scanning a lobby QR poster or using an entrance kiosk tablet. Each organization chooses its approval policy (always, never, or by rules such as auto-approving delivery staff or visits a host registers personally), and a pass is never shown as valid before approval. At the Reception Desk staff search or scan a pass, check visitors in and out, extend a visit, mark no-shows, report incidents or force a check-out. Admins also get users, departments, 14 exportable reports, an activity log and nine settings sections, while a Super Admin runs the platform: organizations, facilities, global users, a role and permission matrix, subscription plans, analytics, audit logs, system health and platform settings.',
    'What sets it apart is that the person being tracked is an outsider. Typical visitor apps are a sign-in iPad that prints a sticker; GateFlow ties every visit to a named host and an approval policy, gives the visitor a pass that changes state (provisional, ready, on site, used, void) instead of a static badge, and lets one installation serve several tenants with their own facilities, plans and settings. In this portfolio, WINDGUARD records shift attendance of a contractor’s own guards (with a simple gate register on the side), SpaceFlow lets employees book desks and check in to their own bookings, and LeaveFlow routes internal leave requests to a manager; GateFlow is the one built around people who have no account at all, from invitation or self-registration through host approval, the desk and the audit trail. The full app is a React 19 + MUI 7 client on Redux Toolkit and an Express 5 + Prisma API on PostgreSQL (25 models, tenant-scoped queries, rotating refresh tokens, race-safe check-in). The hosted preview has no server: the guest session runs every action against sample data in the browser, and email, SMS, uploads and server metrics need the backend.',
  ],
  highlights: [
    { value: 9, label: 'Visit statuses' },
    { value: 14, label: 'Report types' },
    { value: 41, label: 'Permissions in the role matrix' },
    { value: 25, label: 'Prisma data models' },
  ],
  stack: [
    'React 19',
    'TypeScript',
    'Vite 6',
    'Material UI 7',
    'Redux Toolkit',
    'React Router 7',
    'React Hook Form + Zod',
    'TanStack Table',
    'Recharts',
    'Framer Motion',
    'React Three Fiber',
    'jsQR + BarcodeDetector',
    'jsPDF · html-to-image',
    'vite-plugin-pwa',
    'Express 5',
    'Prisma 6',
    'PostgreSQL',
    'JWT + refresh rotation',
    'Vitest + Playwright',
    'Docker Compose',
  ],
  architecture: [
    { title: 'client/src/features', text: 'One folder per area: visitors, invitations, approvals, check-in desk, visitor pass, self-service kiosk, reports, settings, audit and the super-admin console. Every page is lazy-loaded, and charts, jsPDF, html-to-image, jsQR and three.js load only when needed.' },
    { title: 'client/src/services/actions.ts', text: 'One action layer with two backends. In guest mode each mutation updates an isolated session store and writes its own audit entry and notification; in live mode it calls the REST API and stores only what the server returns. Network calls are refused while the demo is active.' },
    { title: 'server/src/modules', text: 'Express 5 routers for auth, users, visitors, visits, approvals, check-in and incidents, public passes and self-registration, reports, organizations, facilities, settings, notifications, audit logs and health, each behind requirePermission and tenant middleware.' },
    { title: 'server/prisma + jobs', text: 'A 25-model PostgreSQL schema (organizations, facilities, visits, visit events, passes, approvals, incidents, roles, subscriptions, settings, tokens) and scheduled jobs that expire stale visits, auto check-out at day end and purge visitor data after each organization’s retention window.' },
  ],

  why: {
    intro:
      'Most offices, plants and warehouses still meet visitors with a paper register or a guard asking who they are here to see, then phoning around for a yes. Nobody knows who is still inside at the end of the day, and nothing is left to show who let a visitor in. GateFlow is what the reception desk, the hosts who expect guests and the security team use every day to get each visitor approved, admitted, signed out and on record.',
    points: [
      {
        icon: ForwardToInboxRoundedIcon,
        title: 'Hosts invite, guests skip the queue',
        text: 'An employee picks a returning visitor or enters a new one, sets the time and purpose, and sends a QR pass through their own email, SMS or WhatsApp app. At the gate, reception scans it and the host is told the visitor has arrived.',
      },
      {
        icon: FactCheckRoundedIcon,
        title: 'No entry before the host says yes',
        text: 'Organizations decide which visits need approval: all, none, or by rules per visitor type. Pending passes are blurred and marked provisional, requests past the escalation window are highlighted, and every decision is kept in the history.',
      },
      {
        icon: MeetingRoomRoundedIcon,
        title: 'A desk that knows who is inside',
        text: 'Reception sees who is still expected today, who is on site and for how long, and who has left. Check-in and check-out are single actions, and the server refuses a second check-in of the same visitor by another receptionist.',
      },
      {
        icon: DomainRoundedIcon,
        title: 'One platform, many organizations',
        text: 'Each tenant has its own facilities, departments, users, roles, policies and plan, and every query is scoped to it. A Super Admin manages organizations, subscriptions and the permission matrix, and can see platform-wide analytics, audit logs and system health.',
      },
    ],
    audience: [
      { title: 'Receptionists and security guards', text: 'Run the Reception Desk: scan passes, register walk-ins, check visitors in and out, extend visits, mark no-shows and report incidents.' },
      { title: 'Employees who host visitors', text: 'Invite guests in advance, approve or reject requests for their own visitors, and get notified when someone arrives.' },
      { title: 'Facility and office admins', text: 'Set visitor, approval, check-in, self-registration and privacy policies, manage users and departments, and pull reports and activity logs.' },
      { title: 'Platform operators', text: 'Onboard organizations and facilities, assign plans, edit roles and permissions, and watch analytics, audit logs and system health across all tenants.' },
    ],
  },

  solves: [
    {
      problem: 'A paper visitor book at the entrance is slow, illegible and open for anyone to read.',
      solution: 'An entrance kiosk with three choices (I’m a new visitor, I have an invitation or pass, I’m leaving). It clears an abandoned form after two minutes and resets after each visitor.',
    },
    {
      problem: 'Walk-ins wait at the gate while the guard phones around for their host.',
      solution: 'Visitors find their host by name in a rate-limited search (two letters, at most five results), take a selfie and accept the privacy notice. The host approves from the queue and the provisional pass turns live on the visitor’s phone.',
    },
    {
      problem: 'Some visits need a decision and others don’t, and policies differ per company.',
      solution: 'Per-organization approval rules: always, never, or auto-approve chosen visitor types and host-registered visits. Admins can approve on behalf of hosts, and an escalation window highlights old requests.',
    },
    {
      problem: 'A printed badge looks valid whether or not the visit was approved.',
      solution: 'The pass changes with the visit: provisional and blurred while pending, ready for check-in, on site, stamped USED after check-out and VOID if rejected. It can be downloaded as an image, printed or shared.',
    },
    {
      problem: 'At the end of the day nobody knows who is still in the building.',
      solution: 'Live “On site now” and “Currently inside” lists with time on site, a currently-checked-in report, and a scheduled end-of-day auto check-out on the server.',
    },
    {
      problem: 'Two receptionists can process the same visitor at once.',
      solution: 'Status changes use a conditional update on the current status, so only one check-in or check-out succeeds and the other is refused.',
    },
    {
      problem: 'Visitor logs hold more personal data than anyone needs, for longer than needed.',
      solution: 'Only the last four characters of an ID number are kept, QR codes carry an opaque token instead of personal data, photos are served through short-lived signed links, and a retention job purges old visitor records.',
    },
    {
      problem: 'After an incident it is unclear who registered, approved or admitted a visitor.',
      solution: 'An activity log that cannot be edited or deleted from the app records each action with user, entity and IP address, alongside incident reports and 14 exportable reports.',
    },
  ],

  features: [
    { icon: DashboardRoundedIcon, title: 'Overview dashboard', text: 'Visitors today, currently inside, expected today and pending approval, a 14 or 30-day trend of scheduled versus attended visits, average duration, rejected visits, peak arrival hour and frequent visitors.' },
    { icon: PersonAddAlt1RoundedIcon, title: 'Visitor registration', text: 'A guided five-step form (personal information, visitor details, visit information, photograph, review) or a quick mode, with returning-visitor lookup, saved drafts, group size, ID document type and consent.' },
    { icon: ForwardToInboxRoundedIcon, title: 'Invitations', text: 'Pre-register a visitor with a live invitation preview and QR code, then send it through the device’s email, SMS or WhatsApp app or copy the link.' },
    { icon: FactCheckRoundedIcon, title: 'Approval queue', text: 'Waiting requests with visitor type, time, host, purpose and notes, Approve, Reject or Request info, Approve all, a “Hosted by me” filter, escalation highlighting and a decision history.' },
    { icon: MeetingRoomRoundedIcon, title: 'Reception Desk', text: 'Search by name, phone, pass number or visitor ID, arrivals and on-site lists, check in and out, add a photo, print the pass, extend by an hour, report an incident, force check-out or mark a no-show.' },
    { icon: QrCodeScannerRoundedIcon, title: 'QR scanning', text: 'Scan the pass with the camera using the browser’s BarcodeDetector, with jsQR as a fallback, and a clear message when a pass is not recognised.' },
    { icon: ConfirmationNumberRoundedIcon, title: 'Animated visitor pass', text: 'A ticket-style pass with a receipt-printing reveal, eight visual states, a QR scan line, and PNG download, print-only layout and Web Share.' },
    { icon: TabletAndroidRoundedIcon, title: 'Self-registration and kiosk', text: 'A lobby QR poster or a locked-down kiosk tablet for walk-ins, self check-in and self sign-out, with an optional visitor-book mode that admits walk-ins at once and notifies the host.' },
    { icon: HistoryRoundedIcon, title: 'Visitor directory and history', text: 'Every visit and every visitor in tables with search, column filters, sorting, column visibility, bulk actions and CSV, Excel or PDF export, plus visitor profiles with their visit history.' },
    { icon: AssessmentRoundedIcon, title: 'Reports & Analytics', text: 'Insights with trends, peak hours and visitor types, and a report builder with 14 reports, from daily visitors and host-wise counts to no-shows, rejected visits and security incidents.' },
    { icon: TuneRoundedIcon, title: 'Organization settings', text: 'Nine sections: organization, facility, visitor policy, approval rules, check-in rules, self-registration, notifications, security and privacy, and branding and pass.' },
    { icon: AdminPanelSettingsRoundedIcon, title: 'Roles & Permissions', text: 'Built-in User, Admin and Super Admin roles plus custom ones such as Reception, edited in a matrix of 14 modules and 41 permissions; Super Admin can never lose role management.' },
    { icon: DomainRoundedIcon, title: 'Platform console', text: 'Organizations, facilities, all users, subscriptions on four plans with list-price recurring revenue, cross-tenant analytics, audit logs, system health and platform settings.' },
    { icon: NotificationsActiveRoundedIcon, title: 'Notifications', text: 'A bell with unread count, a notification panel and page, and per-user preferences; hosts are notified when their visitors arrive.' },
    { icon: PrivacyTipRoundedIcon, title: 'Privacy by design', text: 'Last-four ID digits only, opaque QR tokens, signed photo URLs, a public pass without contact details, erasure on delete and a retention purge.' },
    { icon: GppGoodRoundedIcon, title: 'Security', text: '15-minute access tokens in memory, rotating refresh cookies that revoke the whole family on reuse, lockout after failed attempts, tenant checks on every record and permission checks on every route.' },
    { icon: InstallMobileRoundedIcon, title: 'Installable PWA', text: 'Manifest, service worker, offline page, install banner and update prompt, light and dark themes, a Ctrl/⌘ K search and bottom navigation on phones. Check-in and check-out are blocked offline on purpose.' },
  ],

  steps: [
    { icon: LoginRoundedIcon, title: 'Continue as guest', text: 'Open the live preview and press Continue as guest. Every screen opens on sample data for Northwind Technologies; changes stay in that browser tab and nothing is sent anywhere.' },
    { icon: DashboardRoundedIcon, title: 'Read the overview', text: 'Pune HQ’s dashboard shows visitors today, who is inside, who is still expected and how many requests are waiting.' },
    { icon: ForwardToInboxRoundedIcon, title: 'Invite a visitor', text: 'Go to Invitations → Invite visitor, enter a guest, time and host, and watch the invitation preview and QR code fill in.' },
    { icon: FactCheckRoundedIcon, title: 'Decide on requests', text: 'Open the Approval Queue, approve or reject a waiting request, and see it move to Decision history.' },
    { icon: MeetingRoomRoundedIcon, title: 'Work the desk', text: 'In Check-In / Out, pick an arrival to check in or an on-site visitor to check out, extend or report an incident.' },
    { icon: TabletAndroidRoundedIcon, title: 'Try the kiosk', text: 'From the Reception Desk, press Self-registration QR to see the lobby poster and set up the entrance kiosk that walk-ins use.' },
    { icon: AssessmentRoundedIcon, title: 'Pull a report', text: 'In Reports → Report builder, pick one of the 14 reports, filter by dates, department, facility, type or status, and export it.' },
    { icon: SwitchAccountRoundedIcon, title: 'Switch the view', text: 'Use the Platform section for the Super Admin console, or the Viewing as menu in the lime banner to see exactly what a User or Admin sees. Demo → Reset starts over.' },
  ],
  shortcuts: [
    { keys: ['Ctrl / ⌘', 'K'], action: 'Open or close the global search' },
    { keys: ['↑', '↓'], action: 'Move through search results' },
    { keys: ['Enter'], action: 'Open the selected search result' },
    { keys: ['Enter'], action: 'Open the focused row in a data table' },
  ],

  screenshots: [
    {
      src: shot('01-guest-entry.webp'),
      icon: LoginRoundedIcon,
      title: 'Guest entry',
      text: 'The hosted preview has no server, so account sign-in is switched off and a single Continue as guest button opens every screen. On wide screens the brand panel renders a 3D gate emblem with floating passes.',
    },
    {
      src: shot('02-overview.webp'),
      icon: DashboardRoundedIcon,
      title: 'Overview',
      text: 'Pune HQ at 11:20 on a Friday: 13 visitors today, 7 currently inside (the longest for 3h 10m), 11 still expected and 9 requests waiting, above the scheduled-versus-attended trend and frequent visitors.',
    },
    {
      src: shot('03-invite-visitor.webp'),
      icon: ForwardToInboxRoundedIcon,
      title: 'Invite a visitor',
      text: 'A host pre-registers a guest for tomorrow at 11:00. The invitation preview fills in the address, time and QR code as you type, ready to send through email, SMS, WhatsApp or a copied link.',
    },
    {
      src: shot('04-approval-queue.webp'),
      icon: FactCheckRoundedIcon,
      title: 'Approval Queue',
      text: 'Nine visit requests waiting for a decision. Each shows the visitor type, time, host, purpose, phone and notes, and requests older than the escalation window carry an amber “Waiting” badge.',
    },
    {
      src: shot('05-reception-desk.webp'),
      icon: MeetingRoomRoundedIcon,
      title: 'Reception Desk',
      text: 'Seven visitors on site. Selecting one shows the host, department, schedule and pass number, with Check out, Print pass, Extend 1h, Report incident and Force check-out.',
    },
    {
      src: shot('06-visitor-pass.webp'),
      icon: ConfirmationNumberRoundedIcon,
      title: 'Visitor pass',
      text: 'An approved visit for this afternoon shows as Ready for check-in: visitor, time window, host, department, facility, pass number and the QR code reception scans at the gate, with download, print and share.',
    },
    {
      src: shot('07-entrance-kiosk.webp'),
      icon: TabletAndroidRoundedIcon,
      title: 'Entrance kiosk',
      text: 'The tablet at Pune HQ’s entrance that replaces the paper visitor book: register as a new visitor, check in with an invitation or pass, or sign out when leaving. New visitors still need their host’s approval.',
    },
    {
      src: shot('08-approval-rules.webp'),
      icon: TuneRoundedIcon,
      title: 'Approval rules',
      text: 'Northwind approves by rules: delivery personnel and employee guests are cleared without a host decision, visits a host registers are pre-approved, admins can approve for hosts, and requests waiting over 120 minutes are highlighted.',
    },
    {
      src: shot('09-report-builder.webp'),
      icon: AssessmentRoundedIcon,
      title: 'Report builder',
      text: 'The host-wise report for the last 30 days: visits, attended, no-shows and average duration per host, one of 14 reports that can be filtered by department, facility, type and status and exported.',
    },
    {
      src: shot('10-platform-overview.webp'),
      icon: DomainRoundedIcon,
      title: 'Platform console',
      text: 'The Super Admin view across tenants: 4 organizations, 6 facilities, 16 users and 449 visitors in 30 days, registrations for all tenants, and active subscriptions on the Free, Basic, Professional and Enterprise plans.',
    },
  ],
};
