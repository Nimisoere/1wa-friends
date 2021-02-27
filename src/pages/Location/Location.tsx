import React from "react";
import PageHeader from "../../components/common/PageHeader";

interface Props {}

const Locations: React.FC<Props> = (props) => {
  return (
    <div className="w-full">
      <div className="container">
        <PageHeader
          title="Our Offices"
          description="A reputation for speed and reliability"
        />
      </div>
    </div>
  );
};

export default Locations;
