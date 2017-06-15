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
    <div style={{ width: '25%' }}>
      <ProgressBar active now={100} />
    </div>
  </div>;
