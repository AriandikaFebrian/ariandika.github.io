import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import PersonIcon from '@mui/icons-material/Person';
import LandscapeIcon from '@mui/icons-material/Landscape';
import StorageIcon from '@mui/icons-material/Storage';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import { profileData, skillsData } from '../data/aboutData';
import SkillChip from '../components/SkillChip';

const AboutPage = () => {
  const categories = Object.keys(skillsData) as Array<keyof typeof skillsData>;

  const categoryColors: Record<string, string> = {
    Frontend: '#2563eb',
    Backend: '#7c3aed',
    Database: '#0891b2',
    DevOps: '#dc2626',
    Tools: '#f59e0b',
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
            <PersonIcon sx={{ fontSize: 44, background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontSize: { xs: '1.75rem', md: '2.5rem' },
                fontWeight: 800,
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              About Me
            </Typography>
          </Box>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: 800, mx: 'auto', fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8 }}
          >
            {profileData.summary}
          </Typography>
        </motion.div>

        {/* Skills Sections */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 3, md: 4 },
          }}
        >
          {categories.map((category, categoryIndex) => (
            <Box
              key={category}
              component={motion.div}
              sx={{
                flex: { xs: 1, md: '0 1 auto' },
                width: { xs: '100%', md: 'auto' },
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
            >
              <Box
                sx={{
                  p: { xs: 2.5, md: 3 },
                  borderRadius: 3,
                  backgroundColor: 'background.paper',
                  border: '1px solid #e2e8f0',
                  backdropFilter: 'blur(10px)',
                  background: 'rgba(255, 255, 255, 0.8)',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 12px 24px ${categoryColors[category]}20`,
                    borderColor: categoryColors[category],
                    backgroundColor: '#ffffff',
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    mb: 2.5,
                    color: categoryColors[category],
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  {category === 'Frontend' && <LandscapeIcon sx={{ fontSize: 24 }} />}
                  {category === 'Backend' && <BuildIcon sx={{ fontSize: 24 }} />}
                  {category === 'Database' && <StorageIcon sx={{ fontSize: 24 }} />}
                  {category === 'DevOps' && <CloudUploadIcon sx={{ fontSize: 24 }} />}
                  {category === 'Tools' && <CodeIcon sx={{ fontSize: 24 }} />}
                  {category}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: { xs: 1.5, md: 2 },
                  }}
                >
                  {skillsData[category].map((skill, index) => (
                    <SkillChip
                      key={skill.name}
                      name={skill.name}
                      color={skill.color}
                      index={index}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;

