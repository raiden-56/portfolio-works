import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';
import CloudOffRoundedIcon from '@mui/icons-material/CloudOffRounded';
import CallMergeRoundedIcon from '@mui/icons-material/CallMergeRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import CompressRoundedIcon from '@mui/icons-material/CompressRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import DocumentScannerRoundedIcon from '@mui/icons-material/DocumentScannerRounded';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded';
import ArchiveRoundedIcon from '@mui/icons-material/ArchiveRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import BrandingWatermarkRoundedIcon from '@mui/icons-material/BrandingWatermarkRounded';
import DynamicFormRoundedIcon from '@mui/icons-material/DynamicFormRounded';
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

// Case study for https://github.com/raiden-56/Filora (branded PDFly in the app and README, "Filoraa" on the
// portfolio). Screenshots are from the live app at https://filoraa.netlify.app — it processes files in the
// browser with no sign-in, so they were captured with generated sample documents (a made-up garden report).
const shot = (file) => `/projects/filoraa/${file}`;

export default {
  product: 'PDFly',
  accent: '#4338ca',
  tagline:
    'All your PDF tools in one place — merge, split, compress, convert, edit and organize documents, and convert HEIC photos, entirely in the browser so files never leave your device.',
  cover: shot('04-merge.webp'),
  overview: [
    'Filora (branded PDFly in the app) is a PDF and image toolkit with 29 tools in six groups — Organize, Optimize, Convert to PDF, Convert from PDF, Edit and Image Tools. Every tool follows the same three steps, Upload → Customize → Download: drop your files, adjust the options with a live preview where it makes sense, then preview the result, download it (several outputs come as a ZIP) and find it again later in My Files.',
    'All processing happens on the user’s device: pdf-lib and PDF.js for PDF work, tesseract.js for OCR, docx, pptxgenjs and SheetJS for Office exports, and libheif (WebAssembly) for HEIC photos, each loaded only when its tool is opened. The build is a static React 19 + MUI site hosted for free on Netlify, with no account and no upload. The repo also still holds an older Express API from an earlier server-side version; the current app does not call it. The README is upfront about the limits: Office → PDF keeps text, tables and images but not the exact layout, PDF/A cannot embed missing fonts, and large files or OCR jobs are slower on phones.',
  ],
  highlights: [
    { value: 29, label: 'PDF & image tools' },
    { value: 6, label: 'Tool categories' },
    { value: 16, label: 'OCR languages' },
    { value: 18, label: 'End-to-end tests' },
  ],
  stack: [
    'React 19',
    'TypeScript',
    'Vite 7',
    'Material UI 7',
    'Redux Toolkit',
    'React Router 7',
    'dnd-kit',
    'pdf-lib',
    'PDF.js',
    'tesseract.js',
    'docx',
    'pptxgenjs',
    'SheetJS',
    'heic-to (libheif)',
    'IndexedDB',
    'Vitest',
    'Playwright',
  ],
  architecture: [
    { title: 'packages/pdf-core', text: 'Shared @pdfly/core library of pure pdf-lib operations — merge, split, organize, rotate, page numbers, watermark, crop, images to PDF and form fields.' },
    { title: 'client/src/features', text: 'One lazy-loaded component per tool on a shared ToolWorkflow and useToolWorkflow hook that runs Upload → Customize → Download and saves outputs to My Files.' },
    { title: 'client/src/engines', text: 'React-free engines for compress, repair, OCR, Office/HTML to PDF and PDF to Word, PowerPoint, Excel and PDF/A, with progress, cancellation and lazy-loaded libraries.' },
    { title: 'server/ (legacy)', text: 'An Express 5 API from an earlier server-side version (LibreOffice, Ghostscript, Tesseract). It is outside the npm workspaces and the Netlify build; the current app never calls it.' },
  ],

  why: {
    intro:
      'Most free PDF sites upload your document to their servers and do one job per page, so a simple “merge, compress, sign” means three sites and three uploads. PDFly keeps the everyday PDF jobs in one tab, behind one search box and one consistent flow, and does the work on your own device.',
    points: [
      {
        icon: ShieldRoundedIcon,
        title: 'Private by design',
        text: 'Files are processed in the browser and never uploaded. There is no account, and recent outputs are kept only in this browser’s IndexedDB.',
      },
      {
        icon: AppsRoundedIcon,
        title: 'One toolbox',
        text: '29 tools in six categories, a Ctrl/Cmd+K search, and a home-page drop zone that opens a matching tool for whatever file you drop.',
      },
      {
        icon: FormatListNumberedRoundedIcon,
        title: 'Same three steps everywhere',
        text: 'Upload → Customize → Download on every tool, with live previews, clear stage labels, a progress bar and a Cancel button.',
      },
      {
        icon: CloudOffRoundedIcon,
        title: 'Free to run',
        text: 'With no backend it is just static files, deployable to Netlify or GitHub Pages; heavy libraries download only when their tool is opened.',
      },
    ],
    audience: [
      { title: 'Students & office workers', text: 'Merge assignments, shrink a PDF for email, fill a form or add a signature without installing anything.' },
      { title: 'Privacy-conscious users', text: 'People who would rather not upload contracts, statements or letters to an unknown server.' },
      { title: 'iPhone & camera users', text: 'Turn HEIC/HEIF photos into JPGs that open everywhere, or scan pages with the camera into a PDF.' },
      { title: 'Developers', text: 'A free, self-hostable toolkit with documented conventions for adding a new tool.' },
    ],
  },

  solves: [
    {
      problem: 'Every PDF job needs a different website.',
      solution: '29 tools in one app, grouped into six categories, reachable from the menu, the All PDF Tools page or Ctrl/Cmd+K search.',
    },
    {
      problem: 'Uploading private documents feels risky.',
      solution: 'Everything runs locally with pdf-lib, PDF.js and WebAssembly — no upload, no sign-in, and outputs stay in this browser.',
    },
    {
      problem: 'The PDF is too big to email.',
      solution: 'Compress with Low, Medium or High levels and see the original and new size side by side with the percentage saved.',
    },
    {
      problem: 'Pages are in the wrong order, sideways or not needed.',
      solution: 'Organize on a thumbnail grid: drag to reorder, rotate, duplicate, delete, insert blank pages or add pages from another PDF — plus Split, Remove and Extract.',
    },
    {
      problem: 'A scanned PDF can’t be searched or copied.',
      solution: 'OCR with tesseract.js in 16 languages produces a searchable PDF and a text file.',
    },
    {
      problem: 'A document needs filling in, marking up or signing.',
      solution: 'Edit PDF adds text, drawings, highlights, shapes, whiteout, images and signatures with undo/redo; PDF Forms fills existing fields or adds new ones.',
    },
    {
      problem: 'iPhone photos (HEIC) won’t open on other devices.',
      solution: 'HEIC and HEIF to JPG — native decoding in Safari, libheif WebAssembly elsewhere — plus JPG to PNG and PNG to JPG.',
    },
    {
      problem: 'You need the content in Word, Excel, PowerPoint or an archival format.',
      solution: 'PDF to DOCX, PPTX and XLSX (with table detection), and PDF/A-1b, 2b or 3b with a built-in validation report.',
    },
  ],

  features: [
    { icon: CallMergeRoundedIcon, title: 'Merge & split', text: 'Merge up to 50 PDFs in drag-to-set order, or split by every page, page ranges, selected pages or every N pages.' },
    { icon: GridViewRoundedIcon, title: 'Page organizer', text: 'Thumbnail grid to reorder, rotate, duplicate, delete and insert pages, with keyboard alternatives and undo/redo; Scan to PDF uses the camera.' },
    { icon: CompressRoundedIcon, title: 'Compress', text: 'Low, Medium or High compression by downscaling and re-encoding images, with a before/after size comparison.' },
    { icon: BuildRoundedIcon, title: 'Repair', text: 'Rebuilds the xref table and trailer of damaged files, and as a last resort rebuilds pages from rendered images.' },
    { icon: DocumentScannerRoundedIcon, title: 'OCR', text: 'tesseract.js in 16 languages, from English and Hindi to Arabic, Chinese and Japanese, for a searchable PDF plus extracted text.' },
    { icon: PictureAsPdfRoundedIcon, title: 'Convert to PDF', text: 'JPG/PNG/WEBP with page size, orientation, margins and fit; Word, PowerPoint and Excel in a simplified layout; HTML via a built-in renderer or browser print.' },
    { icon: SwapHorizRoundedIcon, title: 'Convert from PDF', text: 'Export pages to JPG, or convert to editable Word (DOCX), PowerPoint (PPTX) and Excel (XLSX) with table detection.' },
    { icon: ArchiveRoundedIcon, title: 'PDF/A archiving', text: 'PDF/A-1b, 2b or 3b output with an ICC profile and a validation report (built-in checks, not a full veraPDF run).' },
    { icon: EditNoteRoundedIcon, title: 'Edit PDF', text: 'Text, images, freehand drawing, highlight, underline, strike-through, shapes, whiteout, checkboxes and signatures, with undo/redo and shortcuts.' },
    { icon: BrandingWatermarkRoundedIcon, title: 'Stamp & adjust pages', text: 'Text or image watermarks and page numbers with live preview, plus Rotate and Crop with a drawn crop area.' },
    { icon: DynamicFormRoundedIcon, title: 'PDF Forms', text: 'Fill existing interactive forms, or add your own text fields, checkboxes and more to any PDF.' },
    { icon: PhotoLibraryRoundedIcon, title: 'Image tools', text: 'HEIC and HEIF to JPG, JPG to PNG and PNG to JPG, with quality and a background colour for transparent areas.' },
    { icon: SearchRoundedIcon, title: 'Search & smart drop', text: 'Ctrl/Cmd+K finds any tool by name or keyword; files dropped on the home page open in a suitable tool.' },
    { icon: FolderRoundedIcon, title: 'My Files & settings', text: 'Recent outputs in IndexedDB with preview, download, rename and auto-delete, plus saved defaults and a light, dark or system theme.' },
  ],

  steps: [
    { icon: AppsRoundedIcon, title: 'Pick a tool', text: 'Open the app — no sign-in. Choose a tool from the home page or All PDF Tools, press Ctrl/Cmd+K to search, or drop files on the home page.' },
    { icon: UploadFileRoundedIcon, title: 'Upload your files', text: 'Drop files on the upload area or press Choose PDF. Files are checked by their actual content, so a fake or renamed file is rejected; the limit is 50 MB per file.' },
    { icon: GridViewRoundedIcon, title: 'Arrange them', text: 'In Merge, drag the cards into order, rename them or press Sort by name. Page tools show a thumbnail grid you can select, reorder and rotate.' },
    { icon: TuneRoundedIcon, title: 'Customize', text: 'Set the options in the panel on the right, such as compression level, split mode or watermark text, opacity, rotation and position, and check the live preview.' },
    { icon: BoltRoundedIcon, title: 'Process', text: 'Press the action button (Merge PDFs, Compress PDF, Add Watermark…). A stage label and progress bar show what is running, and you can cancel.' },
    { icon: DownloadRoundedIcon, title: 'Download', text: 'Preview the result, Download it (Download All gives a ZIP when there are several files), or Start Again.' },
    { icon: FolderRoundedIcon, title: 'Find it later', text: 'The folder icon opens My Files. Outputs stay in this browser for 24 hours by default, ready to preview, download, rename or delete.' },
    { icon: SettingsRoundedIcon, title: 'Set your defaults', text: 'In Settings choose the default page size, orientation, OCR language, compression level, image quality, theme and auto-delete period.' },
  ],
  shortcuts: [
    { keys: ['Ctrl', 'K'], action: 'Search tools' },
    { keys: ['Ctrl', 'Z'], action: 'Undo (Edit PDF)' },
    { keys: ['Ctrl', 'Shift', 'Z'], action: 'Redo (Edit PDF)' },
    { keys: ['Delete'], action: 'Delete selected annotation' },
    { keys: ['Esc'], action: 'Back to Select tool' },
    { keys: ['V'], action: 'Select tool' },
    { keys: ['T'], action: 'Add text' },
    { keys: ['D'], action: 'Freehand draw' },
    { keys: ['H'], action: 'Highlight' },
    { keys: ['R'], action: 'Rectangle' },
    { keys: ['W'], action: 'Whiteout' },
    { keys: ['S'], action: 'Signature' },
    { keys: ['Alt', '←'], action: 'Move selected page left (Organize)' },
    { keys: ['Alt', '→'], action: 'Move selected page right (Organize)' },
  ],

  screenshots: [
    {
      src: shot('01-home.webp'),
      icon: HomeRoundedIcon,
      title: 'Free, private, no sign-up',
      text: 'The home page leads with a drop zone that accepts JPG, PNG, HEIC, PDF, DOCX, XLSX and PPTX and opens a suitable tool for whatever you drop.',
    },
    {
      src: shot('02-all-tools.webp'),
      icon: AppsRoundedIcon,
      title: 'All PDF Tools',
      text: 'All 29 tools grouped by category, each with a one-line description, and a filter box at the top.',
    },
    {
      src: shot('03-global-search.webp'),
      icon: SearchRoundedIcon,
      title: 'Search with Ctrl/Cmd+K',
      text: 'The global search matches tool names, descriptions and keywords. Typing “pdf to” lists every Convert from PDF tool; Enter opens the highlighted one.',
    },
    {
      src: shot('04-merge.webp'),
      icon: CallMergeRoundedIcon,
      title: 'Merge: upload, then customize',
      text: 'Two sample PDFs are loaded with page previews. Drag the cards to set the order, rename or sort them, and the summary confirms that 6 pages will be merged.',
    },
    {
      src: shot('05-organize.webp'),
      icon: GridViewRoundedIcon,
      title: 'Organize pages',
      text: 'A thumbnail grid with per-page rotate, duplicate and delete. Here page 2 was duplicated and the last page rotated, and the toolbar adds selection, blank pages, pages from another PDF and undo.',
    },
    {
      src: shot('06-watermark.webp'),
      icon: BrandingWatermarkRoundedIcon,
      title: 'Watermark with live preview',
      text: 'Text or image watermarks with font, size, colour, opacity, rotation and position. The preview on the left updates as you change the options.',
    },
    {
      src: shot('07-edit-pdf.webp'),
      icon: EditNoteRoundedIcon,
      title: 'Edit PDF',
      text: 'A rectangle, a text note and a freehand line added with the editor toolbar. The Style panel edits the selected annotation and lists everything on the page.',
    },
    {
      src: shot('08-compress-result.webp'),
      icon: CompressRoundedIcon,
      title: 'Download step',
      text: 'The result screen offers Preview, Download and Start Again. For Compress it also compares the original and compressed size and shows the saving.',
    },
    {
      src: shot('09-my-files.webp'),
      icon: FolderRoundedIcon,
      title: 'My Files',
      text: 'Recent outputs with type, size, age and the tool that made them, ready to preview, download, rename or delete. They live only in this browser.',
    },
    {
      src: shot('10-dark-theme.webp'),
      icon: DarkModeRoundedIcon,
      title: 'Dark theme',
      text: 'Split PDF in the dark theme, with modes for every page, page ranges, selected pages or every N pages. The theme follows the system or can be set in Settings.',
    },
  ],
};
