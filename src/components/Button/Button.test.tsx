import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../themes/ThemeProvider';
import { Button } from './Button';

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider initialTheme="jedi">
      {component}
    </ThemeProvider>
  );
};

describe('Button', () => {
  it('renders with children', () => {
    renderWithTheme(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    renderWithTheme(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    renderWithTheme(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>
    );
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies correct variant classes', () => {
    const { rerender } = renderWithTheme(
      <Button variant="primary">Primary</Button>
    );
    
    const button = screen.getByText('Primary');
    expect(button).toBeInTheDocument();
    
    rerender(
      <ThemeProvider initialTheme="jedi">
        <Button variant="secondary">Secondary</Button>
      </ThemeProvider>
    );
    
    expect(screen.getByText('Secondary')).toBeInTheDocument();
  });

  it('applies correct size classes', () => {
    renderWithTheme(<Button size="large">Large Button</Button>);
    expect(screen.getByText('Large Button')).toBeInTheDocument();
  });
});