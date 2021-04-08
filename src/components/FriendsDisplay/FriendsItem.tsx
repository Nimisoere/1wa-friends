import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { FRIEND } from '../../redux/thunks/interfaces/friends.interface';

interface Props {
  friend: FRIEND;
  index: number;
}

const FriendsItem: React.FC<Props> = ({ friend, index }) => {
  const { t } = useTranslation();
  return (
    <Link
      to={`/user/${
        friend.id
      }/${friend.firstName.toLowerCase()}-${friend.lastName.toLowerCase()}`}
      className={`w-full sm:w-1/2 p-0 sm:p-4 mb-4 h-auto lg:h-72 ${
        index % 2 ? 'sm:pr-0' : 'sm:pl-0'
      } `}
    >
      <div className="dark:bg-gray-800 bg-white h-full w-full rounded-2xl">
        <div
          style={{
            backgroundImage: `url('${friend.backgroundUrl}')`,
          }}
          className="h-24 bg-gray-200 bg-cover w-full rounded-t-2xl"
        />
        <div className="p-4 flex flex-wrap sm:flex-nowrap items-start">
          <div className="w-20 -mt-10 h-20 flex items-start flex-shrink-0">
            <img
              className="rounded-full border-4 border-white w-full h-full"
              src={friend.avatarUrl}
              alt={friend.firstName}
            />
          </div>
          <div className="flex-grow ml-5">
            <div className="flex flex-wrap items-center">
              <div className="flex-grow">
                <h4 className="font-semibold dark:text-gray-50 font-heading text-lg leading-7">
                  {friend.firstName} {friend.lastName}
                </h4>
                <p className="text-sm text-gray-400">@{friend.userName}</p>
              </div>
              {!!friend.following.length && (
                <button
                  type="button"
                  aria-label={`Follow ${friend.firstName} ${friend.lastName}`}
                  className="bg-primary py-2 px-4 rounded-xl font-semibold text-xs text-white"
                >
                  {t('Following')}
                </button>
              )}
            </div>
            <p className="dark:text-gray-50">{friend.aboutMe}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FriendsItem;
