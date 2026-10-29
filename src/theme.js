import { createTheme, alpha } from '@mui/material/styles';

// Flat, neutral palette with a single indigo accent — no gradients or glows.
export const SIDEBAR_WIDTH = 256;
export const HEADER_HEIGHT = 64;

export function buildTheme(mode) {
  const dark = mode === 'dark';
  const ink = '#0f172a';
  const accent = dark ? '#818cf8' : '#4f46e5';

  return createTheme({
    palette: {
      mode,
      primary: { main: accent, light: dark ? '#a5b4fc' : '#6366f1', dark: '#4338ca', contrastText: '#ffffff' },
      secondary: { main: dark ? '#94a3b8' : '#475569' },
      background: {
        default: dark ? '#0b0f17' : '#f5f6f8',
        paper: dark ? '#111722' : '#ffffff',
      },
      text: {
        primary: dark ? '#e5e7eb' : ink,
        secondary: dark ? '#94a3b8' : '#64748b',
      },
      divider: dark ? alpha('#ffffff', 0.08) : alpha(ink, 0.08),
    },
    shape: { borderRadius: 8 },
    typography: {
      fontFamily: '"Poppins", system-ui, sans-serif',
      fontSize: 14,
      h1: { fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2 },
      h4: { fontWeight: 600, letterSpacing: '-0.015em' },
      h5: { fontWeight: 600, letterSpacing: '-0.01em' },
      h6: { fontWeight: 600, letterSpacing: '-0.01em' },
      subtitle1: { fontWeight: 500 },
      overline: { fontWeight: 600, letterSpacing: '0.12em', fontSize: 11 },
      button: { textTransform: 'none', fontWeight: 500 },
    },
    components: {
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: { root: { borderRadius: 8 } },
      },
      MuiFab: { styleOverrides: { root: { boxShadow: '0 4px 14px rgba(15,23,42,0.18)' } } },
      // No grey elevation overlay on dark surfaces (dialogs, menus)
      MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
      MuiChip: { styleOverrides: { root: { fontWeight: 500 } } },
      MuiTooltip: { defaultProps: { arrow: true } },
    },
  });
}
