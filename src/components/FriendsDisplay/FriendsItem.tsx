import React from 'react';
import { FRIEND } from '../../redux/thunks/interfaces/friends.interface';

interface Props {
  friend: FRIEND;
}

const FriendsItem: React.FC<Props> = ({ friend }) => (
  <div className="w-1/2 bg-white rounded-2xl">
    <div className="">
      <div>
        <h4>
          {friend.firstName} {friend.lastName}
        </h4>
        <p>@{friend.userName}</p>
        <p>{friend.aboutMe}</p>
      </div>
    </div>
  </div>
);

export default FriendsItem;
