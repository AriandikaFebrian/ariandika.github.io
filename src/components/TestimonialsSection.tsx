import { Box, Container, Typography, Avatar, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { testimonialsData } from '../data/testimonialsData';

const TestimonialsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Floating animation for testimonial card
  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  return (
    <Box
      id="testimonials"
      component="section"
      aria-label="Testimonials section"
      sx={{
        py: { xs: 6, md: 8 },
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: '-5%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '-3%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography
              component="h2"
              variant="h3"
              sx={{
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                fontWeight: 700,
                color: 'text.primary',
                mb: 1.5,
              }}
            >
              What People Say
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                maxWidth: '500px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Feedback dari rekan kerja dan client
            </Typography>
          </Box>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
            {testimonialsData.map((testimonial) => (
              <motion.div key={testimonial.id} variants={itemVariants} style={{ width: '100%', maxWidth: '600px' }}>
                <motion.div
                  variants={floatingVariants}
                  initial="initial"
                  animate="animate"
                  whileHover={{ scale: 1.02 }}
                >
                  <Box
                    sx={{
                      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(236, 72, 153, 0.04) 100%)',
                      borderRadius: '16px',
                      p: { xs: 3, md: 3.5 },
                      border: '1px solid rgba(99, 102, 241, 0.1)',
                      backdropFilter: 'blur(8px)',
                      position: 'relative',
                    }}
                  >
                    {/* Quote Icon */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -12,
                        left: 20,
                        background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                        borderRadius: '10px',
                        p: 1,
                        boxShadow: '0 4px 12px rgba(99, 102, 241, 0.25)',
                      }}
                    >
                      <FormatQuoteIcon sx={{ color: 'white', fontSize: 18 }} />
                    </Box>

                    {/* Quote Text */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.primary',
                        fontSize: { xs: '0.9rem', md: '0.95rem' },
                        lineHeight: 1.7,
                        mb: 2.5,
                        mt: 1,
                        fontStyle: 'italic',
                      }}
                    >
                      "{testimonial.quote}"
                    </Typography>

                    {/* Author Info */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Avatar
                        sx={{
                          width: 40,
                          height: 40,
                          background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                          fontSize: '0.9rem',
                          fontWeight: 600,
                        }}
                      >
                        {testimonial.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: 'text.primary',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'text.secondary',
                            fontSize: '0.75rem',
                          }}
                        >
                          {testimonial.role}
                        </Typography>
                        {testimonial.rating && (
                          <Rating
                            value={testimonial.rating}
                            readOnly
                            size="small"
                            sx={{ mt: 0.25, color: '#f59e0b' }}
                          />
                        )}
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontSize: '0.85rem',
              }}
            >
              Punya project atau ingin berkolaborasi?{' '}
              <Box
                component="span"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                sx={{
                  color: '#6366f1',
                  fontWeight: 600,
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Mari diskusi!
              </Box>
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;

