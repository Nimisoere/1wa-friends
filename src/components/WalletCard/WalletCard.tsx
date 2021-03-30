import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { formatMoney } from '../../utils/common.utils';
import { PropsFromRedux } from '.';
import styles from './WalletCard.module.scss';
import FundWallet from '../FundWallet';

interface Props extends PropsFromRedux {}

const WalletCard: React.FC<Props> = ({ showModal, hideModal }) => {
  const history = useHistory();

  const location = useLocation();

  React.useEffect(() => {
    if (location?.pathname === '/wallet/fund') {
      showModal({
        modalProps: {},
        component: <FundWallet />,
      });
    } else {
      hideModal();
    }
    return () => {
      hideModal();
    };
  }, [hideModal, location, showModal]);

  return (
    <div className={styles.walletcard}>
      <h5 className="font-semibold mb-3">Available balance</h5>
      <p className="font-semibold text-5xl mb-5">
        {formatMoney(40092, 'NGN', 0).replace('NGN', '₦')}
      </p>
      <button
        onClick={() => {
          history.push('/wallet/fund');
        }}
        type="button"
        className="bg-white text-black py-3 px-5 text-lg rounded-full"
      >
        Fund wallet
      </button>
    </div>
  );
};

export default WalletCard;
