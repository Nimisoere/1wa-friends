import React, { Reducer } from 'react';
import {
  initialThemeState,
  ThemeAction,
  themeReducer,
  ThemeState,
} from './reducer';
import { ThemeContext } from './context';
import { persistState } from '../../../utils/persist-state';

const ThemeProvider: React.FC = ({ children }) => {
  const [mode, dispatchTheme] = React.useReducer<
    Reducer<ThemeState, ThemeAction>
  >(themeReducer, initialThemeState);

  React.useEffect(() => persistState('mode', mode), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, dispatch: dispatchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
