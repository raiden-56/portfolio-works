// Shared drawing kit for project illustrations: colour palettes, background
// shapes, decorations and small reusable pieces. Everything draws in a
// 400×300 viewBox.
//
// Animation classes (ill-*) live in src/index.css. An element that animates
// `transform` must not also carry a `transform` attribute — position it with
// a wrapping <g> instead.

export const W = '#ffffff';
export const INK = '#262342';
export const SURF = '#f3f4fb';
export const LINE = '#dcdff0';
export const MUTE = '#b8bcd8';
export const GOLD = '#fbbf24';
export const GOLD_D = '#d97706';
export const RED = '#ef4444';
export const GREEN = '#22c55e';
export const LEAF = '#2f9e62';
export const LEAF_L = '#4cc27f';

const pal = (main, mainDark, mainLight, soft, shape, deep, deepShape, accent, accentLight) => ({
  main,
  mainDark,
  mainLight,
  soft,
  shape,
  deep,
  deepShape,
  accent,
  accentLight,
});

export const PALETTES = {
  violet: pal('#7c3aed', '#5b21b6', '#c4b5fd', '#f3efff', '#e4dbff', '#120d24', '#2a1b5c', '#f59e0b', '#fde68a'),
  teal: pal('#0d9488', '#115e59', '#99f6e4', '#ecfdf9', '#ccf5ec', '#06201d', '#0f3f39', '#f97316', '#fed7aa'),
  coral: pal('#f43f5e', '#be123c', '#fecdd3', '#fff1f3', '#ffd9df', '#240a10', '#4c1323', '#6366f1', '#c7d2fe'),
  sky: pal('#0284c7', '#075985', '#bae6fd', '#eef8ff', '#d3ecff', '#071a29', '#0c3352', '#facc15', '#fef08a'),
  emerald: pal('#059669', '#065f46', '#a7f3d0', '#ecfdf5', '#cdf5e2', '#061d16', '#0d3b2d', '#ec4899', '#fbcfe8'),
  amber: pal('#d97706', '#92400e', '#fde68a', '#fffbeb', '#fdecc4', '#211505', '#45300c', '#2563eb', '#bfdbfe'),
  indigo: pal('#4f46e5', '#3730a3', '#c7d2fe', '#eef0ff', '#dadfff', '#0d0f29', '#1f2360', '#22d3ee', '#a5f3fc'),
  rose: pal('#db2777', '#9d174d', '#fbcfe8', '#fdf0f7', '#fad6ea', '#220a17', '#4a1232', '#10b981', '#a7f3d0'),
  orange: pal('#ea580c', '#9a3412', '#fed7aa', '#fff6ed', '#ffe3cc', '#221006', '#4a210c', '#0ea5e9', '#bae6fd'),
  cyan: pal('#0891b2', '#155e75', '#a5f3fc', '#ecfcff', '#cdf3fa', '#061b21', '#0d3a45', '#a855f7', '#e9d5ff'),
  lime: pal('#65a30d', '#3f6212', '#d9f99d', '#f7fee7', '#e6f7c4', '#121c05', '#28400c', '#f43f5e', '#fecdd3'),
  blue: pal('#3b5bdb', '#283c9b', '#c5d0fa', '#f0f3ff', '#dbe2fe', '#0b1030', '#1c2a66', '#fb7185', '#fecdd3'),
  gold: pal('#ca8a04', '#854d0e', '#fef08a', '#fefce8', '#fbf3c2', '#1d1704', '#3f330b', '#7c3aed', '#ddd6fe'),
  slate: pal('#475569', '#1e293b', '#cbd5e1', '#f4f6f9', '#e2e8f0', '#0e1217', '#253041', '#f97316', '#fed7aa'),
};

export const d = (s) => ({ animationDelay: `${s}s` });

export const SPARKLE = 'M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z';
export const HEART = 'M0 7 C-12 -2 -11 -13 -4 -13 C-1 -13 0 -10 0 -9 C0 -10 1 -13 4 -13 C11 -13 12 -2 0 7 Z';
export const LEAF_PATH = 'M0 0 C-11 -18 -8 -42 0 -58 C8 -42 11 -18 0 0 Z';
export const PIN = 'M0 0 C-6 -10 -14 -18 -14 -27 A14 14 0 1 1 14 -27 C14 -18 6 -10 0 0 Z';
export const TSHIRT = 'M-14 -12 l8 -6 h12 l8 6 l-5 7 l-3 -2 v20 h-20 v-20 l-3 2 Z';

export const starPoints = (outer, inner, n = 5) =>
  Array.from({ length: n * 2 }, (_, k) => {
    const a = (-90 + (k * 180) / n) * (Math.PI / 180);
    const r = k % 2 ? inner : outer;
    return `${(r * Math.cos(a)).toFixed(1)},${(r * Math.sin(a)).toFixed(1)}`;
  }).join(' ');

export function gearPath(cx, cy, r, teeth = 8) {
  const inner = r * 0.78;
  const step = (Math.PI * 2) / teeth;
  const pts = [];
  for (let t = 0; t < teeth; t++) {
    const base = t * step;
    [
      [base, inner],
      [base + step * 0.12, r],
      [base + step * 0.38, r],
      [base + step * 0.5, inner],
    ].forEach(([a, rr]) => pts.push(`${(cx + rr * Math.cos(a)).toFixed(1)} ${(cy + rr * Math.sin(a)).toFixed(1)}`));
  }
  const h = r * 0.34;
  return `M${pts.join(' L')} Z M${cx + h} ${cy} A${h} ${h} 0 1 0 ${cx - h} ${cy} A${h} ${h} 0 1 0 ${cx + h} ${cy} Z`;
}

/** Wrapper that positions a group and gives its child an animation class. */
export function At({ x, y, r = 0, s = 1, cls, delay = 0, children }) {
  const t = `translate(${x} ${y})${r ? ` rotate(${r})` : ''}${s !== 1 ? ` scale(${s})` : ''}`;
  return (
    <g transform={t}>
      <g className={cls} style={delay ? d(delay) : undefined}>
        {children}
      </g>
    </g>
  );
}

export function Sparkle({ x, y, s = 1, c, delay = 0 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path className="ill-pulse" style={d(delay)} d={SPARKLE} fill={c} />
    </g>
  );
}

export function Cloud({ x, y, s = 1, c = W, delay = 0, opacity = 1 }) {
  return (
    <At x={x} y={y} s={s} cls="ill-drift" delay={delay}>
      <g opacity={opacity}>
        <circle cx={-14} cy={4} r={12} fill={c} />
        <circle cx={4} cy={-4} r={16} fill={c} />
        <circle cx={22} cy={5} r={11} fill={c} />
        <rect x={-26} y={4} width={58} height={13} rx={6.5} fill={c} />
      </g>
    </At>
  );
}

export function Avatar({ x, y, r = 16, bg, fg }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={bg} />
      <circle cx={x} cy={y - r * 0.2} r={r * 0.36} fill={fg} />
      <path d={`M${x - r * 0.62} ${y + r * 0.66} a${r * 0.62} ${r * 0.5} 0 0 1 ${r * 1.24} 0 Z`} fill={fg} />
    </g>
  );
}

export function Plant({ x, y, pot, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className="ill-sway">
        <path d={LEAF_PATH} fill={LEAF} transform="rotate(-32)" />
        <path d={LEAF_PATH} fill={LEAF_L} transform="scale(1.15)" />
        <path d={LEAF_PATH} fill={LEAF} transform="rotate(30)" />
      </g>
      <path d="M-14 -2 H14 L10 16 H-10 Z" fill={pot} />
    </g>
  );
}

/* ---------------- Backgrounds ---------------- */

const BLOB = 'M200 32 C268 30 330 70 342 140 C354 210 300 268 222 274 C140 280 70 246 58 176 C46 106 120 34 200 32 Z';

export function Backdrop({ type, a, b }) {
  switch (type) {
    case 'circle':
      return (
        <>
          <circle cx={200} cy={152} r={118} fill={a} />
          <circle cx={316} cy={68} r={24} fill={b} opacity={0.6} />
          <circle cx={82} cy={236} r={14} fill={b} opacity={0.6} />
        </>
      );
    case 'arch':
      return (
        <>
          <path d="M88 286 V158 a112 112 0 0 1 224 0 V286 Z" fill={a} />
          <circle cx={74} cy={82} r={18} fill={b} opacity={0.6} />
        </>
      );
    case 'split':
      return (
        <>
          <path d="M0 300 L0 214 L400 86 L400 300 Z" fill={a} />
          <circle cx={92} cy={84} r={36} fill={b} opacity={0.5} />
        </>
      );
    case 'rings':
      return (
        <>
          <circle cx={200} cy={152} r={134} fill="none" stroke={a} strokeWidth={2} strokeDasharray="3 9" />
          <circle cx={200} cy={152} r={110} fill={a} opacity={0.45} />
          <circle cx={200} cy={152} r={80} fill={a} />
        </>
      );
    case 'hills':
      return (
        <>
          <circle cx={306} cy={78} r={30} fill={b} opacity={0.7} />
          <path d="M0 228 C80 178 150 198 210 226 C270 254 330 198 400 212 V300 H0 Z" fill={a} />
          <path d="M0 262 C90 232 170 250 240 268 C300 282 350 254 400 258 V300 H0 Z" fill={b} opacity={0.45} />
        </>
      );
    case 'grid':
      return (
        <>
          <rect x={64} y={44} width={272} height={222} rx={30} fill={a} opacity={0.6} />
          {Array.from({ length: 13 * 9 }, (_, k) => (
            <circle key={k} cx={20 + (k % 13) * 30} cy={16 + Math.floor(k / 13) * 34} r={1.6} fill={b} opacity={0.55} />
          ))}
        </>
      );
    case 'squares':
      return (
        <>
          <rect x={108} y={50} width={184} height={194} rx={42} fill={a} transform="rotate(10 200 147)" />
          <rect x={298} y={194} width={46} height={46} rx={12} fill={b} opacity={0.6} transform="rotate(-14 321 217)" />
          <rect x={58} y={60} width={30} height={30} rx={8} fill={b} opacity={0.6} transform="rotate(18 73 75)" />
        </>
      );
    case 'bubbles':
      return (
        <>
          <circle cx={200} cy={150} r={112} fill={a} />
          <circle cx={322} cy={72} r={30} fill={b} opacity={0.55} />
          <circle cx={80} cy={224} r={24} fill={b} opacity={0.55} />
          <circle cx={334} cy={238} r={13} fill={a} />
          <circle cx={70} cy={80} r={10} fill={a} />
        </>
      );
    case 'plain':
      return null;
    default:
      return (
        <>
          <path d={BLOB} fill={a} />
          <circle cx={292} cy={96} r={46} fill={b} opacity={0.5} />
        </>
      );
  }
}

/* ---------------- Decorations ---------------- */

export function Decor({ type, p, dark }) {
  const soft = dark ? p.mainLight : p.main;
  switch (type) {
    case 'stars':
      return (
        <>
          <Sparkle x={62} y={56} c={p.accent} />
          <Sparkle x={344} y={232} s={0.8} c={soft} delay={0.6} />
          <Sparkle x={90} y={134} s={0.55} c={soft} delay={1.2} />
          <Sparkle x={338} y={60} s={0.7} c={p.accent} delay={1.8} />
        </>
      );
    case 'clouds':
      return (
        <>
          <Cloud x={76} y={66} s={0.8} c={W} opacity={dark ? 0.25 : 0.95} />
          <Cloud x={336} y={118} s={0.6} c={W} delay={-3} opacity={dark ? 0.2 : 0.9} />
        </>
      );
    case 'confetti': {
      const bits = [
        [58, 70, 0],
        [92, 40, 1],
        [340, 54, 2],
        [362, 120, 3],
        [44, 160, 1],
        [352, 210, 0],
        [70, 252, 2],
        [312, 30, 3],
      ];
      const cols = [p.main, p.accent, soft, GOLD];
      return bits.map(([x, y, c], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${i * 37})`}>
          <rect className="ill-pulse" style={d(i * 0.35)} x={-5} y={-2} width={10} height={4} rx={2} fill={cols[c]} />
        </g>
      ));
    }
    case 'leaves':
      return <Plant x={60} y={266} pot={p.mainDark} />;
    case 'lines':
      return (
        <>
          <path d="M34 128 Q70 52 150 40" fill="none" stroke={soft} strokeWidth={2} strokeDasharray="4 8" className="ill-march" opacity={0.6} />
          <path d="M250 268 Q340 262 372 180" fill="none" stroke={soft} strokeWidth={2} strokeDasharray="4 8" className="ill-march" opacity={0.6} />
        </>
      );
    case 'dots':
      return (
        <>
          {Array.from({ length: 9 }, (_, k) => (
            <circle key={`a${k}`} cx={44 + (k % 3) * 10} cy={64 + Math.floor(k / 3) * 10} r={2} fill={soft} opacity={0.6} />
          ))}
          {Array.from({ length: 9 }, (_, k) => (
            <circle key={`b${k}`} cx={336 + (k % 3) * 10} cy={214 + Math.floor(k / 3) * 10} r={2} fill={soft} opacity={0.6} />
          ))}
        </>
      );
    case 'sparkle':
      return (
        <>
          <Sparkle x={70} y={70} s={0.9} c={p.accent} />
          <Sparkle x={336} y={244} s={0.6} c={soft} delay={1} />
        </>
      );
    case 'gears':
      return (
        <>
          <path className="ill-spin" d={gearPath(70, 62, 20, 9)} fill={soft} fillRule="evenodd" opacity={0.5} />
          <path className="ill-spin-rev" d={gearPath(97, 92, 12, 7)} fill={soft} fillRule="evenodd" opacity={0.4} />
        </>
      );
    default:
      return null;
  }
}
