import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
} from '@reduxjs/toolkit';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StarredState } from '../../interfaces';
import { FRIEND } from '../../redux/thunks/interfaces/friends.interface';
import FriendsFilter from './FriendsFilter';
import FriendsItem from './FriendsItem';
import FriendsItemSkeleton from './FriendsItemSkeleton';

interface Props {
  loading: boolean;
  addStar:
    | ActionCreatorWithPayload<any, string>
    | ActionCreatorWithoutPayload<string>;
  removeStar:
    | ActionCreatorWithPayload<any, string>
    | ActionCreatorWithoutPayload<string>;
  starred: StarredState;
  friends?: FRIEND[] | null;
}

const FriendsGrid: React.FC<Props> = ({
  loading,
  friends,
  addStar,
  removeStar,
  starred,
}) => {
  const { t } = useTranslation();

  if (loading) {
    return (
      <div className="w-full flex flex-wrap my-8">
        {[...Array(4).keys()]?.map((item, index) => (
          <FriendsItemSkeleton index={index} key={item} />
        ))}
      </div>
    );
  }
  return (
    <>
      <div className="w-full flex flex-wrap">
        <div className="font-semibold dark:text-gray-50 leading-9 text-2xl">
          {t('Friends List')}
        </div>
        <div className="flex-grow flex justify-end items-center">
          <FriendsFilter />
        </div>
      </div>
      <div className="w-full flex flex-wrap my-8">
        {friends?.map((friend, index) => (
          <FriendsItem
            addStar={addStar}
            removeStar={removeStar}
            starred={starred}
            index={index}
            key={friend.id}
            friend={friend}
          />
        ))}
      </div>
    </>
  );
};

export default FriendsGrid;
