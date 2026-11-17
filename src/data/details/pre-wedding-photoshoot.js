import PhotoCameraRoundedIcon from '@mui/icons-material/PhotoCameraRounded';
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
import SellRoundedIcon from '@mui/icons-material/SellRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import SlideshowRoundedIcon from '@mui/icons-material/SlideshowRounded';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import FamilyRestroomRoundedIcon from '@mui/icons-material/FamilyRestroomRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';

// Case study for https://github.com/raiden-56/pre-wedding-photoshoot (Saanjh Studio – a pre-wedding and wedding
// photography website with a studio dashboard and private client galleries). Every number below is counted from the
// repo: src/app, prisma/schema.prisma, prisma/seed.ts, src/content and src/lib/grid. Screenshots were taken headless at
// 1440×770 on the live GitHub Pages build at https://raiden-56.github.io/pre-wedding-photoshoot/, which is a read-only
// static export (scripts/build-demo.mjs) with the seeded sample data baked in at build time and “Continue as a guest”
// links in place of sign-in. The studio and couple screens were opened only through those guest links. The enquiry form
// was filled in for the picture but not submitted (in this build its action is a stand-in that only returns the
// read-only notice), and the Grid Studio frames were filled with the built-in sample photos; nothing was saved. The
// album page was opened by clicking through from the gallery cover, because on a direct load its first tiles stay
// blurred (see the bug notes in the hand-off).
const shot = (file) => `/projects/pre-wedding-photoshoot/${file}`;

export default {
  product: 'Saanjh Studio',
  accent: '#777A68',
  tagline:
    'A cinematic website for a pre-wedding and wedding photography studio, joined to a studio dashboard for enquiries, bookings, payments and deliveries, and a private gallery where each couple favourites, comments, selects and shares their photographs.',
  cover: shot('01-home-hero.webp'),
  overview: [
    'Saanjh Studio is a full photography studio platform built around a fictional Mumbai studio. The public site opens on a slow, cross-fading hero of five photographs that turns into a framed print with a white mat as you scroll, and goes on to a 24-photo portfolio with category filters and a lightbox, four couple stories, five collections with add-ons, six location guides, a 16-pose guide, a blog and a ten-field enquiry form. Behind it, the studio dashboard runs the work: clients, an inquiry → quotation → booking pipeline, a photoshoot calendar, payments (manual or Razorpay), invoices and an eight-tab workspace for every gallery. Each couple gets a private gallery with a cinematic cover, album chapters, a love-story timeline, favourites and selection lists, comments and edit requests, downloads, family sharing with QR codes, a Ken Burns slideshow and guest uploads, plus a small dashboard of their bookings and payments. A free Photo Grid Studio turns any photographs into collages from 32 templates.',
    'It is a Next.js 16 App Router project in TypeScript with Tailwind CSS 4, 39 page routes and 83 server actions, on Prisma 6 and PostgreSQL (42 models). Sessions live in the database behind an httpOnly cookie, originals sit outside public/ and are served only through HMAC-signed, expiring URLs, uploads stream through signed tickets, sharp makes WebP derivatives with lazy watermarking, and background work runs on a PostgreSQL job queue. Photographs are CC0 images and every couple, price and testimonial is labelled as sample content. The GitHub Pages copy is a static, read-only demo: the build copies the project, swaps sessions and server actions for read-only stand-ins and pre-renders every page with the seeded data, so studio pages render as the studio admin and couple pages as the sample couple. Browsing works; enquiries, bookings, payments, uploads, ZIP downloads and saving need the real server and database, and the README notes a few studio list pages are still to come.',
  ],
  highlights: [
    { value: 39, label: 'Page routes in the App Router' },
    { value: 83, label: 'Server actions' },
    { value: 42, label: 'Prisma data models' },
    { value: 32, label: 'Photo Grid Studio templates' },
  ],
  stack: [
    'Next.js 16 (App Router)',
    'React 19.2',
    'TypeScript',
    'Tailwind CSS 4',
    'Motion for React',
    'Lenis smooth scroll',
    'Motion Primitives',
    'Radix UI Dialog',
    'React Hook Form + Zod 4',
    'Prisma 6',
    'PostgreSQL (embedded for dev)',
    'sharp',
    'S3-compatible storage (aws4fetch)',
    'archiver (ZIP)',
    'Razorpay',
    'nodemailer',
    'qrcode · jsPDF',
    'bcryptjs',
    'lucide-react',
    'Cormorant Garamond · Manrope',
    'GitHub Pages static export',
  ],
  architecture: [
    { title: 'src/app', text: 'Route groups for the public site (site), sign-in and registration (auth), the studio dashboard (admin), the couple dashboard, private galleries with album, slideshow and upload pages, guest invitations and Grid Studio, plus three API routes for signed media, streamed uploads and the Razorpay webhook.' },
    { title: 'src/server', text: 'Server actions for admin, auth, galleries, gallery visitors, grid designs, payments, public enquiries and uploads. Each re-checks the role and studio ownership, and gallery-access.ts decides what a couple, invited guest or share link may do.' },
    { title: 'src/lib + prisma', text: 'Database sessions and bcrypt, rate limits, HMAC media URLs, local or S3 storage drivers, the grid layout and paint code shared by the editor and the exporters, and a 42-model schema from studios and bookings to galleries, favourites, invitations, jobs and grid designs.' },
    { title: 'scripts/build-demo.mjs', text: 'Builds the Pages demo without touching src: copies the project, swaps in a session stand-in that returns the seeded admin or couple, turns every server action into a read-only reply, pre-renders each dynamic page from the database and copies the gallery photographs in as static files.' },
  ],

  why: {
    intro:
      'A wedding photographer’s week is split across a portfolio site, a messaging app full of enquiries, a spreadsheet of bookings and payments, and a file-transfer link for the photographs. Couples get a folder of hundreds of files and a long email thread about which ones go in the album. Saanjh Studio puts the shop window, the studio’s paperwork and the couple’s gallery in one place.',
    points: [
      {
        icon: PhotoCameraRoundedIcon,
        title: 'A site that sells the mood',
        text: 'A slow cinematic hero, a filterable portfolio, stories, location guides and a pose guide show couples how a shoot will feel before they write in.',
      },
      {
        icon: EventNoteRoundedIcon,
        title: 'One pipeline for the paperwork',
        text: 'Every enquiry becomes a quotation, a booking, payments, a photoshoot and a delivered gallery, with the history kept on the client’s record.',
      },
      {
        icon: FavoriteRoundedIcon,
        title: 'Choosing photos together',
        text: 'Couples heart frames into separate album, social and partner lists, leave comments or edit requests on a photo, and send their selection to the studio.',
      },
      {
        icon: LockRoundedIcon,
        title: 'Private by default',
        text: 'Originals are never public: they are served through signed, expiring links after a permission check, with optional passwords, download PINs and watermarks.',
      },
    ],
    audience: [
      { title: 'Wedding photographers', text: 'Run enquiries, bookings, shoots, payments, invoices and gallery delivery from one studio dashboard.' },
      { title: 'Couples', text: 'Find a studio, send an enquiry, then relive, favourite and choose album photographs in a private gallery.' },
      { title: 'Family and guests', text: 'Open a personal invitation or a QR link to view the gallery or upload their own photos from the day.' },
      { title: 'Anyone with photos', text: 'Make a collage, Instagram grid or save-the-date in the free Photo Grid Studio and export it.' },
    ],
  },

  solves: [
    {
      problem: 'Enquiries arrive with half the details missing.',
      solution: 'A ten-field enquiry form asks for both names, contact details, one of seven shoot types, date, location, package and one of six budget ranges, saves it and notifies the studio.',
    },
    {
      problem: 'Leads get lost between chat, calls and spreadsheets.',
      solution: 'The Bookings page lists each inquiry with its status (new, contacted, quoted) and email, call and WhatsApp buttons, then Send quotation and Confirm & create booking.',
    },
    {
      problem: 'Pricing is hard to compare.',
      solution: 'Five collections show hours, photographers, edited photographs, film, album and locations side by side with their add-ons, and each has an Enquire link to the form.',
    },
    {
      problem: 'Payments are tracked by memory.',
      solution: 'Manual payments are recorded and verified by staff, online ones go through Razorpay with server-side signature checks and a signed webhook, and invoices are numbered per studio.',
    },
    {
      problem: 'Delivering hundreds of photos means a shared drive link.',
      solution: 'A private gallery with a cinematic cover, album chapters and a justified grid, uploaded through a resumable manager that runs three files at a time and skips duplicates.',
    },
    {
      problem: 'Album selection turns into a long email thread.',
      solution: 'Selection lists with limits (30 for the album, 10 for social in the sample), one list per partner, comments and edit requests on a photo, and Copy filenames for the studio.',
    },
    {
      problem: 'Family wants to see the photos too.',
      solution: 'Personal invitations, shareable links and guest upload links, each with its own view, favourite, comment, download and upload rights, shareable as a QR code and revocable.',
    },
    {
      problem: 'Photos leak once a link is out.',
      solution: 'HMAC-signed, expiring media URLs, password-protected galleries, a download PIN, watermarked previews and gallery expiry dates.',
    },
  ],

  features: [
    { icon: PhotoCameraRoundedIcon, title: 'Cinematic home page', text: 'Five hero photographs cross-fade every 6.5 seconds and settle into a matted print as you scroll, followed by the studio intro, featured work, a six-step process, stories, collections and testimonials.' },
    { icon: PhotoLibraryRoundedIcon, title: 'Portfolio', text: '24 photographs in a masonry layout under one wide feature image, filtered by Pre-Wedding, Wedding, Engagement, Couple Portraits or Destination, with a keyboard lightbox.' },
    { icon: SellRoundedIcon, title: 'Collections', text: 'Five packages from a ₹45,000 couple session to a ₹4,50,000 wedding collection, plus a destination package on request, each with three add-ons and labelled as sample pricing.' },
    { icon: PlaceRoundedIcon, title: 'Locations, stories and blog', text: 'Six location guides (Goa, Udaipur, Jaipur, Kerala, Coorg and the mountains) with seasons and golden-hour times, four couple stories and three planning articles.' },
    { icon: EmojiPeopleRoundedIcon, title: 'Pose guide', text: '16 poses in two groups, pre-wedding and post-wedding, each with a matching photograph, why it works and three steps to get it.' },
    { icon: EditNoteRoundedIcon, title: 'Enquiry form', text: 'Ten fields validated with React Hook Form and Zod. A real submission is saved to the database and creates a studio notification.' },
    { icon: DashboardRoundedIcon, title: 'Studio overview', text: 'Clients, active shoots, upcoming bookings, awaiting delivery, delivered galleries, pending payments and revenue, with six-month revenue and bookings charts, upcoming shoots, gallery activity and new inquiries.' },
    { icon: EventNoteRoundedIcon, title: 'Bookings pipeline', text: 'Inquiries, bookings and a calendar tab: quotations with line items, booking detail pages with payments and invoices, and photoshoots in a list or month calendar.' },
    { icon: CollectionsRoundedIcon, title: 'Gallery workspace', text: 'Eight tabs per gallery: photos with albums and bulk actions, selections, comments, guest uploads, album designs, sharing, settings and activity, with publish, archive and guarded delete.' },
    { icon: CloudUploadRoundedIcon, title: 'Upload pipeline', text: 'Signed upload tickets, streamed storage, per-file progress, three at a time, pause, resume, retry and duplicate detection, then background processing into thumb, medium and large WebP.' },
    { icon: FavoriteRoundedIcon, title: 'Favourites and selections', text: 'Hearts go into the active list; couples keep album, social and per-partner lists with limits and submit them to the studio.' },
    { icon: ShareRoundedIcon, title: 'Sharing and guest uploads', text: 'Personal invitations, view-only links and QR upload portals for wedding guests, with guest photos held for moderation before they join the gallery.' },
    { icon: SlideshowRoundedIcon, title: 'Slideshow and downloads', text: 'A full-screen Ken Burns slideshow, single-photo downloads and whole-gallery or album ZIPs built in the background, behind an optional PIN.' },
    { icon: AutoStoriesRoundedIcon, title: 'Love story and album designs', text: 'A love-story timeline on the gallery cover, a wedding countdown, and album designs the couple submits for the studio to review.' },
    { icon: FamilyRestroomRoundedIcon, title: 'Couple dashboard', text: 'Next shoot, amount paid, balance due, galleries and recent updates, with a page each for galleries and for bookings and payments.' },
    { icon: DashboardCustomizeRoundedIcon, title: 'Photo Grid Studio', text: '32 templates in categories such as Magazine, Cinematic, Polaroid and Instagram, a drag-and-drop editor with reframe, zoom, straighten, filters, text and undo, Smart Auto Layout in five styles, and PNG, JPG or PDF export.' },
    { icon: LockRoundedIcon, title: 'Security', text: 'Database sessions with hashed tokens, bcrypt, rate-limited sign-in, role and ownership checks in every action, signed media URLs and noindex headers on private pages.' },
    { icon: ChecklistRoundedIcon, title: 'Read-only static demo', text: 'A separate build pre-renders every page from the seed data, swaps sign-in for Continue as a guest and answers every change with a read-only notice, so the whole app can be browsed on GitHub Pages.' },
  ],

  steps: [
    { icon: PhotoCameraRoundedIcon, title: 'Open the site', text: 'Open the live demo and scroll slowly from the top: the hero photograph shrinks into a framed print before the studio intro and featured work.' },
    { icon: PhotoLibraryRoundedIcon, title: 'Browse the work', text: 'In Our Work, pick a category and click any photograph for the lightbox. Pre-Wedding, Wedding, Poses and Stories open the other public pages.' },
    { icon: SellRoundedIcon, title: 'Compare collections', text: 'Open Packages from the footer to compare the five collections and their add-ons, then press Enquire on one.' },
    { icon: EditNoteRoundedIcon, title: 'Look at the enquiry form', text: 'On Contact, the form shows every field a studio needs. In the demo nothing is sent: submitting only shows the read-only notice.' },
    { icon: LoginRoundedIcon, title: 'Continue as a guest', text: 'Press Client gallery in the header. Instead of a sign-in form, pick the studio dashboard, the couple’s dashboard, a private gallery or Photo Grid Studio.' },
    { icon: DashboardRoundedIcon, title: 'Walk the studio side', text: 'In the studio dashboard, read the overview, open Bookings for the inquiry pipeline, then Galleries → Aarav & Ananya for the eight-tab workspace.' },
    { icon: FavoriteRoundedIcon, title: 'Be the couple', text: 'Open the private gallery, press View 34 photographs, switch albums, open a photo in the lightbox and try Selections, Slideshow and Share.' },
    { icon: TerminalRoundedIcon, title: 'Run the real app', text: 'Clone the repo, copy .env.example, run npm run db:local for an embedded PostgreSQL, then prisma db push, npm run db:seed and npm run dev on port 3100 to sign in and save.' },
  ],
  shortcuts: [
    { keys: ['←', '→'], action: 'Previous or next photo in the portfolio and gallery lightboxes and the slideshow' },
    { keys: ['Esc'], action: 'Close a lightbox; deselect the frame or text in Grid Studio' },
    { keys: ['F'], action: 'Favourite the open photo in the gallery lightbox' },
    { keys: ['Space'], action: 'Play or pause the gallery slideshow' },
    { keys: ['Ctrl / ⌘', 'Z'], action: 'Undo in the Grid Studio editor' },
    { keys: ['Ctrl / ⌘', 'Shift', 'Z'], action: 'Redo in the Grid Studio editor (Ctrl / ⌘ Y also works)' },
    { keys: ['Delete'], action: 'Remove the photo from the selected Grid Studio frame (Backspace also works)' },
  ],

  screenshots: [
    {
      src: shot('01-home-hero.webp'),
      icon: PhotoCameraRoundedIcon,
      title: 'Home page hero',
      text: '“Every love story deserves its own frame” over the third of five cross-fading photographs, a lakeside pier in morning light, with Book your photoshoot and See our stories. The badge at the bottom left marks the read-only demo.',
    },
    {
      src: shot('02-portfolio.webp'),
      icon: PhotoLibraryRoundedIcon,
      title: 'Portfolio',
      text: 'Under the wide Goa feature image, the masonry grid of sample photographs in four columns. The category pills above filter the 24 photographs, and any tile opens the lightbox.',
    },
    {
      src: shot('03-packages.webp'),
      icon: SellRoundedIcon,
      title: 'Collections',
      text: 'The Essential Couple Session at ₹45,000, the highlighted Signature Pre-Wedding at ₹1,25,000 and the Cinematic Love Story at ₹2,35,000, each with coverage, photographers, edited photographs, film, album, locations, add-ons and an Enquire button.',
    },
    {
      src: shot('04-inquiry-form.webp'),
      icon: EditNoteRoundedIcon,
      title: 'Enquiry form',
      text: '“Let’s talk about you two”: the form filled in for a Kerala backwaters pre-wedding, with photoshoot type, preferred date, package, six budget ranges and a message. It was not submitted.',
    },
    {
      src: shot('05-guest-mode.webp'),
      icon: LoginRoundedIcon,
      title: 'Continue as a guest',
      text: 'The demo’s Client gallery page. Sign-in is switched off because there is no server, so it offers four ways in: the studio dashboard, the couple’s dashboard, a private gallery and Photo Grid Studio.',
    },
    {
      src: shot('06-studio-overview.webp'),
      icon: DashboardRoundedIcon,
      title: 'Studio overview',
      text: 'Rhea’s overview: 5 clients, 4 active photoshoots, 3 upcoming bookings, 1 awaiting delivery, 2 delivered galleries, ₹3,70,000 in two pending payments and ₹14,75,000 verified revenue, above revenue and bookings charts for the last six months.',
    },
    {
      src: shot('07-bookings-pipeline.webp'),
      icon: EventNoteRoundedIcon,
      title: 'Inquiries and bookings',
      text: 'Inquiry → quotation → booking → payment → photoshoot → delivery. Three inquiries (new, contacted and quoted), each with the couple’s message, package, budget and latest quote, contact buttons and the next step; 12 bookings sit in the next tab.',
    },
    {
      src: shot('08-gallery-workspace.webp'),
      icon: CollectionsRoundedIcon,
      title: 'Gallery workspace',
      text: 'Aarav & Ananya’s published, private gallery, expiring in May 2027: 34 files, 33 favourites, 3 open comments and 3 active invites, the eight workspace tabs, six albums with their counts and the upload drop zone.',
    },
    {
      src: shot('09-private-gallery.webp'),
      icon: FavoriteRoundedIcon,
      title: 'Private gallery album',
      text: 'The couple’s Sunset Session album (8 photographs) with the album tabs and the toolbar: a favourites-only filter (4 hearts so far), Selections, square or natural rows, slideshow, download, guest upload and Share. The heart on a tile marks a favourite.',
    },
    {
      src: shot('10-grid-studio.webp'),
      icon: DashboardCustomizeRoundedIcon,
      title: 'Photo Grid Studio',
      text: 'The Magazine Spread template (1080×1350) after Fill 4 empty frames placed four of the 20 sample photos, with the Layouts, Photos, Auto, Text and Style panels, undo and Export.',
    },
  ],
};
