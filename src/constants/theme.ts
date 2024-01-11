import {MD3LightTheme as DefaultTheme, useTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    indicatorBackground: '#303858',
    indicatorForeground: '#A6E1FA',
  },
};

export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();
