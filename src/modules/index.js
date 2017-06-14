import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import repos, { sagas as reposSagas } from './repos';
import users, { sagas as usersSagas } from './users';

export function* sagas() {
  yield all([...reposSagas, ...usersSagas]);
}

export default combineReducers({
  repos,
  users,
});
