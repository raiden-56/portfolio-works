import { useEffect, useState } from 'react';
import { Fab, Zoom } from '@mui/material';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

/** Purple round button that appears after scrolling and returns to the top. */
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Zoom in={show}>
      <Fab
        color="primary"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        sx={{
          position: 'fixed',
          right: { xs: 16, md: 28 },
          bottom: { xs: 16, md: 28 },
          zIndex: 1100,
          boxShadow: '0 12px 30px -8px rgba(139,92,246,0.7)',
        }}
      >
        <KeyboardArrowUpRoundedIcon />
      </Fab>
    </Zoom>
  );
}
