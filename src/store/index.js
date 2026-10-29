import { configureStore } from '@reduxjs/toolkit';
import worksReducer from './worksSlice';
import { FAVORITE_PROJECTS } from '../data/projects';

const STORAGE_KEY = 'ganesh-works:prefs';
const PERSISTED = ['favoriteIds', 'hiddenIds', 'themeMode', 'sort'];
const VERSION = 5; // v3 light default theme; v4 seeded the starting favourites; v5 added HomeHub

// Favourites added in each storage version, merged into what a browser already saved.
const NEW_FAVORITES = { 4: FAVORITE_PROJECTS, 5: ['homehub'] };

function loadPrefs() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    // Theme saved before v3 was just the old default, so let the new default win.
    if ((saved.v ?? 0) < 3) delete saved.themeMode;
    // Add starting favourites introduced since this browser last saved.
    if (Array.isArray(saved.favoriteIds)) {
      const added = Object.entries(NEW_FAVORITES)
        .filter(([v]) => (saved.v ?? 0) < Number(v))
        .flatMap(([, ids]) => ids);
      saved.favoriteIds = [...new Set([...saved.favoriteIds, ...added])];
    }
    return saved;
  } catch {
    return {};
  }
}

const base = worksReducer(undefined, { type: '@@init' });
const saved = loadPrefs();

export const store = configureStore({
  reducer: { works: worksReducer },
  preloadedState: {
    works: {
      ...base,
      ...Object.fromEntries(PERSISTED.filter((k) => k in saved).map((k) => [k, saved[k]])),
    },
  },
});

// Hidden projects, favourites, theme and sort survive reloads.
let last;
store.subscribe(() => {
  const { works } = store.getState();
  const next = JSON.stringify({ v: VERSION, ...Object.fromEntries(PERSISTED.map((k) => [k, works[k]])) });
  if (next === last) return;
  last = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // storage unavailable (private mode) — preferences just won't persist
  }
});
