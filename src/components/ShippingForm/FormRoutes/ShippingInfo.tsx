import React from "react";
import { Progressbar } from "../Components/Progressbar";
import { formSteps } from "../shippingform.utils";

interface Props {}

export const ShippingInfo: React.FC<Props> = (props) => {
  return (
    <div>
      <div className="w-full mb-5">
        <Progressbar steps={formSteps} hasBackButton activeStep="pick-up" />
      </div>
    </div>
  );
};
