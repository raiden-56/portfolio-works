// One-of-a-kind scenes, part 2. Each takes the project's palette `p`.
import { At, Avatar, GOLD, GOLD_D, GREEN, INK, LINE, MUTE, RED, SURF, TSHIRT, W, d, starPoints } from './kit';

const MONO = 'ui-monospace, Menlo, monospace';
const SANS = 'Poppins, sans-serif';

/** Org chart of avatars joined by moving dashed links. */
export function OrgChart({ p }) {
  const links = [
    'M200 98 V122 H110 V146',
    'M200 122 H290 V146',
    'M200 98 V146',
    'M110 186 V204 H80 V223',
    'M110 204 H140 V223',
    'M290 186 V204 H260 V223',
    'M290 204 H320 V223',
  ];
  const node = (x, y, r, bg, fg, delay) => (
    <At key={`${x}-${y}`} x={x} y={y} cls="ill-pop" delay={delay}>
      <circle r={r + 3} fill={W} />
      <Avatar x={0} y={0} r={r} bg={bg} fg={fg} />
    </At>
  );
  return (
    <g className="ill-float-sm">
      {links.map((dd) => (
        <path key={dd} className="ill-march" d={dd} fill="none" stroke={p.main} strokeWidth={2.5} strokeDasharray="4 8" />
      ))}
      {node(200, 74, 24, p.main, p.mainLight, 0)}
      {[110, 200, 290].map((x, i) => node(x, 166, 19, i === 1 ? p.mainDark : p.accent, i === 1 ? p.mainLight : p.accentLight, 0.4 + i * 0.3))}
      {[80, 140, 260, 320].map((x, i) => node(x, 238, 14, p.mainLight, p.main, 1.3 + i * 0.25))}
    </g>
  );
}

/** Wallet with cash, rising bars and an upward trend arrow. */
export function SalaryGrowth({ p }) {
  const bars = [40, 64, 90, 122];
  return (
    <g>
      {bars.map((h, i) => (
        <rect key={i} className="ill-bar" style={d(-i * 0.3)} x={206 + i * 28} y={238 - h} width={20} height={h} rx={5} fill={i === 3 ? p.main : p.mainLight} />
      ))}
      <polyline
        className="ill-draw"
        points="112,214 166,170 206,186 292,104"
        fill="none"
        stroke={p.accent}
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
      />
      <polygon points="300,96 274,100 294,122" fill={p.accent} />
      <At x={134} y={208} cls="ill-float-sm">
        <At x={-8} y={-38} cls="ill-float" delay={-1}>
          <rect x={-30} y={-12} width={60} height={24} rx={3} fill="#86efac" />
          <circle r={7} fill="#4ade80" />
          <text y={3.5} textAnchor="middle" fontSize={9} fontWeight={700} fill="#166534" fontFamily={SANS}>
            ₹
          </text>
        </At>
        <rect x={-48} y={-30} width={96} height={62} rx={12} fill={p.mainDark} />
        <rect x={8} y={-14} width={46} height={30} rx={8} fill={p.main} />
        <circle cx={22} cy={1} r={5} fill={W} />
      </At>
      <At x={324} y={204} cls="ill-pop" delay={-1}>
        <circle r={20} fill={GOLD} />
        <text y={7} textAnchor="middle" fontSize={18} fontWeight={700} fill={W} fontFamily={SANS}>
          %
        </text>
      </At>
    </g>
  );
}

/** Shopping bag with products floating around it. */
export function MarketBag({ p }) {
  const tile = (x, y, delay, icon) => (
    <At key={`${x}-${y}`} x={x} y={y} cls="ill-float" delay={delay}>
      <rect x={-24} y={-24} width={48} height={48} rx={12} fill={W} />
      {icon}
    </At>
  );
  return (
    <g>
      <At x={200} y={156} cls="ill-float-sm">
        <path d="M-24 -38 V-52 a24 24 0 0 1 48 0 V-38" stroke={p.mainDark} strokeWidth={7} fill="none" />
        <path d="M-52 -38 H52 L60 62 H-60 Z" fill={p.main} />
        <circle cy={12} r={18} fill={W} />
        <text y={19} textAnchor="middle" fontSize={20} fontWeight={700} fill={p.main} fontFamily={SANS}>
          N
        </text>
        <g transform="translate(36 -22) rotate(20)">
          <rect x={-12} y={-8} width={26} height={16} rx={3} fill={GOLD} />
          <circle cx={-6} r={2.5} fill={W} />
        </g>
      </At>
      {tile(
        96,
        92,
        0,
        <>
          <rect x={-6} y={-16} width={12} height={32} rx={3} fill={p.mainDark} />
          <circle r={10} fill={W} stroke={p.accent} strokeWidth={4} />
        </>,
      )}
      {tile(306, 90, -1.2, <path d={TSHIRT} fill={p.accent} />)}
      {tile(
        98,
        214,
        -2,
        <>
          <path d="M-12 6 V0 a12 12 0 0 1 24 0 V6" stroke={p.mainDark} strokeWidth={4} fill="none" />
          <rect x={-15} y={2} width={8} height={12} rx={3} fill={p.accent} />
          <rect x={7} y={2} width={8} height={12} rx={3} fill={p.accent} />
        </>,
      )}
      {tile(
        308,
        212,
        -0.6,
        <>
          <rect x={-14} y={-12} width={28} height={24} rx={3} fill={p.accentLight} />
          <rect x={-3} y={-12} width={6} height={24} fill={p.accent} />
        </>,
      )}
    </g>
  );
}

/** Mountains with a trail to a flag, and a compass with a wobbling needle. */
export function CompassPeak({ p }) {
  return (
    <g>
      <path d="M68 238 L150 114 L200 180 L252 118 L340 238 Z" fill={p.mainDark} />
      <path d="M150 114 L168 142 L158 136 L148 148 L138 138 Z" fill={W} />
      <path d="M252 118 L268 142 L258 138 L250 148 L240 140 Z" fill={W} />
      <path className="ill-march" d="M112 238 C150 214 170 202 190 188 S 232 150 252 124" fill="none" stroke={W} strokeWidth={2.5} strokeDasharray="4 8" />
      <rect x={250.5} y={90} width={2.5} height={30} fill={INK} />
      <path className="ill-wave" d="M253 92 h22 l-5 6 l5 6 h-22 Z" fill={p.accent} />
      <At x={126} y={198} cls="ill-float">
        <circle r={32} fill={W} stroke={p.main} strokeWidth={5} />
        <text y={-17} textAnchor="middle" fontSize={8} fontWeight={700} fill={INK} fontFamily={SANS}>
          N
        </text>
        <g className="ill-needle">
          <path d="M0 -20 L6 0 H-6 Z" fill={RED} />
          <path d="M0 20 L6 0 H-6 Z" fill={INK} />
        </g>
        <circle r={3} fill={W} stroke={INK} />
      </At>
    </g>
  );
}

/** Burger with rising steam and a soft drink. */
export function BurgerMeal({ p }) {
  return (
    <g>
      <ellipse cx={186} cy={236} rx={92} ry={12} fill={W} opacity={0.9} />
      {[156, 180, 204].map((x, i) => (
        <path
          key={x}
          className="ill-steam"
          style={d(i * 0.5)}
          d={`M${x} 132 c-6 -8 6 -14 0 -22 c-6 -8 6 -14 0 -22`}
          stroke={p.mainLight}
          strokeWidth={4}
          fill="none"
          strokeLinecap="round"
        />
      ))}
      <At x={180} y={182} cls="ill-float-sm">
        <path d="M-56 36 H56 a8 8 0 0 1 -8 12 H-48 a8 8 0 0 1 -8 -12 Z" fill="#e8a24c" />
        <rect x={-58} y={20} width={116} height={16} rx={8} fill="#7c3f1d" />
        <path d="M-58 16 H58 L46 28 L34 18 L22 28 L10 18 L-2 28 L-14 18 L-26 28 L-38 18 L-50 28 Z" fill={GOLD} />
        <path d="M-60 12 Q-50 4 -40 12 T-20 12 T0 12 T20 12 T40 12 T60 12 V18 H-60 Z" fill="#4ade80" />
        <rect x={-52} y={4} width={104} height={8} rx={4} fill={RED} />
        <path d="M-58 6 C-58 -44 58 -44 58 6 Z" fill="#f0b25e" />
        {[
          [-24, -18, -20],
          [0, -26, 0],
          [24, -18, 20],
          [-10, -8, 10],
          [14, -8, -10],
        ].map(([x, y, r]) => (
          <ellipse key={`${x}${y}`} cx={x} cy={y} rx={4} ry={2} fill={W} transform={`rotate(${r} ${x} ${y})`} />
        ))}
      </At>
      <At x={296} y={188} cls="ill-float" delay={-1}>
        <rect x={6} y={-80} width={6} height={36} rx={3} fill={RED} transform="rotate(12 9 -62)" />
        <rect x={-26} y={-50} width={52} height={9} rx={4} fill={W} />
        <path d="M-22 -41 H22 L16 44 H-16 Z" fill={p.accent} />
        <rect x={-19} y={-10} width={38} height={14} fill={W} opacity={0.5} />
      </At>
    </g>
  );
}

/** Gold coin flipping, with Heads / Tails chips. */
export function CoinFlip({ p }) {
  return (
    <g>
      <At x={128} y={86} cls="ill-float" delay={-2}>
        <circle r={17} fill={GOLD_D} />
        <circle r={13} fill={GOLD} />
      </At>
      <At x={200} y={136} cls="ill-flip">
        <circle r={70} fill={GOLD_D} />
        <circle r={63} fill={GOLD} />
        <circle r={50} fill="none" stroke={GOLD_D} strokeWidth={4} strokeDasharray="2 7" />
        <polygon points={starPoints(30, 13)} fill={GOLD_D} />
        <path d="M-42 -30 A56 56 0 0 1 8 -52" stroke={W} strokeOpacity={0.6} strokeWidth={6} fill="none" strokeLinecap="round" />
      </At>
      {[
        [150, 'Heads', 0],
        [250, 'Tails', 1.6],
      ].map(([x, label, delay]) => (
        <g key={label}>
          <rect className="ill-blink" style={{ animationDuration: '3.2s', ...d(delay) }} x={x - 34} y={226} width={68} height={24} rx={12} fill={p.main} />
          <text x={x} y={242} textAnchor="middle" fontSize={11} fontWeight={600} fill={W} fontFamily={SANS}>
            {label}
          </text>
        </g>
      ))}
    </g>
  );
}

/** Phone whose app icons pop in one by one. */
export function AppGrid({ p }) {
  const cols = [p.main, p.accent, GREEN, RED, GOLD, p.mainDark, '#06b6d4', '#ec4899'];
  return (
    <g>
      <g className="ill-float-sm">
        <rect x={146} y={40} width={108} height={220} rx={20} fill={INK} />
        <rect x={154} y={54} width={92} height={192} rx={12} fill="#f8f7ff" />
        <rect x={184} y={46} width={32} height={4} rx={2} fill="#4a4670" />
        {Array.from({ length: 12 }, (_, k) => {
          const r = Math.floor(k / 3);
          const c = k % 3;
          return (
            <At key={k} x={174 + c * 26} y={78 + r * 30} cls="ill-pop" delay={k * 0.18}>
              <rect x={-10} y={-10} width={20} height={20} rx={6} fill={cols[k % cols.length]} />
            </At>
          );
        })}
        <rect x={162} y={212} width={76} height={24} rx={8} fill={LINE} />
        {[178, 200, 222].map((x, i) => (
          <rect key={x} x={x - 8} y={216} width={16} height={16} rx={5} fill={cols[i + 4]} />
        ))}
      </g>
      <At x={102} y={110} cls="ill-float" delay={-1}>
        <rect x={-26} y={-26} width={52} height={52} rx={15} fill={p.main} />
        {[-8, 8].flatMap((x) => [-8, 8].map((y) => <rect key={`${x}${y}`} x={x - 5} y={y - 5} width={10} height={10} rx={3} fill={W} />))}
      </At>
    </g>
  );
}

/** Password field with a strength meter, a key and a dice. */
export function PasswordKey({ p }) {
  const strength = [RED, GOLD, GREEN, GREEN];
  return (
    <g>
      <At x={204} y={116} cls="ill-float-sm">
        <rect x={-100} y={-38} width={200} height={76} rx={14} fill={W} />
        <rect x={-84} y={-22} width={132} height={26} rx={13} fill={SURF} />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <circle key={i} className="ill-blink" style={d(i * 0.12)} cx={-68 + i * 15} cy={-9} r={4} fill={p.mainDark} />
        ))}
        <circle cx={70} cy={-9} r={15} fill={p.main} />
        <g transform="translate(70 -9)">
          <g className="ill-spin" style={{ animationDuration: '4s' }}>
            <path d="M-6 -4 A7 7 0 1 1 -6 4" stroke={W} strokeWidth={2.5} fill="none" />
            <path d="M-9 -8 L-5 -3 L-10 -2 Z" fill={W} />
          </g>
        </g>
        {strength.map((c, i) => (
          <rect key={i} className="ill-blink" style={{ animationDuration: '2.4s', ...d(i * 0.3) }} x={-84 + i * 34} y={16} width={30} height={7} rx={3.5} fill={c} />
        ))}
      </At>
      <At x={146} y={210} r={-28} cls="ill-float" delay={-1}>
        <circle r={22} fill={GOLD} />
        <circle r={8} fill={W} />
        <rect x={18} y={-6} width={72} height={12} rx={4} fill={GOLD} />
        <rect x={64} y={4} width={8} height={12} rx={2} fill={GOLD} />
        <rect x={78} y={4} width={8} height={9} rx={2} fill={GOLD} />
      </At>
      <At x={304} y={210} cls="ill-roll">
        <rect x={-24} y={-24} width={48} height={48} rx={10} fill={p.accent} />
        {[
          [-11, -11],
          [11, -11],
          [0, 0],
          [-11, 11],
          [11, 11],
        ].map(([x, y]) => (
          <circle key={`${x}${y}`} cx={x} cy={y} r={4} fill={W} />
        ))}
      </At>
    </g>
  );
}

/** Night landscape whose hill layers slide at different speeds. */
export function ParallaxLayers({ p }) {
  return (
    <g>
      <circle cx={292} cy={78} r={26} fill="#fde68a" />
      <circle cx={284} cy={72} r={5} fill="#f8d76a" />
      <circle cx={300} cy={88} r={4} fill="#f8d76a" />
      <g className="ill-px1">
        <path d="M-40 196 L40 132 L100 172 L170 110 L240 162 L300 122 L380 172 L440 140 V300 H-40 Z" fill={p.mainLight} opacity={0.7} />
      </g>
      <g className="ill-px2">
        <path d="M-40 222 C40 172 100 212 160 192 C220 172 280 222 340 198 C380 182 420 202 440 198 V300 H-40 Z" fill={p.main} />
      </g>
      <g className="ill-px3">
        <path d="M-40 252 C30 228 90 252 150 242 C210 232 270 264 330 248 C380 236 420 248 440 246 V300 H-40 Z" fill={p.mainDark} />
      </g>
      <At x={112} y={96} cls="ill-float">
        <rect x={-30} y={-30} width={60} height={60} rx={14} fill={W} />
        {[
          [8, p.mainDark],
          [0, p.accent],
          [-8, p.main],
        ].map(([y, c]) => (
          <path key={y} d={`M0 ${y - 9} L18 ${y} L0 ${y + 9} L-18 ${y} Z`} fill={c} />
        ))}
      </At>
    </g>
  );
}

/** Shield guarded by turning arrows, with binary rain behind. */
export function BinaryShield({ p }) {
  const cols = [92, 128, 272, 308];
  return (
    <g>
      {cols.map((x, c) =>
        [0, 1, 2].map((k) => (
          <text
            key={`${c}-${k}`}
            className="ill-fall"
            style={d(c * 0.4 + k * 0.9)}
            x={x}
            y={84 + k * 50}
            fontSize={14}
            fontWeight={700}
            fontFamily={MONO}
            fill={p.main}
            opacity={0.55}
            textAnchor="middle"
          >
            {(c + k) % 2 ? '1' : '0'}
          </text>
        )),
      )}
      <g transform="translate(200 150)">
        <g className="ill-spin" style={{ animationDuration: '12s' }}>
          <circle r={98} fill="none" />
          <path d="M-84 -20 A86 86 0 0 1 20 -84" stroke={p.accent} strokeWidth={4} fill="none" strokeLinecap="round" />
          <path d="M20 -84 l-10 -6 l2 12 Z" fill={p.accent} />
          <path d="M84 20 A86 86 0 0 1 -20 84" stroke={p.accent} strokeWidth={4} fill="none" strokeLinecap="round" />
          <path d="M-20 84 l10 6 l-2 -12 Z" fill={p.accent} />
        </g>
        <g className="ill-float-sm">
          <path d="M0 -70 L54 -50 V-8 C54 30 30 56 0 70 C-30 56 -54 30 -54 -8 V-50 Z" fill={p.main} />
          <path d="M0 -56 L42 -40 V-8 C42 22 24 44 0 56 C-24 44 -42 22 -42 -8 V-40 Z" fill={p.mainDark} />
          <path d="M-13 -6 V-16 a13 13 0 0 1 26 0 V-6" stroke={W} strokeWidth={6} fill="none" />
          <rect x={-20} y={-8} width={40} height={32} rx={6} fill={W} />
          <circle cx={0} cy={4} r={4} fill={p.main} />
          <rect x={-2} y={4} width={4} height={10} rx={2} fill={p.main} />
        </g>
      </g>
    </g>
  );
}

/** Tic-tac-toe board drawing itself, ending in a winning line. */
export function TicTacToe({ p }) {
  const X = (cx, cy, dl) =>
    [
      [-12, -12, 12, 12],
      [12, -12, -12, 12],
    ].map(([a, b, c, e], k) => (
      <line
        key={`x${cx}${cy}${k}`}
        className="ill-draw"
        style={d(dl + k * 0.15)}
        x1={cx + a}
        y1={cy + b}
        x2={cx + c}
        y2={cy + e}
        stroke={p.main}
        strokeWidth={7}
        strokeLinecap="round"
        pathLength={1}
      />
    ));
  const O = (cx, cy, dl) => (
    <circle key={`o${cx}${cy}`} className="ill-draw" style={d(dl)} cx={cx} cy={cy} r={13} fill="none" stroke={p.accent} strokeWidth={7} pathLength={1} />
  );
  return (
    <g className="ill-float-sm">
      <rect x={120} y={60} width={160} height={160} rx={20} fill={W} />
      {[174, 226].map((x) => (
        <line key={x} x1={x} y1={78} x2={x} y2={202} stroke={LINE} strokeWidth={5} strokeLinecap="round" />
      ))}
      {[114, 166].map((y) => (
        <line key={y} x1={138} y1={y} x2={262} y2={y} stroke={LINE} strokeWidth={5} strokeLinecap="round" />
      ))}
      {X(148, 88, 0)}
      {O(200, 88, 0.3)}
      {X(200, 140, 0.6)}
      {O(148, 192, 0.9)}
      {O(252, 140, 1.1)}
      {X(252, 192, 1.3)}
      <line className="ill-draw" style={d(1.6)} x1={134} y1={74} x2={266} y2={206} stroke={GOLD} strokeWidth={5} strokeLinecap="round" pathLength={1} />
      <At x={318} y={232} cls="ill-pop">
        <polygon points={starPoints(16, 7)} fill={GOLD} />
      </At>
    </g>
  );
}

/** Laptop showing a T-shirt product page, a swinging hanger and a cart badge. */
export function ShopLaptop({ p }) {
  return (
    <g>
      <At x={190} y={158} cls="ill-float-sm">
        <rect x={-92} y={-68} width={184} height={114} rx={10} fill={INK} />
        <rect x={-84} y={-60} width={168} height={98} rx={5} fill={W} />
        <rect x={-76} y={-52} width={66} height={82} rx={4} fill={p.mainLight} />
        <g transform="translate(-43 -10) scale(1.5)">
          <path d={TSHIRT} fill={p.main} />
        </g>
        <rect x={0} y={-48} width={62} height={8} rx={4} fill={INK} />
        <rect x={0} y={-34} width={30} height={8} rx={4} fill={p.accent} />
        {[6, 20, 34].map((x) => (
          <circle key={x} cx={x} cy={-12} r={5} fill="none" stroke={MUTE} strokeWidth={1.5} />
        ))}
        <rect className="ill-glow" x={0} y={6} width={68} height={16} rx={8} fill={p.main} />
        <path d="M-106 46 H106 L96 58 H-96 Z" fill={MUTE} />
      </At>
      <At x={322} y={74} cls="ill-swing">
        <path d="M0 0 V8 M-20 20 L0 8 L20 20 Z" stroke={INK} strokeWidth={2} fill="none" strokeLinejoin="round" />
        <g transform="translate(0 40) scale(1.5)">
          <path d={TSHIRT} fill={p.accent} />
        </g>
      </At>
      <At x={92} y={204} cls="ill-float" delay={-1.2}>
        <circle r={24} fill={p.accent} />
        <path d="M-12 -8 H-7 L-2 8 H12 L15 -3 H-5" stroke={W} strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={0} cy={12} r={2} fill={W} />
        <circle cx={10} cy={12} r={2} fill={W} />
        <circle cx={17} cy={-17} r={8} fill={RED} />
        <text x={17} y={-14} textAnchor="middle" fontSize={9} fontWeight={700} fill={W} fontFamily={SANS}>
          2
        </text>
      </At>
    </g>
  );
}

/** Kanban board with a card being dragged between columns. */
export function KanbanBoard({ p }) {
  const counts = [3, 2, 2, 1];
  const heads = [p.mainLight, p.accentLight, p.mainLight, '#bbf7d0'];
  return (
    <g>
      <g className="ill-float-sm">
        <rect x={66} y={64} width={268} height={178} rx={14} fill={W} />
        {counts.map((count, i) => {
          const x = 80 + i * 62;
          return (
            <g key={i}>
              <rect x={x} y={78} width={54} height={150} rx={8} fill={SURF} />
              <rect x={x + 6} y={86} width={42} height={8} rx={4} fill={heads[i]} />
              {Array.from({ length: count }, (_, j) => (
                <g key={j}>
                  <rect x={x + 5} y={102 + j * 36} width={44} height={30} rx={5} fill={W} stroke={LINE} />
                  <rect x={x + 11} y={110 + j * 36} width={28} height={4} rx={2} fill={MUTE} />
                  <rect x={x + 11} y={118 + j * 36} width={18} height={4} rx={2} fill={i === 0 ? p.main : LINE} />
                </g>
              ))}
            </g>
          );
        })}
      </g>
      <g className="ill-drag">
        <rect x={204} y={176} width={52} height={34} rx={6} fill={p.main} />
        <rect x={211} y={185} width={30} height={5} rx={2.5} fill={W} />
        <rect x={211} y={195} width={20} height={5} rx={2.5} fill={W} opacity={0.7} />
      </g>
    </g>
  );
}

/** Spinning sun, cloud with falling rain and a temperature card. */
export function Weather({ p }) {
  return (
    <g>
      <g transform="translate(256 96)">
        <g className="ill-spin" style={{ animationDuration: '20s' }}>
          {Array.from({ length: 8 }, (_, i) => (
            <rect key={i} x={-3} y={-46} width={6} height={13} rx={3} fill={GOLD} transform={`rotate(${i * 45})`} />
          ))}
        </g>
        <circle r={28} fill={GOLD} />
        <circle r={20} fill="#fcd34d" />
      </g>
      <g className="ill-float-sm">
        {/* Tinted copy underneath gives the white cloud an edge on pale backgrounds */}
        {[
          [8, p.mainLight],
          [0, W],
        ].map(([dy, c]) => (
          <g key={dy} transform={`translate(0 ${dy})`}>
            <circle cx={172} cy={160} r={34} fill={c} />
            <circle cx={216} cy={146} r={40} fill={c} />
            <circle cx={254} cy={170} r={28} fill={c} />
            <circle cx={142} cy={178} r={22} fill={c} />
            <rect x={142} y={170} width={112} height={30} rx={15} fill={c} />
          </g>
        ))}
      </g>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line
          key={i}
          className="ill-drop"
          style={d(i * 0.23)}
          x1={154 + i * 19}
          y1={212}
          x2={150 + i * 19}
          y2={222}
          stroke={p.main}
          strokeWidth={4}
          strokeLinecap="round"
        />
      ))}
      <At x={102} y={126} cls="ill-float" delay={-1}>
        <rect x={-32} y={-40} width={64} height={80} rx={10} fill={W} />
        <text x={-20} y={-4} fontSize={20} fontWeight={700} fill={p.main} fontFamily={SANS}>
          24°
        </text>
        <rect x={-20} y={8} width={36} height={5} rx={2.5} fill={LINE} />
        <rect x={-20} y={20} width={26} height={5} rx={2.5} fill={LINE} />
      </At>
    </g>
  );
}

/** Clipboard checklist ticking and striking items, a pencil and a progress ring. */
export function Clipboard({ p }) {
  const widths = [70, 56, 64, 44];
  return (
    <g>
      <g className="ill-float-sm">
        <rect x={128} y={56} width={144} height={196} rx={12} fill={p.mainDark} />
        <rect x={140} y={72} width={120} height={170} rx={6} fill={W} />
        <rect x={176} y={46} width={48} height={22} rx={6} fill={MUTE} />
        <circle cx={200} cy={52} r={4} fill={p.mainDark} />
        {widths.map((w, i) => {
          const y = 98 + i * 36;
          return (
            <g key={i}>
              <circle cx={158} cy={y} r={8} fill="none" stroke={p.main} strokeWidth={2.5} />
              <path className="ill-draw" style={d(i * 0.5)} d={`M154 ${y} l3 3 l6 -6`} stroke={p.main} strokeWidth={2.5} fill="none" strokeLinecap="round" pathLength={1} />
              <rect x={174} y={y - 3} width={w} height={6} rx={3} fill={LINE} />
              <line className="ill-draw" style={d(i * 0.5 + 0.3)} x1={172} y1={y} x2={176 + w} y2={y} stroke={INK} strokeOpacity={0.45} strokeWidth={2} pathLength={1} />
            </g>
          );
        })}
      </g>
      <At x={296} y={110} r={22} cls="ill-float" delay={-1}>
        <rect x={-6} y={0} width={12} height={90} rx={2} fill={GOLD} />
        <rect x={-6} y={-12} width={12} height={14} rx={3} fill={p.accent} />
        <path d="M-6 90 L0 106 L6 90 Z" fill="#f5d0a9" />
      </At>
      <At x={94} y={204} cls="ill-float" delay={-2}>
        <circle r={26} fill={W} />
        <circle r={17} fill="none" stroke={LINE} strokeWidth={6} />
        <g transform="rotate(-90)">
          <circle className="ill-draw" r={17} fill="none" stroke={p.main} strokeWidth={6} strokeLinecap="round" pathLength={1} />
        </g>
      </At>
    </g>
  );
}

/** Phone asking for a one-time code, an SMS bubble and a verified shield. */
export function OtpPhone({ p }) {
  return (
    <g>
      <g className="ill-float-sm">
        <rect x={150} y={40} width={100} height={220} rx={20} fill={p.mainDark} />
        <rect x={158} y={54} width={84} height={192} rx={12} fill={W} />
        <circle cx={200} cy={92} r={17} fill={p.mainLight} />
        <path d="M194 92 V87 a6 6 0 0 1 12 0 V92" stroke={p.main} strokeWidth={2.5} fill="none" />
        <rect x={191} y={91} width={18} height={12} rx={3} fill={p.main} />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={164 + i * 19} y={122} width={15} height={21} rx={4} fill={SURF} stroke={p.main} strokeWidth={1.5} />
            {i < 3 ? (
              <text x={171.5 + i * 19} y={137} textAnchor="middle" fontSize={11} fontWeight={700} fill={INK} fontFamily={SANS}>
                {[4, 8, 2][i]}
              </text>
            ) : (
              <rect className="ill-blink" x={170.5 + i * 19} y={127} width={2} height={11} fill={p.main} />
            )}
          </g>
        ))}
        <rect x={166} y={156} width={68} height={16} rx={8} fill={p.main} />
        {Array.from({ length: 9 }, (_, k) => (
          <circle key={k} cx={180 + (k % 3) * 20} cy={192 + Math.floor(k / 3) * 16} r={4} fill={LINE} />
        ))}
      </g>
      <At x={100} y={102} cls="ill-float" delay={-1}>
        <rect x={-42} y={-22} width={84} height={44} rx={12} fill={W} />
        <path d="M26 20 L36 32 L18 21 Z" fill={W} />
        <text y={5} textAnchor="middle" fontSize={14} fontWeight={700} fill={p.main} letterSpacing={3} fontFamily={SANS}>
          4829
        </text>
      </At>
      <At x={302} y={194} cls="ill-pop" delay={-0.8}>
        <path d="M0 -26 L22 -18 V0 C22 14 12 24 0 30 C-12 24 -22 14 -22 0 V-18 Z" fill={GREEN} />
        <path d="M-8 0 l6 6 l11 -12" stroke={W} strokeWidth={3.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </At>
    </g>
  );
}

/** Barcode label with a scanning laser, a scanner and a QR card. */
export function BarcodeScan({ p }) {
  const bars = [3, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 3, 1];
  let x = -66;
  const rects = bars.map((w, i) => {
    const r = i % 2 === 0 ? <rect key={i} x={x} y={-34} width={w * 2.2} height={58} fill={INK} /> : null;
    x += w * 2.2 + 1.8;
    return r;
  });
  return (
    <g>
      <At x={196} y={146} cls="ill-float-sm">
        <rect x={-96} y={-62} width={192} height={124} rx={14} fill={W} />
        <circle cx={-80} cy={-46} r={6} fill={LINE} />
        {rects}
        <text y={44} textAnchor="middle" fontSize={10} fontFamily={MONO} fill={INK} letterSpacing={2}>
          8901234567
        </text>
        <g className="ill-scan2">
          <rect x={-82} y={-40} width={164} height={10} fill={RED} opacity={0.2} />
          <rect x={-82} y={-36} width={164} height={2.5} fill={RED} />
        </g>
      </At>
      <At x={326} y={214} r={-18} cls="ill-float" delay={-1}>
        <rect x={-15} y={-42} width={30} height={52} rx={8} fill={p.main} />
        <rect x={-11} y={6} width={22} height={40} rx={6} fill={p.mainDark} />
        <rect x={-11} y={-46} width={22} height={6} rx={2} fill={RED} />
      </At>
      <At x={88} y={96} cls="ill-float" delay={-2}>
        <rect x={-26} y={-26} width={52} height={52} rx={8} fill={W} />
        {[
          [-18, -18],
          [6, -18],
          [-18, 6],
        ].map(([qx, qy]) => (
          <g key={`${qx}${qy}`}>
            <rect x={qx} y={qy} width={12} height={12} rx={2} fill={p.accent} />
            <rect x={qx + 3} y={qy + 3} width={6} height={6} fill={W} />
          </g>
        ))}
        {[
          [8, 8],
          [14, 14],
          [8, 16],
          [16, 6],
        ].map(([qx, qy]) => (
          <rect key={`${qx}${qy}`} x={qx} y={qy} width={4} height={4} fill={p.accent} />
        ))}
      </At>
    </g>
  );
}

/** Ring of people passing a gift around — referrals. */
export function ReferralLoop({ p }) {
  const colors = [p.main, p.accent, p.mainDark, GOLD, GREEN];
  return (
    <g transform="translate(200 150)">
      <g className="ill-spin" style={{ animationDuration: '24s' }}>
        <circle r={100} fill="none" />
        <circle r={84} fill="none" stroke={p.main} strokeWidth={2.5} strokeDasharray="3 9" />
      </g>
      {colors.map((c, i) => {
        const a = ((-90 + i * 72) * Math.PI) / 180;
        return (
          <At key={i} x={84 * Math.cos(a)} y={84 * Math.sin(a)} cls="ill-pop" delay={i * 0.4}>
            <circle r={21} fill={W} />
            <Avatar x={0} y={0} r={18} bg={c} fg={W} />
          </At>
        );
      })}
      <g className="ill-float">
        <rect x={-30} y={-12} width={60} height={42} rx={6} fill={p.main} />
        <rect x={-34} y={-24} width={68} height={14} rx={4} fill={p.mainDark} />
        <rect x={-5} y={-24} width={10} height={54} fill={GOLD} />
        <ellipse cx={-10} cy={-30} rx={10} ry={6} fill={GOLD} transform="rotate(-25 -10 -30)" />
        <ellipse cx={10} cy={-30} rx={10} ry={6} fill={GOLD} transform="rotate(25 10 -30)" />
      </g>
    </g>
  );
}

/** Generic website scene with an icon badge — used for projects without a custom scene. */
export function Website({ p, Icon }) {
  return (
    <g>
      <g className="ill-float-sm">
        <rect x={86} y={72} width={228} height={168} rx={14} fill={W} />
        <circle cx={99} cy={83} r={3} fill={RED} />
        <circle cx={109} cy={83} r={3} fill={GOLD} />
        <circle cx={119} cy={83} r={3} fill={GREEN} />
        <rect x={150} y={79} width={100} height={8} rx={4} fill={LINE} />
        <rect x={94} y={94} width={212} height={138} rx={8} fill={SURF} />
        <rect x={104} y={104} width={118} height={46} rx={6} fill={p.main} />
        <rect x={112} y={114} width={70} height={7} rx={3.5} fill={W} />
        <rect x={112} y={128} width={34} height={8} rx={4} fill={p.accent} />
        <rect x={230} y={104} width={66} height={46} rx={6} fill={p.mainLight} />
        {[104, 170, 236].map((x) => (
          <rect key={x} x={x} y={162} width={60} height={60} rx={6} fill={W} />
        ))}
      </g>
      {Icon && (
        <At x={318} y={72} cls="ill-float" delay={-1.8}>
          <circle r={30} fill={p.main} />
          <Icon x={-17} y={-17} width={34} height={34} style={{ width: 34, height: 34, fontSize: 34, color: W }} />
        </At>
      )}
    </g>
  );
}

/** A house with a household dashboard in its window, a shopping list ticking itself off, a bill
 *  that's due, a calendar and a notification bell — HomeHub's "everything in one place". */
export function HomeDashboard({ p }) {
  const list = [44, 34, 40];
  return (
    <g>
      {/* House */}
      <g className="ill-float-sm">
        <rect x={238} y={66} width={18} height={40} rx={3} fill={p.mainDark} />
        <rect x={132} y={118} width={136} height={132} rx={8} fill={W} />
        <path d="M118 126 L200 58 L282 126 Z" fill={p.main} strokeLinejoin="round" />
        <circle cx={248} cy={60} r={6} fill={p.accent} />
        {/* Dashboard in the window */}
        <rect x={144} y={132} width={112} height={68} rx={6} fill={SURF} />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={150 + i * 35} y={138} width={30} height={20} rx={4} fill={W} />
            <rect x={154 + i * 35} y={143} width={14} height={4} rx={2} fill={i === 1 ? p.accent : p.main} />
            <rect x={154 + i * 35} y={150} width={20} height={3} rx={1.5} fill={LINE} />
          </g>
        ))}
        {[18, 26, 14, 30, 22].map((h, i) => (
          <rect key={i} className="ill-bar" style={d(i * 0.2)} x={152 + i * 12} y={194 - h} width={8} height={h} rx={2} fill={i === 3 ? p.main : p.mainLight} />
        ))}
        <rect x={218} y={166} width={32} height={4} rx={2} fill={MUTE} />
        <rect x={218} y={175} width={24} height={4} rx={2} fill={LINE} />
        <rect x={218} y={184} width={28} height={4} rx={2} fill={LINE} />
        {/* Door */}
        <rect x={186} y={208} width={28} height={42} rx={4} fill={p.mainDark} />
        <circle cx={208} cy={230} r={2.5} fill={GOLD} />
      </g>

      {/* Shopping list ticking itself off */}
      <At x={82} y={156} cls="ill-float" delay={-1.5}>
        <rect x={-38} y={-50} width={76} height={100} rx={10} fill={W} />
        <rect x={-26} y={-38} width={30} height={6} rx={3} fill={p.main} />
        <path d="M14 -40 h4 l3 10 h12 l2 -7 h-15" fill="none" stroke={p.mainDark} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={22} cy={-27} r={1.8} fill={p.mainDark} />
        <circle cx={31} cy={-27} r={1.8} fill={p.mainDark} />
        {list.map((w, i) => {
          const y = -14 + i * 20;
          return (
            <g key={i}>
              <circle cx={-24} cy={y} r={6} fill="none" stroke={p.main} strokeWidth={2} />
              <path className="ill-draw" style={d(i * 0.6)} d={`M-27 ${y} l2.4 2.4 l4.6 -4.6`} stroke={p.main} strokeWidth={2} fill="none" strokeLinecap="round" pathLength={1} />
              <rect x={-12} y={y - 2.5} width={w} height={5} rx={2.5} fill={LINE} />
            </g>
          );
        })}
      </At>

      {/* Bill that's due soon */}
      <At x={322} y={104} cls="ill-float" delay={-0.5}>
        <rect x={-40} y={-30} width={80} height={60} rx={10} fill={W} />
        <rect x={-28} y={-18} width={26} height={5} rx={2.5} fill={MUTE} />
        <text x={-28} y={6} fontSize={15} fontWeight={700} fill={INK} fontFamily={SANS}>
          ₹2,400
        </text>
        <rect className="ill-pulse" x={-28} y={12} width={36} height={11} rx={5.5} fill={p.accent} />
        <rect x={-23} y={16} width={22} height={3} rx={1.5} fill={W} />
      </At>

      {/* Calendar */}
      <At x={326} y={204} cls="ill-float" delay={-2.5}>
        <rect x={-32} y={-30} width={64} height={60} rx={9} fill={W} />
        <rect x={-32} y={-30} width={64} height={16} rx={9} fill={p.main} />
        <rect x={-32} y={-20} width={64} height={6} fill={p.main} />
        {Array.from({ length: 9 }, (_, i) => (
          <rect key={i} x={-23 + (i % 3) * 17} y={-8 + Math.floor(i / 3) * 12} width={12} height={8} rx={2} fill={i === 4 ? p.accent : SURF} />
        ))}
      </At>

      {/* Notification bell */}
      <At x={96} y={64} r={0} cls="ill-swing">
        <path d="M-13 8 C-13 -8 -9 -16 0 -16 C9 -16 13 -8 13 8 L16 12 H-16 Z" fill={GOLD} />
        <circle cy={15} r={4} fill={GOLD_D} />
        <circle cx={11} cy={-12} r={5} fill={RED} />
      </At>
    </g>
  );
}
