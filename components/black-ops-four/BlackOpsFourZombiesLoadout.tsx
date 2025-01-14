import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
//Helpers
import { implodeObject } from "@/helpers/implodeObject";
import { fetchWeapon } from "@/helpers/fetchWeapon";
import { fetchEquipment } from "@/helpers/fetchEquipment";
import { fetchZombiesMap } from "@/helpers/fetchZombiesMap";
import { fetchZombiesGobblegum } from "@/helpers/fetchZombiesGobblegum";
import { fetchClassName } from "@/helpers/fetchClassName";
import { setLocalStorage, getLocalStorage } from "@/helpers/localStorage";
//Types
import { Bo4ZombiesSettings } from "@/types/Generator";
//Components
import CustomModal from "@/components/bootstrap/CustomModal";
//Utils
import { sendEvent } from "@/utils/gtag";

const defaultSettings: Bo4ZombiesSettings = {
  rollMap: true,
  rollElixers: true,
  rollTalisman: true,
};

function BlackOpsFourZombiesLoadout() {
  const [isLoading, setIsLoading] = useState(true);
  const [containerClass, setContainerClass] = useState("hidden");
  //Settings
  const [settings, setSettings] = useState<Bo4ZombiesSettings>(defaultSettings);
  const [rollMap, setRollMap] = useState(settings.rollMap);
  const [rollElixers, setRollElixer] = useState(settings.rollElixers);
  const [rollTalisman, setRollTalisman] = useState(settings.rollTalisman);
  const [showModal, setShowModal] = useState(false);

  //Data
  const [data, setData] = useState({
    randClassName: "",
    story: "",
    weapons: {
      special: { name: "", type: "", game: "", no_attach: false },
      starting: { name: "", type: "", game: "", no_attach: false },
    },
    equipment: "",
    elixers: "",
    talisman: "",
    zombieMap: "",
  });

  useEffect(() => {
    const storedSettings = getLocalStorage("bo4ZombiesSettings") ?? settings;
    const completeSettings = { ...defaultSettings, ...storedSettings };

    setSettings(completeSettings);
    setRollMap(completeSettings.rollMap);
    setRollElixer(completeSettings.rollElixers);
    setRollTalisman(completeSettings.rollTalisman);

    fetchLoadoutData(setData, setContainerClass);

    setIsLoading(false);
  }, []);

  const handleClick = async () => {
    fetchLoadoutData(setData, setContainerClass);
  };

  const handleModal = () => setShowModal(!showModal);
  const handleSave = () => {
    setLocalStorage("bo4ZombiesSettings", settings);
    handleModal();
  };

  const handleRollMapChange = (event) => {
    setRollMap(event.target.checked);
    setSettings({
      ...settings,
      rollMap: event.target.checked,
    });
  };
  const handleRollElixerChange = (event) => {
    setRollElixer(event.target.checked);
    setSettings({
      ...settings,
      rollElixers: event.target.checked,
    });
  };
  const handleRollTalismanChange = (event) => {
    setRollTalisman(event.target.checked);
    setSettings({
      ...settings,
      rollTalisman: event.target.checked,
    });
  };

  const {
    randClassName,
    story,
    weapons,
    equipment,
    elixers,
    talisman,
    zombieMap,
  } = data;

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      <Container
        id="random-class"
        className={`${containerClass} shadow-lg p-3 bg-body rounded`}
      >
        <h3 className="text-center mb-5">&ldquo;{randClassName}&rdquo;</h3>
        <h5 className="text-center mb-5">Story - {story}</h5>
        <Row className="justify-content-md-center mb-4">
          <Col sm className="text-center">
            <span className="fw-bolder fs-5">Special Weapon:</span> <br />
            <span className="text-muted fs-6">{weapons.special.name}</span>
          </Col>
          <Col sm className="text-center">
            <span className="fw-bolder fs-5">Equipment:</span> <br />
            <span className="text-muted fs-6">{equipment}</span>
          </Col>
          <Col sm className="text-center">
            <span className="fw-bolder fs-5">Starting Weapon:</span> <br />
            <span className="text-muted fs-6">{weapons.starting.name}</span>
          </Col>
        </Row>
        {(rollElixers || rollMap || rollTalisman) && <hr />}
        <Row className="justify-content-md-center mb-4">
          {rollTalisman && (
            <Col xs md="4" lg="3" className="text-center">
              <span className="fw-bolder fs-5">Talisman:</span> <br />
              <span className="text-muted fs-6">{talisman}</span>
            </Col>
          )}
          {rollElixers && (
            <Col xs md="4" lg="3" className="text-center">
              <span className="fw-bolder fs-5">Elixers:</span> <br />
              <span className="text-muted fs-6">{elixers}</span>
            </Col>
          )}
          {rollMap && (
            <Col xs md="4" lg="3" className="text-center">
              <span className="fw-bolder fs-5">Map:</span> <br />
              <span className="text-muted fs-6">{zombieMap}</span>
            </Col>
          )}
        </Row>
        <Row className="justify-content-md-center">
          <Col xs md="8" lg="6" className="text-center">
            <div className="d-flex justify-content-center">
              <Button
                variant="black-ops"
                onClick={handleModal}
                className="w-50 me-2"
              >
                Settings
              </Button>
              <Button
                variant="black-ops"
                onClick={handleClick}
                className="w-50 me-2"
              >
                Generate Loadout
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <CustomModal
        variant="black-ops"
        show={showModal}
        onClose={handleModal}
        onSave={handleSave}
        title="Settings"
      >
        <Row>
          <Col>
            <Form.Label htmlFor="rollMap">Roll Map:</Form.Label>
            <Form.Check
              type="switch"
              id="rollMap"
              onChange={handleRollMapChange}
              checked={rollMap}
            />
          </Col>
          <Col>
            <Form.Label htmlFor="rollElixers">Roll Elixers:</Form.Label>
            <Form.Check
              type="switch"
              id="rollElixers"
              onChange={handleRollElixerChange}
              checked={rollElixers}
            />
          </Col>
          <Col>
            <Form.Label htmlFor="rollTalisman">Roll Talisman:</Form.Label>
            <Form.Check
              type="switch"
              id="rollTalisman"
              onChange={handleRollTalismanChange}
              checked={rollTalisman}
            />
          </Col>
        </Row>
      </CustomModal>
    </>
  );
}

async function fetchLoadoutData(setData, setContainerClass) {
  sendEvent("button_click", {
    button_id: "bo4Zombies_fetchLoadoutData",
    label: "BlackOpsFourZombies",
    category: "COD_Loadouts",
  });

  try {
    const game = "black-ops-four-zombies";
    const randClassName = fetchClassName();
    const story_key = fetchZombiesStory();
    const story = story_key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    const weapons = {
      starting: fetchWeapon("all", game),
      special: fetchWeapon("all", `${story_key}-${game}`),
    };

    const equipment = fetchEquipment("lethal", game).name;

    const elixers = fetchZombiesGobblegum(game);
    const talisman = fetchZombiesGobblegum(`${game}-talismans`, 1);
    const zombieMap = fetchZombiesMap("black-ops-six");

    setData({
      randClassName,
      story,
      weapons,
      equipment,
      elixers,
      talisman,
      zombieMap,
    });
    setContainerClass("");
  } catch (error: any) {
    console.error(error.message); // Handle errors centrally
  }
}

function fetchZombiesStory() {
  const stories = ["aether_story", "chaos_story"];

  return stories[Math.floor(Math.random() * stories.length)];
}

export default BlackOpsFourZombiesLoadout;
