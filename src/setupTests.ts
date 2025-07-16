import '@testing-library/jest-dom';

// Mock styled-components
jest.mock('styled-components', () => ({
  ...jest.requireActual('styled-components'),
  createGlobalStyle: jest.fn(() => 'div'),
}));

// Mock FontAwesome
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: jest.fn(() => 'span'),
}));