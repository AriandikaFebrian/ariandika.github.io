import { Box } from '@mui/material';
import { MonsterEye } from './MonsterEye';
import './Monster.css';

interface BlueMonsterProps {
  size?: number;
  animationClass?: string;
}

export const BlueMonster = ({ size = 100, animationClass = 'monster-bounce' }: BlueMonsterProps) => {
  return (
    <Box
      className={animationClass}
      sx={{
        position: 'relative',
        width: size,
        height: size * 1.2,
        filter: 'drop-shadow(0 4px 12px rgba(59, 130, 246, 0.3))',
      }}
    >
      {/* Main Body - Blue gradient */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: size,
          height: size * 0.8,
          background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
          borderRadius: '50% 50% 40% 40%',
        }}
      />

      {/* Left Arm */}
      <Box
        sx={{
          position: 'absolute',
          bottom: size * 0.3,
          left: '-10px',
          width: size * 0.3,
          height: size * 0.35,
          background: 'linear-gradient(90deg, #2563eb 0%, #1e40af 100%)',
          borderRadius: '50% 50% 40% 60%',
          transform: 'rotate(-25deg)',
        }}
      />

      {/* Right Arm */}
      <Box
        sx={{
          position: 'absolute',
          bottom: size * 0.3,
          right: '-10px',
          width: size * 0.3,
          height: size * 0.35,
          background: 'linear-gradient(90deg, #1e40af 0%, #2563eb 100%)',
          borderRadius: '60% 40% 60% 50%',
          transform: 'rotate(25deg)',
        }}
      />

      {/* Head */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: size * 0.75,
          height: size * 0.6,
          background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
          borderRadius: '50% 50% 50% 50%',
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
          width: size * 0.6,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 3,
        }}
      >
        <MonsterEye eyeColor="#fff" pupilColor="#1e40af" size={size * 0.22} />
        <MonsterEye eyeColor="#fff" pupilColor="#1e40af" size={size * 0.22} />
      </Box>

      {/* Mouth - Happy smile */}
      <Box
        sx={{
          position: 'absolute',
          top: size * 0.45,
          left: '50%',
          transform: 'translateX(-50%)',
          width: size * 0.3,
          height: size * 0.15,
          borderRadius: '0 0 50px 50px',
          border: `2px solid rgba(0,0,0,0.3)`,
          zIndex: 3,
        }}
      />

      {/* Little spikes on top */}
      {[0, 1, 2].map((i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            top: -size * 0.15,
            left: `${30 + i * 20}%`,
            width: size * 0.15,
            height: size * 0.2,
            background: 'linear-gradient(180deg, #2563eb 0%, #1e40af 100%)',
            borderRadius: '50% 50% 50% 0',
            transform: 'rotate(-45deg)',
            zIndex: 1,
          }}
        />
      ))}
    </Box>
  );
};
