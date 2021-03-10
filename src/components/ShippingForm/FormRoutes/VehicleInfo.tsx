import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { vehicles } from "../shippingform.utils";

interface Props {}

interface Inputs {
  vehicle_type: "bike" | "car" | "van" | "truck";
}

const schema = yup.object().shape({
  vehicle_type: yup.string().oneOf(["bike", "car", "van", "truck"]).required(),
});

export const VehicleInfo: React.FC<Props> = (props) => {
  const { handleSubmit, control, errors } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: Inputs) => console.log(data);

  return (
    <div>
      <form>
        <h3 className="max-w-sm mx-auto mb-7 font-medium text-2xl text-center">
          Please select the most suitable vehicle to pick up your item(s)
        </h3>
        <div
          className="flex mx-auto justify-around max-w-xl
         flex-wrap w-full"
        >
          {vehicles.map((vehicle) => (
            <div className="p-4 w-1/2" key={vehicle.id}>
              <div className="shadow-lg cursor-pointer border h-full border-gray-100 text-center my-2 p-5 rounded-lg">
                <h4 className="font-medium text-2xl mb-4">{vehicle.name}</h4>
                <p className="text-sm font-normal">{vehicle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};
