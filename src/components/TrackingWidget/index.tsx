import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../../interfaces";
import { hide, show } from "../../redux/slices/modal";
import TrackingWidget from "./TrackingWidget";

const mapState = (state: AppState) => ({});

const mapDispatch = {
  showModal: show,
  hideModal: hide,
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(TrackingWidget);
