import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "../public/styles/main.css";

export default class Header extends React.Component {
  render() {
    return (
      <Navbar
        id="cod-header"
        expand="lg"
        className="navbar navbar-dark bg-dark"
      >
        <Container>
          <Navbar.Brand href="/">COD RCG</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/changelog">Changelog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
