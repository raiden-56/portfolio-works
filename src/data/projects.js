// Projects pulled from https://app.netlify.com/teams/raiden-56/projects (Oct 23, 2026).
// Screenshots are Netlify's own deploy previews. Descriptions, categories and tags
// are starting points — edit them freely. Add a new object here to add a new work.

const shot = (id, file) =>
  `https://d33wubrfki0l68.cloudfront.net/${id}/${file}`;

// Starting favourites (sidebar → Favourites); the heart on any card adds or removes one.
export const FAVORITE_PROJECTS = [
  "dream-interior-design",
  "floowpilot",
  "layora",
  "intervexa",
  "tripore",
  "organization-tree",
  "homehub",
];

export const CATEGORIES = [
  "Portfolio",
  "Business",
  "Education",
  "E-commerce",
  "Productivity",
  "Finance",
  "Utilities",
  "Games",
  "Travel",
];

const raw = [
  {
    name: "homehub",
    title: "HomeHub",
    image: null,
    url: "https://raiden-56.github.io/homehub/",
    repo: "https://github.com/raiden-56/homehub",
    source: "GitHub",
    publishedAt: "2026-10-29",
    category: "Productivity",
    featured: true,
    description:
      "Household management app — inventory, shopping, chores, bills, expenses and maintenance on one shared calendar.",
    tags: ["Household", "Bills", "Inventory"],
  },
  {
    name: "ganesh-mesta",
    title: "Ganesh Mesta — Portfolio",
    image: shot(
      "6acfb300fe75488bc05c1b0c",
      "screenshot_2026-10-14-16-51-20-0000.webp",
    ),
    source: "Netlify Drop",
    publishedAt: "2026-10-14",
    category: "Portfolio",
    featured: true,
    description:
      "My personal portfolio with an animated intro — who I am, what I build and how to reach me.",
    tags: ["Portfolio", "Animation"],
    visible: false,
  },
  {
    name: "dream-interior-design",
    title: "Dream Interior Design",
    image: shot(
      "6ac4e286f2213900086551f2",
      "screenshot_2026-10-06-12-00-12-0000.webp",
    ),
    source: "GitHub",
    publishedAt: "2026-10-06",
    category: "Business",
    featured: true,
    repo: "https://github.com/raiden-56/Interior-design",
    description:
      "Browser-based interior design studio — draw a 2D floor plan, see it in 3D, walk through it and share it with clients.",
    tags: ["3D", "Floor plans", "AI"],
  },
  {
    name: "layora",
    title: "Layora",
    image: shot(
      "6ab2b31d17a9f20c12ff613b",
      "screenshot_2026-09-22-16-56-24-0000.webp",
    ),
    source: "GitHub",
    publishedAt: "2026-09-22",
    category: "Productivity",
    featured: true,
    repo: "https://github.com/raiden-56/Layrly",
    description:
      "A no-code email template builder: drag & drop blocks or write in document mode, 33 templates, email-safe HTML export.",
    tags: ["Email templates", "Drag & drop", "Editor"],
  },
  {
    name: "flipora",
    title: "Flipora",
    image: shot(
      "6aab70b7b43483dd3d142a84",
      "screenshot_2026-09-17-04-47-14-0000.webp",
    ),
    source: "GitHub",
    publishedAt: "2026-09-17",
    category: "Productivity",
    featured: true,
    description:
      "Turn images or a PDF into a page-turning flipbook. Arrange, edit and export pages, or start from a template.",
    tags: ["Flipbook", "PDF", "Export"],
  },
  {
    name: "tripore",
    title: "Tripore · TravelCanvas",
    image: shot(
      "6a8ffd66140dd4173b26465b",
      "screenshot_2026-08-27-09-03-57-0000.webp",
    ),
    source: "GitHub",
    publishedAt: "2026-08-27",
    category: "Travel",
    featured: true,
    repo: "https://github.com/raiden-56/Tripora",
    description:
      "Your personal travel memory map — every destination visited, every memory captured and every adventure still waiting.",
    tags: ["Maps", "Travel journal"],
  },
  {
    name: "personal-loan-tracker",
    title: "Personal Loan Tracker",
    image: shot(
      "6a76b6e280536800083a06db",
      "screenshot_2026-08-08-04-56-30-0000.webp",
    ),
    source: "GitHub",
    publishedAt: "2026-08-08",
    category: "Finance",
    featured: true,
    visible: false,
    description:
      "Track a home loan at a glance: outstanding balance, part payments, interest saved, what-if scenarios and the full schedule.",
    tags: ["Dashboard", "EMI", "Charts"],
  },
  {
    name: "newprathampublicschool",
    title: "New Pratham Public School",
    image: shot(
      "6ad9a21e1b3055d9b0819d45",
      "screenshot_2026-10-22-05-42-24-0000.webp",
    ),
    source: "GitHub",
    publishedAt: "2026-10-22",
    category: "Education",
    description:
      "School website with admissions, academics, facilities, gallery and contact details.",
    tags: ["School", "Website"],
  },
  {
    name: "little-angelss",
    title: "Little Angels",
    image: shot(
      "6ad8a5186bd7f86ce5a79b24",
      "screenshot_2026-10-21-11-42-46-0000.webp",
    ),
    source: "GitHub",
    publishedAt: "2026-10-21",
    category: "Education",
    description: "A bright, friendly website for a kids’ school / play school.",
    tags: ["Kids", "School"],
  },
  {
    name: "bapuji-college",
    title: "Bapuji College",
    image: shot(
      "6ad256ebb5ea282bb88f2627",
      "screenshot_2026-10-16-16-55-38-0000.webp",
    ),
    source: "GitHub",
    publishedAt: "2026-10-16",
    category: "Education",
    description:
      "College website covering courses, departments, admissions and campus life.",
    tags: ["College", "Website"],
  },
  {
    name: "suchi-swagtika",
    visible: false,
    title: "Suchi Swagtika",
    image: shot(
      "6ad20862ab3f7e7e47ea7704",
      "screenshot_2026-10-16-11-20-32-0000.webp",
    ),
    source: "GitHub",
    publishedAt: "2026-10-16",
    category: "E-commerce",
    description:
      "Brand storefront showcasing products with a clean, modern shopping experience.",
    tags: ["Storefront", "Brand"],
  },
  {
    name: "intervexa",
    title: "Intervexa",
    image: shot(
      "6ad0ac017b9f98cbf6fd3a4c",
      "screenshot_2026-10-15-10-34-50-0000.webp",
    ),
    source: "GitHub",
    publishedAt: "2026-10-15",
    category: "Business",
    description: "An interview preparation and hiring platform.",
    tags: ["Hiring", "Interviews"],
  },
  {
    name: "floowpilot",
    title: "Floowpilot",
    image: shot(
      "6acb54d2215a53a39ba84be6",
      "screenshot_2026-10-11-09-20-54-0000.webp",
    ),
    source: "GitHub",
    publishedAt: "2026-10-11",
    category: "Productivity",
    repo: "https://github.com/raiden-56/flowpilot",
    description:
      "Visual AI agent workflow builder — canvas editor, step-by-step debugging and human approvals, all in the browser.",
    tags: ["Workflow", "SaaS"],
  },
  {
    name: "filoraa",
    title: "Filoraa",
    image: shot(
      "6ab911ac3a41160008f2cfb9",
      "screenshot_2026-09-27-12-53-39-0000.webp",
    ),
    source: "GitHub",
    publishedAt: "2026-09-27",
    category: "Productivity",
    repo: "https://github.com/raiden-56/Filora",
    description:
      "All your PDF tools in one place — merge, split, convert and compress PDFs in the browser.",
    tags: ["PDF", "Tools"],
  },
  {
    name: "camoora",
    title: "Camoora",
    image: shot(
      "6ab4192eb3ada908acca1618",
      "screenshot_2026-09-23-18-24-01-0000.webp",
    ),
    source: "GitHub",
    publishedAt: "2026-09-23",
    category: "Business",
    description:
      "Photography studio website with portfolio galleries and booking.",
    tags: ["Photography", "Gallery"],
  },
  {
    name: "digitall-marketing",
    title: "Digitall Marketing",
    image: shot(
      "6a9088f7770623fe1774757d",
      "screenshot_2026-08-27-18-59-55-0000.webp",
    ),
    source: "GitHub",
    framework: "Next.js",
    publishedAt: "2026-08-28",
    category: "Business",
    description:
      "Digital marketing agency site — services, case studies and lead capture.",
    tags: ["Agency", "Next.js"],
  },
  {
    name: "mamta-stay",
    title: "Mamta Stay",
    image: shot(
      "6a8c6cdeda09300008237b7b",
      "screenshot_2026-08-24-16-10-41-0000.webp",
    ),
    source: "GitHub",
    framework: "Next.js",
    publishedAt: "2026-08-24",
    category: "Business",
    description:
      "Homestay / hotel website with rooms, amenities and booking enquiries.",
    tags: ["Hospitality", "Next.js"],
  },
  {
    name: "namma-vastrika",
    title: "Namma Vastrika",
    image: shot(
      "6a63388877aa6950c5ad012b",
      "screenshot_2026-07-24-10-04-46-0000.webp",
    ),
    source: "GitHub",
    framework: "Next.js",
    publishedAt: "2026-07-24",
    category: "E-commerce",
    description:
      "Ethnic clothing store with collections, product pages and cart.",
    tags: ["Fashion", "Next.js"],
  },
  {
    name: "bright-up",
    title: "Bright Up",
    image: shot(
      "6a61de1da39c970008c37839",
      "screenshot_2026-07-23-09-26-37-0000.webp",
    ),
    source: "GitHub",
    framework: "Next.js",
    publishedAt: "2026-07-23",
    category: "Education",
    description:
      "Learning platform — “Master skills, shape futures” — with courses and mentors.",
    tags: ["E-learning", "Next.js"],
  },
  {
    name: "organization-tree",
    title: "Organization Tree",
    image: shot(
      "6a60eb0f515249134933f430",
      "screenshot_2026-07-22-16-08-55-0000.webp",
    ),
    source: "Netlify Drop",
    publishedAt: "2026-07-22",
    category: "Productivity",
    description:
      "Interactive org chart to visualise teams and reporting lines.",
    tags: ["Org chart", "Tree"],
  },
  {
    name: "salary-hike-calculators",
    title: "Salary Hike Calculator",
    image: shot(
      "69f0db613e2cb35dd71e2dd5",
      "screenshot_2026-04-28-16-08-09-0000.webp",
    ),
    source: "Netlify Drop",
    publishedAt: "2026-04-28",
    category: "Finance",
    description:
      "Work out a new salary from a hike percentage, with monthly and yearly breakdowns.",
    tags: ["Calculator", "Salary"],
  },
  {
    name: "nyoumarket",
    title: "Nyou Market",
    image: shot(
      "69df8a43148d0dc03d451d6c",
      "screenshot_2026-04-15-12-53-24-0000.webp",
    ),
    source: "Netlify Drop",
    publishedAt: "2026-04-15",
    category: "E-commerce",
    description: "Online marketplace UI with product listings and categories.",
    tags: ["Marketplace"],
  },
  {
    name: "hire-guide",
    title: "Hire Guide",
    image: shot(
      "69a31f4c1ecf1233a8816abe",
      "screenshot_2026-02-28-17-01-03-0000.webp",
    ),
    source: "Netlify Drop",
    publishedAt: "2026-02-28",
    category: "Business",
    description: "Guide booking / hiring app for finding local guides.",
    tags: ["Booking"],
  },
  {
    name: "eat-central",
    title: "Eat Central",
    image: shot(
      "69a31f20341a8864a76785e7",
      "screenshot_2026-02-28-17-00-21-0000.webp",
    ),
    source: "Netlify Drop",
    publishedAt: "2026-02-28",
    category: "E-commerce",
    description: "Food ordering website with menus and restaurant listings.",
    tags: ["Food", "Ordering"],
  },
  {
    name: "coin-tosss",
    title: "Coin Toss",
    image: shot(
      "697328680f4d234b5ee8b700",
      "screenshot_2026-01-23-07-51-08-0000.webp",
    ),
    source: "Netlify Drop",
    publishedAt: "2026-01-23",
    category: "Games",
    description: "Animated heads-or-tails coin flip.",
    tags: ["Game", "Animation"],
  },
  {
    name: "my-appnest",
    title: "My AppNest",
    image: shot(
      "6966743654d3f2062f7a49d6",
      "screenshot_2026-01-13-16-35-06-0000.webp",
    ),
    source: "Netlify Drop",
    publishedAt: "2026-01-13",
    category: "Productivity",
    description: "A launcher that collects my small apps in one place.",
    tags: ["Launcher"],
  },
  {
    name: "suggest-password",
    title: "Suggest Password",
    image: shot(
      "6960fa01c9bc3cc2682eb527",
      "screenshot_2026-01-09-12-52-22-0000.webp",
    ),
    source: "Netlify Drop",
    publishedAt: "2026-01-09",
    category: "Utilities",
    description:
      "Generates strong passwords with options for length and character sets.",
    tags: ["Security", "Generator"],
  },
  {
    name: "tech-parallax",
    title: "Tech Parallax",
    image: shot(
      "695bd6247109ebc3f2cf6987",
      "screenshot_2026-01-05-15-18-10-0000.webp",
    ),
    source: "Netlify Drop",
    publishedAt: "2026-01-05",
    category: "Business",
    description: "Tech landing page built around smooth parallax scrolling.",
    tags: ["Parallax", "Landing page"],
  },
  {
    name: "encrypt-decryption",
    title: "Encrypt / Decrypt",
    image: shot(
      "695bd5a3948bf4c479449a56",
      "screenshot_2026-01-05-15-15-53-0000.webp",
    ),
    source: "Netlify Drop",
    publishedAt: "2026-01-05",
    category: "Utilities",
    description: "Encrypt and decrypt text in the browser.",
    tags: ["Security", "Crypto"],
  },
  {
    name: "game-of-tik-tak-toe",
    title: "Tic Tac Toe",
    image: shot(
      "694ad4eb91fdb845357bc74a",
      "screenshot_2025-12-23-17-44-28-0000.webp",
    ),
    source: "Netlify Drop",
    publishedAt: "2025-12-23",
    category: "Games",
    description: "Classic two-player tic-tac-toe.",
    tags: ["Game"],
  },
  {
    name: "clothes-e-commerce-web",
    title: "Clothes E-commerce",
    image: shot(
      "69400da55e6c9a6f56ae8100",
      "screenshot_2025-12-15-13-31-20-0000.webp",
    ),
    source: "Netlify Drop",
    publishedAt: "2025-12-15",
    category: "E-commerce",
    description: "Clothing store with product grid, filters and cart.",
    tags: ["Fashion", "Cart"],
  },
  {
    name: "drag-drop-kanban-board",
    title: "Drag & Drop Kanban",
    image: shot(
      "694003005e6c9a4ec0ae8351",
      "screenshot_2025-12-15-12-45-55-0000.webp",
    ),
    source: "Netlify Drop",
    publishedAt: "2025-12-15",
    category: "Productivity",
    description: "Kanban board with drag-and-drop cards across columns.",
    tags: ["Kanban", "Drag & drop"],
  },
  {
    name: "madhumitha-k",
    title: "Madhumitha K",
    image: null,
    source: "Netlify Drop",
    publishedAt: "2025-04-11",
    category: "Portfolio",
    description: "Personal portfolio website.",
    tags: ["Portfolio"],
    visible: false,
  },
  {
    name: "ganesh-mesta-old",
    title: "Ganesh Mesta — Portfolio (v1)",
    image: shot(
      "6786b6a4576c870095f701b0",
      "screenshot_2025-01-14-19-10-32-0000.webp",
    ),
    source: "Netlify Drop",
    publishedAt: "2025-01-15",
    category: "Portfolio",
    description: "The first version of my portfolio.",
    tags: ["Portfolio"],
    visible: false,
  },
  {
    name: "forecastfinder-weather",
    title: "ForecastFinder Weather",
    image: shot(
      "676d3864872b50b5aeb91b9f",
      "screenshot_2024-12-26-11-05-12-0000.webp",
    ),
    source: "Netlify Drop",
    publishedAt: "2024-12-26",
    category: "Utilities",
    description: "Search any city and get the current weather and forecast.",
    tags: ["Weather", "API"],
  },
  {
    name: "to-do-list-data",
    title: "To-Do List",
    image: shot(
      "676bbc5ba020d2ea1becec1b",
      "screenshot_2024-12-25-08-03-44-0000.webp",
    ),
    source: "Netlify Drop",
    publishedAt: "2024-12-25",
    category: "Productivity",
    description: "Simple to-do list to add, complete and remove tasks.",
    tags: ["Tasks"],
  },
  {
    name: "otp-generator-ui",
    title: "OTP Generator",
    image: shot(
      "67699a0c16d269982fb11a6a",
      "screenshot_2024-12-23-17-12-47-0000.webp",
    ),
    source: "Netlify Drop",
    publishedAt: "2024-12-23",
    category: "Utilities",
    description: "One-time password generator UI.",
    tags: ["OTP", "Security"],
  },
  {
    name: "generate-bar-code",
    title: "Barcode Generator",
    image: shot(
      "67691c1518bfa1be93e1d56e",
      "screenshot_2024-12-23-08-15-22-0000.webp",
    ),
    source: "Netlify Drop",
    publishedAt: "2024-12-23",
    category: "Utilities",
    description: "Generate barcodes from any text and download them.",
    tags: ["Barcode", "Generator"],
  },
  {
    name: "referlooop",
    title: "Referlooop",
    image: null,
    source: "GitHub",
    publishedAt: "2026-10-23",
    category: "Business",
    description: "Referral platform — just created, first deploy on its way.",
    tags: ["Referrals", "New"],
  },
];

// Set `visible: false` on any entry above to hide it from the site.
export const PROJECTS = raw
  .filter((p) => p.visible !== false)
  .map((p) => ({
    framework: null,
    featured: false,
    repo: null,
    url: `https://${p.name}.netlify.app`,
    ...p,
    id: p.name,
  }));
