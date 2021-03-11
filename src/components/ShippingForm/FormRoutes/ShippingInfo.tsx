import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import * as yup from "yup";
import { getRequiredErrorMessage } from "../../../utils/common.utils";
import LocationInput from "../../form-controls/PlacesAutocomplete";
import { Progressbar } from "../Components/Progressbar";
import { formSteps } from "../shippingform.utils";
import { ReactComponent as Dots } from "../../../assets/icons/dots.svg";

interface Props {}

interface Inputs {
  pickup_address: string;
  delivery_address: string;
}

const schema = yup.object().shape({
  pickup_address: yup
    .string()
    .required(getRequiredErrorMessage("Pickup address")),
  delivery_address: yup
    .string()
    .required(getRequiredErrorMessage("Delivery address")),
});

export const ShippingInfo: React.FC<Props> = (props) => {
  const history = useHistory();

  const { handleSubmit, errors, control } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: Inputs) => {
    history.push("/giggo-delivery-app/customer-information");
  };

  return (
    <div>
      <div className="w-full mb-5">
        <Progressbar steps={formSteps} hasBackButton activeStep="pick-up" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="flex justify-between items-center shadow-lg rounded-xl px-10 py-8 mb-10 w-full">
          <Controller
            name="pickup_address"
            control={control}
            defaultValue=""
            render={({ name, value, onChange }) => (
              <LocationInput
                name={name}
                value={value}
                className="w-full"
                wrapperClassName="w-full"
                labelClassName="text-sm mb-2 flex font-medium"
                error={errors["pickup_address"]}
                placeholder="Pickup Address"
                label="Pickup Address"
                customChange={onChange}
                id={name}
              />
            )}
          />
          <div className="px-6">
            <Dots className="text-9xl mt-8" />
          </div>
          <Controller
            name="delivery_address"
            control={control}
            defaultValue=""
            render={({ name, value, onChange }) => (
              <LocationInput
                name={name}
                value={value}
                className="w-full"
                labelClassName="text-sm mb-2 flex font-medium"
                wrapperClassName="w-full"
                error={errors["delivery_address"]}
                placeholder="Delivery Address"
                label="Delivery Address"
                customChange={onChange}
                id={name}
              />
            )}
          />
        </div>
        <div className="w-full rounded-xl flex mb-10">
          <iframe
            title="googlemaps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
            width="100%"
            height="450"
            className="rounded-xl"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen={false}
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
        <div className="flex justify-center w-full">
          <button
            type="submit"
            className="mb-5 text-white bg-secondary font-bold py-2 px-10 rounded-xl"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};
