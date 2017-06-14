import React from 'react';
import Error from '../Error';

export default Component =>
  ({ error, ...props }) =>
    error
      ? <Error error={error} />
      : <Component {...props} />