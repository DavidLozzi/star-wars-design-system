import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTheme } from '../../themes/ThemeProvider';

interface LightsaberProgressProps {
  progress: number; // 0-100
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const laserGlow = keyframes`
  0% { box-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor; }
  50% { box-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor; }
  100% { box-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor; }
`;

const laserMove = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0%); }
`;

const LightsaberContainer = styled.div<{ size: string }>`
  position: relative;
  width: ${props => {
    switch (props.size) {
      case 'small': return '200px';
      case 'large': return '400px';
      default: return '300px';
    }
  }};
  height: ${props => {
    switch (props.size) {
      case 'small': return '20px';
      case 'large': return '30px';
      default: return '25px';
    }
  }};
  background: ${props => props.theme.colors.surface};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.sm};
`;

const LightsaberHandle = styled.div<{ size: string }>`
  position: absolute;
  left: 0;
  top: 0;
  width: ${props => {
    switch (props.size) {
      case 'small': return '30px';
      case 'large': return '50px';
      default: return '40px';
    }
  }};
  height: 100%;
  background: linear-gradient(45deg, #333, #666, #333);
  border-right: 2px solid #000;
  z-index: 2;
`;

const LaserBeam = styled.div<{ progress: number; size: string; theme: any }>`
  position: absolute;
  left: ${props => {
    switch (props.size) {
      case 'small': return '30px';
      case 'large': return '50px';
      default: return '40px';
    }
  }};
  top: 0;
  height: 100%;
  width: ${props => props.progress}%;
  background: linear-gradient(90deg, 
    ${props => props.theme.colors.primary} 0%, 
    ${props => props.theme.colors.secondary} 50%, 
    ${props => props.theme.colors.accent} 100%
  );
  animation: ${laserGlow} 2s ease-in-out infinite;
  transition: width 0.5s ease-in-out;
  
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background: ${props => props.theme.colors.accent};
    animation: ${laserMove} 1s ease-in-out infinite;
  }
`;

const ProgressText = styled.div<{ size: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => {
    switch (props.size) {
      case 'small': return props.theme.typography.fontSize.xs;
      case 'large': return props.theme.typography.fontSize.md;
      default: return props.theme.typography.fontSize.sm;
    }
  }};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  z-index: 3;
  text-shadow: 0 0 5px ${props => props.theme.colors.text};
`;

export const LightsaberProgress: React.FC<LightsaberProgressProps> = ({
  progress,
  size = 'medium',
  className
}) => {
  const { theme } = useTheme();
  
  // Ensure progress is between 0 and 100
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <LightsaberContainer size={size} className={className}>
      <LightsaberHandle size={size} />
      <LaserBeam 
        progress={clampedProgress} 
        size={size} 
        theme={theme}
      />
      <ProgressText size={size} theme={theme}>
        {Math.round(clampedProgress)}%
      </ProgressText>
    </LightsaberContainer>
  );
};