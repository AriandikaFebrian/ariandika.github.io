import { Box } from '@mui/material';
import { MonsterEye } from './MonsterEye';
import './Monster.css';

interface PinkMonsterProps {
  size?: number;
  animationClass?: string;
}

export const PinkMonster = ({ size = 100, animationClass = 'monster-gentle-bounce' }: PinkMonsterProps) => {
  return (
    <Box
      className={animationClass}
      sx={{
        position: 'relative',
        width: size,
        height: size * 1.3,
        filter: 'drop-shadow(0 4px 12px rgba(236, 72, 153, 0.3))',
      }}
    >
      {/* Main Body - Pink gradient */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: size,
          height: size * 0.85,
          background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
          borderRadius: '50% 50% 45% 45%',
        }}
      />

      {/* Left Tentacle */}
      <Box
        sx={{
          position: 'absolute',
          bottom: size * 0.05,
          left: size * 0.15,
          width: size * 0.2,
          height: size * 0.5,
          background: 'linear-gradient(90deg, #db2777 0%, #be185d 100%)',
          borderRadius: '50% 50% 50% 50%',
          transformOrigin: 'top center',
          animation: 'wiggle 0.6s ease-in-out infinite',
        }}
      />

      {/* Right Tentacle */}
      <Box
        sx={{
          position: 'absolute',
          bottom: size * 0.05,
          right: size * 0.15,
          width: size * 0.2,
          height: size * 0.5,
          background: 'linear-gradient(90deg, #be185d 0%, #db2777 100%)',
          borderRadius: '50% 50% 50% 50%',
          transformOrigin: 'top center',
          animation: 'wiggle 0.6s ease-in-out infinite 0.15s',
        }}
      />

      {/* Head - Round and friendly */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: size * 0.8,
          height: size * 0.65,
          background: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
          borderRadius: '50%',
          zIndex: 2,
        }}
      />

      {/* Eyes Container */}
      <Box
        sx={{
          position: 'absolute',
          top: size * 0.1,
          left: '50%',
          transform: 'translateX(-50%)',
          width: size * 0.5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 3,
        }}
      >
        <MonsterEye eyeColor="#fff" pupilColor="#be185d" size={size * 0.2} />
        <MonsterEye eyeColor="#fff" pupilColor="#be185d" size={size * 0.2} />
      </Box>

      {/* Happy mouth - W shape */}
      <Box
        sx={{
          position: 'absolute',
          top: size * 0.5,
          left: '50%',
          transform: 'translateX(-50%)',
          width: size * 0.25,
          height: size * 0.12,
          zIndex: 3,
        }}
      >
        <svg viewBox="0 0 100 50" style={{ width: '100%', height: '100%' }}>
          <path d="M 10 50 Q 20 20 35 50 T 100 50" stroke="rgba(0,0,0,0.3)" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </Box>

      {/* Blush marks */}
      {[0, 1].map((i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: size * 0.15,
            height: size * 0.12,
            background: 'radial-gradient(circle, rgba(255,182,193,0.5) 0%, rgba(255,182,193,0) 100%)',
            borderRadius: '50%',
            top: size * 0.45,
            [i === 0 ? 'left' : 'right']: size * 0.08,
            zIndex: 1,
          }}
        />
      ))}
    </Box>
  );
};
