import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../interfaces';
import { API_KEYS } from '../../interfaces/api';
import { getApiState } from '../../redux/selectors/common';
import { resetApiThunk } from '../../redux/thunks/api';
import { thunks } from '../../redux/thunks/thunks';
import { RatingForm } from './RatingForm';

const mapState = (state: AppState) => ({
  formState: getApiState(state, API_KEYS.ADD_RATING),
});

const mapDispatch = {
  addRating: thunks.ADD_RATING,
  resetApi: resetApiThunk,
};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(RatingForm);
