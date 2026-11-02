import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import HandymanRoundedIcon from '@mui/icons-material/HandymanRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';

// Case study for https://github.com/raiden-56/CrewDesk ("CollabSpace AI Team" in the app, README and page title;
// "CrewDesk" on the portfolio, so it is not confused with the separate CollabSpace project). Screenshots are from
// the GitHub Pages copy at https://raiden-56.github.io/CrewDesk/ — it has no API server, so the build ships a
// frontend-only guest mode with in-browser sample data, and they were captured via "Continue as guest".
const shot = (file) => `/projects/crewdesk/${file}`;

export default {
  product: 'CollabSpace AI Team',
  accent: '#6d5df5',
  tagline:
    'Hire AI team members, give them tools and knowledge, hand them real work and chain them into workflows — while people approve anything risky, set the budgets and can see every step.',
  cover: shot('01-overview.webp'),
  overview: [
    'CollabSpace AI Team (the CrewDesk repo) is a workspace for managing AI agents the way you manage staff. Each agent is a named team member with a role — 12 templates from Researcher and Project Planner to Code Assistant and Security Reviewer — written instructions, a chosen model, an explicit list of tools and the knowledge sources it may read. You assign it tasks and watch a live execution timeline, link several agents into visual workflows with conditions, parallel branches, delays and human steps, and every risky action stops in an Approval Center where a person sees the exact proposal, diff and evidence before saying approve, reject or request changes. Budgets, estimated costs and an audit trail of every human, agent and system action sit around it.',
    'The full app is a pnpm monorepo: a React 19 web client, an Express API with session cookies, Socket.IO realtime and OpenAPI docs, a BullMQ worker that runs agent tasks, workflows, chat replies and knowledge ingestion, and shared packages for the Prisma/Postgres data model, AI providers (Anthropic, OpenAI or a deterministic mock), 18 tool adapters and the execution engine. The demo linked here is the GitHub Pages copy, which has no server: “Continue as guest” opens a sample workspace (nine agents, 25 tasks in every status, three workflows, approvals, knowledge and files) served by an in-browser mock API, so tasks, workflow runs and chat replies are simulated and nothing is saved. Real agents need the API, worker, Postgres and Redis running; even then the default mock provider only walks a scripted plan, and real output needs an Anthropic or OpenAI key.',
  ],
  highlights: [
    { value: 18, label: 'Agent tools' },
    { value: 12, label: 'Role templates' },
    { value: 11, label: 'Workflow node types' },
    { value: 6, label: 'Workspace roles' },
  ],
  stack: [
    'React 19',
    'TypeScript',
    'Vite',
    'MUI',
    'Tailwind CSS',
    'TanStack Query',
    'React Flow',
    'Recharts',
    'Zustand',
    'Zod',
    'Express',
    'Socket.IO',
    'BullMQ',
    'Redis',
    'Prisma',
    'PostgreSQL',
    'Vitest',
    'Playwright',
  ],
  architecture: [
    { title: 'apps/web', text: 'React 19 client: team, tasks, workflow editor, approvals, knowledge, analytics, chat panel — plus the guest-mode mock API used on GitHub Pages.' },
    { title: 'apps/api', text: 'Express API with session cookies, CSRF guard, rate limits, role checks, Socket.IO realtime and an OpenAPI document.' },
    { title: 'apps/worker', text: 'BullMQ workers for agent tasks, workflow advancement, chat replies, knowledge ingestion and maintenance (stale tasks, expired approvals).' },
    { title: 'packages/core', text: 'Prisma data model, AI provider adapters, tool adapters, the task executor, approvals, budgets, knowledge retrieval and the workflow runner.' },
    { title: 'packages/shared', text: 'Types and zod schemas, the tool catalog, role permissions, retry policy, task state machine and workflow validation.' },
  ],

  why: {
    intro:
      'AI is already good at research, planning, writing and review, but at work it is used ad hoc: everyone pastes text into a different chatbot, nobody knows what it did or what it cost, and nothing stops it from sending, publishing or changing something it shouldn’t. CollabSpace AI Team treats agents like staff — with job titles, instructions, keys to only the tools they need, a manager who signs off big decisions, a budget and a record of their work.',
    points: [
      {
        icon: GroupsRoundedIcon,
        title: 'A team, not a chatbot',
        text: 'Agents are named team members with a role, instructions, a model, tools and knowledge, versioned every time they change, and shared across the workspace.',
      },
      {
        icon: HowToRegRoundedIcon,
        title: 'People sign off',
        text: 'High-risk tools always wait for a human. The approval is tied to the exact proposal, and agents can never approve their own actions.',
      },
      {
        icon: SavingsRoundedIcon,
        title: 'Costs you can see',
        text: 'Every model request records tokens and an estimated cost, and budgets per task, agent, project or workspace warn early and stop work at the limit.',
      },
      {
        icon: ReceiptLongRoundedIcon,
        title: 'Always know what happened',
        text: 'Each task keeps a step-by-step execution timeline, and an audit trail records who — person, agent or system — did what and when.',
      },
    ],
    audience: [
      { title: 'Teams and managers', text: 'Hand repetitive research, planning, writing, review and analysis to AI helpers without losing control.' },
      { title: 'Project managers and team leads', text: 'Turn goals into plans and task drafts, then stay the final decision-maker on anything important.' },
      { title: 'Admins and business owners', text: 'Decide who can do what, see what AI is costing and set budgets before the bill arrives.' },
      { title: 'Safety-conscious organisations', text: 'Prove who did what and when, keep agents away from private data and stop mistakes before they happen.' },
    ],
  },

  solves: [
    {
      problem: 'Everyone uses AI their own way, and nothing is shared.',
      solution: 'One workspace of named agents built from 12 role templates, with instructions, model settings and version history the whole team can see.',
    },
    {
      problem: 'An agent might send, publish or change something it shouldn’t.',
      solution: '18 tools split into read-only, write and high-risk; agents only get the tools you tick, and 8 of them — every high-risk tool plus document updates and pull-request drafts — always need human approval.',
    },
    {
      problem: 'Approvals turn into rubber stamps.',
      solution: 'Reviewers see the exact proposal, a before/after diff and evidence. The decision is bound to that proposal version, re-checked before it runs, expires after 7 days, and critical actions need an owner or admin.',
    },
    {
      problem: 'Nobody knows what AI is costing.',
      solution: 'Tokens and estimated cost per request, task, agent and model, with budgets that warn at a threshold and stop a task when the limit is reached.',
    },
    {
      problem: 'When something goes wrong there is no record.',
      solution: 'A per-task timeline of context retrieval, model calls, tool requests, approvals, retries and artifacts, plus an audit log of every action.',
    },
    {
      problem: 'AI can see documents it shouldn’t.',
      solution: 'Knowledge access is granted per agent; retrieval only searches approved sources, URLs on private networks are refused, and retrieved text is treated as untrusted data.',
    },
    {
      problem: 'Multi-step work means copy-pasting between agents.',
      solution: 'Visual workflows chain agents, prompts, tools, conditions, approvals, parallel branches, delays and human tasks, and a validator blocks cycles and unreachable steps.',
    },
    {
      problem: 'Models and tools fail at random.',
      solution: 'Retries with exponential backoff and jitter by failure type, timeouts, heartbeats with stale-task recovery, and non-idempotent tools are verified instead of blindly retried.',
    },
  ],

  features: [
    { icon: SmartToyRoundedIcon, title: 'AI team members', text: '12 role templates — Researcher, Planner, QA, Docs, Data Analyst, Support, Code, Security and more — each with default instructions and tools.' },
    { icon: PersonAddRoundedIcon, title: 'Six-step agent wizard', text: 'Identity, role and instructions (structured or Markdown), model and limits, tools and permissions, knowledge, then review and a sandbox test.' },
    { icon: HandymanRoundedIcon, title: 'Tool registry', text: '18 tools across read-only, write and high-risk, each with a risk level, approval rule, timeout, retry policy and the integration it needs.' },
    { icon: AssignmentRoundedIcon, title: 'Tasks', text: 'Filter, sort and bulk-cancel; set priority, allowed tools, budget and schedule; retry, duplicate or publish drafts.' },
    { icon: TimelineRoundedIcon, title: 'Live execution timeline', text: 'Every step of a run — context, model calls, tool calls, approvals, retries, artifacts — with filters and CSV or JSON export.' },
    { icon: HowToRegRoundedIcon, title: 'Approval Center', text: 'Exact proposal, diff and evidence; approve, reject or request changes, with risk-based roles deciding who may sign off.' },
    { icon: AccountTreeRoundedIcon, title: 'Agent workflows', text: 'A React Flow editor with agent, prompt, tool, condition, approval, parallel, merge, delay, human-task and end steps, plus validation and versions.' },
    { icon: PlayCircleRoundedIcon, title: 'Workflow runs', text: 'Run or dry-run a workflow, watch node-level status and logs, pause, resume or cancel, and complete human tasks.' },
    { icon: MenuBookRoundedIcon, title: 'Knowledge base', text: 'Approved URLs, pasted text and uploads, chunked and indexed for full-text search, with per-agent access, re-index, revoke and a retrieval test.' },
    { icon: ForumRoundedIcon, title: 'Chat panel', text: 'Talk to an agent in conversation mode — knowledge-grounded answers, no tools — or switch to task mode to turn the request into a task.' },
    { icon: QueryStatsRoundedIcon, title: 'Analytics and budgets', text: 'Estimated cost, tokens, model requests, tool calls and failures over time and by agent, with workspace, project and agent budgets.' },
    { icon: ReceiptLongRoundedIcon, title: 'Activity history', text: 'An immutable audit trail of human, agent and system actions, filterable by action, resource and person.' },
    { icon: AdminPanelSettingsRoundedIcon, title: 'Roles and permissions', text: 'Owner, Admin, Agent Manager, Task Operator, Approver and Viewer, mapped to 27 fine-grained permissions.' },
    { icon: ExtensionRoundedIcon, title: 'Integrations and providers', text: 'GitHub and an outbound webhook with encrypted secrets; Anthropic, OpenAI or a deterministic mock AI provider.' },
  ],

  steps: [
    { icon: ExploreRoundedIcon, title: 'Enter as a guest', text: 'Open the demo and press Continue as guest — no account or server. A chip in the header reminds you it is sample data and changes aren’t saved.' },
    { icon: DashboardRoundedIcon, title: 'Read the overview', text: 'Home shows team size, running and queued work, pending approvals, success rate and estimated cost, with a card per agent.' },
    { icon: PersonAddRoundedIcon, title: 'Add a team member', text: 'Press New Agent and walk the six steps: name and role, instructions, model, tools, knowledge, then review and test.' },
    { icon: AssignmentRoundedIcon, title: 'Assign a task', text: 'Use Assign task or Tasks → New task, pick an agent and describe the job. Open the task to follow its timeline, result and artifacts.' },
    { icon: HowToRegRoundedIcon, title: 'Review approvals', text: 'Approvals lists what agents want to do. Open one to see the proposal and diff, then Approve, Request changes or Reject.' },
    { icon: AccountTreeRoundedIcon, title: 'Build a workflow', text: 'Agent Workflows → open one or press New workflow. Add steps from the palette, connect them, configure each in the inspector and press Validate.' },
    { icon: PlayCircleRoundedIcon, title: 'Run it', text: 'Press Run, optionally tick Dry run, and follow each node in the execution view; pause, resume or cancel from there.' },
    { icon: PsychologyRoundedIcon, title: 'Ground, chat and track', text: 'Add sources in Knowledge Base, chat with an agent from its page, press Ctrl+K to search, and check Analytics and Activity History.' },
  ],
  shortcuts: [
    { keys: ['Ctrl', 'K'], action: 'Global search' },
    { keys: ['Enter'], action: 'Send a chat message' },
    { keys: ['Shift', 'Enter'], action: 'New line in a chat message' },
  ],

  screenshots: [
    {
      src: shot('01-overview.webp'),
      icon: DashboardRoundedIcon,
      title: 'AI team overview',
      text: 'Team members, running work, pending approvals, completions, failures and estimated cost for the last 7 days, with a card per agent showing its current task and a side panel of recent activity.',
    },
    {
      src: shot('02-team-members.webp'),
      icon: GroupsRoundedIcon,
      title: 'AI team members',
      text: 'Each agent card shows its role, project, status (online, working, idle, paused, offline) and live task progress, filterable by role, status, availability and project.',
    },
    {
      src: shot('03-agent-wizard-tools.webp'),
      icon: HandymanRoundedIcon,
      title: 'Choosing an agent’s tools',
      text: 'Step four of the New AI team member wizard: read-only and write tools with their risk level. The Researcher template pre-selects its defaults, and tools that need approval are flagged.',
    },
    {
      src: shot('04-task-timeline.webp'),
      icon: TimelineRoundedIcon,
      title: 'Task execution timeline',
      text: 'A completed competitive analysis by Nova: duration, tokens, estimated cost and tool calls, then every step — accepted, context retrieved from approved sources, model requests, tools requested, authorized and executed — with export to CSV.',
    },
    {
      src: shot('05-workflow-editor.webp'),
      icon: AccountTreeRoundedIcon,
      title: 'Workflow editor',
      text: 'The support-triage workflow: a condition sends high-severity tickets to a parallel branch (draft a reply and page the on-call engineer, then merge), and batches the rest for a digest. The inspector edits the selected condition’s expression, retries, timeout and error handling.',
    },
    {
      src: shot('06-workflow-run.webp'),
      icon: PlayCircleRoundedIcon,
      title: 'A finished workflow run',
      text: 'Research → Review → Approve → Document: the researcher, QA review, human approval and final report steps all completed, with the run input, the final output and a per-step list underneath.',
    },
    {
      src: shot('07-approval-center.webp'),
      icon: HowToRegRoundedIcon,
      title: 'Approval Center',
      text: 'Forge, the code assistant, asks to open a draft pull request. The reviewer sees the tool, target, task, a before/after diff of the change and the exact proposal that will run if approved.',
    },
    {
      src: shot('08-knowledge-base.webp'),
      icon: MenuBookRoundedIcon,
      title: 'Knowledge base',
      text: 'Approved documents, folders, notes and URLs with their status (processing, ready, failed, revoked), chunk counts and which agents may read them, plus Test retrieval and Add source.',
    },
    {
      src: shot('09-agent-chat.webp'),
      icon: ForumRoundedIcon,
      title: 'Chatting with an agent',
      text: 'Conversation mode with Nova answers from approved knowledge and cites its source. In the guest demo the new reply is canned and labelled as a sample — no AI model is called.',
    },
    {
      src: shot('10-analytics.webp'),
      icon: QueryStatsRoundedIcon,
      title: 'Usage and cost analytics',
      text: 'Estimated cost, input and output tokens, model requests, tool calls and failures for the period, with cost and token charts by day, cost by agent and budget status. Costs are estimates from published model prices.',
    },
  ],
};
