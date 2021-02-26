import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../../interfaces";
import WalletCard from "./WalletCard";

const mapState = (state: AppState) => ({});

const mapDispatch = {};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(WalletCard);
