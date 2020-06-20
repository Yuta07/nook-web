export interface Palette {
  light: {
    PRIMARY: string;
    SECONDARY: string;
    GRAY: string;
    BACKGROUND: string;
    PLACE_HOLDER: string;
    BORDER: string;
    MAIN: string;
    DANGER: string;
    SUCCESS: string;
    OVERLAY: string;
  };
  dark: {
    PRIMARY: string;
    SECONDARY: string;
    GRAY: string;
    BACKGROUND: string;
    PLACE_HOLDER: string;
    BORDER: string;
    MAIN: string;
    DANGER: string;
    SUCCESS: string;
    OVERLAY: string;
  };
}

export const PALETTE: Palette = {
  light: {
    PRIMARY: '#34495e',
    SECONDARY: '#f5f6fa',
    GRAY: '#7f8fa6',
    BACKGROUND: '#ffffff',
    PLACE_HOLDER: 'rgba(69, 69, 69, 0.5)',
    BORDER: '#c2c2c2',
    MAIN: '#fbc531',
    DANGER: '#c23616',
    SUCCESS: '#0097e6',
    OVERLAY: 'rgba(250, 250, 250, 0.4)',
  },
  dark: {
    PRIMARY: '#f5f6fa',
    SECONDARY: '#34495e',
    GRAY: '#7f8fa6',
    BACKGROUND: '#353b48',
    PLACE_HOLDER: 'rgba(69, 69, 69, 0.5)',
    BORDER: '#c2c2c2',
    MAIN: '#fbc531',
    DANGER: '#e84118',
    SUCCESS: '#00a8ff',
    OVERLAY: 'rgba(250, 250, 250, 0.4)',
  },
};
