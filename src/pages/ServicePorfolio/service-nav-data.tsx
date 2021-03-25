import React from 'react';
import { ReactComponent as Icon1 } from '../../assets/icons/latest-tech-icon.svg';
import { ReactComponent as Icon2 } from '../../assets/icons/corporate-courier-icon.svg';
import { ReactComponent as Icon3 } from '../../assets/icons/service-courier-icon.svg';

export const services = [
  {
    icon: <Icon3 className="mb-5" />,
    title: 'DOMESTIC COURIER SOLUTIONS',
    description:
      'Whether sending within the city or across the country, GIGL is here to serve you. GIGL offers safe and speedy delivery to your doorstep.',
    link: '/domestic-courier-solutions',
  },
  {
    icon: <Icon1 className="mb-5" />,
    title: 'INTERNATIONAL COURIER SOLUTIONS',
    description:
      'We reckon how important it is for you to reach all your international destinations via a single service provider with capacity to respond flexibly.',
    link: '/international-courier-services',
  },
  {
    icon: <Icon2 className="mb-5" />,
    title: 'CORPORATE COURIER SERVICES',
    description:
      'Our corporate courier services is a top-notch choice as we have built a stable relationship with leading organizations who are now partnership with us. Some of our trusted partners include SWISS PHARMACEUTICALS, MINISO, BIERSDORF NIVEA, etc.',
    link: '/corporate-courier-services',
  },
  {
    icon: <Icon1 className="mb-5" />,
    title: 'E-COMMERCE LOGISTICS',
    description:
      'We work in partnership with you to achieve the right delivery solutions that will convey positive outcomes to your e-Commerce business.',
    link: '/ecommerce-logistics-services',
  },
];
