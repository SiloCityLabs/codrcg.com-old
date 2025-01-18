import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import WheelComponent from "react-wheel-of-prizes-react19";

function WarzoneDropSpot() {
  const [isClient, setIsClient] = useState(false);
  const [spinResult, setSpinResult] = useState("");
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
        <h3 className="text-center mb-5">Where We Droppin?</h3>

        {isClient && (
          <>
            <span>Winner: {spinResult}</span>
            <WheelComponent
              segments={segments}
              segColors={segColors}
              winningSegment="Test 1"
              onFinished={(winner) => onFinished(winner)}
              primaryColor="black"
              contrastColor="white"
              buttonText="Spin"
              isOnlyOnce={false}
              size={290}
              upDuration={300}
              downDuration={1000}
              randomWinningSegment={true}
            />
          </>
        )}
      </Container>
    </>
  );
}

export default WarzoneDropSpot;
