import { Box, Button, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import KeyboardRoundedIcon from '@mui/icons-material/KeyboardRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { Card, IconTile, SectionTitle } from './shared';

const stagger = (i, step = 0.05) => ({ className: 'fade-up', style: { animationDelay: `${i * step}s` } });

export function WhyTab({ details, accent }) {
  const { intro, points, audience } = details.why;
  return (
    <>
      <SectionTitle overline="Why this app" title="Why it exists — and why you'd need it" sub={intro} accent={accent} />
      <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))', xl: 'repeat(4, minmax(0, 1fr))' } }}>
        {points.map((p, i) => (
          <Card key={p.title} accent={accent} {...stagger(i)}>
            <IconTile icon={p.icon} accent={accent} />
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 1.75 }}>
              {p.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, lineHeight: 1.7 }}>
              {p.text}
            </Typography>
          </Card>
        ))}
      </Box>

      <Box sx={{ mt: { xs: 4, md: 5 } }}>
        <SectionTitle overline="Who it's for" title="Built for the people who plan spaces" accent={accent} />
        <Box sx={{ display: 'grid', gap: 1.5, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(4, minmax(0, 1fr))' } }}>
          {audience.map((a, i) => (
            <Box
              key={a.title}
              {...stagger(i + 4)}
              sx={{ p: 2, borderRadius: '10px', border: 1, borderColor: 'divider', borderLeft: 3, borderLeftColor: accent, bgcolor: 'background.paper' }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: 15 }}>{a.title}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, lineHeight: 1.6 }}>
                {a.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export function SolvesTab({ details, accent }) {
  return (
    <>
      <SectionTitle
        overline="What it solves"
        title="Real problems, and how the app answers them"
        sub="Every feature exists because something in the usual design workflow was slow, error-prone or hard to explain."
        accent={accent}
      />
      <Box sx={{ display: 'grid', gap: 1.5, gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, minmax(0, 1fr))' } }}>
        {details.solves.map((s, i) => (
          <Card key={s.problem} accent={accent} {...stagger(i, 0.04)} sx={{ p: 0, overflow: 'hidden' }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'minmax(0, 1fr) auto minmax(0, 1.25fr)' },
                alignItems: 'stretch',
                height: '100%',
              }}
            >
              <Stack direction="row" sx={{ p: 2, gap: 1.25, alignItems: 'flex-start' }}>
                <Box sx={{ mt: '2px', flexShrink: 0, width: 22, height: 22, borderRadius: '50%', display: 'grid', placeItems: 'center', bgcolor: alpha('#ef4444', 0.12), color: '#ef4444' }}>
                  <CloseRoundedIcon sx={{ fontSize: 14 }} />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: '#ef4444', fontWeight: 600, letterSpacing: '0.06em' }}>
                    PROBLEM
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: 1.55 }}>
                    {s.problem}
                  </Typography>
                </Box>
              </Stack>
              <Box sx={{ display: { xs: 'none', sm: 'grid' }, placeItems: 'center', color: 'text.disabled' }}>
                <ArrowForwardRoundedIcon fontSize="small" />
              </Box>
              <Stack
                direction="row"
                sx={{ p: 2, gap: 1.25, alignItems: 'flex-start', bgcolor: alpha('#10b981', 0.06), borderTop: { xs: 1, sm: 0 }, borderColor: 'divider' }}
              >
                <Box sx={{ mt: '2px', flexShrink: 0, width: 22, height: 22, borderRadius: '50%', display: 'grid', placeItems: 'center', bgcolor: alpha('#10b981', 0.15), color: '#10b981' }}>
                  <CheckRoundedIcon sx={{ fontSize: 14 }} />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: '#10b981', fontWeight: 600, letterSpacing: '0.06em' }}>
                    SOLUTION
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.55 }}>
                    {s.solution}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
}

export function FeaturesTab({ details, accent }) {
  return (
    <>
      <SectionTitle
        overline="Features"
        title={`${details.features.length} features in one studio`}
        sub="From the first wall to the client hand-over — everything runs in the browser."
        accent={accent}
      />
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))', xl: 'repeat(4, minmax(0, 1fr))' },
        }}
      >
        {details.features.map((f, i) => (
          <Card key={f.title} accent={accent} {...stagger(i, 0.035)}>
            <Stack direction="row" sx={{ gap: 1.5, alignItems: 'center' }}>
              <IconTile icon={f.icon} accent={accent} size={40} />
              <Typography sx={{ fontWeight: 600, fontSize: 15, lineHeight: 1.3 }}>{f.title}</Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25, lineHeight: 1.65 }}>
              {f.text}
            </Typography>
          </Card>
        ))}
      </Box>
    </>
  );
}

function Kbd({ children }) {
  return (
    <Box
      component="kbd"
      sx={{
        display: 'inline-block',
        minWidth: 24,
        px: 0.75,
        py: 0.25,
        textAlign: 'center',
        fontFamily: 'inherit',
        fontSize: 12,
        fontWeight: 600,
        borderRadius: '6px',
        border: 1,
        borderColor: 'divider',
        borderBottomWidth: 2,
        bgcolor: 'background.default',
      }}
    >
      {children}
    </Box>
  );
}

export function HowToTab({ details, accent }) {
  return (
    <Box sx={{ display: 'grid', gap: { xs: 3, md: 4 }, gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 1fr) 340px' }, alignItems: 'start' }}>
      <Box>
        <SectionTitle overline="How to use" title={`From sign-in to client hand-over in ${details.steps.length} steps`} accent={accent} />
        <Box component="ol" sx={{ listStyle: 'none', p: 0, m: 0, position: 'relative' }}>
          {details.steps.map((s, i) => (
            <Box
              component="li"
              key={s.title}
              {...stagger(i, 0.06)}
              sx={{
                position: 'relative',
                display: 'flex',
                gap: { xs: 1.75, md: 2.5 },
                pb: i === details.steps.length - 1 ? 0 : 2.5,
                '&::before': i < details.steps.length - 1 && {
                  content: '""',
                  position: 'absolute',
                  left: 21,
                  top: 46,
                  bottom: 4,
                  width: 2,
                  borderRadius: 2,
                  bgcolor: alpha(accent, 0.25),
                },
              }}
            >
              <Box
                sx={{
                  flexShrink: 0,
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  fontWeight: 600,
                  color: '#fff',
                  bgcolor: accent,
                }}
              >
                {i + 1}
              </Box>
              <Card accent={accent} sx={{ flex: 1, p: { xs: 1.75, md: 2 } }}>
                <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
                  <Box component={s.icon} sx={{ fontSize: 20, color: accent }} />
                  <Typography sx={{ fontWeight: 600 }}>{s.title}</Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75, lineHeight: 1.7 }}>
                  {s.text}
                </Typography>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>

      <Card sx={{ position: { lg: 'sticky' }, top: { lg: 136 } }}>
        <Stack direction="row" sx={{ alignItems: 'center', gap: 1, mb: 1.5 }}>
          <KeyboardRoundedIcon sx={{ color: accent }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Keyboard shortcuts
          </Typography>
        </Stack>
        {details.shortcuts.map((s) => (
          <Stack
            key={s.action}
            direction="row"
            sx={{ py: 0.9, justifyContent: 'space-between', alignItems: 'center', '&:not(:last-of-type)': { borderBottom: 1, borderColor: 'divider' } }}
          >
            <Typography variant="body2" color="text.secondary">
              {s.action}
            </Typography>
            <Stack direction="row" spacing={0.5}>
              {s.keys.map((k) => (
                <Kbd key={k}>{k}</Kbd>
              ))}
            </Stack>
          </Stack>
        ))}
        {details.manual && (
          <Button
            fullWidth
            variant="outlined"
            href={details.manual}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<OpenInNewRoundedIcon fontSize="small" />}
            sx={{ mt: 2, borderColor: alpha(accent, 0.5), color: accent, '&:hover': { borderColor: accent, bgcolor: alpha(accent, 0.06) } }}
          >
            Full user manual
          </Button>
        )}
      </Card>
    </Box>
  );
}
