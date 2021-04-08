import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import {
  IoChatbubbleEllipsesOutline,
  IoCloudyNight,
  IoGlobeOutline,
} from 'react-icons/io5';
import { WiDayCloudy } from 'react-icons/wi';
import { HiOutlineUserAdd } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import Dropdown from '../common/Dropdown';
import { useThemeContext } from '../context/ThemeContext/context';
import { useLocaleContext } from '../context/LocaleContext/context';

interface Props {}

const RightTopMenu: React.FC<Props> = () => {
  const { mode, dispatch } = useThemeContext();
  const { locale, dispatch: dispatchLocale } = useLocaleContext();

  const { t } = useTranslation();
  return (
    <nav className="flex items-center justify-end w-full">
      <Dropdown
        hideCaret
        toggleContent={() => (
          <span className="flex items-center text-gray-400">
            <IoGlobeOutline className="text-2xl" />
            <span className="text-xs ml-1 hidden sm:inline">
              {locale.locale}
            </span>
          </span>
        )}
      >
        <div className="dark:bg-gray-800 text-sm min-w-max dark:text-white bg-white shadow-md">
          <button
            onClick={() => dispatchLocale({ type: 'en-US' })}
            type="button"
            className="w-full p-2"
            aria-label="french"
          >
            English (en-US)
          </button>
          <button
            onClick={() => dispatchLocale({ type: 'fr-FR' })}
            className="w-full p-2"
            type="button"
            aria-label="french"
          >
            French (fr-FR)
          </button>
        </div>
      </Dropdown>
      <Dropdown
        hideCaret
        toggleContent={() => (
          <HiOutlineUserAdd
            title="Add Friend"
            className="text-2xl text-gray-400"
          />
        )}
      >
        <div className="dark:bg-gray-800 min-w-max text-sm dark:text-white bg-white shadow-md p-4">
          {t('Suggested Friends')}
        </div>
      </Dropdown>
      <Dropdown
        hideCaret
        toggleContent={() => (
          <IoChatbubbleEllipsesOutline
            style={{ transform: 'scale(-1, 1)' }}
            className="text-2xl transform text-gray-400"
          />
        )}
      >
        <div className=" dark:bg-gray-800 dark:text-white text-sm min-w-max bg-white shadow-md p-4">
          {t('Messages')}
        </div>
      </Dropdown>
      <Dropdown
        hideCaret
        toggleContent={() => (
          <IoMdNotificationsOutline className="text-2xl text-gray-400" />
        )}
      >
        <div className="dark:bg-gray-800 dark:text-white text-sm min-w-max bg-white shadow-md p-4">
          0 {t('Unread Notifications')}
        </div>
      </Dropdown>
      <Dropdown
        toggleContent={() => (
          <img
            src="https://i.pravatar.cc/28?u=2"
            alt="User"
            className="text-2xl rounded-full w-full h-full text-gray-400"
          />
        )}
      >
        <div className="dark:bg-gray-800 dark:text-white bg-white min-w-max  shadow-md">
          <button
            onClick={() =>
              dispatch({ type: mode.theme === 'light' ? 'dark' : 'light' })
            }
            type="button"
            className="w-full p-4"
            aria-label="switch"
          >
            {mode.theme === 'light' && (
              <span className="flex items-center text-sm">
                <IoCloudyNight className="mr-2 text-xl" />{' '}
                {t('Switch to Dark Mode')}
              </span>
            )}
            {mode.theme === 'dark' && (
              <span className="flex items-center text-sm">
                <WiDayCloudy className="mr-2 text-xl" />{' '}
                {t('Switch to Light Mode')}
              </span>
            )}
          </button>
        </div>
      </Dropdown>
    </nav>
  );
};

export default RightTopMenu;
