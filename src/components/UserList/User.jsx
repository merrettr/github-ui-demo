import React from 'react';
import { Glyphicon } from 'react-bootstrap';

export default ({
  login,
  avatarUrl,
}) =>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div style={{ flex: 1 }}>
      <img src={avatarUrl} width="30" height="30" alt="User avatar" />
      <span style={{ marginLeft: '.8em' }}>{login}</span>
    </div>

    <Glyphicon glyph="chevron-right" />
  </div>