import { Box } from '@mui/material';
import { MonsterEye } from './MonsterEye';
import './Monster.css';

interface PurpleMonsterProps {
  size?: number;
  animationClass?: string;
}

export const PurpleMonster = ({ size = 100, animationClass = 'monster-float' }: PurpleMonsterProps) => {
  return (
    <Box
      className={animationClass}
      sx={{
        position: 'relative',
        width: size * 1.1,
        height: size * 1.2,
        filter: 'drop-shadow(0 4px 12px rgba(168, 85, 247, 0.3))',
      }}
    >
      {/* Main Body - Purple gradient */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: size * 0.95,
          height: size * 0.75,
          background: 'linear-gradient(135deg, #a855f7 0%, #6d28d9 100%)',
          borderRadius: '50% 50% 40% 40%',
        }}
      />

      {/* Bumpy texture - small bumps on body */}
      {[0, 1, 2, 3, 4].map((i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            bottom: size * (0.2 + (i % 3) * 0.15),
            left: `${20 + i * 15}%`,
            width: size * 0.12,
            height: size * 0.12,
            background: 'linear-gradient(135deg, #d946ef 0%, #a855f7 100%)',
            borderRadius: '50%',
          }}
        />
      ))}

      {/* Left Leg */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -size * 0.1,
          left: size * 0.15,
          width: size * 0.2,
          height: size * 0.25,
          background: 'linear-gradient(180deg, #9333ea 0%, #6d28d9 100%)',
          borderRadius: '50% 50% 40% 40%',
        }}
      />

      {/* Right Leg */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -size * 0.1,
          right: size * 0.15,
          width: size * 0.2,
          height: size * 0.25,
          background: 'linear-gradient(180deg, #6d28d9 0%, #9333ea 100%)',
          borderRadius: '40% 40% 50% 50%',
        }}
      />

      {/* Head */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: size * 0.7,
          height: size * 0.65,
          background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 100%)',
          borderRadius: '50%',
          zIndex: 2,
        }}
      />

      {/* Eyes Container - Larger, more expressive */}
      <Box
        sx={{
          position: 'absolute',
          top: size * 0.08,
          left: '50%',
          transform: 'translateX(-50%)',
          width: size * 0.55,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 3,
        }}
      >
        <MonsterEye eyeColor="#fef3c7" pupilColor="#6d28d9" size={size * 0.25} />
        <MonsterEye eyeColor="#fef3c7" pupilColor="#6d28d9" size={size * 0.25} />
      </Box>

      {/* Surprised mouth - O shape */}
      <Box
        sx={{
          position: 'absolute',
          top: size * 0.48,
          left: '50%',
          transform: 'translateX(-50%)',
          width: size * 0.18,
          height: size * 0.2,
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '50%',
          zIndex: 3,
        }}
      />

      {/* Top spikes */}
      {[0, 1].map((i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            top: -size * 0.1,
            [i === 0 ? 'left' : 'right']: `${20 + i * 60}%`,
            width: size * 0.18,
            height: size * 0.25,
            background: 'linear-gradient(180deg, #7c3aed 0%, #6d28d9 100%)',
            borderRadius: '50% 50% 50% 0',
            transform: `rotate(${i === 0 ? -30 : 30}deg)`,
            zIndex: 1,
          }}
        />
      ))}
    </Box>
  );
};
