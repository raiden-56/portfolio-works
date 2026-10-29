import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import DragIndicatorRoundedIcon from '@mui/icons-material/DragIndicatorRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import BookmarksRoundedIcon from '@mui/icons-material/BookmarksRounded';
import PaletteRoundedIcon from '@mui/icons-material/PaletteRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import DataObjectRoundedIcon from '@mui/icons-material/DataObjectRounded';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import CloudOffRoundedIcon from '@mui/icons-material/CloudOffRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';

// Case study for https://github.com/raiden-56/Layrly ("Template Studio" in the app, README and page title;
// "Layora" on the portfolio). Screenshots are from the live app at https://layora.netlify.app — it runs fully
// in the browser with no sign-in, so they were captured by editing the seeded templates there with sample
// text (data stays in that browser).
const shot = (file) => `/projects/layora/${file}`;

export default {
  product: 'Template Studio',
  accent: '#2559D9',
  tagline:
    'A template builder for people who do not write HTML — drag blocks onto a canvas or write in a document editor, and export email-safe HTML, all in the browser.',
  cover: shot('02-drag-and-drop.webp'),
  overview: [
    'Template Studio (the Layrly repo) is a builder for email and page templates aimed at people who do not write HTML. There are two ways to create: a three-panel drag & drop builder — block library, canvas and properties — with nesting, drop indicators, undo/redo, mobile overrides and a brand kit, and a document mode, a page-sized TinyMCE editor for people who just want to write. You can start from a blank canvas, one of 33 seeded templates in six categories, a rich-text document or pasted HTML, and both modes export the same email-safe HTML.',
    'Underneath, a template is structured JSON, never HTML: sections hold rows, rows hold columns, columns hold content, so a template can be re-rendered, re-themed and re-exported without parsing markup. One BlockBody renderer is shared by the canvas, thumbnails and previews, while a separate exporter writes nested tables with inline styles for mail clients. There is no backend in this version: templates, versions and reusable blocks live in IndexedDB and preferences in localStorage, behind a single storage module so an API could be swapped in later. The README is upfront about the limits: rich text is edited in a dialog rather than inline, icons export as SVG data URIs that Outlook replaces with alt text, and uploaded images are stored as data URIs, so they should stay small.',
  ],
  highlights: [
    { value: 33, label: 'Ready-made templates' },
    { value: 39, label: 'Library blocks' },
    { value: 16, label: 'Merge variables' },
    { value: 3, label: 'Export formats' },
  ],
  stack: [
    'React 19',
    'TypeScript',
    'Vite 8',
    'Material UI 9',
    'Redux Toolkit',
    'React Router 7',
    'dnd-kit',
    'TinyMCE 8 (self-hosted)',
    'React Hook Form',
    'Zod',
    'idb (IndexedDB)',
    'Day.js',
    'Lucide icons',
    'oxlint',
  ],
  architecture: [
    { title: 'src/lib', text: 'Framework-free logic: block factory and the 39-entry block library, tree operations, HTML/JSON/plain-text export, HTML import with validation, the template linter, storage and the 33 seeded templates.' },
    { title: 'src/store', text: 'Redux Toolkit slices for template, history, editor, UI, library, settings, brand kit and saved blocks, with undo-snapshot and debounced-persistence middleware and memoised selectors.' },
    { title: 'src/components', text: 'BlockBody, the one renderer shared by canvas, thumbnails and previews; the editor (canvas, block library, properties, TinyMCE wrappers); library cards and the dialogs.' },
    { title: 'src/pages', text: 'One page per route: home, templates, template details, favourites, My Blocks, brand kit, the create flow, the editor and a full-screen preview.' },
  ],

  why: {
    intro:
      'Email and page templates usually live in hand-written HTML full of nested tables and inline styles, so anyone who is not a developer either waits for one or breaks the layout. Template Studio lets them build visually or simply write, keeps the design as structured data, and generates the fussy email markup for them.',
    points: [
      {
        icon: DragIndicatorRoundedIcon,
        title: 'Build without code',
        text: 'Drag blocks from a categorised library onto the canvas and set content, typography, colours, spacing and borders in a properties panel.',
      },
      {
        icon: ArticleRoundedIcon,
        title: 'Or just write',
        text: 'Document mode is a page-sized rich-text editor with a full toolbar, for people who think in paragraphs rather than blocks.',
      },
      {
        icon: EmailRoundedIcon,
        title: 'Email-safe output',
        text: 'Export writes nested tables with inline styles plus a media query that stacks columns below 600px — the combination most mail clients render correctly.',
      },
      {
        icon: CloudOffRoundedIcon,
        title: 'Nothing to set up',
        text: 'No account and no backend: templates, versions and saved blocks are kept in this browser, and TinyMCE is self-hosted, so no API key is needed.',
      },
    ],
    audience: [
      { title: 'Marketers & content teams', text: 'Put together newsletters, launches and promotions without waiting for a developer.' },
      { title: 'Product & support teams', text: 'Draft welcome, password-reset, verification and order emails with merge fields like {{firstName}}.' },
      { title: 'Small businesses', text: 'Set the brand once and apply its fonts, colours and button style to any template in one click.' },
      { title: 'Developers', text: 'A structured-JSON template model and an email exporter that can be wired to a real API through one storage module.' },
    ],
  },

  solves: [
    {
      problem: 'Writing email HTML by hand is slow and fragile.',
      solution: 'Templates are built from blocks and stored as JSON; the exporter produces table-based markup with inline styles.',
    },
    {
      problem: 'Starting from a blank page takes too long.',
      solution: '33 ready-made templates across Business, Marketing, SaaS, E-commerce, Events and Personal, searchable by name, tag or category.',
    },
    {
      problem: 'Not everyone wants a block builder.',
      solution: 'Document mode offers a word-processor-style TinyMCE editor that exports the same email-ready HTML, and can switch to drag & drop later.',
    },
    {
      problem: 'There is already an old template in HTML.',
      solution: 'Import HTML turns headings, paragraphs, images, buttons and lists into editable blocks and keeps anything it cannot map in an HTML block.',
    },
    {
      problem: 'Designs look cramped on phones.',
      solution: 'Edit in a 375px mobile viewport to set mobile-only style overrides, and hide blocks on mobile or desktop.',
    },
    {
      problem: 'Every template drifts from the brand.',
      solution: 'A brand kit with logo, colours, heading and body fonts and button style that rewrites a whole template when applied.',
    },
    {
      problem: 'The same footer gets rebuilt again and again.',
      solution: 'Save any block or section to My Blocks and drop it into any other template.',
    },
    {
      problem: 'Mistakes are only noticed after sending.',
      solution: 'A rule-based template check scores the design and flags missing alt text, unlinked buttons, low contrast, missing preheader or unsubscribe link and unknown variables.',
    },
  ],

  features: [
    { icon: DragIndicatorRoundedIcon, title: 'Drag & drop builder', text: 'Block library, canvas and properties panel, with nesting, a gliding drop indicator, zoom, fit to screen and guides.' },
    { icon: WidgetsRoundedIcon, title: 'Block library', text: '39 blocks in Basic, Layout, Marketing and Communication — from text, buttons and columns to pricing, testimonials and password reset.' },
    { icon: TuneRoundedIcon, title: 'Properties panel', text: 'Content, typography, colours, spacing, border and shape, alignment, a custom CSS class and hide on mobile or desktop for every block.' },
    { icon: SmartphoneRoundedIcon, title: 'Viewports & mobile overrides', text: 'Desktop, tablet and mobile canvases; in mobile view, style changes are stored as overrides for that layout only, with a one-click reset.' },
    { icon: LayersRoundedIcon, title: 'Layers & block actions', text: 'A layer tree of the template, plus duplicate, copy/paste, copy/paste styles, move up/down, lock and delete on every block.' },
    { icon: ArticleRoundedIcon, title: 'Document mode', text: 'A page-sized, self-hosted TinyMCE editor with headings, fonts, lists, tables, images, links, find and replace and a source view.' },
    { icon: DataObjectRoundedIcon, title: 'Merge variables', text: '16 {{variables}} for recipient, company, order and system data, shown as chips in the editor and swapped for sample values in previews.' },
    { icon: ViewQuiltRoundedIcon, title: 'Template library', text: '33 seeded designs in six categories, with grid or list view, sorting, favourites, recently used and live thumbnails.' },
    { icon: CodeRoundedIcon, title: 'HTML import', text: 'Paste or upload .html; scripts, iframes and forms are stripped, unbalanced <div> tags are reported, and the rest becomes editable blocks.' },
    { icon: PaletteRoundedIcon, title: 'Brand kit', text: 'Brand name, logo, website, five colours, heading and body fonts and solid, outline or pill buttons, with a live preview.' },
    { icon: BookmarksRoundedIcon, title: 'My Blocks', text: 'Save any block with everything inside it as a reusable block, then rename, duplicate, search or insert it from the editor.' },
    { icon: DownloadRoundedIcon, title: 'Export', text: 'HTML, JSON or plain text to copy or download, optionally with sample data, plus open in a new window and print to PDF.' },
    { icon: HistoryRoundedIcon, title: 'Autosave, undo & versions', text: 'Autosave after a 1.2s pause, undo/redo where one gesture is one step, and a restore point on every Save — the last 20 are kept.' },
    { icon: FactCheckRoundedIcon, title: 'Template check', text: 'A rule-based linter with a score out of 100 and “Jump to the block” links, run entirely on the device.' },
  ],

  steps: [
    { icon: AddCircleRoundedIcon, title: 'Create a template', text: 'Open the app — no sign-in. Press Create template and choose Blank template, Choose a template, Rich text document or Import HTML, then add a name, category and tags.' },
    { icon: ViewQuiltRoundedIcon, title: 'Or open a design', text: 'Go to Templates, filter by category or search, and open any of the 33 designs in the editor.' },
    { icon: DragIndicatorRoundedIcon, title: 'Add blocks', text: 'Drag a block from the library onto the canvas — the blue line shows where it will land — or use its add button to append it to the end. Saved sections are under My Blocks.' },
    { icon: TuneRoundedIcon, title: 'Configure them', text: 'Click a block to edit it in the properties panel on the right. The Template tab sets the width, background, base font, link colour and preheader.' },
    { icon: SmartphoneRoundedIcon, title: 'Tune for mobile', text: 'Switch the canvas to Mobile (Ctrl+3) and adjust a block; those changes apply to the mobile layout only.' },
    { icon: PaletteRoundedIcon, title: 'Apply your brand', text: 'Fill in the Brand Kit once, then choose ⋮ → Apply brand kit in the editor to restyle fonts, buttons and accent colours.' },
    { icon: VisibilityRoundedIcon, title: 'Check and preview', text: 'Use ⋮ → Check template for the quality score, and Preview (Ctrl+P) to see desktop, tablet and mobile widths with sample data.' },
    { icon: SaveRoundedIcon, title: 'Save and export', text: 'Press Save (Ctrl+S) to create a restore point, then Export to copy or download HTML, JSON or plain text. ⋮ → Version history restores older versions.' },
  ],
  shortcuts: [
    { keys: ['Ctrl', 'S'], action: 'Save template' },
    { keys: ['Ctrl', 'Z'], action: 'Undo' },
    { keys: ['Ctrl', 'Shift', 'Z'], action: 'Redo' },
    { keys: ['Ctrl', 'D'], action: 'Duplicate selected block' },
    { keys: ['Ctrl', 'C'], action: 'Copy selected block' },
    { keys: ['Ctrl', 'V'], action: 'Paste block' },
    { keys: ['Ctrl', 'Shift', 'C'], action: 'Copy styles' },
    { keys: ['Ctrl', 'Shift', 'V'], action: 'Paste styles' },
    { keys: ['Delete'], action: 'Delete selected block' },
    { keys: ['Esc'], action: 'Deselect' },
    { keys: ['↑', '↓'], action: 'Select previous / next block' },
    { keys: ['Ctrl', 'P'], action: 'Open preview' },
    { keys: ['Ctrl', '1'], action: 'Desktop viewport' },
    { keys: ['Ctrl', '2'], action: 'Tablet viewport' },
    { keys: ['Ctrl', '3'], action: 'Mobile viewport' },
    { keys: ['Ctrl', '0'], action: 'Fit to screen' },
    { keys: ['?'], action: 'Show shortcuts' },
  ],

  screenshots: [
    {
      src: shot('01-template-library.webp'),
      icon: ViewQuiltRoundedIcon,
      title: 'Template library',
      text: 'All 33 starter templates with live thumbnails, tabs for my, shared, recent and favourite templates, category filters, search, sorting and a grid or list view.',
    },
    {
      src: shot('02-drag-and-drop.webp'),
      icon: DragIndicatorRoundedIcon,
      title: 'Dragging a block onto the canvas',
      text: 'A Testimonial block dragged from the Marketing library into the Product Launch template. The blue line marks exactly where it will land.',
    },
    {
      src: shot('03-block-properties.webp'),
      icon: TuneRoundedIcon,
      title: 'Configuring a block',
      text: 'The selected button shows its toolbar on the canvas, and the properties panel edits its text, link, target, width and hover colour, with typography, colours and spacing below.',
    },
    {
      src: shot('04-mobile-overrides.webp'),
      icon: SmartphoneRoundedIcon,
      title: 'Mobile overrides',
      text: 'In the 375px mobile canvas the heading size was reduced to 30px. The panel notes that the change applies to the mobile layout only and offers Reset.',
    },
    {
      src: shot('05-my-blocks.webp'),
      icon: BookmarksRoundedIcon,
      title: 'My Blocks',
      text: 'Sections saved from other templates — an order summary, a company footer and a welcome hero — ready to rename, duplicate or drop into any template.',
    },
    {
      src: shot('06-brand-kit.webp'),
      icon: PaletteRoundedIcon,
      title: 'Brand kit',
      text: 'Brand name, logo, website and colours, with heading and body fonts and button style below. The live preview shows how the kit will look before it is applied.',
    },
    {
      src: shot('07-document-mode.webp'),
      icon: ArticleRoundedIcon,
      title: 'Document mode',
      text: 'A team update written in the TinyMCE editor. The Variable menu inserts merge fields grouped by recipient, company, order and system.',
    },
    {
      src: shot('08-import-html.webp'),
      icon: CodeRoundedIcon,
      title: 'Import HTML',
      text: 'Pasted markup is validated as you type; once it parses, Continue opens it on the canvas as editable blocks. An .html file can be uploaded instead.',
    },
    {
      src: shot('09-export.webp'),
      icon: DownloadRoundedIcon,
      title: 'Export',
      text: 'Table-based HTML with inline styles, ready for an email platform, plus JSON and plain-text tabs, a sample-data switch, copy, download and print to PDF.',
    },
    {
      src: shot('10-version-history.webp'),
      icon: HistoryRoundedIcon,
      title: 'Version history',
      text: 'Each Save adds a restore point. Selecting one previews that version, and Restore this version brings it back.',
    },
  ],
};
