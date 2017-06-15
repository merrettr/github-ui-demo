import { connect } from 'react-redux';
import {
  searchUsers,
  selectIsFetching,
  selectSearchTerm,
} from '../../modules/users';
import Search from '../Search';

export default connect(
  state => ({
    isSearching: selectIsFetching(state),
    defaultValue: selectSearchTerm(state),
  }),
  {
    search: searchUsers,
  }
)(Search('try gaearon or taylorotwell'));
