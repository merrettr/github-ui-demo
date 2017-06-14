import React from 'react';
import { Button } from 'react-bootstrap';

export default ({ first, last, next, previous, onClick }) =>
  next || previous
    ? <div style={{ display: 'flex', justifyContent: 'center' }}>
        {first && <Button onClick={() => onClick(first)}>{'<<'}</Button>}
        {previous && <Button onClick={() => onClick(previous)}>{'<'}</Button>}
        {next && <Button onClick={() => onClick(next)}>></Button>}
        {last && <Button onClick={() => onClick(last)}>>></Button>}
      </div>
    : null;
