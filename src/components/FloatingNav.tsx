'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Tooltip,
  Zoom,
  Fab,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Work as WorkIcon,
  Email as MailIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';


// Navigation items configuration
const navItems = [
  { id: 'hero', icon: <HomeIcon /> },
  { id: 'about', icon: <PersonIcon /> },
  { id: 'projects', icon: <WorkIcon /> },
  { id: 'experience', icon: <WorkIcon /> },
  { id: 'contact', icon: <MailIcon /> },
];

// Desktop Navigation Component
const DesktopNav = ({
  activeSection,
  handleNavClick,
  navLabels,
}: {
  activeSection: string;
  handleNavClick: (sectionId: string) => void;
  navLabels: Record<string, string>;
}) => (
  <Box
    sx={{
      position: 'fixed',
      left: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1300,
      display: { xs: 'none', md: 'flex' },
      flexDirection: 'column',
      gap: 1.5,
    }}
    role="navigation"
    aria-label="Floating navigation"
  >
    {navItems.map((item) => {
      const isActive = activeSection === item.id;

      return (
        <Zoom key={item.id} in={true}>
          <Tooltip
            title={navLabels[item.id]}
            placement="right"
            arrow
            sx={{
              '& .MuiTooltip-tooltip': {
                bgcolor: 'background.paper',
                color: 'text.primary',
                borderRadius: '8px',
                px: 1.5,
                py: 0.5,
                fontSize: '0.75rem',
                fontWeight: 600,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              },
              '& .MuiTooltip-arrow': {
                color: 'background.paper',
              },
            }}
          >
            <div>
              <Box
                onClick={() => handleNavClick(item.id)}
                sx={{
                  width: 44,
                  height: 44,
                  position: 'relative',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '12px',
                  transition: 'all 0.2s ease',
                  backgroundColor: 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(99, 102, 241, 0.08)',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                {/* Active indicator dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: -6,
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    backgroundColor: isActive ? 'primary.main' : 'transparent',
                    transition: 'all 0.3s ease',
                  }}
                />

                {/* Icon */}
                <Box
                  className="nav-icon"
                  sx={{
                    color: isActive ? 'primary.main' : 'text.secondary',
                    transition: 'all 0.3s ease',
                    '& svg': {
                      fontSize: 22,
                    },
                  }}
                >
                  {item.icon}
                </Box>
              </Box>
            </div>
          </Tooltip>
        </Zoom>
      );
    })}
  </Box>
);

// Mobile Navigation Component
const MobileNav = ({
  activeSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  handleNavClick,
  navLabels,
}: {
  activeSection: string;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  handleNavClick: (sectionId: string) => void;
  navLabels: Record<string, string>;
}) => (
    <>
      {/* Floating Menu Button */}
      <Fab
        color="primary"
        aria-label="Open navigation menu"
        onClick={() => setIsMobileMenuOpen(true)}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1300,
          width: 56,
          height: 56,
          background: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)',
          boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)',
          '&:hover': {
            boxShadow: '0 12px 32px rgba(99, 102, 241, 0.5)',
            transform: 'scale(1.05)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        <MenuIcon sx={{ fontSize: 28 }} />
      </Fab>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            width: '75%',
            maxWidth: 300,
            bgcolor: 'background.paper',
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Box
            onClick={() => setIsMobileMenuOpen(false)}
            sx={{
              p: 1,
              cursor: 'pointer',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
            role="button"
            aria-label="Close navigation menu"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsMobileMenuOpen(false);
              }
            }}
          >
            <CloseIcon sx={{ color: 'text.secondary' }} />
          </Box>
        </Box>

        <Box sx={{ px: 2, pb: 3 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mb: 3,
              px: 1,
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 32,
                borderRadius: 4,
                background: 'linear-gradient(180deg, #6366f1 0%, #ec4899 100%)',
              }}
            />
            <Box
              component="span"
              sx={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'text.primary',
              }}
            >
              Navigation
            </Box>
          </Box>

<List component="nav" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <ListItem key={item.id} disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    onClick={() => handleNavClick(item.id)}
                    sx={{
                      borderRadius: '12px',
                      py: 1.5,
                      px: 2,
                      backgroundColor: isActive
                        ? 'rgba(99, 102, 241, 0.1)'
                        : 'transparent',
                      border: '1px solid',
                      borderColor: isActive ? 'primary.main' : 'divider',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(99, 102, 241, 0.08)',
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 44,
                        color: isActive ? 'primary.main' : 'text.secondary',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={navLabels[item.id]}
                      primaryTypographyProps={{
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? 'primary.main' : 'text.primary',
                        fontSize: '0.95rem',
                      }}
                    />
                    {/* Active indicator */}
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: isActive ? 'primary.main' : 'transparent',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          {/* Bottom decoration */}
          <Box
            sx={{
              mt: 4,
              pt: 3,
              borderTop: '1px solid',
              borderColor: 'divider',
              textAlign: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              {navItems.map((navItem, navIndex) => (
                <Box
                  key={navItem.id}
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor:
                      navIndex === navItems.findIndex((i) => i.id === activeSection)
                        ? 'primary.main'
                        : 'action.disabled',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );

const FloatingNav = () => {
  const navLabels = {
    hero: 'Home',
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
  };
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll handler to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <DesktopNav
        activeSection={activeSection}
        handleNavClick={handleNavClick}
        navLabels={navLabels}
      />
      <MobileNav
        activeSection={activeSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        handleNavClick={handleNavClick}
        navLabels={navLabels}
      />
    </>
  );
};

export default FloatingNav;

