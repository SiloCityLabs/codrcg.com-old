import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import BlackOpsSixLoadout from "@/components/BlackOpsSixLoadout";

export default function BlackOpsSix() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Changelog", href: "/changelog" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <Header className="black-ops-6" navLinks={navLinks} />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>Black Ops 6 - Random Class Generator</h2>

            <BlackOpsSixLoadout />
          </Col>
        </Row>
      </Container>
    </>
  );
}
