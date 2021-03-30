import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { getRequiredErrorMessage } from '../../utils/common.utils';
import { paymentMethods } from './paymentMethods';

interface Props {
  setFormStep: React.Dispatch<
    React.SetStateAction<'amount' | 'payment_method'>
  >;
}

const schema = yup.object().shape({
  payment_method: yup
    .string()
    .required(getRequiredErrorMessage('Payment Method')),
});

interface Inputs {
  payment_method: string;
}

const PaymentMethods: React.FC<Props> = () => {
  const { handleSubmit, register, watch } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const paymentMethod = watch('payment_method');

  const onSubmit = (data: Inputs) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full max-w-md mx-auto text-center mb-10">
        <p className="text-xl font-semibold mb-5">
          You are about to fund your wallet with
        </p>
        <div className="font-semibold text-4xl inline-block text-black py-4 mb-5 px-8 border border-gray-300 rounded-lg">
          ₦30,092
        </div>
        <p>
          Funds credited to your wallet are non refundsable and cannot be
          withdrawn. They shall be applied solely towards your transactions
          within GIGL ecosystem
        </p>
      </div>
      <div className="w-full max-w-xs mx-auto">
        {paymentMethods.map((paymentmethod) => (
          <label htmlFor={paymentmethod.id} key={paymentmethod.id}>
            <div
              className={`bg-gray-200 cursor-pointer p-4 my-5 rounded-lg flex items-center justify-center font-medium ${
                paymentMethod === paymentmethod.value
                  ? 'font-bold bg-gray-300'
                  : ''
              }`}
            >
              <p title={paymentmethod.name} className="text-sm">
                {paymentmethod.icon}
              </p>
            </div>
            <input
              id={paymentmethod.id}
              name="payment_method"
              value={paymentmethod.value}
              className="hidden"
              ref={register}
              type="radio"
            />
          </label>
        ))}
      </div>
    </form>
  );
};

export default PaymentMethods;
