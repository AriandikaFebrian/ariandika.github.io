import { Box } from '@mui/material';
import { useEffect, useRef, useState, useCallback } from 'react';

interface MonsterEyeProps {
  eyeColor: string;
  pupilColor?: string;
  size?: number;
}

export const MonsterEye = ({
  eyeColor,
  pupilColor = '#000',
  size = 40,
}: MonsterEyeProps) => {
  const eyeRef = useRef<HTMLDivElement>(null);
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  // Store last mouse position using useRef for scroll handling
  const lastMousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  const updatePupilPosition = useCallback((clientX: number, clientY: number) => {
    if (!eyeRef.current) return;

    const eyeRect = eyeRef.current.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const angle = Math.atan2(clientY - eyeCenterY, clientX - eyeCenterX);
    const distance = size * 0.3; // Max distance pupil can travel

    setPupilPos({
      x: distance * Math.cos(angle),
      y: distance * Math.sin(angle),
    });
  }, [size]);

  useEffect(() => {
    // Store last mouse position for scroll handling
    const handleMouseMove = (e: MouseEvent) => {
      lastMousePos.current = { x: e.clientX, y: e.clientY };
      updatePupilPosition(e.clientX, e.clientY);
    };

    const handleScroll = () => {
      // Recalculate pupil position based on stored mouse position
      if (eyeRef.current) {
        updatePupilPosition(lastMousePos.current.x, lastMousePos.current.y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [updatePupilPosition]);

  return (
    <Box
      ref={eyeRef}
      sx={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: eyeColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        border: `2px solid rgba(0,0,0,0.1)`,
        cursor: 'pointer',
      }}
    >
      {/* Pupil */}
      <Box
        sx={{
          width: size * 0.45,
          height: size * 0.45,
          borderRadius: '50%',
          backgroundColor: pupilColor,
          transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)`,
          transition: 'transform 0.05s ease-out',
          position: 'relative',
        }}
      >
        {/* Eye shine for more life */}
        <Box
          sx={{
            position: 'absolute',
            width: '35%',
            height: '35%',
            backgroundColor: 'rgba(255,255,255,0.6)',
            borderRadius: '50%',
            top: '15%',
            left: '15%',
          }}
        />
      </Box>
    </Box>
  );
};

