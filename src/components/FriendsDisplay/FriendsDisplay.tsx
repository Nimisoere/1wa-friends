import React from 'react';
import FriendsGrid from './FriendsGrid';

interface Props {}

const FriendsDisplay: React.FC<Props> = () => (
  <div className="w-full">
    <div className="w-full flex">
      <div className="font-semibold leading-9 text-2xl">Friends List</div>
    </div>
    <div className="w-full">
      <FriendsGrid />
    </div>
  </div>
);

export default FriendsDisplay;
