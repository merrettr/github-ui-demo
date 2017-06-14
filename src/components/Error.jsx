import React from 'react';
import { Panel } from 'react-bootstrap';

export default ({ error }) =>
  <div style={{ margin: '1em 0' }}>
    <Panel header="Uh Oh" bsStyle="danger">
      {error}
    </Panel>
  </div>