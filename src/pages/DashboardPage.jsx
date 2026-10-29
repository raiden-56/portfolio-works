import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Box, Button, Paper, Stack, Tooltip, Typography } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import FolderSpecialRoundedIcon from '@mui/icons-material/FolderSpecialRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import CountUp from '../components/CountUp';
import DashboardCharts, { MARK, SPLIT, lastTwelveMonths, timeAgo } from '../components/DashboardCharts';
import ProjectMedia from '../components/ProjectMedia';
import { formatDate } from '../components/ProjectGrid';
import { DETAILS } from '../data/details';
import { resetFilters, selectVisibleProjects, setCaseStudiesOnly } from '../store/worksSlice';

const GOOD = { light: '#047857', dark: '#34d399' };

// Flat dot pattern for the banner (an SVG tile, not a gradient).
const DOTS = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18'%3E%3Ccircle cx='2' cy='2' r='1.2' fill='%23ffffff' fill-opacity='0.16'/%3E%3C/svg%3E")`;

function Welcome({ projects, documented, categories }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newest = [...projects].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, 3);

  return (
    <Paper
      elevation={0}
      className="fade-up"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '12px',
        bgcolor: (t) => (t.palette.mode === 'dark' ? '#312e81' : '#4338ca'),
        backgroundImage: DOTS,
        color: '#fff',
        px: { xs: 2.5, md: 4 },
        py: { xs: 2.5, md: 3 },
        display: 'flex',
        alignItems: 'center',
        gap: 3,
      }}
    >
      <Box sx={{ flex: 1, minWidth: 0, position: 'relative', zIndex: 1 }}>
        <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
          Portfolio dashboard
        </Typography>
        <Typography component="h1" sx={{ fontSize: { xs: 21, md: 26 }, fontWeight: 600, lineHeight: 1.25, letterSpacing: '-0.02em' }}>
          Hi, I&apos;m Ganesh — here&apos;s everything I&apos;ve shipped.
        </Typography>
        <Typography sx={{ mt: 0.75, color: 'rgba(255,255,255,0.8)', fontSize: 14, maxWidth: 560 }}>
          {projects.length} live projects across {categories} categories, {documented} of them with an in-depth case study —
          the why, the features, a how-to and annotated screenshots.
        </Typography>
        <Stack direction="row" sx={{ mt: 2, gap: 1, flexWrap: 'wrap' }}>
          <Button
            component={RouterLink}
            to="/projects"
            onClick={() => dispatch(resetFilters())}
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{ bgcolor: '#fff', color: '#3730a3', px: 2, '&:hover': { bgcolor: '#eef2ff' } }}
          >
            Browse all projects
          </Button>
          <Button
            onClick={() => {
              dispatch(resetFilters());
              dispatch(setCaseStudiesOnly(true));
              navigate('/projects');
            }}
            startIcon={<MenuBookRoundedIcon />}
            sx={{ color: '#fff', px: 2, border: 1, borderColor: 'rgba(255,255,255,0.4)', '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.08)' } }}
          >
            Read case studies
          </Button>
        </Stack>
      </Box>

      {/* The three newest projects, fanned out; hover spreads them. */}
      <Box
        aria-label="Newest projects"
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'relative',
          width: 300,
          height: 130,
          flexShrink: 0,
          mr: { md: 2 },
          '& .fan': { transition: 'transform .45s cubic-bezier(.2,.8,.2,1)' },
          '&:hover .fan-0': { transform: 'translateX(-34px) rotate(-10deg)' },
          '&:hover .fan-2': { transform: 'translateX(34px) rotate(10deg)' },
        }}
      >
        {newest.map((p, i) => (
          <Tooltip key={p.id} title={`${p.title} · ${timeAgo(p.publishedAt)}`}>
            <Box
              component={RouterLink}
              to={`/project/${p.id}`}
              className={`fan fan-${i}`}
              sx={{
                position: 'absolute',
                top: i === 1 ? 0 : 14,
                left: 60 + (i - 1) * 70,
                width: 180,
                borderRadius: '8px',
                overflow: 'hidden',
                border: '3px solid #fff',
                boxShadow: '0 10px 24px -10px rgba(0,0,0,0.45)',
                zIndex: i === 1 ? 2 : 1,
                transform: `rotate(${(i - 1) * 7}deg)`,
                '&:hover': { zIndex: 3 },
              }}
            >
              <ProjectMedia project={p} showActions={false} showVisit={false} animate={false} />
            </Box>
          </Tooltip>
        ))}
      </Box>
    </Paper>
  );
}

function Ring({ value, total, color, size = 58 }) {
  const r = (size - 8) / 2;
  const c = 2 * Math.PI * r;
  const pct = total ? value / total : 0;
  return (
    <Box sx={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={`${Math.round(pct * 100)}%`}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={alpha(color, 0.15)} strokeWidth="7" />
        <circle
          className="ring-in"
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          style={{ '--ring-full': c }}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <Typography sx={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 600 }}>
        {Math.round(pct * 100)}%
      </Typography>
    </Box>
  );
}

function Delta({ children, mode }) {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.25,
        px: 0.75,
        py: 0.25,
        borderRadius: '6px',
        fontSize: 11.5,
        fontWeight: 600,
        whiteSpace: 'nowrap',
        color: GOOD[mode],
        bgcolor: alpha(GOOD[mode], 0.12),
      }}
    >
      <NorthEastRoundedIcon sx={{ fontSize: 13 }} />
      {children}
    </Box>
  );
}

/** A KPI tile: coloured top edge, icon + label, headline value, optional change badge and a small visual. */
function Kpi({ icon: Icon, color, label, value, text, delta, hint, visual, side, index, onClick, mode }) {
  return (
    <Paper
      elevation={0}
      className="fade-up"
      style={{ animationDelay: `${0.08 + index * 0.06}s` }}
      onClick={onClick}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        p: { xs: 1.75, md: 2 },
        pt: { xs: 2, md: 2.25 },
        border: 1,
        borderColor: 'divider',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform .25s, box-shadow .25s, border-color .25s',
        '&::before': { content: '""', position: 'absolute', left: 0, right: 0, top: 0, height: 3, bgcolor: color },
        '&:hover': { transform: 'translateY(-2px)', borderColor: alpha(color, 0.45), boxShadow: '0 12px 26px -16px rgba(15,23,42,0.35)' },
      }}
    >
      <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
        <Box sx={{ flexShrink: 0, width: 30, height: 30, borderRadius: '8px', display: 'grid', placeItems: 'center', color, bgcolor: alpha(color, 0.12) }}>
          <Icon sx={{ fontSize: 17 }} />
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500, flex: 1, minWidth: 0 }} noWrap>
          {label}
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ mt: 1.25, alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
        <Box sx={{ minWidth: 0 }}>
          <Typography sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em' }} noWrap>
            {text ?? <CountUp value={value} />}
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.25 }} noWrap>
            {hint}
          </Typography>
        </Box>
        {side ?? (delta && <Delta mode={mode}>{delta}</Delta>)}
      </Stack>
      {visual && <Box sx={{ mt: 'auto', pt: 1.5 }}>{visual}</Box>}
    </Paper>
  );
}

export default function DashboardPage() {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const visible = useSelector(selectVisibleProjects);

  const now = new Date();
  const thisYear = String(now.getFullYear());
  const lastYear = String(now.getFullYear() - 1);
  const months = lastTwelveMonths(visible, now);
  const thisMonth = months[months.length - 1].items.length;
  const latest = [...visible].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))[0];
  const github = visible.filter((p) => p.source === 'GitHub').length;
  const documented = visible.filter((p) => DETAILS[p.id]).length;
  const categories = new Set(visible.map((p) => p.category)).size;
  const shippedThisYear = visible.filter((p) => p.publishedAt.startsWith(thisYear)).length;
  const shippedLastYear = visible.filter((p) => p.publishedAt.startsWith(lastYear)).length;
  const [c1, c2] = SPLIT[mode];
  const accent = MARK[mode];
  const sparkMax = Math.max(1, ...months.map((m) => m.items.length));

  const kpis = [
    {
      icon: FolderSpecialRoundedIcon,
      color: '#4f46e5',
      label: 'Live projects',
      value: visible.length,
      delta: thisMonth ? `+${thisMonth} this month` : null,
      hint: `${categories} categories`,
      visual: (
        <Box>
          <Box sx={{ display: 'flex', gap: '2px', height: 8 }}>
            <Box className="grow-x" sx={{ width: `${(github / visible.length) * 100}%`, bgcolor: c1, borderRadius: '4px 0 0 4px' }} />
            <Box className="grow-x" sx={{ flex: 1, bgcolor: c2, borderRadius: '0 4px 4px 0' }} />
          </Box>
          <Stack direction="row" sx={{ mt: 0.75, gap: 1.5 }}>
            {[
              ['GitHub', github, c1],
              ['Netlify Drop', visible.length - github, c2],
            ].map(([l, n, c]) => (
              <Stack key={l} direction="row" sx={{ alignItems: 'center', gap: 0.5 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '2px', bgcolor: c }} />
                <Typography variant="caption" color="text.secondary">
                  {l} <b>{n}</b>
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      ),
    },
    {
      icon: RocketLaunchRoundedIcon,
      color: '#059669',
      label: `Shipped in ${thisYear}`,
      value: shippedThisYear,
      delta: shippedLastYear ? `+${shippedThisYear - shippedLastYear} vs ${lastYear}` : null,
      hint: 'Last 12 months',
      visual: (
        <Tooltip title={`${months.map((m) => `${m.short} ${m.items.length}`).join(' · ')}`}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: 34 }} role="img" aria-label="Monthly releases, last 12 months">
            {months.map((m, i) => (
              <Box
                key={m.key}
                className="grow-y"
                style={{ animationDelay: `${0.2 + i * 0.03}s` }}
                sx={{
                  flex: 1,
                  height: `${Math.max(6, (m.items.length / sparkMax) * 100)}%`,
                  borderRadius: '3px 3px 0 0',
                  bgcolor: i === months.length - 1 ? accent : alpha(accent, m.items.length ? 0.35 : 0.12),
                }}
              />
            ))}
          </Box>
        </Tooltip>
      ),
    },
    {
      icon: MenuBookRoundedIcon,
      color: '#0284c7',
      label: 'Case studies',
      value: documented,
      hint: `of ${visible.length} projects documented`,
      side: <Ring value={documented} total={visible.length} color={mode === 'dark' ? '#38bdf8' : '#0284c7'} />,
      onClick: () => {
        dispatch(resetFilters());
        dispatch(setCaseStudiesOnly(true));
        navigate('/projects');
      },
    },
    {
      icon: CalendarMonthRoundedIcon,
      color: '#db2777',
      label: 'Latest release',
      text: latest ? formatDate(latest.publishedAt).replace(/ \d{4}$/, '') : '—',
      hint: latest ? timeAgo(latest.publishedAt) : 'Nothing yet',
      visual: latest && (
        <Stack direction="row" sx={{ alignItems: 'center', gap: 1.25 }}>
          <Box sx={{ width: 64, flexShrink: 0, borderRadius: '6px', overflow: 'hidden', border: 1, borderColor: 'divider' }}>
            <ProjectMedia project={latest} showActions={false} showVisit={false} animate={false} />
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Typography noWrap sx={{ fontSize: 13, fontWeight: 600 }}>
              {latest.title}
            </Typography>
            <Typography variant="caption" color="text.secondary" noWrap sx={{ display: 'block' }}>
              {latest.category}
            </Typography>
          </Box>
        </Stack>
      ),
      onClick: latest ? () => navigate(`/project/${latest.id}`) : undefined,
    },
  ];

  return (
    <Box sx={{ pt: { xs: 2, md: 3 } }}>
      <Welcome projects={visible} documented={documented} categories={categories} />

      <Box
        sx={{
          mt: { xs: 1.5, md: 2 },
          display: 'grid',
          gap: { xs: 1.25, md: 2 },
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(4, minmax(0, 1fr))' },
        }}
      >
        {kpis.map((k, i) => (
          <Kpi key={k.label} index={i} mode={mode} {...k} />
        ))}
      </Box>

      <DashboardCharts />
    </Box>
  );
}
