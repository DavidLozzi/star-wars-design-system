import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toggle } from './Toggle';
import { ThemeProvider } from '../../themes/ThemeProvider';

const ToggleWrapper = ({ checked, onChange, ...props }: any) => {
  const [isChecked, setIsChecked] = useState(checked);
  
  const handleChange = (newChecked: boolean) => {
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };
  
  return (
    <Toggle 
      checked={isChecked} 
      onChange={handleChange} 
      {...props} 
    />
  );
};

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: ToggleWrapper,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="rebel">
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'Toggle state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the toggle',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
    size: 'medium',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    checked: false,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    checked: true,
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    size: 'medium',
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    size: 'medium',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
      <div>
        <h3>Small</h3>
        <ToggleWrapper checked={false} size="small" />
      </div>
      <div>
        <h3>Medium</h3>
        <ToggleWrapper checked={true} size="medium" />
      </div>
      <div>
        <h3>Large</h3>
        <ToggleWrapper checked={false} size="large" />
      </div>
    </div>
  ),
};

export const ThemeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3>Rebel Theme</h3>
        <ThemeProvider initialTheme="rebel">
          <ToggleWrapper checked={true} />
        </ThemeProvider>
      </div>
      <div>
        <h3>Empire Theme</h3>
        <ThemeProvider initialTheme="empire">
          <ToggleWrapper checked={false} />
        </ThemeProvider>
      </div>
      <div>
        <h3>Jedi Theme</h3>
        <ThemeProvider initialTheme="jedi">
          <ToggleWrapper checked={true} />
        </ThemeProvider>
      </div>
      <div>
        <h3>Sith Theme</h3>
        <ThemeProvider initialTheme="sith">
          <ToggleWrapper checked={false} />
        </ThemeProvider>
      </div>
    </div>
  ),
};