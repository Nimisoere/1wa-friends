import { uid } from 'uid';

export interface Transaction {
  id: string;
  img: string;
  summary: string;
  amount: number;
  category: string;
  transaction_date: string;
  type: 'debit' | 'credit';
}

export const transactions: Transaction[] = [
  {
    id: uid(8),
    img: '',
    summary: 'Wallet Funded',
    category: 'Bank transfer',
    amount: 1000,
    transaction_date: '02-24-2021Z:03:00:00',
    type: 'credit',
  },
  {
    id: uid(8),
    img: '',
    summary: 'Wallet Funded',
    category: 'Bank transfer',
    amount: 5902,
    transaction_date: '02-28-2021Z:24:00:00',
    type: 'credit',
  },
  {
    id: uid(8),
    img: '',
    summary: 'Paid for Overseas Shipping',
    category: 'Shipping fees',
    amount: 2300,
    transaction_date: '03-01-2021Z:10:30:00',
    type: 'debit',
  },
  {
    id: uid(8),
    img: '',
    summary: 'Wallet Funded',
    category: 'Bank transfer',
    amount: 10000,
    transaction_date: '04-02-2021Z:13:00:00',
    type: 'debit',
  },
];

export interface Shipment {
  id: string;
  from_address: string;
  to_address: string;
  amount: number;
  transaction_date: string;
  status: 'done' | 'pending' | 'in-progress';
}

export const shipments: Shipment[] = [
  {
    id: uid(8),
    from_address:
      'Plot 1, off second roundaboutLekki ikate roundabout 2 Lagos Nigeria.',
    to_address:
      'Plot 1, off second roundaboutLekki ikate roundabout 2 Lagos Nigeria.',
    amount: 1000,
    transaction_date: '02-24-2021Z:03:00:00',
    status: 'done',
  },
  {
    id: uid(8),
    from_address:
      'Plot 1, off second roundaboutLekki ikate roundabout 2 Lagos Nigeria.',
    to_address:
      'Plot 1, off second roundaboutLekki ikate roundabout 2 Lagos Nigeria.',
    amount: 5902,
    transaction_date: '02-28-2021Z:24:00:00',
    status: 'pending',
  },
  {
    id: uid(8),
    from_address:
      'Plot 1, off second roundaboutLekki ikate roundabout 2 Lagos Nigeria.',
    to_address:
      'Plot 1, off second roundaboutLekki ikate roundabout 2 Lagos Nigeria.',
    amount: 2300,
    transaction_date: '03-01-2021Z:10:30:00',
    status: 'in-progress',
  },
];
