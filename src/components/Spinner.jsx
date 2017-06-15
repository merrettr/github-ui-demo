import React from 'react';
import { ProgressBar } from 'react-bootstrap';

export default () =>
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '5em',
    }}
  >
    <ProgressBar style={{ flex: 0.25 }} active now={100} />
  </div>;
