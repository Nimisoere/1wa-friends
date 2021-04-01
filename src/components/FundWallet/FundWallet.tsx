import React from 'react';
import { MdClose } from 'react-icons/md';
import { useHistory } from 'react-router';
import { PropsFromRedux } from '.';
import AmountForm from './AmountForm';
import PaymentMethods from './PaymentMethod';

interface Props extends PropsFromRedux {}

const FundWallet: React.FC<Props> = ({ showModal, hideModal }) => {
  const [formstep, setFormStep] = React.useState<'amount' | 'payment_method'>(
    'amount'
  );
  const history = useHistory();

  const closeModal = () => {
    hideModal();
    history.push('/wallet');
  };

  return (
    <div className="w-full px-4 bg-white rounded-xl lg:px-14 py-10 relative">
      <MdClose
        className="sticky sm:absolute cursor-pointer text-2xl top-0 left-full sm:left-auto sm:right-5 sm:top-5"
        onClick={closeModal}
      />
      <div className="w-full text-center">
        <h4 className="text-3xl mb-5 font-bold">Fund Wallet</h4>
      </div>
      {formstep === 'amount' && <AmountForm setFormStep={setFormStep} />}
      {formstep === 'payment_method' && (
        <PaymentMethods setFormStep={setFormStep} />
      )}
    </div>
  );
};

export default FundWallet;
