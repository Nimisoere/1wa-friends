import { getIntialState } from '../../../utils/persist-state';

export interface ThemeState {
  theme: Themes;
}

export const initialThemeState: ThemeState = getIntialState('mode') || {
  theme: 'light',
};

export type Themes = 'light' | 'dark';

export interface ThemeAction {
  type: Themes;
}

export const themeReducer = (
  state = initialThemeState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case 'dark':
      return {
        theme: 'dark',
      };
    case 'light':
      return { theme: 'light' };
    default:
      return state;
  }
};
