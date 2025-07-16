import type { Meta, StoryObj } from '@storybook/react';
import { LightsaberLoading } from './LightsaberLoading';
import { R2D2Loading } from './R2D2Loading';
import { LightspeedLoading } from './LightspeedLoading';
import { ThemeProvider } from '../../themes/ThemeProvider';

const meta: Meta<typeof LightsaberLoading> = {
  title: 'Components/Loading Animations',
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
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Lightsaber: Story = {
  render: () => <LightsaberLoading size="medium" />,
};

export const R2D2: Story = {
  render: () => <R2D2Loading size="medium" />,
};

export const Lightspeed: Story = {
  render: () => <LightspeedLoading size="medium" />,
};

export const AllAnimations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
      <div>
        <h3>Lightsaber Loading</h3>
        <LightsaberLoading size="medium" />
      </div>
      <div>
        <h3>R2-D2 Loading</h3>
        <R2D2Loading size="medium" />
      </div>
      <div>
        <h3>Lightspeed Loading</h3>
        <LightspeedLoading size="medium" />
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3>Small</h3>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
          <LightsaberLoading size="small" />
          <R2D2Loading size="small" />
          <LightspeedLoading size="small" />
        </div>
      </div>
      <div>
        <h3>Medium</h3>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
          <LightsaberLoading size="medium" />
          <R2D2Loading size="medium" />
          <LightspeedLoading size="medium" />
        </div>
      </div>
      <div>
        <h3>Large</h3>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
          <LightsaberLoading size="large" />
          <R2D2Loading size="large" />
          <LightspeedLoading size="large" />
        </div>
      </div>
    </div>
  ),
};

export const ThemeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div>
        <h3>Jedi Theme</h3>
        <ThemeProvider initialTheme="jedi">
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            <LightsaberLoading size="medium" />
            <R2D2Loading size="medium" />
            <LightspeedLoading size="medium" />
          </div>
        </ThemeProvider>
      </div>
      <div>
        <h3>Sith Theme</h3>
        <ThemeProvider initialTheme="sith">
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            <LightsaberLoading size="medium" />
            <R2D2Loading size="medium" />
            <LightspeedLoading size="medium" />
          </div>
        </ThemeProvider>
      </div>
      <div>
        <h3>Rebel Theme</h3>
        <ThemeProvider initialTheme="rebel">
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            <LightsaberLoading size="medium" />
            <R2D2Loading size="medium" />
            <LightspeedLoading size="medium" />
          </div>
        </ThemeProvider>
      </div>
      <div>
        <h3>Empire Theme</h3>
        <ThemeProvider initialTheme="empire">
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            <LightsaberLoading size="medium" />
            <R2D2Loading size="medium" />
            <LightspeedLoading size="medium" />
          </div>
        </ThemeProvider>
      </div>
    </div>
  ),
};