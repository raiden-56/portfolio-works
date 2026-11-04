// One-of-a-kind scenes, part 3 (projects added Nov 2026). Each takes the project's palette `p`.
import { At, Avatar, GOLD, GOLD_D, INK, LINE, MUTE, PIN, RED, SURF, W, d } from './kit';

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
