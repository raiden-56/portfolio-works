import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, Navigate, useParams, useSearchParams } from 'react-router-dom';
import { Box, Button, Chip, IconButton, Paper, Stack, Tab, Tabs, Tooltip, Typography } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import ProjectMedia from '../components/ProjectMedia';
import { formatDate } from '../components/ProjectGrid';
import GeneralTab from '../components/detail/GeneralTab';
import ScreenshotsTab from '../components/detail/ScreenshotsTab';
import { FeaturesTab, HowToTab, SolvesTab, WhyTab } from '../components/detail/StoryTabs';
import { ComingSoon } from '../components/detail/shared';
import { getDetails } from '../data/details';
import { HEADER_HEIGHT } from '../theme';
import {
  selectFavoriteIds,
  selectFilteredProjects,
  selectProjects,
  selectVisibleProjects,
  toggleFavorite,
} from '../store/worksSlice';

const chip = { height: 24, borderRadius: '6px', fontSize: 12, bgcolor: 'action.hover', color: 'text.secondary' };

const TABS = [
  { key: 'general', label: 'General', icon: InfoRoundedIcon, Panel: GeneralTab, always: true },
  { key: 'why', label: 'Why this app', icon: LightbulbRoundedIcon, Panel: WhyTab },
  { key: 'solves', label: 'What it solves', icon: TaskAltRoundedIcon, Panel: SolvesTab },
  { key: 'features', label: 'Features', icon: AutoAwesomeRoundedIcon, Panel: FeaturesTab },
  { key: 'how', label: 'How to use', icon: MenuBookRoundedIcon, Panel: HowToTab },
  { key: 'screens', label: 'Screenshots', icon: PhotoLibraryRoundedIcon, Panel: ScreenshotsTab },
];

export default function ProjectDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const theme = useTheme();
  const [params, setParams] = useSearchParams();
  const project = useSelector(selectProjects).find((p) => p.id === id);
  const filtered = useSelector(selectFilteredProjects);
  const visible = useSelector(selectVisibleProjects);
  const isFav = useSelector(selectFavoriteIds).includes(id);

  // Screenshots fit one screen only once the hero has scrolled away, so bring the
  // tab bar to the top for that tab — and for any tab picked after scrolling past it.
  const tabsAnchor = useRef(null);
  const tabParam = params.get('tab');
  useEffect(() => {
    const el = tabsAnchor.current;
    if (!el) return;
    const navHeight = document.querySelector('header')?.offsetHeight ?? 0;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    if (tabParam === 'screens' || window.scrollY > top) {
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [tabParam, id]);

  useEffect(() => {
    if (!project) return undefined;
    const before = document.title;
    document.title = `${project.title} · Ganesh Mesta`;
    return () => {
      document.title = before;
    };
  }, [project]);

  if (!project) return <Navigate to="/" replace />;

  const details = getDetails(project.id);
  const accent = details?.accent ?? theme.palette.primary.main;
  const tab = TABS.find((t) => t.key === params.get('tab')) ?? TABS[0];
  const { Panel } = tab;
  const setTab = (key) => setParams(key === 'general' ? {} : { tab: key }, { replace: true });

  // Previous / next follow the dashboard's current order and filters.
  const list = filtered.some((p) => p.id === id) ? filtered : visible;
  const index = list.findIndex((p) => p.id === id);
  const neighbour = (d) => (index < 0 || list.length < 2 ? null : list[(index + d + list.length) % list.length]);
  const prev = neighbour(-1);
  const next = neighbour(1);

  return (
    <>
      <Stack direction="row" sx={{ pt: { xs: 2, md: 2.5 }, alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
        <Button component={RouterLink} to="/" startIcon={<ArrowBackRoundedIcon />} color="inherit" size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
          Dashboard
        </Button>
        {prev && next && (
          <Stack direction="row" spacing={1}>
            {[
              { p: prev, Icon: ChevronLeftRoundedIcon, label: 'Previous' },
              { p: next, Icon: ChevronRightRoundedIcon, label: 'Next' },
            ].map(({ p, Icon, label }) => (
              <Tooltip key={label} title={`${label}: ${p.title}`}>
                <IconButton
                  component={RouterLink}
                  to={`/project/${p.id}`}
                  aria-label={`${label} project: ${p.title}`}
                  size="small"
                  sx={{ border: 1, borderColor: 'divider' }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              </Tooltip>
            ))}
          </Stack>
        )}
      </Stack>

      <Paper
        key={project.id}
        elevation={0}
        className="fade-up"
        sx={{
          mt: 1.5,
          p: { xs: 2, md: 2.5 },
          border: 1,
          borderColor: 'divider',
          borderRadius: '10px',
        }}
      >
        <Stack direction={{ xs: 'column', md: 'row' }} sx={{ gap: { xs: 2, md: 3 }, alignItems: { md: 'center' } }}>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, width: 160, flexShrink: 0, borderRadius: '8px', overflow: 'hidden', border: 1, borderColor: 'divider' }}>
            <ProjectMedia project={project} showActions={false} showVisit={false} />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Stack direction="row" sx={{ gap: 0.75, flexWrap: 'wrap', mb: 1 }}>
              <Chip label={project.category} size="small" sx={{ ...chip, bgcolor: alpha(accent, 0.12), color: accent }} />
              {project.featured && <Chip label="Featured" size="small" sx={chip} />}
              <Chip label={project.source} size="small" sx={chip} />
              <Chip label={formatDate(project.publishedAt)} size="small" sx={chip} />
            </Stack>
            <Typography variant="h1" sx={{ fontSize: { xs: '1.5rem', md: '1.9rem' } }}>
              {project.title}
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 0.75, maxWidth: 820, lineHeight: 1.7 }}>
              {details?.tagline ?? project.description}
            </Typography>
          </Box>
          <Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap', flexShrink: 0 }}>
            <Button
              variant="contained"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<OpenInNewRoundedIcon />}
              sx={{ bgcolor: accent, '&:hover': { bgcolor: accent, filter: 'brightness(0.92)' } }}
            >
              Live demo
            </Button>
            {project.repo && (
              <Button variant="outlined" color="inherit" href={project.repo} target="_blank" rel="noopener noreferrer" startIcon={<GitHubIcon />} sx={{ borderColor: 'divider' }}>
                GitHub
              </Button>
            )}
            <Tooltip title={isFav ? 'Remove from favourites' : 'Add to favourites'}>
              <IconButton onClick={() => dispatch(toggleFavorite(project.id))} sx={{ border: 1, borderColor: 'divider' }} aria-label="Toggle favourite">
                {isFav ? <FavoriteRoundedIcon sx={{ color: '#e5484d' }} /> : <FavoriteBorderRoundedIcon />}
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Paper>

      <Box ref={tabsAnchor} aria-hidden sx={{ mt: { xs: 1.5, md: 2 } }} />
      <Box
        sx={(t) => ({
          position: 'sticky',
          top: HEADER_HEIGHT,
          zIndex: 5,
          mx: { xs: -2, sm: -3, md: -4 },
          px: { xs: 1, sm: 2, md: 3 },
          bgcolor: alpha(t.palette.background.default, 0.92),
          backdropFilter: 'blur(8px)',
          borderBottom: 1,
          borderColor: 'divider',
        })}
      >
        <Tabs
          value={tab.key}
          onChange={(_, v) => setTab(v)}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="Project sections"
          sx={{
            minHeight: 52,
            '& .MuiTabs-indicator': { height: 2, bgcolor: accent },
            '& .MuiTab-root': { minHeight: 52, px: { xs: 1.5, md: 2.25 }, fontSize: 14, color: 'text.secondary' },
            '& .MuiTab-root.Mui-selected': { color: accent },
          }}
        >
          {TABS.map(({ key, label, icon: Icon }) => (
            <Tab key={key} value={key} label={label} icon={<Icon sx={{ fontSize: 19 }} />} iconPosition="start" />
          ))}
        </Tabs>
      </Box>

      <Box key={`${project.id}-${tab.key}`} className="fade-up" role="tabpanel" aria-label={tab.label} sx={{ pt: { xs: 2.5, md: 3.5 } }}>
        {tab.always || details ? (
          <Panel project={project} details={details} accent={accent} />
        ) : (
          <ComingSoon project={project} accent={accent} what={tab.label} />
        )}
      </Box>
    </>
  );
}
