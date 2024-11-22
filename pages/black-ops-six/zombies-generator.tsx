import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import BlackOpsSixZombiesLoadout from "@/components/BlackOpsSixZombiesLoadout";

export default function BlackOpsSix() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/black-ops-six/generator" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Header className="black-ops-6" navLinks={navLinks} />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>Black Ops 6 Zombies - Random Class Generator</h2>

            <BlackOpsSixZombiesLoadout />
          </Col>
        </Row>
      </Container>
    </>
  );
}
