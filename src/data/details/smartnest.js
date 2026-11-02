import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import DevicesOtherRoundedIcon from '@mui/icons-material/DevicesOtherRounded';
import ThermostatRoundedIcon from '@mui/icons-material/ThermostatRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import RouterRoundedIcon from '@mui/icons-material/RouterRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

// Case study for https://github.com/raiden-56/Smartnest (SmartNest). Screenshots are from the GitHub Pages build at
// https://raiden-56.github.io/Smartnest/ — a frontend-only copy with no API server, so they were captured with
// headless Chrome through the login page’s “Continue as guest” button, which answers every request in the browser
// from a built-in sample home (changes are kept in memory and lost on reload). No account or password was used.
const shot = (file) => `/projects/smartnest/${file}`;

export default {
  product: 'SmartNest',
  accent: '#386641',
  tagline:
    'A smart-home control centre — rooms, devices, cameras, scenes, automations, energy and network in one place, with honest device state and commands that count only when the device confirms them.',
  cover: shot('01-overview.webp'),
  overview: [
    'SmartNest is a unified smart-home control, monitoring and automation platform. It connects to documented integrations — a built-in demonstration home and Home Assistant (REST for commands, WebSocket for live state) — and gives one place to organise rooms, control devices, watch cameras, run scenes and automations, and keep an eye on energy and network health. The UI is capability-driven: each device declares what it can do from 31 capability types, and only those controls are drawn, so a lamp never shows a thermostat dial.',
    'It is a TypeScript monorepo: a shared Zod contract, an Express + Prisma + PostgreSQL server with role-based access on every request, encrypted integration credentials, an authenticated WebSocket hub, an automation engine and scheduler, and a React + MUI + RTK Query web app. Commands go through a real lifecycle — pending, sent, then confirmed, failed or timed out — and are marked confirmed only when the device reports the requested state. The live demo on GitHub Pages is the web app alone in guest mode: an in-browser stand-in for the API serves a sample home, so you can explore every screen, but nothing physical is controlled and changes are not saved. Real device control needs the server, PostgreSQL and a Home Assistant instance.',
  ],
  highlights: [
    { value: 31, label: 'Capability types' },
    { value: 47, label: 'Devices in the sample home' },
    { value: 13, label: 'Dashboard widgets' },
    { value: 24, label: 'Permissions across 4 roles' },
  ],
  stack: [
    'React 18',
    'TypeScript',
    'Vite',
    'MUI',
    'Redux Toolkit / RTK Query',
    'React Router',
    'Recharts',
    'Framer Motion',
    'React Hook Form',
    'Zod',
    'Node.js / Express',
    'Prisma',
    'PostgreSQL',
    'WebSocket (ws)',
    'Vitest',
    'Playwright',
    'Docker',
  ],
  architecture: [
    { title: 'packages/shared', text: 'The typed contract used by both sides: capabilities, Zod command schemas, the role → permission matrix, device catalogue, automation and dashboard schemas, API DTOs and realtime events.' },
    { title: 'apps/server', text: 'Express + Prisma on PostgreSQL: auth and sessions, RBAC, Demo and Home Assistant adapters, the command lifecycle, WebSocket hub, automation engine, scheduler and data retention.' },
    { title: 'apps/web', text: 'React + Vite + MUI + RTK Query: capability-driven controls, a customisable dashboard and every feature page; in guest builds an in-browser API answers from sample data.' },
    { title: 'apps/mock-ha', text: 'A deterministic mock of the Home Assistant REST and WebSocket API, used by integration and Playwright end-to-end tests and for trying SmartNest without a real Home Assistant.' },
  ],

  why: {
    intro:
      'Most smart-home apps are tied to one brand, show a switch as “on” the moment you tap it, and hide what actually happened. SmartNest puts every room and device behind one interface and is strict about the truth: whether a device is reachable, whether a command really took effect, and which data is simulated.',
    points: [
      {
        icon: HomeRoundedIcon,
        title: 'One home, one place',
        text: 'Rooms, devices, cameras, scenes, automations, energy, network and activity share one app, one search and one dashboard instead of a drawer full of vendor apps.',
      },
      {
        icon: VerifiedRoundedIcon,
        title: 'Honest state',
        text: 'Connectivity is tracked separately from operating state, missing values read “Not available”, and a command shows “Confirmed” only after the device reports the new state.',
      },
      {
        icon: TuneRoundedIcon,
        title: 'Controls that fit the device',
        text: 'The UI is drawn from the capabilities each integration declares, so unsupported controls never appear and sensitive ones — unlock, disarm, open garage — ask first.',
      },
      {
        icon: ShieldRoundedIcon,
        title: 'Secure by default',
        text: 'Server-side permissions on every request, AES-256-GCM encrypted integration tokens, authenticated WebSockets, short-lived signed camera URLs and an audit log.',
      },
    ],
    audience: [
      { title: 'Home Assistant users', text: 'People who already run Home Assistant and want a cleaner, household-friendly control centre on top of it.' },
      { title: 'Households sharing a home', text: 'Owners, admins, members and guests, each seeing and controlling only what their role allows.' },
      { title: 'Energy-conscious homes', text: 'Anyone with solar, a home battery, an EV charger or energy-monitoring plugs who wants consumption and cost in one view.' },
      { title: 'Developers & reviewers', text: 'A worked example of a typed monorepo with RBAC, a command lifecycle, realtime updates and an adapter interface for new integrations.' },
    ],
  },

  solves: [
    {
      problem: 'Every brand has its own app.',
      solution: 'One control centre over documented integrations — the demo home and Home Assistant today, with MQTT, Matter, Zigbee/Z-Wave and ONVIF devices reaching it through Home Assistant.',
    },
    {
      problem: 'Apps show “on” before anything happened.',
      solution: 'A command lifecycle of pending → sent → confirmed / failed / timed out; devices that cannot report back are labelled “Acknowledged”, never “Confirmed”.',
    },
    {
      problem: 'Offline devices look the same as switched-off ones.',
      solution: 'Online, offline, unavailable and unknown are shown as their own badges, counted on the dashboard and gathered in a Needs attention widget.',
    },
    {
      problem: 'A scene half-works and nobody notices.',
      solution: 'Every scene run reports each action’s result, so “Partly completed: 5 of 6 actions confirmed” names the device that failed and why.',
    },
    {
      problem: 'Automations can fight each other or loop forever.',
      solution: 'Each rule runs in exactly one place (SmartNest or Home Assistant), has a cooldown, can be tested first, and is disabled automatically if it runs more than 20 times in 10 minutes.',
    },
    {
      problem: 'Everyone in the house has the same power.',
      solution: 'Four roles over 24 permissions, enforced on the server; guests can only control everyday categories such as lights, plugs, climate, media and cleaning.',
    },
    {
      problem: 'Energy data is scattered and often estimated.',
      solution: 'Consumption, solar, battery and EV charging from devices that report energy, by hour, day or custom range, with cost from your tariff and demo figures labelled as simulated.',
    },
    {
      problem: 'Trying a smart-home app needs hardware.',
      solution: 'A labelled demonstration home with healthy, offline and unresponsive devices — and, on the hosted demo, a guest mode that runs entirely in the browser.',
    },
  ],

  features: [
    { icon: DashboardRoundedIcon, title: 'Customisable dashboard', text: '13 widget types — summary, favourites, rooms, scenes, camera, climate, security, energy, network, low battery and more — reordered, resized and saved per user and home.' },
    { icon: MeetingRoomRoundedIcon, title: 'Rooms', text: 'Rooms with device and online counts, temperature, humidity and CO₂, plus Lights on, Lights off and an All off that never touches locks, alarms, cameras or safety devices.' },
    { icon: DevicesOtherRoundedIcon, title: 'Device inventory', text: 'Search, filter, sort, grid or list view and bulk actions, with connectivity, demo and battery badges on every card.' },
    { icon: ThermostatRoundedIcon, title: 'Capability-driven controls', text: 'Power, brightness, colour and colour temperature, setpoints, HVAC and fan modes, covers, locks, alarm panels, media, vacuums, valves and more — only what the device supports.' },
    { icon: VerifiedRoundedIcon, title: 'Confirmed commands', text: 'Each command is tracked from pending to confirmed, failed or timed out, and recent commands are listed on the device page.' },
    { icon: AutoAwesomeRoundedIcon, title: 'Scenes', text: 'Run several actions in parallel or in order with one tap; sensitive scenes ask for confirmation and every run reports per-device results.' },
    { icon: SmartToyRoundedIcon, title: 'Automations', text: 'Seven trigger types, seven condition types with and/or groups, and five action types, in a form builder or as JSON, with validation, drafts, test runs, import and export.' },
    { icon: VideocamRoundedIcon, title: 'Cameras', text: 'Snapshots and MJPEG through an authenticated proxy with signed, short-lived URLs, pan/tilt/zoom where supported and a “You are viewing” privacy indicator.' },
    { icon: BoltRoundedIcon, title: 'Energy', text: 'Live power, hourly charts, per-device consumption, solar, home battery, EV charging and estimated cost, with a table view of the hourly chart.' },
    { icon: RouterRoundedIcon, title: 'Network', text: 'Router and access-point health, bandwidth and a searchable, sortable list of connected clients when an integration provides them.' },
    { icon: HubRoundedIcon, title: 'Integrations', text: 'Connect Home Assistant or the demo home, run a health check, discover devices and import them into rooms, and sync Home Assistant automations.' },
    { icon: HistoryRoundedIcon, title: 'Activity & notifications', text: 'A filterable log of commands, scenes, automations, connectivity and security events, plus in-app notifications with per-category preferences.' },
    { icon: GroupRoundedIcon, title: 'Members, roles & audit', text: 'Invite members as admin, member or guest, manage sessions, review the audit log and set retention or delete stored data.' },
    { icon: SearchRoundedIcon, title: 'Global search & tour', text: 'Ctrl/⌘ K finds devices, rooms, scenes and automations from anywhere; a guided product tour and feature guide explain every area.' },
  ],

  steps: [
    { icon: LoginRoundedIcon, title: 'Open the demo as a guest', text: 'Open the live demo and press Continue as guest on the sign-in page. No account is needed; a banner reminds you that the data is a sample and changes aren’t saved.' },
    { icon: DashboardRoundedIcon, title: 'Read the overview', text: 'The Overview dashboard shows device counts, online and offline devices, security alerts and current power, then favourite devices, scenes, a camera and climate.' },
    { icon: MeetingRoomRoundedIcon, title: 'Browse by room', text: 'Open Rooms and pick one, such as Living Room, to see its devices, readings and room scenes, or switch all its lights at once.' },
    { icon: ThermostatRoundedIcon, title: 'Control a device', text: 'Flip a toggle on a card, or open a device from its ⋮ menu for every control. Watch the command move from pending to confirmed — or time out on the unresponsive balcony heater.' },
    { icon: PlayCircleRoundedIcon, title: 'Run a scene', text: 'Go to Scenes and press Activate. “All Supported Lights Off” includes an offline device on purpose, so you can see a partial result explained action by action.' },
    { icon: SmartToyRoundedIcon, title: 'Build an automation', text: 'Automations → New automation: add a trigger, optional conditions and actions, press Validate, then Save or Save draft. Use Test to simulate a run first.' },
    { icon: BoltRoundedIcon, title: 'Check energy and network', text: 'Energy shows today, 7 days, 30 days or a custom range; Network shows routers, bandwidth and clients. Demo figures are labelled as simulated.' },
    { icon: ViewQuiltRoundedIcon, title: 'Make the dashboard yours', text: 'Back on Overview press Customise to reorder, hide, add or resize widgets, then Save layout. For real devices, run the server and connect Home Assistant under Integrations.' },
  ],
  shortcuts: [
    { keys: ['Ctrl', 'K'], action: 'Open global search (⌘K on a Mac)' },
    { keys: ['↑', '↓'], action: 'Move through search results' },
    { keys: ['Enter'], action: 'Open the selected search result' },
    { keys: ['←', '→'], action: 'Previous / next product-tour step' },
    { keys: ['Esc'], action: 'Close the product tour or leave a full-window camera view' },
  ],

  screenshots: [
    {
      src: shot('01-overview.webp'),
      icon: DashboardRoundedIcon,
      title: 'Overview dashboard',
      text: 'The guest home “Maple House”: 47 devices with online, offline and unavailable counts, security alerts and current power, then favourite devices with inline controls, quick-action scenes and a security summary.',
    },
    {
      src: shot('02-room-detail.webp'),
      icon: MeetingRoomRoundedIcon,
      title: 'A room at a glance',
      text: 'Living Room shows its temperature, humidity and CO₂, every device with its connectivity and demo badges, room scenes and recent activity, with Lights on, Lights off and All off.',
    },
    {
      src: shot('03-devices.webp'),
      icon: DevicesOtherRoundedIcon,
      title: 'Device inventory',
      text: 'All devices with total, online, offline and unavailable counts, search, filters, sorting, grid or list view and bulk select. Cards show readings, battery warnings and “Not available” where a value is missing.',
    },
    {
      src: shot('04-device-controls.webp'),
      icon: ThermostatRoundedIcon,
      title: 'Controls from capabilities',
      text: 'The Living Room AC declares power, a setpoint, HVAC mode, fan speed and swing, so exactly those controls appear, next to live readings and integration details.',
    },
    {
      src: shot('05-scene-result.webp'),
      icon: FactCheckRoundedIcon,
      title: 'Scene results, device by device',
      text: '“All Supported Lights Off” confirms five lights and reports the sixth as failed because the garden lights are offline — so the scene is “Partly completed”, not falsely “done”.',
    },
    {
      src: shot('06-automations.webp'),
      icon: SmartToyRoundedIcon,
      title: 'Automations and who runs them',
      text: 'SmartNest rules with their trigger, last run and an enable switch. A note explains execution ownership: Home Assistant rules are only enabled, disabled or triggered here, so nothing runs twice.',
    },
    {
      src: shot('07-automation-editor.webp'),
      icon: TuneRoundedIcon,
      title: 'Automation builder',
      text: 'Editing “Water the garden”: a sunrise trigger with an offset, validation, a cooldown that protects against loops and an explicit switch for sensitive actions, with an Advanced (JSON) tab alongside.',
    },
    {
      src: shot('08-energy.webp'),
      icon: BoltRoundedIcon,
      title: 'Energy',
      text: 'Hourly consumption against solar generation for today, per-device consumption and EV charging. In the demo every figure is labelled as simulated, not measured.',
    },
    {
      src: shot('09-home-assistant.webp'),
      icon: HubRoundedIcon,
      title: 'Home Assistant integration',
      text: 'A connected Home Assistant with imported and discovered-but-not-imported devices, last sync and last connection, a health check, device discovery and automation sync.',
    },
    {
      src: shot('10-customise-dashboard.webp'),
      icon: ViewQuiltRoundedIcon,
      title: 'Customising the dashboard',
      text: 'In Customise mode each widget can move up or down, switch between the main and side columns, change width or be hidden; Add widget and Reset to default sit above, and nothing changes until you save.',
    },
  ],
};
