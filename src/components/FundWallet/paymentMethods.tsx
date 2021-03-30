import { uid } from 'uid';
import React from 'react';
import { ReactComponent as Flutterwave } from '../../assets/images/flutterwave.svg';
import { ReactComponent as PayStack } from '../../assets/images/paystack.svg';

export const paymentMethods = [
  {
    id: uid(8),
    name: 'Paystack',
    value: 'ps',
    icon: <PayStack />,
  },
  {
    id: uid(8),
    name: 'Flutterwave',
    value: 'fw',
    icon: <Flutterwave />,
  },
];
