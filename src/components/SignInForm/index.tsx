import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../interfaces';
import { API_KEYS } from '../../interfaces/api';
import { getApiState } from '../../redux/selectors/common';
import { thunks } from '../../redux/thunks/thunks';
import SignInForm from './SignInForm';

const mapState = (state: AppState) => ({
  loginState: getApiState(state, API_KEYS.LOGIN),
});

const mapDispatch = {
  login: thunks.LOGIN,
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(SignInForm);
