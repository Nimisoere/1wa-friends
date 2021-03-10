import React from "react";
import { Progressbar } from "../Components/Progressbar";
import { formSteps } from "../shippingform.utils";

interface Props {}

export const ItemInfo: React.FC<Props> = (props) => {
  return (
    <div>
      <div className="w-full mb-5">
        <Progressbar
          done={["pick-up", "shipment-details"]}
          steps={formSteps}
          hasBackButton
          activeStep="upload-item"
        />
      </div>
    </div>
  );
};
