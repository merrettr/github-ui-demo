import React from 'react';
import { ListGroup, ListGroupItem, Col } from 'react-bootstrap';
import User from './User';

export default ({ users, history: { push }}) =>
  <ListGroup style={{ marginTop: '1em' }}>
    {users.map(user =>
      <Col
        key={user.id}
        md={6}
        xs={12}
        style={{ marginBottom: '1em', cursor: 'pointer' }}
        onClick={() => push(`/users/${user.login}`)}
      >
        <ListGroupItem>
          <User {...user} />
        </ListGroupItem>
      </Col>)}
  </ListGroup>