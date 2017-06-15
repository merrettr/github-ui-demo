import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import repos, { sagas as reposSagas } from './repos';
import users, { sagas as usersSagas } from './users';
import user, { sagas as userSaga } from './user';

export function* sagas() {
  yield all([...reposSagas, ...usersSagas, ...userSaga]);
}

export default combineReducers({
  repos,
  users,
  user,
});
