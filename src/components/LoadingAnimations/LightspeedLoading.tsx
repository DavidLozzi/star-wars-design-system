import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTheme } from '../../themes/ThemeProvider';

interface LightspeedLoadingProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const lightspeed = keyframes`
  0% { 
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
  25% { 
    transform: scale(0.8) rotate(90deg);
    opacity: 0.8;
  }
  50% { 
    transform: scale(0.1) rotate(180deg);
    opacity: 0.3;
  }
  75% { 
    transform: scale(0.8) rotate(270deg);
    opacity: 0.8;
  }
  100% { 
    transform: scale(1) rotate(360deg);
    opacity: 1;
  }
`;

const starTrail = keyframes`
  0% { 
    transform: translateX(-100%) scale(0);
    opacity: 0;
  }
  50% { 
    transform: translateX(0%) scale(1);
    opacity: 1;
  }
  100% { 
    transform: translateX(100%) scale(0);
    opacity: 0;
  }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const Container = styled.div<{ size: string; theme: any }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
  
  width: ${props => {
    switch (props.size) {
      case 'small': return '120px';
      case 'large': return '200px';
      default: return '160px';
    }
  }};
  
  height: ${props => {
    switch (props.size) {
      case 'small': return '120px';
      case 'large': return '200px';
      default: return '160px';
    }
  }};
`;

const Ship = styled.div<{ size: string; theme: any }>`
  position: relative;
  width: ${props => {
    switch (props.size) {
      case 'small': return '40px';
      case 'large': return '60px';
      default: return '50px';
    }
  }};
  height: ${props => {
    switch (props.size) {
      case 'small': return '20px';
      case 'large': return '30px';
      default: return '25px';
    }
  }};
  background: linear-gradient(90deg, 
    ${props => props.theme.colors.primary} 0%, 
    ${props => props.theme.colors.secondary} 50%, 
    ${props => props.theme.colors.accent} 100%
  );
  border-radius: ${props => props.theme.borderRadius.sm};
  animation: ${lightspeed} 3s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -10px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid ${props => props.theme.colors.accent};
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -10px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-right: 10px solid ${props => props.theme.colors.primary};
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
`;

const StarTrail = styled.div<{ size: string; theme: any; delay: number }>`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    ${props => props.theme.colors.accent} 50%, 
    transparent 100%
  );
  transform: translateY(-50%);
  animation: ${starTrail} 2s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

const LoadingText = styled.div<{ size: string; theme: any }>`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => {
    switch (props.size) {
      case 'small': return props.theme.typography.fontSize.xs;
      case 'large': return props.theme.typography.fontSize.md;
      default: return props.theme.typography.fontSize.sm;
    }
  }};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  animation: ${pulse} 2s ease-in-out infinite;
`;

const SpeedIndicator = styled.div<{ size: string; theme: any }>`
  display: flex;
  gap: ${props => props.theme.spacing.xs};
  margin-top: ${props => props.theme.spacing.sm};
`;

const SpeedDot = styled.div<{ theme: any; delay: number }>`
  width: 4px;
  height: 4px;
  background: ${props => props.theme.colors.accent};
  border-radius: 50%;
  animation: ${pulse} 1s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

export const LightspeedLoading: React.FC<LightspeedLoadingProps> = ({
  size = 'medium',
  className
}) => {
  const { theme } = useTheme();

  return (
    <Container size={size} theme={theme} className={className}>
      <Ship size={size} theme={theme}>
        <StarTrail size={size} theme={theme} delay={0} />
        <StarTrail size={size} theme={theme} delay={0.5} />
        <StarTrail size={size} theme={theme} delay={1} />
      </Ship>
      <LoadingText size={size} theme={theme}>
        Engaging Lightspeed...
      </LoadingText>
      <SpeedIndicator size={size} theme={theme}>
        <SpeedDot theme={theme} delay={0} />
        <SpeedDot theme={theme} delay={0.2} />
        <SpeedDot theme={theme} delay={0.4} />
        <SpeedDot theme={theme} delay={0.6} />
        <SpeedDot theme={theme} delay={0.8} />
      </SpeedIndicator>
    </Container>
  );
};