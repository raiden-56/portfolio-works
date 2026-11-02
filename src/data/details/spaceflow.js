import ViewInArRoundedIcon from '@mui/icons-material/ViewInArRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import DesktopWindowsRoundedIcon from '@mui/icons-material/DesktopWindowsRounded';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded';
import EditLocationAltRoundedIcon from '@mui/icons-material/EditLocationAltRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';

// Case study for https://github.com/raiden-56/SpaceFlow (SpaceFlow — office booking and 3D workplace management).
// Screenshots are from the live demo at https://raiden-56.github.io/SpaceFlow/login. That GitHub Pages build runs in
// demo mode — a port of the API inside the browser on generated sample data — so they were captured after choosing
// “Continue as guest” and booking a desk in that private sandbox (data stays in that browser). No account was used.
const shot = (file) => `/projects/spaceflow/${file}`;

export default {
  product: 'SpaceFlow',
  accent: '#4f46e5',
  tagline:
    'Smart office booking with a 3D workplace — explore every floor in 3D, 2D or as a list, book a desk or meeting room in a few clicks, check in with a QR code, and run the whole workplace from an admin portal.',
  cover: shot('01-explore-3d.webp'),
  overview: [
    'SpaceFlow is a hybrid-office booking platform. Employees open an interactive 3D model of their building, drop into a floor, and see every desk coloured by availability — or switch to an equivalent 2D floor plan or a keyboard-accessible list, all sharing one booking context and one details panel. From there they book a desk or a meeting room with quick time presets, recurring and multi-day options and a location preview, see where teammates sit, manage bookings, add them to their calendar and check in by QR code. Workplace administrators get a separate portal for buildings and floors, an SVG Map Studio for drawing floor plans, seats and rooms, employees and teams, reservations, booking policies, analytics, announcements, an audit log and integrations.',
    'The full app is a pnpm monorepo: a React 19 + MUI 9 + React Three Fiber web app and a Node 22 + Express 5 + Prisma API on PostgreSQL 16, sharing Zod schemas and permissions. One booking engine handles every booking path, and double-booking is prevented in the database itself by an EXCLUDE USING gist constraint on each resource’s time range; availability updates arrive over Server-Sent Events and background jobs send reminders and release no-shows. The GitHub Pages copy is a frontend-only demo: there is no server there, so “Continue as guest” runs a port of the API inside the browser against generated sample data — two buildings, six floors, 208 desks and 17 meeting rooms — kept in localStorage for 24 hours. Live updates, email, SSO and calendar sync need the real backend.',
  ],
  highlights: [
    { value: 3, label: 'Ways to explore (3D, 2D, list)' },
    { value: 15, label: 'Floor-plan object kinds' },
    { value: 13, label: 'Admin portal pages' },
    { value: 127, label: 'Documented API operations' },
  ],
  stack: [
    'React 19',
    'TypeScript',
    'Vite 8',
    'MUI 9',
    'Redux Toolkit / RTK Query',
    'React Router 7',
    'React Three Fiber + drei',
    'Recharts',
    'React Hook Form',
    'Zod',
    'Node 22 + Express 5',
    'Prisma 6',
    'PostgreSQL 16',
    'Server-Sent Events',
    'Vitest',
    'Playwright',
    'Docker + nginx',
  ],
  architecture: [
    { title: 'apps/web', text: 'React app with an employee portal and an admin portal: 3D building scene, 2D floor plan, booking dialog, Map Studio and analytics, on RTK Query.' },
    { title: 'apps/api', text: 'Express modular monolith on Prisma and PostgreSQL — auth, buildings, resources, availability, reservations, policies, admin, search and realtime, with an OpenAPI contract and Swagger UI.' },
    { title: 'packages/shared', text: 'Zod schemas, enums, roles and permissions and DTO types used by both apps, so the client and server validate the same way.' },
    { title: 'apps/web/src/demo', text: 'A fetch-compatible demo backend — ports of the booking engine, policies, dashboard, search and admin modules — loaded only in demo builds such as GitHub Pages.' },
  ],

  why: {
    intro:
      'In a hybrid office nobody knows which desk is free, where the quiet zone is, or where their team is sitting today — and booking tools tend to be long lists of desk codes. SpaceFlow puts the actual building on screen, so finding and booking a place to work feels like looking at the office.',
    points: [
      {
        icon: ViewInArRoundedIcon,
        title: 'See the office, not a list',
        text: 'A 3D building with exploded floors and availability-coloured desks, an equivalent 2D plan and an accessible list — the same booking flow from all three.',
      },
      {
        icon: EventAvailableRoundedIcon,
        title: 'Book in a few clicks',
        text: 'Quick time presets, “Book my usual seat again”, “Find me a seat” suggestions and “Sit near” a teammate get you a desk without filling in forms.',
      },
      {
        icon: LockRoundedIcon,
        title: 'No double bookings',
        text: 'A PostgreSQL exclusion constraint on each resource’s time range means two concurrent requests can never both win; a conflict returns alternatives instead.',
      },
      {
        icon: AdminPanelSettingsRoundedIcon,
        title: 'One place to run the workplace',
        text: 'Admins draw floor plans, manage desks, rooms and people, set booking policies and read utilization reports in the same app employees use.',
      },
    ],
    audience: [
      { title: 'Hybrid-work employees', text: 'People who need a desk near their team, a quiet spot or a room for a meeting — today or next week.' },
      { title: 'Workplace & facilities teams', text: 'Admins who maintain buildings, floor plans, desks, rooms and the rules for booking them.' },
      { title: 'Office managers & approvers', text: 'People who approve restricted rooms like boardrooms and keep an eye on no-shows and check-ins.' },
      { title: 'Developers', text: 'A worked example of a full-stack TypeScript monorepo with a 3D React front end, a Prisma API and a database-level booking guarantee.' },
    ],
  },

  solves: [
    {
      problem: 'Desk codes don’t tell you where you’ll actually sit.',
      solution: 'Explore every floor in 3D or 2D with zones, rooms, elevators, restrooms and exits drawn in, and pick a desk straight from the plan.',
    },
    {
      problem: 'Two people end up booked into the same desk.',
      solution: 'Every booking path goes through one engine, and an EXCLUDE USING gist constraint in PostgreSQL rejects overlapping reservations outright.',
    },
    {
      problem: 'You want to sit with your team, but don’t know where they are.',
      solution: 'Teammates who share their location show up on the map, the floor chips count them, and “Sit near” picks the closest free desk.',
    },
    {
      problem: 'Finding a meeting room means trying rooms one by one.',
      solution: 'Search by date, time, duration, attendees, room type, equipment and accessibility; results are ranked by capacity fit and can be picked on the map.',
    },
    {
      problem: 'Booked desks sit empty because people don’t show up.',
      solution: 'QR or one-tap check-in, check-in reminders and automatic release of no-shows after the policy’s grace period.',
    },
    {
      problem: 'Booking rules live in someone’s head.',
      solution: 'Booking policies per organisation, building and resource type — advance window, durations, daily and weekly limits, hours, weekends, cancellation and check-in — with an effective-policy inspector.',
    },
    {
      problem: 'Floor plans change and the booking system falls out of date.',
      solution: 'Map Studio edits the SVG plan, links objects to real desks and rooms, validates it and publishes it to the 3D, 2D and list views — replacing a plan keeps booking history.',
    },
    {
      problem: 'Nobody can say how the office is really used.',
      solution: 'Analytics for reservation utilization, check-in and no-show rates, cancellations, peak hours, top resources, floors and buildings, with CSV exports.',
    },
  ],

  features: [
    { icon: ViewInArRoundedIcon, title: '3D building explorer', text: 'React Three Fiber scene with orbit, zoom, pan, reset, fullscreen, exploded floors and animated camera moves to a floor or desk; falls back to 2D without WebGL.' },
    { icon: MapRoundedIcon, title: '2D floor plan & list', text: 'An SVG plan with pan and zoom and arrow-key navigation between desks, plus a filterable, paginated list view — all three views share one details panel.' },
    { icon: DesktopWindowsRoundedIcon, title: 'Book a Seat', text: 'Cards, map or 3D results with filters for window, elevators, monitor, docking station, height-adjustable, accessible, quiet zone, zone, seat type and near my teammates.' },
    { icon: EventAvailableRoundedIcon, title: 'Booking dialog', text: 'Full day, morning and afternoon presets, a day availability bar, recurring bookings, multi-day bookings with “Rest of the week”, and a read-only location preview before you confirm.' },
    { icon: PeopleAltRoundedIcon, title: 'Teammates on the map', text: 'Badges show where teammates sit when they share their location, and “Sit near <name>” selects the closest free desk.' },
    { icon: MeetingRoomRoundedIcon, title: 'Meeting rooms', text: 'Search by time, duration, attendees, room type, equipment and accessibility, ranked by capacity fit, as cards, a list or on the map; attendees and setup requests.' },
    { icon: EventNoteRoundedIcon, title: 'My Bookings', text: 'Upcoming, ongoing, past and cancelled tabs with filters and search; view on map, modify, cancel, check in or out, add to calendar (.ics) and book again.' },
    { icon: QrCode2RoundedIcon, title: 'QR check-in & auto-release', text: 'Check in from a phone or kiosk with a QR or confirmation code; reminders and automatic release of no-shows after the grace period.' },
    { icon: FactCheckRoundedIcon, title: 'Approvals', text: 'Restricted rooms such as the boardroom go to approvers, who see and decide pending requests.' },
    { icon: SearchRoundedIcon, title: 'Search, directory & notifications', text: 'Global search across buildings, floors, desks, rooms, amenities and people, a privacy-aware office directory and an in-app notification centre.' },
    { icon: EditLocationAltRoundedIcon, title: 'Map Studio', text: 'SVG floor-plan editor with 15 object kinds, drag, resize, rotate, snapping, undo, links to real resources, auto-placement, an availability overlay, validation and publish.' },
    { icon: ApartmentRoundedIcon, title: 'Buildings, seats & rooms', text: 'Buildings and floors with time zones and optional GLB models; desk and room CRUD with amenities, restrictions, hours, maintenance windows, bulk edits and CSV import / export.' },
    { icon: PolicyRoundedIcon, title: 'Booking policies', text: 'Advance window, durations, daily and weekly limits, hours, weekends, cancellation deadline, check-in grace and auto-release, with an effective-policy inspector.' },
    { icon: InsightsRoundedIcon, title: 'Analytics & governance', text: 'Utilization, booking volume, peak hours, check-in and no-show rates and building comparison, plus announcements, an audit log, integrations status and four roles.' },
  ],

  steps: [
    { icon: LoginRoundedIcon, title: 'Continue as guest', text: 'Open the demo and choose Continue as guest. You get a private sandbox with sample buildings, desks, rooms, colleagues and bookings — no account or password.' },
    { icon: DashboardRoundedIcon, title: 'Start on the dashboard', text: 'Home shows today’s desk, your next booking with a countdown, live availability for the selected building, favourites, suggestions and announcements.' },
    { icon: ViewInArRoundedIcon, title: 'Explore the office', text: 'Explore Office → pick a floor, or Whole building and the layers button for the exploded view. Switch between 3D, 2D and List at the top right.' },
    { icon: DesktopWindowsRoundedIcon, title: 'Find a desk', text: 'Book a Seat → choose Today or Tomorrow, tick filters, then switch to Map and tap a desk. The details panel shows amenities and free half-hour slots.' },
    { icon: TuneRoundedIcon, title: 'Book it', text: 'Press Book now, pick a preset or times, optionally repeat it or add more days, press Continue, check the location preview and Confirm booking.' },
    { icon: MeetingRoomRoundedIcon, title: 'Reserve a meeting room', text: 'Meeting Rooms → set the time, duration and attendees, then book from the cards or press Pick on the map.' },
    { icon: QrCode2RoundedIcon, title: 'Manage and check in', text: 'My Bookings lets you modify, cancel, add to calendar or check in when the window opens; Check in also accepts a booking’s confirmation code.' },
    { icon: AdminPanelSettingsRoundedIcon, title: 'Open the admin portal', text: 'The guest is an organisation admin, so Admin portal (bottom of the sidebar) opens buildings, Map Studio, seats, rooms, policies, analytics and the audit log.' },
  ],
  shortcuts: [
    { keys: ['←', '→', '↑', '↓'], action: 'Floor plan: move between desks and rooms' },
    { keys: ['Home'], action: 'Floor plan: first desk' },
    { keys: ['End'], action: 'Floor plan: last desk' },
    { keys: ['Enter'], action: 'Floor plan: select the focused desk or room' },
    { keys: ['Esc'], action: 'Floor plan: clear the selection' },
    { keys: ['↑', '↓', 'Enter'], action: 'Global search: move through and open results' },
    { keys: ['←', '→', '↑', '↓'], action: 'Map Studio: nudge the selected object by the snap step' },
    { keys: ['Shift', 'Arrow'], action: 'Map Studio: nudge by 1 m' },
    { keys: ['R'], action: 'Map Studio: rotate the selected object 90°' },
    { keys: ['Delete'], action: 'Map Studio: delete the selected object' },
    { keys: ['Esc'], action: 'Map Studio: deselect' },
  ],

  screenshots: [
    {
      src: shot('01-explore-3d.webp'),
      icon: ViewInArRoundedIcon,
      title: 'A floor in 3D',
      text: 'Harbor Tower, Level 1: desks coloured by availability (green free, orange reserved), the Lyra, Nova, Sirius and Atlas rooms with their capacities, and labelled zones, elevators, stairs, restrooms and emergency exits. The floor list shows seats and rooms per floor.',
    },
    {
      src: shot('02-dashboard.webp'),
      icon: DashboardRoundedIcon,
      title: 'Dashboard',
      text: 'A greeting with today’s status, quick actions, live availability for the selected building, a 3D preview of the building and the next booking with a countdown. The banner explains the guest sandbox.',
    },
    {
      src: shot('03-floor-plan-2d.webp'),
      icon: MapRoundedIcon,
      title: 'The same floor as a 2D plan',
      text: 'Switching to 2D keeps the selection: desk HT1-003 is highlighted on the plan and its details — availability, check-in requirement, location and amenities — open beside it. Neighbourhood and quiet zones are drawn as tinted areas.',
    },
    {
      src: shot('04-book-a-seat.webp'),
      icon: DesktopWindowsRoundedIcon,
      title: 'Book a seat from the map',
      text: 'Tomorrow on Level 1 with the amenity filters on the left. Floor chips show where teammates are booked, the selected desk’s panel lists its amenities and free slots, and “Book HT2-001 again” repeats your usual seat.',
    },
    {
      src: shot('05-booking-dialog.webp'),
      icon: EventAvailableRoundedIcon,
      title: 'Booking dialog',
      text: 'Full day, morning and afternoon presets, start and end times, an availability bar for 07:00–20:00, a repeat option and multi-day booking with Wed, Thu, Fri and “Rest of the week”.',
    },
    {
      src: shot('06-booking-confirm.webp'),
      icon: FactCheckRoundedIcon,
      title: 'Confirm with a location preview',
      text: 'The summary shows the desk, date, time and the building’s time zone, a read-only preview of where the desk sits on Level 1, and a reminder that check-in is required or the booking may be released.',
    },
    {
      src: shot('07-meeting-rooms.webp'),
      icon: MeetingRoomRoundedIcon,
      title: 'Find a meeting room',
      text: 'Search by building, floor, date, time, duration, attendees, room type, equipment and accessibility. Four rooms fit two attendees; results switch between cards, a list and the map.',
    },
    {
      src: shot('08-my-bookings.webp'),
      icon: EventNoteRoundedIcon,
      title: 'My bookings',
      text: 'Upcoming, ongoing, past and cancelled tabs with filters. The desk just booked sits at the top, and requests for the approval-only Titan and Zenith rooms show as pending approval.',
    },
    {
      src: shot('09-analytics.webp'),
      icon: InsightsRoundedIcon,
      title: 'Analytics & reports',
      text: 'Reservations per day by seats and rooms, peak booking hours, floor-level utilization and a building comparison. Figures are reservation-based — the page says plainly that there are no occupancy sensors.',
    },
    {
      src: shot('10-map-studio.webp'),
      icon: EditLocationAltRoundedIcon,
      title: 'Map Studio',
      text: 'Editing the published Level 1 plan: desk HT1-010 is selected, with its kind, label, position, size, rotation and linked seat in the Properties tab. Validation flags a zone outside the floor bounds and blocks publishing until it is fixed.',
    },
  ],
};
