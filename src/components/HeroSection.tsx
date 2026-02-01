'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CodeIcon from '@mui/icons-material/Code';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import profileImg from '../assets/image.jpg';

const codeSnippets = [
  'const developer = {',
  '  name: "Ari Andika",',
  '  skills: ["React Native", "React", ".NET"],',
  '  passion: "Building apps"',
  '};',
  '',
  'function buildApp() {',
  '  return quality * speed;',
  '}',
];

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Box
      id="hero"
      component="section"
      aria-label="Hero section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 4, md: 0 },
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Coding Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          fontFamily: 'monospace',
          fontSize: { xs: '0.6rem', md: '0.75rem' },
          color: '#6366f1',
          overflow: 'hidden',
          pointerEvents: 'none',
          p: 3,
          lineHeight: 1.8,
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-all',
        }}
      >
        {Array(3).fill(0).map((_, row) => (
          <Box key={row} sx={{ display: 'flex', mb: 0.5 }}>
            {codeSnippets.map((code, i) => (
              <Box key={i} sx={{
                mr: { xs: 4, md: 8 },
                opacity: 0.3 + (Math.random() * 0.7),
              }}>
                {code}
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      {/* Static Code Decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          opacity: 0.03,
          fontFamily: 'monospace',
          fontSize: '0.7rem',
          color: '#6366f1',
          whiteSpace: 'pre',
        }}
      >
{'<ReactNative>\n  <Components />\n  <StateManagement />\n  <APIs />\n</ReactNative>'}
      </Box>

      {/* Glowing orbs */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '-10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      {/* Code Brackets Decoration */}
      <Box
        sx={{
          position: 'absolute',
          left: { xs: 20, md: 50 },
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: { xs: 100, md: 200 },
          fontFamily: 'monospace',
          color: '#6366f1',
          opacity: 0.03,
          pointerEvents: 'none',
          fontWeight: 300,
        }}
      >
        {'{'}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          right: { xs: 20, md: 50 },
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: { xs: 100, md: 200 },
          fontFamily: 'monospace',
          color: '#ec4899',
          opacity: 0.03,
          pointerEvents: 'none',
          fontWeight: 300,
        }}
      >
        {'}'}
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              gap: { xs: 6, lg: 8 },
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: '100vh',
              py: { xs: 4, md: 0 },
            }}
          >
            {/* Left Content */}
            <Box sx={{ flex: { xs: '0 1 100%', lg: '0 1 52%' } }}>
              <motion.div variants={itemVariants}>
                <Typography
                  sx={{
                    color: 'primary.main',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                    mb: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <span aria-hidden="true"><CodeIcon sx={{ fontSize: 16 }} /></span>
                  Welcome to my portfolio
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                    fontWeight: 800,
                    color: 'text.primary',
                    mb: 1.5,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Ari Andika Febrian
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  component="h2"
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                    color: '#6366f1',
                    fontWeight: 700,
                    mb: 1.5,
                    background: 'linear-gradient(90deg, #6366f1 0%, #ec4899 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Junior Fullstack &amp; Mobile Developer (React Native • .NET)
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 2,
                    lineHeight: 1.8,
                    fontSize: { xs: '0.95rem', md: '1.05rem' },
                    maxWidth: '500px',
                  }}
                >
                  Hands-on experience building React Native client apps and enterprise dashboards at PT United Tractors Tbk.
                  Currently developing production-ready education mobile app (targeting ~500 users upon rollout).
                  Available for Junior Fullstack/Mobile roles in Jakarta or remote.
                </Typography>
              </motion.div>

              {/* Differentiator */}
              <motion.div variants={itemVariants}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#10b981',
                      fontWeight: 600,
                      mb: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      fontSize: { xs: '0.85rem', md: '0.9rem' },
                    }}
                  >
                    <BusinessIcon sx={{ fontSize: 18 }} />
                    Experience in enterprise systems at PT United Tractors
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#10b981',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      fontSize: { xs: '0.85rem', md: '0.9rem' },
                    }}
                  >
                    <GroupIcon sx={{ fontSize: 18 }} />
                    Currently developing production-ready education mobile app (targeting ~500 users upon rollout)
                  </Typography>
                </Box>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<EmailIcon aria-hidden="true" />}
                      aria-label="Contact me via email"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      sx={{
                        textTransform: 'none',
                        fontSize: '1rem',
                        fontWeight: 600,
                        px: 3,
                        py: 1.5,
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)',
                        boxShadow: '0 8px 20px rgba(99, 102, 241, 0.3)',
                        '&:hover': {
                          boxShadow: '0 12px 28px rgba(99, 102, 241, 0.4)',
                        },
                      }}
                    >
                      Contact Me
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<VisibilityIcon aria-hidden="true" />}
                      aria-label="View my projects"
                      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                      sx={{
                        textTransform: 'none',
                        fontSize: '1rem',
                        fontWeight: 600,
                        px: 3,
                        py: 1.5,
                        borderRadius: '10px',
                        borderColor: '#6366f1',
                        color: '#6366f1',
                        '&:hover': {
                          backgroundColor: 'rgba(99, 102, 241, 0.05)',
                          borderColor: '#6366f1',
                        },
                      }}
                    >
                      View Projects
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<DownloadIcon aria-hidden="true" />}
                      aria-label="Download my CV"
                      href="/CV_AriAndika.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        textTransform: 'none',
                        fontSize: '1rem',
                        fontWeight: 600,
                        px: 3,
                        py: 1.5,
                        borderRadius: '10px',
                        borderColor: '#10b981',
                        color: '#10b981',
                        '&:hover': {
                          backgroundColor: 'rgba(16, 185, 129, 0.05)',
                          borderColor: '#10b981',
                        },
                      }}
                    >
                      Download CV
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            </Box>

            {/* Right - Enhanced Profile Picture */}
            <Box
              sx={{
                flex: { xs: '0 1 100%', lg: '0 1 40%' },
                display: 'flex',
                justifyContent: { xs: 'center', lg: 'flex-end' },
                position: 'relative',
              }}
            >
              {/* Static Glowing Background */}
              <Box
                sx={{
                  position: 'absolute',
                  width: { xs: 280, sm: 320, md: 380 },
                  height: { xs: 280, sm: 320, md: 380 },
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(236, 72, 153, 0.25) 100%)',
                  filter: 'blur(40px)',
                }}
              />

              {/* Profile Container */}
              <motion.div
                variants={imageVariants}
              >
                <Box
                  sx={{
                    width: { xs: 240, sm: 280, md: 350 },
                    height: { xs: 240, sm: 280, md: 350 },
                    borderRadius: '24px',
                    background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                    padding: '4px',
                    position: 'relative',
                    boxShadow: '0 25px 50px rgba(99, 102, 241, 0.4)',
                  }}
                >
                  {/* Inner Glow */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '24px',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)',
                      zIndex: 1,
                    }}
                  />
                  
                  {/* Profile Image */}
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      position: 'relative',
                      background: '#1e293b',
                    }}
                  >
                    <img 
                      src={profileImg} 
                      alt="Ari Andika Febrian - Junior Mobile Developer"
                      loading="lazy"
                      width="350"
                      height="350"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    
                    {/* Overlay gradient */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '50%',
                        background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, transparent 100%)',
                      }}
                    />
                  </Box>

                  {/* Floating Badge */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -10,
                      right: -10,
                      background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                      borderRadius: '12px',
                      px: 2,
                      py: 1,
                      boxShadow: '0 8px 20px rgba(99, 102, 241, 0.4)',
                    }}
                    role="status"
                    aria-label="Availability status"
                  >
                    <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: 'white' }}>
                      Available for Work
                    </Typography>
                  </Box>
                </Box>
              </motion.div>

              {/* Decorative Elements */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 20,
                  right: -20,
                  width: 60,
                  height: 60,
                  borderRadius: '12px',
                  background: 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-hidden="true"
              >
                <CodeIcon sx={{ color: '#6366f1', fontSize: 28 }} />
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              color: '#6366f1',
            }}
            role="status"
            aria-label="Scroll indicator"
          >
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
              Scroll
            </Typography>
            <ArrowDownwardIcon sx={{ fontSize: 20 }} aria-hidden="true" />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;

