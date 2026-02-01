import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ApiIcon from '@mui/icons-material/Api';
import SyncIcon from '@mui/icons-material/Sync';
import SettingsIcon from '@mui/icons-material/Settings';
import { PurpleMonster, GreenMonster } from './Monsters';


const AboutSection = () => {
  const highlights = [
    { icon: <PhoneAndroidIcon aria-hidden="true" />, label: 'React Native', description: 'Building cross-platform mobile apps with React Native and Expo' },
    { icon: <ApiIcon aria-hidden="true" />, label: 'API Integration', description: 'Connecting apps to RESTful APIs and backend services' },
    { icon: <SyncIcon aria-hidden="true" />, label: 'CI/CD', description: 'Automated deployment pipelines and version control' },
    { icon: <SettingsIcon aria-hidden="true" />, label: 'Fullstack Development', description: 'End-to-end development from frontend to backend' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <Box
      id="about"
      component="section"
      aria-labelledby="about-heading"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'background.default',
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
          top: { xs: '5%', md: '2%' },
          right: { xs: '2%', md: '4%' },
          zIndex: 0,
          opacity: 0.7,
          display: { xs: 'none', md: 'flex' },
        }}
        aria-hidden="true"
      >
        <PurpleMonster size={80} animationClass="monster-float" />
      </Box>

      {/* Decorative Monsters - Bottom Left */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: '5%', md: '2%' },
          left: { xs: '2%', md: '3%' },
          zIndex: 0,
          opacity: 0.7,
          display: { xs: 'none', md: 'flex' },
        }}
        aria-hidden="true"
      >
        <GreenMonster size={75} animationClass="monster-gentle-bounce" />
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
              About Me
            </Typography>
            <Typography
              id="about-heading"
              component="h2"
              variant="h2"
              sx={{
                fontWeight: 800,
                color: 'text.primary',
                mb: 2,
                fontSize: { xs: '2rem', md: '2.8rem' },
                lineHeight: 1.2,
              }}
            >
              Get to know me better
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 4,
                background: 'linear-gradient(90deg, #6366f1 0%, #ec4899 100%)',
                borderRadius: 2,
                mb: 4,
              }}
              role="presentation"
            />
          </motion.div>

          {/* Main Content */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 6 } }}>
            {/* Left Column - Bio */}
            <Box>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 2.5,
                    lineHeight: 1.8,
                    fontSize: '1.05rem',
                  }}
                >
                  Fullstack & Mobile Developer specializing in React Native (Expo) and .NET/React integrations. Experienced in API integration, JWT + RBAC authentication, real-time FCM notifications, PostgreSQL, Power BI visualization, and Azure DevOps CI/CD.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 2.5,
                    lineHeight: 1.8,
                    fontSize: '1.05rem',
                  }}
                >
                  Highlights:
                  - Interned at PT United Tractors Tbk: Built end-to-end OTRS ticket monitoring system with real-time data automation and Power BI dashboards.
                  - Developing React Native education management app for PAUD-SD client: Delivered internal demo APK; production planned mid-2026 (targeting ~500 users based on client estimate).
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    fontSize: '1.05rem',
                  }}
                >
                  Passionate about clean code, performance, and delivering impactful internal tools. Open to junior roles in startups or corporates.
                  "Dream it. Do it."
                </Typography>
              </motion.div>
            </Box>

            {/* Right Column - Key Skills Grid */}
            <Box>
              <motion.div variants={containerVariants}>
                <Typography
                  component="h3"
                  sx={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'text.primary',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    mb: 2.5,
                  }}
                >
                  Key Skills
                </Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                  {highlights.map((item, index) => (
                    <Box key={index}>
                      <motion.div variants={itemVariants}>
                        <Box
                          sx={{
                            p: 2.5,
                            borderRadius: '12px',
                            background: 'rgba(30, 41, 59, 0.8)',
                            border: '1px solid #334155',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            '&:hover': {
                              borderColor: '#818cf8',
                              boxShadow: '0 8px 16px rgba(129, 140, 248, 0.15)',
                              transform: 'translateY(-3px)',
                              background: 'rgba(51, 65, 85, 0.9)',
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: '1.75rem',
                              mb: 1,
                            }}
                            aria-hidden="true"
                          >
                            {item.icon}
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              color: 'text.primary',
                              mb: 0.5,
                              fontSize: '0.95rem',
                            }}
                          >
                            {item.label}
                          </Typography>
                          <Typography
                            sx={{
                              color: 'text.secondary',
                              fontSize: '0.85rem',
                              lineHeight: 1.5,
                            }}
                          >
                            {item.description}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Box>
          </Box>

        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutSection;

