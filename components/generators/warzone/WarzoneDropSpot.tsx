import { useEffect, useState } from "react";
//Components
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import WheelComponent from "react-wheel-of-prizes-react19";
import CustomModal from "@/components/bootstrap/CustomModal";
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
  const [isClient, setIsClient] = useState(false);
  const [spinResult, setSpinResult] = useState("????");
  //Settings
  const [settings, setSettings] =
    useState<WarzoneDropSpotSettings>(defaultSettings);
  const [warzoneMap, setWarzoneMap] = useState(settings.warzoneMap);
  const [dropspots, setDropSpots] = useState(
    mapInfo[settings.warzoneMap].dropSpots
  );
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
    setSpinResult(winner);
  };

  useEffect(() => {
    const storedSettings =
      getLocalStorage("warzoneDropSpotSettings") ?? settings;
    const completeSettings = { ...defaultSettings, ...storedSettings };

    setSettings(completeSettings);
    setWarzoneMap(completeSettings.warzoneMap);
    setDropSpots(mapInfo[completeSettings.warzoneMap].dropSpots);

    setIsClient(true);
  }, []);

  const handleClick = async () => {
    setSpinResult(
      mapInfo[warzoneMap].dropSpots[
        Math.floor(Math.random() * mapInfo[warzoneMap].dropSpots.length)
      ]
    );
  };

  const handleMapChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setWarzoneMap(event.target.value);
    setDropSpots(mapInfo[event.target.value].dropSpots);
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
          {isClient && (
            <>
              <Col lg={12} className="d-flex justify-content-center">
                <span className="fw-bold me-2">Map: </span>
                <span className="me-5">{mapInfo[warzoneMap].name}</span>
                <span className="fw-bold me-2">Winner: </span>
                <span>{spinResult}</span>
              </Col>
              <Col
                lg={12}
                className="d-flex justify-content-center d-none d-md-flex"
              >
                <WheelComponent
                  segments={dropspots}
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
              </Col>
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
                    onClick={handleClick}
                    className="w-50 me-2 d-block d-md-none"
                  >
                    Randomize Map
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
