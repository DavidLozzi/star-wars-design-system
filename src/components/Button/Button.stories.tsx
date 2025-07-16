import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ThemeProvider } from '../../themes/ThemeProvider';
import { 
  faLightbulb, 
  faStar, 
  faHeart, 
  faArrowRight, 
  faDownload,
  faTrash,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent', 'danger', 'success'],
      description: 'Button variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Icon position',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'medium',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Accent: Story = {
  args: {
    children: 'Accent Button',
    variant: 'accent',
    size: 'medium',
  },
};

export const Danger: Story = {
  args: {
    children: 'Delete',
    variant: 'danger',
    size: 'medium',
    icon: faTrash,
  },
};

export const Success: Story = {
  args: {
    children: 'Save',
    variant: 'success',
    size: 'medium',
    icon: faCheck,
  },
};

export const WithIconLeft: Story = {
  args: {
    children: 'Download',
    variant: 'primary',
    size: 'medium',
    icon: faDownload,
    iconPosition: 'left',
  },
};

export const WithIconRight: Story = {
  args: {
    children: 'Continue',
    variant: 'primary',
    size: 'medium',
    icon: faArrowRight,
    iconPosition: 'right',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'small',
    icon: faStar,
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'large',
    icon: faHeart,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Button variant="primary" icon={faLightbulb}>Primary</Button>
      <Button variant="secondary" icon={faStar}>Secondary</Button>
      <Button variant="accent" icon={faHeart}>Accent</Button>
      <Button variant="danger" icon={faTrash}>Danger</Button>
      <Button variant="success" icon={faCheck}>Success</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Button size="small" icon={faStar}>Small</Button>
      <Button size="medium" icon={faStar}>Medium</Button>
      <Button size="large" icon={faStar}>Large</Button>
    </div>
  ),
};

export const ThemeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3>Jedi Theme</h3>
        <ThemeProvider initialTheme="jedi">
          <Button variant="primary" icon={faLightbulb}>Jedi Button</Button>
        </ThemeProvider>
      </div>
      <div>
        <h3>Sith Theme</h3>
        <ThemeProvider initialTheme="sith">
          <Button variant="primary" icon={faLightbulb}>Sith Button</Button>
        </ThemeProvider>
      </div>
      <div>
        <h3>Rebel Theme</h3>
        <ThemeProvider initialTheme="rebel">
          <Button variant="primary" icon={faLightbulb}>Rebel Button</Button>
        </ThemeProvider>
      </div>
      <div>
        <h3>Empire Theme</h3>
        <ThemeProvider initialTheme="empire">
          <Button variant="primary" icon={faLightbulb}>Empire Button</Button>
        </ThemeProvider>
      </div>
    </div>
  ),
};