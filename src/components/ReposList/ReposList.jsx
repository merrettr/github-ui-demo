import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Repo from './Repo';

export default ({ repos }) =>
  <ListGroup>
    {repos.map(repo =>
      <ListGroupItem
        key={repo.id}
        style={{ margin: '1em 0' }}
      >
        <Repo {...repo} />
      </ListGroupItem>)}
  </ListGroup>