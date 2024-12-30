import React from "react";
import { Nav } from "react-bootstrap";

function Footer() {
  return (
    <>
      <footer className="bg-light text-center">
        <Nav className="justify-content-center flex-column flex-md-row">
          <Nav.Item
            style={{
              padding: "7px",
            }}
          >
            ©2024 Copyright: SiloCityLabs
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/terms">Terms</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/privacy">Privacy Policy</Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="text-center p-3">
          <a
            property="dct:title"
            rel="cc:attributionURL"
            href="https://codrcg.com"
          >
            codrcg.com
          </a>{" "}
          by{" "}
          <a
            rel="cc:attributionURL dct:creator"
            property="cc:attributionName"
            href="https://silocitylabs.com"
          >
            SiloCityLabs
          </a>{" "}
          is licensed under{" "}
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
            target="_blank"
            rel="license noopener noreferrer"
            style={{
              display: "inline-block",
            }}
          >
            CC BY-NC-SA 4.0
            <img
              style={{
                height: "22px",
                marginLeft: "3px",
                verticalAlign: "text-bottom",
              }}
              src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
              alt=""
            />
            <img
              style={{
                height: "22px",
                marginLeft: "3px",
                verticalAlign: "text-bottom",
              }}
              src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
              alt=""
            />
            <img
              style={{
                height: "22px",
                marginLeft: "3px",
                verticalAlign: "text-bottom",
              }}
              src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
              alt=""
            />
            <img
              style={{
                height: "22px",
                marginLeft: "3px",
                verticalAlign: "text-bottom",
              }}
              src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"
              alt=""
            />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
