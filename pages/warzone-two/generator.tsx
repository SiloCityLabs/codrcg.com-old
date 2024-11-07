import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import WarzoneTwoLoadout from "@/components/WarzoneTwoLoadout";

export default function WarzoneTwo() {
  return (
    <>
      <Header />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>Warzone 2 - Random Class Generator</h2>

            <WarzoneTwoLoadout />
          </Col>
        </Row>
      </Container>
    </>
  );
}
