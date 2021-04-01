import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { vehicles } from '../../shippingform.utils';
import { PropsFromRedux } from '.';
import TonnageModal from '../../../TonnageModal';

interface Props extends PropsFromRedux {}

interface Inputs {
  vehicle_type: 'bike' | 'car' | 'van' | 'truck';
}

const schema = yup.object().shape({
  vehicle_type: yup.string().oneOf(['bike', 'car', 'van', 'truck']).required(),
});

export const VehicleInfo: React.FC<Props> = ({ showModal }) => {
  const history = useHistory();

  const { handleSubmit, register, watch } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const vehicle_type = watch('vehicle_type');

  React.useEffect(() => {
    const onSubmit = (data: Inputs) => {
      history.push('/giggo-delivery-app/shipping-information');
    };
    if (vehicle_type !== 'truck') {
      handleSubmit(onSubmit)();
    } else {
      showModal({
        component: <TonnageModal />,
        modalProps: {},
      });
    }
  }, [handleSubmit, history, showModal, vehicle_type]);

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
            <label
              htmlFor={vehicle.id}
              className="p-4 w-full sm:w-1/2"
              key={vehicle.id}
            >
              <div
                className={`shadow-lg hover:border-secondary flex flex-col justify-center items-center cursor-pointer border h-full ${
                  vehicle_type === vehicle.value
                    ? 'border-primary'
                    : 'border-gray-100'
                } text-center my-2 p-5 rounded-lg`}
              >
                <p className="mb-5">{vehicle.icon}</p>
                <h4 className="font-medium text-2xl mb-4">{vehicle.name}</h4>
                <p className="text-sm font-normal">{vehicle.description}</p>
              </div>
              <input
                id={vehicle.id}
                name="vehicle_type"
                value={vehicle.value}
                className="hidden"
                ref={register}
                type="radio"
              />
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};
