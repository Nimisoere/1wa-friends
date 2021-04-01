import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../interfaces';
import { show, hide } from '../../redux/slices/modal';
import { SelectCountry } from './SelectCountry';

const mapState = (state: AppState) => ({
  modal: state.modal,
});

const mapDispatch = {
  showModal: show,
  hideModal: hide,
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(SelectCountry);
