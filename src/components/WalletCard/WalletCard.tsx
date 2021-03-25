import React from "react";
import { formatMoney } from "../../utils/common.utils";
import styles from "./WalletCard.module.scss";

interface Props {}

const WalletCard: React.FC<Props> = (props) => (
    <div className={styles.walletcard}>
      <h5 className="font-semibold mb-3">Available balance</h5>
      <p className="font-semibold text-5xl mb-5">
        {formatMoney(40092, "NGN", 0).replace("NGN", "₦")}
      </p>
      <button className="bg-white text-black py-3 px-5 text-lg rounded-full">
        Fund wallet
      </button>
    </div>
  );

export default WalletCard;
