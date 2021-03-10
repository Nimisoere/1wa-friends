import React from "react";
import { Progressbar } from "../Components/Progressbar";
import { formSteps } from "../shippingform.utils";

interface Props {}

export const Confirmation: React.FC<Props> = (props) => {
  return (
    <div>
      <div className="w-full mb-5">
        <Progressbar
          done={["pick-up", "shipment-details", "upload-item"]}
          steps={formSteps}
          hasBackButton
          activeStep="upload-item"
        />
      </div>
    </div>
  );
};
