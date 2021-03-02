import React from "react";
import { useForm } from "react-hook-form";

interface Props {}

interface Inputs {
  email: string;
  password: string;
}

const SignUpForm: React.FC<Props> = (props) => {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => console.log(data);

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          ref={register}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          ref={register({ required: true })}
        />
        {errors.password && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default SignUpForm;
