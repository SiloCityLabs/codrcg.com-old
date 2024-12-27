import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../public/styles/main.css";
import "../public/styles/material.css";

interface HeaderProps {
  className?: string;
  navLinks?: { label: string; href: string; target?: string }[];
}

const defaultNavLinks = [
  { label: "Home", href: "/", target: "" },
  { label: "Changelog", href: "/changelog", target: "" },
  {
    label: "GitHub",
    href: "https://github.com/SiloCityLabs/codrcg.com",
    target: "_blank",
  },
];

export default class Header extends React.Component<HeaderProps> {
  render() {
    const { className, navLinks = defaultNavLinks } = this.props;

    return (
      <Navbar
        id="cod-header"
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        className={`${className}`}
      >
        <Container>
          <Navbar.Brand href="/">COD RCG</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navLinks.map((link, index) => (
                <Nav.Link
                  key={index}
                  href={link.href}
                  target={link.target ? link.target : "_self"}
                >
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
