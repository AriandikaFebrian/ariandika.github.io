import { Box, Container, Typography, TextField, Button, Paper, IconButton, Alert } from '@mui/material';
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import BoltIcon from '@mui/icons-material/Bolt';
import { profileData } from '../data/aboutData';
import { GreenMonster, BlueMonster } from './Monsters';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limiting: prevent submissions within 1 minute
    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmitTime;
    const minSubmitInterval = 60 * 1000; // 1 minute

    if (timeSinceLastSubmit < minSubmitInterval) {
      const remainingTime = Math.ceil((minSubmitInterval - timeSinceLastSubmit) / 1000);
      setSubmitStatus({
        type: 'error',
        message: `Please wait ${remainingTime} seconds before sending another message.`,
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await emailjs.send(
        'service_anispnm', // Service ID
        'template_56tmc9e', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Ariandika', // You can customize this
        },
        '0LUjO6r8GIhF2VEgS' // Public Key
      );

      console.log('EmailJS success:', result);
      setLastSubmitTime(now);
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for reaching out! I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus({
        type: 'error',
        message: `Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again or contact me directly.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: GitHubIcon,
      label: 'GitHub',
      href: profileData.github,
      bgColor: '#1f2937',
      ariaLabel: 'Visit my GitHub profile',
    },
    {
      icon: LinkedInIcon,
      label: 'LinkedIn',
      href: profileData.linkedin,
      bgColor: '#0077b5',
      ariaLabel: 'Visit my LinkedIn profile',
    },
    {
      icon: EmailIcon,
      label: 'Email',
      href: `mailto:${profileData.email}`,
      bgColor: '#6366f1',
      ariaLabel: 'Send me an email',
    },
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
      id="contact"
      component="section"
      aria-labelledby="contact-heading"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
        background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
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

      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Decorative Monsters - Top Right */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '5%', md: '10%' },
          right: { xs: '2%', md: '4%' },
          zIndex: 0,
          opacity: 0.75,
          display: { xs: 'none', md: 'flex' },
        }}
        aria-hidden="true"
      >
        <GreenMonster size={85} animationClass="monster-pulse" />
      </Box>

      {/* Decorative Monsters - Bottom Left */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: '5%', md: '8%' },
          left: { xs: '2%', md: '3%' },
          zIndex: 0,
          opacity: 0.7,
          display: { xs: 'none', md: 'flex' },
        }}
        aria-hidden="true"
      >
        <BlueMonster size={80} animationClass="monster-bounce-5" />
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
                Get In Touch
              </Typography>
              <Typography
                id="contact-heading"
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
                Let's Work Together
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
                Have a project in mind or just want to chat? I'd love to hear from you. Reach out anytime!
              </Typography>
            </Box>
          </motion.div>

          {/* Content Grid */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 6 } }}>
            {/* Contact Form */}
            <Box>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Paper
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: '16px',
                    background: 'rgba(30, 41, 59, 0.8)',
                    border: '1px solid #334155',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  }}
                  elevation={0}
                >
                  <Typography
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'text.primary',
                      mb: 3,
                    }}
                  >
                    Send me a message
                  </Typography>

                  {/* Name Field */}
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    autoComplete="name"
                    sx={{
                      mb: 2.5,
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                        transition: 'all 0.3s ease',
                        '&:hover fieldset': {
                          borderColor: '#6366f1',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#6366f1',
                        },
                        '& .MuiOutlinedInput-input': {
                          color: formData.name ? '#1e293b' : '#ffffff',
                          '&::placeholder': {
                            color: '#94a3b8',
                            opacity: 1,
                          },
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#94a3b8',
                        '&.Mui-focused': {
                          color: '#6366f1',
                        },
                      },
                    }}
                    required
                    aria-required="true"
                  />

                  {/* Email Field */}
                  <TextField
                    fullWidth
                    label="Your Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    autoComplete="email"
                    sx={{
                      mb: 2.5,
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                        transition: 'all 0.3s ease',
                        '&:hover fieldset': {
                          borderColor: '#6366f1',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#6366f1',
                        },
                        '& .MuiOutlinedInput-input': {
                          color: formData.email ? '#1e293b' : '#ffffff',
                          '&::placeholder': {
                            color: '#94a3b8',
                            opacity: 1,
                          },
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#94a3b8',
                        '&.Mui-focused': {
                          color: '#6366f1',
                        },
                      },
                    }}
                    required
                    aria-required="true"
                  />

                  {/* Message Field */}
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    multiline
                    rows={4}
                    sx={{
                      mb: 3,
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                        transition: 'all 0.3s ease',
                        '&:hover fieldset': {
                          borderColor: '#6366f1',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#6366f1',
                        },
                        '& .MuiOutlinedInput-input': {
                          color: formData.message ? '#1e293b' : '#ffffff',
                          '&::placeholder': {
                            color: '#94a3b8',
                            opacity: 1,
                          },
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#94a3b8',
                        '&.Mui-focused': {
                          color: '#6366f1',
                        },
                      },
                    }}
                    required
                    aria-required="true"
                  />

                  {/* Submit Button */}
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      size="large"
                      startIcon={<SendIcon aria-hidden="true" />}
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                      sx={{
                        textTransform: 'none',
                        fontSize: '1rem',
                        fontWeight: 700,
                        py: 1.75,
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)',
                        boxShadow: '0 8px 20px rgba(99, 102, 241, 0.3)',
                        '&:hover': {
                          boxShadow: '0 12px 28px rgba(99, 102, 241, 0.4)',
                        },
                        '&:disabled': {
                          opacity: 0.7,
                        },
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>

                  {/* Status Alert */}
                  {submitStatus.type && (
                    <Alert
                      severity={submitStatus.type}
                      sx={{
                        mt: 2,
                        borderRadius: '10px',
                        '& .MuiAlert-icon': {
                          color: submitStatus.type === 'success' ? '#10b981' : '#ef4444',
                        },
                      }}
                    >
                      {submitStatus.message}
                    </Alert>
                  )}

                  {/* Footer Note */}
                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      color: 'text.secondary',
                      textAlign: 'center',
                      mt: 2,
                    }}
                  >
                    I'll get back to you within 24 hours
                  </Typography>
                </Paper>
              </motion.div>
            </Box>

            {/* Contact Info */}
            <Box>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
                  {/* Quick Contact Options */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'text.primary',
                        mb: 2.5,
                      }}
                    >
                      Other ways to reach me
                    </Typography>

                    {/* Email */}
                    <motion.div whileHover={{ x: 5 }}>
                      <Box
                        component="a"
                        href={`mailto:${profileData.email}`}
                        aria-label={`Send email to ${profileData.email}`}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          p: 2.5,
                          mb: 2,
                          borderRadius: '12px',
                          backgroundColor: 'rgba(51, 65, 85, 0.8)',
                          border: '1px solid #334155',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer',
                          '&:hover': {
                            backgroundColor: 'rgba(99, 102, 241, 0.15)',
                            borderColor: '#818cf8',
                            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.12)',
                          },
                        }}
                      >
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: '10px',
                            background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          aria-hidden="true"
                        >
                          <EmailIcon />
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: '0.85rem',
                              color: 'text.secondary',
                              fontWeight: 500,
                            }}
                          >
                            Email
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '1rem',
                              fontWeight: 700,
                              color: 'text.primary',
                            }}
                          >
                            {profileData.email}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>

                    {/* Phone */}
                    <motion.div whileHover={{ x: 5 }}>
                      <Box
                        component="a"
                        href={`tel:${profileData.phone.replace(/\s/g, '')}`}
                        aria-label={`Call ${profileData.phone}`}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          p: 2.5,
                          mb: 2,
                          borderRadius: '12px',
                          backgroundColor: 'rgba(51, 65, 85, 0.8)',
                          border: '1px solid #334155',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer',
                          '&:hover': {
                            backgroundColor: 'rgba(99, 102, 241, 0.15)',
                            borderColor: '#818cf8',
                            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.12)',
                          },
                        }}
                      >
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: '10px',
                            background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          aria-hidden="true"
                        >
                          <PhoneIcon />
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: '0.85rem',
                              color: 'text.secondary',
                              fontWeight: 500,
                            }}
                          >
                            Phone
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '1rem',
                              fontWeight: 700,
                              color: 'text.primary',
                            }}
                          >
                            {profileData.phone}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  </Box>

                  {/* Social Links */}
                  <Box sx={{ pt: 2, borderTop: '1px solid #334155' }}>
                    <Typography
                      sx={{
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'text.primary',
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        mb: 2.5,
                      }}
                    >
                      Social Media
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1.5 }} role="list" aria-label="Social media links">
                      {socialLinks.map((social, idx) => (
                        <motion.div key={idx} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
                          <IconButton
                            component="a"
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={social.label}
                            aria-label={social.ariaLabel}
                            role="listitem"
                            sx={{
                              width: 50,
                              height: 50,
                              borderRadius: '12px',
                              background: social.bgColor,
                              color: '#ffffff',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: `0 8px 16px ${social.bgColor}40`,
                              },
                            }}
                          >
                            <social.icon aria-hidden="true" />
                          </IconButton>
                        </motion.div>
                      ))}
                    </Box>
                  </Box>

                  {/* Response Time */}
                  <Box
                    sx={{
                      mt: 'auto',
                      p: 2.5,
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                    }}
                    role="status"
                    aria-label="Availability status"
                  >
                    <Typography
                      sx={{
                        fontSize: '0.9rem',
                        color: 'text.secondary',
                      }}
                    >
                      <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <BoltIcon sx={{ fontSize: '1rem', color: '#10b981' }} aria-hidden="true" />
                        <strong style={{ color: '#10b981' }}>Available for</strong>
                      </Box>
                      <br />
                      Freelance projects, collaborations &amp; new opportunities
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactSection;

