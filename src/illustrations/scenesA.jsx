// One-of-a-kind scenes, part 1. Each takes the project's palette `p`.
import { At, Avatar, GOLD, GOLD_D, HEART, INK, LEAF, LEAF_L, LINE, MUTE, PIN, RED, SURF, W, d, starPoints } from './kit';

const MONO = 'ui-monospace, Menlo, monospace';
const SANS = 'Poppins, sans-serif';

/** Laptop with typing code, avatar saying hi and a </> chip. */
export function CodeLaptop({ p }) {
  const code = [
    [0, 60, p.main],
    [14, 40, p.accent],
    [14, 70, p.mainLight],
    [28, 50, p.accent],
    [28, 30, p.main],
    [14, 44, p.mainLight],
    [0, 64, p.accent],
  ];
  return (
    <g>
      <g className="ill-float-sm">
        <rect x={110} y={76} width={180} height={120} rx={10} fill={INK} />
        <rect x={118} y={84} width={164} height={104} rx={5} fill="#1b1932" />
        {code.map(([indent, w, c], i) => (
          <rect key={i} className="ill-type" style={d(i * 0.3)} x={130 + indent} y={96 + i * 12} width={w} height={6} rx={3} fill={c} />
        ))}
        <path d="M92 196 H308 L296 212 H104 Z" fill={MUTE} />
        <rect x={180} y={196} width={40} height={5} rx={2.5} fill={LINE} />
      </g>
      <At x={94} y={110} cls="ill-float" delay={-1}>
        <circle r={30} fill={W} />
        <Avatar x={0} y={0} r={26} bg={p.mainLight} fg={p.mainDark} />
      </At>
      <At x={126} y={62} cls="ill-pop" delay={-0.5}>
        <rect x={-20} y={-14} width={44} height={26} rx={13} fill={W} />
        <path d="M-12 10 L-16 20 L-4 11 Z" fill={W} />
        <text x={2} y={4} textAnchor="middle" fontSize={12} fontWeight={700} fill={p.main} fontFamily={SANS}>
          Hi!
        </text>
      </At>
      <At x={308} y={182} cls="ill-float" delay={-2}>
        <rect x={-32} y={-22} width={64} height={44} rx={12} fill={p.main} />
        <text x={0} y={7} textAnchor="middle" fontSize={20} fontWeight={700} fontFamily={MONO} fill={W}>
          {'</>'}
        </text>
      </At>
    </g>
  );
}

/** Retro CRT monitor with a pixel face, a history clock and a sticky note. */
export function RetroMonitor({ p }) {
  const px = (x, y, c) => <rect key={`${x}-${y}`} x={x} y={y} width={8} height={8} fill={c} />;
  return (
    <g>
      <g className="ill-float-sm">
        <rect x={118} y={62} width={164} height={136} rx={18} fill="#e9e4d6" />
        <rect x={134} y={76} width={132} height={98} rx={14} fill={p.mainDark} />
        <rect x={180} y={96} width={40} height={40} fill={p.mainLight} />
        {[180, 188, 196, 204, 212].map((x) => px(x, 88, p.accent))}
        {px(188, 108, INK)}
        {px(204, 108, INK)}
        {[188, 196, 204].map((x) => px(x, 124, INK))}
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={160 + i * 17} y={148} width={12} height={6} rx={1} fill={p.mainLight} opacity={0.7} />
        ))}
        <rect className="ill-scan" x={134} y={76} width={132} height={6} fill={W} opacity={0.14} />
        <circle cx={258} cy={186} r={4} fill={MUTE} />
        <circle cx={246} cy={186} r={4} fill={MUTE} />
        <path d="M168 198 h64 l10 18 h-84 Z" fill="#d6d0c0" />
      </g>
      <At x={88} y={96} cls="ill-float" delay={-1.2}>
        <circle r={27} fill={W} />
        <circle r={20} fill="none" stroke={p.main} strokeWidth={3} />
        <path d="M0 -12 V0 L8 6" stroke={INK} strokeWidth={3} fill="none" strokeLinecap="round" />
        <g className="ill-spin-rev">
          <circle r={34} fill="none" />
          <path d="M-30 -14 A33 33 0 0 1 14 -30" stroke={p.accent} strokeWidth={3} fill="none" strokeLinecap="round" />
          <path d="M14 -30 l-2 8 l8 -4 Z" fill={p.accent} />
        </g>
      </At>
      <At x={314} y={172} r={8} cls="ill-float" delay={-2.4}>
        <rect x={-28} y={-28} width={56} height={56} rx={4} fill={p.accentLight} />
        <rect x={-18} y={-14} width={34} height={5} rx={2.5} fill={p.accent} opacity={0.7} />
        <rect x={-18} y={-2} width={26} height={5} rx={2.5} fill={p.accent} opacity={0.5} />
        <rect x={-18} y={10} width={30} height={5} rx={2.5} fill={p.accent} opacity={0.5} />
      </At>
    </g>
  );
}

/** Profile card with growing skill bars, a heart and a star badge. */
export function ProfileCard({ p }) {
  const skills = [
    [48, p.main],
    [36, p.accent],
    [54, p.mainDark],
  ];
  return (
    <g>
      <g className="ill-float-sm">
        <rect x={138} y={50} width={124} height={200} rx={16} fill={W} />
        <path d="M138 66 a16 16 0 0 1 16 -16 h92 a16 16 0 0 1 16 16 v42 h-124 Z" fill={p.main} />
        <circle cx={200} cy={108} r={31} fill={W} />
        <Avatar x={200} y={108} r={27} bg={p.mainLight} fg={p.mainDark} />
        <rect x={166} y={148} width={68} height={8} rx={4} fill={INK} />
        <rect x={178} y={162} width={44} height={6} rx={3} fill={MUTE} />
        {skills.map(([w, c], i) => (
          <g key={i}>
            <rect x={154} y={184 + i * 18} width={22} height={5} rx={2.5} fill={MUTE} />
            <rect x={182} y={184 + i * 18} width={62} height={6} rx={3} fill={LINE} />
            <rect className="ill-grow" style={d(i * 0.4)} x={182} y={184 + i * 18} width={w} height={6} rx={3} fill={c} />
          </g>
        ))}
      </g>
      <At x={106} y={98} cls="ill-float" delay={-1}>
        <circle r={22} fill={p.accent} />
        <path d={HEART} fill={W} transform="scale(1.2)" />
      </At>
      <At x={296} y={196} cls="ill-pop" delay={-1.6}>
        <circle r={20} fill={GOLD} />
        <polygon points={starPoints(11, 5)} fill={W} />
      </At>
    </g>
  );
}

/** Living room: sofa, glowing floor lamp, framed picture, plant and rug. */
export function LivingRoom({ p }) {
  return (
    <g>
      <ellipse cx={200} cy={248} rx={134} ry={11} fill={p.mainLight} opacity={0.7} />
      <At x={200} y={92} cls="ill-float-sm" delay={-2}>
        <rect x={-34} y={-24} width={68} height={48} rx={4} fill={W} stroke={p.mainDark} strokeWidth={4} />
        <path d="M-26 18 L-8 -4 L4 8 L12 0 L26 18 Z" fill={p.mainLight} />
        <circle cx={14} cy={-10} r={5} fill={p.accent} />
      </At>
      <path className="ill-glow" d="M72 112 L104 112 L122 176 L54 176 Z" fill={p.accentLight} opacity={0.45} />
      <rect x={86} y={110} width={4} height={118} fill={INK} />
      <ellipse cx={88} cy={230} rx={16} ry={4} fill={INK} />
      <path d="M70 112 L106 112 L98 84 L78 84 Z" fill={p.accent} />
      <g className="ill-float-sm">
        <rect x={120} y={148} width={160} height={52} rx={18} fill={p.main} />
        <rect x={136} y={160} width={56} height={30} rx={10} fill={p.mainLight} />
        <rect x={208} y={160} width={56} height={30} rx={10} fill={p.mainLight} />
        <rect x={112} y={182} width={176} height={34} rx={12} fill={p.mainDark} />
        <rect x={104} y={168} width={24} height={52} rx={12} fill={p.main} />
        <rect x={272} y={168} width={24} height={52} rx={12} fill={p.main} />
        <rect x={124} y={218} width={6} height={12} rx={2} fill={INK} />
        <rect x={270} y={218} width={6} height={12} rx={2} fill={INK} />
      </g>
      <g transform="translate(326 196)">
        <g className="ill-sway">
          <path d="M0 0 C-14 -20 -12 -50 0 -70 C12 -50 14 -20 0 0 Z" fill={LEAF} />
          <path d="M0 0 C-18 -14 -30 -30 -32 -50 C-14 -40 -4 -24 0 0 Z" fill={LEAF_L} />
          <path d="M0 0 C18 -14 30 -30 32 -50 C14 -40 4 -24 0 0 Z" fill={LEAF_L} />
        </g>
        <rect x={-15} y={0} width={30} height={32} rx={5} fill={W} />
      </g>
    </g>
  );
}

/** Page builder: canvas, dashed drop zone and a block being dragged in. */
export function PageBuilder({ p }) {
  return (
    <g>
      <g className="ill-float-sm">
        <rect x={94} y={62} width={212} height={174} rx={12} fill={W} />
        <path d="M94 74 a12 12 0 0 1 12 -12 h34 v174 h-34 a12 12 0 0 1 -12 -12 Z" fill={SURF} />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={105} y={76 + i * 26} width={24} height={18} rx={5} fill={i === 1 ? p.main : LINE} />
        ))}
        <rect x={150} y={74} width={144} height={20} rx={5} fill={p.mainLight} />
        <rect x={150} y={102} width={68} height={52} rx={6} fill={LINE} />
        <rect x={226} y={102} width={68} height={52} rx={6} fill={LINE} />
        <rect x={150} y={162} width={144} height={14} rx={4} fill={SURF} />
        <rect className="ill-blink" x={150} y={184} width={144} height={40} rx={6} fill="none" stroke={p.main} strokeWidth={2} strokeDasharray="5 4" />
      </g>
      <g className="ill-drag">
        <rect x={176} y={150} width={98} height={34} rx={7} fill={p.main} />
        <rect x={186} y={160} width={50} height={5} rx={2.5} fill={W} />
        <rect x={186} y={170} width={32} height={5} rx={2.5} fill={W} opacity={0.7} />
        <path d="M262 174 L262 192 L267 187 L271 195 L274 194 L270 186 L277 186 Z" fill={INK} stroke={W} strokeWidth={1.5} />
      </g>
      <At x={330} y={98} cls="ill-float" delay={-1.4}>
        <rect x={-18} y={-38} width={36} height={76} rx={18} fill={W} />
        <circle cy={-22} r={8} fill={p.main} />
        <circle cy={0} r={8} fill={p.accent} />
        <circle cy={22} r={8} fill={p.mainDark} />
      </At>
    </g>
  );
}

/** Open book with a page turning, and a PDF badge. */
export function OpenBook({ p }) {
  const right = 'M200 92 C224 80 268 80 296 88 V222 C268 214 224 214 200 226 Z';
  return (
    <g>
      <g className="ill-float-sm">
        <path d="M94 96 V232 C130 224 176 224 200 236 C224 224 270 224 306 232 V96 Z" fill={p.mainDark} />
        <path d="M200 92 C176 80 132 80 104 88 V222 C132 214 176 214 200 226 Z" fill={W} />
        <path d={right} fill={SURF} />
        <rect x={120} y={104} width={60} height={42} rx={4} fill={p.mainLight} />
        <path d="M124 142 L140 122 L150 132 L158 124 L176 142 Z" fill={p.main} />
        {[60, 50, 58, 40].map((w, i) => (
          <rect key={i} x={120} y={156 + i * 12} width={w} height={5} rx={2.5} fill={LINE} />
        ))}
        {[64, 52, 60, 46, 56, 38].map((w, i) => (
          <rect key={i} x={220} y={106 + i * 16} width={w} height={5} rx={2.5} fill={LINE} />
        ))}
        <path className="ill-page" d={right} fill={W} stroke={LINE} />
      </g>
      <At x={322} y={80} cls="ill-float" delay={-1}>
        <path d="M-24 -28 H12 L24 -16 V28 H-24 Z" fill={W} />
        <path d="M12 -28 V-16 H24 Z" fill={LINE} />
        <rect x={-18} y={-6} width={36} height={16} rx={4} fill={p.accent} />
        <text y={6} textAnchor="middle" fontSize={10} fontWeight={700} fill={W} fontFamily={SANS}>
          PDF
        </text>
      </At>
    </g>
  );
}

/** Globe with a plane orbiting it, a suitcase and a map pin. */
export function GlobeTrip({ p }) {
  return (
    <g>
      <g transform="translate(200 136)">
        <g className="ill-float-sm">
          <circle r={64} fill={p.main} />
          <path d="M-40 -30 C-24 -46 4 -40 6 -22 C8 -6 -14 -2 -22 8 C-30 18 -48 6 -46 -10 Z" fill={p.mainLight} />
          <path d="M14 10 C30 2 48 12 44 30 C40 46 20 48 12 36 Z" fill={p.mainLight} />
          <path d="M8 -52 C22 -56 38 -46 32 -38 C26 -32 14 -36 8 -52 Z" fill={p.mainLight} />
          <ellipse rx={64} ry={20} fill="none" stroke={W} strokeOpacity={0.3} strokeWidth={2} />
        </g>
        <g className="ill-spin" style={{ animationDuration: '10s' }}>
          <circle r={100} fill="none" />
          <circle r={88} fill="none" stroke={p.mainLight} strokeWidth={2} strokeDasharray="3 7" />
          <g transform="translate(0 -88) rotate(90)">
            <path
              d="M0 -12 C2 -12 3 -10 3 -7 V-2 L14 4 V7 L3 4 V10 L7 13 V15 L0 13 L-7 15 V13 L-3 10 V4 L-14 7 V4 L-3 -2 V-7 C-3 -10 -2 -12 0 -12 Z"
              fill={p.accent}
            />
          </g>
        </g>
      </g>
      <At x={124} y={218} cls="ill-float" delay={-1}>
        <path d="M-10 -24 V-30 H10 V-24" stroke={INK} strokeWidth={4} fill="none" />
        <rect x={-28} y={-24} width={56} height={44} rx={8} fill={p.accent} />
        <rect x={-14} y={-24} width={6} height={44} fill={W} opacity={0.6} />
        <rect x={8} y={-24} width={6} height={44} fill={W} opacity={0.6} />
        <circle cx={-18} cy={23} r={3} fill={INK} />
        <circle cx={18} cy={23} r={3} fill={INK} />
      </At>
      <At x={288} y={224} cls="ill-bounce">
        <path d={PIN} fill={RED} />
        <circle cy={-27} r={5} fill={W} />
      </At>
    </g>
  );
}

/** Home inside a repayment progress ring, coin stack and falling balance chart. */
export function LoanHome({ p }) {
  return (
    <g>
      <g transform="translate(178 142)">
        <g className="ill-float-sm">
          <circle r={70} fill={W} />
          <circle r={58} fill="none" stroke={p.mainLight} strokeWidth={12} />
          <g transform="rotate(-90)">
            <circle className="ill-draw" r={58} fill="none" stroke={p.main} strokeWidth={12} strokeLinecap="round" pathLength={1} />
          </g>
          <path d="M-30 0 L0 -26 L30 0 Z" fill={p.mainDark} />
          <rect x={-22} y={-2} width={44} height={32} fill={p.mainLight} />
          <rect x={-6} y={12} width={12} height={18} fill={p.accent} />
          <rect x={8} y={4} width={9} height={9} fill={W} />
        </g>
      </g>
      <At x={296} y={222} cls="ill-float-sm" delay={-1}>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <ellipse cy={-i * 9 + 4} rx={22} ry={7} fill={GOLD_D} />
            <ellipse cy={-i * 9} rx={22} ry={7} fill={GOLD} />
          </g>
        ))}
        <text y={-23} textAnchor="middle" fontSize={9} fontWeight={700} fill={GOLD_D} fontFamily={SANS}>
          ₹
        </text>
      </At>
      <At x={300} y={88} cls="ill-float" delay={-2}>
        <rect x={-42} y={-28} width={84} height={56} rx={10} fill={W} />
        <rect x={-32} y={-18} width={28} height={5} rx={2.5} fill={LINE} />
        <polyline
          className="ill-draw"
          points="-32,-2 -16,4 -2,0 12,12 32,16"
          fill="none"
          stroke={p.accent}
          strokeWidth={3.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
        />
      </At>
    </g>
  );
}

/** School bus driving past a little school. */
export function SchoolBus({ p }) {
  const wheel = (x) => (
    <At x={x} y={14} cls="ill-wheel">
      <circle r={13} fill={INK} />
      <circle r={5} fill={MUTE} />
      <rect x={-1} y={-11} width={2} height={22} fill={MUTE} />
      <rect x={-11} y={-1} width={22} height={2} fill={MUTE} />
    </At>
  );
  return (
    <g>
      <g transform="translate(272 150)">
        <rect x={-1.5} y={-58} width={3} height={32} fill={INK} />
        <path className="ill-wave" d="M1.5 -56 h24 l-5 6 l5 6 h-24 Z" fill={p.accent} />
        <path d="M-46 0 L0 -28 L46 0 Z" fill={p.mainDark} />
        <rect x={-40} y={0} width={80} height={52} fill={W} />
        <rect x={-30} y={10} width={16} height={14} rx={2} fill={p.mainLight} />
        <rect x={14} y={10} width={16} height={14} rx={2} fill={p.mainLight} />
        <rect x={-9} y={22} width={18} height={30} rx={2} fill={p.main} />
      </g>
      <rect x={30} y={226} width={340} height={6} rx={3} fill={MUTE} opacity={0.5} />
      <g className="ill-road">
        {[40, 100, 160, 220, 280, 340].map((x) => (
          <rect key={x} x={x} y={238} width={26} height={3} rx={1.5} fill={MUTE} opacity={0.6} />
        ))}
      </g>
      <At x={150} y={196} cls="ill-bob">
        <rect x={-82} y={-48} width={150} height={60} rx={12} fill={GOLD} />
        <rect x={58} y={-30} width={30} height={42} rx={8} fill={GOLD} />
        <rect x={-82} y={-6} width={170} height={6} fill={INK} />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={-72 + i * 30} y={-40} width={22} height={20} rx={4} fill={p.mainLight} />
        ))}
        <rect x={62} y={-26} width={20} height={16} rx={3} fill={p.mainLight} />
        <circle cx={86} cy={4} r={3} fill={W} />
        <text x={-14} y={8} textAnchor="middle" fontSize={8} fontWeight={700} fill={INK} fontFamily={SANS}>
          SCHOOL
        </text>
        {wheel(-46)}
        {wheel(48)}
      </At>
    </g>
  );
}

/** ABC blocks, balloons and a crayon. */
export function KidsBlocks({ p }) {
  const block = (x, y, c, letter, rot = 0) => (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <rect x={-27} y={-27} width={54} height={54} rx={8} fill={c} />
      <rect x={-20} y={-20} width={40} height={40} rx={5} fill="none" stroke={W} strokeOpacity={0.55} strokeWidth={2.5} />
      <text y={10} textAnchor="middle" fontSize={28} fontWeight={700} fill={W} fontFamily={SANS}>
        {letter}
      </text>
    </g>
  );
  return (
    <g>
      <g className="ill-float-sm">
        {block(146, 206, p.main, 'A')}
        {block(204, 206, p.accent, 'B')}
        {block(176, 150, p.mainDark, 'C', -8)}
      </g>
      <At x={290} y={98} cls="ill-float">
        <path d="M0 30 C-6 46 6 58 0 76" stroke={INK} strokeWidth={1.5} fill="none" />
        <ellipse rx={24} ry={30} fill={p.main} />
        <ellipse cx={-8} cy={-10} rx={5} ry={9} fill={W} opacity={0.5} />
        <path d="M-4 30 H4 L0 36 Z" fill={p.main} />
      </At>
      <At x={324} y={130} cls="ill-float" delay={-1.6}>
        <path d="M0 22 C5 36 -5 46 0 60" stroke={INK} strokeWidth={1.5} fill="none" />
        <ellipse rx={17} ry={22} fill={GOLD} />
        <ellipse cx={-6} cy={-7} rx={4} ry={6} fill={W} opacity={0.5} />
      </At>
      <At x={102} y={110} r={-35} cls="ill-float" delay={-0.8}>
        <rect x={-7} y={0} width={14} height={58} rx={2} fill={p.accent} />
        <rect x={-7} y={14} width={14} height={14} fill={W} opacity={0.6} />
        <path d="M-7 58 L0 74 L7 58 Z" fill="#f5d0a9" />
        <path d="M-2.5 68 L0 74 L2.5 68 Z" fill={p.accent} />
      </At>
    </g>
  );
}

/** Graduation cap above a stack of books, plus a diploma. */
export function CapAndBooks({ p }) {
  return (
    <g>
      <g transform="translate(200 238)">
        <rect x={-72} y={-22} width={144} height={22} rx={4} fill={p.main} />
        <rect x={56} y={-18} width={12} height={14} fill={W} opacity={0.8} />
        <rect x={-62} y={-42} width={124} height={20} rx={4} fill={p.accent} />
        <rect x={46} y={-38} width={12} height={12} fill={W} opacity={0.8} />
        <rect x={-76} y={-62} width={152} height={20} rx={4} fill={p.mainDark} />
        <rect x={60} y={-58} width={12} height={12} fill={W} opacity={0.8} />
      </g>
      <At x={200} y={122} cls="ill-float">
        <path d="M-34 8 v20 c0 13 68 13 68 0 v-20 L0 22 Z" fill="#2c2850" />
        <path d="M0 -24 L66 0 L0 24 L-66 0 Z" fill="#1f1b3d" stroke={p.mainLight} strokeWidth={2} />
        <circle r={4} fill={GOLD} />
        <g className="ill-swing">
          <path d="M0 0 L46 10 V34" stroke={GOLD} strokeWidth={3} fill="none" />
          <circle cx={46} cy={38} r={5} fill={GOLD} />
        </g>
      </At>
      <At x={316} y={186} r={-20} cls="ill-float" delay={-1.4}>
        <rect x={-38} y={-10} width={76} height={20} rx={10} fill={W} />
        <circle cx={-38} cy={0} r={10} fill={SURF} />
        <circle cx={38} cy={0} r={10} fill={SURF} />
        <rect x={-6} y={-10} width={12} height={20} fill={p.accent} />
      </At>
    </g>
  );
}

/** Storefront with a striped awning and a swinging OPEN sign. */
export function Storefront({ p }) {
  return (
    <g className="ill-float-sm">
      <rect x={110} y={96} width={180} height={140} rx={6} fill={W} />
      <rect x={130} y={74} width={140} height={28} rx={6} fill={p.mainDark} />
      <rect x={150} y={84} width={60} height={8} rx={4} fill={W} />
      <rect x={216} y={84} width={34} height={8} rx={4} fill={p.accent} />
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const x = 110 + i * 30;
        return <path key={i} d={`M${x} 108 h30 v22 a15 9 0 0 1 -30 0 Z`} fill={i % 2 ? W : p.main} />;
      })}
      <rect x={124} y={150} width={76} height={64} rx={4} fill={p.mainLight} />
      <rect x={136} y={176} width={22} height={26} rx={3} fill={p.main} />
      <path d="M141 176 a6 6 0 0 1 12 0" stroke={p.main} strokeWidth={2.5} fill="none" />
      <rect x={166} y={170} width={24} height={32} rx={3} fill={p.accent} />
      <path d="M172 170 a6 6 0 0 1 12 0" stroke={p.accent} strokeWidth={2.5} fill="none" />
      <rect x={212} y={150} width={60} height={86} rx={4} fill={p.main} />
      <circle cx={262} cy={196} r={3} fill={W} />
      <At x={242} y={172} cls="ill-swing">
        <path d="M-12 -2 L0 -12 L12 -2" stroke={INK} strokeWidth={1.5} fill="none" />
        <rect x={-19} y={-2} width={38} height={17} rx={3} fill={W} />
        <text y={10} textAnchor="middle" fontSize={8} fontWeight={700} fill={p.main} fontFamily={SANS}>
          OPEN
        </text>
      </At>
      <rect x={100} y={234} width={200} height={7} rx={3.5} fill={MUTE} />
    </g>
  );
}

/** Video interview call with typing chat and a checklist. */
export function VideoCall({ p }) {
  return (
    <g>
      <g className="ill-float-sm">
        <rect x={92} y={66} width={216} height={150} rx={14} fill={INK} />
        <rect x={102} y={78} width={94} height={96} rx={8} fill={p.mainDark} />
        <circle className="ill-ping" cx={149} cy={122} r={30} fill="none" stroke={p.mainLight} strokeWidth={2} />
        <Avatar x={149} y={122} r={24} bg={p.main} fg={p.mainLight} />
        <rect x={110} y={162} width={40} height={6} rx={3} fill={W} opacity={0.7} />
        <rect x={204} y={78} width={94} height={96} rx={8} fill="#36325a" />
        <Avatar x={251} y={122} r={24} bg={p.accent} fg={p.accentLight} />
        <rect x={212} y={162} width={34} height={6} rx={3} fill={W} opacity={0.7} />
        <circle cx={170} cy={196} r={9} fill="#36325a" />
        <circle cx={200} cy={196} r={10} fill={RED} />
        <rect x={194} y={194} width={12} height={4} rx={2} fill={W} />
        <circle cx={230} cy={196} r={9} fill="#36325a" />
      </g>
      <At x={322} y={100} cls="ill-pop" delay={-0.6}>
        <rect x={-30} y={-15} width={60} height={30} rx={15} fill={W} />
        {[-12, 0, 12].map((x, i) => (
          <circle key={x} className="ill-blink" style={d(i * 0.2)} cx={x} cy={0} r={4} fill={p.main} />
        ))}
      </At>
      <At x={92} y={222} cls="ill-float" delay={-1.8}>
        <rect x={-36} y={-28} width={72} height={56} rx={10} fill={W} />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <circle cx={-22} cy={-12 + i * 14} r={4.5} fill={i < 2 ? p.main : LINE} />
            <rect x={-12} y={-15 + i * 14} width={i === 1 ? 26 : 36} height={5} rx={2.5} fill={LINE} />
          </g>
        ))}
      </At>
    </g>
  );
}

/** Flowchart with decision diamond and a lightning bolt. */
export function Flowchart({ p }) {
  const links = ['M200 88 V108', 'M200 152 V170 H128 V188', 'M200 152 V170 H272 V188', 'M128 216 V232 H188', 'M272 216 V232 H212'];
  return (
    <g>
      <g className="ill-float-sm">
        {links.map((dd) => (
          <path key={dd} className="ill-march" d={dd} fill="none" stroke={p.main} strokeWidth={2.5} strokeDasharray="4 8" />
        ))}
        <rect x={164} y={62} width={72} height={26} rx={13} fill={p.main} />
        <text x={200} y={79} textAnchor="middle" fontSize={10} fontWeight={600} fill={W} fontFamily={SANS}>
          Start
        </text>
        <At x={200} y={130} cls="ill-pop">
          <path d="M0 -22 L36 0 L0 22 L-36 0 Z" fill={p.accent} />
          <text y={5} textAnchor="middle" fontSize={14} fontWeight={700} fill={W} fontFamily={SANS}>
            ?
          </text>
        </At>
        {[
          [92, p.main],
          [236, p.mainDark],
        ].map(([x, c]) => (
          <g key={x}>
            <rect x={x} y={188} width={72} height={28} rx={6} fill={W} stroke={c} strokeWidth={2} />
            <rect x={x + 10} y={197} width={38} height={4} rx={2} fill={c} />
            <rect x={x + 10} y={205} width={24} height={4} rx={2} fill={LINE} />
          </g>
        ))}
        <circle cx={200} cy={232} r={12} fill={p.mainDark} />
        <path d="M194 232 l4 4 l8 -8" stroke={W} strokeWidth={2.5} fill="none" strokeLinecap="round" />
      </g>
      <At x={312} y={82} cls="ill-float" delay={-1}>
        <circle r={24} fill={GOLD} />
        <path d="M3 -14 L-8 2 H0 L-3 14 L8 -2 H0 Z" fill={W} />
      </At>
    </g>
  );
}

/** Fanned PDF documents merging into one. */
export function PdfStack({ p }) {
  const doc = (i) => (
    <g key={i} transform={`translate(${200 + i * 46} 146) rotate(${i * 11})`}>
      <g className="ill-float" style={d(i * 0.7)}>
        <path d="M-38 -52 H22 L38 -36 V52 H-38 Z" fill={W} />
        <path d="M22 -52 V-36 H38 Z" fill={LINE} />
        <rect x={-28} y={-40} width={36} height={17} rx={4} fill={i === 0 ? p.main : p.mainLight} />
        <text x={-10} y={-28} textAnchor="middle" fontSize={9} fontWeight={700} fill={i === 0 ? W : p.mainDark} fontFamily={SANS}>
          PDF
        </text>
        {[0, 1, 2, 3].map((k) => (
          <rect key={k} x={-28} y={-12 + k * 12} width={k % 2 ? 40 : 56} height={5} rx={2.5} fill={LINE} />
        ))}
      </g>
    </g>
  );
  return (
    <g>
      {[-1, 1, 0].map(doc)}
      <path className="ill-draw" d="M150 236 C180 254 220 254 250 236" stroke={p.accent} strokeWidth={4} fill="none" strokeLinecap="round" pathLength={1} />
      <path d="M252 232 l-2 12 l-10 -6 Z" fill={p.accent} />
    </g>
  );
}

/** Camera with a turning lens ring, flash and floating prints. */
export function Camera({ p }) {
  const print = (x, y, r, delay) => (
    <At x={x} y={y} r={r} cls="ill-float" delay={delay}>
      <rect x={-26} y={-30} width={52} height={60} rx={4} fill={W} />
      <rect x={-20} y={-24} width={40} height={36} fill={p.accentLight} />
      <path d="M-20 12 L-6 -4 L4 6 L10 0 L20 12 Z" fill={p.accent} />
    </At>
  );
  return (
    <g>
      {print(90, 106, -12, -1)}
      {print(318, 208, 10, -2.2)}
      <g className="ill-float-sm">
        <rect x={150} y={86} width={62} height={26} rx={6} fill={p.mainDark} />
        <rect x={110} y={102} width={180} height={120} rx={18} fill={p.main} />
        <rect x={110} y={102} width={36} height={120} rx={18} fill={p.mainDark} />
        <rect className="ill-flash" x={238} y={112} width={34} height={14} rx={4} fill={W} />
        <circle cx={264} cy={204} r={6} fill={p.accent} />
        <g transform="translate(206 164)">
          <circle r={48} fill={p.mainDark} />
          <g className="ill-spin" style={{ animationDuration: '16s' }}>
            <circle r={40} fill="none" stroke={p.mainLight} strokeWidth={4} strokeDasharray="10 6" />
          </g>
          <circle r={31} fill={INK} />
          <circle r={19} fill={p.accent} opacity={0.9} />
          <circle cx={-8} cy={-8} r={6} fill={W} opacity={0.6} />
        </g>
      </g>
    </g>
  );
}

/** Megaphone with sound waves, rising likes and growth bars. */
export function Megaphone({ p }) {
  return (
    <g>
      <At x={170} y={150} cls="ill-float-sm">
        <path d="M-50 -14 L30 -48 V48 L-50 14 Z" fill={p.main} />
        <ellipse cx={30} rx={12} ry={48} fill={p.mainDark} />
        <rect x={-66} y={-18} width={20} height={36} rx={6} fill={p.mainDark} />
        <path d="M-32 12 L-24 44 H-10 L-16 14 Z" fill={p.mainDark} />
        {['M60 -20 a24 24 0 0 1 0 40', 'M72 -32 a36 36 0 0 1 0 64', 'M84 -44 a48 48 0 0 1 0 88'].map((dd, i) => (
          <path key={dd} className="ill-blink" style={d(i * 0.3)} d={dd} stroke={p.accent} strokeWidth={4} fill="none" strokeLinecap="round" />
        ))}
      </At>
      {[
        [300, 0],
        [330, 0.9],
        [278, 1.8],
      ].map(([x, delay]) => (
        <At key={x} x={x} y={120} cls="ill-rise" delay={delay}>
          <circle r={13} fill={W} />
          <path d={HEART} fill={RED} transform="scale(0.7)" />
        </At>
      ))}
      <g transform="translate(78 242)">
        {[22, 36, 52].map((h, i) => (
          <rect key={i} className="ill-bar" style={d(-i * 0.4)} x={i * 16} y={-h} width={11} height={h} rx={3} fill={i === 2 ? p.accent : p.mainLight} />
        ))}
      </g>
    </g>
  );
}

/** Cottage with lit windows, chimney smoke, a tree and a STAY sign. */
export function Cottage({ p }) {
  return (
    <g>
      <g transform="translate(98 230)">
        <rect x={-5} y={-62} width={10} height={62} fill="#8b5a2b" />
        <g className="ill-sway">
          <circle cy={-82} r={28} fill={LEAF} />
          <circle cx={-18} cy={-62} r={20} fill={LEAF_L} />
          <circle cx={18} cy={-62} r={20} fill={LEAF_L} />
        </g>
      </g>
      {[0, 0.8, 1.6].map((delay) => (
        <At key={delay} x={270} y={86} cls="ill-rise" delay={delay}>
          <circle r={6} fill={p.mainLight} opacity={0.8} />
        </At>
      ))}
      <g className="ill-float-sm">
        <rect x={262} y={96} width={16} height={34} fill={p.mainDark} />
        <path d="M128 152 L214 94 L300 152 Z" fill={p.mainDark} />
        <rect x={142} y={150} width={144} height={86} fill={W} />
        <rect x={200} y={184} width={28} height={52} rx={4} fill={p.main} />
        <circle cx={222} cy={212} r={2.5} fill={W} />
        {[156, 244].map((x) => (
          <g key={x}>
            <rect className="ill-glow" x={x} y={166} width={30} height={26} rx={3} fill={GOLD} />
            <path d={`M${x + 15} 166 V192 M${x} 179 H${x + 30}`} stroke={W} strokeWidth={2} />
          </g>
        ))}
      </g>
      <g transform="translate(332 236)">
        <rect x={-2} y={-34} width={4} height={34} fill="#8b5a2b" />
        <At x={0} y={-36} cls="ill-swing">
          <rect x={-24} y={-2} width={48} height={22} rx={4} fill={p.accent} />
          <text y={13} textAnchor="middle" fontSize={9} fontWeight={700} fill={W} fontFamily={SANS}>
            STAY
          </text>
        </At>
      </g>
    </g>
  );
}

/** Clothes rack with swaying garments, a price tag and a shopping bag. */
export function ClothesRack({ p }) {
  const kurta = 'M-18 18 L-26 30 L-20 34 L-16 28 V100 H16 V28 L20 34 L26 30 L18 18 Z';
  const dress = 'M-12 18 H12 L16 40 L32 104 H-32 L-16 40 Z';
  const garment = (x, path, c, delay) => (
    <At key={x} x={x} y={80} cls="ill-swing" delay={delay}>
      <path d="M0 0 V8 M-18 18 L0 8 L18 18" stroke={INK} strokeWidth={2} fill="none" />
      <path d={path} fill={c} />
      <path d="M-6 18 L0 28 L6 18" stroke={W} strokeWidth={2} fill="none" opacity={0.7} />
      {[0, 1, 2].map((k) => (
        <circle key={k} cx={0} cy={44 + k * 16} r={2.5} fill={W} opacity={0.55} />
      ))}
    </At>
  );
  return (
    <g>
      <g stroke="#6b6f8e" strokeWidth={5} strokeLinecap="round">
        <line x1={104} y1={80} x2={90} y2={236} />
        <line x1={296} y1={80} x2={310} y2={236} />
        <line x1={78} y1={236} x2={104} y2={236} />
        <line x1={296} y1={236} x2={322} y2={236} />
      </g>
      <rect x={94} y={74} width={212} height={7} rx={3.5} fill="#6b6f8e" />
      {garment(140, kurta, p.main, 0)}
      {garment(200, dress, p.accent, -0.7)}
      {garment(260, kurta, p.mainDark, -1.4)}
      <At x={316} y={214} cls="ill-float" delay={-1}>
        <path d="M-10 -20 V-26 a10 10 0 0 1 20 0 V-20" stroke={INK} strokeWidth={3} fill="none" />
        <rect x={-22} y={-20} width={44} height={44} rx={6} fill={GOLD} />
        <circle r={7} fill={W} opacity={0.7} />
      </At>
    </g>
  );
}

/** Glowing lightbulb idea and a laptop playing a lesson. */
export function BulbLesson({ p }) {
  return (
    <g>
      <g transform="translate(148 106)">
        <g className="ill-glow">
          {Array.from({ length: 8 }, (_, i) => (
            <rect key={i} x={-2.5} y={-64} width={5} height={14} rx={2.5} fill={GOLD} transform={`rotate(${i * 45})`} />
          ))}
        </g>
        <g className="ill-float-sm">
          <circle r={40} fill={GOLD} />
          <circle r={30} fill="#fde68a" />
          <path d="M-10 6 L-4 -4 L0 6 L4 -4 L10 6" stroke={GOLD_D} strokeWidth={3} fill="none" strokeLinejoin="round" />
          <rect x={-16} y={38} width={32} height={8} rx={3} fill={MUTE} />
          <rect x={-14} y={46} width={28} height={8} rx={3} fill={INK} />
          <rect x={-10} y={54} width={20} height={6} rx={3} fill={MUTE} />
        </g>
      </g>
      <At x={264} y={182} cls="ill-float-sm" delay={-1.5}>
        <rect x={-64} y={-52} width={128} height={84} rx={8} fill={INK} />
        <rect x={-58} y={-46} width={116} height={70} rx={4} fill={p.accent} />
        <circle cy={-14} r={16} fill={W} />
        <path d="M-5 -22 L8 -14 L-5 -6 Z" fill={p.accent} />
        <rect x={-50} y={12} width={100} height={4} rx={2} fill={W} opacity={0.35} />
        <rect className="ill-grow" x={-50} y={12} width={64} height={4} rx={2} fill={W} />
        <path d="M-76 32 H76 L68 42 H-68 Z" fill={MUTE} />
      </At>
    </g>
  );
}
