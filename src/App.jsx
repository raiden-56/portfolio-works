import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { buildTheme } from './theme';
import NavBar from './components/NavBar';
import BackToTop from './components/BackToTop';
import ProjectModal from './components/ProjectModal';
import { HiddenProjectsDialog, HideUndoSnackbar } from './components/HiddenProjects';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const mode = useSelector((s) => s.works.themeMode);
  const theme = useMemo(() => buildTheme(mode), [mode]);
  const dark = mode === 'dark';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        {/* Slowly drifting purple glows behind everything */}
        <Box aria-hidden sx={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          {[
            { top: '-18%', left: '8%', size: 560, color: dark ? 'rgba(139,92,246,0.22)' : 'rgba(139,92,246,0.14)', d: '0s' },
            { top: '30%', left: '70%', size: 480, color: dark ? 'rgba(192,132,252,0.14)' : 'rgba(192,132,252,0.12)', d: '-7s' },
          ].map((o) => (
            <Box
              key={o.left}
              sx={{
                position: 'absolute',
                top: o.top,
                left: o.left,
                width: o.size,
                height: o.size,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${o.color}, transparent 68%)`,
                animation: 'orb-drift 18s ease-in-out infinite',
                animationDelay: o.d,
              }}
            />
          ))}
        </Box>
        <Box sx={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <NavBar />
          <Container component="main" maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 6 }, pb: 6, flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Container>
          <Typography
            component="footer"
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: 'center', py: 3, borderTop: 1, borderColor: 'divider' }}
          >
            © {new Date().getFullYear()} Ganesh Mesta · All projects hosted on Netlify
          </Typography>
        </Box>
        <ProjectModal />
        <HiddenProjectsDialog />
        <HideUndoSnackbar />
        <BackToTop />
      </BrowserRouter>
    </ThemeProvider>
  );
}
