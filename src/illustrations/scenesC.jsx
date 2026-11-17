// One-of-a-kind scenes, part 3 (projects added Nov 2026). Each takes the project's palette `p`.
import { At, Avatar, GOLD, GOLD_D, HEART, INK, LEAF_PATH, LINE, MUTE, PIN, RED, SURF, W, d } from './kit';

const SANS = 'Poppins, sans-serif';

/** A phone running the control centre — room tiles, a switch flicking on and live energy bars —
 *  with a lamp that glows, a thermostat dial, a recording camera and Wi-Fi rings: SmartNest. */
export function SmartHome({ p }) {
  const tiles = [
    [164, 108],
    [204, 108],
    [164, 150],
    [204, 150],
  ];
  return (
    <g>
      {/* Wi-Fi rings */}
      <At x={200} y={54}>
        <circle className="ill-ping" r={10} fill="none" stroke={p.main} strokeWidth={3} />
        <circle className="ill-ping" style={d(0.9)} r={10} fill="none" stroke={p.main} strokeWidth={3} />
        <circle r={5} fill={p.main} />
      </At>

      {/* Phone */}
      <g className="ill-float-sm">
        <rect x={148} y={72} width={104} height={180} rx={16} fill={INK} />
        <rect x={156} y={84} width={88} height={156} rx={10} fill={W} />
        <rect x={164} y={93} width={36} height={6} rx={3} fill={p.main} />
        {tiles.map(([x, y], i) => (
          <g key={i}>
            <rect x={x} y={y} width={32} height={34} rx={6} fill={i === 0 ? p.mainLight : SURF} />
            <circle cx={x + 9} cy={y + 10} r={5} fill={i === 0 ? p.accent : MUTE} />
            <rect x={x + 5} y={y + 22} width={20} height={4} rx={2} fill={i === 0 ? p.main : LINE} />
          </g>
        ))}
        {/* Switch flicking on */}
        <rect x={208} y={115} width={24} height={11} rx={5.5} fill={p.mainLight} />
        <circle className="ill-drift" cx={214} cy={120.5} r={4} fill={p.main} />
        {/* Energy bars */}
        {[14, 22, 12, 26, 18, 10].map((h, i) => (
          <rect key={i} className="ill-bar" style={d(i * 0.25)} x={166 + i * 12} y={230 - h} width={8} height={h} rx={2} fill={i === 3 ? p.accent : p.main} />
        ))}
      </g>

      {/* Lamp that glows */}
      <At x={82} y={150} cls="ill-float" delay={-1}>
        <circle className="ill-pulse" cy={-4} r={30} fill={p.accentLight} opacity={0.7} />
        <path d="M-22 -20 L22 -20 L14 -46 L-14 -46 Z" fill={p.main} strokeLinejoin="round" />
        <circle cy={-12} r={9} fill={p.accent} />
        <rect x={-3} y={-20} width={6} height={64} fill={p.mainDark} />
        <rect x={-20} y={42} width={40} height={8} rx={4} fill={p.mainDark} />
      </At>

      {/* Thermostat dial */}
      <At x={318} y={104} cls="ill-float" delay={-2}>
        <circle r={36} fill={W} />
        <circle r={26} fill="none" stroke={LINE} strokeWidth={6} />
        <path className="ill-draw" d="M-18.4 18.4 A26 26 0 1 1 18.4 18.4" fill="none" stroke={p.main} strokeWidth={6} strokeLinecap="round" pathLength={1} />
        <text y={6} textAnchor="middle" fontSize={16} fontWeight={700} fill={INK} fontFamily={SANS}>
          21°
        </text>
      </At>

      {/* Camera with a recording light */}
      <At x={322} y={212} cls="ill-float" delay={-3}>
        <rect x={-34} y={-22} width={56} height={40} rx={9} fill={W} />
        <path d="M22 -10 L38 -20 L38 10 L22 0 Z" fill={p.mainDark} />
        <circle cx={-6} cy={-2} r={12} fill={p.mainDark} />
        <circle cx={-6} cy={-2} r={5} fill={p.mainLight} />
        <circle className="ill-blink" cx={-24} cy={-13} r={4} fill={RED} />
      </At>
    </g>
  );
}

/** A tow truck with a flashing beacon hauling a car down a moving road, a live-location pin
 *  and an SOS bubble — TowPilot's roadside rescue. */
export function TowTruck({ p }) {
  const wheel = (cx, cy, r = 13) => (
    <g key={cx}>
      <circle cx={cx} cy={cy} r={r} fill={INK} />
      <g className="ill-wheel">
        <circle cx={cx} cy={cy} r={r * 0.42} fill={W} />
        <rect x={cx - 1.5} y={cy - r * 0.42} width={3} height={r * 0.84} fill={MUTE} />
      </g>
    </g>
  );
  return (
    <g>
      {/* Road with moving lane dashes */}
      <rect x={0} y={244} width={400} height={56} fill={INK} opacity={0.85} />
      <g className="ill-road">
        {Array.from({ length: 9 }, (_, i) => (
          <rect key={i} x={i * 60} y={268} width={30} height={5} rx={2.5} fill={W} opacity={0.8} />
        ))}
      </g>

      <g className="ill-bob">
        {/* Towed car, front lifted */}
        <At x={112} y={226} r={-8}>
          <path d="M-46 0 L-42 -18 L-24 -20 L-12 -36 L22 -36 L36 -20 L48 -16 L50 0 Z" fill={p.accentLight} strokeLinejoin="round" />
          <path d="M-8 -32 L18 -32 L28 -21 L-16 -21 Z" fill={W} opacity={0.85} />
          <circle cx={46} cy={-10} r={3} fill={GOLD} />
        </At>
        {wheel(84, 236, 11)}
        {wheel(146, 228, 11)}

        {/* Boom and hook line */}
        <path d="M206 202 L172 176" stroke={INK} strokeWidth={7} strokeLinecap="round" />
        <path d="M172 176 L160 212" stroke={INK} strokeWidth={2.5} />

        {/* Truck */}
        <rect x={194} y={200} width={98} height={26} rx={5} fill={p.mainDark} />
        <path d="M284 226 V176 a8 8 0 0 1 8 -8 H322 L344 196 V226 Z" fill={p.main} strokeLinejoin="round" />
        <path d="M300 176 H318 L334 196 H300 Z" fill={W} opacity={0.9} />
        <rect x={338} y={210} width={8} height={6} rx={2} fill={GOLD} />
        <rect className="ill-flash" x={300} y={158} width={20} height={10} rx={4} fill={GOLD} />
        {wheel(222, 234)}
        {wheel(318, 234)}
      </g>

      {/* Live-location pin over the stranded car */}
      <At x={112} y={164} cls="ill-bounce">
        <path d={PIN} fill={p.main} />
        <circle cy={-27} r={6} fill={W} />
      </At>
      <At x={112} y={170}>
        <ellipse className="ill-ping" rx={14} ry={5} fill="none" stroke={p.main} strokeWidth={2.5} />
      </At>

      {/* SOS bubble */}
      <At x={316} y={86} cls="ill-float" delay={-1.5}>
        <path d="M-34 -20 H34 a10 10 0 0 1 10 10 V12 a10 10 0 0 1 -10 10 H-8 L-18 32 L-20 22 H-34 a10 10 0 0 1 -10 -10 V-10 a10 10 0 0 1 10 -10 Z" fill={RED} />
        <text y={8} textAnchor="middle" fontSize={20} fontWeight={800} fill={W} fontFamily={SANS}>
          SOS
        </text>
      </At>
    </g>
  );
}

/** A shared whiteboard with sticky notes joined by a moving connector, two named cursors
 *  drifting across it, a live document typing itself and the team's avatars — CollabSpace. */
export function LiveCanvas({ p }) {
  const notes = [
    { x: 112, y: 86, r: -4, c: p.mainLight },
    { x: 196, y: 78, r: 3, c: p.accentLight },
    { x: 124, y: 164, r: 2, c: '#fde68a' },
  ];
  const cursor = (fill, label, width) => (
    <>
      <path d="M0 0 L0 22 L6 16 L11 27 L16 25 L11 14 L19 14 Z" fill={fill} stroke={W} strokeWidth={2} strokeLinejoin="round" />
      <rect x={14} y={24} width={width} height={16} rx={8} fill={fill} />
      <text x={14 + width / 2} y={35.5} textAnchor="middle" fontSize={9} fontWeight={600} fill={W} fontFamily={SANS}>
        {label}
      </text>
    </>
  );
  return (
    <g>
      {/* Board */}
      <g className="ill-float-sm">
        <rect x={84} y={58} width={210} height={180} rx={12} fill={W} />
        {Array.from({ length: 30 }, (_, i) => (
          <circle key={i} cx={102 + (i % 6) * 34} cy={74 + Math.floor(i / 6) * 34} r={1.6} fill={LINE} />
        ))}
        <path className="ill-march" d="M166 112 C186 112 186 104 200 104 M152 140 V164" fill="none" stroke={p.main} strokeWidth={2.5} strokeDasharray="6 6" />
        {notes.map((n, i) => (
          <At key={i} x={n.x} y={n.y} r={n.r}>
            <rect width={54} height={50} rx={5} fill={n.c} />
            <rect x={8} y={12} width={34} height={4} rx={2} fill={INK} opacity={0.35} />
            <rect x={8} y={22} width={26} height={4} rx={2} fill={INK} opacity={0.25} />
          </At>
        ))}
        <rect x={196} y={160} width={70} height={52} rx={8} fill="none" stroke={p.mainLight} strokeWidth={3} />
        <circle cx={231} cy={186} r={12} fill={p.mainLight} />
      </g>

      {/* Team avatars on the board's edge */}
      <Avatar x={236} y={58} r={13} bg={p.accent} fg={W} />
      <Avatar x={258} y={58} r={13} bg={p.main} fg={W} />
      <Avatar x={280} y={58} r={13} bg={GOLD_D} fg={W} />

      {/* Cursors */}
      <At x={176} y={128} cls="ill-drag">
        {cursor(p.main, 'Asha', 34)}
      </At>
      <At x={226} y={170} cls="ill-drag" delay={-1.7}>
        {cursor(p.accent, 'Ravi', 32)}
      </At>

      {/* Live document typing itself */}
      <At x={326} y={176} cls="ill-float" delay={-2}>
        <rect x={-44} y={-52} width={88} height={104} rx={10} fill={W} />
        <rect x={-32} y={-40} width={40} height={7} rx={3.5} fill={p.main} />
        {[52, 44, 56, 36].map((w, i) => (
          <rect key={i} className="ill-type" style={d(i * 0.5)} x={-32} y={-22 + i * 14} width={w} height={5} rx={2.5} fill={LINE} />
        ))}
        <rect className="ill-blink" x={6} y={24} width={2.5} height={12} fill={p.main} />
      </At>
    </g>
  );
}

/** Three AI agents with blinking antennas feeding work into an approval card that ticks
 *  itself off, beside a budget meter and a task list — CrewDesk's AI team under human control. */
export function AgentTeam({ p }) {
  const agents = [110, 200, 290];
  return (
    <g>
      {/* Hand-off lines into the approval card */}
      <path className="ill-march" d="M110 122 C110 150 160 146 172 166 M200 124 V160 M290 122 C290 150 240 146 228 166" fill="none" stroke={p.main} strokeWidth={2.5} strokeDasharray="6 6" />

      {agents.map((x, i) => (
        <At key={x} x={x} y={92} cls="ill-float" delay={-i * 1.2}>
          <line x1={0} y1={-30} x2={0} y2={-20} stroke={p.mainDark} strokeWidth={3} />
          <circle className="ill-blink" style={d(i * 0.5)} cy={-33} r={5} fill={i === 1 ? p.accent : GOLD} />
          <rect x={-26} y={-20} width={52} height={42} rx={12} fill={i === 1 ? p.main : p.mainLight} />
          <rect x={-18} y={-12} width={36} height={18} rx={9} fill={W} />
          <circle cx={-8} cy={-3} r={3.5} fill={INK} />
          <circle cx={8} cy={-3} r={3.5} fill={INK} />
          <rect x={-8} y={12} width={16} height={3} rx={1.5} fill={i === 1 ? W : p.mainDark} />
          <rect x={-30} y={-6} width={4} height={12} rx={2} fill={p.mainDark} />
          <rect x={26} y={-6} width={4} height={12} rx={2} fill={p.mainDark} />
        </At>
      ))}

      {/* Approval card */}
      <At x={200} y={202} cls="ill-float-sm">
        <rect x={-62} y={-38} width={124} height={76} rx={12} fill={W} />
        <path d="M-40 -22 L-26 -27 L-12 -22 V-10 C-12 0 -19 6 -26 9 C-33 6 -40 0 -40 -10 Z" fill={p.mainLight} />
        <path className="ill-draw" d="M-32 -12 l5 5 l9 -10" fill="none" stroke={p.main} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" pathLength={1} />
        <rect x={-2} y={-22} width={48} height={6} rx={3} fill={INK} opacity={0.75} />
        <rect x={-2} y={-10} width={36} height={5} rx={2.5} fill={LINE} />
        <rect className="ill-pulse" x={-46} y={14} width={50} height={14} rx={7} fill={p.main} />
        <rect x={-36} y={19} width={30} height={4} rx={2} fill={W} />
        <rect x={10} y={14} width={36} height={14} rx={7} fill={SURF} />
      </At>

      {/* Budget meter */}
      <At x={70} y={218} cls="ill-float" delay={-2.2}>
        <rect x={-34} y={-24} width={68} height={48} rx={10} fill={W} />
        <circle cx={-18} cy={-8} r={7} fill={GOLD} />
        <rect x={-6} y={-11} width={28} height={5} rx={2.5} fill={MUTE} />
        <rect x={-22} y={8} width={44} height={7} rx={3.5} fill={SURF} />
        <rect className="ill-grow" x={-22} y={8} width={30} height={7} rx={3.5} fill={p.accent} />
      </At>

      {/* Task list */}
      <At x={332} y={218} cls="ill-float" delay={-0.8}>
        <rect x={-34} y={-30} width={68} height={60} rx={10} fill={W} />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={-22} y={-18 + i * 15} width={9} height={9} rx={2.5} fill={i < 2 ? p.main : SURF} />
            <rect x={-8} y={-16 + i * 15} width={i === 1 ? 22 : 30} height={5} rx={2.5} fill={LINE} />
          </g>
        ))}
      </At>
    </g>
  );
}

/** An exploded building of floating floors, desks on the top floor with one picked out by a
 *  bouncing pin, a booking card that ticks itself and a QR check-in code — SpaceFlow. */
export function OfficeFloors({ p }) {
  const slab = (cy, top, side) => (
    <>
      <path d={`M120 ${cy} L200 ${cy + 30} L280 ${cy} L280 ${cy + 9} L200 ${cy + 39} L120 ${cy + 9} Z`} fill={side} />
      <path d={`M200 ${cy - 30} L280 ${cy} L200 ${cy + 30} L120 ${cy} Z`} fill={top} />
    </>
  );
  // Desks on the top floor, laid out on the isometric grid.
  const desks = [-1, 0, 1].flatMap((u) => [-0.6, 0.6].map((v) => [u, v]));
  const iso = (u, v) => [200 + (u - v) * 30, 108 + (u + v) * 15];
  const qr = [1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1];
  return (
    <g>
      <At x={0} y={0} cls="ill-float-sm" delay={-2}>
        {slab(216, p.mainLight, p.mainDark)}
      </At>
      <At x={0} y={0} cls="ill-float-sm" delay={-1}>
        {slab(166, p.mainLight, p.mainDark)}
      </At>
      <At x={0} y={0} cls="ill-float-sm">
        {slab(114, W, p.main)}
        {desks.map(([u, v], i) => {
          const [x, y] = iso(u, v);
          const picked = u === 1 && v === -0.6;
          return <path key={i} d={`M${x} ${y - 6} L${x + 12} ${y} L${x} ${y + 6} L${x - 12} ${y} Z`} fill={picked ? p.accent : p.mainLight} />;
        })}
      </At>

      {/* Pin over the picked desk */}
      <At x={iso(1, -0.6)[0]} y={iso(1, -0.6)[1] - 6} s={0.75} cls="ill-bounce">
        <path d={PIN} fill={p.accent} />
        <circle cy={-27} r={6} fill={W} />
      </At>

      {/* Booking card */}
      <At x={330} y={84} cls="ill-float" delay={-1.4}>
        <rect x={-40} y={-30} width={80} height={60} rx={10} fill={W} />
        <rect x={-40} y={-30} width={80} height={16} rx={10} fill={p.main} />
        <rect x={-40} y={-20} width={80} height={6} fill={p.main} />
        <circle cx={-22} cy={8} r={10} fill={p.mainLight} />
        <path className="ill-draw" d="M-27 8 l3.5 3.5 l7 -7" fill="none" stroke={p.mainDark} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" pathLength={1} />
        <rect x={-6} y={2} width={34} height={5} rx={2.5} fill={INK} opacity={0.7} />
        <rect x={-6} y={12} width={24} height={4} rx={2} fill={LINE} />
      </At>

      {/* QR check-in */}
      <At x={70} y={214} cls="ill-float" delay={-2.6}>
        <rect x={-30} y={-30} width={60} height={60} rx={10} fill={W} />
        {qr.map((on, i) =>
          on ? <rect key={i} x={-20 + (i % 4) * 10} y={-20 + Math.floor(i / 4) * 10} width={9} height={9} rx={1.5} fill={INK} /> : null,
        )}
        <rect className="ill-pulse" x={-24} y={-1} width={48} height={2.5} rx={1.25} fill={p.accent} />
      </At>
    </g>
  );
}

/** A leave calendar with the days off picked out, the person going on leave (suitcase packed)
 *  handing work across a moving arc to their backup, and the request ticked as approved — LeaveFlow. */
export function LeaveHandover({ p }) {
  const leave = [6, 7, 8];
  return (
    <g>
      {/* Handover arc from the person on leave to their backup */}
      <path className="ill-march" d="M92 96 C150 34 250 34 308 92" fill="none" stroke={p.main} strokeWidth={3} strokeDasharray="7 7" strokeLinecap="round" />
      <path d="M298 80 L310 94 L292 98" fill="none" stroke={p.main} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
      <At x={200} y={50} cls="ill-float" delay={-1}>
        <rect x={-22} y={-14} width={44} height={28} rx={6} fill={W} />
        <rect x={-14} y={-7} width={20} height={4} rx={2} fill={p.main} />
        <rect x={-14} y={1} width={28} height={4} rx={2} fill={LINE} />
      </At>

      {/* Leave calendar */}
      <g className="ill-float-sm">
        <rect x={132} y={88} width={136} height={142} rx={12} fill={W} />
        <rect x={132} y={88} width={136} height={28} rx={12} fill={p.main} />
        <rect x={132} y={104} width={136} height={12} fill={p.main} />
        <rect x={154} y={80} width={6} height={16} rx={3} fill={p.mainDark} />
        <rect x={240} y={80} width={6} height={16} rx={3} fill={p.mainDark} />
        <rect x={146} y={98} width={40} height={6} rx={3} fill={W} opacity={0.85} />
        {Array.from({ length: 20 }, (_, i) => {
          const on = leave.includes(i);
          return (
            <rect
              key={i}
              className={on ? 'ill-pulse' : undefined}
              style={on ? d((i - 6) * 0.3) : undefined}
              x={144 + (i % 5) * 23}
              y={126 + Math.floor(i / 5) * 24}
              width={19}
              height={18}
              rx={4}
              fill={on ? (i === 7 ? p.accent : p.mainLight) : SURF}
            />
          );
        })}
      </g>

      {/* Person going on leave, suitcase packed */}
      <Avatar x={72} y={116} r={20} bg={p.accent} fg={W} />
      <At x={72} y={196} cls="ill-bob">
        <rect x={-10} y={-30} width={20} height={12} rx={5} fill="none" stroke={p.mainDark} strokeWidth={4} />
        <rect x={-24} y={-20} width={48} height={38} rx={8} fill={p.mainDark} />
        <rect x={-8} y={-20} width={4} height={38} fill={p.main} />
        <rect x={4} y={-20} width={4} height={38} fill={p.main} />
      </At>

      {/* Backup colleague */}
      <Avatar x={328} y={112} r={20} bg={p.main} fg={W} />

      {/* Approved */}
      <At x={326} y={196} cls="ill-pop">
        <circle r={28} fill={W} />
        <circle r={20} fill={p.mainLight} />
        <path className="ill-draw" d="M-9 0 l6 6 l12 -13" fill="none" stroke={p.mainDark} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" pathLength={1} />
      </At>
    </g>
  );
}

/** A TV covered by a warranty shield that ticks itself, the purchase invoice, a warranty countdown
 *  ring and a claim moving through its status steps — ClaimPilot's products, warranties and claims. */
export function WarrantyShield({ p }) {
  const steps = [0, 1, 2];
  return (
    <g>
      {/* Product: a TV with its coverage bar on screen */}
      <g className="ill-float-sm">
        <rect x={128} y={74} width={146} height={100} rx={10} fill={INK} />
        <rect x={136} y={82} width={130} height={84} rx={6} fill={W} />
        <rect x={148} y={96} width={52} height={7} rx={3.5} fill={p.main} />
        <rect x={148} y={110} width={80} height={5} rx={2.5} fill={LINE} />
        <rect x={148} y={136} width={104} height={8} rx={4} fill={SURF} />
        <rect className="ill-grow" x={148} y={136} width={70} height={8} rx={4} fill={p.main} />
        <rect x={148} y={150} width={36} height={5} rx={2.5} fill={MUTE} />
        <rect x={192} y={174} width={18} height={18} fill={INK} />
        <rect x={168} y={190} width={66} height={8} rx={4} fill={INK} />
      </g>

      {/* Covered: shield with a tick */}
      <At x={262} y={186} cls="ill-pop">
        <path d="M0 -30 L26 -20 V2 C26 20 13 30 0 36 C-13 30 -26 20 -26 2 V-20 Z" fill={p.main} />
        <path d="M0 -22 L18 -15 V2 C18 15 9 23 0 27 C-9 23 -18 15 -18 2 V-15 Z" fill={p.mainDark} />
        <path className="ill-draw" d="M-9 2 l6 6 l12 -14" fill="none" stroke={W} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" pathLength={1} />
      </At>

      {/* Purchase invoice */}
      <At x={78} y={150} cls="ill-float" delay={-1.2}>
        <path d="M-32 -48 H32 V40 l-8 6 l-8 -6 l-8 6 l-8 -6 l-8 6 l-8 -6 l-8 6 l-8 -6 Z" fill={W} />
        <rect x={-22} y={-36} width={28} height={6} rx={3} fill={p.main} />
        {[0, 1, 2].map((i) => (
          <rect key={i} x={-22} y={-20 + i * 12} width={i === 1 ? 30 : 42} height={5} rx={2.5} fill={LINE} />
        ))}
        <text x={-22} y={30} fontSize={11} fontWeight={700} fill={INK} fontFamily={SANS}>
          ₹42,990
        </text>
      </At>

      {/* Warranty countdown */}
      <At x={332} y={124} cls="ill-float" delay={-2.2}>
        <circle r={34} fill={W} />
        <circle r={25} fill="none" stroke={SURF} strokeWidth={7} />
        <circle className="ill-draw" r={25} fill="none" stroke={p.accent} strokeWidth={7} strokeLinecap="round" pathLength={1} transform="rotate(-90)" />
        <text y={3} textAnchor="middle" fontSize={15} fontWeight={800} fill={INK} fontFamily={SANS}>
          86
        </text>
        <text y={15} textAnchor="middle" fontSize={8} fontWeight={600} fill={MUTE} fontFamily={SANS}>
          days
        </text>
      </At>

      {/* Claim moving through its statuses */}
      <At x={70} y={238} cls="ill-float" delay={-0.6}>
        <rect x={-40} y={-18} width={96} height={36} rx={10} fill={W} />
        <path d="M-24 0 H40" stroke={LINE} strokeWidth={3} />
        {steps.map((i) => (
          <circle key={i} className={i === 2 ? 'ill-pulse' : undefined} cx={-24 + i * 32} cy={0} r={7} fill={i < 2 ? p.main : p.accent} />
        ))}
      </At>
    </g>
  );
}

/** A stack of course slides locked behind a padlock, a practice-quiz card ticking its answer, a progress
 *  ring and an envelope bringing a download — Study Hub's private course library. */
export function CourseDeck({ p }) {
  const options = [0, 1, 2];
  return (
    <g>
      {/* Slide deck */}
      <g className="ill-float-sm">
        <rect x={150} y={70} width={134} height={92} rx={8} fill={p.mainLight} transform="rotate(6 217 116)" />
        <rect x={142} y={76} width={134} height={92} rx={8} fill={p.shape} transform="rotate(-4 209 122)" />
        <rect x={134} y={84} width={138} height={96} rx={8} fill={W} />
        <rect x={134} y={84} width={138} height={20} rx={8} fill={p.main} />
        <rect x={134} y={96} width={138} height={8} fill={p.main} />
        <rect x={146} y={90} width={52} height={7} rx={3.5} fill={W} opacity={0.9} />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <circle cx={150} cy={118 + i * 14} r={3} fill={p.accent} />
            <rect x={158} y={115 + i * 14} width={i === 1 ? 44 : 58} height={6} rx={3} fill={LINE} />
          </g>
        ))}
        {[16, 26, 20, 32].map((h, i) => (
          <rect key={i} className="ill-bar" style={d(i * 0.25)} x={226 + i * 10} y={168 - h} width={7} height={h} rx={2} fill={i === 3 ? p.accent : p.main} />
        ))}
      </g>

      {/* Padlock: the decks only open after signing in */}
      <At x={270} y={180} cls="ill-pulse">
        <path d="M-9 -4 V-10 a9 9 0 0 1 18 0 V-4" fill="none" stroke={p.mainDark} strokeWidth={4} />
        <rect x={-14} y={-5} width={28} height={22} rx={5} fill={p.mainDark} />
        <circle cy={4} r={3} fill={W} />
        <rect x={-1.25} y={5} width={2.5} height={6} rx={1} fill={W} />
      </At>

      {/* Practice quiz */}
      <At x={76} y={146} cls="ill-float" delay={-1.4}>
        <rect x={-42} y={-52} width={84} height={104} rx={8} fill={W} />
        <rect x={-30} y={-40} width={60} height={7} rx={3.5} fill={INK} opacity={0.75} />
        <rect x={-30} y={-28} width={40} height={5} rx={2.5} fill={MUTE} />
        {options.map((i) => {
          const y = -6 + i * 18;
          const right = i === 1;
          return (
            <g key={i}>
              <rect x={-32} y={y - 7} width={64} height={14} rx={7} fill={right ? p.mainLight : SURF} />
              <circle cx={-23} cy={y} r={4} fill={right ? p.main : W} stroke={right ? 'none' : LINE} strokeWidth={1.5} />
              <rect x={-14} y={y - 2} width={right ? 34 : 28} height={4} rx={2} fill={right ? p.mainDark : LINE} />
            </g>
          );
        })}
        <path className="ill-draw" d="M14 33 l5 5 l9 -11" fill="none" stroke={p.main} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" pathLength={1} />
      </At>

      {/* Progress ring */}
      <At x={330} y={110} cls="ill-float" delay={-2.4}>
        <circle r={32} fill={W} />
        <circle r={23} fill="none" stroke={SURF} strokeWidth={7} />
        <circle className="ill-draw" r={23} fill="none" stroke={p.main} strokeWidth={7} strokeLinecap="round" pathLength={1} transform="rotate(-90)" />
        <text y={5} textAnchor="middle" fontSize={13} fontWeight={800} fill={INK} fontFamily={SANS}>
          72%
        </text>
      </At>

      {/* Emailed download */}
      <At x={332} y={214} cls="ill-float" delay={-0.5}>
        <rect x={-30} y={-20} width={60} height={40} rx={7} fill={W} />
        <path d="M-30 -14 L0 6 L30 -14" fill="none" stroke={p.main} strokeWidth={3} strokeLinejoin="round" />
        <g className="ill-bob">
          <circle cx={24} cy={-20} r={11} fill={p.accent} />
          <path d="M24 -26 V-14 M19 -19 L24 -14 L29 -19" fill="none" stroke={W} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </At>
    </g>
  );
}

/** A polaroid of a couple at sunset under a beating heart, a turning lens aperture and a film strip
 *  sliding past — Saanjh Studio's pre-wedding photography. */
export function CoupleFrame({ p }) {
  const blades = [0, 60, 120, 180, 240, 300];
  return (
    <g>
      {/* Polaroid */}
      <At x={200} y={142} r={-4} cls="ill-float-sm">
        <rect x={-74} y={-86} width={148} height={170} rx={6} fill={W} />
        <rect x={-62} y={-74} width={124} height={118} rx={4} fill={p.mainLight} />
        <circle className="ill-glow" cx={30} cy={-34} r={20} fill={p.accent} />
        <path d="M-62 20 C-30 0 -6 6 14 -2 C34 -10 50 0 62 8 V44 H-62 Z" fill={p.main} />
        {/* Couple: dress and suit silhouettes */}
        <circle cx={-14} cy={-14} r={7} fill={p.mainDark} />
        <path d="M-14 -7 L-26 30 H-2 Z" fill={p.mainDark} />
        <circle cx={10} cy={-17} r={7} fill={p.mainDark} />
        <rect x={3} y={-10} width={14} height={40} rx={4} fill={p.mainDark} />
        <At x={-2} y={-34} s={0.7} cls="ill-pulse">
          <path d={HEART} fill={RED} />
        </At>
        <rect x={-40} y={58} width={80} height={6} rx={3} fill={LINE} />
      </At>

      {/* Lens aperture */}
      <At x={74} y={196} cls="ill-spin">
        <circle r={30} fill={INK} />
        <circle r={22} fill={p.mainDark} />
        {blades.map((a) => (
          <path key={a} d="M0 0 L22 -4 L14 16 Z" fill={p.main} opacity={0.85} transform={`rotate(${a})`} />
        ))}
        <circle r={7} fill={INK} />
      </At>

      {/* Film strip */}
      <At x={328} y={212} r={-6}>
        <g className="ill-drift">
          <rect x={-56} y={-24} width={112} height={48} rx={4} fill={INK} />
          {Array.from({ length: 7 }, (_, i) => (
            <g key={i}>
              <rect x={-50 + i * 15} y={-20} width={7} height={5} rx={1} fill={W} opacity={0.8} />
              <rect x={-50 + i * 15} y={15} width={7} height={5} rx={1} fill={W} opacity={0.8} />
            </g>
          ))}
          {[0, 1, 2].map((i) => (
            <rect key={i} x={-48 + i * 33} y={-11} width={29} height={22} rx={2} fill={i === 1 ? p.accent : p.mainLight} />
          ))}
        </g>
      </At>
    </g>
  );
}

/** A birthday cake with flickering candles, a calendar date coming up, a gift and a ringing reminder
 *  bell — BirthdayBook's birthdays and anniversaries, kept on your own device. */
export function BirthdayCake({ p }) {
  const candles = [178, 200, 222];
  return (
    <g>
      {/* Cake */}
      <g className="ill-float-sm">
        <ellipse cx={200} cy={232} rx={78} ry={9} fill={W} />
        <rect x={136} y={176} width={128} height={54} rx={8} fill={p.main} />
        <rect x={156} y={136} width={88} height={44} rx={8} fill={p.mainLight} />
        <path d="M156 146 q8 10 16 0 q8 10 16 0 q8 10 16 0 q8 10 16 0 q8 10 16 0 q4 6 8 2 V140 a6 6 0 0 0 -6 -6 H162 a6 6 0 0 0 -6 6 Z" fill={W} />
        {[150, 176, 202, 228].map((x) => (
          <circle key={x} cx={x + 10} cy={204} r={4} fill={p.accent} />
        ))}
        {candles.map((x, i) => (
          <g key={x}>
            <rect x={x - 4} y={108} width={8} height={28} rx={3} fill={W} />
            <rect x={x - 4} y={116} width={8} height={4} fill={p.accent} />
            <rect x={x - 4} y={126} width={8} height={4} fill={p.accent} />
            <ellipse className="ill-blink" style={d(i * 0.3)} cx={x} cy={100} rx={4.5} ry={7} fill={GOLD} />
          </g>
        ))}
      </g>

      {/* Calendar date */}
      <At x={76} y={126} cls="ill-float" delay={-1.3}>
        <rect x={-34} y={-34} width={68} height={68} rx={8} fill={W} />
        <rect x={-34} y={-34} width={68} height={18} rx={8} fill={p.accent} />
        <rect x={-34} y={-24} width={68} height={8} fill={p.accent} />
        <text y={20} textAnchor="middle" fontSize={26} fontWeight={800} fill={INK} fontFamily={SANS}>
          24
        </text>
      </At>

      {/* Gift */}
      <At x={330} y={206} cls="ill-bob">
        <rect x={-28} y={-18} width={56} height={40} rx={4} fill={p.accent} />
        <rect x={-32} y={-28} width={64} height={14} rx={4} fill={p.accent} />
        <rect x={-5} y={-28} width={10} height={50} fill={W} />
        <path d="M0 -28 C-14 -44 -26 -32 -10 -28 M0 -28 C14 -44 26 -32 10 -28" fill="none" stroke={W} strokeWidth={4} strokeLinecap="round" />
      </At>

      {/* Reminder bell */}
      <At x={326} y={84} r={0} cls="ill-swing">
        <path d="M-15 10 C-15 -8 -10 -18 0 -18 C10 -18 15 -8 15 10 L19 15 H-19 Z" fill={GOLD} />
        <circle cy={18} r={4.5} fill={GOLD_D} />
        <circle cx={13} cy={-13} r={6} fill={RED} />
      </At>
    </g>
  );
}

/** An auto-rickshaw driving a coastal road past a palm and the sea, a pickup pin and two driver
 *  quotes with one picked — Karavali Go's local rides around Gokarna. */
export function CoastalAuto({ p }) {
  const wheel = (cx, cy) => (
    <g key={cx}>
      <circle cx={cx} cy={cy} r={11} fill={INK} />
      <g className="ill-wheel">
        <circle cx={cx} cy={cy} r={4.5} fill={W} />
        <rect x={cx - 1.25} y={cy - 4.5} width={2.5} height={9} fill={MUTE} />
      </g>
    </g>
  );
  const quotes = [
    { y: 76, price: '₹420', on: false, delay: -0.8 },
    { y: 124, price: '₹350', on: true, delay: -2 },
  ];
  return (
    <g>
      {/* Sea and road */}
      <g className="ill-drift">
        <path d="M-20 214 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 V232 H-20 Z" fill={p.mainLight} />
      </g>
      <rect x={0} y={232} width={400} height={68} fill={INK} opacity={0.85} />
      <g className="ill-road">
        {Array.from({ length: 9 }, (_, i) => (
          <rect key={i} x={i * 60} y={262} width={30} height={5} rx={2.5} fill={W} opacity={0.8} />
        ))}
      </g>

      {/* Palm */}
      <path d="M68 232 C62 196 58 168 66 130" fill="none" stroke={p.mainDark} strokeWidth={7} strokeLinecap="round" />
      {[-70, -30, 20, 60, 100].map((r) => (
        <At key={r} x={66} y={132} r={r} s={0.55} cls="ill-sway">
          <path d={LEAF_PATH} fill={p.main} />
        </At>
      ))}

      {/* Auto-rickshaw */}
      <g className="ill-bob">
        {/* Canopy on its pillars; the sides are open */}
        <path d="M168 182 C168 158 184 144 212 144 H252 C264 144 270 152 270 164 V182 Z" fill={INK} />
        <rect x={172} y={160} width={5} height={30} fill={INK} />
        <rect x={262} y={160} width={5} height={30} fill={INK} />
        <path d="M178 150 C186 146 196 144 206 144 V156 H174 Z" fill={W} opacity={0.75} />
        {/* Driver and passenger bench */}
        <circle cx={196} cy={166} r={7} fill={p.mainDark} />
        <rect x={228} y={176} width={30} height={8} rx={3} fill={p.mainDark} />
        {/* Body with the headlight on its nose */}
        <path d="M148 224 L156 196 C158 188 164 184 174 184 H266 C272 184 276 190 276 198 V224 Z" fill={p.accent} strokeLinejoin="round" />
        <rect x={180} y={196} width={86} height={5} rx={2.5} fill={W} opacity={0.6} />
        <circle cx={156} cy={204} r={5} fill={GOLD} />
        {wheel(166, 226)}
        {wheel(252, 226)}
      </g>

      {/* Pickup pin */}
      <At x={214} y={124} cls="ill-bounce">
        <path d={PIN} fill={p.main} />
        <circle cy={-27} r={6} fill={W} />
      </At>

      {/* Driver quotes */}
      {quotes.map((q) => (
        <At key={q.y} x={330} y={q.y} cls="ill-float" delay={q.delay}>
          <rect x={-40} y={-18} width={80} height={36} rx={8} fill={q.on ? p.main : W} />
          <circle cx={-24} cy={0} r={9} fill={q.on ? W : p.mainLight} />
          <text x={-8} y={5} fontSize={13} fontWeight={800} fill={q.on ? W : INK} fontFamily={SANS}>
            {q.price}
          </text>
        </At>
      ))}
    </g>
  );
}

/** A trip drawn on a map between two pins, three drivers' quotes with the best one chosen, and a
 *  verified-driver shield — Payana's ask once, compare quotes, book. */
export function RouteQuotes({ p }) {
  const quotes = [
    { y: 82, on: false },
    { y: 132, on: true },
    { y: 182, on: false },
  ];
  return (
    <g>
      {/* Map with the route */}
      <g className="ill-float-sm">
        <rect x={94} y={64} width={170} height={176} rx={8} fill={W} />
        <path d="M94 120 H264 M94 182 H264 M150 64 V240 M214 64 V240" stroke={SURF} strokeWidth={9} />
        <path d="M94 120 H264 M94 182 H264 M150 64 V240 M214 64 V240" stroke={LINE} strokeWidth={1.5} />
        <path className="ill-march" d="M122 214 C130 170 150 182 170 150 S220 120 236 96" fill="none" stroke={p.main} strokeWidth={4} strokeLinecap="round" strokeDasharray="8 8" />
        <circle cx={122} cy={214} r={7} fill={p.accent} stroke={W} strokeWidth={3} />
      </g>
      <At x={236} y={98} cls="ill-bounce">
        <path d={PIN} fill={p.main} />
        <circle cy={-27} r={6} fill={W} />
      </At>

      {/* Drivers' quotes */}
      {quotes.map((q, i) => (
        <At key={q.y} x={326} y={q.y} cls="ill-float" delay={-i * 0.9}>
          <rect x={-42} y={-19} width={84} height={38} rx={8} fill={q.on ? p.mainLight : W} stroke={q.on ? p.main : 'none'} strokeWidth={2} />
          <circle cx={-24} cy={0} r={10} fill={q.on ? p.main : MUTE} />
          <rect x={-8} y={-8} width={34} height={6} rx={3} fill={q.on ? p.mainDark : LINE} />
          <rect x={-8} y={3} width={22} height={5} rx={2.5} fill={q.on ? p.main : LINE} />
          {q.on && <path className="ill-draw" d="M28 -2 l4 4 l7 -9" fill="none" stroke={p.mainDark} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" pathLength={1} />}
        </At>
      ))}

      {/* Verified driver */}
      <At x={70} y={200} cls="ill-pop">
        <path d="M0 -26 L22 -18 V0 C22 16 11 25 0 30 C-11 25 -22 16 -22 0 V-18 Z" fill={p.main} />
        <path className="ill-draw" d="M-8 0 l5 5 l11 -12" fill="none" stroke={W} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" pathLength={1} />
      </At>
    </g>
  );
}
