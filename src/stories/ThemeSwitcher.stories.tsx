import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, useTheme } from '../themes/ThemeProvider';
import { Button } from '../components/Button/Button';
import { faJedi, faSith, faRebel, faEmpire } from '@fortawesome/free-solid-svg-icons';

const ThemeSwitcher = () => {
  const { theme, themeName, setTheme } = useTheme();
  
  return (
    <div style={{ 
      padding: '2rem', 
      background: theme.colors.background,
      color: theme.colors.text,
      minHeight: '100vh',
      fontFamily: theme.typography.fontFamily
    }}>
      <h1 style={{ color: theme.colors.primary, marginBottom: '2rem' }}>
        Star Wars Design System - {themeName.toUpperCase()} Theme
      </h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <h2>Theme Switcher</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button 
            onClick={() => setTheme('jedi')} 
            variant={themeName === 'jedi' ? 'primary' : 'secondary'}
            icon={faJedi}
          >
            Jedi Theme
          </Button>
          <Button 
            onClick={() => setTheme('sith')} 
            variant={themeName === 'sith' ? 'primary' : 'secondary'}
            icon={faSith}
          >
            Sith Theme
          </Button>
          <Button 
            onClick={() => setTheme('rebel')} 
            variant={themeName === 'rebel' ? 'primary' : 'secondary'}
            icon={faRebel}
          >
            Rebel Theme
          </Button>
          <Button 
            onClick={() => setTheme('empire')} 
            variant={themeName === 'empire' ? 'primary' : 'secondary'}
            icon={faEmpire}
          >
            Empire Theme
          </Button>
        </div>
      </div>
      
      <div style={{ 
        padding: '2rem', 
        background: theme.colors.surface,
        borderRadius: theme.borderRadius.md,
        border: `2px solid ${theme.colors.border}`,
        boxShadow: theme.shadows.md
      }}>
        <h3>Current Theme Colors</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div style={{ padding: '1rem', background: theme.colors.primary, borderRadius: theme.borderRadius.sm }}>
            Primary: {theme.colors.primary}
          </div>
          <div style={{ padding: '1rem', background: theme.colors.secondary, borderRadius: theme.borderRadius.sm }}>
            Secondary: {theme.colors.secondary}
          </div>
          <div style={{ padding: '1rem', background: theme.colors.accent, borderRadius: theme.borderRadius.sm }}>
            Accent: {theme.colors.accent}
          </div>
          <div style={{ padding: '1rem', background: theme.colors.surface, border: `2px solid ${theme.colors.border}`, borderRadius: theme.borderRadius.sm }}>
            Surface: {theme.colors.surface}
          </div>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Design System/Theme Switcher',
  component: ThemeSwitcher,
  parameters: {
    layout: 'fullscreen',
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

export const Default: Story = {};