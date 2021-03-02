import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../components/Seo/Seo";
import SignUpForm from "../../components/SignUpForm";

interface Props {}

const SignUp: React.FC<Props> = (props) => {
  return (
    <>
      <Seo title="Sign In" description="" />
      <div className="container flex mx-auto">
        <div className="w-full py-20">
          <h1 className="text-2xl text-center font-black">
            Sign up with us as an
          </h1>
          <div className="max-w-sm mx-auto my-10">
            <SignUpForm />
          </div>
          <div>
            Already have an account?{" "}
            <Link to="/sign-in" className="underline">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
