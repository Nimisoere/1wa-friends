import React from 'react';
import Transactions from './Transactions';
import Shipments from './Shipments';

interface Props {}

const WalletTransactions: React.FC<Props> = () => {
  const [tab, setTab] = React.useState<'wallet' | 'shipments'>('wallet');
  return (
    <div className="w-full">
      <div className="w-full max-w-xs px-4 mx-auto bg-white rounded-md shadow flex justify-between">
        <button
          onClick={() => setTab('wallet')}
          type="button"
          className={`${
            tab === 'wallet' ? 'border-secondary text-secondary' : ''
          } uppercase p-3 text-gray-400 text-sm font-bold border-b-4 border-transparent`}
        >
          Wallet
        </button>
        <button
          onClick={() => setTab('shipments')}
          type="button"
          className={`${
            tab === 'shipments' ? 'border-secondary text-secondary' : ''
          } uppercase p-3 text-gray-400 text-sm font-bold border-b-4 border-transparent`}
        >
          Shipments
        </button>
      </div>
      {tab === 'wallet' && <Transactions />}
      {tab === 'shipments' && <Shipments />}
    </div>
  );
};

export default WalletTransactions;
