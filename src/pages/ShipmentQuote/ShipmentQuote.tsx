import React from "react";
import PageHeader from "../../components/common/PageHeader";
import QuoteForm from "../../components/QuoteForm";
import SideMenu from "../../components/SideMenu";

interface Props {}

const ShipmentQuote: React.FC<Props> = (props) => {
  return (
    <div className="container flex mx-auto py-20">
      <div className="w-1/5">
        <SideMenu />
      </div>
      <div className="w-4/5 px-20">
        <div className="w-4/5 mb-10">
          <PageHeader
            disablePadding
            title="Get shipment cost"
            description="Enjoy affordable shipping rates on all your deliveries when you choose GIG Logistics. We offer exceptional service at unbeatable prices. To request a quote, please fill out the form below and a team member will contact you. Please note that quotes requested after 6 p.m"
          />
        </div>
        <div className="w-full">
          <div className="w-full bg-white rounded-lg p-10">
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentQuote;
