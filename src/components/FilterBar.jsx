import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  InputBase,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { CATEGORIES } from '../data/projects';
import {
  SORTS,
  SOURCES,
  selectCategoryCounts,
  setCategory,
  setSearch,
  setSort,
  setSource,
  toggleFavoritesOnly,
} from '../store/worksSlice';

const INLINE_CATEGORIES = 5;

const pill = (active) => ({
  flexShrink: 0,
  height: 38,
  px: 2,
  borderRadius: 999,
  border: 1,
  borderColor: active ? 'primary.main' : 'divider',
  bgcolor: active ? 'primary.main' : 'background.paper',
  color: active ? 'primary.contrastText' : 'text.primary',
  fontWeight: 500,
  fontSize: 14,
  whiteSpace: 'nowrap',
  boxShadow: active ? '0 6px 16px rgba(15,12,41,0.18)' : 'none',
  '&:hover': { bgcolor: active ? 'primary.main' : 'action.hover', borderColor: active ? 'primary.main' : 'text.secondary' },
});

export default function FilterBar() {
  const dispatch = useDispatch();
  const { search, category, source, sort, favoritesOnly } = useSelector((s) => s.works);
  const counts = useSelector(selectCategoryCounts);
  const [moreAnchor, setMoreAnchor] = useState(null);
  const [optionsAnchor, setOptionsAnchor] = useState(null);

  // Most-populated categories go inline; the rest live under "More".
  const ordered = useMemo(
    () => CATEGORIES.filter((c) => counts[c]).sort((a, b) => counts[b] - counts[a]),
    [counts],
  );
  const inline = ordered.slice(0, INLINE_CATEGORIES);
  const overflow = ordered.slice(INLINE_CATEGORIES);
  const overflowActive = overflow.includes(category);
  const optionsActive = source !== 'All sources' || favoritesOnly;

  const pick = (c) => {
    dispatch(setCategory(c));
    setMoreAnchor(null);
  };

  return (
    <Box
      role="toolbar"
      aria-label="Search and filter projects"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        mx: 'auto',
        width: 'fit-content',
        maxWidth: '100%',
        overflowX: 'auto',
        py: 1,
        px: 0.5,
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      <InputBase
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        placeholder="Search works…"
        slotProps={{ input: { 'aria-label': 'Search projects' } }}
        startAdornment={
          <InputAdornment position="start">
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        endAdornment={
          search && (
            <InputAdornment position="end">
              <IconButton size="small" onClick={() => dispatch(setSearch(''))} aria-label="Clear search">
                <CloseRoundedIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          )
        }
        sx={{
          flexShrink: 0,
          width: { xs: 190, md: 230 },
          height: 38,
          px: 1.5,
          borderRadius: 999,
          border: 1,
          borderColor: 'divider',
          bgcolor: 'background.paper',
          fontSize: 14,
          transition: 'border-color .2s, box-shadow .2s',
          '&.Mui-focused': { borderColor: 'secondary.main', boxShadow: '0 0 0 3px rgba(124,108,242,0.18)' },
        }}
      />

      <Divider orientation="vertical" flexItem sx={{ mx: 0.5, my: 0.5 }} />

      <Button sx={pill(category === 'All')} onClick={() => pick('All')}>
        All
      </Button>
      {inline.map((c) => (
        <Button key={c} sx={pill(category === c)} onClick={() => pick(c)}>
          {c}
        </Button>
      ))}
      {overflow.length > 0 && (
        <>
          <Button
            sx={pill(overflowActive)}
            endIcon={<KeyboardArrowDownRoundedIcon />}
            onClick={(e) => setMoreAnchor(e.currentTarget)}
            aria-haspopup="menu"
          >
            {overflowActive ? category : 'View more'}
          </Button>
          <Menu anchorEl={moreAnchor} open={Boolean(moreAnchor)} onClose={() => setMoreAnchor(null)}>
            {overflow.map((c) => (
              <MenuItem key={c} selected={category === c} onClick={() => pick(c)}>
                <ListItemText>{c}</ListItemText>
                <Box component="span" sx={{ ml: 3, color: 'text.secondary', fontSize: 13 }}>
                  {counts[c]}
                </Box>
              </MenuItem>
            ))}
          </Menu>
        </>
      )}

      <Divider orientation="vertical" flexItem sx={{ mx: 0.5, my: 0.5 }} />

      <Tooltip title="Sort & filter">
        <Button
          sx={pill(optionsActive)}
          startIcon={<TuneRoundedIcon fontSize="small" />}
          onClick={(e) => setOptionsAnchor(e.currentTarget)}
          aria-haspopup="menu"
        >
          {SORTS[sort]}
        </Button>
      </Tooltip>
      <Menu anchorEl={optionsAnchor} open={Boolean(optionsAnchor)} onClose={() => setOptionsAnchor(null)}>
        <ListSubheader sx={{ lineHeight: '32px' }}>Sort by</ListSubheader>
        {Object.entries(SORTS).map(([key, label]) => (
          <MenuItem key={key} onClick={() => dispatch(setSort(key))} dense>
            <ListItemIcon>{sort === key && <CheckRoundedIcon fontSize="small" />}</ListItemIcon>
            {label}
          </MenuItem>
        ))}
        <Divider />
        <ListSubheader sx={{ lineHeight: '32px' }}>Deployed from</ListSubheader>
        {SOURCES.map((s) => (
          <MenuItem key={s} onClick={() => dispatch(setSource(s))} dense>
            <ListItemIcon>{source === s && <CheckRoundedIcon fontSize="small" />}</ListItemIcon>
            {s}
          </MenuItem>
        ))}
        <Divider />
        <MenuItem onClick={() => dispatch(toggleFavoritesOnly())} dense>
          <ListItemIcon>
            <FavoriteRoundedIcon fontSize="small" sx={{ color: favoritesOnly ? '#e5484d' : 'text.disabled' }} />
          </ListItemIcon>
          Favourites only
        </MenuItem>
      </Menu>
    </Box>
  );
}
