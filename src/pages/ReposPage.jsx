import React from 'react';
import ReposSearch from '../components/ReposSearch';
import ReposList from '../components/ReposList';
import ReposPagination from '../components/ReposPagination';

export default () =>
  <div>
    <ReposSearch />
    <ReposList />
    <ReposPagination />
  </div>;
