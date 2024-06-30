import React from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'react-bootstrap';
import logo from '../logo.jpg'

const NavbarComponent = () => {
  return (
    <Navbar className="vert-navbar">
      <NavbarBrand href="/" className="logo-container">
        <img
          src={logo}
          height="30"
          className="logo"
          alt="Company Logo"
        />
      </NavbarBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column mr-auto">
          <NavItem >
            <NavLink href="/menu" >Menu</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/feedback">Feedback</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/login">Login</NavLink>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;