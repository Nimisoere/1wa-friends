import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Loader from 'react-spinners/BeatLoader';
import TextInput from '../form-controls/TextInput';
import { PropsFromRedux } from '.';

interface Props extends PropsFromRedux {}

interface Inputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const SignInForm: React.FC<Props> = ({ login, loginState }) => {
  const { loading, error, response, success } = loginState || {};

  const { handleSubmit, control, errors } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Inputs) => {
    login({
      UserDetail: data.email,
      Password: data.password,
      UserChannelType: 'IndividualCustomer',
    });
  };

  return (
    <div className="w-full">
      <form className="flex flex-wrap" onSubmit={handleSubmit(onSubmit)}>
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
                placeholder="Email"
                customChange={onChange}
              />
            )}
          />
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

        <button
          type="submit"
          className="mb-5 text-white bg-secondary font-bold w-full p-4 rounded-xl"
          disabled={loading}
        >
          {loading ? (
            <Loader color="white" size={8} loading={loading} />
          ) : (
            'Sign In'
          )}
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
