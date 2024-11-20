import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "../public/styles/main.css";

interface HeaderProps {
  className?: string;
  navLinks: { label: string; href: string }[];
}

const defaultNavLinks = [
  { label: "Home", href: "/" },
  { label: "Changelog", href: "/changelog" },
];

export default class Header extends React.Component<HeaderProps> {
  render() {
    const { className, navLinks = defaultNavLinks } = this.props;

    return (
      <Navbar
        id="cod-header"
        expand="lg"
        className={`navbar navbar-dark bg-dark ${className}`}
      >
        <Container>
          <Navbar.Brand href="/">COD RCG</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navLinks.map((link, index) => (
                <Nav.Link key={index} href={link.href}>
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
