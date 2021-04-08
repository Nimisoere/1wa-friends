import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../interfaces';
import { API_KEYS } from '../../interfaces/api';
import { getApiState } from '../../redux/selectors/common';
import UserTabs from './UserTabs';
import { addStar, removeStar } from '../../redux/slices/stars';

const mapState = (state: AppState) => ({
  friends: getApiState(state, API_KEYS.GET_FRIENDS),
  starred: state.starredFriends,
});

const mapDispatch = {
  addStar,
  removeStar,
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(UserTabs);
