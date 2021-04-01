import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { getRequiredErrorMessage } from '../../../utils/common.utils';
import { Progressbar } from '../Components/Progressbar';
import { formSteps } from '../shippingform.utils';
import TextInput from '../../form-controls/TextInput';
import style from './ItemInfo.module.scss';

interface Props {}

const schema = yup.object().shape({
  full_name: yup.string().required(getRequiredErrorMessage('Full name')),
  item_description: yup
    .string()
    .required(getRequiredErrorMessage('Item description')),
  store_name: yup.string().required(getRequiredErrorMessage('Store name')),
  tracking_number: yup.string(),
  quantity: yup
    .number()
    .min(1, 'Value must be a number greater than 1')
    .required(getRequiredErrorMessage('Quantity'))
    .typeError('Field must be a number'),
  should_insure: yup
    .boolean()
    .isTrue()
    .required(getRequiredErrorMessage('Should Insure')),
  terms_and_conditions: yup
    .boolean()
    .isTrue()
    .required(getRequiredErrorMessage('Terms and Conditions')),
});

interface Inputs {
  full_name: string;
  item_description: string;
  store_name: string;
  tracking_number: string;
  quantity: number;
  should_insure: boolean;
  terms_and_conditions: boolean;
}

export const ItemInfo: React.FC<Props> = (props) => {
  const { handleSubmit, control, errors, register } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmit = (data: Inputs) => {
    history.push('/overseas-shipping/ship/34343/process-shipping');
  };

  return (
    <div>
      <div className="w-full mb-5">
        <Progressbar
          done={['shipping-address']}
          steps={formSteps}
          activeStep="shipment-item"
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl mx-auto"
      >
        <p className="text-center mt-5">
          To guarantee hassle-free shiping please input details of item(s)
          purchased from store in order to complete the overseas shipping
          process.
        </p>

        <div className="w-full py-10">
          <div className="mb-8 w-full">
            <Controller
              name="full_name"
              control={control}
              defaultValue=""
              render={({ name, value, onChange }) => (
                <TextInput
                  name={name}
                  value={value}
                  className={style.forminput}
                  id={name}
                  labelClassName="mb-2 ml-2 flex"
                  label="Full Name"
                  type="text"
                  wrapperClassName="w-full"
                  error={errors['full_name']}
                  placeholder="Enter full name"
                  customChange={onChange}
                />
              )}
            />
          </div>
          <div className="mb-8 w-full">
            <Controller
              name="item_description"
              control={control}
              defaultValue=""
              render={({ name, value, onChange }) => (
                <TextInput
                  name={name}
                  value={value}
                  className={style.forminput}
                  id={name}
                  labelClassName="mb-2 ml-2 flex"
                  label="Item Description"
                  type="text"
                  wrapperClassName="w-full"
                  error={errors['item_description']}
                  placeholder="Enter item description"
                  customChange={onChange}
                />
              )}
            />
          </div>
          <div className="mb-8 w-full">
            <Controller
              name="quantity"
              control={control}
              defaultValue=""
              render={({ name, value, onChange }) => (
                <TextInput
                  name={name}
                  value={value}
                  className={style.forminput}
                  id={name}
                  labelClassName="mb-2 ml-2 flex"
                  label="Quantity"
                  type="number"
                  wrapperClassName="w-full"
                  error={errors['quantity']}
                  placeholder="Enter Quantity"
                  customChange={onChange}
                />
              )}
            />
          </div>
          <div className="mb-8 w-full">
            <Controller
              name="store_name"
              control={control}
              defaultValue=""
              render={({ name, value, onChange }) => (
                <TextInput
                  name={name}
                  value={value}
                  className={style.forminput}
                  id={name}
                  labelClassName="mb-2 ml-2 flex"
                  label="Store name"
                  type="text"
                  wrapperClassName="w-full"
                  error={errors['store_name']}
                  placeholder="e.g. Amazon, Ebay"
                  customChange={onChange}
                />
              )}
            />
          </div>
          <div className="mb-8 w-full">
            <Controller
              name="tracking_number"
              control={control}
              defaultValue=""
              render={({ name, value, onChange }) => (
                <TextInput
                  name={name}
                  value={value}
                  className={style.forminput}
                  id={name}
                  labelClassName="mb-2 ml-2 flex"
                  label="Tracking number"
                  type="text"
                  wrapperClassName="w-full"
                  error={errors['tracking_number']}
                  placeholder="Enter item tracking number (optional)"
                  customChange={onChange}
                />
              )}
            />
          </div>
          <div className="mb-4 w-full">
            <label className="text-sm" htmlFor="should_insure">
              <input
                name="should_insure"
                type="checkbox"
                id="should_insure"
                className="mr-2 text-xl"
                ref={register}
              />
              Would you like to ensure this item?
            </label>
          </div>
          <div className="mb-4 w-full">
            <label className="text-sm italic" htmlFor="terms_and_conditions">
              <input
                name="terms_and_conditions"
                type="checkbox"
                id="terms_and_conditions"
                className="mr-2 text-xl"
                ref={register}
              />
              By selecting this checkbox, you agree to our{' '}
              <a
                className="underline text-red-400"
                href="/terms-and-condition"
                target="_blank"
              >
                Terms and conditions
              </a>
            </label>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <button
            type="submit"
            className="mb-5 text-white bg-secondary font-bold py-2 w-full max-w-xs rounded"
          >
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
};
