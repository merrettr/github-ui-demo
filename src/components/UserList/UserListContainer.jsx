import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import withSpinner from '../hoc/withSpinner';
import withError from '../hoc/withError';
import { selectIsFetching, selectError, selectUsers } from '../../modules/users';
import UserList from './UserList';

export default compose(
  connect(state => ({
    isFetching: selectIsFetching(state),
    error: selectError(state),
    users: selectUsers(state),
  })),
  withRouter,
  withSpinner(),
  withError,
)(UserList);