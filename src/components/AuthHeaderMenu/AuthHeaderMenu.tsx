import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const TopNav: React.FC<Props> = () => {
  return (
    <nav className="flex flex-wrap justify-end w-full font-serif">
      <Link
        to=""
        className="mr-3 bg-white rounded-xl border-black border font-bold text-sm text-secondary p-3"
      >
        Become a Deliver Partner
      </Link>
      <Link
        to=""
        className="bg-primary rounded-xl border-primary border font-bold text-sm text-white p-3"
      >
        Sign In/Sign Up
      </Link>
    </nav>
  );
};

export default TopNav;
