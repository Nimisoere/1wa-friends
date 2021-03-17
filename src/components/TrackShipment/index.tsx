import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../../interfaces";
import { hide } from "../../redux/slices/modal";
import TrackShipment from "./TrackShipment";

const mapState = (state: AppState) => ({});

const mapDispatch = {
  hideModal: hide,
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(TrackShipment);
