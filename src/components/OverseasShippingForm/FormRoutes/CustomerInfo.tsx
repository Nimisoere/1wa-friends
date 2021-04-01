import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import {
  getRequiredErrorMessage,
  phoneRegExp,
} from '../../../utils/common.utils';
import Select from '../../form-controls/Select';
import TextInput from '../../form-controls/TextInput';
import { Progressbar } from '../Components/Progressbar';
import { formSteps } from '../shippingform.utils';
import style from './CustomerInfo.module.scss';

interface Props {}

const schema = yup.object().shape({
  receivers_name: yup
    .string()
    .required(getRequiredErrorMessage("Receiver's name")),
  receivers_email: yup
    .string()
    .email()
    .required(getRequiredErrorMessage("Receiver's email")),
  receivers_phonenumber: yup
    .string()
    .required(getRequiredErrorMessage("Receiver's Phone number"))
    .matches(phoneRegExp, 'Phone number is not valid'),
  delivery_type: yup.string().required('Select a delivery type'),
  receivers_address: yup.string(),
  receivers_location: yup.string(),
  receivers_terminal: yup.string(),
});

interface Inputs {
  receivers_email: string;
  receivers_name: string;
  receivers_phonenumber: string;
  delivery_type: string;
  receivers_address: string;
  receivers_location: string;
  receivers_terminal: string;
}

export const CustomerInfo: React.FC<Props> = (props) => {
  const { handleSubmit, control, errors, watch } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmit = (data: Inputs) => {
    history.push('/giggo-delivery-app/item-information');
  };

  const deliveryOption = watch('delivery_type');

  return (
    <div>
      <div className="w-full mb-5">
        <Progressbar
          steps={formSteps}
          done={['shipping-address', 'shipment-item']}
          activeStep="process-shipping"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-4/5 mx-auto my-5">
        <p className="text-center mt-5">
          To guarantee hassle-free shiping please input details of item(s)
          purchased from store in order to complete the overseas shipping
          process.
        </p>
        <div className="shadow-lg my-10 rounded-md">
          <h4 className="p-3 font-semibold rounded-t-md bg-gray-100 text-center">
            Receiver's Details
          </h4>
          <div className="w-full px-5 sm:px-20 py-10">
            <div className="mb-5 w-full">
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
            <div className="mb-5 w-full">
              <Controller
                name="receivers_phonenumber"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.forminput}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors['receivers_phonenumber']}
                    placeholder="Phone number"
                    labelClassName="mb-2 ml-2 flex"
                    label="Phone number"
                    customChange={onChange}
                  />
                )}
              />
            </div>
            <div className="mb-5 w-full">
              <Controller
                name="receivers_email"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.forminput}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors['receivers_email']}
                    label="Receiver's email"
                    labelClassName="mb-2 ml-2 flex"
                    placeholder="Receiver's email"
                    customChange={onChange}
                  />
                )}
              />
            </div>
          </div>
        </div>

        <div className="shadow-lg mb-10 rounded-md">
          <h4 className="p-3 font-semibold rounded-t-md bg-gray-100 text-center">
            Delivery Details
          </h4>
          <div className="w-full px-20 py-10">
            <div className="mb-8 w-full">
              <Controller
                name="delivery_type"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <Select
                    name={name}
                    value={value}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors['delivery_type']}
                    placeholder="GIGL Pickup Center"
                    labelClassName="mb-2 ml-2 flex"
                    label="Select delivery option"
                    customChange={onChange}
                    className="rounded-lg"
                    options={[
                      { label: 'Home Delivery', value: 'homedelivery' },
                      { label: 'Terminal Pickup', value: 'pickup' },
                    ]}
                  />
                )}
              />
            </div>

            {deliveryOption === 'pickup' && (
              <div className="mb-8 w-full">
                <Controller
                  name="receivers_terminal"
                  control={control}
                  defaultValue=""
                  render={({ name, value, onChange }) => (
                    <Select
                      name={name}
                      value={value}
                      id={name}
                      wrapperClassName="w-full"
                      error={errors['receivers_terminal']}
                      placeholder="Select service center"
                      labelClassName="mb-2 ml-2 flex"
                      label="Select Closest GIGL Center"
                      customChange={onChange}
                      className="rounded-lg"
                      options={[
                        { label: 'Lagos-Ajah', value: 'Food' },
                        { label: 'Lagos-Jibowu', value: 'Electronics' },
                      ]}
                    />
                  )}
                />
              </div>
            )}
            {deliveryOption === 'homedelivery' && (
              <>
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
                <div className="mb-8 w-full">
                  <Controller
                    name="receivers_location"
                    control={control}
                    defaultValue=""
                    render={({ name, value, onChange }) => (
                      <TextInput
                        name={name}
                        value={value}
                        className={style.forminput}
                        id={name}
                        wrapperClassName="w-full"
                        error={errors['receivers_location']}
                        placeholder="Location"
                        labelClassName="mb-2 ml-2 flex"
                        label="Location"
                        customChange={onChange}
                      />
                    )}
                  />
                </div>
              </>
            )}
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
