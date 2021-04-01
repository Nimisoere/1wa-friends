import React from 'react';
import { Redirect, Route, useRouteMatch } from 'react-router';
import PageHeader from '../common/PageHeader';
import SideMenu from '../SideMenu';
import { CustomerInfo } from './FormRoutes/CustomerInfo';
import { ItemInfo } from './FormRoutes/ItemInfo';
import { ShippingInfo } from './FormRoutes/ShippingInfo';

interface Props {}

const OverseasShippingForm: React.FC<Props> = () => {
  const match = useRouteMatch();
  if (match.isExact)
    return <Redirect to={`${match.path}/shipping-information`} />;
  return (
    <div className="container flex flex-wrap mx-auto py-10 lg:py-20">
      <div className="w-full sm:w-1/5">
        <SideMenu />
      </div>
      <div className="w-full sm:w-4/5 sm:px-10 lg:px-20">
        <div className="w-full: lg:w-4/5 mb-10">
          <PageHeader
            disablePadding
            title="Shipping your Items from the USA to Nigeria is seamless with GIG Logistics."
            description="Simply use details in the format below as your shipping address when shopping from any store (physical or online). In cases where you required to input a phone number, use your personal number please. This will enable GIG Logistics receive item(s) on your behalf for onward delivery."
          />
        </div>
        <div className="w-full">
          <div className="w≈-full bg-white rounded-lg p-4 lg:p-10">
            <Route path={`${match.path}/shipping-information`}>
              <ShippingInfo />
            </Route>
            <Route path={`${match.path}/item-information`}>
              <ItemInfo />
            </Route>
            <Route exact path={`${match.path}/:transactionid/process-shipping`}>
              <CustomerInfo />
            </Route>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverseasShippingForm;
