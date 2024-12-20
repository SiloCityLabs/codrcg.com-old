import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
//Helpers
import { implodeObject } from "@/helpers/implodeObject";
import { fetchWeapon } from "@/helpers/fetchWeapon";
import { fetchAttachments } from "@/helpers/fetchAttachments";
import { fetchEquipment } from "@/helpers/fetchEquipment";
import { fetchBO6Gobblegums } from "@/helpers/generator/black-ops-six/fetchBO6Gobblegums";
import { fetchBO6ZombiesMap } from "@/helpers/generator/black-ops-six/fetchBO6ZombiesMap";
import { fetchBO6AmmoMod } from "@/helpers/generator/black-ops-six/fetchBO6AmmoMod";
import { fetchClassName } from "@/helpers/fetchClassName";
import { setLocalStorage, getLocalStorage } from "@/helpers/localStorage";
//Styles
import "@/public/styles/components/Loadout.css";
//Types
import { ZombiesSettings } from "@/types/Generator";
//Components
import CustomModal from "@/components/bootstrap/CustomModal";
import Form from "react-bootstrap/Form";

const defaultSettings: ZombiesSettings = {
  rollMap: true,
  rollGobblegum: true,
};

function BlackOpsSixZombiesLoadout() {
  const [isLoading, setIsLoading] = useState(true);
  const [containerClass, setContainerClass] = useState("hidden");
  //Settings
  const [settings, setSettings] = useState<ZombiesSettings>(defaultSettings);
  const [rollMap, setRollMap] = useState(settings.rollMap);
  const [rollGobblegum, setRollGobblegum] = useState(settings.rollGobblegum);
  const [showModal, setShowModal] = useState(false);

  //Data
  const [data, setData] = useState({
    randClassName: "",
    weapons: {
      primary: {
        weapon: { name: "", type: "", game: "", no_attach: false },
        attachments: "",
        ammoMod: "",
      },
      melee: { name: "", type: "", game: "" },
    },
    equipment: {
      tactial: { name: "", type: "" },
      lethal: { name: "", type: "" },
      fieldUpgrade: { name: "", type: "" },
    },
    gobblegum: "",
    zombieMap: "",
  });

  useEffect(() => {
    const storedSettings = getLocalStorage("bo6ZombiesSettings") ?? settings;
    const completeSettings = { ...defaultSettings, ...storedSettings };

    setSettings(completeSettings);
    setRollMap(completeSettings.rollMap);
    setRollGobblegum(completeSettings.rollGobblegum);

    fetchLoadoutData(setData, setContainerClass);

    setIsLoading(false);
  }, []);

  const handleClick = async () => {
    fetchLoadoutData(setData, setContainerClass);
  };

  const handleModal = () => setShowModal(!showModal);
  const handleSave = () => {
    setLocalStorage("bo6ZombiesSettings", settings);
    handleModal();
  };

  const handleRollMapChange = (event) => {
    setRollMap(event.target.checked);
    setSettings({
      ...settings,
      rollMap: event.target.checked,
    });
  };
  const handleRollGobblegumChange = (event) => {
    setRollGobblegum(event.target.checked);
    setSettings({
      ...settings,
      rollGobblegum: event.target.checked,
    });
  };

  const { randClassName, weapons, equipment, gobblegum, zombieMap } = data;

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      <Container
        id="random-class"
        className={`${containerClass} shadow-lg p-3 bg-body rounded`}
      >
        <h3 className="text-center mb-4">"{randClassName}"</h3>
        <Row className="justify-content-md-center mb-4">
          <Col xs md="8" lg="6" className="text-center">
            <span className="fw-bolder fs-5">Primary:</span> <br />
            <span className="text-muted fs-6">
              {weapons.primary.weapon.name}
            </span>
            <br />
            <span className="fw-bolder fs-5">Ammo Mod:</span>
            <br />
            <span className="text-muted fs-6">{weapons.primary.ammoMod}</span>
            <br />
            {weapons.primary.weapon.no_attach ? (
              <>
                <span className="fw-bolder fs-5">Primary Attachments: </span>
                <br />
                <span className="text-muted fs-6">No Attachments</span>
              </>
            ) : (
              <>
                <span className="fw-bolder fs-5">Primary Attachments:</span>
                <br />
                <span className="text-muted fs-6">
                  {weapons.primary.attachments}
                </span>
              </>
            )}
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-md-center mb-4">
          <Col xs md="4" lg="3" className="text-center">
            <span className="fw-bolder fs-5">Melee:</span> <br />
            <span className="text-muted fs-6">{weapons.melee.name}</span>
          </Col>
          <Col xs md="4" lg="3" className="text-center">
            <span className="fw-bolder fs-5">Field Upgrade:</span> <br />
            <span className="text-muted fs-6">
              {equipment.fieldUpgrade.name}
            </span>
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-md-center mb-4">
          <Col xs md="4" lg="3" className="text-center">
            <span className="fw-bolder fs-5">Tactical:</span> <br />
            <span className="text-muted fs-6">{equipment.tactial.name}</span>
          </Col>
          <Col xs md="4" lg="3" className="text-center">
            <span className="fw-bolder fs-5">Lethal:</span> <br />
            <span className="text-muted fs-6">{equipment.lethal.name}</span>
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-md-center mb-4">
          <Col xs md="4" lg="3" className="text-center">
            <span className="fw-bolder fs-5">Gobblegum:</span> <br />
            <span className="text-muted fs-6">{gobblegum}</span>
          </Col>
          <Col xs md="4" lg="3" className="text-center">
            <span className="fw-bolder fs-5">Map:</span> <br />
            <span className="text-muted fs-6">{zombieMap}</span>
          </Col>
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
            <Form.Label htmlFor="rollGobblegum">Roll Gobblegum:</Form.Label>
            <Form.Check
              type="switch"
              id="rollGobblegum"
              onChange={handleRollGobblegumChange}
              checked={rollGobblegum}
            />
          </Col>
        </Row>
      </CustomModal>
    </>
  );
}

async function fetchLoadoutData(setData, setContainerClass) {
  try {
    const game = "black-ops-six-zombies";
    const randClassName = fetchClassName();
    const weapons = {
      primary: {
        weapon: fetchWeapon("all", "black-ops-six"),
        attachments: "",
        ammoMod: fetchBO6AmmoMod(),
      },
      melee: fetchWeapon("melee", "black-ops-six"),
    };
    //Get Primary Attachments
    if (!weapons.primary.weapon.no_attach) {
      weapons.primary.attachments = implodeObject(
        fetchAttachments(weapons.primary.weapon, 8)
      );
    }
    const equipment = {
      tactial: fetchEquipment("tactical", game),
      lethal: fetchEquipment("lethal", game),
      fieldUpgrade: fetchEquipment("field_upgrade", game),
    };
    const gobblegum = fetchBO6Gobblegums();
    const zombieMap = fetchBO6ZombiesMap();

    setData({
      randClassName,
      weapons,
      equipment,
      gobblegum,
      zombieMap,
    });
    setContainerClass("");
  } catch (error: any) {
    console.error(error.message); // Handle errors centrally
  }
}

export default BlackOpsSixZombiesLoadout;
