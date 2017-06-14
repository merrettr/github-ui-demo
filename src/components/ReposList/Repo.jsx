import React from 'react';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

export default ({
  fullName,
  htmlUrl,
  createdAt,
  pushedAt,
  stargazersCount,
  owner: { avatarUrl },
}) =>
  <Grid fluid>
    <Row style={{ display: 'flex', paddingBottom: '1em' }}>
      <div style={{ flex: 1 }}>
        <img src={avatarUrl} width="30" height="30" alt="Repo Owner" />
        <a style={{ marginLeft: '.8em' }} href={htmlUrl} target="_blank" rel="noopener noreferrer">
          {fullName}
        </a>
      </div>

      <div>
        <Glyphicon glyph="star" /> {stargazersCount}
      </div>
    </Row>

    <Row style={{
      color: '#586069',
      fontSize: '.85em',
      opacity: .8,
    }}>
      <Col md={6} xs={12}>
        <span>Created: {createdAt}</span>
      </Col>
      <Col md={6} xs={12}>
        <span>Last commit: {pushedAt}</span>
      </Col>
    </Row>
  </Grid>