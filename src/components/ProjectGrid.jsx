import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Chip, Paper, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import SearchOffRoundedIcon from '@mui/icons-material/SearchOffRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import ProjectMedia from './ProjectMedia';
import Reveal from './Reveal';
import { DETAILS } from '../data/details';
import { resetFilters, selectFilteredProjects } from '../store/worksSlice';

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

const tagChip = {
  height: 24,
  borderRadius: '6px',
  color: 'text.secondary',
  bgcolor: 'action.hover',
  fontSize: 12,
  '& .MuiChip-label': { px: 1.25 },
};

export function ProjectCard({ project }) {
  const navigate = useNavigate();
  const open = () => navigate(`/project/${project.id}`);
  const tags = [project.category, ...project.tags.filter((t) => t !== project.category)].slice(0, 3);
  const documented = Boolean(DETAILS[project.id]);

  return (
    <Paper
      component="article"
      elevation={0}
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && e.target === e.currentTarget && (e.preventDefault(), open())}
      aria-label={`${project.title} — open details`}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        overflow: 'hidden',
        border: 1,
        borderColor: 'divider',
        borderRadius: '10px',
        transition: 'transform .3s cubic-bezier(.2,.8,.2,1), box-shadow .3s, border-color .3s',
        '&:hover, &:focus-visible': {
          transform: 'translateY(-3px)',
          borderColor: (t) => alpha(t.palette.primary.main, 0.35),
          boxShadow: '0 14px 30px -18px rgba(15,23,42,0.35)',
        },
        '&:hover h3': { color: 'primary.main' },
        '&:hover .card-go': { opacity: 1, transform: 'none', color: 'primary.main' },
        '&:focus-visible': { outline: '2px solid', outlineColor: 'primary.main', outlineOffset: 2 },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <ProjectMedia project={project} />
        {documented && (
          <Chip
            icon={<MenuBookRoundedIcon />}
            label="Case study"
            size="small"
            sx={{
              position: 'absolute',
              left: 10,
              top: 10,
              zIndex: 2,
              height: 24,
              fontSize: 11.5,
              color: '#fff',
              bgcolor: 'rgba(18,18,28,0.72)',
              backdropFilter: 'blur(6px)',
              borderRadius: '6px',
              '& .MuiChip-icon': { color: '#fff', fontSize: 15 },
            }}
          />
        )}
      </Box>
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
          <Typography variant="h6" component="h3" noWrap sx={{ fontSize: 16.5, transition: 'color .25s' }}>
            {project.title}
          </Typography>
          {project.featured && (
            <Chip label="Featured" size="small" color="primary" variant="outlined" sx={{ height: 20, fontSize: 11, borderRadius: '6px', flexShrink: 0 }} />
          )}
        </Stack>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 0.75,
            lineHeight: 1.6,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: 44,
          }}
        >
          {project.description}
        </Typography>
        <Stack direction="row" sx={{ mt: 'auto', pt: 1.75, gap: 0.75, alignItems: 'center' }}>
          <Stack direction="row" sx={{ gap: 0.75, flexWrap: 'wrap', flex: 1, minWidth: 0, maxHeight: 24, overflow: 'hidden' }}>
            {tags.map((t) => (
              <Chip key={t} label={t} sx={tagChip} />
            ))}
          </Stack>
          <ArrowForwardRoundedIcon
            className="card-go"
            fontSize="small"
            sx={{ flexShrink: 0, color: 'text.secondary', opacity: 0.5, transform: 'translateX(-4px)', transition: 'all .3s' }}
          />
        </Stack>
      </Box>
    </Paper>
  );
}

const COLUMNS = { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 };

/** Responsive card grid (1 → 5 columns by default); cards fade in as they scroll into view. */
export function CardGrid({ projects, columns = COLUMNS }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: { xs: 2, md: 2.5 },
        gridTemplateColumns: Object.fromEntries(Object.entries(columns).map(([bp, n]) => [bp, `repeat(${n}, minmax(0, 1fr))`])),
      }}
    >
      {projects.map((p, i) => (
        <Reveal key={p.id} delay={(i % 5) * 70}>
          <ProjectCard project={p} />
        </Reveal>
      ))}
    </Box>
  );
}

/** All projects matching the current search and filters. */
export default function ProjectGrid() {
  const dispatch = useDispatch();
  const projects = useSelector(selectFilteredProjects);

  if (projects.length === 0) {
    return (
      <Paper
        elevation={0}
        sx={{ border: 1, borderColor: 'divider', borderStyle: 'dashed', borderRadius: '12px', py: 8, textAlign: 'center' }}
      >
        <SearchOffRoundedIcon sx={{ fontSize: 40, color: 'text.secondary' }} />
        <Typography variant="h6" sx={{ mt: 1 }}>
          No projects match these filters
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }} onClick={() => dispatch(resetFilters())}>
          Clear filters
        </Button>
      </Paper>
    );
  }

  return <CardGrid projects={projects} />;
}
