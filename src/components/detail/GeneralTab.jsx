import { useState } from 'react';
import { Box, Chip, IconButton, Link, Stack, Tooltip, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ProjectMedia from '../ProjectMedia';
import CountUp from '../CountUp';
import { formatDate } from '../ProjectGrid';
import { BrowserFrame, Card, SectionTitle } from './shared';

function Fact({ label, children }) {
  return (
    <Stack
      direction="row"
      sx={{ py: 1.25, gap: 2, justifyContent: 'space-between', alignItems: 'center', '&:not(:last-of-type)': { borderBottom: 1, borderColor: 'divider' } }}
    >
      <Typography variant="body2" color="text.secondary" sx={{ flexShrink: 0 }}>
        {label}
      </Typography>
      <Box sx={{ minWidth: 0, textAlign: 'right', fontSize: 14, fontWeight: 500 }}>{children}</Box>
    </Stack>
  );
}

export default function GeneralTab({ project, details, accent }) {
  const [copied, setCopied] = useState(false);
  const host = project.url.replace('https://', '');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(project.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard blocked — nothing to do
    }
  };

  const linkSx = { color: accent, fontWeight: 500, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } };

  return (
    <Box sx={{ display: 'grid', gap: { xs: 2.5, md: 3 }, gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 1fr) 360px' }, alignItems: 'start' }}>
      <Box sx={{ minWidth: 0 }}>
        <BrowserFrame url={host}>
          {details?.cover ? (
            <Box
              component="img"
              src={details.cover}
              alt={`${project.title} — main screen`}
              sx={{ display: 'block', width: '100%', aspectRatio: '1440 / 770', objectFit: 'cover' }}
            />
          ) : (
            <ProjectMedia project={project} ratio="16 / 9" showActions={false} showVisit={false} />
          )}
        </BrowserFrame>

        <Box sx={{ mt: { xs: 3, md: 4 } }}>
          <SectionTitle overline="Overview" title={details?.product && !project.title.includes(details.product) ? `${project.title} · ${details.product}` : project.title} accent={accent} />
          {(details?.overview ?? [project.description]).map((p) => (
            <Typography key={p.slice(0, 24)} color="text.secondary" sx={{ lineHeight: 1.8, mb: 1.5, maxWidth: 860 }}>
              {p}
            </Typography>
          ))}
        </Box>

        {details?.architecture && (
          <Box sx={{ mt: { xs: 2, md: 3 } }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5 }}>
              Under the hood
            </Typography>
            <Box sx={{ display: 'grid', gap: 1.5, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' } }}>
              {details.architecture.map((a) => (
                <Card key={a.title} accent={accent} sx={{ p: { xs: 1.75, md: 2 } }}>
                  <Typography sx={{ fontFamily: 'ui-monospace, Consolas, monospace', fontSize: 13.5, fontWeight: 600, color: accent }}>
                    {a.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, lineHeight: 1.6 }}>
                    {a.text}
                  </Typography>
                </Card>
              ))}
            </Box>
          </Box>
        )}
      </Box>

      <Stack spacing={2} sx={{ position: { lg: 'sticky' }, top: { lg: 136 } }}>
        <Card>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
            At a glance
          </Typography>
          <Fact label="Live site">
            <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'flex-end', minWidth: 0 }}>
              <Link href={project.url} target="_blank" rel="noopener noreferrer" noWrap sx={linkSx}>
                {host}
              </Link>
              <Tooltip title={copied ? 'Copied!' : 'Copy link'}>
                <IconButton size="small" onClick={copy} aria-label="Copy link" sx={{ mr: -0.75 }}>
                  {copied ? <CheckRoundedIcon fontSize="inherit" /> : <ContentCopyRoundedIcon fontSize="inherit" />}
                </IconButton>
              </Tooltip>
            </Stack>
          </Fact>
          {project.repo && (
            <Fact label="Source code">
              <Link href={project.repo} target="_blank" rel="noopener noreferrer" noWrap sx={{ ...linkSx, display: 'block' }}>
                {project.repo.replace('https://github.com/', '')}
              </Link>
            </Fact>
          )}
          <Fact label="Released">{formatDate(project.publishedAt)}</Fact>
          <Fact label="Category">{project.category}</Fact>
          <Fact label="Deployed from">{project.source}</Fact>
        </Card>

        {details?.highlights && (
          <Box sx={{ display: 'grid', gap: 1.25, gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
            {details.highlights.map((h) => (
              <Card key={h.label} accent={accent} sx={{ p: 1.75, bgcolor: (t) => alpha(accent, t.palette.mode === 'dark' ? 0.08 : 0.04) }}>
                <Typography sx={{ fontSize: 26, fontWeight: 600, lineHeight: 1.1, color: accent }}>
                  <CountUp value={h.value} />
                  {h.suffix}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5, lineHeight: 1.35 }}>
                  {h.label}
                </Typography>
              </Card>
            ))}
          </Box>
        )}

        <Card>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.25 }}>
            {details?.stack ? 'Tech stack' : 'Tags'}
          </Typography>
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.75 }}>
            {(details?.stack ?? project.tags).map((t) => (
              <Chip
                key={t}
                label={t}
                size="small"
                sx={{ borderRadius: '6px', fontSize: 12.5, bgcolor: 'action.hover', color: 'text.primary' }}
              />
            ))}
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
}
