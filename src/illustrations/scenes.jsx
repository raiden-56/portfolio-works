// Hand-built SVG scenes for project illustrations. Every scene draws in a
// 400×300 viewBox and keeps its key content between y=40 and y=260 so it
// survives the 16:10 crop on grid cards.
//
// Animation classes (ill-*) live in src/index.css. An element that animates
// `transform` must not also carry a `transform` attribute — position it with
// a wrapping <g> instead.

export const C = {
  frame: '#eef0ff',
  frameDark: '#c7cdf7',
  screen: '#222c66',
  screen2: '#1a2255',
  block: '#4a62c9',
  block2: '#6d87ec',
  blockLight: '#aab8ff',
  line: '#7f93e6',
  accent: '#8b5cf6',
  accentLight: '#c4b5fd',
  accentDark: '#6d28d9',
  hot: '#f87171',
  gold: '#fbbf24',
  goldDark: '#d97706',
  mint: '#34d399',
  white: '#ffffff',
  ink: '#1c1846',
};

const delay = (s) => ({ animationDelay: `${s}s` });

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

/** Browser window: frame, traffic lights, URL bar and dark screen. */
function Window({ x, y, w, h, children }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={14} fill={C.frame} />
      <circle cx={x + 13} cy={y + 11} r={3} fill={C.hot} />
      <circle cx={x + 23} cy={y + 11} r={3} fill={C.gold} />
      <circle cx={x + 33} cy={y + 11} r={3} fill={C.mint} />
      <rect x={x + w / 2 - 50} y={y + 7} width={100} height={8} rx={4} fill={C.frameDark} />
      <rect x={x + 8} y={y + 22} width={w - 16} height={h - 30} rx={8} fill={C.screen} />
      {children}
    </g>
  );
}

function Browser() {
  return (
    <g className="ill-float-sm">
      <Window x={86} y={72} w={228} h={168}>
        <rect x={104} y={104} width={118} height={46} rx={6} fill={C.block} />
        <rect x={112} y={114} width={70} height={7} rx={3.5} fill={C.blockLight} />
        <rect x={112} y={126} width={50} height={5} rx={2.5} fill={C.line} />
        <rect x={112} y={136} width={34} height={8} rx={4} fill={C.accent} />
        <rect x={230} y={104} width={66} height={46} rx={6} fill={C.block2} />
        <path d="M236 146 L254 124 L266 136 L276 126 L292 146 Z" fill={C.blockLight} />
        <circle className="ill-pulse" cx={284} cy={114} r={5} fill={C.gold} />
        <rect x={104} y={160} width={192} height={5} rx={2.5} fill={C.line} opacity={0.6} />
        <rect x={104} y={170} width={150} height={5} rx={2.5} fill={C.line} opacity={0.4} />
        {[104, 170, 236].map((x, i) => (
          <g key={x}>
            <rect x={x} y={184} width={60} height={40} rx={6} fill={C.block} />
            <circle className="ill-pulse" style={delay(i * 0.5)} cx={x + 12} cy={196} r={5} fill={C.accentLight} />
            <rect x={x + 8} y={208} width={40} height={4} rx={2} fill={C.line} />
          </g>
        ))}
      </Window>
    </g>
  );
}

function Dashboard() {
  const bars = [30, 48, 36, 60, 44, 66];
  return (
    <g className="ill-float-sm">
      <Window x={80} y={70} w={240} h={172}>
        <rect x={88} y={92} width={40} height={142} rx={8} fill={C.screen2} />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={96} y={102 + i * 18} width={24} height={6} rx={3} fill={i === 1 ? C.accent : C.line} />
        ))}
        {[136, 194, 252].map((x) => (
          <g key={x}>
            <rect x={x} y={100} width={52} height={30} rx={6} fill={C.block} />
            <rect x={x + 8} y={108} width={20} height={5} rx={2.5} fill={C.blockLight} />
            <rect x={x + 8} y={118} width={32} height={6} rx={3} fill={C.white} />
          </g>
        ))}
        <rect x={136} y={138} width={110} height={88} rx={6} fill={C.screen2} />
        {bars.map((h, i) => (
          <rect
            key={i}
            className="ill-bar"
            style={delay(-i * 0.35)}
            x={146 + i * 16}
            y={216 - h}
            width={9}
            height={h}
            rx={3}
            fill={i % 2 ? C.block2 : C.accent}
          />
        ))}
        <rect x={252} y={138} width={60} height={88} rx={6} fill={C.screen2} />
        <circle cx={282} cy={172} r={18} fill="none" stroke={C.block} strokeWidth={7} />
        <g transform="rotate(-90 282 172)">
          <circle
            className="ill-draw"
            cx={282}
            cy={172}
            r={18}
            fill="none"
            stroke={C.accent}
            strokeWidth={7}
            strokeLinecap="round"
            pathLength={1}
          />
        </g>
        <rect x={262} y={200} width={40} height={5} rx={2.5} fill={C.line} />
        <rect x={262} y={210} width={28} height={5} rx={2.5} fill={C.line} opacity={0.6} />
      </Window>
    </g>
  );
}

function Phone() {
  return (
    <g>
      <g className="ill-float-sm">
        <rect x={148} y={40} width={104} height={220} rx={20} fill={C.frame} />
        <rect x={156} y={54} width={88} height={194} rx={12} fill={C.screen} />
        <rect x={184} y={46} width={32} height={4} rx={2} fill={C.frameDark} />
        <rect x={164} y={64} width={72} height={44} rx={8} fill={C.accent} />
        <rect x={172} y={74} width={40} height={6} rx={3} fill={C.white} opacity={0.9} />
        <rect x={172} y={86} width={28} height={5} rx={2.5} fill={C.accentLight} />
        {[0, 1, 2].map((i) => {
          const y = 116 + i * 30;
          return (
            <g key={i}>
              <rect x={164} y={y} width={72} height={24} rx={6} fill={C.block} />
              <circle cx={176} cy={y + 12} r={6} fill={C.blockLight} />
              <rect x={188} y={y + 7} width={38} height={4} rx={2} fill={C.line} />
              <rect x={188} y={y + 14} width={24} height={4} rx={2} fill={C.line} opacity={0.6} />
            </g>
          );
        })}
        <rect x={164} y={212} width={72} height={26} rx={8} fill={C.screen2} />
        {[180, 200, 220].map((cx) => (
          <circle key={cx} cx={cx} cy={225} r={4} fill={cx === 200 ? C.accent : C.line} />
        ))}
      </g>
      <g className="ill-float" style={delay(-1.2)}>
        <rect x={84} y={104} width={70} height={46} rx={10} fill={C.frame} />
        <circle cx={100} cy={120} r={8} fill={C.accentLight} />
        <rect x={112} y={114} width={32} height={5} rx={2.5} fill={C.frameDark} />
        <rect x={112} y={124} width={22} height={5} rx={2.5} fill={C.frameDark} />
        <rect x={94} y={136} width={50} height={6} rx={3} fill={C.accent} />
      </g>
      <g className="ill-float" style={delay(-2.4)}>
        <rect x={246} y={150} width={72} height={54} rx={10} fill={C.frame} />
        {[14, 24, 18, 30].map((h, i) => (
          <rect
            key={i}
            className="ill-bar"
            style={delay(-i * 0.4)}
            x={258 + i * 14}
            y={194 - h}
            width={8}
            height={h}
            rx={3}
            fill={i === 3 ? C.accent : C.block2}
          />
        ))}
      </g>
    </g>
  );
}

function Board() {
  const counts = [3, 2, 2, 1];
  return (
    <g className="ill-float-sm">
      <Window x={64} y={66} w={272} h={176}>
        {counts.map((count, i) => {
          const x = 82 + i * 60;
          return (
            <g key={i}>
              <rect x={x} y={100} width={52} height={8} rx={4} fill={C.block2} />
              {Array.from({ length: count }, (_, j) => (
                <g key={j}>
                  <rect x={x} y={116 + j * 32} width={52} height={26} rx={5} fill={C.block} />
                  <rect x={x + 6} y={124 + j * 32} width={30} height={4} rx={2} fill={C.blockLight} />
                  <rect x={x + 6} y={131 + j * 32} width={20} height={4} rx={2} fill={C.line} />
                </g>
              ))}
            </g>
          );
        })}
      </Window>
      <g className="ill-drag">
        <rect x={204} y={182} width={58} height={32} rx={6} fill={C.hot} />
        <rect x={212} y={191} width={34} height={5} rx={2.5} fill={C.white} />
        <rect x={212} y={201} width={22} height={5} rx={2.5} fill={C.white} opacity={0.7} />
      </g>
    </g>
  );
}

function Document() {
  const widths = [84, 64, 76, 56];
  return (
    <g>
      <g className="ill-float-sm">
        <rect x={150} y={58} width={136} height={182} rx={10} fill={C.frameDark} transform="rotate(8 218 149)" />
        <rect x={118} y={52} width={150} height={190} rx={10} fill={C.white} />
        {[0, 1, 2, 3, 4].map((i) => (
          <circle key={i} cx={136 + i * 28} cy={52} r={5} fill={C.screen} />
        ))}
        <rect x={136} y={72} width={70} height={9} rx={4.5} fill={C.ink} opacity={0.8} />
        {widths.map((w, i) => {
          const y = 98 + i * 34;
          return (
            <g key={i}>
              <rect x={136} y={y} width={16} height={16} rx={4} fill="none" stroke={C.accent} strokeWidth={2.5} />
              <path
                className="ill-draw"
                style={delay(i * 0.45)}
                d={`M139.5 ${y + 8} l4 4 l7 -8`}
                fill="none"
                stroke={C.accent}
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={1}
              />
              <rect x={160} y={y + 4} width={w} height={7} rx={3.5} fill={C.frameDark} />
            </g>
          );
        })}
      </g>
      <g transform="translate(286 92) rotate(28)">
        <g className="ill-float">
          <rect x={-7} y={0} width={14} height={96} rx={7} fill={C.accent} />
          <rect x={-7} y={0} width={14} height={18} rx={7} fill={C.accentDark} />
          <path d="M-7 94 L0 114 L7 94 Z" fill={C.gold} />
        </g>
      </g>
    </g>
  );
}

function MapScene() {
  return (
    <g className="ill-float-sm">
      <path d="M80 90 L150 70 L150 220 L80 240 Z" fill="#d6dcff" />
      <path d="M150 70 L220 90 L220 240 L150 220 Z" fill="#bcc6ff" />
      <path d="M220 90 L300 70 L300 220 L220 240 Z" fill="#d6dcff" />
      <path d="M96 120 C110 100 140 108 140 128 C140 150 112 156 100 146 Z" fill="#9fb0ff" />
      <path d="M232 160 C250 140 288 150 286 176 C284 200 250 204 238 190 Z" fill="#9fb0ff" />
      <path d="M160 176 C176 164 204 172 200 192 C196 208 168 210 160 196 Z" fill="#aebcff" />
      <path
        className="ill-march"
        d="M108 206 C140 150 170 210 200 160 S 250 112 276 114"
        fill="none"
        stroke={C.accent}
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray="4 8"
      />
      <circle cx={108} cy={206} r={7} fill={C.accentDark} />
      <circle cx={108} cy={206} r={2.5} fill={C.white} />
      <g transform="translate(276 114)">
        <g className="ill-bounce">
          <path d="M0 0 C-6 -10 -14 -18 -14 -27 A14 14 0 1 1 14 -27 C14 -18 6 -10 0 0 Z" fill={C.hot} />
          <circle cx={0} cy={-27} r={5} fill={C.white} />
        </g>
      </g>
    </g>
  );
}

function Store() {
  return (
    <g>
      <g className="ill-float-sm">
        <Window x={80} y={72} w={232} h={168}>
          <rect x={96} y={102} width={120} height={10} rx={5} fill={C.screen2} />
          {[0, 1, 2].map((i) => {
            const x = 96 + i * 68;
            const cx = x + 30;
            const y = 120;
            return (
              <g key={i}>
                <rect x={x} y={y} width={60} height={86} rx={6} fill={C.block} />
                <rect x={x + 6} y={y + 6} width={48} height={44} rx={4} fill={C.block2} />
                <path
                  d={`M${cx - 14} ${y + 18} l8 -6 h12 l8 6 l-5 7 l-3 -2 v20 h-20 v-20 l-3 2 Z`}
                  fill={i === 1 ? C.hot : C.accentLight}
                />
                <rect x={x + 6} y={y + 56} width={30} height={5} rx={2.5} fill={C.line} />
                <rect x={x + 6} y={y + 68} width={48} height={10} rx={5} fill={C.accent} />
              </g>
            );
          })}
        </Window>
      </g>
      <g transform="translate(300 214)">
        <g className="ill-float" style={delay(-1)}>
          <rect x={-34} y={-34} width={68} height={68} rx={18} fill={C.white} />
          <rect x={0} y={-20} width={9} height={12} rx={2} fill={C.hot} />
          <rect x={11} y={-16} width={8} height={8} rx={2} fill={C.gold} />
          <path
            d="M-22 -16 H-14 L-6 12 H20 L26 -8 H-11"
            fill="none"
            stroke={C.accent}
            strokeWidth={4.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx={-3} cy={20} r={3.5} fill={C.accent} />
          <circle cx={17} cy={20} r={3.5} fill={C.accent} />
        </g>
      </g>
    </g>
  );
}

function School() {
  return (
    <g>
      <g className="ill-float-sm">
        <rect x={198.5} y={54} width={3} height={34} fill={C.frameDark} />
        <path className="ill-wave" d="M201.5 56 h28 l-6 7 l6 7 h-28 Z" fill={C.hot} />
        <path d="M96 136 L200 84 L304 136 Z" fill={C.block} />
        <rect x={100} y={132} width={200} height={10} rx={3} fill={C.block2} />
        <circle cx={200} cy={116} r={10} fill={C.frame} />
        <path d="M200 110 V116 H205" stroke={C.screen} strokeWidth={2} fill="none" strokeLinecap="round" />
        <rect x={110} y={142} width={180} height={88} fill={C.frame} />
        {[122, 152, 236, 266].map((x) => (
          <rect key={x} x={x} y={150} width={12} height={72} rx={3} fill={C.frameDark} />
        ))}
        <path d="M186 230 V194 a14 14 0 0 1 28 0 V230 Z" fill={C.accent} />
        <rect x={100} y={228} width={200} height={8} rx={2} fill={C.frameDark} />
        <rect x={90} y={236} width={220} height={8} rx={2} fill={C.blockLight} />
      </g>
      <g transform="translate(306 82)">
        <g className="ill-float" style={delay(-1.5)}>
          <path d="M-18 6 v12 c0 7 36 7 36 0 v-12 L0 14 Z" fill={C.accentDark} />
          <path d="M0 -14 L34 0 L0 14 L-34 0 Z" fill={C.accent} />
          <path d="M0 0 L26 6 V22" stroke={C.gold} strokeWidth={2.5} fill="none" />
          <circle cx={26} cy={24} r={3.5} fill={C.gold} />
        </g>
      </g>
    </g>
  );
}

function Game() {
  const X = (cx, cy, d) => (
    <g key={`x${cx}${cy}`}>
      {[
        [-12, -12, 12, 12],
        [12, -12, -12, 12],
      ].map(([a, b, c, e], k) => (
        <line
          key={k}
          className="ill-draw"
          style={delay(d + k * 0.15)}
          x1={cx + a}
          y1={cy + b}
          x2={cx + c}
          y2={cy + e}
          stroke={C.accentLight}
          strokeWidth={6}
          strokeLinecap="round"
          pathLength={1}
        />
      ))}
    </g>
  );
  const O = (cx, cy, d) => (
    <circle
      key={`o${cx}${cy}`}
      className="ill-draw"
      style={delay(d)}
      cx={cx}
      cy={cy}
      r={13}
      fill="none"
      stroke={C.hot}
      strokeWidth={6}
      pathLength={1}
    />
  );
  return (
    <g className="ill-float-sm">
      <rect x={122} y={62} width={156} height={156} rx={18} fill={C.screen} />
      {[174, 226].map((x) => (
        <line key={x} x1={x} y1={78} x2={x} y2={202} stroke={C.block2} strokeWidth={5} strokeLinecap="round" />
      ))}
      {[114, 166].map((y) => (
        <line key={y} x1={138} y1={y} x2={262} y2={y} stroke={C.block2} strokeWidth={5} strokeLinecap="round" />
      ))}
      {X(148, 88, 0)}
      {O(200, 88, 0.3)}
      {X(200, 140, 0.6)}
      {O(148, 192, 0.9)}
      {O(252, 140, 1.1)}
      {X(252, 192, 1.3)}
      <line
        className="ill-draw"
        style={delay(1.6)}
        x1={134}
        y1={74}
        x2={266}
        y2={206}
        stroke={C.gold}
        strokeWidth={4}
        strokeLinecap="round"
        pathLength={1}
      />
    </g>
  );
}

function Coin() {
  const star = Array.from({ length: 10 }, (_, k) => {
    const a = (-90 + k * 36) * (Math.PI / 180);
    const r = k % 2 ? 13 : 30;
    return `${(r * Math.cos(a)).toFixed(1)},${(r * Math.sin(a)).toFixed(1)}`;
  }).join(' ');
  return (
    <g>
      <g transform="translate(270 204)">
        <ellipse rx={28} ry={18} fill={C.goldDark} />
        <ellipse rx={21} ry={13} fill={C.gold} />
      </g>
      <g transform="translate(126 90)">
        <g className="ill-float" style={delay(-2)}>
          <circle r={17} fill={C.goldDark} />
          <circle r={13} fill={C.gold} />
        </g>
      </g>
      <g transform="translate(200 146)">
        <g className="ill-flip">
          <circle r={72} fill={C.goldDark} />
          <circle r={65} fill={C.gold} />
          <circle r={52} fill="none" stroke={C.goldDark} strokeWidth={4} strokeDasharray="2 7" />
          <polygon points={star} fill={C.goldDark} />
          <path d="M-42 -30 A56 56 0 0 1 8 -54" stroke={C.white} strokeOpacity={0.6} strokeWidth={6} fill="none" strokeLinecap="round" />
        </g>
      </g>
    </g>
  );
}

function Calculator() {
  return (
    <g>
      <g className="ill-float-sm">
        <rect x={136} y={48} width={112} height={204} rx={16} fill={C.frame} />
        <rect x={148} y={62} width={88} height={40} rx={8} fill={C.screen} />
        <rect x={186} y={72} width={40} height={8} rx={4} fill={C.accentLight} />
        <rect x={200} y={86} width={26} height={6} rx={3} fill={C.line} />
        {Array.from({ length: 16 }, (_, k) => {
          const r = Math.floor(k / 4);
          const c = k % 4;
          return (
            <rect
              key={k}
              className={k === 15 ? 'ill-pop' : undefined}
              x={148 + c * 22.5}
              y={112 + r * 33}
              width={18}
              height={27}
              rx={6}
              fill={c === 3 ? C.accent : r === 0 ? C.block2 : C.block}
            />
          );
        })}
      </g>
      <g className="ill-float" style={delay(-1.5)}>
        <rect x={246} y={88} width={86} height={62} rx={10} fill={C.white} />
        <rect x={256} y={98} width={30} height={5} rx={2.5} fill={C.frameDark} />
        <polyline
          className="ill-draw"
          points="256,138 274,124 288,130 304,110 320,102"
          fill="none"
          stroke={C.mint}
          strokeWidth={3.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
        />
      </g>
      <g className="ill-float" style={delay(-0.6)}>
        <rect x={72} y={150} width={58} height={46} rx={10} fill={C.white} />
        <text x={101} y={181} textAnchor="middle" fontSize={22} fontWeight={700} fill={C.accent} fontFamily="Poppins, sans-serif">
          %
        </text>
      </g>
    </g>
  );
}

function Weather() {
  return (
    <g>
      <g transform="translate(254 98)">
        <g className="ill-spin" style={{ animationDuration: '20s' }}>
          {Array.from({ length: 8 }, (_, i) => (
            <rect key={i} x={-3} y={-46} width={6} height={13} rx={3} fill={C.gold} transform={`rotate(${i * 45})`} />
          ))}
        </g>
        <circle r={28} fill={C.gold} />
        <circle r={20} fill="#fcd34d" />
      </g>
      <g className="ill-float-sm">
        <circle cx={172} cy={160} r={34} fill={C.white} />
        <circle cx={216} cy={146} r={40} fill={C.white} />
        <circle cx={254} cy={170} r={28} fill={C.white} />
        <circle cx={142} cy={178} r={22} fill={C.white} />
        <rect x={142} y={170} width={112} height={30} rx={15} fill={C.white} />
        <rect x={150} y={190} width={100} height={10} rx={5} fill={C.frameDark} />
      </g>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line
          key={i}
          className="ill-drop"
          style={delay(i * 0.23)}
          x1={154 + i * 19}
          y1={212}
          x2={150 + i * 19}
          y2={222}
          stroke={C.block2}
          strokeWidth={4}
          strokeLinecap="round"
        />
      ))}
      <g className="ill-float" style={delay(-1)}>
        <rect x={70} y={86} width={64} height={80} rx={10} fill={C.frame} />
        <text x={82} y={122} fontSize={20} fontWeight={700} fill={C.accent} fontFamily="Poppins, sans-serif">
          24°
        </text>
        <rect x={82} y={134} width={36} height={5} rx={2.5} fill={C.frameDark} />
        <rect x={82} y={146} width={26} height={5} rx={2.5} fill={C.frameDark} />
      </g>
    </g>
  );
}

function Node({ cx, cy, w, h, fill, d }) {
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <g className="ill-pop" style={delay(d)}>
        <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={8} fill={fill} />
        <circle cx={-w / 2 + 12} cy={0} r={7} fill={C.accentLight} />
        <rect x={-w / 2 + 24} y={-5} width={w - 34} height={4} rx={2} fill={C.white} opacity={0.9} />
        <rect x={-w / 2 + 24} y={2} width={(w - 34) * 0.6} height={4} rx={2} fill={C.white} opacity={0.55} />
      </g>
    </g>
  );
}

function Tree() {
  const links = [
    'M200 96 V118 H110 V140',
    'M200 96 V140',
    'M200 118 H290 V140',
    'M110 168 V186 H80 V207',
    'M110 186 H140 V207',
    'M290 168 V186 H260 V207',
    'M290 186 H320 V207',
  ];
  return (
    <g className="ill-float-sm">
      {links.map((d) => (
        <path key={d} className="ill-march" d={d} fill="none" stroke={C.blockLight} strokeWidth={2.5} strokeDasharray="4 8" />
      ))}
      <Node cx={200} cy={80} w={78} h={32} fill={C.accent} d={0} />
      {[110, 200, 290].map((cx, i) => (
        <Node key={cx} cx={cx} cy={154} w={66} h={28} fill={C.block2} d={0.4 + i * 0.3} />
      ))}
      {[80, 140, 260, 320].map((cx, i) => (
        <Node key={cx} cx={cx} cy={220} w={54} h={26} fill={C.block} d={1.2 + i * 0.25} />
      ))}
    </g>
  );
}

function Security() {
  return (
    <g>
      <g className="ill-float-sm">
        <rect x={84} y={78} width={190} height={128} rx={12} fill={C.frame} />
        <rect x={94} y={88} width={170} height={106} rx={6} fill={C.screen} />
        <path d="M166 206 h26 l6 22 h-38 Z" fill={C.frameDark} />
        <rect x={148} y={226} width={62} height={8} rx={4} fill={C.frameDark} />
        <circle cx={179} cy={116} r={12} fill={C.block2} />
        <rect x={134} y={138} width={90} height={18} rx={9} fill={C.screen2} stroke={C.block} />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <circle key={i} className="ill-blink" style={delay(i * 0.15)} cx={149 + i * 12} cy={147} r={3.2} fill={C.accentLight} />
        ))}
        <rect x={154} y={166} width={50} height={12} rx={6} fill={C.accent} />
      </g>
      <g transform="translate(288 160)">
        <g className="ill-float">
          <path d="M0 -62 L48 -44 V-6 C48 26 26 50 0 62 C-26 50 -48 26 -48 -6 V-44 Z" fill={C.accent} />
          <path d="M0 -50 L38 -36 V-6 C38 20 20 40 0 50 C-20 40 -38 20 -38 -6 V-36 Z" fill={C.accentLight} opacity={0.35} />
          <path d="M-12 -6 V-16 a12 12 0 0 1 24 0 V-6" stroke={C.white} strokeWidth={6} fill="none" />
          <rect x={-18} y={-8} width={36} height={30} rx={6} fill={C.white} />
          <circle cx={0} cy={4} r={4} fill={C.accent} />
          <rect x={-2} y={4} width={4} height={10} rx={2} fill={C.accent} />
        </g>
      </g>
    </g>
  );
}

function Portfolio() {
  return (
    <g>
      <g className="ill-float-sm">
        <Window x={84} y={70} w={232} h={170}>
          <rect x={98} y={102} width={84} height={124} rx={8} fill={C.block} />
          <circle cx={140} cy={136} r={22} fill={C.accentLight} />
          <circle cx={140} cy={130} r={8} fill={C.accentDark} />
          <path d="M126 152 a14 11 0 0 1 28 0 Z" fill={C.accentDark} />
          <rect x={112} y={168} width={56} height={7} rx={3.5} fill={C.white} />
          <rect x={118} y={180} width={44} height={5} rx={2.5} fill={C.blockLight} />
          {[124, 140, 156].map((cx, i) => (
            <circle key={cx} className="ill-pulse" style={delay(i * 0.4)} cx={cx} cy={202} r={5} fill={C.block2} />
          ))}
          <rect x={192} y={104} width={100} height={9} rx={4.5} fill={C.blockLight} />
          <rect x={192} y={120} width={80} height={5} rx={2.5} fill={C.line} />
          <rect x={192} y={130} width={90} height={5} rx={2.5} fill={C.line} opacity={0.6} />
          {[192, 222, 252].map((x, i) => (
            <rect key={x} x={x} y={144} width={26} height={10} rx={5} fill={C.accent} opacity={1 - i * 0.25} />
          ))}
          <rect x={192} y={162} width={48} height={36} rx={5} fill={C.block2} />
          <rect x={246} y={162} width={48} height={36} rx={5} fill={C.block2} />
          <rect x={192} y={206} width={100} height={5} rx={2.5} fill={C.line} opacity={0.6} />
        </Window>
      </g>
      <g transform="translate(316 200)">
        <g className="ill-float" style={delay(-1.2)}>
          <rect x={-34} y={-24} width={68} height={48} rx={12} fill={C.white} />
          <text x={0} y={8} textAnchor="middle" fontSize={22} fontWeight={700} fontFamily="ui-monospace, monospace" fill={C.accent}>
            {'</>'}
          </text>
        </g>
      </g>
    </g>
  );
}

export const SCENES = {
  browser: Browser,
  dashboard: Dashboard,
  phone: Phone,
  board: Board,
  document: Document,
  map: MapScene,
  store: Store,
  school: School,
  game: Game,
  coin: Coin,
  calculator: Calculator,
  weather: Weather,
  tree: Tree,
  security: Security,
  portfolio: Portfolio,
};

// Where the floating icon badge sits for each scene (null = scene is its own hero).
export const BADGE_POS = {
  browser: [318, 72],
  dashboard: [324, 70],
  phone: [272, 78],
  board: [334, 66],
  document: [100, 86],
  map: [104, 82],
  store: [318, 70],
  school: [96, 96],
  tree: [96, 76],
  calculator: [96, 96],
  portfolio: [90, 72],
  security: [90, 72],
  game: null,
  coin: null,
  weather: null,
};
