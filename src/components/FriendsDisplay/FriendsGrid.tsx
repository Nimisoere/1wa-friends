import React from 'react';
import { useTranslation } from 'react-i18next';
import { FRIEND } from '../../redux/thunks/interfaces/friends.interface';
import FriendsFilter from './FriendsFilter';

const FriendsItemSkeleton = React.lazy(() => import('./FriendsItemSkeleton'));
const FriendsItem = React.lazy(() => import('./FriendsItem'));

interface Props {
  loading: boolean;
  friends?: FRIEND[] | null;
}

const FriendsGrid: React.FC<Props> = ({ loading, friends }) => {
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
        <div className="font-semibold mb-2 dark:text-gray-50 leading-9 text-2xl">
          {t('Friends List')}
        </div>
        <div className="flex-grow flex justify-end items-center">
          <FriendsFilter />
        </div>
      </div>
      <div className="w-full flex flex-wrap my-8">
        {friends?.map((friend, index) => (
          <FriendsItem index={index} key={friend.id} friend={friend} />
        ))}
      </div>
    </>
  );
};

export default FriendsGrid;
