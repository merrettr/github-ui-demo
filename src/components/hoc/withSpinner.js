import React from 'react';
import Spinner from '../Spinner';

export default hideSpinner =>
  Component =>
    ({ isFetching, ...props }) =>
      isFetching
        ? !hideSpinner && <Spinner />
        : <Component {...props} />