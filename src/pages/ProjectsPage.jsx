import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  MenuItem,
  Pagination,
  Select,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ProjectGrid, { CardGrid } from '../components/ProjectGrid';
import { CATEGORIES } from '../data/projects';
import { DETAILS } from '../data/details';
import {
  resetFilters,
  selectCategoryCounts,
  selectFilteredProjects,
  selectListLabel,
  selectVisibleProjects,
  setCaseStudiesOnly,
  setCategory,
} from '../store/worksSlice';

const PAGE_SIZE = 12; // three rows of four

const control = { height: 36, fontSize: 13, bgcolor: 'background.paper' };

/** Every project, four to a row and paged, narrowed by category, favourites, case studies or the header search. */
export default function ProjectsPage() {
  const dispatch = useDispatch();
  const label = useSelector(selectListLabel);
  const { caseStudiesOnly, category, favoritesOnly, search } = useSelector((s) => s.works);
  const list = useSelector(selectFilteredProjects);
  const visible = useSelector(selectVisibleProjects);
  const counts = useSelector(selectCategoryCounts);
  const documented = visible.filter((p) => DETAILS[p.id]).length;
  const narrowed = category !== 'All' || favoritesOnly || caseStudiesOnly || search.trim();

  const [page, setPage] = useState(1);
  const pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  const current = Math.min(page, pages);

  // Any change of filter starts again from the first page.
  useEffect(() => {
    setPage(1);
  }, [category, favoritesOnly, caseStudiesOnly, search]);

  const goTo = (_, p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const from = (current - 1) * PAGE_SIZE;
  const shownOnPage = list.slice(from, from + PAGE_SIZE);

  return (
    <Box sx={{ pt: { xs: 2, md: 3 } }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        className="fade-up"
        sx={{ mb: 2, alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 1.5 }}
      >
        <Box sx={{ minWidth: 0 }}>
          <Typography variant="h6" component="h1" sx={{ fontSize: 17 }} noWrap>
            {label}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {list.length === 0
              ? 'No projects'
              : `Showing ${from + 1}–${from + shownOnPage.length} of ${list.length}${list.length < visible.length ? ` (${visible.length} in total)` : ''}`}
          </Typography>
        </Box>

        <Stack direction="row" sx={{ gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
          {narrowed && (
            <Button size="small" color="inherit" startIcon={<CloseRoundedIcon />} onClick={() => dispatch(resetFilters())} sx={{ color: 'text.secondary' }}>
              Clear
            </Button>
          )}
          <Select
            size="small"
            value={category}
            onChange={(e) => dispatch(setCategory(e.target.value))}
            inputProps={{ 'aria-label': 'Category' }}
            sx={{ ...control, minWidth: 170, '& .MuiSelect-select': { py: 0.75 } }}
          >
            <MenuItem value="All" sx={{ fontSize: 14 }}>
              All categories
            </MenuItem>
            {CATEGORIES.filter((c) => counts[c]).map((c) => (
              <MenuItem key={c} value={c} sx={{ fontSize: 14, justifyContent: 'space-between', gap: 3 }}>
                {c}
                <Box component="span" sx={{ color: 'text.secondary', fontSize: 12 }}>
                  {counts[c]}
                </Box>
              </MenuItem>
            ))}
          </Select>
          <ToggleButtonGroup
            exclusive
            size="small"
            value={caseStudiesOnly ? 'case' : 'all'}
            onChange={(_, v) => v && dispatch(setCaseStudiesOnly(v === 'case'))}
            aria-label="Show"
            sx={{
              ...control,
              '& .MuiToggleButton-root': { px: 1.5, gap: 0.75, fontSize: 13, textTransform: 'none', borderColor: 'divider' },
              '& .Mui-selected': { color: 'primary.main' },
            }}
          >
            <ToggleButton value="all">
              <GridViewRoundedIcon sx={{ fontSize: 17 }} />
              All
            </ToggleButton>
            <ToggleButton value="case">
              <MenuBookRoundedIcon sx={{ fontSize: 17 }} />
              Case studies
              <Box component="span" sx={{ fontWeight: 600 }}>
                {documented}
              </Box>
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>

      {list.length === 0 ? (
        <ProjectGrid />
      ) : (
        <CardGrid key={current} projects={shownOnPage} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} />
      )}

      {pages > 1 && (
        <Stack sx={{ mt: { xs: 3, md: 4 }, alignItems: 'center' }}>
          <Pagination
            count={pages}
            page={current}
            onChange={goTo}
            shape="rounded"
            color="primary"
            siblingCount={1}
            sx={{ '& .MuiPaginationItem-root': { fontWeight: 500 } }}
          />
        </Stack>
      )}
    </Box>
  );
}
