import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../interfaces';
import { hideModal } from '../../redux/slices/modal';
import Modal from './Modal';

const mapState = (state: AppState) => ({
  modal: state.modal,
});

const mapDispatch = {
  hideModal,
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Modal);
