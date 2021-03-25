import React from 'react';
import { uid } from 'uid';
import { ReactComponent as Bike } from '../../assets/icons/motor_bike.svg';
import { ReactComponent as Car } from '../../assets/icons/car.svg';
import { ReactComponent as Van } from '../../assets/icons/mini_van.svg';
import { ReactComponent as Truck } from '../../assets/icons/delivery_truck.svg';

export const vehicles = [
  {
    id: uid(8),
    name: 'Motor Bike',
    value: 'bike',
    description:
      'Ideal for light weight items: Property documents, international passport etc.',
    icon: <Bike />,
  },
  {
    id: uid(8),
    name: 'Car',
    value: 'car',
    description:
      'For itemts that will fill in a car boot: Bag of clothes or shoes, a microwave oven etc.',
    icon: <Car />,
  },
  {
    id: uid(8),
    name: 'Mini Van',
    value: 'van',
    description:
      'For itemts that will fill in a car boot: Bag of clothes or shoes, a microwave oven etc.',
    icon: <Van />,
  },
  {
    id: uid(8),
    name: 'Truck',
    value: 'truck',
    description:
      'Perfect for moving large items: Home or office furniture, Company equipments etc',
    icon: <Truck />,
  },
];

export interface FormSteps {
  name: string;
  label: string;
  caption: string;
}

export const formSteps: FormSteps[] = [
  {
    name: 'pick-up',
    label: 'Pick up location',
    caption: '1',
  },
  {
    name: 'shipment-details',
    label: 'Shipment details',
    caption: '2',
  },
  {
    name: 'upload-item',
    label: 'Upload item',
    caption: '3',
  },
];
