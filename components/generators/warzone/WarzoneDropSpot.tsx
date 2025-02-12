import { useEffect, useState } from "react";
//Components
import { Container, Row, Col, Button, Form, Spinner } from "react-bootstrap";
import WheelComponent from "react-wheel-of-prizes-react19";
import CustomModal from "@/components/bootstrap/CustomModal";
import { LoadingLetters } from "@/components/LoadingLetters";
//Helpers
import { setLocalStorage, getLocalStorage } from "@/helpers/localStorage";
//Types
import { WarzoneDropSpotSettings } from "@/types/Generator";
//Utils
import { sendEvent } from "@/utils/gtag";
//Json
import area99Spots from "@/json/warzone/drop_spots/area99.json";
import rebirthIslandSpots from "@/json/warzone/drop_spots/rebirth_island.json";
import urzikstanSpots from "@/json/warzone/drop_spots/urzikstan.json";

const defaultSettings: WarzoneDropSpotSettings = {
  warzoneMap: "urzikstan",
};

const mapInfo = {
  urzikstan: {
    name: "Urzikstan",
    dropSpots: urzikstanSpots,
  },
  area99: {
    name: "Area 99",
    dropSpots: area99Spots,
  },
  rebirth_island: {
    name: "Rebirth Island",
    dropSpots: rebirthIslandSpots,
  },
};

function WarzoneDropSpot() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState("????");
  //Settings
  const [settings, setSettings] =
    useState<WarzoneDropSpotSettings>(defaultSettings);
  const [warzoneMap, setWarzoneMap] = useState(settings.warzoneMap);
  const [showModal, setShowModal] = useState(false);
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
  const onFinished = (winner: string) => {
    setSpinResult("");
    setIsSpinning(true);
    sendEvent("button_click", {
      button_id: "warzoneDropSpot_rollSpot",
      label: "WarzoneDropSpot",
      category: "COD_Loadouts",
    });

    setTimeout(() => {
      setSpinResult(winner);
      setIsSpinning(false);
    }, 500);
  };

  useEffect(() => {
    const storedSettings =
      getLocalStorage("warzoneDropSpotSettings") ?? settings;
    const completeSettings = { ...defaultSettings, ...storedSettings };

    setSettings(completeSettings);
    setWarzoneMap(completeSettings.warzoneMap);

    setIsLoading(true);
    // setIsSpinning(true);
  }, []);

  const handleClick = async () => {
    setSpinResult("");
    setIsSpinning(true);
    sendEvent("button_click", {
      button_id: "warzoneDropSpot_rollSpot",
      label: "WarzoneDropSpot",
      category: "COD_Loadouts",
    });


    setTimeout(() => {
      setSpinResult(
        mapInfo[warzoneMap].dropSpots[
        Math.floor(Math.random() * mapInfo[warzoneMap].dropSpots.length)
        ]
      );
      setIsSpinning(false);
    }, 1000);
  };

  const handleMapChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setWarzoneMap(event.target.value);
    setSettings({
      ...settings,
      warzoneMap: event.target.value,
    });
  };

  //Settings
  const handleModal = () => setShowModal(!showModal);
  const handleSave = () => {
    setLocalStorage("warzoneDropSpotSettings", settings);
    handleModal();
  };

  return (
    <>
      <Container
        id="where-we-dropping"
        className={`shadow-lg p-3 bg-body rounded`}
      >
        <Row className="justify-content-md-center">
          {isLoading && (
            <>
              <Row className="mb-3">
                <Col sm className="text-center mb-4 mb-md-0">
                  <span className="fw-bolder fs-5">Map:</span> <br />
                  <span className="text-muted fs-6">
                    {mapInfo[warzoneMap].name}
                  </span>
                </Col>
                <Col sm className="text-center">
                  <span className="fw-bolder fs-5">Winner:</span> <br />
                  <span className="text-muted fs-6">
                    {!isSpinning ? (
                      <span className="text-muted fs-6">
                        <LoadingLetters
                          text={spinResult}
                          loadingDuration={5000}
                          interval={100}
                          className="loading-text"
                        />
                      </span>
                    ) : (
                      <Spinner animation="border" />
                    )}
                  </span>
                </Col>
              </Row>
              {Object.keys(mapInfo).map((mapKey) => (
                <Col
                  key={mapKey}
                  lg={12}
                  className="d-flex justify-content-center d-none d-md-flex"
                >
                  {mapKey === warzoneMap && ( // Conditionally render based on mapKey
                    <WheelComponent
                      segments={mapInfo[mapKey].dropSpots}
                      segColors={segColors}
                      winningSegment={mapKey}
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
                  )}
                </Col>
              ))}
              <Col xs md="8" lg="6" className="text-center mt-5 mt-md-0">
                <div className="d-flex justify-content-center">
                  <Button
                    variant="success"
                    onClick={handleModal}
                    className="w-50 me-2"
                  >
                    Settings
                  </Button>
                  <Button
                    variant="success"
                    className="w-50 me-2 d-block d-md-none"
                    disabled={isSpinning}
                    onClick={isSpinning ? undefined : handleClick}
                  >
                    {isSpinning ? 'Choosing Spot...' : 'Randomize Spot'}
                  </Button>
                </div>
              </Col>

              <CustomModal
                variant="success"
                show={showModal}
                onClose={handleModal}
                onSave={handleSave}
                title="Settings"
              >
                <Row>
                  <Col>
                    <Form.Label htmlFor="warzoneMap">Warzone Map:</Form.Label>
                    <Form.Select
                      id="warzoneMap"
                      onChange={handleMapChange}
                      value={warzoneMap}
                    >
                      {Object.keys(mapInfo).map((mapKey) => (
                        <option key={mapKey} value={mapKey}>
                          {mapInfo[mapKey].name}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>
              </CustomModal>
            </>
          )}
        </Row>
      </Container>
    </>
  );
}

export default WarzoneDropSpot;
