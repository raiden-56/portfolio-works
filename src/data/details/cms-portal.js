import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import SchemaRoundedIcon from '@mui/icons-material/SchemaRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import WebRoundedIcon from '@mui/icons-material/WebRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import ApiRoundedIcon from '@mui/icons-material/ApiRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import WebhookRoundedIcon from '@mui/icons-material/WebhookRounded';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import CompareRoundedIcon from '@mui/icons-material/CompareRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import OpenInBrowserRoundedIcon from '@mui/icons-material/OpenInBrowserRounded';

// Case study for https://github.com/raiden-56/cms-portal (Meridian – a headless content platform: content modelling,
// visual page builder, publishing workflow and REST/GraphQL/webhook/WebSocket delivery). Screenshots are from the
// GitHub Pages copy at https://raiden-56.github.io/cms-portal/, captured headless at 1440×770 with puppeteer-core in
// the light colour scheme. That build is guest-only: it opens straight into the admin as “Guest”, the administrator
// of the sample Acme Studio organization, and a demo backend inside the browser (apps/admin/src/demo) answers every
// management and delivery API call, with changes kept in IndexedDB. Seed dates are relative to the day you visit,
// so the “days ago” labels drift. No sign-in, password or account was involved. Each run started from fresh demo
// data; the script only opened dialogs and drawers, selected a page block, compared two versions, validated a
// release, created a temporary key in the API explorer and sent one GET request to the in-browser delivery API.
// Nothing was published or saved, and nothing left the browser. The script waits for toasts to close by themselves.
const shot = (file) => `/projects/cms-portal/${file}`;

export default {
  product: 'Meridian',
  accent: '#1F6F5C',
  tagline:
    'A headless content platform: model content without code, build pages from blocks, review and publish with versions, schedules and releases, and deliver everything to any website or app through REST, GraphQL, webhooks and WebSockets.',
  cover: shot('04-page-builder.webp'),
  overview: [
    'Meridian is a headless CMS with its own content studio. A developer or content lead defines content types, reusable components and dynamic zones from 34 field types, and every change to that schema is shown as a plan before it is applied, with confirmation required for anything that would discard data. Editors write in a generated form with rich text, autosave, locales, comments and a version history they can compare and restore. Pages are entries too, built in a three-panel page builder from 25 built-in blocks plus your own components. Content moves from Draft through In review and Approved to Published, can be scheduled, or can go live as an all-or-nothing release. Websites and apps then read it through generated REST and GraphQL endpoints with filtering, sorting, relation population and locales, a TypeScript SDK, signed webhooks and WebSocket events. Everything sits inside organizations → projects → environments (development, staging, production), and nine system roles plus custom roles decide what each person can do.',
    'It is an npm-workspaces monorepo. apps/api is an Express 5 + Prisma 6 API on PostgreSQL 17 (29 models, entry values in JSONB) with Redis and BullMQ for caching, the scheduler and webhook retries, sharp for on-the-fly image variants and local or S3 storage. apps/admin is a React 19 + MUI 7 studio of 30 screens, and packages/shared holds the field catalogue, validation, block model, workflow and permissions used by both. The codebase records 60 API integration tests against real PostgreSQL and Redis, 77 unit tests, 62 Playwright tests and 51 guest-mode browser tests. DEVELOPMENT_PROGRESS.md is upfront about what is missing: MFA, password reset and any email sending (invitation links are copied by hand), custom multi-stage workflows, a plugin system, AI features, signed URLs for private files, per-field role overrides, promoting entries between environments and CDN purge adapters. The Pages copy is a guest-only demo: an in-browser backend ports the API’s rules and keeps changes in IndexedDB, webhook deliveries are simulated and labelled so, and GraphQL, sign-in, invitations and password changes need the server.',
  ],
  highlights: [
    { value: 34, label: 'Field types' },
    { value: 25, label: 'Built-in page blocks' },
    { value: 9, label: 'System roles' },
    { value: 30, label: 'Admin screens' },
  ],
  stack: [
    'React 19',
    'TypeScript 5.9',
    'Vite 7',
    'Material UI 7',
    'TanStack Query',
    'Redux Toolkit',
    'React Router 7',
    'React Hook Form + Zod',
    'TipTap 3',
    'dnd-kit',
    'CodeMirror',
    'Recharts',
    'Express 5',
    'Prisma 6',
    'PostgreSQL 17 (JSONB)',
    'Redis 7 + BullMQ',
    'GraphQL',
    'WebSockets (ws)',
    'sharp',
    'S3-compatible storage',
    'Vitest + Playwright',
    'Docker Compose',
    'GitHub Actions',
  ],
  architecture: [
    { title: 'apps/api', text: 'One Express process with three separately mounted surfaces: the management API for the admin (JWT plus httpOnly refresh cookie), the delivery API for apps (hashed API keys) and media delivery. Every management route resolves its organization, project or environment through a scope guard, so another tenant’s id simply returns 404.' },
    { title: 'Publishing engine', text: 'Each entry keeps a working copy and a published snapshot. The delivery API reads only the snapshot, so drafts cannot leak; publishing bumps a per-environment cache version in Redis, queues signed webhooks in BullMQ and broadcasts a WebSocket event. Saves carry a lock version, and a mismatch returns 409 with who saved in between.' },
    { title: 'packages/shared', text: 'The 34-field catalogue, entry validation, rich-text sanitising, the 25 block definitions, the workflow state machine and the permission keys. The same validateEntryData runs in the browser form and on the server, and the same permissions hide buttons and refuse requests.' },
    { title: 'apps/admin/src/demo', text: 'The GitHub Pages build swaps the network for an in-browser router that answers every management and delivery call with the API’s rules ported over (validation on publish, approval before publish, optimistic locking, last-administrator protection), seeded with a lived-in Acme Studio and stored in IndexedDB.' },
  ],

  why: {
    intro:
      'Content teams want to change a website without filing a ticket, and developers want content as clean data they can render in Next.js, a mobile app or anything else. Meridian is the place a marketing or editorial team works every day (writing articles, building landing pages, reviewing each other’s work, scheduling launches) while developers model the content once and read it from an API that never shows a draft.',
    points: [
      {
        icon: SchemaRoundedIcon,
        title: 'A content model you can change safely',
        text: 'Saving a content type first shows exactly what will change and how many entries are affected. Renames keep their data, removing a field that holds values needs confirmation, and each environment has its own model to try changes in first.',
      },
      {
        icon: WebRoundedIcon,
        title: 'Pages stored as data, not markup',
        text: 'A page is a tree of typed blocks with props and style. The admin canvas is just one renderer; each website maps block types to its own components, so the same page can feed a Next.js site and an app.',
      },
      {
        icon: FactCheckRoundedIcon,
        title: 'Nothing goes live by accident',
        text: 'Content types can require approval, editing approved content sends it back for review, releases publish all their entries or none, and the delivery API reads only published snapshots.',
      },
      {
        icon: CompareRoundedIcon,
        title: 'How it differs',
        text: 'Layora and FlowPilot in this portfolio are single-user builders that keep work in the browser and export HTML or run a workflow. Meridian is a multi-user server product: it stores content, not output, and serves it to other apps with roles, approvals, versions and environments. Unlike headless CMSs that stop at structured entries, its pages are entries too, built visually yet delivered as framework-neutral JSON.',
      },
    ],
    audience: [
      { title: 'Editors and authors', text: 'Write articles, products and FAQs in a generated form with rich text, autosave and translations, then submit them for review.' },
      { title: 'Reviewers and publishers', text: 'Work through the review queue, approve or request changes, and schedule entries or whole releases.' },
      { title: 'Frontend and app developers', text: 'Model content, create scoped API keys, explore the REST API, copy SDK code for eight frameworks and wire webhooks to rebuilds.' },
      { title: 'Organization administrators', text: 'Invite members, assign one of nine roles or a custom one, manage projects, locales and environments, and read the audit log.' },
    ],
  },

  solves: [
    {
      problem: 'Every new kind of content needs a developer and a database migration.',
      solution: 'Content types are built in the admin from 34 field types with validation, layout (width, group, tab) and conditional visibility, and each type gets its form, list and REST and GraphQL endpoints at once.',
    },
    {
      problem: 'Changing a schema can quietly destroy existing content.',
      solution: 'A planner diffs the new fields against the old, detects renames by field id, blocks unsafe changes such as making a field unique while duplicates exist, and asks before anything discards values. It all runs in one transaction.',
    },
    {
      problem: 'Marketing waits on developers for every landing page.',
      solution: 'A drag-and-drop page builder with 25 blocks (hero, feature grid, pricing, FAQ, listings, navigation and more), custom components as blocks, style and SEO panels, undo/redo and desktop, tablet and phone previews.',
    },
    {
      problem: 'Unreviewed or half-finished drafts end up on the live site.',
      solution: 'The working copy and the published snapshot are separate columns, publish needs approval where the content type requires it, and preview or read/write keys are refused from browser origins not on their allow-list.',
    },
    {
      problem: 'A launch needs several pages and posts to go live at the same moment.',
      solution: 'Releases group entries to publish or unpublish, validate them, and publish them in one database transaction, now or at a scheduled time. Single entries can also be scheduled to publish and to unpublish.',
    },
    {
      problem: 'Nobody can tell what changed or undo a bad edit.',
      solution: 'Every save is a version (autosaves within ten minutes fold into one), any two versions can be compared field by field, restore writes a new version, and the audit log records before and after values with CSV export.',
    },
    {
      problem: 'Two people editing the same entry overwrite each other.',
      solution: 'Each save presents the version it loaded; if someone saved in between, the server returns a conflict naming them and the editor asks whether to load their version or keep yours.',
    },
    {
      problem: 'Websites show stale content after a publish.',
      solution: 'Publishing invalidates the Redis cache for that environment, responses carry ETags, signed webhooks with retries tell frameworks and CDNs to revalidate, and WebSocket clients get the event live.',
    },
  ],

  features: [
    { icon: DashboardRoundedIcon, title: 'Dashboard', text: 'Counts of entries, pages, published, drafts, scheduled and pending approvals, media and storage, connected apps and API traffic, with publishing and API charts, review and activity lists and a layout each person can reorder and save.' },
    { icon: SchemaRoundedIcon, title: 'Content-type builder', text: 'Collection or single types, 34 field types in eight groups, drag to reorder, a live form preview, settings, an API tab and history, plus a dry-run plan before every schema save.' },
    { icon: ExtensionRoundedIcon, title: 'Components and dynamic zones', text: 'Reusable field groups used as a single component, a repeatable list or options in a dynamic zone with allowed components and min/max, and optionally offered as page-builder blocks.' },
    { icon: EditNoteRoundedIcon, title: 'Entry editor', text: 'One form renderer for every type with tabs, a TipTap rich-text editor, autosave, Ctrl/⌘ S revisions, a status panel with publish, schedule, review and unpublish, assignees, comments and activity.' },
    { icon: WebRoundedIcon, title: 'Visual page builder', text: 'Block palette and outline, canvas with nested sections and columns, an inspector for content and style, page settings and SEO with a search preview, five page templates, undo/redo and device preview.' },
    { icon: FactCheckRoundedIcon, title: 'Review workflow', text: 'Draft, In review, Changes requested, Approved, Scheduled, Published and Archived, with a review queue, per-type approval rules and the permission each transition needs.' },
    { icon: HistoryRoundedIcon, title: 'Versions and history', text: 'Per-entry versions with view, compare-two and compare-with-current, restore as a new version, and an environment-wide Version History screen filtered by published, saved and restored.' },
    { icon: RocketLaunchRoundedIcon, title: 'Releases', text: 'Group entries to publish or unpublish, validate them, then publish atomically or schedule; open, scheduled, published and failed states are tracked.' },
    { icon: EventRoundedIcon, title: 'Scheduled content', text: 'An agenda of upcoming publishes and unpublishes by day in your timezone, with publish now, reschedule and cancel, and scheduled releases alongside.' },
    { icon: PhotoLibraryRoundedIcon, title: 'Media library', text: 'Drag-and-drop uploads checked by file content, folders, tags, unused filter, duplicate detection, alt text and captions, where-used tracking, replace in place and on-the-fly image transforms.' },
    { icon: TranslateRoundedIcon, title: 'Locales', text: 'Localized types and fields, a fallback per locale, and translations that each have their own status, history and publish, delivered per locale through the API.' },
    { icon: ApiRoundedIcon, title: 'Delivery API and explorer', text: 'Generated REST with filter, sort, search, populate, fields, locale and rich text as HTML, GraphQL and OpenAPI 3.1, explored in the admin with temporary keys, copy as cURL and an endpoint reference.' },
    { icon: KeyRoundedIcon, title: 'API keys', text: 'Read-only, preview and read/write keys per environment, shown once and stored as a hash, with allowed origins, expiry, rate limits, rotation and revocation.' },
    { icon: HubRoundedIcon, title: 'Integrations and SDK', text: 'A wizard and SDK docs for Next.js, React, Vue, Angular, React Native, Flutter, Node and cURL; @meridian/sdk adds caching with ETag revalidation, retries, a browser key guard and webhook signature checks.' },
    { icon: WebhookRoundedIcon, title: 'Webhooks and live events', text: '13 event types, HMAC-signed deliveries with retries and backoff, a delivery log with redelivery, private-address protection, and WebSocket events per environment.' },
    { icon: AccountTreeRoundedIcon, title: 'Multi-tenancy', text: 'Organizations hold projects, projects hold development, staging and production environments, each with its own content model and content, switched from the sidebar and top bar.' },
    { icon: AdminPanelSettingsRoundedIcon, title: 'Roles and members', text: 'Nine system roles from Organization Administrator to Viewer, custom roles from 23 permissions, invitations, suspension, and protection against escalation or removing the last administrator.' },
    { icon: ReceiptLongRoundedIcon, title: 'Audit log and analytics', text: 'Every change with who, what, when and before/after values, filterable and exportable to CSV, plus usage analytics of delivery requests, errors and latency.' },
  ],

  steps: [
    { icon: OpenInBrowserRoundedIcon, title: 'Open the demo', text: 'Visit the live site. It opens straight into guest mode as the administrator of Acme Studio’s Acme Website project; your changes stay in this browser, and Reset demo data starts over.' },
    { icon: SchemaRoundedIcon, title: 'Look at the model', text: 'In Content Types, open Articles to see its 14 fields. Add field opens the catalogue of 34 types; Review and save shows the change plan before anything is applied.' },
    { icon: EditNoteRoundedIcon, title: 'Edit an entry', text: 'In Content → Articles, open an article, change the text and watch autosave. A Modified entry keeps its last published version live until you publish again.' },
    { icon: FactCheckRoundedIcon, title: 'Review and publish', text: 'Articles need approval, so press Submit for review. In Workflows, Approve it or Request changes, then publish it from the editor.' },
    { icon: WebRoundedIcon, title: 'Build a page', text: 'In Pages, open Home. Drag blocks from the palette onto the canvas, select one to edit its content and style, switch device previews, then Publish changes.' },
    { icon: RocketLaunchRoundedIcon, title: 'Ship a release', text: 'In Releases, open Spring launch, press Validate, then publish both entries at once or schedule them. Scheduled Content shows what goes live next.' },
    { icon: ApiRoundedIcon, title: 'Read it through the API', text: 'In API Explorer, create a temporary key, pick GET /articles, add sort or populate and press Send. Only published content comes back.' },
    { icon: TerminalRoundedIcon, title: 'Beyond the demo', text: 'The full version runs the API with PostgreSQL and Redis beside the admin: sign-in and invitations, GraphQL, real webhooks and WebSocket updates, which guest mode only simulates.' },
  ],
  shortcuts: [
    { keys: ['Ctrl / ⌘', 'K'], action: 'Open the search and command palette' },
    { keys: ['↑', '↓', 'Enter'], action: 'Move through and open command palette results' },
    { keys: ['Ctrl / ⌘', 'S'], action: 'Save (entry editor and page builder)' },
    { keys: ['Ctrl / ⌘', 'Enter'], action: 'Publish the open entry, or send a comment' },
    { keys: ['Ctrl / ⌘', 'Z'], action: 'Undo in the page builder' },
    { keys: ['Ctrl / ⌘', 'Shift', 'Z'], action: 'Redo in the page builder' },
    { keys: ['Ctrl / ⌘', 'Y'], action: 'Redo (alternative)' },
    { keys: ['Ctrl / ⌘', 'D'], action: 'Duplicate the selected block' },
    { keys: ['Delete / ⌫'], action: 'Remove the selected block' },
    { keys: ['Alt', '↑ / ↓'], action: 'Move the selected block up or down' },
    { keys: ['↑ / ↓'], action: 'Select the previous or next block on the canvas' },
    { keys: ['Esc'], action: 'Deselect the block' },
  ],

  screenshots: [
    {
      src: shot('01-dashboard.webp'),
      icon: DashboardRoundedIcon,
      title: 'Dashboard',
      text: 'Acme Website in production: quick-create buttons, then 24 entries across six content types, 6 pages, 20 published, 10 drafts, 2 scheduled and 1 pending approval, 13 media files, 2 connected apps and the last day’s API requests and errors, above the publishing-activity chart and content by type.',
    },
    {
      src: shot('02-content-type-builder.webp'),
      icon: SchemaRoundedIcon,
      title: 'Adding a field',
      text: 'The Articles content type with its Add a field catalogue open: text, numbers, choice, date and media groups (short and long text, rich text, Markdown, number, decimal, rating, select, radio, date and time, images, video) out of 34 field types in all.',
    },
    {
      src: shot('03-entry-editor.webp'),
      icon: EditNoteRoundedIcon,
      title: 'Entry editor',
      text: 'An article marked Modified: it has been live since 7 November, and the newer headline is saved but not public. Articles need approval, so the status panel offers Submit for review instead of Publish, beside the locale, assignee, cover image and rich-text editor.',
    },
    {
      src: shot('04-page-builder.webp'),
      icon: WebRoundedIcon,
      title: 'Page builder',
      text: 'The Home page with the Hero block selected: the block palette on the left, the canvas with a custom Promo banner component above the hero, and the inspector on the right with eyebrow, heading, subheading, image and layout, next to undo/redo and desktop, tablet and phone previews.',
    },
    {
      src: shot('05-review-queue.webp'),
      icon: FactCheckRoundedIcon,
      title: 'Review queue',
      text: 'Writer → Reviewer → Publisher. “Our approach to accessible color” waits in review for Hannah Weiss with Approve and Request changes, and the approval rules below show Articles must be approved before publishing while Pages and Authors can be published directly.',
    },
    {
      src: shot('06-version-compare.webp'),
      icon: HistoryRoundedIcon,
      title: 'Comparing versions',
      text: 'Versions 2 and 3 of the same article selected in the Versions panel and compared field by field: only the title changed, from the live published version 2 to the saved version 3 with its note “Tightened the headline”.',
    },
    {
      src: shot('07-release.webp'),
      icon: RocketLaunchRoundedIcon,
      title: 'Validated release',
      text: 'The Spring launch release after Validate: the approved hiring announcement and the draft Pricing page both pass, ready to publish together in one transaction or to be scheduled.',
    },
    {
      src: shot('08-media-library.webp'),
      icon: PhotoLibraryRoundedIcon,
      title: 'Media library',
      text: '13 files in four folders with storage by type, and the details drawer for product-bottle.svg: preview, copy URL, download, replace file, a file name whose extension must match the content, and alt text delivered with every reference.',
    },
    {
      src: shot('09-api-explorer.webp'),
      icon: ApiRoundedIcon,
      title: 'API explorer',
      text: 'GET /articles sent with a temporary read-only key, sorted by publish date with the author populated: HTTP 200 in 47 ms. The first article comes back with its published title, without the “(updated)” draft headline from the editor.',
    },
    {
      src: shot('10-roles.webp'),
      icon: LockRoundedIcon,
      title: 'Roles & permissions',
      text: 'The nine system roles with their permission counts and members. Author has 7 of 23 permissions (read projects, the content model, content and media, create and edit entries and upload media, but no publishing or organization rights), and any system role can be duplicated as a custom role.',
    },
  ],
};
