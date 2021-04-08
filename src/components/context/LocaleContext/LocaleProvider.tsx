import React, { Reducer } from 'react';
import { useTranslation } from 'react-i18next';
import {
  initialLocaleState,
  LocaleAction,
  localeReducer,
  LocaleState,
} from './reducer';
import { LocaleContext } from './context';
import { persistState } from '../../../utils/persist-state';

const LocaleProvider: React.FC = ({ children }) => {
  const [locale, dispatchLocale] = React.useReducer<
    Reducer<LocaleState, LocaleAction>
  >(localeReducer, initialLocaleState);

  const { i18n } = useTranslation();

  React.useEffect(() => {
    persistState('locale', locale);
    i18n.changeLanguage(locale.locale);
  }, [i18n, locale]);

  return (
    <LocaleContext.Provider value={{ locale, dispatch: dispatchLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
