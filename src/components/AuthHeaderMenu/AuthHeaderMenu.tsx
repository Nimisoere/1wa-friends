import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const TopNav: React.FC<Props> = () => {
  return (
    <nav className="flex flex-wrap items-center justify-end w-full font-serif">
      <Link
        to={{ pathname: "https://giglogistics.com/deliverypartner" }}
        target="_blank"
        className="w-full sm:w-auto mb-3 sm:mb-0 sm:mr-3 bg-white rounded-xl border-black border font-bold text-sm text-secondary p-3 flex justify-center"
      >
        Become a Deliver Partner
      </Link>
      <Link
        to="/sign-in"
        className="w-full sm:w-auto mb-3 sm:mb-0 bg-primary rounded-xl border-primary border font-bold text-sm text-white p-3 flex justify-center"
      >
        Sign In/Sign Up
      </Link>
    </nav>
  );
};

export default TopNav;
