import { useEffect, useId, useRef, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { BADGE_POS, C, SCENES, gearPath } from './scenes';
import { artFor } from './artMap';

const BLOBS = [
  'M200 32 C268 30 330 70 342 140 C354 210 300 268 222 274 C140 280 70 246 58 176 C46 106 120 34 200 32 Z',
  'M188 38 C250 22 318 52 336 118 C356 188 318 262 236 270 C160 278 84 252 64 186 C44 120 122 54 188 38 Z',
  'M210 30 C286 40 344 96 336 166 C328 236 262 280 190 270 C118 260 56 214 62 148 C68 82 138 22 210 30 Z',
];

const SPARKLE = 'M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z';
const LEAF = 'M0 0 C-11 -18 -8 -42 0 -58 C8 -42 11 -18 0 0 Z';

function hash(s) {
  let h = 0;
  for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) | 0;
  return Math.abs(h);
}

/** Gears, sparkles, dots and a plant — mirrored to the side away from the badge. */
function Decor({ flip, gears, A }) {
  const fx = (x) => (flip ? 400 - x : x);
  return (
    <g>
      {gears && (
        <>
          <path className="ill-spin" d={gearPath(fx(322), 62, 22, 9)} fill={A.gear} fillRule="evenodd" />
          <path className="ill-spin-rev" d={gearPath(fx(351), 95, 13, 7)} fill={A.gear} fillRule="evenodd" opacity={0.8} />
        </>
      )}
      {[
        [fx(64), 58, 1],
        [fx(346), 232, 0.8],
        [fx(92), 120, 0.55],
      ].map(([x, y, s], i) => (
        <g key={i} transform={`translate(${x} ${y}) scale(${s})`}>
          <path className="ill-pulse" style={{ animationDelay: `${i * 0.7}s` }} d={SPARKLE} fill={A.sparkle} />
        </g>
      ))}
      {Array.from({ length: 9 }, (_, k) => (
        <circle key={k} cx={fx(40 + (k % 3) * 10)} cy={184 + Math.floor(k / 3) * 10} r={2} fill={A.dots} opacity={0.6} />
      ))}
      <g transform={`translate(${fx(62)} 268)`}>
        <g className="ill-sway">
          <path d={LEAF} fill={A.leaf} transform="rotate(-32)" />
          <path d={LEAF} fill={A.leaf2} transform="scale(1.15)" />
          <path d={LEAF} fill={A.leaf} transform="rotate(30)" />
        </g>
        <path d="M-14 -2 H14 L10 16 H-10 Z" fill={C.accentDark} />
      </g>
    </g>
  );
}

function Badge({ x, y, Icon, gradId }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="ill-float" style={{ animationDelay: '-1.8s' }}>
        <circle r={31} fill={`url(#${gradId})`} />
        <circle r={31} fill="none" stroke="#fff" strokeOpacity={0.35} strokeWidth={2} />
        {/* Nested <svg> needs real size attributes; CSS width/height aren't applied to it */}
        <Icon x={-17} y={-17} width={34} height={34} style={{ width: 34, height: 34, fontSize: 34, color: '#fff' }} />
      </g>
    </g>
  );
}

/**
 * Animated vector illustration for a project. Animations only run while the
 * illustration is on screen (and never when `animate` is false).
 */
export default function Illustration({ project, animate = true }) {
  const dark = useTheme().palette.mode === 'dark';
  const gradId = `ill${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  const ref = useRef(null);
  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    if (!animate || !ref.current) return undefined;
    const io = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), { rootMargin: '120px' });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [animate]);

  const { scene, icon } = artFor(project);
  const Scene = SCENES[scene] || SCENES.browser;
  const badge = icon && BADGE_POS[scene];
  const h = hash(project.id);
  const flip = badge ? badge[0] > 200 : h % 2 === 1;

  const A = dark
    ? {
        bg: '#09090f',
        blob: '#2a2585',
        blob2: '#3b2fa3',
        gear: '#4c46c8',
        sparkle: '#c4b5fd',
        dots: '#6d67e8',
        leaf: '#6b7cff',
        leaf2: '#8b9bff',
        shadow: 'rgba(0,0,0,0.5)',
      }
    : {
        bg: '#f3f0ff',
        blob: '#ddd6fe',
        blob2: '#c9bcff',
        gear: '#b4a5ff',
        sparkle: '#8b5cf6',
        dots: '#9f8cff',
        leaf: '#8b7cf6',
        leaf2: '#a79bff',
        shadow: 'rgba(76,52,180,0.16)',
      };

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
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#6d28d9" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={A.bg} />
      <path d={BLOBS[h % BLOBS.length]} fill={A.blob} />
      <circle cx={flip ? 108 : 292} cy={96} r={46} fill={A.blob2} opacity={0.55} />
      {/* School scenes have a graduation cap where the gears would go */}
      <Decor flip={flip} gears={scene !== 'school'} A={A} />
      <ellipse className="ill-shadow" cx="200" cy="262" rx="118" ry="9" fill={A.shadow} />
      <Scene />
      {badge && <Badge x={badge[0]} y={badge[1]} Icon={icon} gradId={gradId} />}
    </svg>
  );
}
