import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, matchPath, useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Autocomplete, Box, Breadcrumbs, IconButton, InputAdornment, Link, TextField, Toolbar, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { HEADER_HEIGHT } from '../theme';
import { resetFilters, selectListLabel, selectProjects, selectVisibleProjects, setSearch } from '../store/worksSlice';

const matches = (p, q) =>
  [p.title, p.name, p.category, p.description, ...p.tags].filter(Boolean).some((f) => f.toLowerCase().includes(q));

function PageTitle() {
  const { pathname } = useLocation();
  const listLabel = useSelector(selectListLabel);
  const projects = useSelector(selectProjects);
  const detail = matchPath('/project/:id', pathname);
  const sx = { fontSize: { xs: 15, md: 17 }, fontWeight: 600 };

  if (detail) {
    const project = projects.find((p) => p.id === detail.params.id);
    return (
      <Breadcrumbs separator={<ChevronRightRoundedIcon sx={{ fontSize: 18 }} />} sx={{ minWidth: 0, '& ol': { flexWrap: 'nowrap' } }}>
        <Link component={RouterLink} to="/" underline="hover" color="text.secondary" sx={{ ...sx, fontWeight: 500 }}>
          Dashboard
        </Link>
        <Typography noWrap sx={sx}>
          {project?.title}
        </Typography>
      </Breadcrumbs>
    );
  }
  return (
    <Typography noWrap sx={sx}>
      {pathname === '/projects' ? listLabel : 'Dashboard'}
    </Typography>
  );
}

/** Project search: pick a result to open it, or press Enter to see every match. */
function HeaderSearch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const visible = useSelector(selectVisibleProjects);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  // "/" focuses the search from anywhere on the page.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== '/' || e.target.closest?.('input, textarea')) return;
      e.preventDefault();
      inputRef.current?.focus();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const choose = (value) => {
    if (!value) return;
    if (typeof value === 'string') {
      if (!value.trim()) return;
      dispatch(resetFilters());
      dispatch(setSearch(value.trim()));
      navigate('/projects');
    } else {
      navigate(`/project/${value.id}`);
    }
    setInput('');
    inputRef.current?.blur();
  };

  return (
    <Autocomplete
      freeSolo
      options={visible}
      value={null}
      inputValue={input}
      onInputChange={(_, v, reason) => reason !== 'reset' && setInput(v)}
      onChange={(_, v) => choose(v)}
      getOptionLabel={(o) => (typeof o === 'string' ? o : o.title)}
      filterOptions={(opts, { inputValue }) => {
        const q = inputValue.trim().toLowerCase();
        return q ? opts.filter((p) => matches(p, q)).slice(0, 8) : [];
      }}
      noOptionsText="No matching projects"
      renderOption={({ key, ...props }, p) => (
        <Box component="li" key={key} {...props} sx={{ display: 'block !important', py: '8px !important' }}>
          <Typography noWrap sx={{ fontSize: 14, fontWeight: 500 }}>
            {p.title}
          </Typography>
          <Typography variant="caption" color="text.secondary" noWrap sx={{ display: 'block' }}>
            {p.category} · {p.tags.join(', ')}
          </Typography>
        </Box>
      )}
      sx={{ width: { xs: '100%', sm: 300, md: 360 } }}
      renderInput={(params) => (
        <TextField
          {...params}
          inputRef={inputRef}
          placeholder="Search projects…"
          size="small"
          slotProps={{
            ...params.slotProps,
            input: {
              ...params.slotProps.input,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon fontSize="small" />
                </InputAdornment>
              ),
              endAdornment: !input && (
                <Box
                  component="kbd"
                  sx={{ display: { xs: 'none', md: 'block' }, px: 0.75, fontSize: 11, fontFamily: 'inherit', color: 'text.secondary', border: 1, borderColor: 'divider', borderRadius: '5px' }}
                >
                  /
                </Box>
              ),
            },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              height: 40,
              borderRadius: '8px',
              bgcolor: 'background.default',
              pr: '10px !important',
              '& fieldset': { borderColor: 'divider' },
              '&.Mui-focused fieldset': { borderColor: 'primary.main', borderWidth: 1 },
              '&.Mui-focused': { boxShadow: (t) => `0 0 0 3px ${alpha(t.palette.primary.main, 0.15)}` },
            },
          }}
        />
      )}
    />
  );
}

/** Fixed top bar: menu button on small screens, page title, project search. */
export default function AppHeader({ onMenu }) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="inherit"
      sx={{ top: 0, bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}
    >
      <Toolbar sx={{ minHeight: `${HEADER_HEIGHT}px !important`, px: { xs: 2, sm: 3, md: 4 }, gap: { xs: 1, sm: 2 } }}>
        <IconButton edge="start" onClick={onMenu} aria-label="Open menu" sx={{ display: { md: 'none' } }}>
          <MenuRoundedIcon />
        </IconButton>
        <Box sx={{ flex: 1, minWidth: 0, display: { xs: 'none', sm: 'block' } }}>
          <PageTitle />
        </Box>
        <Box sx={{ flex: { xs: 1, sm: 'none' } }}>
          <HeaderSearch />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
