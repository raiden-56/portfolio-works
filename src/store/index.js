import { configureStore } from '@reduxjs/toolkit';
import worksReducer from './worksSlice';
import { FAVORITE_PROJECTS } from '../data/projects';

const STORAGE_KEY = 'ganesh-works:prefs';
const PERSISTED = ['favoriteIds', 'hiddenIds', 'themeMode', 'sort'];
const VERSION = 4; // v3 made light the default theme; v4 seeded the starting favourites

function loadPrefs() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    // Theme saved before v3 was just the old default, so let the new default win.
    if ((saved.v ?? 0) < 3) delete saved.themeMode;
    // Before v4 there were no starting favourites — add them to whatever was saved.
    if ((saved.v ?? 0) < 4 && Array.isArray(saved.favoriteIds)) {
      saved.favoriteIds = [...new Set([...FAVORITE_PROJECTS, ...saved.favoriteIds])];
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
