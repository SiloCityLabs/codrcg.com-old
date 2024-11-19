import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import GeneratorCard from "@/components/GeneratorCard";

export default function Home() {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col xl={3} lg={4} md={6}>
            <GeneratorCard
              title="Black Ops 6"
              text="Zombies generator coming in december 2024"
              variant="black-ops"
              btn1Text="MP Generator"
              link="black-ops-six/generator"
              disabled={false}
              btn2Text="Zombies Generator"
              link2="black-ops-six/zombies/generator"
              disabled2={true}
            />
          </Col>
          <Col xl={3} lg={4} md={6}>
            <GeneratorCard
              title="Warzone"
              text="Coming this holiday season"
              variant="success"
              link="warzone-two/generator"
              disabled={true}
            />
          </Col>
          <Col xl={3} lg={4} md={6}>
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
