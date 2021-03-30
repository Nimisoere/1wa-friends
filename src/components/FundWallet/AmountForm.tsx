import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { getRequiredErrorMessage } from '../../utils/common.utils';
import TextInput from '../form-controls/TextInput';

interface Props {
  setFormStep: React.Dispatch<
    React.SetStateAction<'amount' | 'payment_method'>
  >;
}

const schema = yup.object().shape({
  amount: yup
    .number()
    .required(getRequiredErrorMessage('Amount'))
    .typeError('Amount must be a number'),
});

interface Inputs {
  amount: number;
}

const AmountForm: React.FC<Props> = ({ setFormStep }) => {
  const { handleSubmit, control, errors } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Inputs) => {
    setFormStep('payment_method');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full max-w-md mx-auto text-center mb-10">
        <p className="text-xl font-semibold mb-5">
          Hi Olaribigbe, please note we will direct you to our payment platform
          to fund your wallet
        </p>
        <p className="font-medium">
          Please kindly enter the amount to fund this wallet
        </p>
      </div>
      <div className="w-full max-w-xs mx-auto">
        <div className="mb-8 w-full">
          <Controller
            name="amount"
            control={control}
            defaultValue=""
            render={({ name, value, onChange }) => (
              <TextInput
                name={name}
                value={value}
                id={name}
                type="number"
                className="w-full border-gray-300 rounded-lg"
                wrapperClassName="w-full"
                error={errors['amount']}
                placeholder="Enter amount"
                customChange={onChange}
              />
            )}
          />
        </div>
        <button
          className="w-full bg-secondary font-bold text-sm rounded text-white py-5"
          type="submit"
        >
          Fund Wallet
        </button>
      </div>
    </form>
  );
};

export default AmountForm;
