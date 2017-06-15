import { createAction } from 'redux-actions';
import { takeLatest, put } from 'redux-saga/effects';
import { createSelector } from 'reselect';
import fetch from './util/fetch';

// action types
const FETCH_USER = 'FETCH_USER';
const FETCH_USER_RESULT = 'FETCH_USER_RESULT';
const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

// action creators
export const fetchUser = createAction(FETCH_USER);

// selectors
export const selectIsFetching = createSelector(
  state => state.user.isFetching,
  isFetching => isFetching
);

export const selectError = createSelector(
  state => state.user.error,
  error => error
);

export const selectUser = createSelector(
  state => state.user.user,
  user => user
);

// sagas
function* onFetchUser({ payload }) {
  try {
    const response = yield fetch({
      endpoint: `https://api.github.com/users/${payload}`,
    });

    yield put({
      type: FETCH_USER_RESULT,
      response,
    });
  } catch ({ message }) {
    yield put({
      type: FETCH_USER_ERROR,
      error: message,
    });
  }
}

export const sagas = [takeLatest(FETCH_USER, onFetchUser)];

// reducer
const initialState = {
  isFetching: false,
  error: null,
  user: {},
};

export default (state = initialState, { type, payload, response, error }) => {
  switch (type) {
    case FETCH_USER:
      return {
        ...state,
        isFetching: true,
        user: {},
      };
    case FETCH_USER_RESULT:
      return {
        ...state,
        isFetching: false,
        user: response.data,
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        error,
      };
    default:
      return state;
  }
};
