import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, InputState, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { Progressbar } from '../Components/Progressbar';
import { formSteps } from '../shippingform.utils';
import { getRequiredErrorMessage } from '../../../utils/common.utils';
import TextInput from '../../form-controls/TextInput';
import style from './Confirmation.module.scss';

interface Props {}

const schema = yup.object().shape({
  senders_address: yup
    .string()
    .required(getRequiredErrorMessage("Sender's address")),
  senders_name: yup.string().required(getRequiredErrorMessage("Sender's name")),
  receivers_address: yup
    .string()
    .required(getRequiredErrorMessage("Receiver's address")),
  receivers_name: yup
    .string()
    .required(getRequiredErrorMessage("Receiver's name")),
});

interface Inputs {
  senders_address: string;
  receivers_address: string;
  senders_name: string;
  receivers_name: string;
}

export const Confirmation: React.FC<Props> = (props) => {
  const { handleSubmit, control, errors } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  const onSubmit = (data: InputState) => {
    history.push('/');
  };

  return (
    <div>
      <div className="w-full mb-5">
        <Progressbar
          done={['pick-up', 'shipment-details', 'upload-item']}
          steps={formSteps}
          activeStep="upload-item"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-4/5 mx-auto my-5">
        <div className="shadow-lg mb-10 rounded-md">
          <h4 className="p-5 font-semibold rounded-t-md  border-b border-gray-300 text-center">
            Contact details
          </h4>
          <div className="w-full px-5 sm:px-20 py-10">
            <div className="mb-5 w-full">
              <Controller
                name="senders_address"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.forminput}
                    multiline
                    rows={5}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors['senders_address']}
                    label="Address"
                    labelClassName="mb-2 ml-2 flex"
                    placeholder="Address"
                    customChange={onChange}
                  />
                )}
              />
            </div>
            <div className="mb-8 w-full">
              <Controller
                name="receivers_address"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.forminput}
                    multiline
                    rows={5}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors['receivers_address']}
                    placeholder="Address"
                    labelClassName="mb-2 ml-2 flex"
                    label="Address"
                    customChange={onChange}
                  />
                )}
              />
            </div>
            <div className="mb-5 w-full">
              <Controller
                name="senders_name"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.forminput}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors['senders_name']}
                    label="Name"
                    labelClassName="mb-2 ml-2 flex"
                    placeholder="Name"
                    customChange={onChange}
                  />
                )}
              />
            </div>
            <div className="mb-8 w-full">
              <Controller
                name="receivers_name"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.forminput}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors['receivers_name']}
                    placeholder="Reveiver name"
                    labelClassName="mb-2 ml-2 flex"
                    label="Reveiver name"
                    customChange={onChange}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className="shadow-lg mb-10 rounded-md">
          <h4 className="p-5 font-semibold rounded-t-md  border-b border-gray-300 text-center">
            Delivery Items
          </h4>
          <div className="w-full px-5 sm:px-20 py-10" />
        </div>
        <div className="shadow-lg mb-10 rounded-md">
          <h4 className="p-5 font-semibold rounded-t-md  border-b border-gray-300 text-center">
            Pricing
          </h4>
          <div className="w-full px-5 sm:px-20 py-10">
            <p className="font-medium mb-4">Special</p>
            <div className="w-full justify-between flex mb-3">
              <div className="3/4 text-sm">Price</div>
              <div className="1/4 text-right text-sm font-semibold">
                N 1,900
              </div>
            </div>
            <div className="w-full justify-between flex mb-3">
              <div className="3/4 text-sm">Discount</div>
              <div className="1/4 text-right text-sm font-semibold">N 892</div>
            </div>
            <div className="w-full justify-between flex mb-3">
              <div className="3/4 text-sm">Pick up charge</div>
              <div className="1/4 text-right text-sm font-semibold">
                N 1,300
              </div>
            </div>
            <div className="w-full flex justify-between mb-3">
              <div className="3/4 text-sm font-bold">Total</div>
              <div className="1/4 text-right text-sm font-semibold">
                N 3,092
              </div>
            </div>
            <div className="w-full text-green-600 flex justify-between mt-6 mb-3">
              <div className="3/4 text-sm font-bold">Wallet balance</div>
              <div className="1/4 text-right text-sm font-semibold">N 0</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-12">
          <button
            type="button"
            onClick={() => history.go(-1)}
            className="border border-secondary text-secondary py-3 px-14 font-bold text-lg rounded"
          >
            Back
          </button>
          <button
            type="submit"
            className="border border-secondary bg-secondary text-white py-3 px-14 font-bold text-lg rounded"
          >
            Fund Wallet
          </button>
        </div>
      </form>
    </div>
  );
};
