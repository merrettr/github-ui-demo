import React from 'react';
import { Glyphicon } from 'react-bootstrap';

export default ({ onBack }) =>
  <div
    style={{ cursor: 'pointer', padding: '1em', fontSize: '1.5em' }}
    onClick={onBack}
  >
    <Glyphicon glyph="chevron-left" />
  </div>;
