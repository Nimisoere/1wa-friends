import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextInput from '../form-controls/TextInput';
import { PhoneNumberInput } from '../form-controls/PhoneNumberInput';

interface Props {}

interface Inputs {
  customer_type: 'individual' | 'business';
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  password: string;
  confirm_password: string;
}

const schema = yup.object().shape({
  customer_type: yup.string().oneOf(['individual', 'business']).required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  phonenumber: yup.string().required(),
  password: yup.string().required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirm is required'),
});

const SignUpForm: React.FC<Props> = (props) => {
  const { handleSubmit, register, watch, control, errors } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      customer_type: 'individual',
    },
  });

  const customerType = watch('customer_type');

  const onSubmit = (data: Inputs) => {
    // dispatch
  };

  return (
    <div className="w-full">
      <form
        className="w-full flex justify-between flex-wrap"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full flex mb-9 justify-around">
          <label htmlFor="individual">
            <input
              name="customer_type"
              id="individual"
              value="individual"
              defaultChecked={true}
              className="hidden"
              ref={register}
              type="radio"
            />
            <span className="inline-flex items-center">
              {customerType === 'individual' ? (
                <MdRadioButtonChecked className="text-3xl" />
              ) : (
                <MdRadioButtonUnchecked className="text-3xl text-gray-300" />
              )}
              <span className="font-medium text-lg ml-3">Individual</span>
            </span>
          </label>
          <label htmlFor="business">
            <input
              name="customer_type"
              value="business"
              id="business"
              className="hidden"
              ref={register}
              type="radio"
            />
            <span className="inline-flex items-center">
              {customerType === 'business' ? (
                <MdRadioButtonChecked className="text-3xl" />
              ) : (
                <MdRadioButtonUnchecked className="text-3xl text-gray-300" />
              )}
              <span className="font-medium text-lg ml-3">E-Commerce</span>
            </span>
          </label>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap w-full lg:gap-10">
          <div className="mb-8 w-full lg:w-1/2">
            <Controller
              name="firstname"
              control={control}
              defaultValue=""
              render={({ name, value, onChange }) => (
                <TextInput
                  name={name}
                  value={value}
                  className="w-full"
                  id={name}
                  wrapperClassName="w-full"
                  error={errors['firstname']}
                  placeholder="First Name"
                  customChange={onChange}
                />
              )}
            />
          </div>
          <div className="mb-8 w-full lg:w-1/2">
            <Controller
              name="lastname"
              control={control}
              defaultValue=""
              render={({ name, value, onChange }) => (
                <TextInput
                  name={name}
                  value={value}
                  id={name}
                  className="w-full"
                  wrapperClassName="w-full"
                  error={errors['lastname']}
                  placeholder="Last Name"
                  customChange={onChange}
                />
              )}
            />
          </div>
        </div>
        <div className="mb-8 w-full">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ name, value, onChange }) => (
              <TextInput
                name={name}
                value={value}
                id={name}
                type="email"
                className="w-full"
                wrapperClassName="w-full"
                error={errors['email']}
                placeholder="Email Name"
                customChange={onChange}
              />
            )}
          />
        </div>

        <div className="mb-8 w-full">
          <div className="w-full flex">
            <Controller
              name="phonenumber"
              control={control}
              defaultValue=""
              render={({ name, value, onChange }) => (
                <PhoneNumberInput
                  name={name}
                  value={value}
                  defaultCountry="NG"
                  id={name}
                  inputClassName="h-full p-4 w-full rounded-md"
                  international
                  className="w-full"
                  wrapperClassName="w-full"
                  error={errors['phonenumber']}
                  placeholder="Phone Number"
                  customChange={onChange}
                />
              )}
            />
          </div>
        </div>

        <div className="mb-8 w-full">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ name, value, onChange }) => (
              <TextInput
                name={name}
                value={value}
                id={name}
                type="password"
                className="w-full"
                wrapperClassName="w-full"
                error={errors['password']}
                placeholder="Password"
                customChange={onChange}
              />
            )}
          />
        </div>

        <div className="mb-8 w-full">
          <Controller
            name="confirm_password"
            control={control}
            defaultValue=""
            render={({ name, value, onChange }) => (
              <TextInput
                name={name}
                value={value}
                id={name}
                type="password"
                className="w-full"
                wrapperClassName="w-full"
                error={errors['confirm_password']}
                placeholder="Confirm password"
                customChange={onChange}
              />
            )}
          />
        </div>

        <button
          type="submit"
          className="mb-5 text-white bg-secondary font-bold w-full p-4 rounded-xl"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
