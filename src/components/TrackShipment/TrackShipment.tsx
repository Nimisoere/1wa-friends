import React from "react";
import { MdClose } from "react-icons/md";
import { useHistory } from "react-router";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoEllipse } from "react-icons/io5";
import { PropsFromRedux } from ".";
import { formatMoney } from "../../utils/common.utils";
import { trackingData } from "./tracking.constants";
import styles from "./TrackingShipment.module.scss";
import RatingForm from "../RatingForm";

interface Props extends PropsFromRedux {}

const TrackShipment: React.FC<Props> = ({ hideModal }) => {
  const history = useHistory();
  return (
    <div className="w-full px-4 bg-gray-100 lg:px-14 py-10 relative">
      <MdClose
        className="absolute cursor-pointer text-2xl right-5 top-5"
        onClick={() => {
          history.push("/");
          hideModal();
        }}
      />
      <h4 className="text-center text-2xl mb-10 font-sans font-black">
        Track Shipment
      </h4>
      <div className="w-full border-b border-gray-200 flex flex-wrap py-3">
        <div className="w-1/2 lg:w-1/4">
          <p className="text-xs font-medium mb-1">Waybill number</p>
          <p className="text-lg font-medium">{trackingData.waybill_number}</p>
        </div>
        <div className="w-1/2 lg:w-1/4">
          <p className="text-xs font-medium mb-1">Date</p>
          <p className="text-lg font-medium">{trackingData.shipment_date}</p>
        </div>
        <div className="w-1/2 lg:w-1/4">
          <p className="text-xs font-medium mb-1">Amount paid</p>
          <p className="text-lg font-medium">
            {formatMoney(trackingData.amount_paid, "NGN").replace("NGN", "N")}
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
              Item with waybill number {trackingData.waybill_number} is ready
              for pickup
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
              !trackingData.status.payment_confirmed.done && "opacity-70"
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
              !trackingData.status.delivered.done && "opacity-70"
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
            <p className="font-medium text-sm">{trackingData.pickup_address}</p>
          </div>
          <div className="bg-white w-full mb-5 shadow-lg rounded-lg px-9 pt-3 pb-10">
            <p className="text-xs mb-2">Shipment Destination</p>
            <p className="font-medium text-sm">
              {trackingData.destination_address}
            </p>
          </div>
        </div>
      </div>

      <div className="my-10">
        <RatingForm />
      </div>
    </div>
  );
};

export default TrackShipment;
