import React from 'react';
import { PropsFromRedux } from '.';
import { initialFetchState } from '../../interfaces/initialStates';
import { FRIEND } from '../../redux/thunks/interfaces/friends.interface';
import FriendsGrid from './FriendsGrid';

interface Props extends PropsFromRedux {}

const FriendsDisplay: React.FC<Props> = ({
  friendsRequest = initialFetchState,
  getFriends,
  addStar,
  removeStar,
  starred,
}) => {
  React.useEffect(() => {
    getFriends();
  }, [getFriends]);

  const { loading, response } = friendsRequest;

  return (
    <div className="w-full">
      <div className="w-full">
        <FriendsGrid
          loading={loading}
          friends={(response as unknown) as FRIEND[]}
        />
      </div>
    </div>
  );
};

export default FriendsDisplay;
