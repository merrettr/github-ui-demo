import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const { Header, Brand, Toggle, Collapse } = Navbar;

export default ({ location: { pathname }, history: { push }}) =>
  <Navbar inverse collapseOnSelect >
    <Header>
      <Brand>Github UI</Brand>
      <Toggle />
    </Header>
    <Collapse>
      <Nav activeKey={pathname}>
        <NavItem eventKey="/repos" onClick={() => push('/repos')}>Repos</NavItem>
        <NavItem eventKey="/users" onClick={() => push('/users')}>Users</NavItem>
      </Nav>
    </Collapse>
  </Navbar>