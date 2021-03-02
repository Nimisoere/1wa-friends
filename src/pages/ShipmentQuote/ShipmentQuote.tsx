import React from "react";
import PageHeader from "../../components/common/PageHeader";
import SideMenu from "../../components/SideMenu";

interface Props {}

const ShipmentQuote: React.FC<Props> = (props) => {
  return (
    <div className="container flex mx-auto py-20">
      <div className="w-1/4">
        <SideMenu />
      </div>
      <div className="w-3/4 px-20">
        <PageHeader
          disablePadding
          title="Get shipment cost"
          description="Enjoy affordable shipping rates on all your deliveries when you choose GIG Logistics. We offer exceptional service at unbeatable prices. To request a quote, please fill out the form below and a team member will contact you. Please note that quotes requested after 6 p.m"
        />
      </div>
    </div>
  );
};

export default ShipmentQuote;
