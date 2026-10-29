import { Box, Paper, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';

/** Rounded square holding an icon, tinted with the project's accent colour. */
export function IconTile({ icon: Icon, accent, size = 44 }) {
  return (
    <Box
      sx={{
        flexShrink: 0,
        width: size,
        height: size,
        borderRadius: '11px',
        display: 'grid',
        placeItems: 'center',
        color: accent,
        bgcolor: alpha(accent, 0.12),
        '& svg': { fontSize: size * 0.5 },
      }}
    >
      <Icon />
    </Box>
  );
}

export function SectionTitle({ overline, title, sub, accent }) {
  return (
    <Box sx={{ mb: { xs: 2, md: 2.5 } }}>
      {overline && (
        <Typography variant="overline" sx={{ display: 'block', lineHeight: 1.8, color: accent }}>
          {overline}
        </Typography>
      )}
      <Typography variant="h5" component="h2" sx={{ fontSize: { xs: 20, md: 24 } }}>
        {title}
      </Typography>
      {sub && (
        <Typography color="text.secondary" sx={{ mt: 0.75, maxWidth: 760, lineHeight: 1.7 }}>
          {sub}
        </Typography>
      )}
    </Box>
  );
}

/** A bordered card that lifts on hover. */
export function Card({ children, accent, sx, ...rest }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, md: 2.5 },
        border: 1,
        borderColor: 'divider',
        borderRadius: '10px',
        transition: 'border-color .25s, box-shadow .25s',
        '&:hover': accent && {
          borderColor: alpha(accent, 0.4),
          boxShadow: '0 8px 22px -14px rgba(15,23,42,0.3)',
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Paper>
  );
}

/** Wraps a screenshot (or any media) in a minimal browser window. */
export function BrowserFrame({ url, children, sx }) {
  return (
    <Box
      sx={{
        borderRadius: '12px',
        overflow: 'hidden',
        border: 1,
        borderColor: 'divider',
        bgcolor: '#0b0d14',
        boxShadow: '0 10px 30px -18px rgba(15,23,42,0.35)',
        ...sx,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, px: 1.5, height: 32, bgcolor: '#151823' }}>
        {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
          <Box key={c} sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: c }} />
        ))}
        {url && (
          <Typography
            noWrap
            sx={{
              ml: 1.5,
              px: 1.5,
              py: 0.25,
              flex: 1,
              maxWidth: 360,
              borderRadius: 999,
              bgcolor: 'rgba(255,255,255,0.06)',
              color: 'rgba(255,255,255,0.55)',
              fontSize: 11.5,
            }}
          >
            {url}
          </Typography>
        )}
      </Box>
      <Box sx={{ position: 'relative' }}>{children}</Box>
    </Box>
  );
}

/** Placeholder for tabs of projects that don't have a case study yet. */
export function ComingSoon({ project, accent, what }) {
  return (
    <Paper
      elevation={0}
      sx={{
        py: { xs: 6, md: 9 },
        px: 3,
        textAlign: 'center',
        border: 1,
        borderStyle: 'dashed',
        borderColor: 'divider',
        borderRadius: '12px',
      }}
    >
      <Box sx={{ display: 'inline-flex', mb: 1.5 }}>
        <IconTile icon={ConstructionRoundedIcon} accent={accent} size={56} />
      </Box>
      <Typography variant="h6">
        The &ldquo;{what}&rdquo; section for {project.title} is on its way
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 0.75, maxWidth: 480, mx: 'auto' }}>
        This project hasn&apos;t been documented yet. Meanwhile, open the live site to try it out.
      </Typography>
    </Paper>
  );
}
