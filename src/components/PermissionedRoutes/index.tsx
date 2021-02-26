import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../../interfaces";
import PermissionedRoute from "./PermissionedRoute";

const mapState = (state: AppState) => ({
  user: {},
});

const mapDispatch = {};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(PermissionedRoute);
