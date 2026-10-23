import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Chip, IconButton, Stack, Typography } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import ProjectMedia from './ProjectMedia';
import { openProject, selectCarouselProjects } from '../store/worksSlice';

const AUTOPLAY_MS = 4500;

// Stage height scales with the viewport so the whole carousel fits on the first screen;
// on narrow screens it's capped so cards stay landscape (4:3 at 80vw wide).
const STAGE_HEIGHT = 'min(clamp(220px, calc(100svh - 400px), 470px), calc(80vw * 0.75 / 0.94))';

// Position of each slot relative to the active card (coverflow layout).
const SLOTS = {
  0: { x: 0, scale: 1, z: 5, opacity: 1, blur: 0 },
  1: { x: 70, scale: 0.8, z: 4, opacity: 1, blur: 0 },
  2: { x: 124, scale: 0.62, z: 3, opacity: 0.8, blur: 1 },
  3: { x: 160, scale: 0.5, z: 2, opacity: 0, blur: 2 },
};

/** Shortest signed distance from `active` to `i` on a ring of `n` items. */
function ringOffset(i, active, n) {
  let d = (i - active) % n;
  if (d > n / 2) d -= n;
  if (d < -n / 2) d += n;
  return d;
}

const roundBtn = {
  width: 44,
  height: 44,
  flexShrink: 0,
  border: 1,
  borderColor: 'divider',
  bgcolor: 'background.paper',
  color: 'text.primary',
  '&:hover': { bgcolor: 'primary.main', color: 'primary.contrastText', borderColor: 'primary.main' },
};

export default function Carousel() {
  const dispatch = useDispatch();
  const items = useSelector(selectCarouselProjects);
  const modalOpen = useSelector((s) => Boolean(s.works.selectedId));
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(true);
  const dragStart = useRef(null);
  const n = items.length;

  // Keep the index valid when hiding changes the list.
  useEffect(() => setActive(0), [items]);

  const go = (step) => n && setActive((a) => (a + step + n) % n);

  useEffect(() => {
    if (!playing || hovered || modalOpen || n < 2) return undefined;
    const t = setInterval(() => setActive((a) => (a + 1) % n), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [playing, hovered, modalOpen, n]);

  useEffect(() => {
    if (modalOpen) return undefined;
    const onKey = (e) => {
      if (e.target.closest('input, textarea, [role="menu"]')) return;
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  if (!n) return null;

  // `active` can briefly exceed a freshly shrunk list before the reset effect runs.
  const idx = active % n;
  const current = items[idx];

  const onPointerDown = (e) => (dragStart.current = e.clientX);
  const onPointerUp = (e) => {
    if (dragStart.current == null) return;
    const dx = e.clientX - dragStart.current;
    dragStart.current = null;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  return (
    <Box component="section" aria-roledescription="carousel" aria-label="All works">
      <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        sx={{
          position: 'relative',
          height: STAGE_HEIGHT,
          mx: { xs: -2, sm: -3, md: -6 },
          overflow: 'hidden',
          touchAction: 'pan-y',
          userSelect: 'none',
        }}
      >
        {items.map((p, i) => {
          const offset = ringOffset(i, idx, n);
          const slot = SLOTS[Math.min(Math.abs(offset), 3)];
          const dir = Math.sign(offset);
          const isActive = offset === 0;
          const offstage = Math.abs(offset) > 2;
          return (
            <Box
              key={p.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${n}: ${p.title}`}
              aria-hidden={offstage}
              onClick={() => (isActive ? dispatch(openProject(p.id)) : setActive(i))}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                height: `calc(${STAGE_HEIGHT} * 0.94)`,
                width: `min(80vw, calc(${STAGE_HEIGHT} * 0.94 * 4 / 3))`,
                transform: `translate(-50%, -50%) translateX(${dir * slot.x}%) scale(${slot.scale})`,
                zIndex: slot.z,
                opacity: slot.opacity,
                visibility: Math.abs(offset) > 3 ? 'hidden' : 'visible',
                filter: slot.blur ? `blur(${slot.blur}px) saturate(0.9)` : 'none',
                transition: 'transform .7s cubic-bezier(.2,.8,.2,1), opacity .5s, filter .5s',
                cursor: 'pointer',
                borderRadius: '14px',
                overflow: 'hidden',
                bgcolor: 'background.paper',
                border: 1,
                borderColor: 'divider',
                boxShadow: isActive
                  ? '0 28px 56px -18px rgba(15,12,41,0.4)'
                  : '0 16px 36px -20px rgba(15,12,41,0.3)',
                pointerEvents: offstage ? 'none' : 'auto',
              }}
            >
              <ProjectMedia project={p} fill showActions={isActive} showVisit={isActive} />
            </Box>
          );
        })}
      </Box>

      <Stack
        direction="row"
        sx={{ mt: 2.5, alignItems: 'center', justifyContent: 'space-between', maxWidth: 640, mx: 'auto', gap: 2 }}
      >
        <IconButton aria-label="Previous project" onClick={() => go(-1)} sx={roundBtn}>
          <ArrowBackRoundedIcon fontSize="small" />
        </IconButton>

        <Box sx={{ textAlign: 'center', minWidth: 0, flex: 1 }} aria-live="polite">
          <Typography variant="h6" component="h2" noWrap sx={{ fontSize: { xs: 16, md: 18 } }}>
            {current.title}
          </Typography>
          <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', alignItems: 'center', mt: 0.5 }}>
            <Chip size="small" label={current.category} />
            <Typography variant="caption" color="text.secondary" sx={{ fontVariantNumeric: 'tabular-nums' }}>
              {idx + 1} / {n}
            </Typography>
            <IconButton
              aria-label={playing ? 'Pause autoplay' : 'Start autoplay'}
              onClick={() => setPlaying((v) => !v)}
              size="small"
              sx={{ color: 'text.secondary', p: 0.25 }}
            >
              {playing ? <PauseRoundedIcon sx={{ fontSize: 18 }} /> : <PlayArrowRoundedIcon sx={{ fontSize: 18 }} />}
            </IconButton>
          </Stack>
        </Box>

        <IconButton aria-label="Next project" onClick={() => go(1)} sx={roundBtn}>
          <ArrowForwardRoundedIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Box>
  );
}
