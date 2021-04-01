import React from 'react';
import { MdClose } from 'react-icons/md';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { PropsFromRedux } from '.';
import { getRequiredErrorMessage } from '../../utils/common.utils';

interface Props extends PropsFromRedux {}

const schema = yup.object().shape({
  tonnage: yup
    .number()
    .required(getRequiredErrorMessage('Tonnage'))
    .typeError('Tonnage must be a selected number'),
});

interface Inputs {
  tonnage: number;
}

const Tonnage: React.FC<Props> = ({ hideModal }) => {
  const history = useHistory();

  const { handleSubmit, register, watch, errors } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Inputs) => {
    history.push('/giggo-delivery-app/shipping-information');
    hideModal();
  };

  const tonValue = watch('tonnage');

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full px-4 bg-white rounded-xl lg:px-14 py-10 relative"
    >
      <MdClose
        className="sticky sm:absolute cursor-pointer text-2xl top-0 left-full sm:left-auto sm:right-5 sm:top-5"
        onClick={() => {
          hideModal();
        }}
      />
      <div className="w-full text-center mb-10">
        <h4 className="text-3xl mb-5 font-bold">Select truck size</h4>
        <p className="text-xl font-medium">
          Kindly select tonne size of a truck
        </p>
      </div>
      <div className="w-full max-w-xs mx-auto">
        {[5, 10, 15, 20, 25, 30].map((tonnage) => (
          <label htmlFor={`${tonnage}`} key={tonnage}>
            <div
              className={`bg-gray-200 cursor-pointer p-4 my-5 rounded-lg flex items-center justify-center font-medium ${
                tonValue?.toString() === tonnage?.toString()
                  ? 'font-bold bg-gray-300'
                  : ''
              }`}
            >
              <p className="text-sm">{tonnage}</p>
            </div>
            <input
              id={`${tonnage}`}
              name="tonnage"
              value={tonnage}
              className="hidden"
              ref={register}
              type="radio"
            />
          </label>
        ))}
        {errors['tonnage'] ? (
          <span className="text-xs text-red-500">
            {errors['tonnage'].message}
          </span>
        ) : (
          ''
        )}
      </div>
      <div className="w-full my-10 flex items-center justify-center">
        <button
          className="h-12 flex justify-center bg-secondary rounded px-12 text-white items-center font-bold text-lg"
          type="submit"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Tonnage;
