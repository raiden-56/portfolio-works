import { createSlice, createSelector } from '@reduxjs/toolkit';
import { FAVORITE_PROJECTS, PROJECTS } from '../data/projects';
import { DETAILS } from '../data/details';

export const SORTS = {
  newest: 'Newest first',
  oldest: 'Oldest first',
  az: 'Name A–Z',
  za: 'Name Z–A',
};

export const SOURCES = ['All sources', 'GitHub', 'Netlify Drop'];

const initialState = {
  projects: PROJECTS,
  search: '',
  category: 'All',
  source: 'All sources',
  sort: 'newest',
  favoritesOnly: false,
  caseStudiesOnly: false,
  favoriteIds: FAVORITE_PROJECTS,
  hiddenIds: [],
  hiddenDialogOpen: false,
  themeMode: 'light',
};

const toggleIn = (list, id) =>
  list.includes(id) ? list.filter((x) => x !== id) : [...list, id];

const worksSlice = createSlice({
  name: 'works',
  initialState,
  reducers: {
    setSearch: (s, a) => void (s.search = a.payload),
    setCategory: (s, a) => void (s.category = a.payload),
    setSource: (s, a) => void (s.source = a.payload),
    setSort: (s, a) => void (s.sort = a.payload),
    toggleFavoritesOnly: (s) => void (s.favoritesOnly = !s.favoritesOnly),
    setCaseStudiesOnly: (s, a) => void (s.caseStudiesOnly = a.payload),
    resetFilters: (s) => {
      s.search = '';
      s.category = 'All';
      s.source = 'All sources';
      s.favoritesOnly = false;
      s.caseStudiesOnly = false;
    },
    toggleFavorite: (s, a) => void (s.favoriteIds = toggleIn(s.favoriteIds, a.payload)),
    hideProject: (s, a) => {
      if (!s.hiddenIds.includes(a.payload)) s.hiddenIds.push(a.payload);
    },
    unhideProject: (s, a) => void (s.hiddenIds = s.hiddenIds.filter((x) => x !== a.payload)),
    unhideAll: (s) => void (s.hiddenIds = []),
    setHiddenDialogOpen: (s, a) => void (s.hiddenDialogOpen = a.payload),
    toggleTheme: (s) => void (s.themeMode = s.themeMode === 'light' ? 'dark' : 'light'),
  },
});

export const {
  setSearch,
  setCategory,
  setSource,
  setSort,
  toggleFavoritesOnly,
  setCaseStudiesOnly,
  resetFilters,
  toggleFavorite,
  hideProject,
  unhideProject,
  unhideAll,
  setHiddenDialogOpen,
  toggleTheme,
} = worksSlice.actions;

export default worksSlice.reducer;

// Selectors
const selectWorks = (state) => state.works;
export const selectProjects = (state) => state.works.projects;
export const selectHiddenIds = (state) => state.works.hiddenIds;
export const selectFavoriteIds = (state) => state.works.favoriteIds;

export const selectVisibleProjects = createSelector([selectProjects, selectHiddenIds], (all, hidden) =>
  all.filter((p) => !hidden.includes(p.id)),
);

export const selectHiddenProjects = createSelector([selectProjects, selectHiddenIds], (all, hidden) =>
  all.filter((p) => hidden.includes(p.id)),
);

export const selectFilteredProjects = createSelector(
  [selectVisibleProjects, selectWorks],
  (visible, { search, category, source, sort, favoritesOnly, caseStudiesOnly, favoriteIds }) => {
    const q = search.trim().toLowerCase();
    const list = visible.filter((p) => {
      if (category !== 'All' && p.category !== category) return false;
      if (source !== 'All sources' && p.source !== source) return false;
      if (favoritesOnly && !favoriteIds.includes(p.id)) return false;
      if (caseStudiesOnly && !DETAILS[p.id]) return false;
      if (!q) return true;
      return [p.title, p.name, p.description, p.category, p.framework, ...p.tags]
        .filter(Boolean)
        .some((field) => field.toLowerCase().includes(q));
    });
    const byName = (a, b) => a.title.localeCompare(b.title);
    const byDate = (a, b) => a.publishedAt.localeCompare(b.publishedAt);
    const sorters = {
      newest: (a, b) => byDate(b, a),
      oldest: byDate,
      az: byName,
      za: (a, b) => byName(b, a),
    };
    return [...list].sort(sorters[sort]);
  },
);

// Heading for the All projects page, from whichever filter is active.
export const selectListLabel = (state) => {
  const { search, category, favoritesOnly, caseStudiesOnly } = state.works;
  if (search.trim()) return `Results for “${search.trim()}”`;
  if (favoritesOnly) return 'Favourites';
  if (caseStudiesOnly) return category === 'All' ? 'Case studies' : `${category} · case studies`;
  if (category !== 'All') return category;
  return 'All projects';
};

export const selectCategoryCounts = createSelector([selectVisibleProjects], (visible) =>
  visible.reduce((acc, p) => ({ ...acc, [p.category]: (acc[p.category] || 0) + 1 }), {}),
);
