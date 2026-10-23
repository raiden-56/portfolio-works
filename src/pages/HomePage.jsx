import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Carousel from '../components/Carousel';
import { CardGrid } from '../components/ProjectGrid';
import Reveal from '../components/Reveal';
import { selectRecentProjects, selectVisibleProjects } from '../store/worksSlice';

const gradientText = {
  background: 'linear-gradient(90deg, #a78bfa, #8b5cf6 45%, #c084fc)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
};

/** Counts up from 0 the first time it scrolls into view. */
function CountUp({ value, duration = 1100 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let frame;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        setShown(Math.round(value * (1 - (1 - t) ** 3)));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return <span ref={ref}>{shown}</span>;
}

function Stat({ value, label }) {
  return (
    <Box sx={{ textAlign: 'center', px: { xs: 2, sm: 4 } }}>
      <Typography variant="h4" component="div" sx={{ lineHeight: 1.1, ...gradientText }}>
        <CountUp value={value} />
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
    </Box>
  );
}

export default function HomePage() {
  const visible = useSelector(selectVisibleProjects);
  const recent = useSelector(selectRecentProjects);

  const thisYear = String(new Date().getFullYear());
  const stats = [
    { value: visible.length, label: 'Projects' },
    { value: visible.filter((p) => p.source === 'GitHub').length, label: 'From GitHub' },
    { value: visible.filter((p) => p.publishedAt.startsWith(thisYear)).length, label: `Shipped in ${thisYear}` },
    { value: new Set(visible.map((p) => p.category)).size, label: 'Categories' },
  ];

  return (
    <>
      {/* First screen: short intro + carousel, sized to fit without scrolling */}
      <Box
        component="section"
        sx={{
          minHeight: { xs: 'calc(100svh - 60px)', md: 'calc(100svh - 68px)' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: { xs: 3, md: 4 },
        }}
      >
        <Box sx={{ textAlign: 'center', mb: { xs: 2.5, md: 3.5 } }}>
          <Typography variant="overline" color="primary.light" className="fade-up" sx={{ display: 'block' }}>
            Portfolio
          </Typography>
          <Typography
            variant="h1"
            className="fade-up"
            style={{ animationDelay: '0.08s' }}
            sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '2.9rem' } }}
          >
            My{' '}
            <Box component="span" sx={gradientText}>
              Works
            </Box>
          </Typography>
          <Typography
            color="text.secondary"
            className="fade-up"
            style={{ animationDelay: '0.16s' }}
            sx={{ maxWidth: 620, mx: 'auto', mt: 1 }}
          >
            Everything I&apos;ve designed, built and shipped — every live project in one place.
          </Typography>
        </Box>
        <Box className="fade-up" style={{ animationDelay: '0.26s' }}>
          <Carousel />
        </Box>
      </Box>

      <Reveal>
        <Stack
          direction="row"
          sx={{
            justifyContent: 'center',
            py: 3.5,
            flexWrap: 'wrap',
            rowGap: 2,
            borderTop: 1,
            borderBottom: 1,
            borderColor: 'divider',
            '& > :not(:last-child)': { borderRight: 1, borderColor: 'divider' },
          }}
        >
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </Stack>
      </Reveal>

      <Box component="section" aria-labelledby="recent-title" sx={{ mt: { xs: 7, md: 9 } }}>
        <Reveal>
          <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-end', mb: 3 }}>
            <Box>
              <Typography variant="overline" color="primary.light">
                Latest
              </Typography>
              <Typography id="recent-title" variant="h5" component="h2">
                Recently shipped
              </Typography>
            </Box>
            <Button
              component={RouterLink}
              to="/projects"
              variant="outlined"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{ '& .MuiButton-endIcon': { transition: 'transform .25s' }, '&:hover .MuiButton-endIcon': { transform: 'translateX(3px)' } }}
            >
              All projects
            </Button>
          </Stack>
        </Reveal>
        <CardGrid projects={recent} />
      </Box>
    </>
  );
}
