import React from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

interface Props {}

interface Inputs {
  firstname: string;
  lastname: string;
  email: string;
  countrycode: string;
  phonenumber: string;
  password: string;
  confirm_password: string;
}

const SignUpForm: React.FC<Props> = (props) => {
  const { register, handleSubmit, control, errors } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => console.log(data);

  return (
    <div className="w-full">
      <form
        className="w-full flex justify-between flex-wrap"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full gap-8">
          <div className="mb-8 w-1/2">
            <input
              name="firstname"
              type="text"
              placeholder="First Name"
              className="w-full p-4 border border-gray-400 rounded-md"
              ref={register({ required: true })}
            />
            {errors.email && (
              <span className="text-red-900 text-xs">
                This field is required
              </span>
            )}
          </div>
          <div className="mb-8 w-1/2">
            <input
              name="lastname"
              type="text"
              placeholder="Last Name"
              className="w-full p-4 border border-gray-400 rounded-md"
              ref={register({ required: true })}
            />
            {errors.email && (
              <span className="text-red-900 text-xs">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="mb-8 w-full">
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full p-4 border border-gray-400 rounded-md"
            ref={register({ required: true })}
          />
          {errors.email && (
            <span className="text-red-900 text-xs">This field is required</span>
          )}
        </div>
        <div className="mb-8 w-full">
          <div className="w-full flex">
            <div className="w-1/4">
              <Controller
                name="countrycode"
                control={control}
                render={() => (
                  <Select
                    className="rounded-md h-full"
                    isSearchable
                    options={[{}]}
                    placeholder="+234"
                  />
                )}
              />
            </div>
            <div className="w-3/4">
              <input
                name="phonenumber"
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 border border-gray-400 rounded-md"
                ref={register({ required: true })}
              />
            </div>
          </div>
          {errors.email && (
            <span className="text-red-900 text-xs">This field is required</span>
          )}
        </div>

        <div className="mb-8 w-full">
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-4 border border-gray-400 rounded-md"
            ref={register({ required: true })}
          />
          {errors.password && (
            <span className="text-red-900 text-xs">This field is required</span>
          )}
        </div>

        <div className="mb-8 w-full">
          <input
            name="confirm_password"
            type="password"
            placeholder="Re-enter Password"
            className="w-full p-4 border border-gray-400 rounded-md"
            ref={register({ required: true })}
          />
          {errors.password && (
            <span className="text-red-900 text-xs">This field is required</span>
          )}
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
