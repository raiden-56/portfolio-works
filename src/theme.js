import { createTheme, alpha } from '@mui/material/styles';

export function buildTheme(mode) {
  const dark = mode === 'dark';
  const ink = '#17142e';
  const purple = dark ? '#8b5cf6' : '#7c3aed';

  return createTheme({
    palette: {
      mode,
      primary: { main: purple, light: '#a78bfa', dark: '#6d28d9', contrastText: '#ffffff' },
      secondary: { main: '#c084fc' },
      background: {
        default: dark ? '#0a0a12' : '#f7f6fc',
        paper: dark ? '#12121c' : '#ffffff',
      },
      text: {
        primary: dark ? '#f5f3ff' : ink,
        secondary: dark ? '#a29eba' : '#625d7a',
      },
      divider: dark ? alpha('#ffffff', 0.08) : alpha(ink, 0.09),
    },
    shape: { borderRadius: 10 },
    typography: {
      fontFamily: '"Poppins", system-ui, sans-serif',
      fontSize: 14,
      h1: { fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.15 },
      h4: { fontWeight: 600, letterSpacing: '-0.02em' },
      h5: { fontWeight: 600, letterSpacing: '-0.01em' },
      h6: { fontWeight: 600, letterSpacing: '-0.01em' },
      subtitle1: { fontWeight: 500 },
      overline: { fontWeight: 500, letterSpacing: '0.18em' },
      button: { textTransform: 'none', fontWeight: 500 },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 999 },
          containedPrimary: {
            boxShadow: `0 8px 20px -8px ${alpha(purple, 0.7)}`,
            '&:hover': { boxShadow: `0 10px 26px -8px ${alpha(purple, 0.85)}` },
          },
        },
      },
      // No grey elevation overlay on dark surfaces (dialogs, menus)
      MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
      MuiChip: { styleOverrides: { root: { fontWeight: 500 } } },
      MuiTooltip: { defaultProps: { arrow: true } },
    },
  });
}
