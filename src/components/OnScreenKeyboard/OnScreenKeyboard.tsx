import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../themes/ThemeProvider';

type KeyboardMode = 'numbers' | 'letters' | 'punctuation' | 'all';

interface OnScreenKeyboardProps {
  onKeyPress: (key: string) => void;
  mode?: KeyboardMode;
  className?: string;
}

const KeyboardContainer = styled.div<{ theme: any }>`
  background: ${props => props.theme.colors.surface};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.shadows.lg};
  max-width: 600px;
  margin: 0 auto;
`;

const KeyboardRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-bottom: 4px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const KeyButton = styled.button<{ theme: any; isSpecial?: boolean }>`
  background: ${props => props.isSpecial ? props.theme.colors.secondary : props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.sm};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${props => props.theme.shadows.sm};
  
  &:hover {
    background: ${props => props.theme.colors.accent};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: ${props => props.theme.shadows.sm};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.accent};
  }
`;

const ModeSelector = styled.div<{ theme: any }>`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.md};
  justify-content: center;
`;

const ModeButton = styled.button<{ active: boolean; theme: any }>`
  background: ${props => props.active ? props.theme.colors.primary : props.theme.colors.surface};
  color: ${props => props.active ? props.theme.colors.text : props.theme.colors.textSecondary};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.sm};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.xs};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.theme.colors.accent};
  }
`;

const keyboardLayouts = {
  numbers: [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['Backspace']
  ],
  letters: [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace'],
    ['Space']
  ],
  punctuation: [
    ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'],
    ['-', '_', '=', '+', '[', ']', '{', '}', '|', '\\'],
    [';', ':', '"', "'", ',', '.', '/', '?', 'Backspace'],
    ['Space']
  ],
  all: [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace'],
    ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'],
    ['-', '_', '=', '+', '[', ']', '{', '}', '|', '\\'],
    [';', ':', '"', "'", ',', '.', '/', '?', 'Space']
  ]
};

export const OnScreenKeyboard: React.FC<OnScreenKeyboardProps> = ({
  onKeyPress,
  mode = 'letters',
  className
}) => {
  const { theme } = useTheme();
  const [currentMode, setCurrentMode] = useState<KeyboardMode>(mode);

  const handleKeyPress = (key: string) => {
    if (key === 'Backspace') {
      onKeyPress('\b');
    } else if (key === 'Space') {
      onKeyPress(' ');
    } else {
      onKeyPress(key);
    }
  };

  const currentLayout = keyboardLayouts[currentMode];

  return (
    <KeyboardContainer theme={theme} className={className}>
      <ModeSelector theme={theme}>
        {(['numbers', 'letters', 'punctuation', 'all'] as KeyboardMode[]).map((modeOption) => (
          <ModeButton
            key={modeOption}
            active={currentMode === modeOption}
            onClick={() => setCurrentMode(modeOption)}
            theme={theme}
          >
            {modeOption.charAt(0).toUpperCase() + modeOption.slice(1)}
          </ModeButton>
        ))}
      </ModeSelector>
      
      {currentLayout.map((row, rowIndex) => (
        <KeyboardRow key={rowIndex}>
          {row.map((key) => (
            <KeyButton
              key={key}
              onClick={() => handleKeyPress(key)}
              theme={theme}
              isSpecial={key === 'Backspace' || key === 'Space'}
            >
              {key === 'Backspace' ? '⌫' : key === 'Space' ? 'Space' : key}
            </KeyButton>
          ))}
        </KeyboardRow>
      ))}
    </KeyboardContainer>
  );
};