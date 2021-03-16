import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { getRequiredErrorMessage } from "../../utils/common.utils";
import TextInput from "../form-controls/TextInput";

interface Props {}

const schema = yup.object().shape({
  tracking_code: yup
    .string()
    .required(getRequiredErrorMessage("Tracking code")),
});

interface Inputs {
  tracking_code: string;
}

const TrackingWidget: React.FC<Props> = (props) => {
  const { handleSubmit, control } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmit = (data: Inputs) => {
    history.push(`/shipment/${data.tracking_code}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="border bg-white px-4 py-1 h-12 flex items-stretch rounded-lg border-gray-400">
        <div className="flex-grow flex justify-start items-stretch">
          <Controller
            name="tracking_code"
            control={control}
            defaultValue=""
            render={({ name, value, onChange }) => (
              <TextInput
                name={name}
                value={value}
                className="border-none rounded-none px-0 py-0 w-full h-full"
                id={name}
                wrapperClassName="w-full"
                placeholder="Input tracking ID | Alpha code"
                customChange={onChange}
              />
            )}
          />
        </div>
        <button
          type="submit"
          className="bg-secondary flex justify-between items-center rounded-xl px-6 text-white"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default TrackingWidget;
