import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../interfaces';
import TrackShipment from './TrackShipment';
import { API_KEYS } from '../../interfaces/api';
import { getApiState } from '../../redux/selectors/common';
import { hideModal, showModal } from '../../redux/slices/modal';
import { resetApiThunk } from '../../redux/thunks/api';
import { thunks } from '../../redux/thunks/thunks';

const mapState = (state: AppState) => ({
  trackShipmentState: getApiState(state, API_KEYS.TRACK_SHIPMENT),
  shipmentDetails: getApiState(state, API_KEYS.GET_SHIPMENT_DETAILS),
});

const mapDispatch = {
  showModal,
  hideModal,
  trackShipment: thunks.TRACK_SHIPMENT,
  getShipmentDetails: thunks.GET_SHIPMENT_DETAILS,
  resetApi: resetApiThunk,
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(TrackShipment);
