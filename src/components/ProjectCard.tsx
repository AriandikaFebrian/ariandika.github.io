import { Box, Card, CardContent, CardMedia, Typography, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DescriptionIcon from '@mui/icons-material/Description';
import type { Project } from '../data/projectsData';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }} // Reduced from -12
      transition={{ duration: 0.3, delay: index * 0.08 }} // Reduced delays and duration
      viewport={{ once: true }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 2,
          border: '1px solid #334155',
          background: '#1e293b',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          '&:hover': {
            boxShadow: '0 24px 48px rgba(99, 102, 241, 0.25)',
            borderColor: 'primary.main',
          },
        }}
      >
        {/* Project Image */}
        <motion.div
          whileHover={{ scale: 1.05 }} // Reduced from 1.08
          transition={{ duration: 0.3 }} // Reduced from 0.4
          style={{ overflow: 'hidden' }}
        >
          <CardMedia
            component="div"
            sx={{
              pt: '56.25%',
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#1e293b',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.3)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
                display: 'flex',
                gap: 1,
                alignItems: 'center',
              }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.08 + 0.15 }} // Reduced delay
              >
                <Chip
                  label={project.category}
                  size="small"
                  variant="filled"
                  sx={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    fontWeight: 600,
                  }}
                />
              </motion.div>
            </Box>
          </CardMedia>
        </motion.div>

        {/* Content */}
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Title */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 1,
              color: 'text.primary',
              fontSize: '1.1rem',
              lineHeight: 1.4,
            }}
          >
            {project.title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              mb: 3,
              lineHeight: 1.6,
              flex: 1,
            }}
          >
            {project.description}
          </Typography>

          {/* Tech Stack */}
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              flexWrap: 'wrap',
              mb: 3,
            }}
          >
            {project.techStack.map((tech, techIndex) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03, y: -1 }} // Reduced hover effect
                viewport={{ once: true }}
                transition={{ delay: techIndex * 0.03 }} // Reduced delay
              >
                <Chip
                  label={tech}
                  size="small"
                  variant="outlined"
                  sx={{
                    fontSize: '0.75rem',
                    height: 'auto',
                    py: 0.5,
                    backgroundColor: 'primary.light',
                    color: 'white',
                    border: 'none',
                    transition: 'all 0.2s ease',
                  }}
                />
              </motion.div>
            ))}
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mt: 'auto' }}>
            {project.documentation && (
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<DescriptionIcon />}
                  href={project.documentation}
                  target="_blank"
                  sx={{
                    textTransform: 'none',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    borderRadius: '8px',
                    px: 2,
                    py: 1,
                    borderColor: '#8b5cf6',
                    color: '#8b5cf6',
                    '&:hover': {
                      borderColor: '#8b5cf6',
                      backgroundColor: 'rgba(139, 92, 246, 0.15)',
                    },
                  }}
                >
                  Documentation
                </Button>
              </motion.div>
            )}
            {project.liveDemo && (
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="small"
                  variant="contained"
                  endIcon={<OpenInNewIcon />}
                  href={project.liveDemo}
                  target="_blank"
                  sx={{
                    textTransform: 'none',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    borderRadius: '8px',
                    px: 2,
                    py: 1,
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                    },
                  }}
                >
                  Live Demo
                </Button>
              </motion.div>
            )}
            {project.github && (
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  href={project.github}
                  target="_blank"
                  sx={{
                    textTransform: 'none',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    borderRadius: '8px',
                    px: 2,
                    py: 1,
                    borderColor: '#475569',
                    color: '#e2e8f0',
                    '&:hover': {
                      borderColor: '#64748b',
                      backgroundColor: 'rgba(71, 85, 105, 0.2)',
                    },
                  }}
                >
                  View Code
                </Button>
              </motion.div>
            )}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
