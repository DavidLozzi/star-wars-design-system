import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faUser, faCog, faStar, faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Navigation } from './Navigation';
import { ThemeProvider } from '../../themes/ThemeProvider';

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="jedi">
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomItems: Story = {
  args: {
    brand: 'Star Wars',
    items: [
      { id: 'home', label: 'Home', icon: faHome, href: '/' },
      { id: 'search', label: 'Search', icon: faSearch, href: '/search' },
      { id: 'favorites', label: 'Favorites', icon: faHeart, href: '/favorites' },
      { id: 'bookmarks', label: 'Bookmarks', icon: faBookmark, href: '/bookmarks' },
      { id: 'profile', label: 'Profile', icon: faUser, href: '/profile' },
      { id: 'settings', label: 'Settings', icon: faCog, href: '/settings' },
    ],
  },
};

export const WithClickHandlers: Story = {
  args: {
    brand: 'Interactive Nav',
    items: [
      { 
        id: 'home', 
        label: 'Home', 
        icon: faHome, 
        onClick: () => console.log('Home clicked') 
      },
      { 
        id: 'search', 
        label: 'Search', 
        icon: faSearch, 
        onClick: () => console.log('Search clicked') 
      },
      { 
        id: 'profile', 
        label: 'Profile', 
        icon: faUser, 
        onClick: () => console.log('Profile clicked') 
      },
      { 
        id: 'settings', 
        label: 'Settings', 
        icon: faCog, 
        onClick: () => console.log('Settings clicked') 
      },
    ],
  },
};

export const JediTheme: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="jedi">
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    brand: 'Jedi',
  },
};

export const SithTheme: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="sith">
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    brand: 'Sith',
  },
};

export const RebelTheme: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="rebel">
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    brand: 'Rebels',
  },
};

export const EmpireTheme: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="empire">
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    brand: 'Empire',
  },
};

export const MinimalItems: Story = {
  args: {
    brand: 'Minimal',
    items: [
      { id: 'home', label: 'Home', icon: faHome },
      { id: 'about', label: 'About', icon: faStar },
    ],
  },
};

export const NoIcons: Story = {
  args: {
    brand: 'No Icons',
    items: [
      { id: 'home', label: 'Home' },
      { id: 'search', label: 'Search' },
      { id: 'profile', label: 'Profile' },
      { id: 'settings', label: 'Settings' },
    ],
  },
}; 