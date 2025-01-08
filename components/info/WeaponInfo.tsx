import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

interface WeaponProps {
  name: string;
}

function WeaponInfo({ name }: WeaponProps) {
  const [containerClass, setContainerClass] = useState("hidden");

  return (
    <>
      <Container
        id="random-class"
        className={`${containerClass} shadow-lg p-3 bg-body rounded`}
      >
        <Row className="justify-content-md-center">
          <Col sm className="text-center">
            {name} {/* Display the name prop */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WeaponInfo;
