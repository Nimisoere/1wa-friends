import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Airplane } from "../../assets/icons/overseas_shipping.svg";
import { ReactComponent as ShipPackage } from "../../assets/icons/shipment_cost.svg";
import { ReactComponent as Truck } from "../../assets/icons/ship_now.svg";
import { ReactComponent as Wallet } from "../../assets/icons/wallet.svg";

interface Props {}

const SideMenu: React.FC<Props> = (props) => {
  return (
    <nav className="w-full sticky top-28 flex flex-wrap shadow-2xl rounded-lg">
      <NavLink
        activeClassName="bg-secondary text-white"
        className="w-full font-medium text-sm p-3 rounded-tl-lg rounded-tr-lg"
        to="/giggo-delivery-app"
      >
        <Truck className="inline-flex mr-3" width="20" />
        Ship Now
      </NavLink>
      <NavLink
        activeClassName="bg-secondary text-white"
        className="w-full font-medium text-sm p-3"
        to="/get-a-quote"
      >
        <ShipPackage className="inline-flex mr-3" width="20" />
        Get Shipment Cost
      </NavLink>
      <NavLink
        activeClassName="bg-secondary text-white"
        className="w-full font-medium text-sm p-3"
        to="/overseas-shipping"
      >
        <Airplane className="inline-flex mr-3" width="20" />
        Overseas Shipping
      </NavLink>
      <NavLink
        activeClassName="bg-secondary text-white"
        className="w-full font-medium text-sm p-3 rounded-bl-lg rounded-br-lg"
        to="/wallet"
      >
        <Wallet className="inline-flex mr-3" width="20" />
        Wallet
      </NavLink>
    </nav>
  );
};

export default SideMenu;
