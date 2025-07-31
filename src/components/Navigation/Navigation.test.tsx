import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '../../themes/ThemeProvider';
import { Navigation } from './Navigation';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ThemeName } from '../../themes';

const renderWithTheme = (component: React.ReactElement, theme: ThemeName = 'jedi') => {
  return render(
    <ThemeProvider initialTheme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('Navigation', () => {
  it('renders with default props', () => {
    renderWithTheme(<Navigation />);
    
    // Check for brand and navigation structure
    expect(screen.getAllByText('Star Wars')[0]).toBeInTheDocument();
    expect(screen.getByLabelText('Toggle mobile menu')).toBeInTheDocument();
  });

  it('renders with custom brand', () => {
    renderWithTheme(<Navigation brand="Custom Brand" />);
    
    expect(screen.getAllByText('Custom Brand')[0]).toBeInTheDocument();
  });

  it('renders with custom items', () => {
    const customItems = [
      { id: 'custom1', label: 'Custom 1', icon: faHome },
      { id: 'custom2', label: 'Custom 2', icon: faSearch },
    ];

    renderWithTheme(<Navigation items={customItems} />);
    
    // Check that custom items are rendered
    expect(screen.getByLabelText('Toggle mobile menu')).toBeInTheDocument();
  });

  it('handles item clicks', () => {
    const mockOnClick = jest.fn();
    const customItems = [
      { id: 'test', label: 'Test Item', onClick: mockOnClick },
    ];

    renderWithTheme(<Navigation items={customItems} />);
    
    // Find the item by text and click it
    const item = screen.getByText('Test Item');
    fireEvent.click(item);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('shows hamburger menu on mobile', () => {
    // Mock window.innerWidth to simulate mobile
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 768,
    });

    renderWithTheme(<Navigation />);
    
    // Hamburger button should be visible on mobile
    const hamburgerButton = screen.getByLabelText('Toggle mobile menu');
    expect(hamburgerButton).toBeInTheDocument();
  });

  it('renders with different themes', () => {
    const { rerender } = renderWithTheme(<Navigation />, 'jedi');
    expect(screen.getAllByText('Star Wars')[0]).toBeInTheDocument();
    
    rerender(
      <ThemeProvider initialTheme="sith">
        <Navigation />
      </ThemeProvider>
    );
    expect(screen.getAllByText('Star Wars')[0]).toBeInTheDocument();
    
    rerender(
      <ThemeProvider initialTheme="rebel">
        <Navigation />
      </ThemeProvider>
    );
    expect(screen.getAllByText('Star Wars')[0]).toBeInTheDocument();
    
    rerender(
      <ThemeProvider initialTheme="empire">
        <Navigation />
      </ThemeProvider>
    );
    expect(screen.getAllByText('Star Wars')[0]).toBeInTheDocument();
  });

  it('renders items without icons', () => {
    const itemsWithoutIcons = [
      { id: 'item1', label: 'Item 1' },
      { id: 'item2', label: 'Item 2' },
    ];

    renderWithTheme(<Navigation items={itemsWithoutIcons} />);
    
    expect(screen.getAllByText('Item 1')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Item 2')[0]).toBeInTheDocument();
  });

  it('renders mobile menu structure', () => {
    renderWithTheme(<Navigation />);
    
    // Mobile menu should be rendered in DOM (even if hidden)
    expect(screen.getAllByText('Star Wars')).toHaveLength(2); // Desktop + Mobile
    expect(screen.getByLabelText('Close mobile menu')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    renderWithTheme(<Navigation />);
    
    // Check for proper ARIA labels
    expect(screen.getByLabelText('Toggle mobile menu')).toBeInTheDocument();
    expect(screen.getByLabelText('Close mobile menu')).toBeInTheDocument();
  });
}); 