import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../components/Seo/Seo";
import SignInForm from "../../components/SignInForm";

interface Props {}

const SignIn: React.FC<Props> = (props) => (
    <>
      <Seo title="Sign In" description="" />
      <div className="container flex mx-auto">
        <div className="w-full py-20">
          <h1 className="text-2xl text-center font-black">Sign in</h1>
          <div className="max-w-lg mx-auto my-10">
            <SignInForm />
            <div className="text-sm w-full text-center">
              Don't have an account?{" "}
              <Link to="/sign-up" className="underline font-medium">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );

export default SignIn;
