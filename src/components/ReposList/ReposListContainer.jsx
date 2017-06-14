import { connect } from 'react-redux';
import { compose } from 'recompose';
import withSpinner from '../hoc/withSpinner';
import withError from '../hoc/withError';
import {
  selectIsFetching,
  selectError,
  selectRepos,
} from '../../modules/repos';
import ReposList from './ReposList';

export default compose(
  connect(state => ({
    isFetching: selectIsFetching(state),
    error: selectError(state),
    repos: selectRepos(state),
  })),
  withSpinner(),
  withError
)(ReposList);
