import { Container, Row, Col } from "react-bootstrap";

function Changelog2024() {
  return (
    <>
      <Container
        id="changelog-2024"
        className="changelog shadow-lg p-3 mb-5 bg-body rounded"
      >
        <Row>
          <Col>
            <p>
              11/20/2024: <a href="black-ops-six/generator">Black Ops VI:</a>{" "}
              Generator is now available!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Changelog2024;
