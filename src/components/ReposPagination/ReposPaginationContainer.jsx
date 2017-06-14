import { connect } from 'react-redux';
import { compose } from 'recompose';
import withSpinner from '../hoc/withSpinner';
import {
  followReposLink,
  selectIsFetching,
  selectFirstLink,
  selectLastLink,
  selectNextLink,
  selectPreviousLink,
} from '../../modules/repos';
import ReposPagination from './ReposPagination';

export default compose(
  connect(
    state => ({
      isFetching: selectIsFetching(state),
      first: selectFirstLink(state),
      last: selectLastLink(state),
      next: selectNextLink(state),
      previous: selectPreviousLink(state),
    }),
    {
      onClick: followReposLink,
    }
  ),
  withSpinner(true)
)(ReposPagination);
