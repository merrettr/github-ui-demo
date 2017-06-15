import React from 'react';
import { FormControl } from 'react-bootstrap';

export default ({ isSearching, search, defaultValue, hint }) => {
  const onKeyDown = ({ keyCode, target: { value } }) => {
    if (keyCode === 13) {
      search(value);
    }
  };

  return (
    <FormControl
      type="text"
      placeholder={`Search for a keyword - ${hint}`}
      onKeyDown={onKeyDown}
      defaultValue={defaultValue}
      disabled={isSearching}
    />
  );
};
