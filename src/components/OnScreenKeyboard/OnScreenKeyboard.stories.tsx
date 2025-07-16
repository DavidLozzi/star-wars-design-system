import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { OnScreenKeyboard } from './OnScreenKeyboard';
import { ThemeProvider } from '../../themes/ThemeProvider';

const KeyboardWrapper = ({ mode, ...props }: any) => {
  const [text, setText] = useState('');
  
  const handleKeyPress = (key: string) => {
    if (key === '\b') {
      setText(prev => prev.slice(0, -1));
    } else {
      setText(prev => prev + key);
    }
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <div style={{ 
        padding: '1rem', 
        border: '2px solid #ccc', 
        borderRadius: '8px', 
        minHeight: '60px',
        minWidth: '300px',
        background: '#f9f9f9',
        fontFamily: 'monospace',
        fontSize: '16px'
      }}>
        {text || 'Type here...'}
      </div>
      <OnScreenKeyboard onKeyPress={handleKeyPress} mode={mode} {...props} />
    </div>
  );
};

const meta: Meta<typeof OnScreenKeyboard> = {
  title: 'Components/OnScreenKeyboard',
  component: KeyboardWrapper,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="jedi">
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['numbers', 'letters', 'punctuation', 'all'],
      description: 'Keyboard mode',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Letters: Story = {
  args: {
    mode: 'letters',
  },
};

export const Numbers: Story = {
  args: {
    mode: 'numbers',
  },
};

export const Punctuation: Story = {
  args: {
    mode: 'punctuation',
  },
};

export const All: Story = {
  args: {
    mode: 'all',
  },
};

export const ThemeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3>Jedi Theme</h3>
        <ThemeProvider initialTheme="jedi">
          <KeyboardWrapper mode="letters" />
        </ThemeProvider>
      </div>
      <div>
        <h3>Sith Theme</h3>
        <ThemeProvider initialTheme="sith">
          <KeyboardWrapper mode="letters" />
        </ThemeProvider>
      </div>
      <div>
        <h3>Rebel Theme</h3>
        <ThemeProvider initialTheme="rebel">
          <KeyboardWrapper mode="letters" />
        </ThemeProvider>
      </div>
      <div>
        <h3>Empire Theme</h3>
        <ThemeProvider initialTheme="empire">
          <KeyboardWrapper mode="letters" />
        </ThemeProvider>
      </div>
    </div>
  ),
};