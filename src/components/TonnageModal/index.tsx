import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../interfaces';
import { hideModal } from '../../redux/slices/modal';
import Tonnage from './Tonnage';

const mapState = (state: AppState) => ({});

const mapDispatch = {
  hideModal,
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Tonnage);
