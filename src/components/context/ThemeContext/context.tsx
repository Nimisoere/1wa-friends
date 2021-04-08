import React from 'react';
import { initialThemeState, ThemeAction, ThemeState } from './reducer';

export interface IThemeContext {
  mode: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
}

export const ThemeContext = React.createContext<IThemeContext>({
  mode: initialThemeState,
  dispatch: () => {},
});

export const useThemeContext = (): IThemeContext =>
  React.useContext(ThemeContext);
