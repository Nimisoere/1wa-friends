import React from 'react';
import { uid } from 'uid';
import { ReactComponent as Latest } from '../../../assets/icons/focus/latest-tech.svg';
import { ReactComponent as Timely } from '../../../assets/icons/focus/timely.svg';
import { ReactComponent as SocialCommerce } from '../../../assets/icons/focus/social-commerce.svg';

export const focus: Focus[] = [
  {
    id: uid(8),
    icon: <Latest />,
    title: 'Latest Technology',
    description:
      'Innovation is deeply ingrained in our corporate culture, and has long been a driving force in the growth of GIGL services. Our GIGGO app is designedto ensure deliveries are 10x faster. At GIGL, creativity is celebrated and rewarded.',
  },
  {
    id: uid(8),
    icon: <SocialCommerce />,
    title: 'Social Commerce',
    description:
      'As the leading logistics service provider among other delivery companies in Africa, GIGL is tailored to empower businesses & individuals by offering  top-notch courier solutions and excellent customer services on the go.',
  },
  {
    id: uid(8),
    icon: <Timely />,
    title: 'Time Delivery',
    description:
      'We are committed to providing cost effective Logistics solutions for every business in Africa. With faster and technology powered delivery services, we offer complete flexibility that are timely and reliable.',
  },
];

export interface Focus {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}
