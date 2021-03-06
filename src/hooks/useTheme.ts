import { useContext } from 'react';
import { ThemeContext } from '../themes/ThemeProvider';

export const useTheme = () => useContext(ThemeContext);
