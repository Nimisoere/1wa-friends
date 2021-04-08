import React from 'react';
import { PropsFromRedux } from '.';
import UserCard from '../../components/UserCard';

interface Props extends PropsFromRedux {}

const User: React.FC<Props> = (props) => (
  <div className="w-full">
    <div className="w-full bg-white">
      <UserCard />
    </div>
  </div>
);

export default User;
