import { createAction } from 'redux-actions';
import { takeLatest, put } from 'redux-saga/effects';
import { createSelector } from 'reselect';
import fetch from './util/fetch';

// action types
const SEARCH_REPOS = 'SEARCH_REPOS';
const SEARCH_REPOS_RESULT = 'SEARCH_REPOS_RESULT';
const SEARCH_REPOS_ERROR = 'SEARCH_REPOS_ERROR';
const FOLLOW_LINK = 'FOLLOW_REPOS_LINK';

// action creators
export const searchRepos = createAction(SEARCH_REPOS);
export const followReposLink = createAction(FOLLOW_LINK);

// selectors
const selectLinks = state => state.repos.links;

export const selectIsFetching = createSelector(
  state => state.repos.isFetching,
  isFetching => isFetching,
);

export const selectError = createSelector(
  state => state.repos.error,
  error => error,
);

export const selectSearchTerm = createSelector(
  state => state.repos.searchTerm,
  searchTerm => searchTerm,
);

export const selectRepos = createSelector(
  state => state.repos.data,
  repos => repos,
);

export const selectFirstLink = createSelector(
  selectLinks,
  ({ first }) => first,
);

export const selectLastLink = createSelector(
  selectLinks,
  ({ last }) => last,
);

export const selectNextLink = createSelector(
  selectLinks,
  ({ next }) => next,
);

export const selectPreviousLink = createSelector(
  selectLinks,
  ({ prev }) => prev,
);

// sagas
function* fetchRepos(endpoint) {
  try {
    const response = yield fetch({ endpoint });

    yield put({
      type: SEARCH_REPOS_RESULT,
      response,
    });
  } catch ({ message: error }) {
    yield put({
      type: SEARCH_REPOS_ERROR,
      error,
    });
  }
}

function* onSearchRepos({ payload }) {
  yield* fetchRepos(`https://api.github.com/search/repositories?q=${payload} in:name&sort=stars&order=desc`);
}

function* onFollowLink({ payload }) {
  yield* fetchRepos(payload);
}

export const sagas = [
  takeLatest(SEARCH_REPOS, onSearchRepos),
  takeLatest(FOLLOW_LINK, onFollowLink),
];

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
    case SEARCH_REPOS:
      return {
        ...state,
        searchTerm: payload,
        isFetching: true,
        data: [],
      };
    case FOLLOW_LINK:
      return {
        ...state,
        isFetching: true,
        data: [],
      };
    case SEARCH_REPOS_RESULT:
      return {
        ...state,
        isFetching: false,
        links: response.links,
        data: response.data,
      };
    case SEARCH_REPOS_ERROR:
      return {
        ...state,
        isFetching: false,
        error,
      };
    default:
      return state;
  }
}