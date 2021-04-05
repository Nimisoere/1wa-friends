import React from 'react';
import { useHistory, useParams } from 'react-router';
import SyncLoader from 'react-spinners/SyncLoader';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { IoEllipse } from 'react-icons/io5';
import { format } from 'date-fns';
import { PropsFromRedux } from '.';
import { formatMoney } from '../../utils/common.utils';
import styles from './TrackingShipment.module.scss';
import RatingForm from '../RatingForm';
import { API_KEYS } from '../../interfaces/api';
import ModalWrapper from '../common/ModalWrapper';
import { trackingData } from './tracking.constants';

interface Props extends PropsFromRedux {}

const TrackShipment: React.FC<Props> = ({
  hideModal,
  shipmentDetails,
  trackShipmentState,
  resetApi,
  trackShipment,
  getShipmentDetails,
}) => {
  const history = useHistory();
  const { trackingCode } = useParams<{ [x: string]: string }>();

  const { loading, error, response } = trackShipmentState || {};

  React.useEffect(() => {
    if (trackingCode) {
      trackShipment(trackingCode);
      getShipmentDetails(trackingCode);
    }
    return () => {
      resetApi(API_KEYS.TRACK_SHIPMENT);
      resetApi(API_KEYS.GET_SHIPMENT_DETAILS);
      resetApi(API_KEYS.ADD_RATING);
    };
  }, [trackingCode, trackShipment, resetApi, getShipmentDetails]);

  React.useEffect(() => {
    if (error) {
      hideModal();
      history.push('/');
    }
    return () => {
      resetApi(API_KEYS.TRACK_SHIPMENT);
    };
  }, [resetApi, error, hideModal, history]);

  if (loading) {
    return (
      <ModalWrapper hideCloseButton hideModal={hideModal} redirectOnClose="/">
        <SyncLoader color="#CCC" />
      </ModalWrapper>
    );
  }
  if (response?.Object) {
    const trackingObject = response?.Object;
    const shipmentDetail = shipmentDetails?.response?.Object;
    return (
      <ModalWrapper hideModal={hideModal} redirectOnClose="/">
        <h4 className="text-center text-2xl mb-10 font-sans font-black">
          Track Shipment
        </h4>
        <div className="w-full border-b border-gray-200 flex flex-wrap py-3">
          <div className="w-1/2 lg:w-1/4">
            <p className="text-xs font-medium mb-1">Waybill number</p>
            <p className="text-lg font-medium">{trackingCode}</p>
          </div>
          <div className="w-1/2 lg:w-1/4">
            <p className="text-xs font-medium mb-1">Date</p>
            <p className="text-lg font-medium">
              {shipmentDetail?.DateCreated &&
                format(new Date(shipmentDetail?.DateCreated), 'dd/MM/yyyy')}
            </p>
          </div>
          <div className="w-1/2 lg:w-1/4">
            <p className="text-xs font-medium mb-1">Amount paid</p>
            <p className="text-lg font-medium">
              {formatMoney(
                shipmentDetail?.CalculatedTotal,
                shipmentDetail?.CurrencyCode || 'NGN'
              ).replace(
                shipmentDetail?.CurrencyCode || 'NGN',
                shipmentDetail?.CurrencySymbol
              )}
            </p>
          </div>
          <div className="w-1/2 lg:w-1/4">
            <p className="text-xs font-medium mb-1">ETA</p>
            <p className="text-lg font-medium">{trackingData.eta}</p>
          </div>
        </div>

        <div className="w-full my-6">
          <div className={styles.timeline}>
            {trackingData.status.ready_for_pickup.done ? (
              <IoIosCheckmarkCircle className="text-2xl" />
            ) : (
              <IoEllipse className="text-2xl opacity-70" />
            )}
            <div className="flex-grow px-4">
              <h4 className="font-medium mb-2">Ready to Pickup</h4>
              <p className="text-xs">
                Item with waybill number {trackingCode} is ready for pickup
              </p>
            </div>
            <div className="font-medium text-green-500">
              {trackingData.status.ready_for_pickup.eta}
            </div>
          </div>
          <div className={styles.timeline}>
            {trackingData.status.processed.done ? (
              <IoIosCheckmarkCircle className="text-2xl" />
            ) : (
              <IoEllipse className="text-2xl opacity-70" />
            )}
            <div className="flex-grow px-4">
              <h4 className="font-medium mb-2">Item Processed</h4>
              <p className="text-xs">Dispatch rider on the move</p>
            </div>
            <div className="font-medium text-green-500">
              {trackingData.status.processed.eta}
            </div>
          </div>
          <div className={styles.timeline}>
            {trackingData.status.payment_confirmed.done ? (
              <IoIosCheckmarkCircle className="text-2xl" />
            ) : (
              <IoEllipse className="text-2xl opacity-70" />
            )}
            <div
              className={`flex-grow px-4 ${
                !trackingData.status.payment_confirmed.done && 'opacity-70'
              }`}
            >
              <h4 className="font-medium mb-2">Payment Confirmed</h4>
              <p className="text-xs">Yet to be confirmed</p>
            </div>
            <div className="font-medium text-green-500">
              {trackingData.status.payment_confirmed.eta}
            </div>
          </div>
          <div className={styles.timeline}>
            {trackingData.status.delivered.done ? (
              <IoIosCheckmarkCircle className="text-2xl" />
            ) : (
              <IoEllipse className="text-2xl opacity-70" />
            )}
            <div
              className={`flex-grow px-4 ${
                !trackingData.status.delivered.done && 'opacity-70'
              }`}
            >
              <h4 className="font-medium mb-2">Item Delivered</h4>
              <p className="text-xs">Your item has been delivered</p>
            </div>
            <div className="font-medium text-green-500">
              {trackingData.status.delivered.eta}
            </div>
          </div>
        </div>

        <div className="w-full">
          <h4 className="font-sans text-green-500 text-lg font-extrabold mb-3">
            Delivery Address
          </h4>
          <div className="w-full pl-10">
            <div className="bg-white w-full mb-5 shadow-lg rounded-lg px-9 pt-3 pb-10">
              <p className="text-xs mb-2">From</p>
              <p className="font-medium text-sm">{trackingObject.Origin}</p>
            </div>
            <div className="bg-white w-full mb-5 shadow-lg rounded-lg px-9 pt-3 pb-10">
              <p className="text-xs mb-2">Shipment Destination</p>
              <p className="font-medium text-sm">
                {trackingObject.Destination}
              </p>
            </div>
          </div>
        </div>

        {!shipmentDetail?.isRated && (
          <div className="my-10">
            <RatingForm />
          </div>
        )}
      </ModalWrapper>
    );
  }
  return null;
};

export default TrackShipment;
