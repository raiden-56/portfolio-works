// Which illustration each project gets: a `scene` (see scenes.jsx) and an
// optional `icon` shown in a floating badge. Projects not listed here fall
// back to their category's look, so new projects get an illustration too.
import AccountBalanceRounded from '@mui/icons-material/AccountBalanceRounded';
import AccountTreeRounded from '@mui/icons-material/AccountTreeRounded';
import AppsRounded from '@mui/icons-material/AppsRounded';
import BoltRounded from '@mui/icons-material/BoltRounded';
import BuildRounded from '@mui/icons-material/BuildRounded';
import CampaignRounded from '@mui/icons-material/CampaignRounded';
import ChairRounded from '@mui/icons-material/ChairRounded';
import ChecklistRounded from '@mui/icons-material/ChecklistRounded';
import CheckroomRounded from '@mui/icons-material/CheckroomRounded';
import ChildCareRounded from '@mui/icons-material/ChildCareRounded';
import DashboardCustomizeRounded from '@mui/icons-material/DashboardCustomizeRounded';
import FaceRounded from '@mui/icons-material/FaceRounded';
import FlightRounded from '@mui/icons-material/FlightRounded';
import HistoryRounded from '@mui/icons-material/HistoryRounded';
import HotelRounded from '@mui/icons-material/HotelRounded';
import KeyRounded from '@mui/icons-material/KeyRounded';
import LayersRounded from '@mui/icons-material/LayersRounded';
import LightbulbRounded from '@mui/icons-material/LightbulbRounded';
import MenuBookRounded from '@mui/icons-material/MenuBookRounded';
import PasswordRounded from '@mui/icons-material/PasswordRounded';
import PersonRounded from '@mui/icons-material/PersonRounded';
import PhotoCameraRounded from '@mui/icons-material/PhotoCameraRounded';
import PictureAsPdfRounded from '@mui/icons-material/PictureAsPdfRounded';
import QrCode2Rounded from '@mui/icons-material/QrCode2Rounded';
import RecordVoiceOverRounded from '@mui/icons-material/RecordVoiceOverRounded';
import RestaurantRounded from '@mui/icons-material/RestaurantRounded';
import SavingsRounded from '@mui/icons-material/SavingsRounded';
import SchoolRounded from '@mui/icons-material/SchoolRounded';
import ShareRounded from '@mui/icons-material/ShareRounded';
import ShoppingBagRounded from '@mui/icons-material/ShoppingBagRounded';
import StorefrontRounded from '@mui/icons-material/StorefrontRounded';
import TrendingUpRounded from '@mui/icons-material/TrendingUpRounded';
import TravelExploreRounded from '@mui/icons-material/TravelExploreRounded';
import WorkRounded from '@mui/icons-material/WorkRounded';

const BY_CATEGORY = {
  Portfolio: { scene: 'portfolio', icon: PersonRounded },
  Business: { scene: 'browser', icon: WorkRounded },
  Education: { scene: 'school', icon: SchoolRounded },
  'E-commerce': { scene: 'store', icon: StorefrontRounded },
  Productivity: { scene: 'board' },
  Finance: { scene: 'dashboard', icon: SavingsRounded },
  Utilities: { scene: 'phone', icon: BuildRounded },
  Games: { scene: 'game' },
  Travel: { scene: 'map', icon: FlightRounded },
};

const ART = {
  'ganesh-mesta': { scene: 'portfolio', icon: PersonRounded },
  'dream-interior-design': { scene: 'browser', icon: ChairRounded },
  layora: { scene: 'browser', icon: DashboardCustomizeRounded },
  flipora: { scene: 'document', icon: MenuBookRounded },
  tripore: { scene: 'map', icon: FlightRounded },
  'personal-loan-tracker': { scene: 'dashboard', icon: SavingsRounded },
  newprathampublicschool: { scene: 'school', icon: SchoolRounded },
  'little-angelss': { scene: 'school', icon: ChildCareRounded },
  'bapuji-college': { scene: 'school', icon: AccountBalanceRounded },
  'suchi-swagtika': { scene: 'store', icon: StorefrontRounded },
  intervexa: { scene: 'browser', icon: RecordVoiceOverRounded },
  floowpilot: { scene: 'tree', icon: BoltRounded },
  filoraa: { scene: 'document', icon: PictureAsPdfRounded },
  camoora: { scene: 'browser', icon: PhotoCameraRounded },
  'digitall-marketing': { scene: 'dashboard', icon: CampaignRounded },
  'mamta-stay': { scene: 'browser', icon: HotelRounded },
  'namma-vastrika': { scene: 'store', icon: CheckroomRounded },
  'bright-up': { scene: 'browser', icon: LightbulbRounded },
  'organization-tree': { scene: 'tree', icon: AccountTreeRounded },
  'salary-hike-calculators': { scene: 'calculator', icon: TrendingUpRounded },
  nyoumarket: { scene: 'store', icon: ShoppingBagRounded },
  'hire-guide': { scene: 'phone', icon: TravelExploreRounded },
  'eat-central': { scene: 'phone', icon: RestaurantRounded },
  'coin-tosss': { scene: 'coin' },
  'my-appnest': { scene: 'phone', icon: AppsRounded },
  'suggest-password': { scene: 'security', icon: KeyRounded },
  'tech-parallax': { scene: 'browser', icon: LayersRounded },
  'encrypt-decryption': { scene: 'security' },
  'game-of-tik-tak-toe': { scene: 'game' },
  'clothes-e-commerce-web': { scene: 'store', icon: CheckroomRounded },
  'drag-drop-kanban-board': { scene: 'board' },
  'madhumitha-k': { scene: 'portfolio', icon: FaceRounded },
  'ganesh-mesta-old': { scene: 'portfolio', icon: HistoryRounded },
  'forecastfinder-weather': { scene: 'weather' },
  'to-do-list-data': { scene: 'document', icon: ChecklistRounded },
  'otp-generator-ui': { scene: 'phone', icon: PasswordRounded },
  'generate-bar-code': { scene: 'phone', icon: QrCode2Rounded },
  referlooop: { scene: 'phone', icon: ShareRounded },
};

export const artFor = (project) => ({
  scene: 'browser',
  ...BY_CATEGORY[project.category],
  ...ART[project.id],
});
