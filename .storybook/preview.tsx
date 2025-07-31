import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/themes/ThemeProvider";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@300;400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Unica+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
  
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Comic Sans MS', cursive;
  }
`;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="jedi">
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;