import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { skillsData, categoryColors, categoryIcons } from '../data/aboutData';
import { PinkMonster, PurpleMonster } from './Monsters';


const SkillsSection = () => {
  const categories = Object.keys(skillsData) as Array<keyof typeof skillsData>;
  const categoryLabels: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    mobile: 'Mobile',
    tools: 'Tools & DevOps',
    databases: 'Databases',
  };

  return (
    <Box
      id="skills"
      component="section"
      aria-labelledby="skills-heading"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle divider */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, #334155 50%, transparent 100%)',
        }}
      />

      {/* Decorative Monsters - Top Right */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '5%', md: '8%' },
          right: { xs: '3%', md: '5%' },
          zIndex: 0,
          opacity: 0.75,
          display: { xs: 'none', md: 'flex' },
        }}
        aria-hidden="true"
      >
        <PinkMonster size={90} animationClass="monster-bounce-4" />
      </Box>

      {/* Decorative Monsters - Bottom Left */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: '5%', md: '10%' },
          left: { xs: '2%', md: '3%' },
          zIndex: 0,
          opacity: 0.7,
          display: { xs: 'none', md: 'flex' },
        }}
        aria-hidden="true"
      >
        <PurpleMonster size={75} animationClass="monster-float" />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
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
              SKILLS
            </Typography>
            <Typography
              id="skills-heading"
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
              My Technical Arsenal
            </Typography>
          </Box>
        </motion.div>

        {/* Skills Grid */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }} role="list" aria-label="Skills by category">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.08 }}
            >
              {/* Category Title */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                <Typography sx={{ fontSize: '1.25rem' }} aria-hidden="true">
                  {categoryIcons[category]}
                </Typography>
                <Typography
                  component="h3"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: categoryColors[category],
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  }}
                >
                  {categoryLabels[category.toLowerCase()] || category}
                </Typography>
              </Box>

              {/* Skills List */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }} role="list">
                {skillsData[category].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: index * 0.02 }}
                    whileHover={{ scale: 1.03 }}
                    style={{ display: 'inline-block' }}
                  >
                    <Box
                      role="listitem"
                      sx={{
                        px: 2.5,
                        py: 1,
                        borderRadius: '20px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        cursor: 'default',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          backgroundColor: `${categoryColors[category]}20`,
                          borderColor: categoryColors[category],
                        },
                      }}
                    >
                      {skill.name}
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Bottom spacing */}
        <Box sx={{ height: 4 }} />
      </Container>
    </Box>
  );
};

export default SkillsSection;

