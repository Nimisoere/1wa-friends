import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { getRequiredErrorMessage } from "../../utils/common.utils";
import TextInput from "../form-controls/TextInput";
import style from "./RatingForm.module.scss";
import { ratings } from "./ratings.constant";

interface Props {}

const schema = yup.object().shape({
  rating: yup.string().required(getRequiredErrorMessage("Rating")),
  comment: yup.string(),
});

interface Inputs {
  rating: 1 | 2 | 3 | 4 | 5;
  comment?: string;
}

export const RatingForm = (props: Props) => {
  const { handleSubmit, control, errors, register, watch } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: Inputs) => console.log(data);

  const selectedRating = watch("rating");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <h4 className="text-center text-lg font-medium">Rate this Shipment</h4>
      <div className="w-full max-w-lg mx-auto">
        <div className="flex justify-center gap-6 my-10 w-full">
          {ratings.map((rating) => (
            <label
              className={` hover:scale-125 transform transition-all ${
                Number(selectedRating) === rating.value ? "scale-150" : ""
              } cursor-pointer`}
              title={rating.title}
              key={rating.title}
            >
              {rating.icon}
              <input
                name="rating"
                value={rating.value}
                className="hidden"
                ref={register}
                type="radio"
               />
            </label>
          ))}
        </div>
        <div className="mb-8 w-full">
          <Controller
            name="pickup_address"
            control={control}
            defaultValue=""
            render={({ name, value, onChange }) => (
              <TextInput
                name={name}
                value={value}
                id={name}
                multiline
                rows={5}
                className={style.forminput}
                wrapperClassName="w-full"
                error={errors["comment"]}
                placeholder="Express yourself here"
                customChange={onChange}
              />
            )}
          />
        </div>
        <div className="w-full text-center">
          <button
            className="mb-5 text-white bg-secondary font-bold py-2 px-10 rounded"
            type="submit"
          >
            Done
          </button>
        </div>
      </div>
    </form>
  );
};
