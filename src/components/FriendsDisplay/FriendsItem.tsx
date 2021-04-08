import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IoStar } from 'react-icons/io5';
import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
} from '@reduxjs/toolkit';
import { FRIEND } from '../../redux/thunks/interfaces/friends.interface';
import { StarredState } from '../../interfaces';

interface Props {
  friend: FRIEND;
  index: number;
  addStar:
    | ActionCreatorWithPayload<any, string>
    | ActionCreatorWithoutPayload<string>;
  removeStar:
    | ActionCreatorWithPayload<any, string>
    | ActionCreatorWithoutPayload<string>;
  starred: StarredState;
}

const FriendsItem: React.FC<Props> = ({
  friend,
  index,
  addStar,
  removeStar,
  starred,
}) => {
  const { t } = useTranslation();
  const handleStarring = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    e.preventDefault();
    if (starred.starred.includes(id)) {
      removeStar(id);
    } else {
      addStar(id);
    }
  };
  const isStarred = starred.starred.includes(friend.id);

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
          className="h-24 relative bg-gray-200 bg-cover w-full rounded-t-2xl"
        >
          <button
            onClick={(e) => handleStarring(e, friend.id)}
            className="p-2 right-2 top-2 absolute rounded-full bg-white dark:bg-gray-800"
            type="button"
            aria-label="star"
          >
            <IoStar
              className={`text-xl  ${
                isStarred ? 'text-yellow-400' : 'text-gray-100 dark:text-white'
              }`}
            />
          </button>
        </div>
        <div className="p-4 flex flex-wrap sm:flex-nowrap items-start">
          <div className="w-20 -mt-10 h-20 flex items-start flex-shrink-0">
            <img
              className="rounded-full z-10 border-4 border-white w-full h-full"
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
