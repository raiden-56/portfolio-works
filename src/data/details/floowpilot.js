import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ViewModuleRoundedIcon from '@mui/icons-material/ViewModuleRounded';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import FunctionsRoundedIcon from '@mui/icons-material/FunctionsRounded';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import BugReportRoundedIcon from '@mui/icons-material/BugReportRounded';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import PendingActionsRoundedIcon from '@mui/icons-material/PendingActionsRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import ImportExportRoundedIcon from '@mui/icons-material/ImportExportRounded';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import CableRoundedIcon from '@mui/icons-material/CableRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import LoopRoundedIcon from '@mui/icons-material/LoopRounded';

// Case study for https://github.com/raiden-56/flowpilot (FlowPilot AI, "Floowpilot" on the portfolio).
// Screenshots are from the live app at https://floowpilot.netlify.app — it runs fully in the browser with
// no sign-in, so they were captured by running the built-in templates there (data stays in that browser).
const shot = (file) => `/projects/floowpilot/${file}`;

export default {
  product: 'FlowPilot AI',
  accent: '#4f46e5',
  tagline:
    'A visual AI agent workflow builder — draw a flow on a canvas, map data between nodes, run it, debug it step by step and keep a human in the loop, all in the browser.',
  cover: shot('03-workflow-run.webp'),
  overview: [
    'FlowPilot AI is a visual builder for AI agent workflows: draw.io-style canvas editing, n8n-style automation and execution, and Langflow-style AI nodes in one app. You drag triggers, AI, logic, transformation, data, human-in-the-loop and reliability nodes onto a React Flow canvas, connect them, map fields between them with a draggable data tree and safe {{ }} expressions, then run the workflow and watch every node light up with its status, logs and timing.',
    'It runs entirely in the browser on a deterministic local execution engine and a mock AI provider — no account and no backend. The mock provider uses keyword heuristics: its output is deterministic and realistic for demos, but it does no real reasoning. The engine is plain, React-free TypeScript with topological scheduling, branching, bounded loops, Try/Catch and Retry scopes, retries with backoff, timeouts, pause/step debugging and rerun-from-node. Workflows, run history and approvals are kept in IndexedDB, and a server adapter is ready for real AI providers so API keys never live in the browser.',
  ],
  highlights: [
    { value: 35, label: 'Node types' },
    { value: 6, label: 'Ready-made templates' },
    { value: 39, label: 'Expression filters' },
    { value: 20, label: 'Keyboard shortcuts' },
  ],
  stack: [
    'React 18',
    'TypeScript',
    'Vite',
    'MUI',
    'Tailwind CSS',
    'React Flow',
    'Zustand',
    'Zod',
    'React Hook Form',
    'Monaco Editor',
    'dagre',
    'IndexedDB',
    'Vitest',
    'Playwright',
  ],
  architecture: [
    { title: 'src/engine', text: 'React-free workflow engine — expression parser, graph validator, scheduler, retry policies and one NodeSpec per node type.' },
    { title: 'src/features', text: 'The app: React Flow editor, node library, inspector forms, data mapping, execution panel, approvals, versions and usage.' },
    { title: 'src/providers/ai', text: 'AIProvider interface with a deterministic MockAIProvider and a ServerProxyAIProvider for real models behind your own server.' },
    { title: 'src/services', text: 'IndexedDB persistence with sanitizing, crash backups and untrusted-import validation; Zustand stores sit on top.' },
  ],

  why: {
    intro:
      'Automation tools are great at wiring APIs together, AI playgrounds are great at prompts, and diagram tools are great at drawing — but you usually need all three to build an AI agent you can trust. FlowPilot puts the canvas, the AI nodes and a real, inspectable execution engine in one browser tab.',
    points: [
      {
        icon: AccountTreeRoundedIcon,
        title: 'See the whole flow',
        text: 'Every step is a node on a canvas with typed handles and labelled branches, so the logic of an agent reads like a diagram rather than a script.',
      },
      {
        icon: VisibilityRoundedIcon,
        title: 'Nothing is a black box',
        text: 'Each run records per-node inputs, outputs, attempts, logs and timing, and you can pause before every node or rerun from any one.',
      },
      {
        icon: HowToRegRoundedIcon,
        title: 'Humans stay in charge',
        text: 'Human Approval and Manual Review nodes pause the run until someone approves, rejects or edits the data, then resume on the matching branch.',
      },
      {
        icon: ShieldRoundedIcon,
        title: 'Safe by design',
        text: 'Expressions are interpreted, never eval’d; imports are validated; secrets are redacted from logs; real AI calls go through a server so keys stay off the client.',
      },
    ],
    audience: [
      { title: 'Developers prototyping AI agents', text: 'Sketch a classifier, extractor or agent pipeline and run it end to end in minutes.' },
      { title: 'Automation builders', text: 'People who think in n8n- or Zapier-style flows and want AI steps with proper branching and retries.' },
      { title: 'Ops & support teams', text: 'Model approval-gated processes — like AI-drafted replies — before wiring them to real systems.' },
      { title: 'Teachers & learners', text: 'A hands-on way to see how scheduling, branching, loops and error handling work in a workflow engine.' },
    ],
  },

  solves: [
    {
      problem: 'AI pipelines are hard to picture in code.',
      solution: 'A canvas with 35 node types across eight categories, auto-layout, minimap, notes and sections.',
    },
    {
      problem: 'Passing data between steps is fiddly.',
      solution: 'A visual field mapper: drag fields from the upstream data tree, set defaults and type conversion, and see a live preview.',
    },
    {
      problem: 'Template strings break or become a security risk.',
      solution: 'A safe {{ }} expression language with 39 pipe filters — no eval, no function calls, no prototype access.',
    },
    {
      problem: 'When a run fails, you don’t know where or why.',
      solution: 'Per-node status on the canvas, filterable logs, a timeline, and node details with every attempt and error.',
    },
    {
      problem: 'Flaky steps take the whole workflow down.',
      solution: 'Retry policies with backoff, per-node and workflow timeouts, Try/Catch and Retry scopes, error ports and a global Error Handler.',
    },
    {
      problem: 'AI output shouldn’t go out unchecked.',
      solution: 'Approval nodes pause the run and send a request to a local Approvals inbox with editable fields and reviewer notes.',
    },
    {
      problem: 'Edits are risky without a safety net.',
      solution: 'Autosave with crash recovery, undo/redo, named and automatic version snapshots with a diff and one-click restore.',
    },
    {
      problem: 'Starting from a blank canvas is slow.',
      solution: 'Six runnable templates — support classifier, document summary, sentiment, lead scoring, data cleaning and approved email drafting.',
    },
  ],

  features: [
    { icon: AccountTreeRoundedIcon, title: 'Visual canvas editor', text: 'React Flow canvas with drag-to-connect, box-select, copy/paste, lock, align, auto-layout and a minimap.' },
    { icon: ViewModuleRoundedIcon, title: 'Node library', text: '35 searchable node types: triggers, AI, logic, data transformation, data & integrations, human, reliability and annotations.' },
    { icon: AutoAwesomeRoundedIcon, title: 'AI nodes', text: 'AI Prompt, AI Agent, LLM Chat, Text Classifier, Information Extractor and Embedding Generator, with structured JSON output schemas.' },
    { icon: CompareArrowsRoundedIcon, title: 'Visual field mapping', text: 'Drag fields from a data tree, map nested paths, set defaults and missing-value policies, convert types and preview results.' },
    { icon: FunctionsRoundedIcon, title: 'Safe expressions', text: '{{input.customer.name | upper}} templates with 39 filters, interpreted by a custom parser instead of eval.' },
    { icon: PlayCircleRoundedIcon, title: 'Execution engine', text: 'Deterministic topological scheduling, branching and joins, bounded loops, cancellation and per-node timeouts.' },
    { icon: ReplayRoundedIcon, title: 'Retries & error handling', text: 'Retry with backoff (max 10 attempts), Try/Catch and Retry scopes, continue-on-error, error ports and a global Error Handler.' },
    { icon: BugReportRoundedIcon, title: 'Step-through debugging', text: 'Debug mode pauses before every node; test a single node, rerun from a node or retry the failed one.' },
    { icon: TimelineRoundedIcon, title: 'Logs, timeline & history', text: 'Live logs with level and node filters, a run timeline, results, problems and a stored history of the latest 200 runs.' },
    { icon: PendingActionsRoundedIcon, title: 'Human-in-the-loop', text: 'Human Approval and Manual Review nodes with a local Approvals inbox, editable fields and approve / reject branches.' },
    { icon: HistoryRoundedIcon, title: 'Versions & autosave', text: 'Autosave, undo/redo, crash-recovery backups and named or automatic snapshots with a diff and restore.' },
    { icon: QueryStatsRoundedIcon, title: 'Usage & cost tracking', text: 'Tokens, latency and estimated cost per model and node from locally configured prices, clearly labelled as simulated.' },
    { icon: ImportExportRoundedIcon, title: 'Import & export', text: 'Export workflows, executions and logs; imports are size-limited, schema-validated and never run on import.' },
    { icon: ExtensionRoundedIcon, title: 'Pluggable AI providers', text: 'A deterministic mock provider by default, or a server adapter that calls real models from your own backend.' },
  ],

  steps: [
    { icon: DashboardRoundedIcon, title: 'Open the dashboard', text: 'Open the app — no sign-in. The dashboard shows your workflows, recent runs, pending approvals and usage, all stored in this browser.' },
    { icon: ViewModuleRoundedIcon, title: 'Start from a template', text: 'Dashboard → Browse templates → Use template, for example “Human-approved email drafting”. Or press New workflow and Add Manual Trigger.' },
    { icon: AddCircleRoundedIcon, title: 'Add nodes', text: 'Search the node library (press N) and click or drag a node onto the canvas. Shift+L tidies the layout.' },
    { icon: CableRoundedIcon, title: 'Connect them', text: 'Drag from one node’s output handle to the next node’s input. Branching nodes have one labelled handle per branch.' },
    { icon: TuneRoundedIcon, title: 'Configure and map data', text: 'Click a node to open the inspector. Fill in its form, or open Visual mapper and drag fields from the data tree into the inputs.' },
    { icon: PlayCircleRoundedIcon, title: 'Run it', text: 'Press Run (Ctrl/Cmd+Enter). Nodes change colour as they run; the execution panel shows logs, timeline, result and usage.' },
    { icon: BugReportRoundedIcon, title: 'Debug and harden', text: 'Use Debug to step node by node. On an AI or HTTP node, Simulate failure and add a retry policy to see retries in the logs.' },
    { icon: HowToRegRoundedIcon, title: 'Approve and save', text: 'When a run waits for approval, open the inbox icon, approve or reject, and the run resumes. Ctrl/Cmd+S saves; the clock icon opens version history.' },
  ],
  shortcuts: [
    { keys: ['Ctrl', 'Enter'], action: 'Run workflow' },
    { keys: ['Ctrl', 'Shift', 'Enter'], action: 'Step-through debug' },
    { keys: ['Ctrl', 'S'], action: 'Save' },
    { keys: ['Ctrl', 'Z'], action: 'Undo' },
    { keys: ['Ctrl', 'Shift', 'Z'], action: 'Redo' },
    { keys: ['Ctrl', 'D'], action: 'Duplicate nodes' },
    { keys: ['Ctrl', 'A'], action: 'Select all nodes' },
    { keys: ['Ctrl', 'L'], action: 'Lock / unlock nodes' },
    { keys: ['N'], action: 'Search node library' },
    { keys: ['Shift', 'L'], action: 'Auto-layout' },
    { keys: ['Shift', '1'], action: 'Fit view' },
    { keys: ['?'], action: 'Show shortcuts' },
  ],

  screenshots: [
    {
      src: shot('01-dashboard.webp'),
      icon: DashboardRoundedIcon,
      title: 'Dashboard',
      text: 'Workflows, runs in the last 7 days, success rate and pending approvals at a glance, with recent workflows, recent executions and a usage summary underneath.',
    },
    {
      src: shot('02-templates.webp'),
      icon: ViewModuleRoundedIcon,
      title: 'Start from a working example',
      text: 'Six templates, each listing its node count and key nodes. Use template creates an independent copy in your library that runs straight away.',
    },
    {
      src: shot('03-workflow-run.webp'),
      icon: LoopRoundedIcon,
      title: 'A finished run on the canvas',
      text: 'The feedback-sentiment template loops over entries, scores each with AI, filters the negative ones and branches on the result. Every node shows its status and timing, and the execution panel streams the logs.',
    },
    {
      src: shot('04-field-mapping.webp'),
      icon: CompareArrowsRoundedIcon,
      title: 'Visual field mapper',
      text: 'The data tree on the left holds the upstream data from the last run. Drag a field onto a source input and the mapped output preview on the right updates live.',
    },
    {
      src: shot('05-ai-prompt-node.webp'),
      icon: AutoAwesomeRoundedIcon,
      title: 'Configuring an AI node',
      text: 'The inspector for an AI Prompt node: model, temperature, max tokens and prompt variables mapped from upstream nodes. Here it uses the simulated “Mock Fast” model.',
    },
    {
      src: shot('06-step-debugging.webp'),
      icon: BugReportRoundedIcon,
      title: 'Step-through debugging',
      text: 'In Debug mode the run pauses before each node. The panel shows the next node to run, with Step, Continue and Stop, and the timeline lists what has not executed yet.',
    },
    {
      src: shot('07-waiting-for-approval.webp'),
      icon: PendingActionsRoundedIcon,
      title: 'Paused for a human',
      text: 'The “Human-approved email drafting” run extracts details, drafts a reply with AI and stops at Approve Email. The inbox icon in the top bar shows one pending request.',
    },
    {
      src: shot('08-approvals-inbox.webp'),
      icon: HowToRegRoundedIcon,
      title: 'Approvals inbox',
      text: 'The reviewer sees the AI-drafted payload, can edit the reply and add notes, then Approve or Reject — and the run resumes on the matching branch.',
    },
    {
      src: shot('09-version-history.webp'),
      icon: HistoryRoundedIcon,
      title: 'Version history',
      text: 'Named and automatic snapshots of a workflow. Selecting one shows what changed compared with the current workflow, with a one-click restore.',
    },
    {
      src: shot('10-usage.webp'),
      icon: QueryStatsRoundedIcon,
      title: 'Usage and estimated cost',
      text: 'Input and output tokens, latency and estimated cost by model and by node, filterable by workflow, date, model and status. Mock-provider usage is labelled as simulated.',
    },
  ],
};
