import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import FilterBar from '../components/FilterBar';
import ProjectGrid from '../components/ProjectGrid';
import { selectFilteredProjects, selectVisibleProjects } from '../store/worksSlice';

export default function ProjectsPage() {
  const shown = useSelector(selectFilteredProjects).length;
  const total = useSelector(selectVisibleProjects).length;

  return (
    <>
      <Box component="section" sx={{ textAlign: 'center', pt: { xs: 5, md: 6 } }}>
        <Typography variant="overline" color="primary.light" className="fade-up" sx={{ display: 'block' }}>
          Library
        </Typography>
        <Typography
          variant="h4"
          component="h1"
          className="fade-up"
          style={{ animationDelay: '0.08s' }}
          sx={{ fontSize: { xs: '2rem', md: '2.6rem' } }}
        >
          All{' '}
          <Box
            component="span"
            sx={{
              background: 'linear-gradient(90deg, #a78bfa, #8b5cf6 45%, #c084fc)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Projects
          </Box>
        </Typography>
        <Typography color="text.secondary" className="fade-up" style={{ animationDelay: '0.16s' }} sx={{ mt: 1 }}>
          {shown === total ? `${total} live projects` : `Showing ${shown} of ${total} projects`}
        </Typography>
      </Box>

      <Box className="fade-up" style={{ animationDelay: '0.24s' }} sx={{ mt: 3, mb: { xs: 3, md: 4 } }}>
        <FilterBar />
      </Box>

      <ProjectGrid />
    </>
  );
}
