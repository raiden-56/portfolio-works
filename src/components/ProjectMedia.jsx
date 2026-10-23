import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, IconButton, Tooltip } from '@mui/material';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import Illustration from '../illustrations/Illustration';
import { hideProject, selectFavoriteIds, toggleFavorite } from '../store/worksSlice';

const stop = (e) => e.stopPropagation();

/** Visit-site button shown at the bottom-right of a project image. */
export function VisitButton({ project, size = 'small', alwaysVisible = false }) {
  return (
    <Button
      className="visit-btn"
      component="a"
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={stop}
      size={size}
      variant="contained"
      endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 16 }} />}
      aria-label={`Open ${project.title} in a new tab`}
      sx={{
        position: 'absolute',
        right: 12,
        bottom: 12,
        opacity: alwaysVisible ? 1 : 0,
        transform: alwaysVisible ? 'none' : 'translateY(8px)',
        transition: 'opacity .25s, transform .25s, box-shadow .25s',
        '&:focus-visible': { opacity: 1, transform: 'none' },
      }}
    >
      Visit
    </Button>
  );
}

/** Favourite + hide buttons shown at the top-right of a project image on hover. */
function QuickActions({ project }) {
  const dispatch = useDispatch();
  const isFav = useSelector(selectFavoriteIds).includes(project.id);
  const btn = {
    width: 32,
    height: 32,
    bgcolor: 'rgba(18,18,28,0.72)',
    color: '#fff',
    backdropFilter: 'blur(6px)',
    '&:hover': { bgcolor: 'primary.main' },
  };
  return (
    <Box
      className="quick-actions"
      onClick={stop}
      sx={{
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 2,
        display: 'flex',
        gap: 0.75,
        opacity: isFav ? 1 : 0,
        transition: 'opacity .25s',
        '&:focus-within': { opacity: 1 },
      }}
    >
      <Tooltip title={isFav ? 'Remove from favourites' : 'Add to favourites'}>
        <IconButton size="small" sx={btn} onClick={() => dispatch(toggleFavorite(project.id))}>
          {isFav ? (
            <FavoriteRoundedIcon fontSize="small" sx={{ color: '#f472b6' }} />
          ) : (
            <FavoriteBorderRoundedIcon fontSize="small" />
          )}
        </IconButton>
      </Tooltip>
      <Tooltip title="Hide this project">
        <IconButton size="small" sx={btn} onClick={() => dispatch(hideProject(project.id))}>
          <VisibilityOffRoundedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

/**
 * Project artwork: the animated illustration by default, or the real site
 * screenshot with view="shot". Shows a visit button (bottom-right) and
 * favourite/hide quick actions (top-right) on hover.
 */
export default function ProjectMedia({
  project,
  ratio = '16 / 10',
  fill = false,
  view = 'art',
  animate = true,
  showActions = true,
  showVisit = true,
}) {
  const [failed, setFailed] = useState(false);
  const showShot = view === 'shot' && project.image && !failed;

  return (
    <Box
      sx={{
        position: 'relative',
        ...(fill ? { height: '100%' } : { aspectRatio: ratio }),
        overflow: 'hidden',
        '& .media-inner': { transition: 'transform .7s cubic-bezier(.2,.8,.2,1)' },
        '&:hover .media-inner': { transform: 'scale(1.04)' },
        '&:hover .visit-btn, &:hover .quick-actions': { opacity: 1, transform: 'none' },
      }}
    >
      <Box className="media-inner" sx={{ position: 'absolute', inset: 0 }}>
        {showShot ? (
          <Box
            component="img"
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            draggable={false}
            onError={() => setFailed(true)}
            sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
          />
        ) : (
          <Illustration project={project} animate={animate} />
        )}
      </Box>
      {showActions && <QuickActions project={project} />}
      {showVisit && (
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', '& > *': { pointerEvents: 'auto' } }}>
          <VisitButton project={project} />
        </Box>
      )}
    </Box>
  );
}
