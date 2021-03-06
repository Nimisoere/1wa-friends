import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../interfaces';
import RightTopMenu from './RightTopMenu';

const mapState = (state: AppState) => ({});

const mapDispatch = {};

const connector = connect(mapState, mapDispatch);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(RightTopMenu);
