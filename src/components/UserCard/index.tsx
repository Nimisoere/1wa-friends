import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../interfaces';
import { API_KEYS } from '../../interfaces/api';
import { getApiState } from '../../redux/selectors/common';
import { FRIEND } from '../../redux/thunks/interfaces/friends.interface';
import UserCard from './UserCard';

interface Props {
  friend: FRIEND;
}

const mapState = (state: AppState, ownProps: Props) => ({
  friends: getApiState(state, API_KEYS.GET_FRIENDS),
});

const mapDispatch = {};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

const ConnectedCard: React.FC<Props> = connector(UserCard);

export default ConnectedCard;
