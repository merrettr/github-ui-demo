import React from 'react';
import { Grid } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navigation from '../components/Navigation';
import ReposPage from './ReposPage';
import UsersPage from './UsersPage';

export default () =>
  <Router>
    <Grid>
      <div style={{ marginBottom: '1em' }}>
        <Navigation />
      </div>

      <div style={{ margin: '1em 0' }}>
        <Switch>
          <Redirect from="/" exact to="/repos" />

          <Route exact path="/repos" component={ReposPage} />
          <Route exact path="/users" component={UsersPage} />
        </Switch>
      </div>
    </Grid>
  </Router>;
