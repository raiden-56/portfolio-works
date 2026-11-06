import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import EnhancedEncryptionRoundedIcon from '@mui/icons-material/EnhancedEncryptionRounded';
import MarkEmailReadRoundedIcon from '@mui/icons-material/MarkEmailReadRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';

// Case study for Study Hub, a private course library. Live site: https://raiden-56.github.io/studyhub/ (sign-in
// required). The GitHub repo github.com/raiden-56/studyhub holds only the built site on its gh-pages branch:
// scripts/deploy.mjs builds the app and force-pushes the dist folder as one fresh commit. The source lives locally in
// C:\abb_project_folder\Study\study-hub, and every number below is counted from its code and src/data/materials.json.
// Screenshots were NOT taken on the live site: they come from a throwaway local copy of the source that was given
// test credentials (with its study files re-encrypted for that test login), captured headless at 1440×770. The capture
// script signed in to that copy, ticked modules in six courses, took three practice quizzes and made four download
// requests as “Test Student” at an @studyhub.test address; the copy has no EmailJS keys, so no email was sent.
const shot = (file) => `/projects/studyhub/${file}`;

export default {
  product: 'Study Hub',
  accent: '#d9691c',
  tagline:
    'A private course library for seven programming decks: dashboard, modules and key takeaways, a watermarked slide preview, practice quizzes and progress tracking, with the slide files encrypted until you sign in.',
  cover: shot('02-dashboard.webp'),
  overview: [
    'Study Hub is a personal web app built around seven course decks (Python, SQL, JavaScript, TypeScript, React with TypeScript, Java and Node.js), each kept as an editable PowerPoint with speaker notes and a PDF. Together they hold 112 modules, 1,696 slides, 662 topics, 1,564 code examples, 150 real-world examples and 112 quiz questions, all described in one materials.json. The dashboard counts it all up and shows your own progress; the library filters and sorts the courses; each course page lists its 16 modules with topics, five key takeaways and real-world examples, and lets you tick modules as done. A practice quiz draws from the module recaps, a preview shows the first 12 slides of a deck inside the app, and the full files are requested through a short form that saves the file and emails a link. Progress, quiz scores and download history are kept in the browser’s localStorage.',
    'The hosted site at raiden-56.github.io/studyhub is private: everything sits behind a sign-in, and its GitHub repository holds only the built site. It is a static site with no server, so the protection happens in the browser. The bundle stores only salted PBKDF2-SHA256 hashes of the email and password (210,000 iterations, compared in constant time), five wrong attempts lock the form for 60 seconds, and sessions last 8 hours or 7 days. The 14 deck files are published only as AES-256-GCM ciphertext under random names, encrypted with a key derived from the password, so they can be opened only after a correct sign-in. The preview is drawn with pdf.js onto canvases under a “Study Hub · Preview only” watermark, and emailed links point back to the app, never to a file. The README is clear about the limits: anyone who knows the password can download everything, a preview can still be screenshotted, and the lockout lives in the browser, so the real defence is the slow hash and a strong password.',
  ],
  highlights: [
    { value: 7, label: 'Courses, each as PPTX and PDF' },
    { value: 112, label: 'Modules with key takeaways' },
    { value: 1696, label: 'Slides across the decks' },
    { value: 112, label: 'Practice quiz questions' },
  ],
  stack: [
    'React 19',
    'TypeScript',
    'Vite 8',
    'React Router 7 (HashRouter)',
    'Motion for React',
    'Recharts',
    'pdf.js',
    'EmailJS',
    'Web Crypto (PBKDF2 · AES-GCM)',
    'lucide-react',
    'Montserrat · JetBrains Mono',
    'CSS design tokens',
    'Node.js build scripts',
    'GitHub Pages',
  ],
  architecture: [
    { title: 'src/pages + components', text: 'Seven lazily loaded pages (Dashboard, Library, course page, Practice, Progress, Downloads, and the Get page that emailed links open) inside a layout with a sidebar, global search and a theme switch. The download form, the slide preview and toasts are app-wide providers.' },
    { title: 'src/auth', text: 'credentials.ts holds only salts and PBKDF2 hashes. auth.ts hashes what you type, compares both values in constant time, keeps the failed-attempt lock and the session, and derives the file key from the password after a correct login.' },
    { title: 'src/lib + src/data', text: 'files.ts fetches an encrypted deck, decrypts it with AES-GCM and saves it or hands it to pdf.js; email.ts sends the EmailJS message; store.ts keeps progress, scores and downloads in localStorage. materials.json describes every course, module, topic and quiz.' },
    { title: 'scripts', text: 'make-credentials writes new hashes and re-encrypts the decks, sync-materials encrypts the PPTX and PDF files into public/materials after checking the password, and deploy builds the site and force-pushes only dist to the gh-pages branch.' },
  ],

  why: {
    intro:
      'A set of long course decks is easy to make and hard to use. The files sit in a folder, nobody remembers which module comes next, and sharing them means sending 2–2.6 MB attachments that anyone can forward. Study Hub turns the decks into a small private library: you see what each course covers, practise, track what you have finished, and the files themselves stay locked behind a sign-in.',
    points: [
      {
        icon: MenuBookRoundedIcon,
        title: 'The decks, described',
        text: 'Every module shows its slide and example counts, the topics it teaches, five key takeaways and its real-world examples, so you can find the right part of a 250-slide deck without opening it.',
      },
      {
        icon: TaskAltRoundedIcon,
        title: 'Know where you are',
        text: 'Tick modules as you finish them. The dashboard and My progress show each course’s progress, the next unfinished module and your best quiz score.',
      },
      {
        icon: QuizRoundedIcon,
        title: 'Check what stuck',
        text: 'One multiple-choice question per module, 112 in all, with an explanation for every answer. Quiz one course or mix all seven, in rounds of 5, 10 or 16.',
      },
      {
        icon: LockRoundedIcon,
        title: 'Private on a public host',
        text: 'GitHub Pages serves files to anyone, so the decks are published only encrypted, and the email and password exist in the code only as salted hashes.',
      },
    ],
    audience: [
      { title: 'The course owner', text: 'Keep seven decks in one place, follow your own progress and hand out the files without public links.' },
      { title: 'Students and freshers', text: 'Work through Python, SQL, JavaScript, TypeScript, React, Java or Node.js module by module and practise before an interview.' },
      { title: 'Small study groups', text: 'Share the site and its password with a few people; each browser keeps its own progress, scores and download history.' },
      { title: 'Anyone hosting private files statically', text: 'A worked example of hashed sign-in and browser-side AES decryption on a host with no server.' },
    ],
  },

  solves: [
    {
      problem: 'A folder of 250-slide decks says nothing about what is inside.',
      solution: 'materials.json describes every course and module: topics, slide and code-example counts, key takeaways, real-world examples and a quiz question, shown on course pages and searchable from the top bar.',
    },
    {
      problem: 'It is easy to lose track of which modules are done.',
      solution: 'A tick per module, progress bars and rings per course, “Continue learning” with the next module of each course, and a 16-square grid on My progress that toggles modules directly.',
    },
    {
      problem: 'Reading slides is not the same as remembering them.',
      solution: 'A practice quiz built from the module recaps: shuffled questions, instant right-or-wrong feedback with the explanation, a results review and a score history.',
    },
    {
      problem: 'A static host would publish the decks to anyone who finds the URL.',
      solution: 'The deployed files are AES-256-GCM ciphertext with random names. The key is derived from the password at sign-in, so a direct download gets unreadable bytes.',
    },
    {
      problem: 'A login in a static site usually means a password in the JavaScript.',
      solution: 'Only salted PBKDF2-SHA256 hashes are shipped (210,000 iterations). Both checks always run in constant time, and five wrong attempts pause the form for a minute.',
    },
    {
      problem: 'People want a look at a course before they ask for it.',
      solution: 'A view-only preview of the first 12 slides, drawn on canvases under a watermark, with right-click, Ctrl+S and Ctrl+P blocked and printing blanked while it is open.',
    },
    {
      problem: 'Emailing a 2.5 MB deck lets anyone who gets the email open it.',
      solution: 'The download form emails a Study Hub link (#/get/<course>/<format>) through EmailJS. Opening it asks for the sign-in, then the file is decrypted and saved on that device.',
    },
    {
      problem: 'Changing a shared password would leave old copies working.',
      solution: 'make-credentials writes new hashes and re-encrypts every deck with a key from the new password, so previously downloaded encrypted files no longer open.',
    },
  ],

  features: [
    { icon: DashboardRoundedIcon, title: 'Dashboard', text: 'Eight count-up cards (materials, slides, modules, code examples, real-world examples, quiz questions with your average, your progress, downloads), a content-by-course bar chart with four metrics, progress by course, continue learning, recent downloads and every topic at a glance.' },
    { icon: LocalLibraryRoundedIcon, title: 'Library', text: 'All seven courses as cards with modules, slides, examples and progress. Category tabs (Languages, Databases, Frameworks, Back end), a topic filter and four sorts: course order, name, most slides and most progress.' },
    { icon: MenuBookRoundedIcon, title: 'Course pages', text: 'Level, subtitle and counts, the progress ring, PDF and PowerPoint buttons with file sizes, and 16 expandable modules with topics, key takeaways, real-world examples, a practice link and a done tick. Mark all done or reset in one click.' },
    { icon: VisibilityRoundedIcon, title: 'Watermarked preview', text: 'The first 12 slides of the PDF, decrypted in the browser and rendered by pdf.js onto canvases as you scroll, under a repeated “Study Hub · Preview only” watermark, with text selection, right-click, save and print blocked.' },
    { icon: QuizRoundedIcon, title: 'Practice quiz', text: '112 questions, one per module. Pick a course or all of them and 5, 10 or 16 questions; each answer shows right or wrong at once with an explanation, and the results screen lists every question with the correct answer for misses.' },
    { icon: HistoryRoundedIcon, title: 'Score history', text: 'The last attempts with their course, date and score badge, your average on the dashboard and your best score per course on My progress.' },
    { icon: InsightsRoundedIcon, title: 'My progress', text: 'Overall progress ring, modules done, courses started and finished, quizzes taken, and a card per course with its ring, best quiz, a grid of 16 module buttons and the next module to open.' },
    { icon: DownloadRoundedIcon, title: 'Download form', text: 'Name, email and format (PDF or PowerPoint with their sizes), validated and remembered for next time. The file is decrypted and saved on the device, and each request is logged.' },
    { icon: MarkEmailReadRoundedIcon, title: 'Emailed links', text: 'With EmailJS keys set, the requester gets an email with the course, format, size, module and slide counts and a Study Hub link that asks for the sign-in. Without keys the form says so and still saves the file.' },
    { icon: HistoryRoundedIcon, title: 'Download history', text: 'Every request with course, format, name, email, time and status (Emailed, Saved with email off, or Email failed), a course filter, Clear, and “Again” to reopen the form.' },
    { icon: SearchRoundedIcon, title: 'Global search', text: 'Searches course titles, module names, subtitles, topics and real-world examples, matching every word typed, and opens the course with that module expanded. Arrow keys, Enter and Escape work in the list.' },
    { icon: KeyRoundedIcon, title: 'Hashed sign-in', text: 'Salted PBKDF2-SHA256 hashes only, a case-insensitive email, a five-attempt lockout with a countdown, and sessions of 8 hours or 7 days with “Keep me signed in”.' },
    { icon: EnhancedEncryptionRoundedIcon, title: 'Encrypted study files', text: '14 files (about 33 MB) stored as AES-256-GCM ciphertext under random names. Decrypted copies are cached only in the tab and dropped on logout.' },
    { icon: DarkModeRoundedIcon, title: 'Dark mode and layouts', text: 'Light and dark themes that follow the system until you choose, a drawer menu on tablets and phones, and animations that respect reduced-motion settings.' },
    { icon: TerminalRoundedIcon, title: 'Owner scripts', text: 'make-credentials sets a new login and re-encrypts the decks, sync-materials encrypts new or updated decks after checking the password, and deploy publishes only the built site.' },
  ],

  steps: [
    { icon: LoginRoundedIcon, title: 'Sign in', text: 'Open the site and sign in with the email and password you were given. Tick “Keep me signed in for 7 days” on your own device; otherwise the session ends after 8 hours.' },
    { icon: DashboardRoundedIcon, title: 'Read the dashboard', text: 'See the size of the library, your progress and quiz average, switch the chart between slides, code examples, real-world examples and topics, and pick up where you left off.' },
    { icon: LocalLibraryRoundedIcon, title: 'Find a course', text: 'In the Library, filter by category or topic and sort the cards, or type a topic such as “joins” in the top search bar to jump straight to a module.' },
    { icon: MenuBookRoundedIcon, title: 'Work through modules', text: 'On a course page, open a module to read its topics, key takeaways and real-world examples, and tick it when you finish it.' },
    { icon: VisibilityRoundedIcon, title: 'Preview the slides', text: 'Press Preview first 12 slides to read the start of a deck inside the app. Press Escape or the close button to return.' },
    { icon: QuizRoundedIcon, title: 'Take a practice quiz', text: 'In Practice quiz, choose a course or all courses and 5, 10 or 16 questions. Read the explanation after each answer and review the misses at the end.' },
    { icon: DownloadRoundedIcon, title: 'Get the full course', text: 'Press Download PDF or Download PowerPoint, enter your name and email, and the file is saved on your device; with email set up, a sign-in link is sent too. Downloads lists every request.' },
    { icon: TerminalRoundedIcon, title: 'Run your own copy', text: 'With Node.js 20+, run npm install, set a login with npm run make-credentials, encrypt the decks with npm run sync-materials, add the EmailJS keys to .env (EMAIL_SETUP.md) and publish with npm run deploy.' },
  ],
  shortcuts: [
    { keys: ['↑', '↓'], action: 'Move through the search results' },
    { keys: ['Enter'], action: 'Open the selected search result' },
    { keys: ['Esc'], action: 'Close the search results, the download form or the slide preview' },
    { keys: ['Ctrl / ⌘', 'S'], action: 'Blocked while the slide preview is open (so is Ctrl / ⌘ P)' },
  ],

  screenshots: [
    {
      src: shot('01-login.webp'),
      icon: LockRoundedIcon,
      title: 'Sign-in',
      text: 'The only page you see without a session: the seven course badges, 112 modules, 1,696 slides and 1,564+ code examples on the left, and the sign-in form with the 7-day option and a note that credentials are checked against salted hashes and the notes are encrypted.',
    },
    {
      src: shot('02-dashboard.webp'),
      icon: DashboardRoundedIcon,
      title: 'Dashboard',
      text: 'Eight KPI cards: 7 study materials (14 files, 33.0 MB), 1,696 slides, 112 modules covering 662 topics, 1,564 code examples, 150 real-world examples, 112 quiz questions with a 90% average, 30% progress (34 of 112 modules) and 4 downloads, above the slides-per-course chart and progress by course.',
    },
    {
      src: shot('03-library.webp'),
      icon: LocalLibraryRoundedIcon,
      title: 'Library',
      text: 'Course cards with category and level, a short description, module, slide and example counts and a progress bar (Python at 100%, SQL at 44%, JavaScript at 31%), with Open, Preview and Get on each, under the category tabs, topic filter and sort.',
    },
    {
      src: shot('04-course.webp'),
      icon: MenuBookRoundedIcon,
      title: 'Course page',
      text: 'SQL for Freshers: 16 modules, 238 slides, 183 code examples, 20 real-world examples and 16 quiz questions, 7 of 16 modules done. Module 01, Database Basics, is open with its topics, five key takeaways and the download and preview buttons above.',
    },
    {
      src: shot('05-preview.webp'),
      icon: VisibilityRoundedIcon,
      title: 'Watermarked preview',
      text: 'The Python deck’s title slide, decrypted in the browser and drawn by pdf.js under the repeated “Study Hub · Preview only” watermark. The header says it is the first 12 of 246 slides, view only, with Get full course leading to the download form.',
    },
    {
      src: shot('06-practice-quiz.webp'),
      icon: QuizRoundedIcon,
      title: 'Practice quiz',
      text: 'Question 3 of a mixed 10-question round, from React with TypeScript, Module 01. The wrong pick is marked in red, the right answer in green, and the explanation says React diffs the new virtual tree and patches only the differences.',
    },
    {
      src: shot('07-progress.webp'),
      icon: InsightsRoundedIcon,
      title: 'My progress',
      text: '30% overall: 34 of 112 modules done, 6 of 7 courses started, 1 finished and 3 quizzes taken. Each course card has its ring, best quiz score (80% for Python, 100% for SQL), a grid of its 16 modules and the next module to open.',
    },
    {
      src: shot('08-downloads.webp'),
      icon: DownloadRoundedIcon,
      title: 'Download form and history',
      text: '“Again” on the Downloads page reopens the form for React with TypeScript, filled in with the saved name and email and the PowerPoint chosen. Behind it are the four logged requests, and the notice says email is off until the EmailJS keys are added.',
    },
    {
      src: shot('09-search.webp'),
      icon: SearchRoundedIcon,
      title: 'Global search',
      text: '“async” in the top bar finds Async JavaScript, Async & Error Types in TypeScript, and two Node.js modules that mention it, each with its course and module number.',
    },
    {
      src: shot('10-dark-mode.webp'),
      icon: DarkModeRoundedIcon,
      title: 'Dark mode',
      text: 'The lower half of the dashboard in the dark theme: progress by course, Continue learning with the next module in each started course, and Recent downloads with format, address, time and a Saved badge.',
    },
  ],
};
