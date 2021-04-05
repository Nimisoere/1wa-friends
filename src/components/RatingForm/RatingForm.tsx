import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { MdStar } from 'react-icons/md';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams } from 'react-router';
import Loader from 'react-spinners/BeatLoader';
import { getRequiredErrorMessage } from '../../utils/common.utils';
import TextInput from '../form-controls/TextInput';
import style from './RatingForm.module.scss';
import { PropsFromRedux } from '.';
import { API_KEYS } from '../../interfaces/api';

interface Props extends PropsFromRedux {}

const schema = yup.object().shape({
  rating: yup
    .number()
    .min(1)
    .max(5)
    .required(getRequiredErrorMessage('Rating'))
    .typeError('Rating must be a number'),
  comment: yup.string(),
});

interface Inputs {
  rating: 1 | 2 | 3 | 4 | 5;
  comment?: string;
}

export const RatingForm: React.FC<Props> = ({
  addRating,
  formState,
  resetApi,
}) => {
  const { trackingCode } = useParams<{ [x: string]: string }>();

  const { loading, error } = formState || {};

  // eslint-disable-next-line arrow-body-style
  React.useState(() => {
    return () => {
      resetApi(API_KEYS.ADD_RATING);
    };
  });

  const { handleSubmit, control, errors, register, watch } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Inputs) => {
    addRating({
      Rating: data.rating,
      Comment: data.comment,
      UserChannelType: 'IndividualCustomer',
      Waybill: trackingCode,
    });
  };

  const selectedRating = watch('rating');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <h4 className="text-center text-lg font-medium">Rate this Shipment</h4>
      <div className="w-full max-w-lg mx-auto">
        {error?.ShortDescription && (
          <div className="p-4 bg-red-100 text-red-500 text-center rounded-md my-5">
            {error?.ShortDescription}
          </div>
        )}
        <div className="flex justify-center gap-2 my-5 w-full">
          {[...Array(5).keys()].map((rating) => (
            <label
              className="cursor-pointer"
              title={`${rating} star`}
              key={rating}
              htmlFor={`${rating}_star`}
            >
              <MdStar
                className={`text-5xl ${
                  Number(selectedRating) >= rating + 1
                    ? 'text-yellow-300'
                    : 'text-gray-300'
                }`}
              />
              <input
                name="rating"
                id={`${rating}_star`}
                value={rating + 1}
                className="hidden"
                ref={register}
                type="radio"
              />
            </label>
          ))}
        </div>
        <div className="mb-8 w-full">
          <Controller
            name="comment"
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
                error={errors['comment']}
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
            disabled={loading}
          >
            {loading ? (
              <Loader color="white" size={8} loading={loading} />
            ) : (
              'Rate'
            )}
          </button>
        </div>
      </div>
    </form>
  );
};
