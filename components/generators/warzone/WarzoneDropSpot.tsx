import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import WheelComponent from "react-wheel-of-prizes-react19";
//Json
import urzikstanSpots from "@/json/warzone/drop_spots/urzikstan.json";

function WarzoneDropSpot() {
  const [isClient, setIsClient] = useState(false);
  const [spinResult, setSpinResult] = useState("None");
  const segments = [
    "Test 1",
    "Test 2",
    "Test 3",
    "Test 4",
    "Test 5",
    "Test 6",
    "Test 7",
    "Test 8",
    "Test 9",
    "Test 10",
  ];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];
  const onFinished = (winner) => {
    console.log(winner);
    setSpinResult(winner);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Container
        id="where-we-dropping"
        className={`shadow-lg p-3 bg-body rounded`}
      >
        <Row className="justify-content-md-center">
          <Col lg={12} className="d-flex justify-content-center">
            {isClient && (
              <>
                <span className="fw-bold">Winner: </span>
                {"  "}
                <span> {spinResult}</span>
                <WheelComponent
                  segments={urzikstanSpots}
                  segColors={segColors}
                  winningSegment="Test 1"
                  onFinished={(winner) => onFinished(winner)}
                  primaryColor="black"
                  contrastColor="white"
                  buttonText="Spin"
                  isOnlyOnce={false}
                  size={300}
                  upDuration={200}
                  downDuration={600}
                  randomWinningSegment={true}
                />
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WarzoneDropSpot;
