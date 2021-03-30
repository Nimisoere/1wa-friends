import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../interfaces';
import { show, hide } from '../../redux/slices/modal';
import FundWallet from './FundWallet';

const mapState = (state: AppState) => ({});

const mapDispatch = {
  showModal: show,
  hideModal: hide,
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(FundWallet);
