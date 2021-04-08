import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../interfaces';
import { API_KEYS } from '../../interfaces/api';
import { getApiState } from '../../redux/selectors/common';
import { addStar, removeStar } from '../../redux/slices/stars';
import { thunks } from '../../redux/thunks/thunks';
import FriendsDisplay from './FriendsDisplay';

const mapState = (state: AppState) => ({
  friendsRequest: getApiState(state, API_KEYS.GET_FRIENDS),
  starred: state.starredFriends,
});

const mapDispatch = {
  getFriends: thunks.GET_FRIENDS,
  addStar,
  removeStar,
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(FriendsDisplay);
