import { Palette, PALETTE } from './Palette';
import { MediaQuery, DeviceSize, MEDIA_QUERY, DEVICE_SIZE } from './Size';

export interface Theme {
  theme: 'light' | 'dark';
  palette?: Palette;
  media?: MediaQuery;
  device?: DeviceSize;
  setTheme: () => void;
}

export const theme = (): Theme => {
  const appTheme: Theme = {
    theme: 'light',
    palette: PALETTE,
    media: MEDIA_QUERY,
    device: DEVICE_SIZE,
    setTheme: () => {},
  };
  return appTheme;
};
