import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded';
import TableViewRoundedIcon from '@mui/icons-material/TableViewRounded';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded';

// Case study for https://github.com/raiden-56/leaveflow (LeaveFlow – Employee Leave & Work Handover Management
// Portal). Screenshots are from the GitHub Pages demo at https://raiden-56.github.io/leaveflow/ — a static build
// that runs the real API (same routes, services, validation and Excel repositories) inside the browser, with the
// workbook kept in localStorage. They were captured headless at 1440×770 in a fresh browser profile, signing in
// only with the login page’s one-click demo accounts (Priya Sharma – Employee, Rohan Mehta – Manager, Ananya Iyer –
// HR Admin). As Priya, the capture script filled in and submitted one Annual Leave request with a handover to
// Meera Pillai and three tasks (LV0041), so it shows up in the manager’s approvals and the reports.
const shot = (file) => `/projects/leaveflow/${file}`;

export default {
  product: 'LeaveFlow',
  accent: '#4f46e5',
  tagline:
    'A leave and work-handover portal: every leave request names a backup colleague and hands over the work, so managers approve with the cover in view and nothing is dropped while someone is away.',
  cover: shot('03-work-handover.webp'),
  overview: [
    'LeaveFlow is a full-stack leave management portal built around one rule: every leave request names a backup colleague and hands over the work. Employees apply in a four-step wizard (leave details with a live preview of working days, holidays and balance; the backup; the handover tasks; review), and the backup is asked to accept or decline. Managers see each request with its handover and risk warnings (overlapping team leave, a backup who is away or hasn’t accepted, critical tasks without an owner) before they approve, reject or ask for changes. HR admins manage employees, leave types and policies, balances and the year-end carry-forward, holidays, organisation settings and the data store. The app has 16 pages behind login, with a separate menu for each of the three roles, a dark mode and a mobile layout with bottom navigation.',
    'The first version stores all data in an Excel workbook with 13 sheets. ExcelJS is wrapped in a store with a write lock, automatic backups and atomic saves, and it reloads the file when someone edits it in Excel. The workbook sits behind repository interfaces, so it can be swapped for PostgreSQL later without touching the UI. The API is an Express 5 + TypeScript server with 78 routes and JWT sign-in in an httpOnly cookie. Validation (Zod) and the business rules (working days, balance maths, state machines) live in a shared package used by both client and server, and are covered by 46 Vitest tests. The GitHub Pages copy runs that same API inside the browser: the workbook lives in the visitor’s localStorage (HR can download it as a real .xlsx), and sign-in is demo-persona only. Demo authentication is for evaluation; the README asks for a real credential provider or SSO before production, and email notifications are still a console placeholder.',
  ],
  highlights: [
    { value: 3, label: 'Roles with their own menus' },
    { value: 11, label: 'Leave types out of the box' },
    { value: 13, label: 'Excel workbook sheets' },
    { value: 78, label: 'REST API routes' },
  ],
  stack: [
    'React 19',
    'TypeScript',
    'Vite 7',
    'Material UI 7',
    'MUI X Date Pickers',
    'Redux Toolkit (RTK Query)',
    'React Router 7',
    'React Hook Form',
    'Zod',
    'Framer Motion',
    'Recharts',
    'FullCalendar',
    'Express 5',
    'ExcelJS',
    'JWT (httpOnly cookie)',
    'Vitest + Supertest',
  ],
  architecture: [
    { title: 'client', text: 'React SPA with role-guarded routes and a menu per role. Pages use RTK Query hooks, and only the repository layer knows URLs, so the backend can be swapped. Forms use React Hook Form with the shared Zod schemas.' },
    { title: 'shared (@leaveflow/shared)', text: 'Domain types, Zod schemas and pure rules used by both sides: working-day calculation with weekends and holidays, balance maths, carry-forward caps, and the leave and handover state machines. Unit-tested.' },
    { title: 'server', text: 'Express 5 routes declared as one table → auth and RBAC middleware → controllers → services (validation, workflow, notifications, audit) → repository interfaces backed by a schema-driven Excel WorkbookStore with a mutex, backups and atomic writes.' },
    { title: 'client/src/services/local', text: 'The GitHub Pages build mounts the same route table, services and Excel repositories in the browser, with a localStorage-backed store and demo-persona auth, so the static demo behaves like the real API.' },
  ],

  why: {
    intro:
      'In many teams, leave is approved in one place and the work is handed over somewhere else, or not at all. The manager says yes without knowing who is covering, the colleague finds out on Monday, and tasks fall through the cracks. LeaveFlow makes the handover part of the request, so approving leave and arranging cover happen together.',
    points: [
      {
        icon: HandshakeRoundedIcon,
        title: 'Cover is part of the request',
        text: 'A request can’t be sent without a backup and a handover. The backup must be active, can’t be the applicant and can’t be on approved leave during the period, and the handover must cover the whole leave.',
      },
      {
        icon: WarningAmberRoundedIcon,
        title: 'Approve with the risks in view',
        text: 'Before deciding, the approver sees overlapping team leave, a backup who is away, overloaded or hasn’t accepted, a declined handover and critical tasks with no owner.',
      },
      {
        icon: CalculateRoundedIcon,
        title: 'Days and balances worked out for you',
        text: 'The live preview counts working days without weekends and public or company holidays, handles half days, and checks notice, backdating, maximum length, overlap, attachments and the balance left.',
      },
      {
        icon: TableViewRoundedIcon,
        title: 'Starts with a file you already know',
        text: 'All data sits in an Excel workbook that HR can open, edit and back up, behind a repository layer that can move to PostgreSQL later without changing the app.',
      },
    ],
    audience: [
      { title: 'Employees', text: 'Apply for leave and hand over work in one flow, track requests and balances, and cover colleagues’ handovers.' },
      { title: 'Backup colleagues', text: 'Accept or decline a handover, work through its tasks, and add progress comments while the owner is away.' },
      { title: 'Managers', text: 'Approve with the handover and risk flags in view, and see team availability, calendars, tasks and reports.' },
      { title: 'HR & small organisations', text: 'Set up leave types, balances, holidays and approval rules, with the data in an Excel file they control.' },
    ],
  },

  solves: [
    {
      problem: 'Leave gets approved but nobody knows who is covering the work.',
      solution: 'A work handover with a named backup is mandatory for every request (a setting HR can change), and the backup is asked to accept it.',
    },
    {
      problem: 'Work is handed over in a hallway chat and details are lost.',
      solution: 'A handover has a title, description, period, priority and instructions, plus tasks with their own assignee, due date, priority, links, expected outcome and notes.',
    },
    {
      problem: 'The chosen backup is away or already covering too much.',
      solution: 'The backup picker shows each colleague’s availability for the dates and how many handovers and open tasks they hold, and flags anyone over the overload threshold.',
    },
    {
      problem: 'Managers approve without seeing the impact on the team.',
      solution: 'The approval drawer lists overlapping team leave with the share of the team away, handover status, and warnings about the backup, before Approve, Reject or Request changes.',
    },
    {
      problem: 'Counting leave days by hand gets weekends, holidays and half days wrong.',
      solution: 'A server-side preview counts working days using the organisation’s working week and holiday list, shows a calendar and the balance after the request, and blocks rule breaks.',
    },
    {
      problem: 'Balances drift and nobody can explain why.',
      solution: 'Every movement (apply, approve, reject, cancel, HR adjustment, comp-off, year-end carry-forward) is written to a transaction ledger that HR can view.',
    },
    {
      problem: 'Handovers stay open long after the person is back.',
      solution: 'A lifecycle job, run at start-up, every 30 minutes and on demand, reminds people the day before leave, auto-completes handovers on return and flags overdue tasks.',
    },
    {
      problem: 'A small team doesn’t want a database just to track leave.',
      solution: 'Everything is stored in one Excel workbook, with backups and atomic saves, and it can be opened and edited in Excel. In the live demo, HR can download it as .xlsx.',
    },
  ],

  features: [
    { icon: DashboardRoundedIcon, title: 'Dashboards per role', text: 'Employees see balances, upcoming leave, a handover overview and team availability. Managers see team KPIs and pending approvals. HR sees organisation analytics and a leave-type mix.' },
    { icon: EventAvailableRoundedIcon, title: 'Four-step apply wizard', text: 'Leave details, work handover, handover tasks, then review and submit. Half days, an emergency contact, contact during leave and an optional attachment are supported.' },
    { icon: CalculateRoundedIcon, title: 'Live leave preview', text: 'Working days, holidays left out, balance after the request and a calendar preview update as you pick dates, with errors for overlap, notice, backdating and length limits.' },
    { icon: HandshakeRoundedIcon, title: 'Backup picker', text: 'Search colleagues by name, role or department, grouped by department, with availability for the period, current handovers and open tasks, and a Busy warning.' },
    { icon: ChecklistRoundedIcon, title: 'Handover tasks', text: 'Add, edit, duplicate and remove tasks, each with priority, due date, assignee (your backup by default), reference links, expected outcome and notes.' },
    { icon: HowToRegRoundedIcon, title: 'Accept, work and complete', text: 'Backups accept, or decline with a reason; they update task status, add progress comments and mark the handover complete. A declined handover goes back for a new backup.' },
    { icon: FactCheckRoundedIcon, title: 'Leave approvals', text: 'Pending requests with handover status and risk flags; approve, reject, request changes or open the details drawer with the server’s insights and the approval timeline.' },
    { icon: GroupsRoundedIcon, title: 'Team availability & calendar', text: 'Who is in, away or working remotely on any date, who is overloaded, plus a month, week, day and list calendar with department, leave-type and employee filters.' },
    { icon: InsightsRoundedIcon, title: 'Reports', text: 'Eight report tabs (monthly, annual, employee-wise, department-wise, leave types, pending approvals, work handovers, handover completion), with CSV and an Excel export.' },
    { icon: PolicyRoundedIcon, title: 'Leave policies', text: 'Create and edit leave types: allocation, carry-forward cap, maximum consecutive days, notice, backdating, half days, paid or unpaid, attachment rules and weekend/holiday exclusion. Departments too.' },
    { icon: AccountBalanceWalletRoundedIcon, title: 'Balances & ledger', text: 'HR can adjust balances, credit comp-offs, view each employee’s transaction ledger, export, and run the year-end rollover with capped carry-forward.' },
    { icon: CelebrationRoundedIcon, title: 'Holidays', text: 'Public, optional and company holidays in a list or annual calendar, with Excel import. Optional holidays still count as leave days; the others don’t.' },
    { icon: PeopleAltRoundedIcon, title: 'Employees', text: 'Add, edit and deactivate employees, assign manager and role, and import or export the list as Excel or CSV.' },
    { icon: NotificationsActiveRoundedIcon, title: 'Notifications & settings', text: 'A notification centre with unread badges, organisation settings (working days, timezone, approval rules, overload and overlap thresholds) and workbook tools with backups and an audit log.' },
  ],

  steps: [
    { icon: LoginRoundedIcon, title: 'Pick a demo account', text: 'Open the live demo and press one of the demo accounts on the login page (Priya – Employee, Rohan – Manager, Ananya – HR Admin), then Sign in. Data is saved in your browser; Reset data starts over.' },
    { icon: DashboardRoundedIcon, title: 'Check your balances', text: 'As Priya, the dashboard shows your balances, upcoming leave, handovers you are part of and who in your team is away today.' },
    { icon: EventAvailableRoundedIcon, title: 'Apply for leave', text: 'Open Apply Leave, choose a leave type and dates and add a reason. The panel on the right shows the working days and the balance left after this request.' },
    { icon: HandshakeRoundedIcon, title: 'Hand over your work', text: 'Pick a backup (availability and workload are shown), give the handover a title and description, then list the tasks with due dates and assignees. Review and submit.' },
    { icon: HowToRegRoundedIcon, title: 'Respond as a backup', text: 'Open Work Handovers → Assigned to me to see work others have handed to you. Open one to accept or decline it and update its tasks.' },
    { icon: FactCheckRoundedIcon, title: 'Decide as a manager', text: 'Sign out and choose Rohan. Leave Approvals lists pending requests with risk flags; open one to read the insights, then approve, reject or request changes.' },
    { icon: PolicyRoundedIcon, title: 'Configure as HR', text: 'Sign in as Ananya to manage employees, leave policies, balances and holidays, and use Settings → Excel workbook to download the data as .xlsx.' },
    { icon: TerminalRoundedIcon, title: 'Run the real server', text: 'Clone the repo and run npm install and npm run dev. The API creates server/data/LeaveFlow.xlsx with demo data on first start, and the web app runs on localhost:5180.' },
  ],
  shortcuts: [],

  screenshots: [
    {
      src: shot('01-employee-dashboard.webp'),
      icon: DashboardRoundedIcon,
      title: 'Employee dashboard',
      text: 'Priya’s home: a greeting with the next holiday, her total, annual, sick and casual balances, leave taken and pending requests, then upcoming leave, a work-handover overview and today’s team availability.',
    },
    {
      src: shot('02-apply-leave.webp'),
      icon: EventAvailableRoundedIcon,
      title: 'Apply for leave',
      text: 'Step 1 of the wizard: Annual Leave from 21 to 31 December. The preview counts 7 working days, leaving out the weekends, Christmas and the company’s foundation day, and shows the balance dropping to 5 of 12.',
    },
    {
      src: shot('03-work-handover.webp'),
      icon: HandshakeRoundedIcon,
      title: 'Choosing a backup',
      text: 'Step 2: a work handover is mandatory. Meera Pillai is picked as the backup, shown as available for the whole period with no other handovers, and the handover gets a title, priority and description.',
    },
    {
      src: shot('04-handover-tasks.webp'),
      icon: ChecklistRoundedIcon,
      title: 'Handover tasks',
      text: 'Step 3: three tasks with their own priority. The open one has a description, a due date and a different assignee than the backup; tasks can be duplicated or removed.',
    },
    {
      src: shot('05-handover-acceptance.webp'),
      icon: HowToRegRoundedIcon,
      title: 'Accepting a handover',
      text: 'Priya is also a backup: Rohan has handed her the Payments API maintenance for 2–7 December. The drawer shows the description, instructions and tasks, with Accept handover and Decline at the bottom.',
    },
    {
      src: shot('06-leave-approvals.webp'),
      icon: FactCheckRoundedIcon,
      title: 'Approving with insights',
      text: 'Rohan’s approvals list now has four pending requests. The drawer for Priya’s November leave warns that 29% of the team will be away, that her backup hasn’t accepted yet and that he has leave of his own overlapping hers.',
    },
    {
      src: shot('07-team-availability.webp'),
      icon: GroupsRoundedIcon,
      title: 'Team availability',
      text: 'Who is available, on leave or working remotely today, upcoming leave for the next 30 days, and a warning that two people are covering two or more handovers and may be overloaded.',
    },
    {
      src: shot('08-reports.webp'),
      icon: InsightsRoundedIcon,
      title: 'Handover reports',
      text: 'The Work handovers report: handovers by status (half completed, a quarter waiting for acceptance), tasks by status, and a searchable table with backups, periods and progress that exports to CSV.',
    },
    {
      src: shot('09-leave-policies.webp'),
      icon: PolicyRoundedIcon,
      title: 'Leave policies',
      text: 'Ananya’s view of the 11 leave types. Each card shows the yearly allocation, carry-forward, maximum consecutive days, notice, backdating and attachment rules, with a switch to turn it off.',
    },
    {
      src: shot('10-excel-workbook.webp'),
      icon: TableViewRoundedIcon,
      title: 'The Excel workbook',
      text: 'Settings → Excel workbook in the live demo: the store lives in browser storage, with the row count of all 13 sheets, buttons to back up, download the .xlsx and run the lifecycle jobs, and recent automatic backups.',
    },
  ],
};
