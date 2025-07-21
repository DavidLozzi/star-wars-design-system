import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useTheme } from '../../themes/ThemeProvider';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'danger' | 'success';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconDefinition;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px currentColor; }
  50% { box-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
  100% { box-shadow: 0 0 5px currentColor; }
`;

const StyledButton = styled.button<{
  variant: ButtonVariant;
  size: ButtonSize;
  theme: any;
  disabled: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  font-family: ${props => props.theme.typography.fontFamily};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  border: 2px solid transparent;
  border-radius: ${props => props.theme.borderRadius.md};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.sm};
  
  /* Size variants */
  padding: ${props => {
    switch (props.size) {
      case 'small': return `${props.theme.spacing.xs} ${props.theme.spacing.sm}`;
      case 'large': return `${props.theme.spacing.md} ${props.theme.spacing.lg}`;
      default: return `${props.theme.spacing.sm} ${props.theme.spacing.md}`;
    }
  }};
  
  font-size: ${props => {
    switch (props.size) {
      case 'small': return props.theme.typography.fontSize.sm;
      case 'large': return props.theme.typography.fontSize.lg;
      default: return props.theme.typography.fontSize.md;
    }
  }};
  
  /* Color variants */
  background: ${props => {
    if (props.disabled) return props.theme.colors.surface;
    
    switch (props.variant) {
      case 'primary': return props.theme.colors.primary;
      case 'secondary': return props.theme.colors.secondary;
      case 'accent': return props.theme.colors.accent;
      case 'danger': return props.theme.colors.error;
      case 'success': return props.theme.colors.success;
      default: return props.theme.colors.primary;
    }
  }};
  
  color: ${props => props.theme.colors.text};
  border-color: ${props => {
    if (props.disabled) return props.theme.colors.border;
    
    switch (props.variant) {
      case 'primary': return props.theme.colors.primary;
      case 'secondary': return props.theme.colors.secondary;
      case 'accent': return props.theme.colors.accent;
      case 'danger': return props.theme.colors.error;
      case 'success': return props.theme.colors.success;
      default: return props.theme.colors.primary;
    }
  }};
  
  opacity: ${props => props.disabled ? 0.6 : 1};
  
  /* Hover effects */
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
    animation: ${pulse} 0.3s ease-in-out;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      animation: ${glow} 1s ease-in-out;
    }
  }
  
  /* Active state */
  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: ${props => props.theme.shadows.sm};
  }
  
  /* Focus state */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.theme.colors.accent};
  }
  
  /* Disabled state */
  &:disabled {
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const IconWrapper = styled.span<{ position: 'left' | 'right' }>`
  display: flex;
  align-items: center;
  order: ${props => props.position === 'left' ? -1 : 1};
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'left',
  disabled = false,
  className,
  type = 'button'
}) => {
  const { theme } = useTheme();

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <StyledButton
      variant={variant}
      size={size}
      theme={theme}
      disabled={disabled}
      onClick={handleClick}
      className={className}
      type={type}
    >
      {icon && iconPosition === 'left' && (
        <IconWrapper position="left">
          <FontAwesomeIcon icon={icon} />
        </IconWrapper>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <IconWrapper position="right">
          <FontAwesomeIcon icon={icon} />
        </IconWrapper>
      )}
    </StyledButton>
  );
};