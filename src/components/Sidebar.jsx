import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Badge,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import { DETAILS } from '../data/details';
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from '../theme';
import {
  resetFilters,
  selectFavoriteIds,
  selectHiddenIds,
  selectVisibleProjects,
  setCaseStudiesOnly,
  setHiddenDialogOpen,
  toggleFavoritesOnly,
  toggleTheme,
} from '../store/worksSlice';

const GITHUB = 'https://github.com/raiden-56';

function Brand() {
  return (
    <Stack direction="row" sx={{ alignItems: 'center', gap: 1.5, minWidth: 0 }}>
      <Box
        sx={{
          flexShrink: 0,
          width: 36,
          height: 36,
          borderRadius: '8px',
          display: 'grid',
          placeItems: 'center',
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          fontWeight: 700,
          fontSize: 14,
          letterSpacing: '0.02em',
        }}
      >
        GM
      </Box>
      <Box sx={{ minWidth: 0 }}>
        <Typography sx={{ fontWeight: 600, fontSize: 15, lineHeight: 1.2 }} noWrap>
          Ganesh Mesta
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.3 }} noWrap>
          Portfolio of work
        </Typography>
      </Box>
    </Stack>
  );
}

function SectionLabel({ children }) {
  return (
    <Typography variant="overline" color="text.secondary" sx={{ display: 'block', px: 1.5, pt: 2.5, pb: 0.5, lineHeight: 1.6 }}>
      {children}
    </Typography>
  );
}

function NavItem({ icon: Icon, label, count, active, onClick }) {
  return (
    <ListItemButton
      onClick={onClick}
      selected={active}
      sx={{
        position: 'relative',
        borderRadius: '8px',
        py: 0.75,
        px: 1.5,
        mb: 0.25,
        color: active ? 'primary.main' : 'text.primary',
        '& .MuiListItemIcon-root': { minWidth: 34, color: active ? 'primary.main' : 'text.secondary' },
        '&.Mui-selected, &.Mui-selected:hover': { bgcolor: (t) => alpha(t.palette.primary.main, 0.1) },
        '&:hover': { bgcolor: 'action.hover' },
      }}
    >
      <ListItemIcon>
        <Icon sx={{ fontSize: 20 }} />
      </ListItemIcon>
      <ListItemText primary={label} slotProps={{ primary: { noWrap: true, sx: { fontSize: 14, fontWeight: active ? 600 : 500 } } }} />
      {count !== undefined && (
        <Typography variant="caption" sx={{ ml: 1, fontWeight: 600, color: active ? 'primary.main' : 'text.secondary' }}>
          {count}
        </Typography>
      )}
    </ListItemButton>
  );
}

function SidebarContent({ onNavigate }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { favoritesOnly, caseStudiesOnly } = useSelector((s) => s.works);
  const mode = useSelector((s) => s.works.themeMode);
  const visible = useSelector(selectVisibleProjects);
  const favCount = useSelector(selectFavoriteIds).filter((id) => visible.some((p) => p.id === id)).length;
  const hiddenCount = useSelector(selectHiddenIds).length;
  const onList = pathname === '/projects';
  const caseStudies = visible.filter((p) => DETAILS[p.id]);

  const go = (path, action) => {
    if (action) action();
    navigate(path);
    onNavigate?.();
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ px: 2.5, height: HEADER_HEIGHT, display: 'flex', alignItems: 'center', borderBottom: 1, borderColor: 'divider', flexShrink: 0 }}>
        <Brand />
      </Box>

      <Box component="nav" aria-label="Main" sx={{ flex: 1, overflowY: 'auto', px: 1.5, pb: 2 }}>
        <SectionLabel>Overview</SectionLabel>
        <List disablePadding>
          <NavItem icon={DashboardRoundedIcon} label="Dashboard" active={pathname === '/'} onClick={() => go('/')} />
          <NavItem
            icon={GridViewRoundedIcon}
            label="All projects"
            count={visible.length}
            active={onList && !favoritesOnly && !caseStudiesOnly}
            onClick={() => go('/projects', () => dispatch(resetFilters()))}
          />
          <NavItem
            icon={FavoriteBorderRoundedIcon}
            label="Favourites"
            count={favCount}
            active={onList && favoritesOnly}
            onClick={() =>
              go('/projects', () => {
                dispatch(resetFilters());
                dispatch(toggleFavoritesOnly());
              })
            }
          />
          <NavItem
            icon={MenuBookRoundedIcon}
            label="Case studies"
            count={caseStudies.length}
            active={onList && caseStudiesOnly}
            onClick={() =>
              go('/projects', () => {
                dispatch(resetFilters());
                dispatch(setCaseStudiesOnly(true));
              })
            }
          />
        </List>
      </Box>

      <Stack
        direction="row"
        sx={{ px: 2, py: 1.25, borderTop: 1, borderColor: 'divider', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}
      >
        <Typography variant="caption" color="text.secondary">
          © {new Date().getFullYear()} Ganesh Mesta
        </Typography>
        <Stack direction="row">
          <Tooltip title="GitHub profile">
            <IconButton size="small" component="a" href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Hidden projects">
            <IconButton size="small" onClick={() => dispatch(setHiddenDialogOpen(true))} aria-label="Manage hidden projects">
              <Badge badgeContent={hiddenCount} color="secondary" max={99}>
                <VisibilityOffRoundedIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title={mode === 'light' ? 'Dark mode' : 'Light mode'}>
            <IconButton size="small" onClick={() => dispatch(toggleTheme())} aria-label="Toggle theme">
              {mode === 'light' ? <DarkModeRoundedIcon fontSize="small" /> : <LightModeRoundedIcon fontSize="small" />}
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  );
}

/** Fixed left sidebar on desktop; a slide-out drawer on phones and tablets. */
export default function Sidebar({ mobileOpen, onClose }) {
  const paper = { width: SIDEBAR_WIDTH, boxSizing: 'border-box', bgcolor: 'background.paper', borderRight: 1, borderColor: 'divider' };
  return (
    <Box component="aside" sx={{ width: { md: SIDEBAR_WIDTH }, flexShrink: 0 }}>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        keepMounted
        sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': paper }}
      >
        <SidebarContent onNavigate={onClose} />
      </Drawer>
      <Drawer variant="permanent" open sx={{ display: { xs: 'none', md: 'block' }, '& .MuiDrawer-paper': paper }}>
        <SidebarContent />
      </Drawer>
    </Box>
  );
}
