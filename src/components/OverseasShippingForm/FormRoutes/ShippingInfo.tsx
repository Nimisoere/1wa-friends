import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { getRequiredErrorMessage } from '../../../utils/common.utils';
import { Progressbar } from '../Components/Progressbar';
import { formSteps, shops } from '../shippingform.utils';
import TextInput from '../../form-controls/TextInput';

interface Props {}

interface Inputs {
  address: string;
  city: string;
  state: string;
  zipcode: string;
}

const schema = yup.object().shape({
  address: yup.string().required(getRequiredErrorMessage('Address')),
  city: yup.string().required(getRequiredErrorMessage('City')),
  state: yup.string().required(getRequiredErrorMessage('State')),
  zipcode: yup.string().required(getRequiredErrorMessage('Zipcode')),
});

export const ShippingInfo: React.FC<Props> = (props) => {
  const history = useHistory();

  const { handleSubmit, errors, control } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: Inputs) => {
    history.push('/overseas-shipping/ship/item-information');
  };

  return (
    <div>
      <div className="w-full mb-5">
        <Progressbar steps={formSteps} activeStep="shipping-address" />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl mx-auto"
      >
        <p className="text-center mt-5">
          Kindly fill up the shipping details below
        </p>
        <div className="w-full py-8">
          <div className="mb-5 w-full">
            <Controller
              name="address"
              control={control}
              defaultValue=""
              render={({ name, value, onChange }) => (
                <TextInput
                  name={name}
                  value={value}
                  multiline
                  rows={5}
                  id={name}
                  className="w-full border-gray-300"
                  wrapperClassName="w-full"
                  error={errors['address']}
                  label="Address"
                  labelClassName="mb-2 ml-2 flex"
                  placeholder="Address"
                  customChange={onChange}
                />
              )}
            />
          </div>
          <div className="mb-5 w-full">
            <Controller
              name="city"
              control={control}
              defaultValue=""
              render={({ name, value, onChange }) => (
                <TextInput
                  name={name}
                  value={value}
                  id={name}
                  className="w-full border-gray-300"
                  wrapperClassName="w-full"
                  error={errors['city']}
                  label="City"
                  labelClassName="mb-2 ml-2 flex"
                  placeholder="City"
                  customChange={onChange}
                />
              )}
            />
          </div>
          <div className="flex sm:flex-nowrap flex-wrap w-full gap-0 sm:gap-6">
            <div className="w-full sm:w-1/2 mb-5">
              <Controller
                name="state"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    id={name}
                    className="w-full border-gray-300"
                    wrapperClassName="w-full"
                    error={errors['state']}
                    label="State"
                    labelClassName="mb-2 ml-2 flex"
                    placeholder="State"
                    customChange={onChange}
                  />
                )}
              />
            </div>
            <div className="w-full sm:w-1/2 mb-5 ">
              <Controller
                name="zipcode"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    id={name}
                    className="w-full border-gray-300"
                    wrapperClassName="w-full"
                    error={errors['zipcode']}
                    label="Zipcode"
                    labelClassName="mb-2 ml-2 flex"
                    placeholder="Zipcode"
                    customChange={onChange}
                  />
                )}
              />
            </div>
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
        <div className="w-full py-10">
          <p className="text-center">
            Shop from your preferred store or any of the stores listed below,
            input the GIGL address displayed above during checkout and we will
            help deliver item(s) securely.
          </p>
          <div className="w-full">
            <div className="w-full justify-center my-5 flex-wrap flex">
              {shops.map((shop) => (
                <div
                  key={shop.StoreId}
                  className="p-2 w-full sm:w-1/2 md:w-1/4"
                >
                  <div className="shadow p-4 h-full flex justify-center items-center rounded-md">
                    <img
                      className="w-full"
                      src={shop.storeImage}
                      alt={shop.StoreName}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center">
              <button className="underline text-sm" type="button">
                View More
              </button>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
