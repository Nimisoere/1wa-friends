import React from "react";
import PageHeader from "../../components/common/PageHeader";
import ShippingForm from "../../components/ShippingForm";
import SideMenu from "../../components/SideMenu";

interface Props {}

const QuickShipping: React.FC<Props> = (props) => (
    <div className="container flex flex-wrap mx-auto py-10 lg:py-20">
      <div className="w-full sm:w-1/5">
        <SideMenu />
      </div>
      <div className="w-full sm:w-4/5 sm:px-10 lg:px-20">
        <div className="w-full: lg:w-4/5 mb-10">
          <PageHeader
            disablePadding
            title="We’re excited to have you here to help you serve you better"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum ut a viverra elit neque porta a bibendum vitae. Ornare interdum magna cras facilisis turpis. Gravida posuere sed eu, vulputate eu diam malesuada et, tortor. Auctor cursus in laoreet lacus, nibh orci vitae."
          />
        </div>
        <div className="w-full">
          <div className="w-full bg-white rounded-lg p-4 lg:p-10">
            <ShippingForm />
          </div>
        </div>
      </div>
    </div>
  );

export default QuickShipping;
