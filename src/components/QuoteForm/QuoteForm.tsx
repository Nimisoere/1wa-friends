import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { getRequiredErrorMessage, phoneRegExp } from '../../utils/common.utils';
import TextInput from '../form-controls/TextInput';
import style from './QuoteForm.module.scss';

interface Props {}

const schema = yup.object().shape({
  companyname: yup.string().required(getRequiredErrorMessage('Company name')),
  firstname: yup.string().required(getRequiredErrorMessage('First name')),
  lastname: yup.string().required(getRequiredErrorMessage('Last name')),
  email: yup.string().email(getRequiredErrorMessage('Email')).required(),
  phonenumber: yup
    .string()
    .required(getRequiredErrorMessage('Phone number'))
    .matches(phoneRegExp, 'Phone number is not valid'),
  pickup_address: yup
    .string()
    .required(getRequiredErrorMessage('Pick up address')),
  destination_address: yup
    .string()
    .required(getRequiredErrorMessage('Destination address')),
  pickup_city: yup.string().required(getRequiredErrorMessage('Pickup city')),
  pickup_state: yup.string().required(getRequiredErrorMessage('Pickup state')),
  pickup_zip: yup.string().required(getRequiredErrorMessage('Pickup zip')),
  destination_city: yup
    .string()
    .required(getRequiredErrorMessage('Destination city')),
  destination_state: yup
    .string()
    .required(getRequiredErrorMessage('Destination state')),
  destination_zip: yup
    .string()
    .required(getRequiredErrorMessage('Destination zip')),
  package_information: yup
    .string()
    .required(getRequiredErrorMessage('Package information')),
  number_of_pieces: yup
    .number()
    .min(1)
    .required(getRequiredErrorMessage('Number of peices'))
    .typeError('Field must be a number'),
  weight: yup.string().required(getRequiredErrorMessage('Weight')),
  dimensions: yup.string().required(getRequiredErrorMessage('Dimensions')),
  special_instructions: yup.string(),
});

interface Inputs {
  companyname: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  pickup_address: string;
  destination_address: string;
  pickup_city: string;
  pickup_state: string;
  pickup_zip: string;
  destination_city: string;
  destination_state: string;
  destination_zip: string;
  package_information: string;
  number_of_pieces: string;
  weight: number;
  dimensions: string;
  special_instructions: string;
}

const QuoteForm: React.FC<Props> = (props) => {
  const { handleSubmit, control, errors } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: Inputs) => {
    // dispatch
  };

  return (
    <div className="w-full">
      <form
        className="w-full flex justify-between flex-wrap"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full mb-10">
          <h4 className="mb-5 font-semibold">Company Information</h4>
          <div className="w-full flex flex-wrap sm:flex-nowrap sm:gap-6">
            <div className="mb-8 w-full sm:w-1/3">
              <Controller
                name="companyname"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.quoteforminput}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors['companyname']}
                    placeholder="Company Name"
                    customChange={onChange}
                  />
                )}
              />
            </div>
            <div className="mb-8 w-full sm:w-1/3">
              <Controller
                name="firstname"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.quoteforminput}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors['firstname']}
                    placeholder="Contact First Name"
                    customChange={onChange}
                  />
                )}
              />
            </div>
            <div className="mb-8 w-full sm:w-1/3">
              <Controller
                name="lastname"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.quoteforminput}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors['lastname']}
                    placeholder="Contact Last Name"
                    customChange={onChange}
                  />
                )}
              />
            </div>
          </div>
          <div className="w-full flex flex-wrap sm:flex-nowrap sm:gap-6">
            <div className="mb-8 w-full sm:w-1/3">
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.quoteforminput}
                    id={name}
                    type="email"
                    wrapperClassName="w-full"
                    error={errors['email']}
                    placeholder="Email"
                    customChange={onChange}
                  />
                )}
              />
            </div>
            <div className="mb-8 w-full sm:w-1/3">
              <Controller
                name="phonenumber"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.quoteforminput}
                    id={name}
                    type="tel"
                    wrapperClassName="w-full"
                    error={errors['phonenumber']}
                    placeholder="Phone number"
                    customChange={onChange}
                  />
                )}
              />
            </div>
            <div className="w-full sm:w-1/3" />
          </div>
        </div>

        <div className="w-full mb-10">
          <h4 className="mb-5 font-semibold">
            Pick-Up &amp; Delivery Information
          </h4>
          <div className="w-full flex flex-wrap sm:flex-nowrap sm:gap-9">
            <div className="mb-8 w-full sm:w-1/2">
              <Controller
                name="pickup_address"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.quoteforminput}
                    id={name}
                    multiline
                    rows={5}
                    wrapperClassName="w-full"
                    error={errors['pickup_address']}
                    placeholder="Pick-Up Address"
                    customChange={onChange}
                  />
                )}
              />
            </div>
            <div className="mb-8 w-full sm:w-1/2">
              <Controller
                name="destination_address"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.quoteforminput}
                    id={name}
                    multiline
                    rows={5}
                    wrapperClassName="w-full"
                    error={errors['destination_address']}
                    placeholder="Destination Address"
                    customChange={onChange}
                  />
                )}
              />
            </div>
          </div>
          <div className="w-full flex flex-wrap sm:flex-nowrap sm:gap-6">
            <div className="mb-8 w-full sm:w-1/3">
              <Controller
                name="pickup_city"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.quoteforminput}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors['pickup_city']}
                    placeholder="Pick up city"
                    customChange={onChange}
                  />
                )}
              />
            </div>
            <div className="mb-8 w-full sm:w-1/3">
              <Controller
                name="pickup_state"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.quoteforminput}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors['pickup_state']}
                    placeholder="Pick up state"
                    customChange={onChange}
                  />
                )}
              />
            </div>

            <div className="mb-8 w-full sm:w-1/3">
              <Controller
                name="pickup_zip"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.quoteforminput}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors['pickup_zip']}
                    placeholder="Pick up zip"
                    customChange={onChange}
                  />
                )}
              />
            </div>
          </div>
          <div className="w-full flex flex-wrap sm:flex-nowrap sm:gap-6">
            <div className="mb-8 w-full sm:w-1/3">
              <Controller
                name="destination_city"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.quoteforminput}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors['destination_city']}
                    placeholder="Destination city"
                    customChange={onChange}
                  />
                )}
              />
            </div>
            <div className="mb-8 w-full sm:w-1/3">
              <Controller
                name="destination_state"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.quoteforminput}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors['destination_state']}
                    placeholder="Destination state"
                    customChange={onChange}
                  />
                )}
              />
            </div>

            <div className="mb-8 w-full sm:w-1/3">
              <Controller
                name="destination_zip"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.quoteforminput}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors['destination_zip']}
                    placeholder="Destination zip"
                    customChange={onChange}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className="w-full mb-10">
          <h4 className="mb-5 font-semibold">Package Information</h4>
          <div className="w-full flex flex-wrap sm:flex-nowrap sm:gap-6">
            <div className="mb-8 w-full sm:w-1/3">
              <Controller
                name="package_information"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.quoteforminput}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors['package_information']}
                    placeholder="Package information"
                    customChange={onChange}
                  />
                )}
              />
            </div>
            <div className="mb-8 w-full sm:w-1/3">
              <Controller
                name="number_of_pieces"
                control={control}
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.quoteforminput}
                    id={name}
                    type="number"
                    wrapperClassName="w-full"
                    error={errors['number_of_pieces']}
                    placeholder="Number of pieces"
                    customChange={onChange}
                  />
                )}
              />
            </div>

            <div className="mb-8 w-full sm:w-1/3">
              <Controller
                name="weight"
                control={control}
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.quoteforminput}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors['weight']}
                    placeholder="Weight"
                    customChange={onChange}
                  />
                )}
              />
            </div>
          </div>

          <div className="w-full flex flex-wrap sm:flex-nowrap sm:gap-6">
            <div className="mb-8 w-full sm:w-1/3">
              <Controller
                name="dimensions"
                control={control}
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.quoteforminput}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors['dimensions']}
                    placeholder="Dimensions"
                    customChange={onChange}
                  />
                )}
              />
            </div>
            <div className="mb-8 w-full sm:w-2/3">
              <Controller
                name="special_instructions"
                control={control}
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.quoteforminput}
                    id={name}
                    multiline
                    rows={5}
                    wrapperClassName="w-full"
                    error={errors['special_instructions']}
                    placeholder="Special instructions"
                    customChange={onChange}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          <button
            type="submit"
            className="mb-5 text-white bg-secondary font-bold px-20 py-3 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
