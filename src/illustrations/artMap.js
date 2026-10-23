// Which illustration each project gets: its own scene, colour palette,
// background shape and decoration, so no two cards look alike. Projects not
// listed here get a website scene with a category icon and a palette picked
// from their id.
import AppsRounded from '@mui/icons-material/AppsRounded';
import BuildRounded from '@mui/icons-material/BuildRounded';
import FlightRounded from '@mui/icons-material/FlightRounded';
import PersonRounded from '@mui/icons-material/PersonRounded';
import SavingsRounded from '@mui/icons-material/SavingsRounded';
import SchoolRounded from '@mui/icons-material/SchoolRounded';
import SportsEsportsRounded from '@mui/icons-material/SportsEsportsRounded';
import StorefrontRounded from '@mui/icons-material/StorefrontRounded';
import WorkRounded from '@mui/icons-material/WorkRounded';
import { PALETTES } from './kit';
import * as A from './scenesA';
import * as B from './scenesB';

const art = (Scene, palette, bg, decor, shadow = true) => ({ Scene, palette, bg, decor, shadow });

const ART = {
  'ganesh-mesta': art(A.CodeLaptop, 'violet', 'arch', 'stars'),
  'ganesh-mesta-old': art(A.RetroMonitor, 'slate', 'rings', 'lines'),
  'madhumitha-k': art(A.ProfileCard, 'rose', 'circle', 'confetti'),
  'dream-interior-design': art(A.LivingRoom, 'amber', 'arch', 'none', false),
  layora: art(A.PageBuilder, 'emerald', 'grid', 'dots'),
  flipora: art(A.OpenBook, 'teal', 'circle', 'stars'),
  tripore: art(A.GlobeTrip, 'sky', 'hills', 'clouds'),
  'personal-loan-tracker': art(A.LoanHome, 'emerald', 'split', 'lines'),
  newprathampublicschool: art(A.SchoolBus, 'orange', 'hills', 'clouds', false),
  'little-angelss': art(A.KidsBlocks, 'coral', 'bubbles', 'confetti'),
  'bapuji-college': art(A.CapAndBooks, 'indigo', 'arch', 'stars'),
  'suchi-swagtika': art(A.Storefront, 'teal', 'circle', 'leaves'),
  intervexa: art(A.VideoCall, 'cyan', 'split', 'dots'),
  floowpilot: art(A.Flowchart, 'blue', 'grid', 'none'),
  filoraa: art(A.PdfStack, 'coral', 'squares', 'sparkle'),
  camoora: art(A.Camera, 'slate', 'circle', 'stars'),
  'digitall-marketing': art(A.Megaphone, 'orange', 'rings', 'confetti'),
  'mamta-stay': art(A.Cottage, 'cyan', 'hills', 'clouds', false),
  'namma-vastrika': art(A.ClothesRack, 'rose', 'arch', 'none'),
  'bright-up': art(A.BulbLesson, 'amber', 'circle', 'stars'),
  'organization-tree': art(B.OrgChart, 'blue', 'grid', 'dots'),
  'salary-hike-calculators': art(B.SalaryGrowth, 'lime', 'split', 'confetti'),
  nyoumarket: art(B.MarketBag, 'sky', 'squares', 'sparkle'),
  'hire-guide': art(B.CompassPeak, 'teal', 'hills', 'clouds', false),
  'eat-central': art(B.BurgerMeal, 'orange', 'circle', 'none', false),
  'coin-tosss': art(B.CoinFlip, 'gold', 'rings', 'stars'),
  'my-appnest': art(B.AppGrid, 'violet', 'squares', 'sparkle'),
  'suggest-password': art(B.PasswordKey, 'cyan', 'grid', 'dots'),
  'tech-parallax': art(B.ParallaxLayers, 'indigo', 'plain', 'stars', false),
  'encrypt-decryption': art(B.BinaryShield, 'emerald', 'rings', 'none'),
  'game-of-tik-tak-toe': art(B.TicTacToe, 'coral', 'squares', 'confetti'),
  'clothes-e-commerce-web': art(B.ShopLaptop, 'sky', 'circle', 'leaves'),
  'drag-drop-kanban-board': art(B.KanbanBoard, 'blue', 'grid', 'dots'),
  'forecastfinder-weather': art(B.Weather, 'cyan', 'hills', 'none', false),
  'to-do-list-data': art(B.Clipboard, 'lime', 'split', 'sparkle'),
  'otp-generator-ui': art(B.OtpPhone, 'violet', 'bubbles', 'sparkle'),
  'generate-bar-code': art(B.BarcodeScan, 'amber', 'grid', 'dots'),
  referlooop: art(B.ReferralLoop, 'rose', 'rings', 'confetti'),
};

const CATEGORY_ICON = {
  Portfolio: PersonRounded,
  Business: WorkRounded,
  Education: SchoolRounded,
  'E-commerce': StorefrontRounded,
  Productivity: AppsRounded,
  Finance: SavingsRounded,
  Utilities: BuildRounded,
  Games: SportsEsportsRounded,
  Travel: FlightRounded,
};

const BACKGROUNDS = ['blob', 'circle', 'arch', 'split', 'rings', 'squares', 'bubbles', 'grid'];
const DECOR = ['stars', 'sparkle', 'dots', 'confetti', 'lines', 'gears'];

function hash(s) {
  let h = 0;
  for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) | 0;
  return Math.abs(h);
}

/** Resolve a project's illustration settings, with the palette object attached. */
export function artFor(project) {
  const known = ART[project.id];
  if (known) return { ...known, p: PALETTES[known.palette] };
  const h = hash(project.id);
  const keys = Object.keys(PALETTES);
  return {
    Scene: B.Website,
    icon: CATEGORY_ICON[project.category] || WorkRounded,
    p: PALETTES[keys[h % keys.length]],
    bg: BACKGROUNDS[h % BACKGROUNDS.length],
    decor: DECOR[(h >> 3) % DECOR.length],
    shadow: true,
  };
}
