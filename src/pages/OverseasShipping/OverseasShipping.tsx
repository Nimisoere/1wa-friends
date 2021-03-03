import React from "react";
import SideMenu from "../../components/SideMenu";
import ErrorPage from "../Error/Error";

interface Props {}

const OverseasShipping: React.FC<Props> = (props) => {
  return (
    <div className="container flex mx-auto py-20">
      <div className="w-1/5">
        <SideMenu />
      </div>
      <div className="w-4/5">
        <ErrorPage error="Coming Soon" description="" />
      </div>
    </div>
  );
};

export default OverseasShipping;
