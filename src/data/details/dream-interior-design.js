import ArchitectureRoundedIcon from '@mui/icons-material/ArchitectureRounded';
import ViewInArRoundedIcon from '@mui/icons-material/ViewInArRounded';
import DirectionsWalkRoundedIcon from '@mui/icons-material/DirectionsWalkRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import HomeWorkRoundedIcon from '@mui/icons-material/HomeWorkRounded';
import ChairRoundedIcon from '@mui/icons-material/ChairRounded';
import PaletteRoundedIcon from '@mui/icons-material/PaletteRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import CloudSyncRoundedIcon from '@mui/icons-material/CloudSyncRounded';
import TourRoundedIcon from '@mui/icons-material/TourRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';

// Case study for https://github.com/raiden-56/Interior-design (Interior Studio).
// Screenshots are frames from the repo's own recorded user manual (apps/site/public/user-manual.mp4).
const shot = (file) => `/projects/dream-interior-design/${file}`;

export default {
  product: 'Interior Studio',
  accent: '#0284c7',
  tagline:
    'Draw a floor plan in 2D, see it in 3D instantly, walk through it in first person and share it with clients — all inside the browser.',
  cover: shot('03-floor-plan.webp'),
  overview: [
    'Dream Interior Design (Interior Studio) is a browser-based design studio for homes and interiors. You draw walls, doors, windows and rooms on a 2D plan, furnish it from a catalogue of 70+ real-sized pieces, and the same model appears in 3D in real time — no export step, no second tool.',
    'From there you can step inside the design and walk it like a game, ask an AI assistant to furnish or restyle a room, export to-scale PDF and DXF drawings for contractors, and send a watermarked, read-only link to a client that expires when you choose.',
  ],
  highlights: [
    { value: 70, suffix: '+', label: 'Furniture pieces' },
    { value: 6, label: 'Ready-made home plans' },
    { value: 25, label: 'Guided-tour stops' },
    { value: 3, label: 'User roles' },
  ],
  stack: [
    'Next.js 15',
    'React',
    'TypeScript',
    'Three.js',
    'React Three Fiber',
    'PixiJS',
    'Zustand',
    'Tailwind CSS',
    'FastAPI',
    'SQLAlchemy',
    'Claude API',
    'MCP',
  ],
  architecture: [
    { title: 'packages/core', text: 'Pure TypeScript engine — geometry, snapping, collision and undoable commands.' },
    { title: 'apps/web', text: 'Next.js studio: 2D (PixiJS), 3D (Three.js) and the walkthrough, all reading one model.' },
    { title: 'apps/site', text: 'Prerendered marketing site — features, plans, pricing and the video manual.' },
    { title: 'backend', text: 'FastAPI + SQLAlchemy storage service with an optional Claude-powered planner.' },
  ],

  why: {
    intro:
      'Designing a home usually means a CAD tool for the plan, a separate renderer for 3D, PDFs emailed back and forth, and clients who struggle to read a floor plan. Interior Studio puts that whole loop in one browser tab.',
    points: [
      {
        icon: ViewInArRoundedIcon,
        title: 'One model, every view',
        text: 'The 2D plan, the 3D scene and the walkthrough all derive from the same project, so they can never drift apart.',
      },
      {
        icon: GroupsRoundedIcon,
        title: 'Clients understand faster',
        text: 'Instead of reading dimensions, a client walks through the rooms, sits on the sofa and opens the doors.',
      },
      {
        icon: RocketLaunchRoundedIcon,
        title: 'From brief to layout in minutes',
        text: 'Start from a furnished 1, 2 or 3 BHK plan, or describe the home and let AI draw the first version.',
      },
      {
        icon: LockRoundedIcon,
        title: 'Safe to share',
        text: 'Client links are view-only, watermarked with the recipient’s name, expire on a date you pick and log every open.',
      },
    ],
    audience: [
      { title: 'Interior designers & architects', text: 'Plan, furnish, present and hand over drawings from one tool.' },
      { title: 'Homeowners', text: 'Try layouts and finishes before spending on a renovation.' },
      { title: 'Builders & real estate', text: 'Show buyers a walkable version of each BHK layout.' },
      { title: 'Students', text: 'Learn space planning with real dimensions and instant 3D feedback.' },
    ],
  },

  solves: [
    {
      problem: 'Clients can’t picture a 2D floor plan.',
      solution: 'Press 2 for an instant 3D view, or Walk to explore the home in first person.',
    },
    {
      problem: 'Plan and 3D model fall out of sync.',
      solution: 'A single source of truth — edit a wall once and every view updates on the next frame.',
    },
    {
      problem: 'Starting from a blank page is slow.',
      solution: 'Six ready-made home plans with carpet area and room-by-room breakdowns, plus AI-built plans from a brief.',
    },
    {
      problem: 'Hand sketches have to be redrawn.',
      solution: 'Import a photo of a paper sketch, calibrate its scale and trace walls straight over it.',
    },
    {
      problem: 'Shared drawings leak or get copied.',
      solution: 'Watermarked, read-only client links with expiry, optional passcode and an activity log.',
    },
    {
      problem: 'Contractors need proper drawings.',
      solution: 'To-scale PDF sets with title block, area schedule and dimensions, plus DXF for CAD.',
    },
    {
      problem: 'Work gets lost.',
      solution: 'Autosaves to the browser within half a second and syncs to the backend; JSON import and export.',
    },
    {
      problem: 'New tools take time to learn.',
      solution: 'A 25-stop guided tour, a live shortcut sheet and a 13-chapter video manual.',
    },
  ],

  features: [
    { icon: ArchitectureRoundedIcon, title: '2D floor plan editor', text: 'Walls, doors, windows, rooms, grid snapping, measuring, box-select and exact undo/redo.' },
    { icon: ViewInArRoundedIcon, title: 'Real-time 3D', text: 'The same model in 3D with move / rotate / scale handles, camera and lighting presets and PNG export.' },
    { icon: DirectionsWalkRoundedIcon, title: 'First-person walkthrough', text: 'WASD movement with collision, doors that open, furniture you can sit on, stairs, a lift and a minimap.' },
    { icon: AutoAwesomeRoundedIcon, title: 'AI design assistant', text: '“Add a grey sofa near the window” — changes are previewed and applied only when you confirm.' },
    { icon: SmartToyRoundedIcon, title: 'AI-built plans & MCP', text: 'Generate a plan with your own Claude or OpenAI key, or let Claude Desktop / Cursor build it over MCP.' },
    { icon: HomeWorkRoundedIcon, title: 'Ready-made home plans', text: '1 BHK, 2 BHK, 3 BHK, studio and single-room starters — fully furnished and measured.' },
    { icon: ChairRoundedIcon, title: '70+ piece catalogue', text: 'Real-sized furniture and appliances, from sofas to split ACs, ceiling fans and pooja units.' },
    { icon: PaletteRoundedIcon, title: 'Materials & finishes', text: 'Wood, stone, metal, fabric, glass and paint for walls, floors and furniture.' },
    { icon: ImageRoundedIcon, title: 'Paper sketch underlay', text: 'Photograph a hand-drawn plan, scale it to a known length and trace over it.' },
    { icon: PictureAsPdfRoundedIcon, title: 'PDF & DXF drawings', text: 'To-scale drawing sets with title block, area schedule and door swings — with or without watermark.' },
    { icon: ShareRoundedIcon, title: 'Secure client links', text: 'View-only, watermarked, expiring links with optional passcode; every open is logged.' },
    { icon: GroupsRoundedIcon, title: 'Accounts & roles', text: 'Architect (owner), Collaborator (edit) and Client (read-only) permissions.' },
    { icon: CloudSyncRoundedIcon, title: 'Autosave & sync', text: 'Offline-first: saved to the browser instantly, synced to the server when it’s running.' },
    { icon: TourRoundedIcon, title: 'Guided tour & manual', text: 'In-app tour of every tool, a shortcut sheet on ?, and a recorded video manual.' },
  ],

  steps: [
    { icon: LockRoundedIcon, title: 'Sign in', text: 'Open the studio and sign in. Clients never need an account — they open the link you send them.' },
    { icon: HomeWorkRoundedIcon, title: 'Start a project', text: 'New project → compare plans in the gallery → Use this plan. Or pick Blank canvas and start from nothing.' },
    { icon: ArchitectureRoundedIcon, title: 'Draw the structure', text: 'B for walls, D for doors, N for windows, R for rooms, M to measure. Or trace over an imported paper sketch.' },
    { icon: ChairRoundedIcon, title: 'Furnish it', text: 'Furniture tab → search or filter by room → click a piece → click where it goes. Drag, nudge with arrows, rotate with [ and ].' },
    { icon: PaletteRoundedIcon, title: 'Style it', text: 'Select a wall, floor or piece and click a finish in the Materials tab, or set a custom colour.' },
    { icon: DirectionsWalkRoundedIcon, title: 'See it in 3D and walk it', text: 'Press 2 for 3D and orbit around. Press Walk, then WASD to move and E to open doors or sit down.' },
    { icon: AutoAwesomeRoundedIcon, title: 'Ask the AI', text: 'Ctrl+K, type what you want, review the proposed changes and press Apply.' },
    { icon: ShareRoundedIcon, title: 'Export and share', text: 'Export a PDF set, DXF, PNG or JSON — or use the share icon to create a client link.' },
  ],
  shortcuts: [
    { keys: ['V'], action: 'Select' },
    { keys: ['B'], action: 'Draw walls' },
    { keys: ['D', 'N'], action: 'Door / window' },
    { keys: ['R'], action: 'Room' },
    { keys: ['M'], action: 'Measure' },
    { keys: ['1', '2'], action: 'Plan / 3D' },
    { keys: ['F'], action: 'Fit to screen' },
    { keys: ['G', 'R', 'S'], action: 'Grab / rotate / scale' },
    { keys: ['Ctrl', 'K'], action: 'AI assistant' },
    { keys: ['Ctrl', 'Z'], action: 'Undo' },
    { keys: ['Ctrl', 'D'], action: 'Duplicate' },
    { keys: ['?'], action: 'Shortcuts & tour' },
  ],
  manual: 'https://github.com/raiden-56/Interior-design/blob/main/docs/USER-MANUAL.md',

  screenshots: [
    {
      src: shot('01-dashboard.webp'),
      icon: DesignServicesRoundedIcon,
      title: 'Studio dashboard',
      text: 'After signing in you land on your projects and the ready-made house plans. Start a new project, import a JSON file or reopen a saved design from here.',
    },
    {
      src: shot('02-plan-gallery.webp'),
      icon: HomeWorkRoundedIcon,
      title: 'Compare plans before you commit',
      text: 'The plan gallery filters 1, 2 and 3 BHK, studio and single-room layouts and shows footprint, carpet area, a room-by-room breakdown and how much furniture comes with each one.',
    },
    {
      src: shot('03-floor-plan.webp'),
      icon: ArchitectureRoundedIcon,
      title: '2D floor plan editor',
      text: 'The furniture catalogue sits on the left with search and room filters, the plan in the middle shows labelled rooms and wall lengths, and the properties panel on the right edits whatever you select.',
    },
    {
      src: shot('04-move-rotate.webp'),
      icon: ConstructionRoundedIcon,
      title: 'Moving and rotating furniture',
      text: 'Selecting a piece opens its properties — exact position, rotation, scale, colour and material. Drag to move, use the arrow keys to nudge and [ ] to rotate by 15°.',
    },
    {
      src: shot('05-materials.webp'),
      icon: PaletteRoundedIcon,
      title: 'Painting a wall',
      text: 'The Materials library applies wood, stone, metal, fabric, glass or paint to the selected wall, floor or object. Colour and finish travel together into the 3D view.',
    },
    {
      src: shot('06-3d-top.webp'),
      icon: ViewInArRoundedIcon,
      title: 'Instant 3D — top view',
      text: 'Press 2 and the same plan appears in 3D with materials applied. Numpad keys jump to top, front, side or perspective viewpoints with an eased camera flight.',
    },
    {
      src: shot('07-3d-orbit.webp'),
      icon: ViewInArRoundedIcon,
      title: 'Orbit, light and transform in 3D',
      text: 'Orbit around the model, switch lighting from daylight to evening, and move pieces precisely Blender-style with G / R / S plus an axis lock and a typed distance.',
    },
    {
      src: shot('08-share-link.webp'),
      icon: ShareRoundedIcon,
      title: 'Sharing with a client',
      text: 'Name the recipient, choose view-only or can-edit, set an expiry and an optional passcode, then copy the link. The recipient’s name becomes the watermark.',
    },
    {
      src: shot('09-client-view.webp'),
      icon: GroupsRoundedIcon,
      title: 'What the client sees',
      text: 'A watermarked, read-only view with a design summary — carpet area, room-by-room areas and the furniture schedule — and no way to edit, export or print.',
    },
    {
      src: shot('10-shortcuts.webp'),
      icon: TourRoundedIcon,
      title: 'Shortcuts and guided tour',
      text: 'Press ? for the live keyboard reference, then Take the tour for a 25-stop walkthrough of every tool with Back, Next and Skip at each step.',
    },
  ],
};
