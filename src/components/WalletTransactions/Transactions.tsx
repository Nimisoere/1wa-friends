import { format } from 'date-fns';
import React from 'react';
import { formatMoney, titleCase } from '../../utils/common.utils';
import {
  transactions,
  Transaction as ITransaction,
} from './wallettransactions.constants';
import { ReactComponent as Ellipse } from '../../assets/images/placeholder-ellipse.svg';
import { ReactComponent as Ellipse2 } from '../../assets/images/placeholder-ellipse-down.svg';
import DatePicker from '../form-controls/Datepicker';

interface Props {}

interface TransactionProps {
  index: number;
  transaction: ITransaction;
}

const Transaction: React.FC<TransactionProps> = ({ transaction, index }) => (
  <div
    className={`w-full flex flex-wrap px-4 sm:px-10 py-4 ${
      index % 2 === 1 ? 'bg-gray-100' : ''
    }`}
    key={transaction.id}
  >
    <div className="w-full sm:w-3/4 flex">
      <div className="inline-flex mr-7">
        {transaction.type === 'credit' && <Ellipse2 />}
        {transaction.type === 'debit' && <Ellipse />}
      </div>

      <div>
        <p className="font-semibold text-lg">{transaction.summary}</p>
        <p
          className={`${
            transaction.type === 'debit' ? 'text-red-500' : 'text-green-500'
          } text-xs`}
        >
          {titleCase(transaction.type)}
        </p>
      </div>
    </div>
    <div className="w-full sm:w-1/4 text-right">
      <p className="font-semibold text-lg">
        {formatMoney(transaction.amount, 'NGN', 0).replace('NGN', '₦')}
      </p>
      <p className="text-xs">
        {format(new Date(transaction.transaction_date), 'dd/MM/yy')}
      </p>
    </div>
  </div>
);

const Transactions: React.FC<Props> = () => (
  <div className="w-full">
    <div className="flex flex-wrap w-full my-7">
      <div className="w-full sm:w-2/3 text-center">
        <h4 className="font-semibold text-xl">Transaction history</h4>
      </div>
      <div className="w-full sm:w-1/3">
        <DatePicker
          selectsRange
          maxDate={new Date()}
          isClearable
          selectsEnd={true}
          wrapperClassName="w-full"
          calendarClassName="font-bold text-xs font-serif"
          showPopperArrow={false}
          placeholderText="Filter by date"
          className="p-3 w-full text-sm rounded-md"
          onChange={() => null}
        />
      </div>
    </div>
    <div className="w-full font-semibold flex px-10 mb-3">
      <div className="w-3/4">Details</div>
      <div className="w-1/4 text-right">Amount</div>
    </div>
    <div className="bg-white rounded-xl py-10 mb-10">
      {transactions.map((transaction, index) => (
        <Transaction
          transaction={transaction}
          key={transaction.id}
          index={index}
        />
      ))}
    </div>
    <div className="w-full flex justify-center">
      <button
        type="button"
        className="bg-secondary border text-white max-w-xs w-full rounded py-2 px-8 font-semibold text-lg"
      >
        Load More
      </button>
    </div>
  </div>
);

export default Transactions;
