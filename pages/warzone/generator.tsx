import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";

export default function WarzoneTwo() {
  return (
    <>
      <Header />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <p>Warzone - Random Class Generator</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
