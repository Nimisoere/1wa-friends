import React from 'react';
import { PropsFromRedux } from '.';
import FriendsDisplay from '../../components/FriendsDisplay';

interface Props extends PropsFromRedux {}

const Home: React.FC<Props> = (props) => (
  <div className="w-full">
    <div className="container max-w-5xl mx-auto py-8">
      <FriendsDisplay />
    </div>
  </div>
);

export default Home;
