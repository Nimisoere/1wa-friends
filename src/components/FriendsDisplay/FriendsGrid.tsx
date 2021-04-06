import React from 'react';
import { FRIEND } from '../../redux/thunks/interfaces/friends.interface';
import FriendsItem from './FriendsItem';

interface Props {
  loading: boolean;
  friends?: FRIEND[] | null;
}

const FriendsGrid: React.FC<Props> = ({ loading, friends }) => {
  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div className="w-full flex flex-wrap my-8">
      {friends?.map((friend, index) => (
        <FriendsItem index={index} key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default FriendsGrid;
