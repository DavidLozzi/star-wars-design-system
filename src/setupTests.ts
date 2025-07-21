import '@testing-library/jest-dom';
import React from 'react';

// Mock styled-components
const createStyledComponent = (element: any) => {
  return (strings: any, ...args: any[]) => {
    const Component = (props: any) => {
      const { children, ...restProps } = props;
      return React.createElement(element, restProps, children);
    };
    Component.displayName = `Styled${element.charAt(0).toUpperCase() + element.slice(1)}`;
    return Component;
  };
};

const styled = new Proxy({}, {
  get(target, prop) {
    return createStyledComponent(prop);
  }
});

jest.mock('styled-components', () => ({
  __esModule: true,
  default: styled,
  ThemeProvider: (props: any) => {
    const { children, ...restProps } = props;
    return React.createElement('div', restProps, children);
  },
  keyframes: jest.fn(() => 'keyframes'),
}));

// Mock FontAwesome
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: jest.fn(() => 'span'),
}));