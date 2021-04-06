import React from 'react';
import { FRIEND } from '../../redux/thunks/interfaces/friends.interface';
import FriendsItem from './FriendsItem';

interface Props {
  loading: boolean;
  friends?: FRIEND[] | null;
}

const FriendsGrid: React.FC<Props> = ({ loading, friends }) => {
  if (loading) {
    return <div>loadinf</div>;
  }
  return (
    <div className="w-full flex flex-wrap">
      {friends?.map((friend) => (
        <FriendsItem key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default FriendsGrid;
