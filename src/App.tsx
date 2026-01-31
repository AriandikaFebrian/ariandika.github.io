import { Suspense, lazy } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, CircularProgress } from '@mui/material';
import theme from './theme';

// Lazy load sections to reduce initial bundle size
const HeroSection = lazy(() => import('./components/HeroSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const ExperienceSection = lazy(() => import('./components/ExperienceSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));
const FloatingNav = lazy(() => import('./components/FloatingNav'));
const BackgroundMascot = lazy(() => import('./components/BackgroundMascot'));

const LoadingFallback = () => (
  <Box
    sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8fafc',
    }}
  >
    <CircularProgress size={60} sx={{ color: '#6366f1' }} />
  </Box>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Lightweight background mascot - minimal performance impact */}
        <BackgroundMascot opacity={0.06} />

        <Suspense fallback={<LoadingFallback />}>
          {/* Main Content with proper landmark for accessibility */}
          <main id="main-content" role="main" aria-label="Main content">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating Navigation */}
          <FloatingNav />
        </Suspense>
      </Box>
    </ThemeProvider>
  );
}

export default App;

