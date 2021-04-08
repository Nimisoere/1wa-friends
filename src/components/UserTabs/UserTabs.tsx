import React from 'react';
import { Redirect, Route, useRouteMatch } from 'react-router-dom';
import { FRIEND } from '../../redux/thunks/interfaces/friends.interface';
import { PropsFromRedux } from '.';
import FriendsGrid from '../FriendsDisplay/FriendsGrid';
import TabSwitch from './TabSwitch';
import { initialFetchState } from '../../interfaces/initialStates';

interface Props extends PropsFromRedux {
  friend: FRIEND;
}

const UserTabs: React.FC<Props> = ({
  friend: selectedFriend,
  friends = initialFetchState,
  starred,
  addStar,
  removeStar,
}) => {
  const match = useRouteMatch();
  if (match.isExact) return <Redirect to={`${match.url}/followers`} />;

  const followerIds = selectedFriend.followers;
  const followingIds = selectedFriend.following;

  const filteredFollowers = friends.response?.filter(({ id }: FRIEND) =>
    followerIds.includes(id)
  );

  const filteredFollowing = friends.response?.filter(({ id }: FRIEND) =>
    followingIds.includes(id)
  );

  return (
    <div className="w-full">
      <TabSwitch friend={selectedFriend} />
      <div className="container  max-w-5xl mx-auto py-8">
        <Route path={`${match.path}/followers`}>
          <FriendsGrid
            addStar={addStar}
            removeStar={removeStar}
            starred={starred}
            loading={friends.loading}
            friends={filteredFollowers}
          />
        </Route>
        <Route path={`${match.path}/following`}>
          <FriendsGrid
            addStar={addStar}
            removeStar={removeStar}
            starred={starred}
            loading={friends.loading}
            friends={filteredFollowing}
          />
        </Route>
      </div>
    </div>
  );
};

export default UserTabs;
