import React from 'react';
import { FRIEND } from '../../redux/thunks/interfaces/friends.interface';

interface Props {
  friend: FRIEND;
  index: number;
}

const FriendsItem: React.FC<Props> = ({ friend, index }) => (
  <div
    className={`w-full sm:w-1/2 p-4 h-auto sm:h-72 ${
      index % 2 ? 'sm:pr-0' : 'sm:pl-0'
    } `}
  >
    <div className="bg-white mb-8 h-full w-full rounded-2xl">
      <div
        style={{
          background: `url('${friend.backgroundUrl}') no-repeat`,
          backgroundSize: 'cover',
        }}
        className="h-24 w-full rounded-t-2xl"
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
              <h4 className="font-semibold font-heading text-lg leading-7">
                {friend.firstName} {friend.lastName}
              </h4>
              <p className="text-sm text-gray-400">@{friend.userName}</p>
            </div>
            <button
              type="button"
              className="bg-primary py-2 px-4 rounded-xl font-semibold text-xs text-white"
            >
              Following
            </button>
          </div>
          <p>{friend.aboutMe}</p>
        </div>
      </div>
    </div>
  </div>
);

export default FriendsItem;
