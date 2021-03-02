import React from "react";
import SideMenu from "../../components/SideMenu";
import ErrorPage from "../Error/Error";

interface Props {}

const OverseasShipping: React.FC<Props> = (props) => {
  return (
    <div className="container flex mx-auto py-20">
      <div className="w-1/4">
        <SideMenu />
      </div>
      <div className="w-3/4">
        <ErrorPage error="Coming Soon" description="" />
      </div>
    </div>
  );
};

export default OverseasShipping;
