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

  const mapUrl =
    "https://www.google.com/maps/embed/v1/directions?origin=place_id:ChIJlZisjon5OxARmL23eBevwdo&destination=place_id:ChIJSWGXDYr2OxARCzJ3PFd_BJ4&key=AIzaSyAXjWTPsX9a9YvVnTdxsXSvfcoouoX639I";

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
            aria-hidden="false"
            tabIndex={0}
            title="googlemaps"
            width="100%"
            height="450"
            className="rounded-xl"
            frameBorder="0"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={mapUrl}
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
