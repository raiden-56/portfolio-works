import { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { buildTheme } from './theme';
import Sidebar from './components/Sidebar';
import AppHeader from './components/AppHeader';
import BackToTop from './components/BackToTop';
import { HiddenProjectsDialog, HideUndoSnackbar } from './components/HiddenProjects';
import DashboardPage from './pages/DashboardPage';
import ProjectsPage from './pages/ProjectsPage';

// The detail page (tabs, screenshots, case-study data) loads on first visit.
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));

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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <Sidebar mobileOpen={menuOpen} onClose={() => setMenuOpen(false)} />
          <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
            <AppHeader onMenu={() => setMenuOpen(true)} />
            <Box component="main" sx={{ flex: 1, width: '100%', maxWidth: 1680, mx: 'auto', px: { xs: 2, sm: 3, md: 4 }, pb: { xs: 3, md: 3 } }}>
              <Suspense fallback={null}>
                <Routes>
                  <Route path="/" element={<DashboardPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/project/:id" element={<ProjectDetailPage />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Suspense>
            </Box>
          </Box>
        </Box>
        <HiddenProjectsDialog />
        <HideUndoSnackbar />
        <BackToTop />
      </BrowserRouter>
    </ThemeProvider>
  );
}
