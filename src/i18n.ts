import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      Search: 'Search',
      Sort: 'Sort',
      'Sort by: Newest first': 'Sort by: Newest first',
      'Sort by: Oldest first': 'Sort by: Oldest first',
      'Filter options': 'Filter options',
      'Suggested Friends': 'Suggested Friends',
      'Friends List': 'Friends List',
      Messages: 'Messages',
      'Unread Notifications': 'Unread Notifications',
      'Switch to Dark Mode': 'Switch to Dark Mode',
      'Switch to Light Mode': 'Switch to Light Mode',
      Followers: 'Followers',
      Following: 'Following',
      'Friend not found': 'Friend not found',
    },
  },
  fr: {
    translation: {
      Search: 'Chercher',
      Sort: 'Trier',
      'Sort by: Newest first': 'Trier par: Le plus récent en premier',
      'Sort by: Oldest first': 'Trier par: Le plus ancien en premier',
      'Filter options': 'Options de filtrage',
      'Suggested Friends': 'Amis suggérés',
      Messages: 'Messages',
      'Unread Notifications': 'Notifications non lues',
      'Switch to Dark Mode': 'Passer en mode sombre',
      'Switch to Light Mode': 'Passer en mode lumière',
      Followers: 'Suiveuses',
      Following: 'Suivante',
      'Friend not found': 'Ami introuvable',
      'Friends List': "Liste d'amis",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
