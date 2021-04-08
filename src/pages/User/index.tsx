import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../interfaces';
import { API_KEYS } from '../../interfaces/api';
import { getApiState } from '../../redux/selectors/common';
import { thunks } from '../../redux/thunks/thunks';
import User from './User';

const mapState = (state: AppState) => ({
  friends: getApiState(state, API_KEYS.GET_FRIENDS),
});

const mapDispatch = {
  getFriends: thunks.GET_FRIENDS,
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(User);
