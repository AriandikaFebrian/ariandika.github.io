import { Box } from '@mui/material';
import { MonsterEye } from './MonsterEye';
import './Monster.css';

interface GreenMonsterProps {
  size?: number;
  animationClass?: string;
}

export const GreenMonster = ({ size = 100, animationClass = 'monster-pulse' }: GreenMonsterProps) => {
  return (
    <Box
      className={animationClass}
      sx={{
        position: 'relative',
        width: size,
        height: size * 1.25,
        filter: 'drop-shadow(0 4px 12px rgba(34, 197, 94, 0.3))',
      }}
    >
      {/* Main Body - Green gradient */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: size * 0.92,
          height: size * 0.8,
          background: 'linear-gradient(135deg, #22c55e 0%, #15803d 100%)',
          borderRadius: '45% 55% 50% 50%',
        }}
      />

      {/* Left ear */}
      <Box
        sx={{
          position: 'absolute',
          top: -size * 0.05,
          left: size * 0.08,
          width: size * 0.2,
          height: size * 0.3,
          background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
          borderRadius: '50% 50% 50% 50%',
          transform: 'rotate(-20deg)',
          zIndex: 0,
        }}
      />

      {/* Right ear */}
      <Box
        sx={{
          position: 'absolute',
          top: -size * 0.05,
          right: size * 0.08,
          width: size * 0.2,
          height: size * 0.3,
          background: 'linear-gradient(135deg, #22c55e 0%, #4ade80 100%)',
          borderRadius: '50% 50% 50% 50%',
          transform: 'rotate(20deg)',
          zIndex: 0,
        }}
      />

      {/* Head */}
      <Box
        sx={{
          position: 'absolute',
          top: size * 0.05,
          left: '50%',
          transform: 'translateX(-50%)',
          width: size * 0.75,
          height: size * 0.6,
          background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
          borderRadius: '55% 55% 50% 50%',
          zIndex: 2,
        }}
      />

      {/* Eyes Container */}
      <Box
        sx={{
          position: 'absolute',
          top: size * 0.15,
          left: '50%',
          transform: 'translateX(-50%)',
          width: size * 0.5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 3,
        }}
      >
        <MonsterEye eyeColor="#bbf7d0" pupilColor="#15803d" size={size * 0.21} />
        <MonsterEye eyeColor="#bbf7d0" pupilColor="#15803d" size={size * 0.21} />
      </Box>

      {/* Cheerful smile - rounded triangle */}
      <Box
        sx={{
          position: 'absolute',
          top: size * 0.48,
          left: '50%',
          transform: 'translateX(-50%)',
          width: size * 0.2,
          zIndex: 3,
        }}
      >
        <svg viewBox="0 0 100 60" style={{ width: '100%', height: 'auto' }}>
          <path d="M 20 20 Q 50 60 80 20" stroke="rgba(0,0,0,0.3)" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      </Box>

      {/* Little horns */}
      {[0, 1].map((i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            top: -size * 0.12,
            [i === 0 ? 'left' : 'right']: `${25 + i * 50}%`,
            width: size * 0.1,
            height: size * 0.22,
            background: 'linear-gradient(180deg, #86efac 0%, #22c55e 100%)',
            borderRadius: '50% 50% 50% 0',
            transform: `rotate(${i === 0 ? -25 : 25}deg)`,
            zIndex: 1,
          }}
        />
      ))}

      {/* Belly patch */}
      <Box
        sx={{
          position: 'absolute',
          bottom: size * 0.1,
          left: '50%',
          transform: 'translateX(-50%)',
          width: size * 0.35,
          height: size * 0.3,
          background: 'radial-gradient(circle, rgba(187, 247, 208, 0.4) 0%, rgba(34, 197, 94, 0) 100%)',
          borderRadius: '50%',
          zIndex: 1,
        }}
      />
    </Box>
  );
};
