import React from 'react';
import { Grid, Row, Col, Panel, Well, Glyphicon, Badge } from 'react-bootstrap';

export default ({
  user: {
    login,
    avatarUrl,
    name,
    company,
    location,
    bio,
    email,
    publicRepos,
    publicGists,
    followers,
    following,
  },
}) =>
  <Grid>
    <Panel style={{ padding: '1em' }}>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={avatarUrl}
          alt="User avatar"
          style={{ maxWidth: '100%', maxHeight: '10em' }}
        />
      </Row>

      <Row>
        <h4>{name || login}</h4>
      </Row>

      {bio &&
        <Row>
          <Well>
            {bio}
          </Well>
        </Row>}

      <Row>
        {location &&
          <Col xs={12} md={2} style={{ paddingBottom: '.5em' }}>
            <Glyphicon glyph="map-marker" /> {location}
          </Col>}

        {company &&
          <Col xs={12} md={2} style={{ paddingBottom: '.5em' }}>
            <Glyphicon glyph="home" /> {company}
          </Col>}

        {email &&
          <Col xs={12} md={2} style={{ paddingBottom: '.5em' }}>
            <Glyphicon glyph="envelope" /> {email}
          </Col>}

        <Col xs={12} md={2} style={{ paddingBottom: '.5em' }}>
          Followers <Badge>{followers}</Badge>
        </Col>

        <Col xs={12} md={2} style={{ paddingBottom: '.5em' }}>
          Following <Badge>{following}</Badge>
        </Col>

        <Col xs={12} md={2} style={{ paddingBottom: '.5em' }}>
          Repos <Badge>{publicRepos}</Badge>
        </Col>

        <Col xs={12} md={2} style={{ paddingBottom: '.5em' }}>
          Gists <Badge>{publicGists}</Badge>
        </Col>
      </Row>
    </Panel>
  </Grid>;
