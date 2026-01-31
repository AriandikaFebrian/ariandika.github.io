import { Box, Container, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { experienceData } from '../data/experience';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckIcon from '@mui/icons-material/Check';
import { BlueMonster, OrangeMonster } from './Monsters';


const ExperienceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };



  return (
    <Box
      id="experience"
      component="section"
      aria-labelledby="experience-heading"
      sx={{
        py: { xs: 8, md: 12 },
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

      {/* Background Decoration */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Decorative Monsters - Top Left */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '5%', md: '8%' },
          left: { xs: '3%', md: '5%' },
          zIndex: 0,
          opacity: 0.75,
          display: { xs: 'none', md: 'flex' },
        }}
        aria-hidden="true"
      >
        <BlueMonster size={85} animationClass="monster-bounce-2" />
      </Box>

      {/* Decorative Monsters - Bottom Right */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: '5%', md: '8%' },
          right: { xs: '3%', md: '4%' },
          zIndex: 0,
          opacity: 0.7,
          display: { xs: 'none', md: 'flex' },
        }}
        aria-hidden="true"
      >
        <OrangeMonster size={80} animationClass="monster-gentle-bounce" />
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
            <Box sx={{ mb: 8 }}>
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
                EXPERIENCE
              </Typography>
              <Typography
                id="experience-heading"
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
                My Professional Journey
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  maxWidth: '600px',
                }}
              >
                Explore my work experience and professional background
              </Typography>
            </Box>
          </motion.div>

          {/* Timeline */}
          <Box component="ol" sx={{ listStyle: 'none', p: 0, m: 0 }} role="list" aria-label="Experience timeline">
            {experienceData.map((exp, index: number) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                variants={itemVariants}
                role="listitem"
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: { xs: 2, md: 4 },
                    pb: { xs: 3, md: 4 },
                    mb: { xs: 3, md: 4 },
                    borderBottom: index === experienceData.length - 1 ? 'none' : '1px solid #334155',
                    position: 'relative',
                  }}
                >
                  {/* Timeline Dot & Line */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      position: 'relative',
                    }}
                  >
                    <Box
                      sx={{
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                        border: '3px solid #0f172a',
                        boxShadow: '0 0 0 3px #6366f1',
                        mb: 2,
                        mt: 1,
                        flex: 0,
                      }}
                      role="presentation"
                    />
                    {index < experienceData.length - 1 && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 28,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 2,
                          height: { xs: 120, md: 150 },
                          background: 'linear-gradient(180deg, #334155 0%, transparent 100%)',
                        }}
                        role="presentation"
                      />
                    )}
                  </Box>

                  {/* Content */}
                  <Box sx={{ flex: 1, pt: 0.5 }}>
                    {/* Header */}
                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'start', gap: 2, mb: 1, flexWrap: 'wrap' }}>
                        <Box>
                          <Typography
                            component="h3"
                            sx={{
                              fontSize: { xs: '1.1rem', md: '1.25rem' },
                              fontWeight: 700,
                              color: 'text.primary',
                              mb: 0.5,
                            }}
                          >
                            {exp.position}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '1rem',
                              fontWeight: 600,
                              color: 'primary.main',
                            }}
                          >
                            {exp.company}
                          </Typography>
                        </Box>
                        <Chip
                          label={exp.type}
                          size="small"
                          aria-label={`Experience type: ${exp.type}`}
                          sx={{
                            background: exp.type === 'internship'
                              ? 'rgba(99, 102, 241, 0.1)'
                              : exp.type === 'client-project'
                              ? 'rgba(16, 185, 129, 0.1)'
                              : 'rgba(245, 158, 11, 0.1)',
                            color: exp.type === 'internship'
                              ? '#6366f1'
                              : exp.type === 'client-project'
                              ? '#10b981'
                              : '#f59e0b',
                            fontWeight: 700,
                            textTransform: 'capitalize',
                          }}
                        />
                      </Box>

                      {/* Duration */}
                      <Typography
                        sx={{
                          fontSize: '0.9rem',
                          color: 'text.secondary',
                          fontWeight: 500,
                        }}
                      >
                        {exp.startDate} — {exp.endDate} • {exp.duration}
                      </Typography>

                      {/* Location */}
                      {exp.location && (
                        <Typography
                          sx={{
                            fontSize: '0.85rem',
                            color: 'text.secondary',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                          }}
                        >
                          <LocationOnIcon sx={{ fontSize: '1rem' }} aria-hidden="true" />
                          {exp.location}
                        </Typography>
                      )}
                    </Box>

                    {/* Description */}
                    {exp.description && (
                      <Typography
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.7,
                          mb: 2,
                          fontSize: '0.95rem',
                        }}
                      >
                        {exp.description}
                      </Typography>
                    )}

                    {/* Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <Box sx={{ mb: 2 }}>
                        <Typography
                          sx={{
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            color: 'text.primary',
                            textTransform: 'uppercase',
                            letterSpacing: 0.5,
                            mb: 1,
                          }}
                        >
                          Key Achievements
                        </Typography>
                        <Box
                          component="ul"
                          sx={{
                            pl: 1.5,
                            m: 0,
                            listStyle: 'none',
                          }}
                          aria-label="Key achievements"
                        >
                          {exp.achievements.map((achievement, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              style={{
                                marginBottom: '0.5rem',
                                color: '#475569',
                                fontSize: '0.9rem',
                              }}
                            >
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <CheckIcon sx={{ fontSize: '1rem', color: '#10b981' }} aria-hidden="true" />
                                <span>{achievement}</span>
                              </Box>
                            </motion.li>
                          ))}
                        </Box>
                      </Box>
                    )}

                    {/* Skills */}
                    {exp.skills && exp.skills.length > 0 && (
                      <Box>
                        <Typography
                          sx={{
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            color: 'text.primary',
                            textTransform: 'uppercase',
                            letterSpacing: 0.5,
                            mb: 1,
                          }}
                        >
                          Skills Used
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }} role="list" aria-label="Skills used in this role">
                          {exp.skills.map((skill, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ y: -2 }}
                              style={{ display: 'inline-block' }}
                            >
                              <Chip
                                label={skill}
                                size="small"
                                variant="outlined"
                                role="listitem"
                                sx={{
                                  borderColor: '#e2e8f0',
                                  color: 'text.secondary',
                                  fontWeight: 600,
                                  fontSize: '0.8rem',
                                  '&:hover': {
                                    backgroundColor: 'rgba(99, 102, 241, 0.05)',
                                    borderColor: '#6366f1',
                                  },
                                }}
                              />
                            </motion.div>
                          ))}
                        </Box>
                      </Box>
                    )}
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ExperienceSection;

