import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Paper, Stack, Tooltip, Typography } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { selectVisibleProjects } from '../store/worksSlice';

// Chart colours, checked with the dataviz palette validator on both theme surfaces.
// Single-series marks use the indigo accent; the two-part split uses categorical slots 1 and 2.
export const MARK = { light: '#4f46e5', dark: '#6366f1' };
export const SPLIT = { light: ['#2a78d6', '#eb6834'], dark: ['#3987e5', '#d95926'] };

/** The last 12 calendar months (oldest first), each with the projects released in it. */
export function lastTwelveMonths(projects, now = new Date()) {
  return Array.from({ length: 12 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - 11 + i, 1);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    return {
      key,
      short: d.toLocaleDateString('en-IN', { month: 'short' }),
      long: d.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' }),
      year: d.getMonth() === 0 || i === 0 ? d.getFullYear() : null,
      items: projects.filter((p) => p.publishedAt.startsWith(key)),
    };
  });
}

/** "today", "yesterday", "5 days ago", "3 weeks ago", "2 months ago". */
export function timeAgo(iso, now = new Date()) {
  const days = Math.floor((now - new Date(`${iso}T00:00:00`)) / 86400000);
  if (days <= 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 14) return `${days} days ago`;
  if (days < 60) return `${Math.round(days / 7)} weeks ago`;
  return `${Math.round(days / 30)} months ago`;
}

// Visually hidden but read by screen readers. It wraps the table in a div because a
// table ignores a 1px height and would still stretch the page.
const srOnly = {
  position: 'absolute',
  width: '1px', // a bare 1 would mean 100% in MUI's sx
  height: '1px',
  m: '-1px',
  p: 0,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
  border: 0,
};

function ChartCard({ title, subtitle, children, sx }) {
  return (
    <Paper elevation={0} sx={{ position: 'relative', p: { xs: 2, md: 2.5 }, border: 1, borderColor: 'divider', borderRadius: '10px', minWidth: 0, ...sx }}>
      <Typography sx={{ fontWeight: 600, fontSize: 15 }}>{title}</Typography>
      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
        {subtitle}
      </Typography>
      {children}
    </Paper>
  );
}

/** Rounds a maximum up to a clean axis top (2, 4, 6, 8, 10, 15, 20…). */
const niceMax = (n) => [2, 4, 6, 8, 10, 15, 20, 30, 40, 50].find((s) => s >= n) ?? Math.ceil(n / 10) * 10;

function ReleasesChart({ projects, color }) {
  const months = lastTwelveMonths(projects);
  const total = months.reduce((n, m) => n + m.items.length, 0);
  const top = niceMax(Math.max(1, ...months.map((m) => m.items.length)));
  const peak = months.reduce((a, b) => (b.items.length > a.items.length ? b : a));
  const H = 168;

  return (
    <ChartCard title="Releases per month" subtitle={`${total} projects shipped in the last 12 months · busiest: ${peak.long}`}>
      <Box sx={{ display: 'flex', gap: 1 }}>
        {/* y-axis ticks */}
        <Box sx={{ position: 'relative', width: 18, height: H, flexShrink: 0 }} aria-hidden>
          {[top, top / 2, 0].map((t, i) => (
            <Typography
              key={t}
              variant="caption"
              color="text.secondary"
              sx={{ position: 'absolute', right: 0, top: (H * i) / 2 - 8, fontSize: 11, fontVariantNumeric: 'tabular-nums' }}
            >
              {t}
            </Typography>
          ))}
        </Box>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Box sx={{ position: 'relative', height: H }}>
            {[0, 0.5, 1].map((f) => (
              <Box key={f} aria-hidden sx={{ position: 'absolute', left: 0, right: 0, top: H * f, borderTop: 1, borderColor: 'divider' }} />
            ))}
            <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end' }}>
              {months.map((m, i) => (
                <Tooltip
                  key={m.key}
                  placement="top"
                  title={
                    <Box>
                      <Box sx={{ fontWeight: 600 }}>
                        {m.long} · {m.items.length} {m.items.length === 1 ? 'project' : 'projects'}
                      </Box>
                      {m.items.slice(0, 6).map((p) => (
                        <Box key={p.id}>{p.title}</Box>
                      ))}
                      {m.items.length > 6 && <Box>+{m.items.length - 6} more</Box>}
                    </Box>
                  }
                >
                  <Box
                    sx={{
                      flex: 1,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      cursor: 'default',
                      '&:hover .col': { filter: 'brightness(0.88)' },
                      '&:hover': { bgcolor: (t) => alpha(t.palette.text.primary, 0.03) },
                    }}
                  >
                    {m === peak && m.items.length > 0 && (
                      <Typography sx={{ fontSize: 11, fontWeight: 600, mb: 0.5, lineHeight: 1 }}>{m.items.length}</Typography>
                    )}
                    <Box
                      className="col grow-y"
                      style={{ animationDelay: `${0.1 + i * 0.03}s` }}
                      sx={{
                        width: 'min(24px, 60%)',
                        height: `${(m.items.length / top) * 100}%`,
                        minHeight: m.items.length ? 3 : 0,
                        bgcolor: color,
                        borderRadius: '4px 4px 0 0',
                      }}
                    />
                  </Box>
                </Tooltip>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: 'flex', mt: 0.75 }} aria-hidden>
            {months.map((m) => (
              <Box key={m.key} sx={{ flex: 1, textAlign: 'center', minWidth: 0 }}>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: 11, display: 'block', lineHeight: 1.3 }}>
                  {m.short}
                </Typography>
                <Typography variant="caption" color="text.disabled" sx={{ fontSize: 10, display: 'block', lineHeight: 1.2, minHeight: 12 }}>
                  {m.year ?? ''}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box sx={srOnly}>
        <table>
          <caption>Projects released per month</caption>
          <tbody>
            {months.map((m) => (
              <tr key={m.key}>
                <th scope="row">{m.long}</th>
                <td>{m.items.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </ChartCard>
  );
}

function LatestReleases({ projects, color }) {
  const navigate = useNavigate();
  const latest = [...projects].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, 5);

  return (
    <ChartCard title="Latest releases" subtitle="The five most recent launches">
      <Box component="ol" sx={{ listStyle: 'none', m: 0, p: 0 }}>
        {latest.map((p, i) => (
          <Box
            component="li"
            key={p.id}
            sx={{
              position: 'relative',
              pl: 3,
              pb: i === latest.length - 1 ? 0 : 1.5,
              '&::before': i < latest.length - 1 && {
                content: '""',
                position: 'absolute',
                left: 5,
                top: 16,
                bottom: 0,
                width: 2,
                bgcolor: 'divider',
              },
            }}
          >
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                left: 0,
                top: 4,
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: i === 0 ? color : 'background.paper',
                border: 2,
                borderColor: color,
                boxShadow: (t) => `0 0 0 2px ${t.palette.background.paper}`,
              }}
            />
            <Box
              component="button"
              onClick={() => navigate(`/project/${p.id}`)}
              sx={{
                all: 'unset',
                boxSizing: 'border-box',
                display: 'block',
                width: '100%',
                cursor: 'pointer',
                borderRadius: '6px',
                px: 1,
                py: 0.25,
                mx: -1,
                '&:hover, &:focus-visible': { bgcolor: 'action.hover' },
                '&:hover .title': { color: 'primary.main' },
              }}
            >
              <Stack direction="row" sx={{ justifyContent: 'space-between', gap: 1 }}>
                <Typography className="title" noWrap sx={{ fontSize: 13.5, fontWeight: 600, transition: 'color .2s' }}>
                  {p.title}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ flexShrink: 0 }}>
                  {timeAgo(p.publishedAt)}
                </Typography>
              </Stack>
              <Typography variant="caption" color="text.secondary" noWrap sx={{ display: 'block' }}>
                {p.category} · {p.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </ChartCard>
  );
}

/** Dashboard charts: release cadence and the latest launches, from the visible projects. */
export default function DashboardCharts() {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const projects = useSelector(selectVisibleProjects);
  const color = MARK[mode];

  return (
    <Box
      className="fade-up"
      style={{ animationDelay: '0.2s' }}
      sx={{
        mt: { xs: 2, md: 2.5 },
        display: 'grid',
        gap: { xs: 1.25, md: 2 },
        gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 2fr) minmax(0, 1fr)' },
      }}
    >
      <ReleasesChart projects={projects} color={color} />
      <LatestReleases projects={projects} color={color} />
    </Box>
  );
}
