import { useEffect, useState } from 'react';
import { Box, Dialog, IconButton, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ZoomInRoundedIcon from '@mui/icons-material/ZoomInRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { BrowserFrame, Card, IconTile } from './shared';

// Vertical space taken by everything except the screenshot itself on large screens:
// fixed header, sticky tabs, heading, browser chrome, thumbnail strip and spacing.
const RESERVED = 354;

const glassBtn = {
  position: 'absolute',
  zIndex: 2,
  bgcolor: 'rgba(18,18,28,0.7)',
  color: '#fff',
  backdropFilter: 'blur(6px)',
  '&:hover': { bgcolor: 'rgba(18,18,28,0.9)' },
};

export default function ScreenshotsTab({ project, details, accent }) {
  const shots = details.screenshots;
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const shot = shots[index];
  const step = (d) => setIndex((i) => (i + d + shots.length) % shots.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest?.('input, textarea')) return;
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + shots.length) % shots.length);
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % shots.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [shots.length]);

  const arrows = [
    { d: -1, side: 'left', Icon: ChevronLeftRoundedIcon, label: 'Previous screenshot' },
    { d: 1, side: 'right', Icon: ChevronRightRoundedIcon, label: 'Next screenshot' },
  ];

  return (
    <>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        sx={{ mb: { xs: 1.5, md: 2 }, gap: { xs: 0.5, md: 2 }, alignItems: { md: 'baseline' }, justifyContent: 'space-between' }}
      >
        <Typography variant="h5" component="h2" sx={{ fontSize: { xs: 20, md: 22 } }}>
          A guided look at the app
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Real screens from the running app · use ← → or the thumbnails · click a screen for full size
        </Typography>
      </Stack>

      {/* On large screens the frame is sized from the viewport height so the
          image, caption and thumbnails all fit on one screen without scrolling. */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: { xs: 2, md: 2.5 }, alignItems: 'stretch' }}>
        <BrowserFrame
          url={project.url.replace('https://', '')}
          sx={{ flex: '0 1 auto', width: { lg: `min(100%, calc((100svh - ${RESERVED}px) * 1440 / 770))` } }}
        >
          <Box
            component="img"
            key={shot.src}
            src={shot.src}
            alt={shot.title}
            className="shot-in"
            onClick={() => setZoomed(true)}
            sx={{ display: 'block', width: '100%', aspectRatio: '1440 / 770', objectFit: 'cover', cursor: 'zoom-in' }}
          />
          {arrows.map(({ d, side, Icon, label }) => (
            <IconButton key={side} onClick={() => step(d)} aria-label={label} sx={{ ...glassBtn, top: '50%', [side]: 10, transform: 'translateY(-50%)' }}>
              <Icon />
            </IconButton>
          ))}
          <IconButton onClick={() => setZoomed(true)} aria-label="View full size" size="small" sx={{ ...glassBtn, right: 10, bottom: 10 }}>
            <ZoomInRoundedIcon fontSize="small" />
          </IconButton>
        </BrowserFrame>

        <Card sx={{ display: 'flex', flexDirection: 'column', flex: { lg: '1 1 300px' }, minWidth: { lg: 300 } }}>
          <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <IconTile icon={shot.icon} accent={accent} />
            <Typography sx={{ fontWeight: 600, fontSize: 13, color: 'text.secondary', fontVariantNumeric: 'tabular-nums' }}>
              <Box component="span" sx={{ color: accent, fontSize: 22 }}>
                {String(index + 1).padStart(2, '0')}
              </Box>{' '}
              / {String(shots.length).padStart(2, '0')}
            </Typography>
          </Stack>
          <Box key={shot.src} className="fade-up" sx={{ mt: 2 }}>
            <Typography variant="h6" sx={{ lineHeight: 1.3 }}>
              {shot.title}
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.75 }}>
              {shot.text}
            </Typography>
          </Box>
          <Box sx={{ mt: 'auto', pt: 2.5 }}>
            <Box sx={{ height: 4, borderRadius: 4, bgcolor: alpha(accent, 0.12), overflow: 'hidden' }}>
              <Box
                sx={{
                  height: '100%',
                  width: `${((index + 1) / shots.length) * 100}%`,
                  bgcolor: accent,
                  borderRadius: 4,
                  transition: 'width .45s cubic-bezier(.2,.8,.2,1)',
                }}
              />
            </Box>
          </Box>
        </Card>
      </Box>

      <Box
        role="tablist"
        aria-label="Screenshots"
        sx={{
          mt: 1.5,
          display: 'grid',
          gap: 1.25,
          gridTemplateColumns: { xs: `repeat(${shots.length}, 120px)`, md: `repeat(${shots.length}, minmax(0, 120px))` },
          overflowX: { xs: 'auto', md: 'visible' },
          py: 0.5,
        }}
      >
        {shots.map((s, i) => (
          <Box
            key={s.src}
            component="button"
            role="tab"
            aria-selected={i === index}
            aria-label={s.title}
            onClick={() => setIndex(i)}
            sx={{
              p: 0,
              cursor: 'pointer',
              borderRadius: '8px',
              overflow: 'hidden',
              border: 2,
              borderColor: i === index ? accent : 'transparent',
              bgcolor: 'transparent',
              opacity: i === index ? 1 : 0.55,
              transform: i === index ? 'translateY(-2px)' : 'none',
              transition: 'opacity .25s, border-color .25s, transform .25s',
              '&:hover': { opacity: 1 },
              '&:focus-visible': { outline: '2px solid', outlineColor: accent, outlineOffset: 2 },
            }}
          >
            <Box component="img" src={s.src} alt="" loading="lazy" sx={{ display: 'block', width: '100%', aspectRatio: '16 / 9', objectFit: 'cover' }} />
          </Box>
        ))}
      </Box>

      <Dialog
        open={zoomed}
        onClose={() => setZoomed(false)}
        maxWidth={false}
        slotProps={{ paper: { sx: { bgcolor: 'transparent', boxShadow: 'none', m: { xs: 1, md: 4 }, overflow: 'visible' } } }}
      >
        <Box sx={{ position: 'relative' }}>
          <Box
            component="img"
            key={shot.src}
            src={shot.src}
            alt={shot.title}
            className="shot-in"
            sx={{ display: 'block', maxWidth: '100%', maxHeight: 'calc(100svh - 120px)', borderRadius: '10px' }}
          />
          <Typography sx={{ mt: 1.25, color: '#fff', textAlign: 'center', fontWeight: 500 }}>
            {index + 1}. {shot.title}
          </Typography>
          <IconButton onClick={() => setZoomed(false)} aria-label="Close" sx={{ ...glassBtn, top: 10, right: 10 }}>
            <CloseRoundedIcon />
          </IconButton>
          {arrows.map(({ d, side, Icon, label }) => (
            <IconButton key={side} onClick={() => step(d)} aria-label={label} sx={{ ...glassBtn, top: '45%', [side]: 10 }}>
              <Icon />
            </IconButton>
          ))}
        </Box>
      </Dialog>
    </>
  );
}
