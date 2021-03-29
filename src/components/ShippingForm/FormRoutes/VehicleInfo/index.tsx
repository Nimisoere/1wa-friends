import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../../../interfaces';
import { show } from '../../../../redux/slices/modal';
import { VehicleInfo } from './VehicleInfo';

const mapState = (state: AppState) => ({
  modal: state.modal,
});

const mapDispatch = {
  showModal: show,
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(VehicleInfo);
