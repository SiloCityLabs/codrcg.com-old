import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import Changelog2024 from "@/components/changelog/Changelog2024";

export default function Changelog() {
  return (
    <>
      <Header />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2 className="text-center">Changelog</h2>

            <Changelog2024 />
          </Col>
        </Row>
      </Container>
    </>
  );
}
