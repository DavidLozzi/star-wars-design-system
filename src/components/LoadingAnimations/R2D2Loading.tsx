import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTheme } from '../../themes/ThemeProvider';

interface R2D2LoadingProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const beep = keyframes`
  0% { opacity: 0; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0; transform: scale(0.8); }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Container = styled.div<{ size: string; theme: any }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  
  width: ${props => {
    switch (props.size) {
      case 'small': return '80px';
      case 'large': return '120px';
      default: return '100px';
    }
  }};
  
  height: ${props => {
    switch (props.size) {
      case 'small': return '100px';
      case 'large': return '140px';
      default: return '120px';
    }
  }};
`;

const R2D2Head = styled.div<{ size: string; theme: any }>`
  position: relative;
  width: ${props => {
    switch (props.size) {
      case 'small': return '60px';
      case 'large': return '80px';
      default: return '70px';
    }
  }};
  height: ${props => {
    switch (props.size) {
      case 'small': return '50px';
      case 'large': return '70px';
      default: return '60px';
    }
  }};
  background: linear-gradient(135deg, #C0C0C0 0%, #A0A0A0 50%, #808080 100%);
  border-radius: ${props => props.theme.borderRadius.lg};
  border: 2px solid #606060;
  animation: ${pulse} 2s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 20%;
    background: #404040;
    border-radius: ${props => props.theme.borderRadius.sm};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    height: 15%;
    background: #202020;
    border-radius: ${props => props.theme.borderRadius.sm};
  }
`;

const Eye = styled.div<{ size: string; theme: any; position: 'left' | 'right' }>`
  position: absolute;
  top: 25%;
  ${props => props.position}: ${props => {
    switch (props.size) {
      case 'small': return '15px';
      case 'large': return '20px';
      default: return '18px';
    }
  }};
  width: ${props => {
    switch (props.size) {
      case 'small': return '8px';
      case 'large': return '12px';
      default: return '10px';
    }
  }};
  height: ${props => {
    switch (props.size) {
      case 'small': return '8px';
      case 'large': return '12px';
      default: return '10px';
    }
  }};
  background: ${props => props.theme.colors.accent};
  border-radius: 50%;
  animation: ${beep} 1s ease-in-out infinite;
  animation-delay: ${props => props.position === 'left' ? '0s' : '0.5s'};
`;

const Dome = styled.div<{ size: string; theme: any }>`
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 30%;
  background: linear-gradient(135deg, #E0E0E0 0%, #C0C0C0 100%);
  border-radius: 50% 50% 0 0;
  border: 2px solid #606060;
  border-bottom: none;
  
  &::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    height: 40%;
    background: ${props => props.theme.colors.primary};
    border-radius: 50%;
    animation: ${rotate} 3s linear infinite;
  }
`;

const BeepIndicator = styled.div<{ size: string; theme: any }>`
  display: flex;
  gap: ${props => props.theme.spacing.xs};
  margin-top: ${props => props.theme.spacing.sm};
`;

const BeepDot = styled.div<{ theme: any; delay: number }>`
  width: 6px;
  height: 6px;
  background: ${props => props.theme.colors.accent};
  border-radius: 50%;
  animation: ${beep} 1s ease-in-out infinite;
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
  margin-top: ${props => props.theme.spacing.sm};
  animation: ${pulse} 2s ease-in-out infinite;
`;

export const R2D2Loading: React.FC<R2D2LoadingProps> = ({
  size = 'medium',
  className
}) => {
  const { theme } = useTheme();

  return (
    <Container size={size} theme={theme} className={className}>
      <R2D2Head size={size} theme={theme}>
        <Dome size={size} theme={theme} />
        <Eye size={size} theme={theme} position="left" />
        <Eye size={size} theme={theme} position="right" />
      </R2D2Head>
      <BeepIndicator size={size} theme={theme}>
        <BeepDot theme={theme} delay={0} />
        <BeepDot theme={theme} delay={0.2} />
        <BeepDot theme={theme} delay={0.4} />
      </BeepIndicator>
      <LoadingText size={size} theme={theme}>
        R2-D2 Processing...
      </LoadingText>
    </Container>
  );
};