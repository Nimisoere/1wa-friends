import { format } from "date-fns";
import React from "react";
import { formatMoney } from "../../utils/common.utils";
import { transactions } from "./wallettransactions.constants";
import { ReactComponent as Ellipse } from "../../assets/images/placeholder-ellipse.svg";

interface Props {}

const WalletTransactions: React.FC<Props> = (props) => (
    <div className="w-full">
      <div className="w-full font-semibold flex px-10 mb-3">
        <div className="w-3/4">Details</div>
        <div className="w-1/4 text-right">Amount</div>
      </div>
      <div className="bg-white rounded-xl py-10 mb-10">
        {transactions.map((transaction, index) => (
          <div
            className={`w-full flex px-10 py-4 ${
              index % 2 === 1 ? "bg-gray-100" : ""
            }`}
            key={transaction.id}
          >
            <div className="w-3/4 flex">
              <Ellipse className="inline-flex mr-7" />
              <div>
                <p className="font-semibold text-lg">{transaction.summary}</p>
                <p className="text-xs">{transaction.category}</p>
              </div>
            </div>
            <div className="w-1/4 text-right">
              <p className="font-semibold text-lg">
                {formatMoney(transaction.amount, "NGN", 0).replace("NGN", "₦")}
              </p>
              <p className="text-xs">
                {format(new Date(transaction.transaction_date), "dd/MM/yy")}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <button className="border-secondary border text-secondary rounded py-2 px-8 font-semibold text-lg">
          Load More
        </button>
      </div>
    </div>
  );

export default WalletTransactions;
