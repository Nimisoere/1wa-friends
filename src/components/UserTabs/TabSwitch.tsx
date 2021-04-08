import React from 'react';
import { NavLink } from 'react-router-dom';
import { FRIEND } from '../../redux/thunks/interfaces/friends.interface';

interface Props {
  friend: FRIEND;
}

const TabSwitch: React.FC<Props> = ({ friend }) => {
  const baseUrl = `/user/${
    friend.id
  }/${friend.firstName.toLowerCase()}-${friend.lastName.toLowerCase()}`;
  return (
    <div className="items-stretch sticky top-28 md:top-32 lg:top-20 z-10 dark:bg-gray-900 bg-white h-16 shadow flex justify-center">
      <NavLink
        activeClassName="border-primary"
        to={`${baseUrl}/followers`}
        className="px-4 flex items-center justify-center font-medium border-b-2 border-transparent hover:border-primary"
      >
        Followers{' '}
        <span className="py-1 px-2 text-sm leading-none self-center flex ml-3 bg-primary text-white rounded-lg">
          {friend.followers.length}
        </span>
      </NavLink>
      <NavLink
        activeClassName="border-primary"
        to={`${baseUrl}/following`}
        className="px-4 flex items-center justify-center font-medium border-b-2 border-transparent hover:border-primary"
      >
        Following{' '}
        <span className="py-1 px-2 text-sm leading-none self-center flex ml-3 bg-primary text-white rounded-lg">
          {friend.following.length}
        </span>
      </NavLink>
    </div>
  );
};

export default TabSwitch;
