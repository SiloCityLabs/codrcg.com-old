import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
//Helpers
import { implodeObject } from "../../helpers/implodeObject";
import { fetchWeapon } from "../../helpers/fetchWeapon";
import { fetchAttachments } from "@/helpers/fetchAttachments";
import { fetchEquipment } from "@/helpers/fetchEquipment";
import { fetchBO6Gobblegums } from "@/helpers/generator/black-ops-six/fetchBO6Gobblegums";
import { fetchBO6ZombiesMap } from "@/helpers/generator/black-ops-six/fetchBO6ZombiesMap";
//Styles
import "@/public/styles/components/Loadout.css";

function BlackOpsSixZombiesLoadout() {
  const [containerClass, setContainerClass] = useState("hidden");
  const [data, setData] = useState({
    primaryWeapon: { name: "", type: "", game: "", no_attach: false },
    p_attachments: "",
    meleeWeapon: { name: "", type: "", game: "" },
    tacticalEquip: { name: "", type: "" },
    lethalEquip: { name: "", type: "" },
    fieldUpgrade: { name: "", type: "" },
    gobblegum: "",
    zombieMap: "",
  });

  useEffect(() => {
    fetchLoadoutData(setData, setContainerClass);
  }, []);

  const handleClick = async () => {
    fetchLoadoutData(setData, setContainerClass);
  };

  const {
    primaryWeapon,
    p_attachments,
    meleeWeapon,
    tacticalEquip,
    lethalEquip,
    fieldUpgrade,
    gobblegum,
    zombieMap,
  } = data;

  return (
    <>
      <Container
        id="random-class"
        className={`${containerClass} shadow-lg p-3 bg-body rounded`}
      >
        <Row className="justify-content-md-center mb-4">
          <Col xs md="8" lg="6" className="text-center">
            <span className="fw-bolder fs-5">Primary:</span> <br />
            <span className="text-muted fs-6">{primaryWeapon.name}</span>
            <br />
            {primaryWeapon.no_attach ? (
              <>
                <span className="fw-bolder fs-5">Primary Attachments: </span>
                <br />
                <span className="text-muted fs-6">No Attachments</span>
              </>
            ) : (
              <>
                <span className="fw-bolder fs-5">Primary Attachments:</span>
                <br />
                <span className="text-muted fs-6">{p_attachments}</span>
              </>
            )}
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-md-center mb-4">
          <Col xs md="4" lg="3" className="text-center">
            <span className="fw-bolder fs-5">Melee:</span> <br />
            <span className="text-muted fs-6">{meleeWeapon.name}</span>
          </Col>
          <Col xs md="4" lg="3" className="text-center">
            <span className="fw-bolder fs-5">Field Upgrade:</span> <br />
            <span className="text-muted fs-6">{fieldUpgrade.name}</span>
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-md-center mb-4">
          <Col xs md="4" lg="3" className="text-center">
            <span className="fw-bolder fs-5">Tactical:</span> <br />
            <span className="text-muted fs-6">{tacticalEquip.name}</span>
          </Col>
          <Col xs md="4" lg="3" className="text-center">
            <span className="fw-bolder fs-5">Lethal:</span> <br />
            <span className="text-muted fs-6">{lethalEquip.name}</span>
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
            <Button variant="black-ops" href="#" onClick={handleClick}>
              Generate Loadout
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

async function fetchLoadoutData(setData, setContainerClass) {
  try {
    let p_attachments;
    const game = "black-ops-six-zombies";
    //Primary attachment count
    const primAttachCount = 8;
    const primaryWeapon = fetchWeapon("all", "black-ops-six");
    //Get Primary Attachments
    if (!primaryWeapon.no_attach) {
      p_attachments = implodeObject(fetchAttachments(primaryWeapon));
    }
    const meleeWeapon = fetchWeapon("melee", "black-ops-six");
    const tacticalEquip = fetchEquipment("tactical", game);
    const lethalEquip = fetchEquipment("lethal", game);
    const fieldUpgrade = fetchEquipment("field_upgrade", game);
    const gobblegum = fetchBO6Gobblegums();
    const zombieMap = fetchBO6ZombiesMap();

    setData({
      primaryWeapon,
      p_attachments,
      meleeWeapon,
      tacticalEquip,
      lethalEquip,
      fieldUpgrade,
      gobblegum,
      zombieMap,
    });
    setContainerClass("");
  } catch (error: any) {
    console.error(error.message); // Handle errors centrally
  }
}

export default BlackOpsSixZombiesLoadout;
