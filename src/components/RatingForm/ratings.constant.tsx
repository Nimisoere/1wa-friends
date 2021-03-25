import React from 'react';
import { ReactComponent as Happy } from '../../assets/icons/ratings/happy.svg';
import { ReactComponent as Neutral } from '../../assets/icons/ratings/neutral.svg';
import { ReactComponent as Angry } from '../../assets/icons/ratings/angry.svg';
import { ReactComponent as Impressed } from '../../assets/icons/ratings/impressed.svg';
import { ReactComponent as Sad } from '../../assets/icons/ratings/unhappy.svg';

export const ratings = [
  { value: 5, icon: <Happy />, title: 'happy' },
  { value: 4, icon: <Impressed />, title: 'impressed' },
  { value: 3, icon: <Neutral />, title: 'neutral' },
  { value: 2, icon: <Sad />, title: 'unhappy' },
  { value: 1, icon: <Angry />, title: 'angry' },
];
