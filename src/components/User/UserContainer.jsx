import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';
import withSpinner from '../hoc/withSpinner';
import withError from '../hoc/withError';
import {
  fetchUser,
  selectIsFetching,
  selectError,
  selectUser,
} from '../../modules/user';
import User from './User';

export default compose(
  connect(
    state => ({
      isFetching: selectIsFetching(state),
      error: selectError(state),
      user: selectUser(state),
    }),
    { fetchUser }
  ),
  withRouter,
  lifecycle({
    componentWillMount() {
      const { fetchUser, match: { params: { slug } } } = this.props;

      fetchUser(slug);
    },
  }),
  withSpinner(),
  withError
)(User);
