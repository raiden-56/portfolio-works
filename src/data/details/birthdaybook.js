import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import AlarmRoundedIcon from '@mui/icons-material/AlarmRounded';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import PaletteRoundedIcon from '@mui/icons-material/PaletteRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import HourglassBottomRoundedIcon from '@mui/icons-material/HourglassBottomRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import TableViewRoundedIcon from '@mui/icons-material/TableViewRounded';
import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';
import WifiOffRoundedIcon from '@mui/icons-material/WifiOffRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import InstallMobileRoundedIcon from '@mui/icons-material/InstallMobileRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';

// Case study for https://github.com/raiden-56/birthdaybook (BirthdayBook 2.0 – birthdays, anniversaries and
// celebrations for web, Android and iPhone). Live site: https://raiden-56.github.io/birthdaybook/. Every number below
// is counted from the repo (app/, components/, services/, platform/, types/, tests/). Screenshots were taken on the
// live GitHub Pages build with headless Chrome at 1440×770 on 17 November 2026, timezone Asia/Kolkata. The app starts
// empty, so the capture script pressed “Try with sample data”, which loads the app’s own made-up people with dates
// relative to the current day (so the dates a visitor sees will differ). It then edited Asha Verma with a fictional
// phone number and an example.com address, ticked two checklist items, and loaded a made-up seven-row CSV into the
// import wizard without importing it. Notification permission was granted to the headless browser, so the web
// reminder engine booked its in-browser reminders as it would after “Allow notifications”. Shots 1–9 are in the
// light theme; shot 10 switched to Dark in Settings. No account exists and no password was typed.
const shot = (file) => `/projects/birthdaybook/${file}`;

export default {
  product: 'BirthdayBook',
  accent: '#563B5C',
  tagline:
    'Birthdays, anniversaries and the details around them, kept on your own device: a today view, five calendar views, profiles with reminders, gifts, notes and a yearly checklist, cards and messages, with Excel as the copy you carry between web, Android and iPhone.',
  cover: shot('01-today.webp'),
  overview: [
    'BirthdayBook 2.0 is a birthday and celebration manager for the web, Android and iPhone. The Today screen shows who celebrates today, a countdown to the next date, the next 60 days, a belated assistant for anything missed in the last 14 days, milestones ahead and the year’s gift status. The calendar has month, week, day, agenda and year views with filters by type and relationship and an .ics export. Each person gets a profile with reminders, a yearly checklist, gifts, relationship notes, wish history and linked occasions, and six occasion types (anniversary, wedding, work anniversary, graduation, remembrance and custom) can repeat yearly or happen once. Around that sit a gift planner that moves ideas through planned, purchased, wrapped and given with budgets, a card studio with six canvas designs in three formats, a message centre with six tones that sends through WhatsApp, SMS, email or the share sheet and records the wish, and birthday statistics. There is no account, no server and no cloud database: data stays on the device, and an Excel workbook is the portable copy.',
    'One Next.js 16 static export is published to GitHub Pages as an installable, offline PWA and bundled unchanged into Capacitor 8 shells for Android and iOS. The UI talks only to a repository and a reminder scheduler, which take adapters chosen at start-up: IndexedDB and browser notifications on the web, JSON files with a .bak copy per write and Capacitor Local Notifications on phones. The planner turns every enabled reminder into fire times in a rolling window (120 days by default) with stable 31-bit IDs, and the scheduler cancels what moved, books what is missing, then reads the pending list back and only counts what the system confirms. iOS gets the soonest 60 of its 64 slots; on Android exact alarms are requested only if you turn on Precise timing. The web version says plainly that browsers cannot book OS alarms: reminders are checked every 30 seconds while a tab or the installed app is open, anything missed in the last 12 hours shows when you return, and for reminders with the browser closed it points to the .ics export or the phone app. The nine-sheet workbook round-trips with IDs, other spreadsheets go through a mapping wizard, the last five safety snapshots allow an undo, and 62 Vitest tests run in CI before every deploy.',
  ],
  highlights: [
    { value: 7, label: 'Celebration types (birthday + 6 occasions)' },
    { value: 5, label: 'Calendar views' },
    { value: 9, label: 'Sheets in the Excel workbook' },
    { value: 62, label: 'Unit tests' },
  ],
  stack: [
    'Next.js 16 (static export)',
    'React 19',
    'TypeScript',
    'Tailwind CSS 4',
    'Framer Motion',
    'date-fns 4',
    'SheetJS (xlsx)',
    'IndexedDB (idb)',
    'Capacitor 8',
    'Capacitor Local Notifications',
    'Service worker PWA',
    'lucide-react',
    'Playfair Display · Inter',
    'Vitest + fake-indexeddb',
    'GitHub Actions · GitHub Pages',
  ],
  architecture: [
    { title: 'app + components', text: '13 client-rendered pages in a static export (Today, Calendar, People, the person profile, Occasions, Alarm Centre, Gift Planner, Card Studio, Messages, Statistics, Excel & Backup, Settings, and More on phones), a sidebar on desktop and a five-tab bottom bar on phones, with forms in focus-trapped sheets and deep links through query strings so they also work inside Capacitor.' },
    { title: 'services', text: 'The shared logic, identical on every platform: date maths with leap-day rules, ages, milestones and star signs; celebration events, countdowns and the .ics file; the pure reminder planner and the reconciling scheduler; Excel reading, writing, column mapping and import preview; the repository with snapshots; backups, gifts, cards and message templates.' },
    { title: 'platform', text: 'Adapters picked at start-up. Web: IndexedDB with one store per collection and a browser notification adapter that ticks every 30 seconds. Native: JSON files in the app’s private data folder with a .bak copy, Capacitor Local Notifications, three Android notification channels, exact-alarm handling and the iOS 64-slot limit.' },
    { title: 'android, ios, scripts, CI', text: 'Committed Capacitor projects (Android min SDK 24, target 36; iOS 15), a post-build script that writes the service-worker precache list, an icon generator, and a GitHub Actions workflow that runs the tests, builds under /birthdaybook and publishes the out folder to gh-pages.' },
  ],

  why: {
    intro:
      'Birthday reminders usually live in a social network, a shared calendar or a spreadsheet nobody opens. The first two want an account and your contacts, the last one never reminds you, and none of them remembers what you gave last year or whether you actually wished someone. BirthdayBook keeps the dates and the details in one private place and is honest about when a reminder will really arrive.',
    points: [
      {
        icon: LockRoundedIcon,
        title: 'Private by default',
        text: 'No sign-up, no server and no cloud copy. People, notes and gifts stay in the browser’s IndexedDB or the phone’s private app storage until you export them.',
      },
      {
        icon: NotificationsActiveRoundedIcon,
        title: 'Reminders you can trust',
        text: 'On Android and iPhone reminders are booked with the operating system and checked back, so the Alarm Centre shows exactly what is confirmed and what needs fixing.',
      },
      {
        icon: TableViewRoundedIcon,
        title: 'Excel as the master copy',
        text: 'Bring in the spreadsheet you already have, and take everything to another device as a workbook you can read and edit in Excel.',
      },
      {
        icon: CardGiftcardRoundedIcon,
        title: 'More than a date',
        text: 'Gift ideas and budgets, a checklist for the day, notes about what they like, a card, a message and a record of every year you wished them.',
      },
    ],
    audience: [
      { title: 'The family organiser', text: 'Keep every birthday, wedding anniversary and remembrance day for the family in one place, with a countdown and the next 60 days on one screen.' },
      { title: 'Anyone with a birthday spreadsheet', text: 'Import the old Excel or CSV list with a preview, fix the rows it flags and keep exporting it as the backup.' },
      { title: 'Small teams and freelancers', text: 'Track colleagues’ and clients’ birthdays and work anniversaries, with formal message templates and gift budgets.' },
      { title: 'Privacy-minded users', text: 'Get reminders and planning tools without handing a contact list to an online service.' },
    ],
  },

  solves: [
    {
      problem: 'Birthday tools usually need an account and upload your contacts.',
      solution: 'Everything is stored on the device (IndexedDB on the web, JSON files in the app’s private folder on phones). Nothing leaves it unless you export a file.',
    },
    {
      problem: 'A reminder app can say “scheduled” and then never fire.',
      solution: 'After booking, the scheduler reads the pending list back from the system and only counts confirmed IDs. Health shows Enabled, Disabled, Permission required or Schedule needs refreshing, with a fix for each.',
    },
    {
      problem: 'Phones limit and throttle alarms.',
      solution: 'iOS gets the soonest 60 of its 64 pending slots and the window is topped up on every open; Android stays under AlarmManager’s cap and asks for exact alarms only when you turn on Precise timing.',
    },
    {
      problem: 'Browsers cannot wake up to deliver a reminder.',
      solution: 'The web app says so. It fires while a tab or the installed PWA is open, shows anything missed in the last 12 hours, and exports an .ics file with alarms for Google, Apple or Outlook calendars.',
    },
    {
      problem: '29 February birthdays disappear three years in four.',
      solution: 'They are observed on 28 February or 1 March in non-leap years, set globally with a per-person override, and marked as an observed date wherever they appear.',
    },
    {
      problem: 'Dates shift by a day across timezones and Excel imports.',
      solution: 'Birthdays are stored as month, day and optional year, never as timestamps; Excel serial dates are converted with UTC maths; reminders are re-planned after a timezone change.',
    },
    {
      problem: 'Every birthday spreadsheet has different columns and date formats.',
      solution: 'The import wizard guesses the column mapping (Name, DOB, Mobile, Relation…), lets you pick day-first or month-first, previews each row with errors and duplicates, and downloads an error report as CSV.',
    },
    {
      problem: 'There is no sync, and a bad import or delete is hard to undo.',
      solution: 'The full workbook and JSON backup restore on any device by merge or replace, and a safety snapshot is saved before every import, restore, person delete and Erase all data, keeping the last five.',
    },
  ],

  features: [
    { icon: TodayRoundedIcon, title: 'Today', text: 'Today’s celebrations with Mark as wished, Message and Card, a countdown to the next one, the next 60 days, the month’s count, the belated assistant, milestones ahead, the gift summary and the reminder status.' },
    { icon: CalendarMonthRoundedIcon, title: 'Five calendar views', text: 'Month, week, day, agenda (next 12 months) and year, with swipe or arrow buttons to move, filters for birthdays or occasions and for each of the seven relationships, and an .ics export.' },
    { icon: PeopleAltRoundedIcon, title: 'People', text: 'Search by name, nickname, tag, phone or email, filter by relationship, sort by next birthday, name or calendar order, with close-circle favourites pinned first and an archive for people you no longer need reminders for.' },
    { icon: PersonRoundedIcon, title: 'Profiles', text: 'Age, countdown, star sign, tags and a leap-day badge, call and email links, reminders, a yearly checklist of five default tasks, gifts, relationship notes in five kinds, wish history and shared occasions.' },
    { icon: FavoriteRoundedIcon, title: 'Occasions', text: 'Anniversaries, weddings, work anniversaries, graduations, remembrance days and custom dates, linked to people, recurring or one-off, with years together, milestone badges and their own reminders.' },
    { icon: AlarmRoundedIcon, title: 'Reminder editor', text: 'Any number of rules per person or occasion: from 30 days before to on the day, at a time you choose, or on a custom one-off date, each showing its next fire time. New people get the defaults of 1 week, 3 days, 1 day and on the day at 09:00.' },
    { icon: NotificationsActiveRoundedIcon, title: 'Alarm Centre', text: 'Health, booked and confirmed counts, how far the schedule reaches, refresh and test buttons, default offsets, the list of what is booked, and per-platform help: Precise timing and battery-saver advice on Android, the 64-slot meter on iOS, install and calendar export on the web.' },
    { icon: CardGiftcardRoundedIcon, title: 'Gift Planner', text: 'Gifts per year moving from idea to planned, purchased, wrapped and given, with budget, price, link and notes, totals for budgeted and spent in your currency, and a list of who still needs a gift in the next 60 days.' },
    { icon: PaletteRoundedIcon, title: 'Card Studio', text: 'Six canvas-drawn designs in square, portrait and story sizes, prefilled with the name, a message and an age badge, saved as a PNG or shared.' },
    { icon: ForumRoundedIcon, title: 'Message centre', text: 'Three templates in each of six tones (warm, heartfelt, funny, short, formal, belated), plus anniversary wording, picked by relationship. Send through WhatsApp, SMS, email or the share sheet, or copy it, and the wish is recorded.' },
    { icon: HourglassBottomRoundedIcon, title: 'Belated assistant and wish history', text: 'Celebrations missed in the last 14 days (adjustable up to 60) with a Write button, and a per-year record of whether you wished someone, how, and whether it was late.' },
    { icon: BarChartRoundedIcon, title: 'Statistics', text: 'People, the next 30 days, average age and wishes this year, birthdays by month with the busiest month, age groups, relationships and star signs.' },
    { icon: UploadFileRoundedIcon, title: 'Excel import wizard', text: 'Excel, CSV, OpenDocument or a JSON backup. A BirthdayBook workbook is detected and merged or replaced; any other sheet goes through column mapping onto 16 fields, a row-by-row preview, a duplicate choice (skip, update or keep both) and an error report.' },
    { icon: RestoreRoundedIcon, title: 'Exports and snapshots', text: 'Full workbook (People, Occasions, Reminders, Gifts, Notes, Preferences, Wishes, Checklist and a Read Me), JSON backup, people as CSV, .ics calendar and a blank template, each as a new dated file, plus five automatic safety snapshots to restore.' },
    { icon: WifiOffRoundedIcon, title: 'Offline PWA and native apps', text: 'A service worker precaches the whole static site, so the installed web app works offline; the same build runs in Capacitor on Android and iPhone with OS-held notifications and Mark as wished, Snooze and Remind tomorrow actions.' },
    { icon: DarkModeRoundedIcon, title: 'Settings and dark mode', text: 'Light, dark or system theme applied before first paint, week start, 11 currencies, the 29 February rule, the import date order, the scheduling window (14–400 days) and Erase all data.' },
  ],

  steps: [
    { icon: InstallMobileRoundedIcon, title: 'Open or install it', text: 'Open the site in a browser and, if you like, install it from the address bar or Add to Home Screen. On a phone, the Android or iPhone build gives you reminders while the app is closed.' },
    { icon: UploadFileRoundedIcon, title: 'Bring in your people', text: 'Import a spreadsheet from Excel & Backup, add people one by one, or press Try with sample data to explore with a dozen made-up people first.' },
    { icon: EditNoteRoundedIcon, title: 'Add someone', text: 'Press Add person and fill in the first name, the day and month of the birthday and, if you know it, the year. Relationship, phone, email, tags and notes are optional, and the default reminders are added for you.' },
    { icon: NotificationsActiveRoundedIcon, title: 'Turn on reminders', text: 'Press Allow notifications, then check the Alarm Centre: it should say Notifications enabled and show what is booked. Send test sends one in 10 seconds.' },
    { icon: CalendarMonthRoundedIcon, title: 'Look ahead', text: 'Use Today for the next 60 days and the Calendar for any month, week or year. Filter by birthdays, occasions or relationship, and export an .ics file for your usual calendar.' },
    { icon: ChecklistRoundedIcon, title: 'Prepare for the day', text: 'On a profile, tick off the checklist, note what they like, and add a gift idea with a budget. Move it along in the Gift Planner as you buy and wrap it.' },
    { icon: ForumRoundedIcon, title: 'Send your wishes', text: 'Open Message or Card from Today or the profile, pick a tone or a design, and send it. Then mark the wish so it appears in the wish history.' },
    { icon: TableViewRoundedIcon, title: 'Keep a copy', text: 'Export the full Excel workbook or a JSON backup now and then, and import it on another device to move your data. Clearing site data or uninstalling the app erases the on-device copy.' },
  ],
  shortcuts: [
    { keys: ['←', '→'], action: 'Move to the previous or next day in the month grid' },
    { keys: ['↑', '↓'], action: 'Move a week up or down in the month grid' },
    { keys: ['Enter'], action: 'Open the first celebration on the selected day' },
    { keys: ['Esc'], action: 'Close the open sheet (forms, event details, confirmations)' },
  ],

  screenshots: [
    {
      src: shot('01-today.webp'),
      icon: TodayRoundedIcon,
      title: 'Today',
      text: 'Tuesday 17 November with the sample data: Asha Verma turns 30 today with Mark as wished, Message and Card. Ravi Kumar is next in 2 days, the coming-up list shows his one gift idea, and the side column has 5 celebrations this month, 13 people, Tara Menon in the belated assistant and the milestones ahead.',
    },
    {
      src: shot('02-calendar.webp'),
      icon: CalendarMonthRoundedIcon,
      title: 'Calendar',
      text: 'November 2026 in the month view, weeks starting on Monday: birthdays for Tara (36), Asha (30, today), Ravi (38), Meera (35) and Kabir (20), and Ravi and Anu’s 10th wedding anniversary on the 29th, under the five view tabs, the type and relationship filters and Export .ics.',
    },
    {
      src: shot('03-people.webp'),
      icon: PeopleAltRoundedIcon,
      title: 'People',
      text: '13 people sorted by next birthday, with the close circle (Asha, Nani, Leela) pinned first. Each row has the date, relationship and tags, a countdown, and a Turns badge in amber for milestones such as Nani’s 75th.',
    },
    {
      src: shot('04-person.webp'),
      icon: PersonRoundedIcon,
      title: 'Profile',
      text: 'Asha Verma, “Ash”, a friend born 17 November 1996 and 30 today, with Scorpio and her tags, call, email, message and card links, her four reminders with their next fire times, and the 2026 checklist with two tasks done.',
    },
    {
      src: shot('05-edit-person.webp'),
      icon: EditNoteRoundedIcon,
      title: 'Edit a person',
      text: 'The edit sheet: first and last name, the birthday as day, month and optional year, relationship, nickname, phone, email, tags and address, with About them and Close circle further down. The phone and email are made up.',
    },
    {
      src: shot('06-alarm-centre.webp'),
      icon: AlarmRoundedIcon,
      title: 'Alarm Centre',
      text: 'Notifications enabled in a web browser (Asia/Calcutta): 44 reminders booked and 44 confirmed, covering until 16 March in a 120-day window. The card below states that browsers can’t book alarms with the operating system and offers the calendar export, next to the install instructions.',
    },
    {
      src: shot('07-excel-import.webp'),
      icon: UploadFileRoundedIcon,
      title: 'Excel import wizard',
      text: 'A made-up friends-list.csv with 7 rows: Name, DOB, Mobile, Relation and Group are mapped automatically. 6 rows are ready (one of them, Ravi Kumar, matches someone already in BirthdayBook) and row 6 is rejected for the impossible date 31/02/1992. The export options are on the right.',
    },
    {
      src: shot('08-card-studio.webp'),
      icon: PaletteRoundedIcon,
      title: 'Card Studio',
      text: 'A square card for Nani Bhardwaj, who turns 75, in the Coral sun design: the 75 badge, the headline, her name and a heartfelt message picked because she is family, with Save image and Share.',
    },
    {
      src: shot('09-messages.webp'),
      icon: ForumRoundedIcon,
      title: 'Message centre',
      text: 'Wishes for Leela Das, turning 32. Heartfelt is chosen because she is a partner; three suggestions fill the editable message, and the belated assistant lists Tara Menon, whose birthday was 3 days ago.',
    },
    {
      src: shot('10-dark-gift-planner.webp'),
      icon: DarkModeRoundedIcon,
      title: 'Dark mode: Gift Planner',
      text: 'The Gift Planner in the dark theme: 3 gifts, ₹23,500 budgeted and ₹2,200 spent (9%), a weekend away planned for Leela and a framed print bought for Asha, and Meera, Kabir, Nani, Omar and Dev still needing a gift in the next 60 days.',
    },
  ],
};
