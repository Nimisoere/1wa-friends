import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../../interfaces';
import { addStar, removeStar } from '../../../redux/slices/stars';
import StarredButton from './StarredButton';

interface Props {
  friendId: number;
}

const mapState = (state: AppState, ownProps: Props) => ({
  starred: state.starredFriends,
});

const mapDispatch = {
  addStar,
  removeStar,
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

const ConnectedStarredButton: React.FC<Props> = connector(StarredButton);

export default ConnectedStarredButton;
