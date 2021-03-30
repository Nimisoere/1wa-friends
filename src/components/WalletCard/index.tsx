import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../interfaces';
import { show, hide } from '../../redux/slices/modal';
import WalletCard from './WalletCard';

const mapState = (state: AppState) => ({});

const mapDispatch = {
  showModal: show,
  hideModal: hide,
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(WalletCard);
