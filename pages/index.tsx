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
              text="Coming in November 2024"
              variant="black-ops"
              link="black-ops-six/generator"
              disabled={true}
            />
          </Col>
          <Col xl={3} lg={4} md={6}>
            <GeneratorCard
              title="Warzone 2"
              text="Coming this summer"
              variant="success"
              link="warzone-two/generator"
              disabled={false}
            />
          </Col>
          <Col xl={3} lg={4} md={6}>
            <GeneratorCard
              title="Modern Warfare 3 (2023)"
              text="Coming this summer"
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
