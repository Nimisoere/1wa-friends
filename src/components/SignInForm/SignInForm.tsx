import React from "react";
import { useForm } from "react-hook-form";

interface Props {}

interface Inputs {
  email: string;
  password: string;
}

const SignInForm: React.FC<Props> = (props) => {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => console.log(data);

  return (
    <div className="w-full">
      <form className="flex flex-wrap" onSubmit={handleSubmit(onSubmit)}>
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

        <button
          type="submit"
          className="mb-5 text-white bg-secondary font-bold w-full p-4 rounded-xl"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
