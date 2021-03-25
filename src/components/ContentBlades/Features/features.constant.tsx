import React from 'react';
import { ReactComponent as Airplane } from '../../../assets/icons/featured/airplane.svg';
import { ReactComponent as AirplaneHovered } from '../../../assets/icons/featured/airplane-red.svg';
import { ReactComponent as Package } from '../../../assets/icons/featured/package.svg';
import { ReactComponent as PackageHovered } from '../../../assets/icons/featured/package-red.svg';
import { ReactComponent as Alpha } from '../../../assets/icons/featured/alpha.svg';
import { ReactComponent as AlphaHovered } from '../../../assets/icons/featured/alpha-red.svg';
import { ReactComponent as Truck } from '../../../assets/icons/featured/delivery-truck.svg';
import { ReactComponent as TruckHovered } from '../../../assets/icons/featured/delivery-truck-red.svg';

export const featureList: Feature[] = [
  {
    title: 'Ship Now',
    description: 'Request pick-up and delivery',
    icon: <Truck />,
    icon_hovered: <TruckHovered />,
    url: '/giggo-delivery-app',
  },
  {
    title: 'Get Shipping Estimate',
    description: 'Calculate Shipping Cost ',
    icon: <Package />,
    icon_hovered: <PackageHovered />,
    url: 'get-a-quote',
  },
  {
    title: 'Overseas Shipping',
    description: 'Ship from UK/USA to Nigeria ',
    icon: <Airplane />,
    icon_hovered: <AirplaneHovered />,
    url: '/overseas-shipping',
  },
  {
    title: 'Alpha',
    description: 'This will be phenomenal....',
    icon: <Alpha />,
    icon_hovered: <AlphaHovered />,
    tag: 'Coming soon',
    url: '/gig-alpha',
  },
];

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  icon_hovered: React.ReactNode;
  tag?: string;
  url: string;
}
