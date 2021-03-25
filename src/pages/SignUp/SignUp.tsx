import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../components/Seo/Seo";
import SignUpForm from "../../components/SignUpForm";
import { PropsFromRedux } from ".";

interface Props extends PropsFromRedux {}

const SignUp: React.FC<Props> = (props) => (
    <>
      <Seo title="Sign Up" description="" />
      <div className="container flex mx-auto">
        <div className="w-full py-20">
          <h1 className="text-2xl text-center font-black">
            Sign up with us as an
          </h1>
          <div className="max-w-lg mx-auto my-10">
            <SignUpForm />
            <div className="mb-5 w-full text-sm text-center">
              Already have an account?{" "}
              <Link to="/sign-in" className="underline font-medium">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );

export default SignUp;
