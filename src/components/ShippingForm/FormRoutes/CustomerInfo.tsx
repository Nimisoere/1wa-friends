import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import {
  getRequiredErrorMessage,
  phoneRegExp,
} from "../../../utils/common.utils";
import TextInput from "../../form-controls/TextInput";
import { Progressbar } from "../Components/Progressbar";
import { formSteps } from "../shippingform.utils";
import style from "./CustomerInfo.module.scss";

interface Props {}

const schema = yup.object().shape({
  senders_address: yup
    .string()
    .required(getRequiredErrorMessage("Sender's address")),
  senders_address2: yup.string(),
  senders_name: yup.string().required(getRequiredErrorMessage("Sender's name")),
  senders_location: yup
    .string()
    .required(getRequiredErrorMessage("Sender's name")),
  senders_phonenumber: yup
    .string()
    .required(getRequiredErrorMessage("Sender's Phone number"))
    .matches(phoneRegExp, "Phone number is not valid"),
  receivers_address: yup
    .string()
    .required(getRequiredErrorMessage("Receiver's address")),
  receivers_address2: yup.string(),
  receivers_name: yup
    .string()
    .required(getRequiredErrorMessage("Receiver's name")),
  receivers_location: yup
    .string()
    .required(getRequiredErrorMessage("Receiver's name")),
  receivers_phonenumber: yup
    .string()
    .required(getRequiredErrorMessage("Receiver's Phone number"))
    .matches(phoneRegExp, "Phone number is not valid"),
});

interface Inputs {
  senders_address: string;
  senders_address2: string;
  senders_name: string;
  senders_location: string;
  senders_phonenumber: string;
  receivers_address: string;
  receivers_address2: string;
  receivers_name: string;
  receivers_location: string;
  receivers_phonenumber: string;
}

export const CustomerInfo: React.FC<Props> = (props) => {
  const { handleSubmit, control, errors } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: Inputs) => console.log(data);

  return (
    <div>
      <div className="w-full mb-5">
        <Progressbar
          steps={formSteps}
          hasBackButton
          done={["pick-up"]}
          activeStep="shipment-details"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-4/5 mx-auto my-5">
        <div className="shadow-lg mb-10 rounded-md">
          <h4 className="p-3 font-semibold rounded-t-md bg-gray-100 text-center">
            Sender's Info
          </h4>
          <div className="w-full px-20 py-10">
            <div className="mb-8 w-full">
              <Controller
                name="senders_address"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.forminput}
                    multiline
                    rows={5}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors["senders_address"]}
                    placeholder="Address"
                    customChange={onChange}
                  />
                )}
              />
            </div>
            <div className="mb-8 w-full">
              <Controller
                name="senders_address2"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.forminput}
                    id={name}
                    multiline
                    rows={5}
                    wrapperClassName="w-full"
                    error={errors["senders_address2"]}
                    placeholder="Address 2"
                    customChange={onChange}
                  />
                )}
              />
            </div>
            <div className="mb-8 w-full">
              <Controller
                name="senders_name"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.forminput}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors["senders_name"]}
                    placeholder="Name"
                    customChange={onChange}
                  />
                )}
              />
            </div>
            <div className="mb-8 w-full">
              <Controller
                name="senders_location"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.forminput}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors["senders_location"]}
                    placeholder="Location"
                    customChange={onChange}
                  />
                )}
              />
            </div>
            <div className="mb-8 w-full">
              <Controller
                name="senders_phonenumber"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.forminput}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors["senders_phonenumber"]}
                    placeholder="Phone number"
                    customChange={onChange}
                  />
                )}
              />
            </div>
          </div>
        </div>

        <div className="shadow-lg mb-10 rounded-md">
          <h4 className="p-3 font-semibold rounded-t-md bg-gray-100 text-center">
            Receiver's Info
          </h4>
          <div className="w-full px-20 py-10">
            <div className="mb-8 w-full">
              <Controller
                name="receivers_address"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.forminput}
                    multiline
                    rows={5}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors["receivers_address"]}
                    placeholder="Address"
                    customChange={onChange}
                  />
                )}
              />
            </div>
            <div className="mb-8 w-full">
              <Controller
                name="receivers_address2"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.forminput}
                    id={name}
                    multiline
                    rows={5}
                    wrapperClassName="w-full"
                    error={errors["receivers_address2"]}
                    placeholder="Address 2"
                    customChange={onChange}
                  />
                )}
              />
            </div>
            <div className="mb-8 w-full">
              <Controller
                name="receivers_name"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.forminput}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors["receivers_name"]}
                    placeholder="Reveiver name"
                    customChange={onChange}
                  />
                )}
              />
            </div>
            <div className="mb-8 w-full">
              <Controller
                name="receivers_phonenumber"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.forminput}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors["receivers_phonenumber"]}
                    placeholder="Phone number"
                    customChange={onChange}
                  />
                )}
              />
            </div>
            <div className="mb-8 w-full">
              <Controller
                name="receivers_location"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <TextInput
                    name={name}
                    value={value}
                    className={style.forminput}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors["receivers_location"]}
                    placeholder="Location"
                    customChange={onChange}
                  />
                )}
              />
            </div>
          </div>
        </div>

        <div></div>
      </form>
    </div>
  );
};
