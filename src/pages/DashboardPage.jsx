import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import FolderSpecialRoundedIcon from '@mui/icons-material/FolderSpecialRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import CountUp from '../components/CountUp';
import { CardGrid, formatDate } from '../components/ProjectGrid';
import { DETAILS } from '../data/details';
import { selectDashboardProjects, selectVisibleProjects } from '../store/worksSlice';

function Kpi({ icon: Icon, color, value, text, label, hint, index }) {
  return (
    <Paper
      elevation={0}
      className="fade-up"
      style={{ animationDelay: `${0.05 + index * 0.05}s` }}
      sx={{
        p: { xs: 1.75, md: 2.25 },
        border: 1,
        borderColor: 'divider',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        transition: 'border-color .25s, box-shadow .25s',
        '&:hover': { borderColor: alpha(color, 0.5), boxShadow: '0 6px 18px -10px rgba(15,23,42,0.25)' },
      }}
    >
      <Box
        sx={{
          display: { xs: 'none', sm: 'grid' },
          flexShrink: 0,
          width: 44,
          height: 44,
          borderRadius: '10px',
          placeItems: 'center',
          color,
          bgcolor: alpha(color, 0.1),
        }}
      >
        <Icon sx={{ fontSize: 22 }} />
      </Box>
      <Box sx={{ minWidth: 0 }}>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }} noWrap>
          {label}
        </Typography>
        <Typography sx={{ fontSize: { xs: 22, md: 26 }, fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.02em' }} noWrap>
          {text ?? <CountUp value={value} />}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }} noWrap>
          {hint}
        </Typography>
      </Box>
    </Paper>
  );
}

export default function DashboardPage() {
  const visible = useSelector(selectVisibleProjects);
  const recent = useSelector(selectDashboardProjects);

  const thisYear = String(new Date().getFullYear());
  const latest = [...visible].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))[0];

  const kpis = [
    {
      icon: FolderSpecialRoundedIcon,
      color: '#4f46e5',
      value: visible.length,
      label: 'Live projects',
      hint: `Across ${new Set(visible.map((p) => p.category)).size} categories`,
    },
    {
      icon: RocketLaunchRoundedIcon,
      color: '#059669',
      value: visible.filter((p) => p.publishedAt.startsWith(thisYear)).length,
      label: `Shipped in ${thisYear}`,
      hint: 'Released this year',
    },
    {
      icon: MenuBookRoundedIcon,
      color: '#0284c7',
      value: visible.filter((p) => DETAILS[p.id]).length,
      label: 'Case studies',
      hint: 'Full write-up and screenshots',
    },
    {
      icon: CalendarMonthRoundedIcon,
      color: '#db2777',
      text: latest ? formatDate(latest.publishedAt) : '—',
      label: 'Latest release',
      hint: latest?.title ?? 'Nothing yet',
    },
  ];

  return (
    <Box sx={{ pt: { xs: 2, md: 3 } }}>
      <Box
        sx={{
          display: 'grid',
          gap: { xs: 1.25, md: 2 },
          gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(4, minmax(0, 1fr))' },
        }}
      >
        {kpis.map((k, i) => (
          <Kpi key={k.label} index={i} {...k} />
        ))}
      </Box>

      <Stack
        direction="row"
        className="fade-up"
        style={{ animationDelay: '0.25s' }}
        sx={{ mt: { xs: 3, md: 4 }, mb: 2, alignItems: 'center', justifyContent: 'space-between', gap: 2 }}
      >
        <Typography variant="h6" component="h2" sx={{ fontSize: 17 }}>
          Recent projects
        </Typography>
        <Button
          component={RouterLink}
          to="/projects"
          size="small"
          endIcon={<ArrowForwardRoundedIcon />}
          sx={{ flexShrink: 0, '& .MuiButton-endIcon': { transition: 'transform .25s' }, '&:hover .MuiButton-endIcon': { transform: 'translateX(3px)' } }}
        >
          View all {visible.length}
        </Button>
      </Stack>

      {recent.length > 0 ? (
        <CardGrid projects={recent} columns={{ xs: 1, sm: 2, lg: 3 }} />
      ) : (
        <Paper elevation={0} sx={{ py: 7, textAlign: 'center', border: 1, borderStyle: 'dashed', borderColor: 'divider', borderRadius: '10px' }}>
          <FavoriteBorderRoundedIcon sx={{ fontSize: 36, color: 'text.secondary' }} />
          <Typography sx={{ mt: 1, fontWeight: 500 }}>No favourites yet</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            Tap the heart on any project to pin it here.
          </Typography>
        </Paper>
      )}
    </Box>
  );
}
