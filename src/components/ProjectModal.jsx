import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  Chip,
  Dialog,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import ProjectMedia from './ProjectMedia';
import { formatDate } from './ProjectGrid';
import {
  closeProject,
  hideProject,
  openProject,
  selectFavoriteIds,
  selectFilteredProjects,
  selectSelectedProject,
  toggleFavorite,
} from '../store/worksSlice';

const glassBtn = {
  position: 'absolute',
  zIndex: 3,
  bgcolor: 'rgba(18,18,28,0.7)',
  color: '#fff',
  backdropFilter: 'blur(6px)',
  '&:hover': { bgcolor: 'primary.main' },
};

function Meta({ label, children }) {
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
        {label}
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: 600 }}>
        {children}
      </Typography>
    </Box>
  );
}

export default function ProjectModal() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const project = useSelector(selectSelectedProject);
  const list = useSelector(selectFilteredProjects);
  const isFav = useSelector(selectFavoriteIds).includes(project?.id);
  const [copied, setCopied] = useState(false);
  const [view, setView] = useState('art');

  const index = project ? list.findIndex((p) => p.id === project.id) : -1;
  const step = (d) => {
    if (index < 0 || list.length < 2) return;
    dispatch(openProject(list[(index + d + list.length) % list.length].id));
  };

  useEffect(() => {
    if (!project) return undefined;
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  useEffect(() => {
    setCopied(false);
    setView('art');
  }, [project?.id]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(project.url);
      setCopied(true);
    } catch {
      // clipboard blocked — nothing to do
    }
  };

  const close = () => dispatch(closeProject());

  return (
    <Dialog
      open={Boolean(project)}
      onClose={close}
      fullScreen={fullScreen}
      maxWidth="md"
      fullWidth
      aria-labelledby="project-modal-title"
      slotProps={{ paper: { sx: { borderRadius: fullScreen ? 0 : '14px', overflow: 'hidden' } } }}
    >
      {project && (
        <>
          <Box sx={{ position: 'relative' }}>
            <ProjectMedia project={project} ratio="16 / 9" view={view} showActions={false} />
            {project.image && (
              <ToggleButtonGroup
                exclusive
                size="small"
                value={view}
                onChange={(_, v) => v && setView(v)}
                aria-label="Artwork"
                sx={{
                  position: 'absolute',
                  top: 12,
                  left: 12,
                  zIndex: 3,
                  bgcolor: 'rgba(18,18,28,0.7)',
                  backdropFilter: 'blur(6px)',
                  borderRadius: 999,
                  '& .MuiToggleButton-root': {
                    border: 0,
                    borderRadius: '999px !important',
                    px: 1.75,
                    py: 0.5,
                    color: 'rgba(255,255,255,0.75)',
                    textTransform: 'none',
                    fontSize: 12.5,
                  },
                  '& .Mui-selected': { bgcolor: 'primary.main !important', color: '#fff !important' },
                }}
              >
                <ToggleButton value="art">Illustration</ToggleButton>
                <ToggleButton value="shot">Live preview</ToggleButton>
              </ToggleButtonGroup>
            )}
            <IconButton onClick={close} aria-label="Close" sx={{ ...glassBtn, top: 12, right: 12 }}>
              <CloseRoundedIcon />
            </IconButton>
            {list.length > 1 && index >= 0 &&
              [
                { d: -1, side: 'left', Icon: ChevronLeftRoundedIcon, label: 'Previous project' },
                { d: 1, side: 'right', Icon: ChevronRightRoundedIcon, label: 'Next project' },
              ].map(({ d, side, Icon, label }) => (
                <IconButton
                  key={side}
                  onClick={() => step(d)}
                  aria-label={label}
                  sx={{ ...glassBtn, top: '50%', [side]: 12, transform: 'translateY(-50%)' }}
                >
                  <Icon />
                </IconButton>
              ))}
          </Box>

          <Box sx={{ p: { xs: 2.5, sm: 4 } }}>
            <Stack direction="row" spacing={1} sx={{ mb: 1.5, flexWrap: 'wrap', rowGap: 1 }}>
              <Chip label={project.category} size="small" color="primary" />
              {project.featured && <Chip label="Featured" size="small" color="secondary" />}
              {project.framework && <Chip label={project.framework} size="small" variant="outlined" />}
            </Stack>
            <Typography id="project-modal-title" variant="h4" component="h2">
              {project.title}
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.7 }}>
              {project.description}
            </Typography>

            <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap', rowGap: 1 }}>
              {project.tags.map((t) => (
                <Chip key={t} label={`#${t}`} size="small" variant="outlined" sx={{ borderStyle: 'dashed' }} />
              ))}
            </Stack>

            <Stack
              direction="row"
              sx={{
                mt: 3,
                p: 2,
                borderRadius: '10px',
                bgcolor: 'action.hover',
                gap: { xs: 2, sm: 5 },
                flexWrap: 'wrap',
              }}
            >
              <Meta label="Published">{formatDate(project.publishedAt)}</Meta>
              <Meta label="Deployed from">{project.source}</Meta>
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                  Live URL
                </Typography>
                <Stack direction="row" sx={{ alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }} noWrap>
                    {project.url.replace('https://', '')}
                  </Typography>
                  <Tooltip title={copied ? 'Copied!' : 'Copy link'}>
                    <IconButton size="small" onClick={copy} aria-label="Copy link">
                      {copied ? <CheckRoundedIcon fontSize="inherit" /> : <ContentCopyRoundedIcon fontSize="inherit" />}
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Box>
            </Stack>

            <Stack
              direction={{ xs: 'column-reverse', sm: 'row' }}
              sx={{ mt: 3.5, justifyContent: 'space-between', alignItems: { sm: 'center' }, gap: 1.5 }}
            >
              <Stack direction="row" spacing={1}>
                <Button
                  color="inherit"
                  variant="outlined"
                  sx={{ borderColor: 'divider' }}
                  startIcon={isFav ? <FavoriteRoundedIcon sx={{ color: '#e5484d' }} /> : <FavoriteBorderRoundedIcon />}
                  onClick={() => dispatch(toggleFavorite(project.id))}
                >
                  {isFav ? 'Favourited' : 'Favourite'}
                </Button>
                <Button
                  color="inherit"
                  variant="outlined"
                  sx={{ borderColor: 'divider' }}
                  startIcon={<VisibilityOffRoundedIcon />}
                  onClick={() => dispatch(hideProject(project.id))}
                >
                  Hide
                </Button>
              </Stack>
              <Button
                component="a"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="large"
                endIcon={<OpenInNewRoundedIcon />}
                sx={{ px: 3.5, py: 1.25 }}
              >
                Visit website
              </Button>
            </Stack>
          </Box>
        </>
      )}
    </Dialog>
  );
}
