'use client';

import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { useState, useEffect } from 'react';
import { profileData } from '../data/aboutData';


const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="footer"
      role="contentinfo"
      aria-label="Site footer"
      sx={{
        py: { xs: 4, md: 6 },
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: { xs: 4, md: 2 },
            mb: 4,
            pb: 4,
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          {/* Brand / Name */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '1.25rem',
                mb: 0.5,
              }}
            >
              Ari Andika Febrian
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Junior Mobile Developer &amp; Fullstack Engineer
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box component="nav" aria-label="Footer navigation" sx={{ display: 'flex', gap: { xs: 2, md: 3 }, flexWrap: 'wrap' }}>
            {navLinks.map((link) => (
              <MuiLink
                key={link.id}
                component="button"
                onClick={() => scrollToSection(link.id)}
                underline="hover"
                color="text.secondary"
                variant="body2"
                aria-label={`Scroll to ${link.label} section`}
                sx={{
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.2s ease',
                  fontWeight: 500,
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {link.label}
              </MuiLink>
            ))}
          </Box>

          {/* Social Links */}
          <Box sx={{ display: 'flex', gap: { xs: 2, md: 3 } }} component="nav" aria-label="Social media links">
            <MuiLink
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color="text.secondary"
              variant="body2"
              aria-label="GitHub profile"
              sx={{
                fontWeight: 500,
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              GitHub
            </MuiLink>
            <MuiLink
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color="text.secondary"
              variant="body2"
              aria-label="LinkedIn profile"
              sx={{
                fontWeight: 500,
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              LinkedIn
            </MuiLink>
          </Box>
        </Box>

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            © {currentYear} Ari Andika Febrian. All rights reserved.
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Built with React, TypeScript &amp; Material-UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

