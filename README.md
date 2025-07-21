# Star Wars Design System

A comprehensive React-based design system with heavy Star Wars theming, featuring four distinct themes: Sith, Jedi, Rebel, and Empire modes.

## 🚀 Features

### Themes
- **Sith Mode (Dark)**: Black with reds and oranges, brutalist design
- **Jedi Mode (Light)**: White, blues and beiges, clean lines with shadows and fades
- **Rebel Mode (Light)**: White with oranges and blues, clean lines, no fades
- **Empire Mode (Dark)**: Black with grays and blues, clean lines with shadows and fades

### Components
- **Lightsaber Progress Bar**: Animated progress bar with expanding/collapsing laser effect
- **Toggle**: Theme-specific logos that change when toggled (Rebel/Empire, Jedi/Sith)
- **On-Screen Keyboard**: Multiple modes (numbers, letters, punctuation, all)
- **Button**: Icon support with hover and click animations
- **Loading Animations**: 
  - Lightsaber expanding/collapsing
  - R2-D2 head with beeping visual effects
  - Lightspeed animation with star trails

## 📦 Installation

```bash
npm install @star-wars-design-system/core
```

## 🎨 Usage

### Basic Setup

```tsx
import { ThemeProvider, Button, LightsaberProgress } from '@star-wars-design-system/core';

function App() {
  return (
    <ThemeProvider initialTheme="jedi">
      <div>
        <Button variant="primary">May the Force be with you</Button>
        <LightsaberProgress progress={75} />
      </div>
    </ThemeProvider>
  );
}
```

### Theme Switching

```tsx
import { useTheme } from '@star-wars-design-system/core';

function ThemeSwitcher() {
  const { theme, themeName, setTheme } = useTheme();
  
  return (
    <div>
      <button onClick={() => setTheme('jedi')}>Jedi</button>
      <button onClick={() => setTheme('sith')}>Sith</button>
      <button onClick={() => setTheme('rebel')}>Rebel</button>
      <button onClick={() => setTheme('empire')}>Empire</button>
    </div>
  );
}
```

## 🎯 Components

### LightsaberProgress

A progress bar styled as a lightsaber with animated laser movement.

```tsx
<LightsaberProgress 
  progress={50} 
  size="medium" 
/>
```

**Props:**
- `progress` (number): Progress percentage (0-100)
- `size` ('small' | 'medium' | 'large'): Size of the lightsaber
- `className` (string): Additional CSS classes

### Toggle

A toggle switch with theme-specific logos that change when toggled.

```tsx
<Toggle 
  checked={isEnabled} 
  onChange={setIsEnabled}
  size="medium"
/>
```

**Props:**
- `checked` (boolean): Toggle state
- `onChange` (function): Callback when toggle changes
- `disabled` (boolean): Disabled state
- `size` ('small' | 'medium' | 'large'): Size of the toggle

### OnScreenKeyboard

A virtual keyboard with multiple input modes.

```tsx
<OnScreenKeyboard 
  onKeyPress={handleKeyPress}
  mode="letters"
/>
```

**Props:**
- `onKeyPress` (function): Callback when a key is pressed
- `mode` ('numbers' | 'letters' | 'punctuation' | 'all'): Keyboard mode
- `className` (string): Additional CSS classes

### Button

A button component with icon support and animations.

```tsx
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

<Button 
  variant="primary"
  size="medium"
  icon={faLightbulb}
  iconPosition="left"
  onClick={handleClick}
>
  Click me
</Button>
```

**Props:**
- `children` (ReactNode): Button content
- `onClick` (function): Click handler
- `variant` ('primary' | 'secondary' | 'accent' | 'danger' | 'success'): Button style
- `size` ('small' | 'medium' | 'large'): Button size
- `icon` (IconDefinition): FontAwesome icon
- `iconPosition` ('left' | 'right'): Icon position
- `disabled` (boolean): Disabled state
- `type` ('button' | 'submit' | 'reset'): Button type

### Loading Animations

#### LightsaberLoading

```tsx
<LightsaberLoading size="medium" />
```

#### R2D2Loading

```tsx
<R2D2Loading size="medium" />
```

#### LightspeedLoading

```tsx
<LightspeedLoading size="medium" />
```

**Props:**
- `size` ('small' | 'medium' | 'large'): Animation size
- `className` (string): Additional CSS classes

## 🎨 Themes

### Sith Theme
- **Colors**: Dark reds, oranges, pure black
- **Style**: Brutalist, sharp edges, no rounded corners
- **Mood**: Dark, aggressive, powerful

### Jedi Theme
- **Colors**: Blues, beiges, white
- **Style**: Clean lines, rounded corners, shadows and fades
- **Mood**: Peaceful, balanced, harmonious

### Rebel Theme
- **Colors**: Oranges, blues, white
- **Style**: Clean lines, no fades, sharp edges
- **Mood**: Rebellious, energetic, determined

### Empire Theme
- **Colors**: Grays, blues, black
- **Style**: Clean lines, rounded corners, shadows and fades
- **Mood**: Authoritative, structured, imposing

## 🛠 Development

### Prerequisites
- Node.js 16+
- npm or yarn

### Setup
```bash
git clone <repository-url>
cd star-wars-design-system
npm install
```

### Available Scripts
- `npm run storybook`: Start Storybook development server
- `npm run build-storybook`: Build Storybook for deployment
- `npm run build`: Build the library
- `npm run test`: Run tests
- `npm run lint`: Run ESLint
- `npm run type-check`: Run TypeScript type checking

### Storybook
The design system includes comprehensive Storybook documentation with:
- Interactive component examples
- Theme switching demonstrations
- All component variants and sizes
- Copy-paste code examples

## 📚 Documentation

Full documentation is available through:
1. **Storybook**: Run `npm run storybook` for interactive documentation
2. **GitHub Pages**: Deployed documentation at `https://your-username.github.io/star-wars-design-system`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🎭 Future Enhancements

- [ ] Aurebesh font integration
- [ ] Hamburger menu animations
- [ ] Additional Star Wars themed components
- [ ] Sound effects for animations
- [ ] More theme variations
- [ ] Accessibility improvements

## ⚡ Performance

The design system is optimized for:
- Tree shaking support
- Minimal bundle size
- Fast rendering
- Smooth animations
- Cross-browser compatibility

## 🎯 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📞 Support

For questions, issues, or contributions, please:
1. Check the existing issues
2. Create a new issue with detailed information
3. Join our community discussions

---

**May the Force be with you!** ⚡