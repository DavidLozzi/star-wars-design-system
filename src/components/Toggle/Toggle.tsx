import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTheme } from '../../themes/ThemeProvider';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const ToggleContainer = styled.div<{ size: string; disabled: boolean }>`
  position: relative;
  display: inline-block;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.6 : 1};
`;

const ToggleTrack = styled.div<{ checked: boolean; size: string; theme: any }>`
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
  background: ${props => props.checked ? props.theme.colors.primary : props.theme.colors.surface};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  transition: all 0.3s ease;
  position: relative;
  box-shadow: ${props => props.theme.shadows.sm};
`;

const ToggleThumb = styled.div<{ checked: boolean; size: string; theme: any }>`
  position: absolute;
  top: 2px;
  left: ${props => props.checked ? 'calc(100% - 2px)' : '2px'};
  transform: ${props => props.checked ? 'translateX(-100%)' : 'translateX(0)'};
  width: ${props => {
    switch (props.size) {
      case 'small': return '16px';
      case 'large': return '26px';
      default: return '21px';
    }
  }};
  height: ${props => {
    switch (props.size) {
      case 'small': return '16px';
      case 'large': return '26px';
      default: return '21px';
    }
  }};
  background: ${props => props.theme.colors.accent};
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${props => props.theme.shadows.md};
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${props => props.checked ? props.theme.colors.primary : props.theme.colors.secondary};
    animation: ${props => props.checked ? rotate : 'none'} 0.5s ease-in-out;
  }
`;

const ToggleIcon = styled.div<{ checked: boolean; size: string; theme: any }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => {
    switch (props.size) {
      case 'small': return '8px';
      case 'large': return '14px';
      default: return '12px';
    }
  }};
  height: ${props => {
    switch (props.size) {
      case 'small': return '8px';
      case 'large': return '14px';
      default: return '12px';
    }
  }};
  transition: all 0.3s ease;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => {
      const { themeName } = props.theme;
      if (themeName === 'rebel') {
        return props.checked 
          ? `radial-gradient(circle, ${props.theme.colors.accent} 0%, ${props.theme.colors.primary} 70%)` // Rebel logo
          : `radial-gradient(circle, ${props.theme.colors.secondary} 0%, ${props.theme.colors.primary} 70%)`; // Empire logo
      } else if (themeName === 'empire') {
        return props.checked 
          ? `radial-gradient(circle, ${props.theme.colors.accent} 0%, ${props.theme.colors.primary} 70%)` // Empire logo
          : `radial-gradient(circle, ${props.theme.colors.secondary} 0%, ${props.theme.colors.primary} 70%)`; // Rebel logo
      } else if (themeName === 'jedi') {
        return props.checked 
          ? `radial-gradient(circle, ${props.theme.colors.accent} 0%, ${props.theme.colors.primary} 70%)` // Jedi symbol
          : `radial-gradient(circle, ${props.theme.colors.secondary} 0%, ${props.theme.colors.primary} 70%)`; // Sith symbol
      } else {
        return props.checked 
          ? `radial-gradient(circle, ${props.theme.colors.accent} 0%, ${props.theme.colors.primary} 70%)` // Sith symbol
          : `radial-gradient(circle, ${props.theme.colors.secondary} 0%, ${props.theme.colors.primary} 70%)`; // Jedi symbol
      }
    }};
    border-radius: 50%;
    animation: ${props.checked ? rotate : 'none'} 0.5s ease-in-out;
  }
`;

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  disabled = false,
  size = 'medium',
  className
}) => {
  const { theme } = useTheme();

  const handleToggle = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <ToggleContainer 
      size={size} 
      disabled={disabled} 
      onClick={handleToggle}
      className={className}
    >
      <ToggleTrack checked={checked} size={size} theme={theme}>
        <ToggleThumb checked={checked} size={size} theme={theme}>
          <ToggleIcon checked={checked} size={size} theme={theme} />
        </ToggleThumb>
      </ToggleTrack>
    </ToggleContainer>
  );
};