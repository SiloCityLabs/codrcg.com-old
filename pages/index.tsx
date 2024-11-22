import { Container, Row, Col } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Header from "@/components/Header";
import GeneratorCard from "@/components/GeneratorCard";

export default function Home() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Header navLinks={navLinks} />
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs lg={8} className="text-center">
            <Alert key="primary" variant="primary">
              We're back, and were open source!!
            </Alert>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xl={3} lg={4} className="text-center">
            <GeneratorCard
              title="Black Ops 6"
              text="Zombies generator coming in december 2024"
              variant="black-ops"
              btn1Text="MP Generator"
              link="black-ops-six/generator"
              disabled={false}
              btn2Text="Zombies Generator"
              link2="black-ops-six/zombies-generator"
              disabled2={false}
            />
          </Col>
          <Col xl={3} lg={4} className="text-center">
            <GeneratorCard
              title="Warzone"
              text="Coming this holiday season"
              variant="success"
              link="warzone-two/generator"
              disabled={true}
            />
          </Col>
          <Col xl={3} lg={4} className="text-center">
            <GeneratorCard
              title="Modern Warfare 3 (2023)"
              text="Coming in 2025"
              variant="danger"
              link="modern-warfare-three/generator"
              disabled={true}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
