import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DescriptionIcon from '@mui/icons-material/Description';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { projectsData } from '../data/projectsData';
import type { Project } from '../data/projectsData';
import { useState, useRef } from 'react';
import { OrangeMonster } from './Monsters';


const ProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const [showAll, setShowAll] = useState(false);
  const expandedSectionRef = useRef<HTMLDivElement>(null);

  const featuredProjects = projectsData.filter((project: Project) => project.featured);
  const nonFeaturedProjects = projectsData.filter((project: Project) => !project.featured);

  const handleToggleShowAll = () => {
    const newShowAll = !showAll;
    setShowAll(newShowAll);

    // Scroll to expanded section when opening
    if (newShowAll && expandedSectionRef.current) {
      setTimeout(() => {
        expandedSectionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  };

  return (
    <Box
      id="projects"
      component="section"
      aria-labelledby="projects-heading"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background shapes */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Cute Monster - Top Left Corner */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '10%', md: '8%' },
          left: { xs: '3%', md: '2%' },
          zIndex: 0,
          opacity: 0.75,
          display: { xs: 'none', md: 'flex' },
        }}
        aria-hidden="true"
      >
        <OrangeMonster size={95} animationClass="monster-bounce-2" />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                sx={{
                  color: 'primary.main',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  mb: 1.5,
                }}
              >
                Featured Work
              </Typography>
              <Typography
                id="projects-heading"
                component="h2"
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '2.8rem' },
                  fontWeight: 800,
                  color: 'text.primary',
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                {showAll ? 'All My Projects' : 'My Best Projects'}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.05rem',
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.7,
                }}
              >
                {showAll
                  ? 'Complete portfolio showcasing all my work in mobile development, fullstack applications, and innovative solutions'
                  : 'Showcase of my finest work in mobile development, fullstack applications, and innovative solutions'}
              </Typography>
            </Box>
          </motion.div>

          {/* Featured Projects */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 6, md: 8 } }} role="list" aria-label="Featured projects">
            {featuredProjects.map((project: Project, idx: number) => {
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  variants={itemVariants}
                  role="listitem"
                >
                  <ProjectCard project={project} idx={idx} isLeft={isLeft} />
                </motion.div>
              );
            })}
          </Box>

          {/* Show More / Show Less Button */}
          {nonFeaturedProjects.length > 0 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outlined"
                  size="large"
                  endIcon={showAll ? <ExpandLessIcon aria-hidden="true" /> : <ExpandMoreIcon aria-hidden="true" />}
                  onClick={handleToggleShowAll}
                  aria-expanded={showAll}
                  aria-controls="all-projects-section"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 700,
                    fontSize: '1rem',
                    py: 1.5,
                    px: 4,
                    borderRadius: '12px',
                    borderColor: '#6366f1',
                    color: '#6366f1',
                    '&:hover': {
                      backgroundColor: 'rgba(99, 102, 241, 0.1)',
                      borderColor: '#6366f1',
                    },
                  }}
                >
                  {showAll ? 'Show Less' : `Show More (+${nonFeaturedProjects.length} Projects)`}
                </Button>
              </motion.div>
            </Box>
          )}

          {/* All Projects (Expanded View) */}
          <AnimatePresence>
            {showAll && (
              <motion.div
                ref={expandedSectionRef}
                id="all-projects-section"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                role="list"
                aria-label="All projects"
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 6, md: 8 },
                    mt: 6,
                    pt: 6,
                    borderTop: '1px solid rgba(99, 102, 241, 0.2)',
                  }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      component="h3"
                      variant="h4"
                      sx={{
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        fontWeight: 800,
                        color: 'text.primary',
                        mb: 1,
                      }}
                    >
                      All My Projects
                    </Typography>
                  </Box>
                  {nonFeaturedProjects.map((project: Project, idx: number) => {
                    const isLeft = (featuredProjects.length + idx) % 2 === 0;

                    return (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        role="listitem"
                      >
                        <ProjectCard project={project} idx={featuredProjects.length + idx} isLeft={isLeft} />
                      </motion.div>
                    );
                  })}
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Container>
    </Box>
  );
};

// Project Card Component
const ProjectCard = ({ project, idx, isLeft }: { project: Project; idx: number; isLeft: boolean }) => {
  const isPortrait = project.orientation === 'portrait';
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: isLeft ? 'row' : 'row-reverse' },
        gap: { xs: 3, md: 6 },
        alignItems: 'center',
      }}
    >
      {/* Image */}
      <Box
        sx={{
          flex: { xs: '0 1 100%', md: isPortrait ? '0 1 auto' : '0 1 50%' },
          position: 'relative',
          width: { xs: '100%', md: isPortrait ? 'auto' : '50%' },
          maxWidth: { md: isPortrait ? '280px' : 'none' },
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '16px',
              boxShadow: '0 12px 32px rgba(99, 102, 241, 0.15)',
              backgroundColor: '#f1f5f9',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              height: isPortrait ? 'auto' : undefined,
              aspectRatio: isPortrait ? undefined : '16 / 9',
              '&:hover': {
                boxShadow: '0 16px 40px rgba(99, 102, 241, 0.25)',
                transform: 'translateY(-4px)',
              },
              '&:hover .project-overlay': {
                opacity: 1,
              },
            }}
          >
            <img
              src={project.image}
              alt={`${project.title} - ${project.category} project`}
              loading="lazy"
              style={{
                width: isPortrait ? '100%' : '100%',
                height: isPortrait ? 'auto' : '100%',
                maxHeight: isPortrait ? '500px' : 'none',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </Box>
        </motion.div>
      </Box>

      {/* Content */}
      <Box sx={{ flex: { xs: '0 1 100%', md: '0 1 50%' } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Project Number */}
          <Typography
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: 2,
              textTransform: 'uppercase',
              mb: 1,
            }}
          >
            Project {String(idx + 1).padStart(2, '0')}
          </Typography>

          {/* Title */}
          <Typography
            component="h4"
            variant="h4"
            sx={{
              fontSize: { xs: '1.5rem', md: '1.75rem' },
              fontWeight: 800,
              color: 'text.primary',
              mb: 1.5,
              lineHeight: 1.3,
            }}
          >
            {project.title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: '1rem',
              lineHeight: 1.7,
              mb: 2,
            }}
          >
            {project.description}
          </Typography>

          {/* Tech Stack */}
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'text.primary',
                textTransform: 'uppercase',
                letterSpacing: 1,
                mb: 1,
              }}
            >
              Tech Stack
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }} role="list" aria-label="Technologies used">
              {project.techStack.map((tech: string, techIdx: number) => (
                <motion.div key={techIdx} whileHover={{ y: -2 }}>
                  <Chip
                    label={tech}
                    size="small"
                    role="listitem"
                    sx={{
                      backgroundColor: '#f0f0f9',
                      color: '#6366f1',
                      fontWeight: 600,
                      border: '1px solid #e0e7ff',
                      '&:hover': {
                        backgroundColor: '#e0e7ff',
                      },
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </Box>

          {/* Category Badge */}
          <Box sx={{ mb: 3 }}>
            <Chip
              label={project.category}
              size="small"
              aria-label={`Project category: ${project.category}`}
              sx={{
                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                color: '#ffffff',
                fontWeight: 700,
              }}
            />
          </Box>

          {/* CTA Buttons */}
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {project.documentation && (
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outlined"
                  startIcon={<DescriptionIcon aria-hidden="true" />}
                  aria-label={`Read documentation for ${project.title}`}
                  href={project.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    borderRadius: '8px',
                    px: 2.5,
                    borderColor: '#8b5cf6',
                    color: '#8b5cf6',
                    '&:hover': {
                      backgroundColor: 'rgba(139, 92, 246, 0.1)',
                      borderColor: '#8b5cf6',
                    },
                  }}
                >
                  Documentation
                </Button>
              </motion.div>
            )}
            {project.github && (
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  startIcon={<GitHubIcon aria-hidden="true" />}
                  aria-label={`View ${project.title} source code`}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    borderRadius: '8px',
                    px: 2.5,
                  }}
                >
                  View Code
                </Button>
              </motion.div>
            )}
            {project.liveDemo && (
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outlined"
                  startIcon={<OpenInNewIcon aria-hidden="true" />}
                  aria-label={`View live demo of ${project.title}`}
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    borderRadius: '8px',
                    px: 2.5,
                    borderColor: '#6366f1',
                    color: '#6366f1',
                    '&:hover': {
                      backgroundColor: 'rgba(99, 102, 241, 0.05)',
                      borderColor: '#6366f1',
                    },
                  }}
                >
                  Live Demo
                </Button>
              </motion.div>
            )}
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ProjectsSection;

