import { format } from 'date-fns';
import React from 'react';
import { formatMoney, titleCase } from '../../utils/common.utils';
import {
  shipments,
  Shipment as IShipment,
} from './wallettransactions.constants';
import styles from './Shipment.module.scss';
import Select from '../form-controls/Select';

interface Props {}

interface ShipmentProps {
  index: number;
  shipment: IShipment;
}

const renderStatus = (status: 'done' | 'pending' | 'in-progress') => {
  let buttonProps;
  switch (status) {
    case 'done':
      buttonProps = {
        color: '#2F80ED',
        text: 'Rate',
        onClick: () => null,
      };
      break;
    case 'pending':
      buttonProps = {
        color: '#F2994A',
        text: 'Cancel',
        onClick: () => null,
      };
      break;
    case 'in-progress':
      buttonProps = {
        color: '#27AE60',
        text: 'Track',
        onClick: () => null,
      };
      break;
  }
  return buttonProps;
};

const Shipment: React.FC<ShipmentProps> = ({ shipment }) => {
  const buttonProps = renderStatus(shipment.status);

  return (
    <div
      className="w-full flex flex-wrap px-4 sm:px-10 py-4 border-b border-gray-300"
      key={shipment.id}
    >
      <div className="w-full sm:w-3/4 flex flex-col">
        <div className="font-medium mb-4">{shipment.id}</div>
        <div className="flex-grow flex flex-col max-w-xs justify-between">
          <p className={`${styles.shipmentAddress1} mb-2 text-xs`}>
            {shipment.from_address}
          </p>
          <p className={`${styles.shipmentAddress2} text-xs`}>
            {shipment.to_address}
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/4 flex sm:block justify-between items-center text-right">
        <div>
          <p className="font-semibold text-lg">
            {formatMoney(shipment.amount, 'NGN', 0).replace('NGN', '₦')}
          </p>
          <p className="text-xs">
            {format(new Date(shipment.transaction_date), 'dd/MM/yy')}
          </p>
        </div>
        <div>
          <button
            type="button"
            onClick={buttonProps.onClick}
            style={{ backgroundColor: buttonProps.color }}
            className="font-semibold hover:opacity-80 rounded-md py-2 px-4 my-4 text-white text-xs"
          >
            {buttonProps?.text}
          </button>
          <p className="text-xs">{titleCase(shipment.status)}</p>
        </div>
      </div>
    </div>
  );
};

const Shipments: React.FC<Props> = () => (
  <div className="w-full">
    <div className="flex flex-wrap w-full my-7">
      <div className="w-full sm:w-2/3 text-center">
        <h4 className="font-semibold text-xl">Shipment history</h4>
      </div>
      <div className="w-full sm:w-1/3">
        <Select
          controlStyles={{
            border: 'none',
          }}
          placeholderStyles={{
            color: 'black',
          }}
          options={[
            { label: 'Track', value: 'track' },
            { label: 'Rate', value: 'rate' },
            { label: 'Cancel', value: 'cancel' },
          ]}
          placeholder="Filter by status"
          id="filter_shipments"
          name="filter_shipments"
        />
      </div>
    </div>
    <div className="w-full font-semibold flex px-10 mb-3">
      <div className="w-3/4">Details</div>
      <div className="w-1/4 text-right">Amount</div>
    </div>
    <div className="bg-white rounded-xl py-10 mb-10">
      {shipments.map((shipment, index) => (
        <Shipment key={shipment.id} shipment={shipment} index={index} />
      ))}
    </div>
    <div className="w-full flex justify-center">
      <button
        type="button"
        className="bg-secondary border text-white rounded py-2 max-w-xs w-full font-semibold text-lg"
      >
        Load More
      </button>
    </div>
  </div>
);

export default Shipments;
