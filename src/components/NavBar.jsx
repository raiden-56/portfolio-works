import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link as RouterLink } from 'react-router-dom';
import { AppBar, Badge, Box, Button, Container, IconButton, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import { selectHiddenIds, selectVisibleProjects, setHiddenDialogOpen, toggleTheme } from '../store/worksSlice';

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
];

export default function NavBar() {
  const dispatch = useDispatch();
  const mode = useSelector((s) => s.works.themeMode);
  const hiddenCount = useSelector(selectHiddenIds).length;
  const total = useSelector(selectVisibleProjects).length;

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="inherit"
      sx={(t) => ({
        bgcolor: alpha(t.palette.background.default, 0.8),
        backdropFilter: 'blur(12px)',
        borderBottom: 1,
        borderColor: 'divider',
      })}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 6 } }}>
        <Toolbar disableGutters sx={{ minHeight: { xs: 60, md: 68 }, gap: { xs: 0.5, md: 3 } }}>
          <Typography
            component={RouterLink}
            to="/"
            sx={{
              fontWeight: 600,
              fontSize: { xs: 17, md: 20 },
              letterSpacing: '-0.02em',
              color: 'text.primary',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Ganesh Mesta
            <Box component="span" sx={{ color: 'primary.main' }}>
              .
            </Box>
          </Typography>

          <Stack component="nav" direction="row" spacing={0.5} sx={{ ml: { xs: 'auto', md: 2 } }}>
            {LINKS.map(({ to, label, end }) => (
              <Button
                key={to}
                component={NavLink}
                to={to}
                end={end}
                color="inherit"
                size="small"
                sx={{
                  px: { xs: 1, sm: 1.5 },
                  minWidth: 0,
                  color: 'text.secondary',
                  borderRadius: '8px',
                  transition: 'color .25s',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: '22%',
                    right: '22%',
                    bottom: 2,
                    height: 2,
                    borderRadius: 2,
                    bgcolor: 'primary.main',
                    transform: 'scaleX(0)',
                    transition: 'transform .3s cubic-bezier(.2,.8,.2,1)',
                  },
                  '&:hover': { color: 'text.primary', bgcolor: 'transparent' },
                  '&:hover::after, &.active::after': { transform: 'scaleX(1)' },
                  '&.active': { color: 'primary.light' },
                }}
              >
                {label}
                {label === 'Projects' && (
                  <Box
                    component="span"
                    sx={{ display: { xs: 'none', sm: 'inline' }, ml: 0.75, fontSize: 12, color: 'text.secondary', fontWeight: 500 }}
                  >
                    {total}
                  </Box>
                )}
              </Button>
            ))}
          </Stack>

          <Stack direction="row" spacing={{ xs: 0, sm: 0.5 }} sx={{ ml: { md: 'auto' }, alignItems: 'center' }}>
            <Tooltip title="Hidden projects">
              <IconButton onClick={() => dispatch(setHiddenDialogOpen(true))} aria-label="Manage hidden projects">
                <Badge badgeContent={hiddenCount} color="secondary" max={99}>
                  <VisibilityOffRoundedIcon fontSize="small" />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title={mode === 'light' ? 'Dark mode' : 'Light mode'}>
              <IconButton onClick={() => dispatch(toggleTheme())} aria-label="Toggle theme">
                {mode === 'light' ? <DarkModeRoundedIcon fontSize="small" /> : <LightModeRoundedIcon fontSize="small" />}
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
