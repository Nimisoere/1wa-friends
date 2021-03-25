import React from "react";
import PageHeader from "../../components/common/PageHeader";
import { PropsFromRedux } from ".";

interface Props extends PropsFromRedux {}

const Locations: React.FC<Props> = () => (
    <div className="w-full">
      <div className="container">
        <PageHeader
          title="Our Offices"
          description="A reputation for speed and reliability"
        />
      </div>
    </div>
  );

export default Locations;
