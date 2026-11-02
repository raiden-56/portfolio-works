import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import GestureRoundedIcon from '@mui/icons-material/GestureRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import ViewKanbanRoundedIcon from '@mui/icons-material/ViewKanbanRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import ViewModuleRoundedIcon from '@mui/icons-material/ViewModuleRounded';
import SyncRoundedIcon from '@mui/icons-material/SyncRounded';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';

// Case study for https://github.com/raiden-56/collabspace (CollabSpace — real-time collaboration studio).
// Screenshots are from the GitHub Pages demo at https://raiden-56.github.io/collabspace/ — a static export
// of the Next.js web app in guest mode ("Continue as guest" on the sign-in page), where every API call is
// answered in the browser from sample data. Real-time multi-user sync, sign-in and the AI provider need the
// API and sync services, which are not hosted there.
const shot = (file) => `/projects/collabspace/${file}`;

export default {
  product: 'CollabSpace',
  accent: '#5b8cff',
  tagline:
    'A real-time collaboration studio — infinite canvas, collaborative documents, tasks, meetings with AI summaries and team chat in one workspace, kept in sync with Yjs.',
  cover: shot('02-canvas-brainstorm.webp'),
  overview: [
    'CollabSpace brings the tools a product team usually spreads across a whiteboard app, a docs app, a task tracker and a chat app into one workspace. An infinite canvas with sticky notes, shapes, connectors, frames and diagram nodes sits next to Tiptap documents with slash commands, mentions and inline comments, projects with list, board and timeline views, a calendar, meetings with agendas and AI-drafted summaries, channels and direct messages, files, analytics and automation rules — and canvas notes, document checklist items and meeting action items can all be turned into tasks.',
    'It is a pnpm monorepo: a Next.js 16 web app, an Express 5 REST API with OpenAPI docs, a dedicated WebSocket service that hosts one Yjs document per canvas or document, PostgreSQL through Prisma, and optional Redis, S3 storage and SMTP. Permissions are a single shared engine used by both the API and the sync service. The public demo is a static GitHub Pages build in guest mode: it explores a sample workspace whose API is answered in the browser, so edits stay in that tab, there are no other live users, and the “AI” summaries and assistant replies are rule-based stand-ins rather than a model.',
  ],
  highlights: [
    { value: 18, label: 'Canvas tools' },
    { value: 29, label: 'Ready-made templates' },
    { value: 13, label: 'Slash commands' },
    { value: 56, label: 'Database models' },
  ],
  stack: [
    'Next.js 16',
    'React 19',
    'TypeScript',
    'Tailwind CSS',
    'Radix UI',
    'Tiptap',
    'Konva',
    'Yjs',
    'dnd-kit',
    'Zustand',
    'TanStack Query',
    'Zod',
    'Express 5',
    'Prisma',
    'PostgreSQL',
    'Redis',
    'Vitest',
    'Playwright',
  ],
  architecture: [
    { title: 'apps/web', text: 'Next.js App Router frontend: marketing site, app shell, Konva canvas, Tiptap editor, tasks, meetings, chat — plus the in-browser guest-mode API.' },
    { title: 'apps/api', text: 'Express REST API with OpenAPI docs, Argon2id session auth, sharing, search, an AI job worker with retries and the automation engine.' },
    { title: 'apps/sync', text: 'WebSocket service hosting Yjs rooms per canvas/document plus typed app events (presence, chat, notifications), fanned out through Redis.' },
    { title: 'packages/shared', text: 'Zod schemas, the permission engine, the realtime event protocol, the canvas object model, task dependency logic and all templates.' },
  ],

  why: {
    intro:
      'Ideas start on a whiteboard, get written up in a doc, become tasks in a tracker and get discussed in chat — and the context is lost at every hop. CollabSpace keeps the canvas, the documents, the tasks and the conversation in one workspace where they link to each other and update live.',
    points: [
      {
        icon: HubRoundedIcon,
        title: 'One connected workspace',
        text: 'Canvases, documents, tasks, meetings, chat and files share projects, search, comments and notifications instead of living in four separate tools.',
      },
      {
        icon: SyncRoundedIcon,
        title: 'Built for live editing',
        text: 'Every canvas and document is a Yjs CRDT, so concurrent edits merge per property, cursors and selections are shared, and offline edits resync.',
      },
      {
        icon: TaskAltRoundedIcon,
        title: 'From idea to task',
        text: 'A sticky note, a document checklist item, a comment thread or a meeting action item can be converted into a real task with a link back to where it came from.',
      },
      {
        icon: ShieldRoundedIcon,
        title: 'Access you can reason about',
        text: 'Workspace roles, project membership, visibility, explicit grants and share links are resolved by one shared function, used by both the REST API and the WebSocket server.',
      },
    ],
    audience: [
      { title: 'Product & engineering teams', text: 'Brainstorm, write the design doc, plan the sprint and run the weekly sync in one place.' },
      { title: 'Designers & researchers', text: 'Journey maps, flowcharts and research boards on a canvas that links to the documents and tasks behind them.' },
      { title: 'Team leads', text: 'Boards with WIP limits, timelines with dependencies and milestones, and analytics on workload and progress.' },
      { title: 'Full-stack learners', text: 'A complete reference for CRDT sync, permission engines, WebSocket auth and a monorepo with shared schemas.' },
    ],
  },

  solves: [
    {
      problem: 'Whiteboards are disconnected from the actual work.',
      solution: 'An infinite canvas with 16 object types — including task cards and document cards that link to live workspace records.',
    },
    {
      problem: 'Two people editing at once overwrite each other.',
      solution: 'Yjs documents synced over WebSockets; canvas objects are flat property maps so concurrent edits merge per key.',
    },
    {
      problem: 'Specs and notes drift away from the board.',
      solution: 'Collaborative Tiptap documents with 13 slash commands, @mentions, tables, code blocks, checklists and inline comment threads.',
    },
    {
      problem: 'Planning lives in a separate tracker.',
      solution: 'Projects with list, board and timeline views, a calendar, subtasks, labels, WIP limits and dependency checks that reject cycles.',
    },
    {
      problem: 'Meeting outcomes get lost after the call.',
      solution: 'Meetings with agendas, collaborative notes, decisions and AI-drafted summaries whose action items stay drafts until a person converts them.',
    },
    {
      problem: 'Sharing is all-or-nothing.',
      solution: 'Viewer / commenter / editor grants and share links with expiry, revocation and optional sign-in; read-only clients’ updates are dropped server-side.',
    },
    {
      problem: 'Mistakes on a shared board are hard to undo.',
      solution: 'Automatic versions every 10 minutes plus named checkpoints; restoring writes the old state into the live document so every client converges.',
    },
    {
      problem: 'Every new board starts from blank.',
      solution: '29 templates — 12 canvases, 10 documents and 7 projects with tasks, labels and dependencies — instantiated as real, editable content.',
    },
  ],

  features: [
    { icon: GestureRoundedIcon, title: 'Infinite canvas', text: '18 tools: sticky notes, text, shapes, lines, arrow connectors, freehand pen, images, files, comment pins, embeds, frames and diagram nodes.' },
    { icon: AccountTreeRoundedIcon, title: 'Diagrams & layout', text: 'Connectors that stay attached to objects, six diagram node shapes, align, distribute, auto-arrange, grouping, locking, snap-to-grid and a minimap.' },
    { icon: SyncRoundedIcon, title: 'Real-time collaboration', text: 'One Yjs document per canvas or document, live cursors and selections, connection status and an IndexedDB copy for offline edits.' },
    { icon: DescriptionRoundedIcon, title: 'Collaborative documents', text: 'Tiptap editor with slash commands, @mentions, tables, syntax-highlighted code, checklists, collaborative carets and a focus mode.' },
    { icon: CommentRoundedIcon, title: 'Comments everywhere', text: 'Threaded comments on documents, canvases, tasks and projects, with reactions, resolve and convert-to-task.' },
    { icon: ViewKanbanRoundedIcon, title: 'Tasks & boards', text: 'List, Kanban board (drag and drop with WIP limits), My tasks and bulk actions, with filters, labels, priorities and subtasks.' },
    { icon: TimelineRoundedIcon, title: 'Timeline & dependencies', text: 'Per-project Gantt-style timeline with date ranges, milestones and blocking dependencies; cycles are rejected.' },
    { icon: CalendarMonthRoundedIcon, title: 'Calendar', text: 'Month, week and agenda views of tasks, meetings, milestones and events, with drag-to-reschedule.' },
    { icon: EventNoteRoundedIcon, title: 'Meetings & AI summaries', text: 'Agendas, participants and RSVPs, collaborative notes, decisions, transcripts and a recap with topics, decisions, open questions and draft action items.' },
    { icon: AutoAwesomeRoundedIcon, title: 'AI assistant', text: 'A workspace assistant (Ctrl/Cmd+J) behind a provider adapter — Anthropic, offline mock or disabled — whose proposed actions need confirmation.' },
    { icon: ForumRoundedIcon, title: 'Team chat', text: 'Public, private, project, direct and group channels with threads, mentions, reactions, typing indicators and unread counts.' },
    { icon: ShareRoundedIcon, title: 'Sharing & permissions', text: 'Workspace roles, private projects, explicit grants and expiring share links, enforced identically over REST and WebSocket.' },
    { icon: BoltRoundedIcon, title: 'Automation rules', text: 'Six triggers and five action types, with approvals for consequential actions, loop prevention and retries.' },
    { icon: SearchRoundedIcon, title: 'Search & command palette', text: 'Workspace-wide search across every resource type, a Ctrl/Cmd+K palette and “G then …” navigation chords.' },
  ],

  steps: [
    { icon: LoginRoundedIcon, title: 'Enter the demo', text: 'Open the live demo, press Sign in, then Continue as guest. You land in “Product Team (Demo)” — sample data that stays in this browser tab.' },
    { icon: DashboardRoundedIcon, title: 'Look around the workspace', text: 'The overview lists projects, recent documents and canvases, your tasks, upcoming meetings and activity. Ctrl/Cmd+K opens the command palette.' },
    { icon: GestureRoundedIcon, title: 'Open a canvas', text: 'Canvases → Feature brainstorm. Pick a tool from the left toolbar (N for sticky note, A for arrow, F for frame) and click on the board; Shift+1 zooms to fit.' },
    { icon: DescriptionRoundedIcon, title: 'Write in a document', text: 'Documents → Realtime sync design doc. Type / for blocks, @ to mention someone, and select text then Ctrl/Cmd+Shift+M to comment.' },
    { icon: ViewKanbanRoundedIcon, title: 'Plan the work', text: 'Open a project’s board and drag cards between columns, or switch Tasks to Timeline and pick a project to see dependencies and milestones.' },
    { icon: EventNoteRoundedIcon, title: 'Review a meeting', text: 'Meetings → Weekly product sync → AI summary shows the recap, decisions and open questions; Action items lets you convert drafts into tasks.' },
    { icon: ForumRoundedIcon, title: 'Chat with the team', text: 'Team chat has channels, project channels and direct messages. Post a message, reply in a thread or react with an emoji.' },
    { icon: AutoAwesomeRoundedIcon, title: 'Ask the assistant', text: 'Press Ctrl/Cmd+J and ask “Which tasks are overdue?”. In the demo it answers from the sample data with simple rules, not a real model.' },
  ],
  shortcuts: [
    { keys: ['Ctrl', 'K'], action: 'Command palette' },
    { keys: ['?'], action: 'Keyboard shortcuts' },
    { keys: ['Ctrl', 'J'], action: 'Toggle AI assistant' },
    { keys: ['Ctrl', '/'], action: 'Toggle sidebar' },
    { keys: ['G', 'H'], action: 'Go to home (G, then H)' },
    { keys: ['G', 'I'], action: 'Go to inbox (G, then I)' },
    { keys: ['V'], action: 'Canvas: select tool' },
    { keys: ['N'], action: 'Canvas: sticky note' },
    { keys: ['A'], action: 'Canvas: arrow connector' },
    { keys: ['F'], action: 'Canvas: frame' },
    { keys: ['Shift', '1'], action: 'Canvas: zoom to fit' },
    { keys: ['Ctrl', 'Z'], action: 'Canvas: undo' },
    { keys: ['Ctrl', 'Shift', 'Z'], action: 'Canvas: redo' },
    { keys: ['Ctrl', 'D'], action: 'Canvas: duplicate' },
    { keys: ['Ctrl', 'G'], action: 'Canvas: group' },
    { keys: ['Ctrl', 'L'], action: 'Canvas: lock / unlock' },
    { keys: ['Ctrl', 'Shift', 'M'], action: 'Document: comment on selection' },
    { keys: ['Ctrl', 'Shift', 'F'], action: 'Document: focus mode' },
  ],

  screenshots: [
    {
      src: shot('01-workspace-overview.webp'),
      icon: DashboardRoundedIcon,
      title: 'Workspace overview',
      text: 'The guest-mode demo workspace: active projects with task counts and due dates, recent documents and canvases, my tasks, upcoming meetings and team activity. The amber chip is a reminder that it’s sample data.',
    },
    {
      src: shot('02-canvas-brainstorm.webp'),
      icon: GestureRoundedIcon,
      title: 'Brainstorm on the canvas',
      text: 'A brainstorm board with four frames — ideas, questions, build-on-this and a parking lot — full of sticky notes. The vertical toolbar holds the 18 canvas tools; the minimap and zoom bar sit bottom right.',
    },
    {
      src: shot('03-canvas-diagram.webp'),
      icon: AccountTreeRoundedIcon,
      title: 'Architecture diagram',
      text: 'The same canvas as a diagramming tool: diagram nodes (including cylinder-shaped data stores) grouped in frames and joined by labelled connectors that stay attached when nodes move.',
    },
    {
      src: shot('04-document-editor.webp'),
      icon: DescriptionRoundedIcon,
      title: 'Collaborative document',
      text: 'A design doc in the Tiptap editor with headings, lists and @mentions of teammates. The toolbar covers formatting, alignment, links, tables, code and comments; edits sync through Yjs when the backend is running.',
    },
    {
      src: shot('05-kanban-board.webp'),
      icon: ViewKanbanRoundedIcon,
      title: 'Project Kanban board',
      text: 'The launch project’s board: cards with keys, labels, priorities, assignees, due dates and subtask counts, a WIP limit on In Progress, and filters for status, assignee, priority and label.',
    },
    {
      src: shot('06-timeline.webp'),
      icon: TimelineRoundedIcon,
      title: 'Timeline with dependencies',
      text: 'The project timeline draws each task’s date range on a Gantt-style chart, with dependency arrows between tasks, a milestone marker and today’s line.',
    },
    {
      src: shot('07-meeting-summary.webp'),
      icon: EventNoteRoundedIcon,
      title: 'Meeting with AI summary',
      text: 'A completed weekly sync: the recap, discussion by topic, proposed decisions and open questions, next to the agenda, participants with RSVP status and recorded decisions. In the demo the summary is canned sample output.',
    },
    {
      src: shot('08-team-chat.webp'),
      icon: ForumRoundedIcon,
      title: 'Team chat',
      text: 'Channels, a project channel and direct or group messages on the left; the #general conversation with mentions, emoji reactions and day separators on the right.',
    },
    {
      src: shot('09-ai-assistant.webp'),
      icon: AutoAwesomeRoundedIcon,
      title: 'Workspace assistant',
      text: 'Ctrl/Cmd+J opens the assistant panel. Asked which tasks are overdue, it lists them with keys and owners. In guest mode it answers from the sample data with simple rules instead of a model.',
    },
    {
      src: shot('10-templates.webp'),
      icon: ViewModuleRoundedIcon,
      title: 'Template gallery',
      text: 'Canvas, document and project templates with categories, tags and object counts. Use template creates real, editable content — not a screenshot.',
    },
  ],
};
