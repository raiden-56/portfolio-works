import { configureStore } from '@reduxjs/toolkit';
import worksReducer from './worksSlice';

const STORAGE_KEY = 'ganesh-works:prefs';
const PERSISTED = ['favoriteIds', 'hiddenIds', 'themeMode', 'sort'];
const VERSION = 3; // v3 made light the default theme

function loadPrefs() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    // Theme saved before v3 was just the old default, so let the new default win.
    if (saved.v !== VERSION) delete saved.themeMode;
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
