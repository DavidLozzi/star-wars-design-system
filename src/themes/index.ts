export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  shadow: string;
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface ThemeTypography {
  fontFamily: string;
  fontSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  fontWeight: {
    light: number;
    normal: number;
    medium: number;
    bold: number;
  };
}

export interface ThemeBorderRadius {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface ThemeShadows {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface Theme {
  name: string;
  colors: ThemeColors;
  spacing: ThemeSpacing;
  typography: ThemeTypography;
  borderRadius: ThemeBorderRadius;
  shadows: ThemeShadows;
  isDark: boolean;
}

// Sith Theme - Dark, brutalist with reds and oranges
export const sithTheme: Theme = {
  name: 'sith',
  isDark: true,
  colors: {
    primary: '#8B0000', // Dark red
    secondary: '#FF4500', // Orange red
    accent: '#FF6347', // Tomato
    background: '#000000', // Pure black
    surface: '#1a1a1a', // Very dark gray
    text: '#FFFFFF', // White
    textSecondary: '#CCCCCC', // Light gray
    border: '#333333', // Dark gray
    shadow: 'rgba(139, 0, 0, 0.3)', // Dark red shadow
    success: '#00FF00', // Bright green
    warning: '#FFA500', // Orange
    error: '#FF0000', // Bright red
    info: '#00BFFF', // Deep sky blue
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  typography: {
    fontFamily: 'Comic Sans MS, cursive',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      xxl: '1.5rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  borderRadius: {
    sm: '0',
    md: '0',
    lg: '0',
    xl: '0',
  },
  shadows: {
    sm: '0 2px 4px rgba(139, 0, 0, 0.3)',
    md: '0 4px 8px rgba(139, 0, 0, 0.4)',
    lg: '0 8px 16px rgba(139, 0, 0, 0.5)',
    xl: '0 16px 32px rgba(139, 0, 0, 0.6)',
  },
};

// Jedi Theme - Light, clean with blues and beiges
export const jediTheme: Theme = {
  name: 'jedi',
  isDark: false,
  colors: {
    primary: '#1E90FF', // Dodger blue
    secondary: '#87CEEB', // Sky blue
    accent: '#F5DEB3', // Wheat
    background: '#FFFFFF', // White
    surface: '#F8F8FF', // Ghost white
    text: '#2F4F4F', // Dark slate gray
    textSecondary: '#696969', // Dim gray
    border: '#E6E6FA', // Lavender
    shadow: 'rgba(30, 144, 255, 0.2)', // Blue shadow
    success: '#32CD32', // Lime green
    warning: '#FFD700', // Gold
    error: '#DC143C', // Crimson
    info: '#00CED1', // Dark turquoise
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  typography: {
    fontFamily: 'Comic Sans MS, cursive',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      xxl: '1.5rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },
  shadows: {
    sm: '0 2px 4px rgba(30, 144, 255, 0.1)',
    md: '0 4px 8px rgba(30, 144, 255, 0.15)',
    lg: '0 8px 16px rgba(30, 144, 255, 0.2)',
    xl: '0 16px 32px rgba(30, 144, 255, 0.25)',
  },
};

// Rebel Theme - Light with oranges and blues, clean lines
export const rebelTheme: Theme = {
  name: 'rebel',
  isDark: false,
  colors: {
    primary: '#FF8C00', // Dark orange
    secondary: '#4169E1', // Royal blue
    accent: '#FFD700', // Gold
    background: '#FFFFFF', // White
    surface: '#FFF8DC', // Cornsilk
    text: '#2F4F4F', // Dark slate gray
    textSecondary: '#696969', // Dim gray
    border: '#DEB887', // Burlywood
    shadow: 'rgba(255, 140, 0, 0.2)', // Orange shadow
    success: '#32CD32', // Lime green
    warning: '#FFA500', // Orange
    error: '#DC143C', // Crimson
    info: '#00CED1', // Dark turquoise
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  typography: {
    fontFamily: 'Comic Sans MS, cursive',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      xxl: '1.5rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  borderRadius: {
    sm: '0',
    md: '0',
    lg: '0',
    xl: '0',
  },
  shadows: {
    sm: '0 2px 4px rgba(255, 140, 0, 0.1)',
    md: '0 4px 8px rgba(255, 140, 0, 0.15)',
    lg: '0 8px 16px rgba(255, 140, 0, 0.2)',
    xl: '0 16px 32px rgba(255, 140, 0, 0.25)',
  },
};

// Empire Theme - Dark with grays and blues
export const empireTheme: Theme = {
  name: 'empire',
  isDark: true,
  colors: {
    primary: '#2F4F4F', // Dark slate gray
    secondary: '#4682B4', // Steel blue
    accent: '#708090', // Slate gray
    background: '#000000', // Black
    surface: '#1C1C1C', // Dark gray
    text: '#FFFFFF', // White
    textSecondary: '#B0B0B0', // Light gray
    border: '#404040', // Dark gray
    shadow: 'rgba(47, 79, 79, 0.3)', // Dark slate shadow
    success: '#00FF00', // Bright green
    warning: '#FFD700', // Gold
    error: '#FF0000', // Bright red
    info: '#00BFFF', // Deep sky blue
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  typography: {
    fontFamily: 'Comic Sans MS, cursive',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      xxl: '1.5rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },
  shadows: {
    sm: '0 2px 4px rgba(47, 79, 79, 0.2)',
    md: '0 4px 8px rgba(47, 79, 79, 0.3)',
    lg: '0 8px 16px rgba(47, 79, 79, 0.4)',
    xl: '0 16px 32px rgba(47, 79, 79, 0.5)',
  },
};

export const themes = {
  sith: sithTheme,
  jedi: jediTheme,
  rebel: rebelTheme,
  empire: empireTheme,
};

export type ThemeName = keyof typeof themes;