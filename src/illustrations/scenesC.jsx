// One-of-a-kind scenes, part 3 (projects added Nov 2026). Each takes the project's palette `p`.
import { At, Avatar, GOLD, GOLD_D, HEART, INK, LEAF_PATH, LINE, MUTE, PIN, RED, SURF, TSHIRT, W, d } from './kit';

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

/** Content blocks being dragged into a page, and the same content leaving through an API to a phone
 *  and a monitor — Meridian's model once, build visually, deliver anywhere. */
export function HeadlessBlocks({ p }) {
  const blocks = [
    { y: 96, w: 88, c: p.main },
    { y: 122, w: 64, c: p.mainLight },
    { y: 148, w: 76, c: p.accentLight },
  ];
  return (
    <g>
      {/* Page being built */}
      <g className="ill-float-sm">
        <rect x={110} y={72} width={120} height={160} rx={8} fill={W} />
        <rect x={122} y={84} width={60} height={8} rx={4} fill={INK} opacity={0.7} />
        {blocks.map((b) => (
          <rect key={b.y} x={122} y={b.y + 4} width={b.w} height={18} rx={4} fill={b.c} />
        ))}
        <rect x={122} y={178} width={96} height={42} rx={6} fill="none" stroke={p.main} strokeWidth={2} strokeDasharray="5 5" />
      </g>
      {/* Block on its way in */}
      <At x={150} y={196} cls="ill-drag">
        <rect x={-30} y={-12} width={60} height={24} rx={5} fill={p.accent} />
        <rect x={-22} y={-4} width={30} height={4} rx={2} fill={W} />
        <rect x={-22} y={3} width={20} height={3} rx={1.5} fill={W} opacity={0.7} />
      </At>

      {/* API out to any frontend */}
      <At x={268} y={150}>
        <rect x={-18} y={-18} width={36} height={36} rx={8} fill={INK} />
        <text y={6} textAnchor="middle" fontSize={16} fontWeight={800} fill={p.accentLight} fontFamily="ui-monospace, Menlo, monospace">
          {'{}'}
        </text>
      </At>
      <path className="ill-march" d="M286 140 C300 128 306 104 318 96 M286 160 C300 172 306 196 320 204" fill="none" stroke={p.main} strokeWidth={2.5} strokeDasharray="6 6" />
      <At x={336} y={92} cls="ill-float" delay={-1}>
        <rect x={-14} y={-24} width={28} height={48} rx={6} fill={INK} />
        <rect x={-10} y={-18} width={20} height={34} rx={3} fill={W} />
        <rect x={-6} y={-12} width={12} height={5} rx={2} fill={p.main} />
        <rect x={-6} y={-3} width={9} height={4} rx={2} fill={LINE} />
      </At>
      <At x={344} y={206} cls="ill-float" delay={-2.2}>
        <rect x={-30} y={-20} width={60} height={38} rx={5} fill={INK} />
        <rect x={-26} y={-16} width={52} height={30} rx={3} fill={W} />
        <rect x={-20} y={-11} width={22} height={5} rx={2} fill={p.main} />
        <rect x={-20} y={-2} width={34} height={4} rx={2} fill={LINE} />
        <rect x={-6} y={18} width={12} height={6} fill={INK} />
      </At>
      <At x={70} y={120} cls="ill-pulse">
        <rect x={-26} y={-26} width={52} height={52} rx={8} fill={W} />
        {[0, 1, 2].map((i) => (
          <rect key={i} x={-16} y={-14 + i * 11} width={i === 1 ? 22 : 32} height={6} rx={3} fill={i === 0 ? p.main : LINE} />
        ))}
      </At>
    </g>
  );
}

/** A CCTV wall with live dots, and a hub wiring a home, a hotel and an office together — Nexora's
 *  one platform for every space. */
export function SpacesHub({ p }) {
  const feeds = [0, 1, 2, 3];
  return (
    <g>
      {/* Camera wall */}
      <g className="ill-float-sm">
        <rect x={132} y={64} width={136} height={96} rx={8} fill={INK} />
        {feeds.map((i) => {
          const x = 140 + (i % 2) * 62;
          const y = 72 + Math.floor(i / 2) * 42;
          return (
            <g key={i}>
              <rect x={x} y={y} width={58} height={38} rx={4} fill={i === 1 ? p.mainDark : '#2f3448'} />
              <path d={`M${x + 6} ${y + 32} L${x + 20} ${y + 18} L${x + 30} ${y + 26} L${x + 40} ${y + 14} L${x + 52} ${y + 32} Z`} fill={i === 1 ? p.main : '#4a5068'} />
              <circle className="ill-blink" style={d(i * 0.4)} cx={x + 50} cy={y + 7} r={3} fill={RED} />
            </g>
          );
        })}
      </g>

      {/* Hub and the spaces it runs */}
      <path className="ill-march" d="M200 196 V172 M200 196 L102 228 M200 196 L298 228" stroke={p.main} strokeWidth={2.5} strokeDasharray="6 6" fill="none" />
      <At x={200} y={196} cls="ill-pulse">
        <circle r={14} fill={p.main} />
        <circle r={6} fill={W} />
      </At>
      {/* Home */}
      <At x={92} y={228} cls="ill-float" delay={-0.6}>
        <path d="M-22 0 L0 -20 L22 0 V22 H-22 Z" fill={W} />
        <path d="M-26 2 L0 -24 L26 2" fill="none" stroke={p.mainDark} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
        <rect x={-6} y={8} width={12} height={14} fill={p.accent} />
      </At>
      {/* Hotel */}
      <At x={200} y={240} cls="ill-float" delay={-1.6}>
        <rect x={-20} y={-24} width={40} height={42} rx={3} fill={W} />
        {Array.from({ length: 6 }, (_, i) => (
          <rect key={i} x={-14 + (i % 3) * 10} y={-18 + Math.floor(i / 3) * 11} width={7} height={7} rx={1} fill={i === 4 ? p.accent : p.mainLight} />
        ))}
        <rect x={-6} y={6} width={12} height={12} fill={p.mainDark} />
      </At>
      {/* Office */}
      <At x={308} y={226} cls="ill-float" delay={-2.4}>
        <rect x={-16} y={-34} width={32} height={56} rx={3} fill={W} />
        {Array.from({ length: 8 }, (_, i) => (
          <rect key={i} x={-10 + (i % 2) * 12} y={-28 + Math.floor(i / 2) * 11} width={8} height={6} rx={1} fill={i === 3 ? p.accent : p.mainLight} />
        ))}
      </At>
      {/* Phone in hand: the app */}
      <At x={330} y={96} cls="ill-float" delay={-1.2}>
        <rect x={-18} y={-30} width={36} height={60} rx={7} fill={W} />
        <rect x={-12} y={-22} width={24} height={14} rx={3} fill={p.main} />
        <rect x={-12} y={-4} width={11} height={11} rx={3} fill={p.mainLight} />
        <rect x={1} y={-4} width={11} height={11} rx={3} fill={p.accentLight} />
        <rect x={-12} y={11} width={24} height={5} rx={2.5} fill={LINE} />
      </At>
    </g>
  );
}

/** A bag of clothes on a doorstep scale with a swinging needle, the kilos it weighs, a payout coin and
 *  recycling arrows — ReWear's sell clothes by the KG. */
export function ClothesScale({ p }) {
  return (
    <g>
      {/* Scale */}
      <g className="ill-float-sm">
        <rect x={140} y={150} width={120} height={84} rx={8} fill={W} />
        <rect x={130} y={140} width={140} height={12} rx={6} fill={p.mainDark} />
        <circle cx={200} cy={196} r={28} fill={SURF} stroke={LINE} strokeWidth={3} />
        <path d="M178 196 A22 22 0 0 1 222 196" fill="none" stroke={p.mainLight} strokeWidth={4} />
        <At x={200} y={196}>
          <g className="ill-needle">
            <line x1={0} y1={-20} x2={0} y2={20} stroke="transparent" strokeWidth={3} />
            <line x1={0} y1={0} x2={0} y2={-20} stroke={RED} strokeWidth={3} strokeLinecap="round" />
          </g>
        </At>
        <circle cx={200} cy={196} r={4} fill={INK} />
      </g>
      {/* Bag of clothes */}
      <At x={200} y={112} cls="ill-bob">
        <path d="M-34 26 L-28 -14 H28 L34 26 Z" fill={p.main} />
        <path d="M-14 -14 C-14 -30 14 -30 14 -14" fill="none" stroke={p.mainDark} strokeWidth={4} />
        <path d="M-18 -4 l8 -10 h20 l8 10 l-5 5 l-3 -2 v14 h-20 v-14 l-3 2 Z" fill={p.accentLight} />
      </At>

      {/* Weight readout */}
      <At x={78} y={110} cls="ill-float" delay={-1.4}>
        <rect x={-36} y={-22} width={72} height={44} rx={8} fill={INK} />
        <text y={8} textAnchor="middle" fontSize={20} fontWeight={800} fill={p.accentLight} fontFamily="ui-monospace, Menlo, monospace">
          4.2kg
        </text>
      </At>
      {/* Payout */}
      <At x={330} y={104} cls="ill-flip">
        <circle r={26} fill={GOLD} />
        <circle r={20} fill="none" stroke={GOLD_D} strokeWidth={2.5} />
        <text y={8} textAnchor="middle" fontSize={22} fontWeight={800} fill={GOLD_D} fontFamily={SANS}>
          ₹
        </text>
      </At>
      {/* Recycling arrows */}
      <At x={330} y={210} cls="ill-spin">
        <path d="M0 -22 A22 22 0 0 1 19 11" fill="none" stroke={p.main} strokeWidth={5} strokeLinecap="round" />
        <path d="M19 11 A22 22 0 0 1 -19 11" fill="none" stroke={p.accent} strokeWidth={5} strokeLinecap="round" />
        <path d="M-19 11 A22 22 0 0 1 0 -22" fill="none" stroke={p.mainDark} strokeWidth={5} strokeLinecap="round" />
        <path d="M-6 -27 L2 -22 L-5 -15" fill="none" stroke={p.mainDark} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
      </At>
      <At x={74} y={214} cls="ill-float" delay={-2.6}>
        <path d={TSHIRT} fill={p.mainLight} transform="scale(1.6)" />
      </At>
    </g>
  );
}

/** A wind turbine turning over a remote site, the supervisor's muster roll ticking off each guard,
 *  a shift clock and an offline-ready badge — WINDGUARD's every shift, every worker accounted for. */
export function TurbineRoll({ p }) {
  const rows = [0, 1, 2, 3];
  return (
    <g>
      {/* Turbine */}
      <path d="M98 248 L104 120 H112 L118 248 Z" fill={W} />
      <At x={108} y={116} cls="ill-spin">
        <circle r={62} fill="none" />
        {[0, 120, 240].map((a) => (
          <path key={a} d="M-4 0 C-6 -20 -3 -44 0 -60 C3 -44 6 -20 4 0 Z" fill={W} stroke={LINE} strokeWidth={1} transform={`rotate(${a})`} />
        ))}
        <circle r={7} fill={p.main} />
      </At>

      {/* Muster roll */}
      <At x={240} y={156} cls="ill-float-sm">
        <rect x={-62} y={-80} width={124} height={156} rx={8} fill={W} />
        <rect x={-20} y={-88} width={40} height={14} rx={4} fill={p.mainDark} />
        <rect x={-48} y={-62} width={56} height={7} rx={3.5} fill={INK} opacity={0.75} />
        {rows.map((i) => {
          const y = -38 + i * 26;
          const present = i !== 2;
          return (
            <g key={i}>
              <circle cx={-40} cy={y} r={9} fill={p.mainLight} />
              <rect x={-26} y={y - 4} width={44} height={8} rx={4} fill={LINE} />
              <rect x={26} y={y - 9} width={18} height={18} rx={4} fill={present ? p.main : SURF} stroke={present ? 'none' : LINE} strokeWidth={1.5} />
              {present && <path className="ill-draw" style={d(i * 0.5)} d={`M30 ${y} l4 4 l7 -8`} fill="none" stroke={W} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" pathLength={1} />}
            </g>
          );
        })}
      </At>

      {/* Shift clock */}
      <At x={340} y={98} cls="ill-float" delay={-1.8}>
        <circle r={26} fill={W} />
        <circle r={20} fill="none" stroke={p.mainLight} strokeWidth={3} />
        <line x1={0} y1={0} x2={0} y2={-13} stroke={INK} strokeWidth={3} strokeLinecap="round" />
        <g className="ill-spin">
          <line x1={0} y1={-16} x2={0} y2={16} stroke="transparent" strokeWidth={2} />
          <line x1={0} y1={0} x2={0} y2={-16} stroke={p.accent} strokeWidth={2} strokeLinecap="round" />
        </g>
        <circle r={3} fill={INK} />
      </At>
      {/* Works offline */}
      <At x={340} y={206} cls="ill-pulse">
        <rect x={-30} y={-18} width={60} height={36} rx={8} fill={p.main} />
        <path d="M-14 0 a20 20 0 0 1 28 0 M-8 6 a11 11 0 0 1 16 0" fill="none" stroke={W} strokeWidth={3} strokeLinecap="round" />
        <circle cy={11} r={2.5} fill={W} />
        <line x1={-12} y1={-10} x2={12} y2={14} stroke={p.accentLight} strokeWidth={3} strokeLinecap="round" />
      </At>
    </g>
  );
}

/** Two companies joined by a bridge, a deal travelling across it, and the network of partners around
 *  them — PartnerBridge's discover, connect, negotiate, collaborate. */
export function BridgeDeal({ p }) {
  const nodes = [
    [70, 86],
    [118, 60],
    [282, 60],
    [332, 90],
  ];
  return (
    <g>
      {/* Partner network */}
      <path className="ill-march" d="M70 86 L118 60 L200 76 L282 60 L332 90" fill="none" stroke={p.mainLight} strokeWidth={2} strokeDasharray="5 6" />
      {nodes.map(([x, y], i) => (
        <circle key={i} className="ill-pulse" style={d(i * 0.4)} cx={x} cy={y} r={7} fill={i % 2 ? p.accent : p.main} />
      ))}
      <Avatar x={200} y={76} r={13} bg={p.mainDark} fg={W} />

      {/* Company A */}
      <At x={92} y={186} cls="ill-float-sm">
        <rect x={-38} y={-62} width={76} height={110} rx={6} fill={W} />
        {Array.from({ length: 9 }, (_, i) => (
          <rect key={i} x={-28 + (i % 3) * 20} y={-50 + Math.floor(i / 3) * 22} width={14} height={12} rx={2} fill={i === 4 ? p.accent : p.mainLight} />
        ))}
        <rect x={-10} y={22} width={20} height={26} fill={p.mainDark} />
      </At>
      {/* Company B */}
      <At x={308} y={186} cls="ill-float-sm" delay={-2}>
        <rect x={-38} y={-62} width={76} height={110} rx={6} fill={W} />
        {Array.from({ length: 9 }, (_, i) => (
          <rect key={i} x={-28 + (i % 3) * 20} y={-50 + Math.floor(i / 3) * 22} width={14} height={12} rx={2} fill={i === 2 ? p.accent : p.mainLight} />
        ))}
        <rect x={-10} y={22} width={20} height={26} fill={p.mainDark} />
      </At>

      {/* The bridge */}
      <path d="M130 196 C170 150 230 150 270 196" fill="none" stroke={p.main} strokeWidth={6} strokeLinecap="round" />
      <rect x={128} y={196} width={144} height={8} rx={4} fill={p.mainDark} />
      {[150, 172, 200, 228, 250].map((x) => (
        <line key={x} x1={x} y1={196} x2={x} y2={x === 200 ? 162 : x === 172 || x === 228 ? 168 : 180} stroke={p.main} strokeWidth={2.5} />
      ))}
      {/* Deal crossing it */}
      <At x={200} y={184} cls="ill-drift">
        <rect x={-30} y={-14} width={44} height={22} rx={6} fill={W} stroke={p.main} strokeWidth={2} />
        <path className="ill-draw" d="M-20 -3 l5 5 l9 -9" fill="none" stroke={p.main} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" pathLength={1} />
        <rect x={-4} y={-6} width={12} height={4} rx={2} fill={LINE} />
      </At>
    </g>
  );
}

/** A day-by-day itinerary beside its route on a map, a budget ring, a packing list ticking itself off
 *  and a plane on its way — TravelMate's whole trip in one place. */
export function TripPlanner({ p }) {
  const days = [
    { y: 96, w: 50 },
    { y: 128, w: 40 },
    { y: 160, w: 56 },
  ];
  return (
    <g>
      {/* Plane crossing */}
      <At x={200} y={50} cls="ill-drift">
        <path d="M-18 0 L14 -3 L22 0 L14 3 Z M-4 -1 L-10 -12 L-4 -12 L6 -1 Z M-4 1 L-10 12 L-4 12 L6 1 Z M-16 -1 L-20 -7 L-16 -7 L-12 -1 Z" fill={p.mainDark} />
      </At>
      <path d="M120 54 H178" stroke={p.mainLight} strokeWidth={2} strokeDasharray="4 5" />

      {/* Itinerary */}
      <g className="ill-float-sm">
        <rect x={60} y={72} width={130} height={150} rx={8} fill={W} />
        <rect x={72} y={82} width={58} height={7} rx={3.5} fill={INK} opacity={0.75} />
        <path d="M80 104 V170" stroke={LINE} strokeWidth={2} />
        {days.map((dd, i) => (
          <g key={dd.y}>
            <circle cx={80} cy={dd.y + 8} r={6} fill={i === 1 ? p.accent : p.main} />
            <rect x={92} y={dd.y} width={dd.w} height={6} rx={3} fill={INK} opacity={0.6} />
            <rect x={92} y={dd.y + 11} width={dd.w + 26} height={5} rx={2.5} fill={LINE} />
          </g>
        ))}
        <rect x={72} y={190} width={106} height={20} rx={6} fill={p.mainLight} />
        <rect x={80} y={197} width={48} height={6} rx={3} fill={p.mainDark} />
      </g>

      {/* Route on a map */}
      <At x={268} y={148} cls="ill-float" delay={-1.2}>
        <rect x={-58} y={-58} width={116} height={116} rx={8} fill={W} />
        <path d="M-58 -14 C-30 -24 -10 6 20 -6 S50 -30 58 -20 M-20 -58 C-14 -20 -26 20 -12 58" stroke={SURF} strokeWidth={8} fill="none" />
        <path className="ill-march" d="M-34 30 C-20 6 -6 18 6 -2 S30 -22 36 -34" fill="none" stroke={p.main} strokeWidth={3.5} strokeLinecap="round" strokeDasharray="7 7" />
        <circle cx={-34} cy={30} r={6} fill={p.accent} stroke={W} strokeWidth={2.5} />
        <circle cx={6} cy={-2} r={5} fill={p.mainLight} stroke={p.main} strokeWidth={2} />
        <At x={36} y={-30} s={0.7} cls="ill-bounce">
          <path d={PIN} fill={p.main} />
          <circle cy={-27} r={6} fill={W} />
        </At>
      </At>

      {/* Budget */}
      <At x={344} y={70} cls="ill-float" delay={-2.2}>
        <circle r={24} fill={W} />
        <circle r={17} fill="none" stroke={SURF} strokeWidth={6} />
        <circle className="ill-draw" r={17} fill="none" stroke={p.accent} strokeWidth={6} strokeLinecap="round" pathLength={1} transform="rotate(-90)" />
        <text y={4} textAnchor="middle" fontSize={11} fontWeight={800} fill={INK} fontFamily={SANS}>
          ₹
        </text>
      </At>

      {/* Packing list */}
      <At x={330} y={240} cls="ill-float" delay={-0.6}>
        <rect x={-38} y={-22} width={76} height={44} rx={8} fill={W} />
        {[0, 1].map((i) => (
          <g key={i}>
            <rect x={-28} y={-13 + i * 15} width={10} height={10} rx={3} fill={p.main} />
            <path className="ill-draw" style={d(i * 0.6)} d={`M-26 ${-8 + i * 15} l2.5 2.5 l4.5 -5`} fill="none" stroke={W} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" pathLength={1} />
            <rect x={-12} y={-11 + i * 15} width={i ? 30 : 40} height={5} rx={2.5} fill={LINE} />
          </g>
        ))}
      </At>
    </g>
  );
}

/** "You are here" with radar rings pulsing out to the places around it, a neighbourhood-feed bubble
 *  and a compass — NearMe's everything around you. */
export function RadarNearby({ p }) {
  const places = [
    { x: 128, y: 104, c: p.accent, glyph: 'cup' },
    { x: 280, y: 96, c: RED, glyph: 'plus' },
    { x: 296, y: 200, c: p.mainDark, glyph: 'star' },
    { x: 116, y: 206, c: GOLD_D, glyph: 'cart' },
  ];
  const glyph = (g) => {
    if (g === 'plus') return <path d="M0 -6 V6 M-6 0 H6" stroke={W} strokeWidth={3} strokeLinecap="round" />;
    if (g === 'star') return <polygon points="0,-7 2,-2 7,-2 3,1.5 4.5,7 0,3.5 -4.5,7 -3,1.5 -7,-2 -2,-2" fill={W} />;
    if (g === 'cart') return <path d="M-7 -5 H-4 L-2 4 H5 L7 -2 H-3" fill="none" stroke={W} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />;
    return <path d="M-5 -3 H4 V3 a4 4 0 0 1 -4 4 H-1 a4 4 0 0 1 -4 -4 Z M4 -1 h2 a2 2 0 0 1 0 4 h-2" fill="none" stroke={W} strokeWidth={2} />;
  };
  return (
    <g>
      {/* Map streets */}
      <g opacity={0.9}>
        <path d="M40 150 C120 130 160 170 220 150 S330 120 380 140 M200 40 C190 110 214 190 196 270 M70 70 L330 240" stroke={W} strokeWidth={10} fill="none" strokeLinecap="round" />
      </g>

      {/* Radar from you */}
      <At x={204} y={152}>
        {[0, 1, 2].map((i) => (
          <circle key={i} className="ill-ping" style={d(i * 0.6)} r={34} fill="none" stroke={p.main} strokeWidth={2.5} />
        ))}
        <circle r={20} fill={p.mainLight} opacity={0.6} />
        <circle r={10} fill={p.main} stroke={W} strokeWidth={4} />
      </At>

      {/* Places nearby */}
      {places.map((pl, i) => (
        <At key={i} x={pl.x} y={pl.y} cls="ill-bounce" delay={-i * 0.4}>
          <path d={PIN} fill={pl.c} transform="scale(0.85)" />
          <g transform="translate(0 -23)">{glyph(pl.glyph)}</g>
        </At>
      ))}

      {/* Neighbourhood feed */}
      <At x={336} y={58} cls="ill-float" delay={-1.4}>
        <path d="M-34 -18 H34 a8 8 0 0 1 8 8 V10 a8 8 0 0 1 -8 8 H-14 L-24 28 L-24 18 H-34 a8 8 0 0 1 -8 -8 V-10 a8 8 0 0 1 8 -8 Z" fill={W} />
        <circle cx={-26} cy={0} r={7} fill={p.mainLight} />
        <rect x={-14} y={-7} width={40} height={5} rx={2.5} fill={INK} opacity={0.6} />
        <rect x={-14} y={3} width={28} height={4} rx={2} fill={LINE} />
      </At>

      {/* Compass */}
      <At x={66} y={252}>
        <circle r={22} fill={W} />
        <g className="ill-swing">
          <path d="M0 -16 L5 0 L0 16 L-5 0 Z" fill={MUTE} />
          <path d="M0 -16 L5 0 L-5 0 Z" fill={RED} />
        </g>
        <circle r={3} fill={INK} />
      </At>
    </g>
  );
}
