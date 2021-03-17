import React from "react";
import { MdClose } from "react-icons/md";
import { useHistory } from "react-router";
import { PropsFromRedux } from ".";

interface Props extends PropsFromRedux {}

const TrackShipment: React.FC<Props> = ({ hideModal }) => {
  const history = useHistory();
  return (
    <div className="w-full px-14 py-10 relative">
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
        <div className="w-1/4">
          <p className="text-xs font-medium mb-1">Waybill number</p>
          <p className="text-lg font-medium">1349054863</p>
        </div>
        <div className="w-1/4">
          <p className="text-xs font-medium mb-1">Date</p>
          <p className="text-lg font-medium">12/12/2021</p>
        </div>
        <div className="w-1/4">
          <p className="text-xs font-medium mb-1">Amount paid</p>
          <p className="text-lg font-medium">N6,000.00</p>
        </div>
        <div className="w-1/4">
          <p className="text-xs font-medium mb-1">ETA</p>
          <p className="text-lg font-medium">45 Min</p>
        </div>
      </div>
    </div>
  );
};

export default TrackShipment;
