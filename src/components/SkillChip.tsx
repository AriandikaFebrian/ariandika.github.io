import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

interface SkillChipProps {
  name: string;
  color: string;
  index: number;
}

const SkillChip = ({ name, color, index }: SkillChipProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: index * 0.02 }}
      whileHover={{ scale: 1.05 }}
      style={{ display: 'inline-block' }}
    >
      <Box
        sx={{
          px: 2,
          py: 1,
          borderRadius: '16px',
          backgroundColor: `${color}20`,
          border: `1px solid ${color}40`,
          color: color,
          fontWeight: 600,
          fontSize: '0.875rem',
          cursor: 'default',
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: color,
            color: 'white',
            boxShadow: `0 4px 12px ${color}30`,
          },
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 'inherit' }}>
          {name}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default SkillChip;
