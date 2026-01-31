import { Box } from '@mui/material';
import { MonsterEye } from './MonsterEye';
import './Monster.css';

interface OrangeMonsterProps {
  size?: number;
  animationClass?: string;
}

export const OrangeMonster = ({ size = 100, animationClass = 'monster-wiggle' }: OrangeMonsterProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: size * 1.15,
        height: size * 1.2,
        filter: 'drop-shadow(0 4px 12px rgba(249, 115, 22, 0.3))',
      }}
    >
      {/* Main Body - Orange gradient */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: size,
          height: size * 0.78,
          background: 'linear-gradient(135deg, #f97316 0%, #c2410c 100%)',
          borderRadius: '48% 52% 45% 55%',
        }}
      />

      {/* Left spike - bouncy */}
      <Box
        className={animationClass}
        sx={{
          position: 'absolute',
          bottom: size * 0.35,
          left: -size * 0.1,
          width: size * 0.28,
          height: size * 0.32,
          background: 'linear-gradient(90deg, #fb923c 0%, #c2410c 100%)',
          borderRadius: '50% 50% 40% 60%',
          transform: 'rotate(-35deg)',
        }}
      />

      {/* Right spike - bouncy */}
      <Box
        className={animationClass}
        sx={{
          position: 'absolute',
          bottom: size * 0.35,
          right: -size * 0.1,
          width: size * 0.28,
          height: size * 0.32,
          background: 'linear-gradient(90deg, #c2410c 0%, #fb923c 100%)',
          borderRadius: '60% 40% 60% 40%',
          transform: 'rotate(35deg)',
        }}
      />

      {/* Head */}
      <Box
        sx={{
          position: 'absolute',
          top: -size * 0.05,
          left: '50%',
          transform: 'translateX(-50%)',
          width: size * 0.82,
          height: size * 0.7,
          background: 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)',
          borderRadius: '52% 48% 50% 50%',
          zIndex: 2,
        }}
      />

      {/* Eyes Container - Very expressive and fun */}
      <Box
        sx={{
          position: 'absolute',
          top: size * 0.12,
          left: '50%',
          transform: 'translateX(-50%)',
          width: size * 0.55,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 3,
        }}
      >
        <MonsterEye eyeColor="#fef3c7" pupilColor="#c2410c" size={size * 0.24} />
        <MonsterEye eyeColor="#fef3c7" pupilColor="#c2410c" size={size * 0.24} />
      </Box>

      {/* Playful grin */}
      <Box
        sx={{
          position: 'absolute',
          top: size * 0.52,
          left: '50%',
          transform: 'translateX(-50%)',
          width: size * 0.28,
          zIndex: 3,
        }}
      >
        <svg viewBox="0 0 100 50" style={{ width: '100%', height: 'auto' }}>
          <path d="M 15 40 Q 50 15 85 40" stroke="rgba(0,0,0,0.3)" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Teeth marks */}
          <line x1="30" y1="35" x2="30" y2="40" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
          <line x1="50" y1="20" x2="50" y2="35" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
          <line x1="70" y1="35" x2="70" y2="40" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
        </svg>
      </Box>

      {/* Top tuft - orange spiky hair */}
      <Box
        className="monster-bounce-1"
        sx={{
          position: 'absolute',
          top: -size * 0.2,
          left: '45%',
          width: size * 0.12,
          height: size * 0.28,
          background: 'linear-gradient(180deg, #ea580c 0%, #c2410c 100%)',
          borderRadius: '50% 50% 50% 0',
          transform: 'rotate(-30deg)',
          zIndex: 1,
        }}
      />

      <Box
        className="monster-bounce-2"
        sx={{
          position: 'absolute',
          top: -size * 0.22,
          left: '50%',
          width: size * 0.12,
          height: size * 0.3,
          background: 'linear-gradient(180deg, #fb923c 0%, #c2410c 100%)',
          borderRadius: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
        }}
      />

      <Box
        className="monster-bounce-3"
        sx={{
          position: 'absolute',
          top: -size * 0.2,
          right: '45%',
          width: size * 0.12,
          height: size * 0.28,
          background: 'linear-gradient(180deg, #c2410c 0%, #ea580c 100%)',
          borderRadius: '50% 50% 0 50%',
          transform: 'rotate(30deg)',
          zIndex: 1,
        }}
      />
    </Box>
  );
};
