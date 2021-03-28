import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../interfaces';
import { API_KEYS } from '../../interfaces/api';
import { getApiState } from '../../redux/selectors/common';
import { hide, show } from '../../redux/slices/modal';
import { resetApiThunk } from '../../redux/thunks/api';
import { thunks } from '../../redux/thunks/thunks';
import TrackingWidget from './TrackingWidget';

const mapState = (state: AppState) => ({
  trackShipmentState: getApiState(state, API_KEYS.TRACK_SHIPMENT),
});

const mapDispatch = {
  showModal: show,
  hideModal: hide,
  trackShipment: thunks.TRACK_SHIPMENT,
  resetApi: resetApiThunk,
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(TrackingWidget);
