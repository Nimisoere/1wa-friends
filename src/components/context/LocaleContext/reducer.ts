import { getIntialState } from '../../../utils/persist-state';

export interface LocaleState {
  locale: Locale;
}

export const initialLocaleState: LocaleState = getIntialState('locale') || {
  locale: 'en-US',
};

export type Locale = 'en-US' | 'fr-FR';

export interface LocaleAction {
  type: Locale;
}

export const localeReducer = (
  state = initialLocaleState,
  action: LocaleAction
): LocaleState => {
  switch (action.type) {
    case 'en-US':
      return {
        locale: 'en-US',
      };
    case 'fr-FR':
      return { locale: 'fr-FR' };
    default:
      return state;
  }
};
