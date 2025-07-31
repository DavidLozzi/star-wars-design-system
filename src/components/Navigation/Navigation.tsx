import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faSearch, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../themes/ThemeProvider';

interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  icon?: any;
  onClick?: () => void;
}

interface NavigationProps {
  items?: NavigationItem[];
  brand?: string;
  className?: string;
}

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const NavContainer = styled.nav<{ theme: any }>`
  position: relative;
  background: ${props => props.theme.colors.surface};
  border-bottom: 2px solid ${props => props.theme.colors.border};
  box-shadow: ${props => props.theme.shadows.sm};
  z-index: 1000;
`;

const NavContent = styled.div<{ theme: any }>`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`;

const Brand = styled.div<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const NavItems = styled.div<{ theme: any }>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.a<{ theme: any; active?: boolean }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.md};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.text};
  text-decoration: none;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.sm};
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.background};
    transform: translateY(-1px);
  }
  
  &.active {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
  }
`;

const HamburgerButton = styled.button<{ theme: any }>`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.typography.fontSize.lg};
  cursor: pointer;
  padding: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.sm};
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.background};
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileOverlay = styled.div<{ theme: any; isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.colors.background};
  z-index: 999;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const MobileMenu = styled.div<{ theme: any; isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  background: ${props => props.theme.colors.surface};
  border-right: 2px solid ${props => props.theme.colors.border};
  box-shadow: ${props => props.theme.shadows.lg};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 0.3s ease-in-out;
`;

const MobileHeader = styled.div<{ theme: any }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.md};
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

const MobileBrand = styled.div<{ theme: any }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.primary};
`;

const CloseButton = styled.button<{ theme: any }>`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.typography.fontSize.lg};
  cursor: pointer;
  padding: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.sm};
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.error};
    background: ${props => props.theme.colors.background};
  }
`;

const MobileNavItems = styled.div<{ theme: any }>`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing.md};
  gap: ${props => props.theme.spacing.sm};
`;

const MobileNavItem = styled.div<{ theme: any; active?: boolean }>`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSize.md};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.text};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.sm};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.background};
  }
  
  &.active {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
  }
`;

export const Navigation: React.FC<NavigationProps> = ({
  items = [],
  brand = 'Star Wars',
  className
}) => {
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>('');

  // Default navigation items if none provided
  const defaultItems: NavigationItem[] = [
    { id: 'home', label: 'Home', icon: faHome, href: '/' },
    { id: 'search', label: 'Search', icon: faSearch, href: '/search' },
    { id: 'profile', label: 'Profile', icon: faUser, href: '/profile' },
    { id: 'settings', label: 'Settings', icon: faCog, href: '/settings' },
  ];

  const navigationItems = items.length > 0 ? items : defaultItems;

  const handleItemClick = (item: NavigationItem) => {
    setActiveItem(item.id);
    if (item.onClick) {
      item.onClick();
    }
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsMobileMenuOpen(false);
    }
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <NavContainer theme={theme} className={className}>
        <NavContent theme={theme}>
          <Brand theme={theme} onClick={() => handleItemClick({ id: 'home', label: 'Home' })}>
            {brand}
          </Brand>
          
          <NavItems theme={theme}>
            {navigationItems.map((item) => (
              <NavItem
                key={item.id}
                theme={theme}
                active={activeItem === item.id}
                href={item.href}
                onClick={() => handleItemClick(item)}
              >
                {item.icon && <FontAwesomeIcon icon={item.icon} />}
                {item.label}
              </NavItem>
            ))}
          </NavItems>
          
          <HamburgerButton
            theme={theme}
            onClick={handleMobileMenuToggle}
            aria-label="Toggle mobile menu"
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </HamburgerButton>
        </NavContent>
      </NavContainer>

      {/* Mobile Overlay */}
      <MobileOverlay theme={theme} isOpen={isMobileMenuOpen} onClick={handleOverlayClick}>
        <MobileMenu theme={theme} isOpen={isMobileMenuOpen}>
          <MobileHeader theme={theme}>
            <MobileBrand theme={theme}>{brand}</MobileBrand>
            <CloseButton theme={theme} onClick={handleMobileMenuToggle} aria-label="Close mobile menu">
              <FontAwesomeIcon icon={faTimes} />
            </CloseButton>
          </MobileHeader>
          
          <MobileNavItems theme={theme}>
            {navigationItems.map((item) => (
              <MobileNavItem
                key={item.id}
                theme={theme}
                active={activeItem === item.id}
                onClick={() => handleItemClick(item)}
              >
                {item.icon && <FontAwesomeIcon icon={item.icon} />}
                {item.label}
              </MobileNavItem>
            ))}
          </MobileNavItems>
        </MobileMenu>
      </MobileOverlay>
    </>
  );
}; 