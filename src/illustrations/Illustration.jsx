import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Backdrop, Decor } from './kit';
import { artFor } from './artMap';

/**
 * Animated vector illustration for a project — every project has its own
 * scene, palette, background and decoration (see artMap.js). Animations only
 * run while the illustration is on screen, and never when `animate` is false.
 */
export default function Illustration({ project, animate = true }) {
  const dark = useTheme().palette.mode === 'dark';
  const ref = useRef(null);
  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    if (!animate || !ref.current) return undefined;
    const io = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), { rootMargin: '120px' });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [animate]);

  const { Scene, p, bg, decor, shadow, icon } = artFor(project);

  return (
    <svg
      ref={ref}
      className="ill"
      data-paused={!animate || !onScreen}
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      role="img"
      aria-label={`${project.title} illustration`}
      style={{ display: 'block' }}
    >
      <rect width="400" height="300" fill={dark ? p.deep : p.soft} />
      <Backdrop type={bg} a={dark ? p.deepShape : p.shape} b={dark ? p.mainDark : p.mainLight} />
      <Decor type={decor} p={p} dark={dark} />
      {shadow && (
        <ellipse className="ill-shadow" cx="200" cy="262" rx="118" ry="9" fill={dark ? 'rgba(0,0,0,0.45)' : p.shape} />
      )}
      <Scene p={p} Icon={icon} />
    </svg>
  );
}
