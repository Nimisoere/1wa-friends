import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../interfaces';
import { API_KEYS } from '../../interfaces/api';
import { getApiState } from '../../redux/selectors/common';
import UserTabs from './UserTabs';

const mapState = (state: AppState) => ({
  friends: getApiState(state, API_KEYS.GET_FRIENDS),
});

const mapDispatch = {};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(UserTabs);
