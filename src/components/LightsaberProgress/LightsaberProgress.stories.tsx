import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LightsaberProgress } from './LightsaberProgress';
import { ThemeProvider } from '../../themes/ThemeProvider';

const meta: Meta<typeof LightsaberProgress> = {
  title: 'Components/LightsaberProgress',
  component: LightsaberProgress,
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
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress percentage (0-100)',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the lightsaber',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 50,
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    progress: 75,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    progress: 25,
    size: 'large',
  },
};

export const Complete: Story = {
  args: {
    progress: 100,
    size: 'medium',
  },
};

export const Empty: Story = {
  args: {
    progress: 0,
    size: 'medium',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
      <div>
        <h3>Small</h3>
        <LightsaberProgress progress={30} size="small" />
      </div>
      <div>
        <h3>Medium</h3>
        <LightsaberProgress progress={60} size="medium" />
      </div>
      <div>
        <h3>Large</h3>
        <LightsaberProgress progress={90} size="large" />
      </div>
    </div>
  ),
};

export const AllThemes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
      <div>
        <h3>Jedi Theme</h3>
        <ThemeProvider initialTheme="jedi">
          <LightsaberProgress {...args} />
        </ThemeProvider>
      </div>
      <div>
        <h3>Sith Theme</h3>
        <ThemeProvider initialTheme="sith">
          <LightsaberProgress {...args} />
        </ThemeProvider>
      </div>
      <div>
        <h3>Rebel Theme</h3>
        <ThemeProvider initialTheme="rebel">
          <LightsaberProgress {...args} />
        </ThemeProvider>
      </div>
      <div>
        <h3>Empire Theme</h3>
        <ThemeProvider initialTheme="empire">
          <LightsaberProgress {...args} />
        </ThemeProvider>
      </div>
    </div>
  ),
  args: {
    progress: 75,
    size: 'medium',
  },
};