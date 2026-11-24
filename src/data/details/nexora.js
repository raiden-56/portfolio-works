import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import DevicesOtherRoundedIcon from '@mui/icons-material/DevicesOtherRounded';
import ThermostatRoundedIcon from '@mui/icons-material/ThermostatRounded';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import AddLinkRoundedIcon from '@mui/icons-material/AddLinkRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import CenterFocusStrongRoundedIcon from '@mui/icons-material/CenterFocusStrongRounded';
import HotelRoundedIcon from '@mui/icons-material/HotelRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import WorkspacesRoundedIcon from '@mui/icons-material/WorkspacesRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';

// Case study for https://github.com/raiden-56/nexora (Nexora – smart automation and device management for homes,
// hotels and offices). Screenshots are from the GitHub Pages build at https://raiden-56.github.io/nexora/, captured
// with headless Chrome at 1440×770 in the app’s default dark theme. That build has no server: the real route handlers
// and services are bundled into the page, answer every /api call in the browser and keep the demo data in
// localStorage. The capture script signed in only with the login page’s “Open the demo workspace” button (the site
// fills in its own published demo account; no password was typed and no account was created), switched between the
// three demo organizations through the sidebar menu and only opened screens and editors — nothing was saved. The
// translucent top bar was made opaque with CSS so content scrolled under it doesn’t show through. The shots were taken
// at about 11:30 pm IST, so the in-browser scheduler had just run the 11:30 PM “Night Lock-up” routine, and the
// simulated cameras show motion and infrared at random, so counts and pictures in the live demo will differ.
const shot = (file) => `/projects/nexora/${file}`;

export default {
  product: 'Nexora',
  accent: '#12A37B',
  tagline:
    'One platform for every space: homes, hotels and offices organised as properties, floors and rooms, with capability-driven device control, routines that run on a server scheduler, a CCTV camera wall and hotel and office operations on top.',
  cover: shot('05-cctv-wall.webp'),
  overview: [
    'Nexora is a vendor-neutral, multi-tenant smart automation and device-management platform. One account can belong to several organizations — a residential family, a hotel group, an office company — and each organization holds properties with their own timezone, tariff, buildings, floors, rooms and devices. On that structure it offers capability-driven controls for 17 device types, bulk actions that never switch off essential loads, a pairing wizard, a WHEN → IF → THEN automation builder, 13 scene templates, a CCTV wall with switchable and saved camera views, energy analytics, seven roles with property-scoped access and an audit log. The organization type unlocks extra modules: Hotel Operations for check-in, check-out, housekeeping and maintenance, and Office Operations for meeting rooms, working-hour schedules and after-hours shutdown. It is a single Next.js 16 App Router app whose thin route handlers call framework-free services; data is kept in a JSON file today, with a 30-model Prisma/PostgreSQL schema as the planned target. Every device in the demo is simulated and labelled as such, energy history is a labelled demonstration profile, and the README is open that Matter, Tuya, MQTT and Zigbee adapters report “not available” and the Home Assistant adapter hasn’t been tested against a live instance.',
    'What sets it apart is that it is built for running buildings, not just one home. Typical smart-home apps — and SmartNest, the closest project in this portfolio — centre on a single household: SmartNest’s rooms, four household roles, Home Assistant integration and confirmed-command lifecycle are all about one home’s devices telling the truth. Nexora adds the layer above: tenants and properties you switch between, hotel and office roles such as Hotel Manager, Facility Manager and Staff, guest-room check-in that sets welcome lighting, curtains and AC, check-out that switches off non-essential loads and tells housekeeping, and floor-by-floor or after-hours shutdowns that skip locks, server racks, fridges and cameras. Its routines run on a server scheduler in each property’s timezone, with DST handling and a dedupe key per occurrence, so they fire with every browser closed; and the CCTV page is a monitoring wall with 1, 2×2, 3×3 and 4×4 grids, per-floor and saved views, a tour mode and keys 1–9. HomeHub, the other home project here, is about running a household — inventory, chores, bills and expenses — and controls no devices at all. The GitHub Pages copy runs the same route handlers and services in the browser with data in localStorage, so the demo behaves like the real app, but routines there only run while a Nexora tab is open.',
  ],
  highlights: [
    { value: 3, label: 'Space types: home, hotel, office' },
    { value: 17, label: 'Device types' },
    { value: 7, label: 'Roles over 11 permissions' },
    { value: 51, label: 'API route handlers' },
  ],
  stack: [
    'Next.js 16 (App Router)',
    'React 19',
    'TypeScript',
    'Tailwind CSS 4',
    'Framer Motion',
    'SWR',
    'Zod 4',
    'lucide-react',
    'Route handlers + framework-free services',
    'JSON-file persistence',
    'Prisma schema (PostgreSQL target)',
    'scrypt + httpOnly sessions',
    'Home Assistant REST adapter',
    'Canvas-drawn simulated camera feeds',
    'Vitest',
    'Docker',
    'GitHub Actions → GitHub Pages',
  ],
  architecture: [
    { title: 'src/app', text: 'Authenticated screens under (app) — overview, properties, devices, rooms, CCTV, automations, scenes, schedules, hotel, office, energy, activity, users, integrations, notifications, settings — plus 51 thin API route handlers that parse with Zod, call requireCtx(permission) and hand off to a service.' },
    { title: 'src/server', text: 'Sessions and tenant context (organization membership, role permissions and property grants on every call), services for devices, structure, automations, scenes, hotel, energy, members and integrations, the automation executor and 15-second scheduler, and the DeviceProvider adapters: simulator, Home Assistant and pending Matter, Tuya, MQTT and Zigbee.' },
    { title: 'src/lib + src/components', text: 'Shared, side-effect-free code — domain types, the RBAC table and the device catalogue — and a small custom UI kit: app shell with sidebar and command palette, capability-driven device controls, the automation builder, floor plan and the CCTV feed renderer.' },
    { title: 'src/demo', text: 'The GitHub Pages build (NEXORA_STATIC=1) swaps Node-only modules for browser shims, bundles the real route handlers and services into the page and dispatches /api calls to them, with data in the visitor’s localStorage and the scheduler running while a tab is open.' },
  ],

  why: {
    intro:
      'Smart devices are easy to buy and hard to run at scale. A family with two homes, a hotel with dozens of guest rooms or an office with meeting rooms and a server room ends up with a drawer of vendor apps, routines nobody trusts and staff who either can’t do their job or can switch off the wrong thing. Nexora is for the people who run those spaces every day — owners and residents, front-desk and housekeeping teams, facility managers — and gives each of them the controls their role allows, in one place.',
    points: [
      {
        icon: WorkspacesRoundedIcon,
        title: 'Every space, one account',
        text: 'Switch between organizations and properties from the sidebar; each property keeps its own timezone, tariff, floors, rooms, devices, scenes, routines and cameras, and every API call is filtered by organization and property access.',
      },
      {
        icon: HotelRoundedIcon,
        title: 'Operations, not just switches',
        text: 'A hotel’s front desk checks guests in and out from a room board that drives the room’s devices; an office’s facility team runs working-hour schedules, meeting-room scenes and an after-hours shutdown.',
      },
      {
        icon: ScheduleRoundedIcon,
        title: 'Routines you can leave alone',
        text: 'Automations run on a server scheduler in the property’s timezone — sunrise and sunset from its coordinates, DST gaps handled, each occurrence run once — and every run records a per-step result.',
      },
      {
        icon: ShieldRoundedIcon,
        title: 'Safe by default',
        text: 'Locks, fridges, emergency lighting, server loads and cameras are never switched off in bulk, only a person can stop recording or turn on camera privacy, unlocking asks first, and guests have no CCTV access.',
      },
    ],
    audience: [
      { title: 'Families with more than one home', text: 'Owners and residents who want one app for the city flat and the holiday villa, with property modes, scenes and routines for each.' },
      { title: 'Hotel teams', text: 'Hotel managers, front desk and housekeeping working from a room board, with check-in, check-out, cleaning and maintenance states that drive the room.' },
      { title: 'Facility managers', text: 'People running offices and campuses: meeting rooms, weekday and weekend schedules, floor-wise control and department-level energy.' },
      { title: 'Developers & reviewers', text: 'A worked example of multi-tenant RBAC, a provider abstraction, a DST-safe scheduler and one codebase that builds both a Node app and a browser-only demo.' },
    ],
  },

  solves: [
    {
      problem: 'Each brand and building has its own app.',
      solution: 'Every device goes through one DeviceProvider abstraction, so dashboards, scenes and automations work the same for the simulator, Home Assistant or — once their transports are built — Matter, Tuya, MQTT and Zigbee.',
    },
    {
      problem: 'A home, a hotel and an office need different tools.',
      solution: 'The organization type decides the modules: residential gets property modes and family roles, hospitality adds Hotel Operations, commercial adds Office Operations, all on the same properties → floors → rooms → devices model.',
    },
    {
      problem: 'Check-in and check-out mean a walk to the room.',
      solution: 'Check-in sets welcome lighting, curtains and the AC set-point for the guest; check-out switches off non-essential loads, closes curtains and notifies housekeeping, while locks and the minibar stay on.',
    },
    {
      problem: 'Offices keep burning power after hours.',
      solution: 'An “On after hours” count, floor-by-floor switch-off, weekday and weekend schedules and a one-tap after-hours shutdown that leaves security and safety loads running.',
    },
    {
      problem: 'A bulk “all off” cuts the fridge or the cameras.',
      solution: 'Devices marked essential are skipped and reported as protected, cameras are left out of bulk actions, and scenes and automations can never stop recording or turn on privacy mode.',
    },
    {
      problem: 'Routines double-fire, drift or stop when the laptop closes.',
      solution: 'A 15-second server scheduler evaluates triggers in each property’s timezone, fires times skipped by DST right after the gap, dedupes every occurrence by key and catches up at most five minutes after downtime.',
    },
    {
      problem: 'Watching many cameras is a chore.',
      solution: 'A camera wall with four grid sizes, a view per floor, saved views per property, paging, an auto-advancing tour, full screen and keys 1–9, plus a focus mode to step through cameras one by one.',
    },
    {
      problem: 'Staff see and change more than they should.',
      solution: 'Seven roles over eleven permissions, access limited to chosen properties, invitations that are accepted on sign-up, and guards so nobody assigns a role above their own or demotes the last owner.',
    },
  ],

  features: [
    { icon: DashboardRoundedIcon, title: 'Property overview', text: 'Device, on, off and offline counts, active automations, live power, property mode (Home, Away, Night, Vacation), quick scenes, a floor plan, upcoming and recent routine runs, energy and recent activity.' },
    { icon: ApartmentRoundedIcon, title: 'Organizations & properties', text: 'Switch organizations and properties from the shell; a property wizard picks a type (house, villa, office, campus, hotel, resort…), a layout template, timezone, coordinates and tariff.' },
    { icon: LayersRoundedIcon, title: 'Rooms, floors & floor plan', text: 'Add, rename, reorder and delete floors and rooms, see each room’s device, active and offline counts and occupancy, and switch to a floor plan with live device markers.' },
    { icon: ThermostatRoundedIcon, title: 'Capability-driven controls', text: 'Panels for switches, plugs, bulbs, RGB strips, fans, ACs, thermostats, ventilation, curtains, blinds, locks and sensors. The server checks every command against the device’s capabilities and value ranges; the UI updates optimistically and rolls back if the provider refuses.' },
    { icon: DevicesOtherRoundedIcon, title: 'Bulk control & essential loads', text: 'Select devices or use room on/off, floor off and after-hours shutdown; disruptive actions ask first, and essential loads are skipped with a reason.' },
    { icon: AddLinkRoundedIcon, title: 'Pairing & integrations', text: 'Method → Discover → Location → Name → Connect: a device is saved only after the provider confirms two-way communication. Integrations list connected accounts and each adapter’s real status.' },
    { icon: AccountTreeRoundedIcon, title: 'Automation builder', text: 'WHEN time, sunrise/sunset, device state, motion, door, temperature or manual; IF day, occupancy, device, temperature or property mode; THEN device actions with their own conditions, scenes, notifications and waits, plus an end time and an unreachable-device policy.' },
    { icon: ScheduleRoundedIcon, title: 'Server scheduler & history', text: 'Starts with the server, ticks every 15 seconds, handles DST and dedupes runs; each execution keeps per-step success, skipped or failed results, and routines can be paused, duplicated or run now.' },
    { icon: AutoAwesomeRoundedIcon, title: 'Scenes', text: '13 templates from Welcome Home to Housekeeping and Energy Saving Mode pick matching devices, a custom builder orders actions, and one tap reports each device’s outcome.' },
    { icon: GridViewRoundedIcon, title: 'CCTV camera wall', text: '1, 2×2, 3×3 and 4×4 grids; All cameras, one view per floor and saved views with a name, grid and camera order shared per property; paging, tour mode and full screen.' },
    { icon: CenterFocusStrongRoundedIcon, title: 'Camera focus & safeguards', text: 'Open a camera to step through the rest with ← →, take snapshots and toggle recording or privacy with a confirmation. Simulated cameras draw a marked picture of their room that turns infrared when its lights are off and shows a person when the simulator reports motion.' },
    { icon: HotelRoundedIcon, title: 'Hotel operations', text: 'Occupancy, ready-to-sell, housekeeping and maintenance counts and a room board by floor; each room opens a sheet for check-in with a welcome temperature, check-out, housekeeping, cleaning, maintenance and manual override.' },
    { icon: BusinessCenterRoundedIcon, title: 'Office operations', text: 'Occupied spaces, meeting rooms in use, live load and devices on after hours, meeting-room scenes, working-hour schedules, floor-wise switch-off listing protected loads, and department-level energy.' },
    { icon: BoltRoundedIcon, title: 'Energy analytics', text: '24 hours, 7 days or 30 days for one or all properties, comparison with the previous period, cost and monthly projection, room and device breakdowns, saving opportunities from live state and CSV export — all labelled as demonstration data.' },
    { icon: AdminPanelSettingsRoundedIcon, title: 'Users, permissions & audit', text: 'Members, roles, property-scoped access and pending invitations beside the full role-permission matrix; an activity log of previous → new state with source and filters, a notification centre and Ctrl/⌘ K search.' },
  ],

  steps: [
    { icon: LoginRoundedIcon, title: 'Open the demo workspace', text: 'Open the live demo and press “Open the demo workspace” on the sign-in page. You land in the Mehta Family organization; the hardware is simulated and your changes stay in your own browser.' },
    { icon: DashboardRoundedIcon, title: 'Read the home overview', text: 'Overview shows Nexora Residence: device counts, live power, the property mode, quick scenes, a floor plan of both floors and the next scheduled routines.' },
    { icon: ThermostatRoundedIcon, title: 'Control a device', text: 'Open Devices and pick a card, such as Living Room AC, to switch it, change the set-point, mode and fan speed, or use the simulator controls to take it offline.' },
    { icon: AccountTreeRoundedIcon, title: 'Look at a routine', text: 'In Automations open Evening Comfort: a 6:30 PM trigger with an 11:00 PM end, four actions — the AC only if the living room is occupied — and its execution history.' },
    { icon: VideocamRoundedIcon, title: 'Watch the cameras', text: 'Open CCTV, press 1–9 to switch views, change the grid, start the Tour or click a camera for focus mode. New view saves your own set of cameras for the property.' },
    { icon: SwapHorizRoundedIcon, title: 'Switch to the hotel', text: 'Use the organization menu at the top of the sidebar to open Aurelia Hotels, then Hotel Operations; click a room to check a guest in or out, or send it to housekeeping.' },
    { icon: BusinessCenterRoundedIcon, title: 'Switch to the office', text: 'Choose Helix Technologies and open Office Operations for meeting rooms, working-hour schedules, floor-wise switch-off and the after-hours shutdown.' },
    { icon: HistoryRoundedIcon, title: 'Check energy, access and logs', text: 'Energy Analytics, Users & Permissions and Activity Logs round it off. Settings → Organization → Reset demo data puts everything back; for the real server-side scheduler, run it with npm run dev or Docker.' },
  ],
  shortcuts: [
    { keys: ['Ctrl', 'K'], action: 'Open search (⌘K on a Mac)' },
    { keys: ['↑', '↓'], action: 'Move through search results' },
    { keys: ['Enter'], action: 'Open the selected result' },
    { keys: ['1–9'], action: 'Switch camera view on the CCTV wall' },
    { keys: ['←', '→'], action: 'Change wall page, or step through cameras in focus mode' },
    { keys: ['Esc'], action: 'Close search or a dialog, or go from focus mode back to the wall' },
  ],

  screenshots: [
    {
      src: shot('01-overview.webp'),
      icon: DashboardRoundedIcon,
      title: 'Property overview',
      text: 'Nexora Residence in the Mehta Family organization: 36 devices with on, off and offline counts, five active automations, live power, the Home / Away / Night / Vacation property mode and one-tap quick scenes.',
    },
    {
      src: shot('02-property-and-routines.webp'),
      icon: LayersRoundedIcon,
      title: 'Floor plan and routines',
      text: 'Further down, a floor plan of the ground floor with a marker per device and an occupancy icon, beside the automation overview: a partial failure, upcoming runs in the property’s timezone and what the scheduler has just executed.',
    },
    {
      src: shot('03-device-control.webp'),
      icon: ThermostatRoundedIcon,
      title: 'Controls from capabilities',
      text: 'Living Room AC declares power, a 16–30 °C set-point, mode, fan speed and swing, so exactly those controls appear, next to its 24-hour energy (demo data) and details such as provider, firmware and capabilities.',
    },
    {
      src: shot('04-automation-builder.webp'),
      icon: AccountTreeRoundedIcon,
      title: 'Automation builder',
      text: 'The THEN block of Evening Comfort: ordered device actions, the AC set to cool at 24 °C only if the living room is occupied, buttons to add a device, scene, notification or wait, and the policy for devices that can’t be reached.',
    },
    {
      src: shot('05-cctv-wall.webp'),
      icon: GridViewRoundedIcon,
      title: 'CCTV camera wall',
      text: 'Helix HQ Pune on a 3×3 grid: motion flagged on the engineering bay, the server room in infrared, the offline cafeteria camera showing No signal, and views for All cameras, each floor and the saved “Security desk”.',
    },
    {
      src: shot('06-cctv-focus.webp'),
      icon: CenterFocusStrongRoundedIcon,
      title: 'Camera focus mode',
      text: 'The hotel’s porte-cochère camera opened from the “Lobby & dining” view, with recording and privacy switches, snapshot, full screen and camera details, and a strip of the view’s other cameras to step through.',
    },
    {
      src: shot('07-hotel-operations.webp'),
      icon: HotelRoundedIcon,
      title: 'Hotel operations',
      text: 'Aurelia Grand Mumbai’s room board: occupancy, rooms ready to sell, awaiting housekeeping, being cleaned and under maintenance, then each room by floor with guest, status and AC set-point.',
    },
    {
      src: shot('08-office-operations.webp'),
      icon: BusinessCenterRoundedIcon,
      title: 'Office operations',
      text: 'Helix HQ: occupied spaces, meeting rooms in use, live load and devices still on outside 9 AM – 7 PM, meeting-room status and scenes, working-hour schedules and the After-hours shutdown button.',
    },
    {
      src: shot('09-energy.webp'),
      icon: BoltRoundedIcon,
      title: 'Energy analytics',
      text: 'Seven days of consumption against the previous week, room-wise and device-wise breakdowns with cost, and a saving opportunity derived from live state: an AC running in an unoccupied room.',
    },
    {
      src: shot('10-users-permissions.webp'),
      icon: AdminPanelSettingsRoundedIcon,
      title: 'Roles and permissions',
      text: 'The matrix of seven roles — Owner, Property Manager, Facility Manager, Hotel Manager, Staff, Resident and Guest — against eleven permissions, down to View CCTV, which guests never get.',
    },
  ],
};
