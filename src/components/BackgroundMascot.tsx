import { Box } from '@mui/material';

interface BackgroundMascotProps {
  opacity?: number;
}

/**
 * Lightweight cartoon face for background decorations
 * Static design for minimal performance impact
 */
const BackgroundMascot = ({ opacity = 0.08 }: BackgroundMascotProps) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: -100,
        right: -100,
        width: '400px',
        height: '400px',
        pointerEvents: 'none',
        zIndex: 0,
        willChange: 'transform',
      }}
    >
      <svg
        width="400"
        height="400"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'blur(1px)',
          opacity: opacity,
        }}
      >
        {/* Head - Minimal design */}
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="#6366f1"
          opacity="0.3"
        />

        {/* Left Eye */}
        <circle
          cx="80"
          cy="85"
          r="8"
          fill="#6366f1"
          opacity="0.4"
        />

        {/* Right Eye */}
        <circle
          cx="120"
          cy="85"
          r="8"
          fill="#6366f1"
          opacity="0.4"
        />

        {/* Smile */}
        <path
          d="M 80,110 Q 100,120 120,110"
          stroke="#6366f1"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
          strokeLinecap="round"
        />
      </svg>
    </Box>
  );
};

export default BackgroundMascot;
