import { createAction } from 'redux-actions';
import { takeLatest, put } from 'redux-saga/effects';
import { createSelector } from 'reselect';
import fetch from './util/fetch';

// action types
const SEARCH_USERS = 'SEARCH_USERS';
const SEARCH_USERS_RESULT = 'SEARCH_USERS_RESULT';
const SEARCH_USERS_ERROR = 'SEARCH_USERS_ERROR';

// action creators
export const searchUsers = createAction(SEARCH_USERS);

// selectors
export const selectIsFetching = createSelector(
  state => state.users.isFetching,
  isFetching => isFetching
);

export const selectError = createSelector(
  state => state.users.error,
  error => error
);

export const selectSearchTerm = createSelector(
  state => state.users.searchTerm,
  searchTerm => searchTerm
);

export const selectUsers = createSelector(
  state => state.users.data,
  users => users
);

// sagas
function* onSearchUsers({ payload }) {
  try {
    const response = yield fetch({
      endpoint: `https://api.github.com/search/users?q=${payload}&sort=score&order=desc`,
    });

    yield put({
      type: SEARCH_USERS_RESULT,
      response,
    });
  } catch ({ message: error }) {
    yield put({
      type: SEARCH_USERS_ERROR,
      error,
    });
  }
}

export const sagas = [takeLatest(SEARCH_USERS, onSearchUsers)];

// reducer
const initialState = {
  searchTerm: '',
  isFetching: false,
  error: null,
  data: [],
  links: {},
};

export default (state = initialState, { type, payload, response, error }) => {
  switch (type) {
    case SEARCH_USERS:
      return {
        ...state,
        searchTerm: payload,
        isFetching: true,
        data: [],
      };
    case SEARCH_USERS_RESULT:
      return {
        ...state,
        isFetching: false,
        links: response.links,
        data: response.data,
      };
    case SEARCH_USERS_ERROR:
      return {
        ...state,
        isFetching: false,
        error,
      };
    default:
      return state;
  }
};
