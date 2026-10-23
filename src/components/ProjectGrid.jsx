import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Chip, Paper, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import SearchOffRoundedIcon from '@mui/icons-material/SearchOffRounded';
import ProjectMedia from './ProjectMedia';
import Reveal from './Reveal';
import { openProject, resetFilters, selectFilteredProjects } from '../store/worksSlice';

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

const tagChip = {
  height: 28,
  borderRadius: 999,
  border: 1,
  borderColor: (t) => alpha(t.palette.primary.main, 0.55),
  color: 'primary.light',
  bgcolor: 'transparent',
  fontSize: 12.5,
  '& .MuiChip-label': { px: 1.5 },
};

export function ProjectCard({ project }) {
  const dispatch = useDispatch();
  const open = () => dispatch(openProject(project.id));
  const tags = [project.category, ...project.tags.filter((t) => t !== project.category)].slice(0, 3);

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
        borderRadius: '12px',
        transition: 'transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s, border-color .35s',
        '&:hover, &:focus-visible': {
          transform: 'translateY(-6px)',
          borderColor: (t) => alpha(t.palette.primary.main, 0.5),
          boxShadow: (t) => `0 24px 48px -24px ${alpha(t.palette.primary.main, 0.55)}`,
        },
        '&:hover h3': { color: 'primary.light' },
        '&:focus-visible': { outline: '2px solid', outlineColor: 'primary.main', outlineOffset: 2 },
      }}
    >
      <ProjectMedia project={project} />
      <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
          <Typography
            variant="h6"
            component="h3"
            noWrap
            sx={{ fontSize: 18, transition: 'color .25s' }}
          >
            {project.title}
          </Typography>
          {project.featured && (
            <Chip label="Featured" size="small" color="primary" sx={{ height: 20, fontSize: 11, flexShrink: 0 }} />
          )}
        </Stack>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 1,
            lineHeight: 1.65,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: 46,
          }}
        >
          {project.description}
        </Typography>
        <Stack direction="row" sx={{ mt: 'auto', pt: 2, gap: 1, flexWrap: 'wrap' }}>
          {tags.map((t) => (
            <Chip key={t} label={t} sx={tagChip} />
          ))}
        </Stack>
      </Box>
    </Paper>
  );
}

/** Responsive 4-column card grid; cards fade in as they scroll into view. */
export function CardGrid({ projects }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: { xs: 2, md: 3 },
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, minmax(0, 1fr))',
          md: 'repeat(3, minmax(0, 1fr))',
          lg: 'repeat(4, minmax(0, 1fr))',
        },
      }}
    >
      {projects.map((p, i) => (
        <Reveal key={p.id} delay={(i % 4) * 80}>
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
