import { connect } from 'react-redux';
import {
  searchRepos,
  selectIsFetching,
  selectSearchTerm,
} from '../../modules/repos';
import Search from '../Search';

export default connect(
  state => ({
    isSearching: selectIsFetching(state),
    defaultValue: selectSearchTerm(state),
    hint: 'try react or redux',
  }),
  {
    search: searchRepos,
  }
)(Search);
