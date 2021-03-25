import React from "react";
import SideMenu from "../../components/SideMenu";
import ErrorPage from "../Error/Error";

interface Props {}

const OverseasShipping: React.FC<Props> = (props) => (
    <div className="container flex flex-wrap mx-auto py-10 lg:py-20">
      <div className="w-full sm:w-1/5">
        <SideMenu />
      </div>
      <div className="w-full sm:w-4/5">
        <ErrorPage error="Coming Soon" description="" />
      </div>
    </div>
  );

export default OverseasShipping;
