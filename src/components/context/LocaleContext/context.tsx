import React from 'react';
import { initialLocaleState, LocaleAction, LocaleState } from './reducer';

export interface ILocaleContext {
  locale: LocaleState;
  dispatch: React.Dispatch<LocaleAction>;
}

export const LocaleContext = React.createContext<ILocaleContext>({
  locale: initialLocaleState,
  dispatch: () => {},
});

export const useLocaleContext = (): ILocaleContext =>
  React.useContext(LocaleContext);
