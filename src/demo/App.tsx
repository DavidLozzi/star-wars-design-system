import React, { useState } from 'react';
import { ThemeProvider, useTheme } from '../themes/ThemeProvider';
import { Button } from '../components/Button/Button';
import { LightsaberProgress } from '../components/LightsaberProgress/LightsaberProgress';
import { Toggle } from '../components/Toggle/Toggle';
import { OnScreenKeyboard } from '../components/OnScreenKeyboard/OnScreenKeyboard';
import { LightsaberLoading } from '../components/LoadingAnimations/LightsaberLoading';
import { R2D2Loading } from '../components/LoadingAnimations/R2D2Loading';
import { LightspeedLoading } from '../components/LoadingAnimations/LightspeedLoading';
import { 
  faLightbulb, 
  faStar, 
  faHeart, 
  faArrowRight,
  faUser,
  faUserTie,
  faFlag,
  faCrown
} from '@fortawesome/free-solid-svg-icons';

const DemoApp = () => {
  const { theme, themeName, setTheme } = useTheme();
  const [progress, setProgress] = useState(50);
  const [toggleState, setToggleState] = useState(false);
  const [keyboardText, setKeyboardText] = useState('');
  const [showLoading, setShowLoading] = useState(false);

  const handleKeyPress = (key: string) => {
    if (key === '\b') {
      setKeyboardText(prev => prev.slice(0, -1));
    } else {
      setKeyboardText(prev => prev + key);
    }
  };

  const handleLoadingDemo = () => {
    setShowLoading(true);
    setTimeout(() => setShowLoading(false), 3000);
  };

  return (
    <div style={{ 
      padding: '2rem', 
      background: theme.colors.background,
      color: theme.colors.text,
      minHeight: '100vh',
      fontFamily: theme.typography.fontFamily
    }}>
      <header style={{ 
        textAlign: 'center', 
        marginBottom: '3rem',
        padding: '2rem',
        background: theme.colors.surface,
        borderRadius: theme.borderRadius.lg,
        border: `2px solid ${theme.colors.border}`,
        boxShadow: theme.shadows.md
      }}>
        <h1 style={{ color: theme.colors.primary, marginBottom: '1rem' }}>
          Star Wars Design System Demo
        </h1>
        <p style={{ color: theme.colors.textSecondary }}>
          Current Theme: {themeName.toUpperCase()}
        </p>
      </header>

      {/* Theme Switcher */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: theme.colors.primary, marginBottom: '1rem' }}>Theme Switcher</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button 
            onClick={() => setTheme('jedi')} 
            variant={themeName === 'jedi' ? 'primary' : 'secondary'}
            icon={faUser}
          >
            Jedi
          </Button>
          <Button 
            onClick={() => setTheme('sith')} 
            variant={themeName === 'sith' ? 'primary' : 'secondary'}
            icon={faUserTie}
          >
            Sith
          </Button>
          <Button 
            onClick={() => setTheme('rebel')} 
            variant={themeName === 'rebel' ? 'primary' : 'secondary'}
            icon={faFlag}
          >
            Rebel
          </Button>
          <Button 
            onClick={() => setTheme('empire')} 
            variant={themeName === 'empire' ? 'primary' : 'secondary'}
            icon={faCrown}
          >
            Empire
          </Button>
        </div>
      </section>

      {/* Lightsaber Progress */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: theme.colors.primary, marginBottom: '1rem' }}>Lightsaber Progress</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <LightsaberProgress progress={progress} size="large" />
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={progress} 
            onChange={(e) => setProgress(Number(e.target.value))}
            style={{ width: '300px' }}
          />
          <span>Progress: {progress}%</span>
        </div>
      </section>

      {/* Toggle */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: theme.colors.primary, marginBottom: '1rem' }}>Toggle Switch</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <Toggle 
            checked={toggleState} 
            onChange={setToggleState}
            size="large"
          />
          <span>State: {toggleState ? 'ON' : 'OFF'}</span>
        </div>
      </section>

      {/* On-Screen Keyboard */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: theme.colors.primary, marginBottom: '1rem' }}>On-Screen Keyboard</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ 
            padding: '1rem', 
            border: `2px solid ${theme.colors.border}`, 
            borderRadius: theme.borderRadius.md, 
            minHeight: '60px',
            minWidth: '300px',
            background: theme.colors.surface,
            fontFamily: 'monospace',
            fontSize: '16px'
          }}>
            {keyboardText || 'Type here...'}
          </div>
          <OnScreenKeyboard onKeyPress={handleKeyPress} mode="letters" />
        </div>
      </section>

      {/* Loading Animations */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: theme.colors.primary, marginBottom: '1rem' }}>Loading Animations</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <Button onClick={handleLoadingDemo} icon={faStar}>
            {showLoading ? 'Loading...' : 'Show Loading Animations'}
          </Button>
          
          {showLoading && (
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
              <div>
                <h3>Lightsaber</h3>
                <LightsaberLoading size="medium" />
              </div>
              <div>
                <h3>R2-D2</h3>
                <R2D2Loading size="medium" />
              </div>
              <div>
                <h3>Lightspeed</h3>
                <LightspeedLoading size="medium" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Button Examples */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: theme.colors.primary, marginBottom: '1rem' }}>Button Examples</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button variant="primary" icon={faLightbulb}>Primary</Button>
            <Button variant="secondary" icon={faStar}>Secondary</Button>
            <Button variant="accent" icon={faHeart}>Accent</Button>
            <Button variant="danger" icon={faArrowRight}>Danger</Button>
            <Button variant="success" icon={faStar}>Success</Button>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button size="small" icon={faStar}>Small</Button>
            <Button size="medium" icon={faStar}>Medium</Button>
            <Button size="large" icon={faStar}>Large</Button>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button disabled>Disabled</Button>
            <Button icon={faArrowRight} iconPosition="right">Icon Right</Button>
          </div>
        </div>
      </section>

      {/* Theme Info */}
      <section style={{ 
        padding: '2rem', 
        background: theme.colors.surface,
        borderRadius: theme.borderRadius.lg,
        border: `2px solid ${theme.colors.border}`,
        boxShadow: theme.shadows.md
      }}>
        <h2 style={{ color: theme.colors.primary, marginBottom: '1rem' }}>Current Theme Info</h2>
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
      </section>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider initialTheme="jedi">
      <DemoApp />
    </ThemeProvider>
  );
};

export default App;