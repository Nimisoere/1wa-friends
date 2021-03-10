import React from "react";
import { Redirect, Route, useRouteMatch } from "react-router";
import { Confirmation } from "./FormRoutes/Confirmation";
import { CustomerInfo } from "./FormRoutes/CustomerInfo";
import { ItemInfo } from "./FormRoutes/ItemInfo";
import { ShippingInfo } from "./FormRoutes/ShippingInfo";
import { VehicleInfo } from "./FormRoutes/VehicleInfo";

interface Props {}

const ShippingForm: React.FC<Props> = () => {
  const match = useRouteMatch();
  if (match.isExact)
    return <Redirect to={`${match.path}/vehicle-information`} />;
  return (
    <div className="w-full">
      <Route path={`${match.path}/vehicle-information`}>
        <VehicleInfo />
      </Route>
      <Route path={`${match.path}/shipping-information`}>
        <ShippingInfo />
      </Route>
      <Route path={`${match.path}/customer-information`}>
        <CustomerInfo />
      </Route>
      <Route path={`${match.path}/item-information`}>
        <ItemInfo />
      </Route>
      <Route exact path={`${match.path}/:transactionid/confirmation`}>
        <Confirmation />
      </Route>
    </div>
  );
};

export default ShippingForm;
