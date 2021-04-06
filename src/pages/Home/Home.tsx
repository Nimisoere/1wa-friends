import React from 'react';
import { PropsFromRedux } from '.';

interface Props extends PropsFromRedux {}

const Home: React.FC<Props> = (props) => (
  <div className="w-full">
    <div className="container mx-auto pt-24">Home</div>
  </div>
);

export default Home;
