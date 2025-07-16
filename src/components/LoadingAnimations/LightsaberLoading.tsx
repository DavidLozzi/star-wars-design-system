import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTheme } from '../../themes/ThemeProvider';

interface LightsaberLoadingProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const expand = keyframes`
  0% { width: 0%; opacity: 0; }
  50% { width: 100%; opacity: 1; }
  100% { width: 0%; opacity: 0; }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px currentColor, 0 0 10px currentColor; }
  50% { box-shadow: 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor; }
  100% { box-shadow: 0 0 5px currentColor, 0 0 10px currentColor; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const Container = styled.div<{ size: string; theme: any }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  
  width: ${props => {
    switch (props.size) {
      case 'small': return '120px';
      case 'large': return '200px';
      default: return '160px';
    }
  }};
  
  height: ${props => {
    switch (props.size) {
      case 'small': return '40px';
      case 'large': return '60px';
      default: return '50px';
    }
  }};
`;

const Handle = styled.div<{ size: string; theme: any }>`
  width: ${props => {
    switch (props.size) {
      case 'small': return '20px';
      case 'large': return '30px';
      default: return '25px';
    }
  }};
  height: 100%;
  background: linear-gradient(45deg, #333, #666, #333);
  border-radius: ${props => props.theme.borderRadius.sm};
  position: relative;
  animation: ${pulse} 2s ease-in-out infinite;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 4px;
    background: ${props => props.theme.colors.accent};
    border-radius: 50%;
    animation: ${glow} 1s ease-in-out infinite;
  }
`;

const Beam = styled.div<{ size: string; theme: any }>`
  height: 100%;
  background: linear-gradient(90deg, 
    ${props => props.theme.colors.primary} 0%, 
    ${props => props.theme.colors.secondary} 50%, 
    ${props => props.theme.colors.accent} 100%
  );
  border-radius: ${props => props.theme.borderRadius.sm};
  animation: ${expand} 2s ease-in-out infinite, ${glow} 1s ease-in-out infinite;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background: ${props => props.theme.colors.accent};
    border-radius: 0 ${props => props.theme.borderRadius.sm} ${props => props.theme.borderRadius.sm} 0;
  }
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
  margin-left: ${props => props.theme.spacing.sm};
  animation: ${pulse} 2s ease-in-out infinite;
`;

export const LightsaberLoading: React.FC<LightsaberLoadingProps> = ({
  size = 'medium',
  className
}) => {
  const { theme } = useTheme();

  return (
    <Container size={size} theme={theme} className={className}>
      <Handle size={size} theme={theme} />
      <Beam size={size} theme={theme} />
      <LoadingText size={size} theme={theme}>
        Loading...
      </LoadingText>
    </Container>
  );
};