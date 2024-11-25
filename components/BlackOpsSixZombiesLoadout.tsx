import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
//Helpers
import { implodeObject } from "../helpers/implodeObject";
import { fetchWeapon } from "../helpers/fetchWeapon";
import { fetchStreaks } from "../helpers/fetchStreaks";
import { fetchAttachments } from "@/helpers/fetchAttachments";
import { fetchEquipment } from "@/helpers/fetchEquipment";
import { fetchWildcard } from "@/helpers/fetchWildcard";
//Styles
import "../public/styles/components/Loadout.css";

function BlackOpsSixZombiesLoadout() {
  const [containerClass, setContainerClass] = useState("hidden");
  const [data, setData] = useState({
    primaryWeapon: { name: "", type: "", game: "", no_attach: false },
    p_attachments: "",
    meleeWeapon: { name: "", type: "", game: "" },
    tacticalEquip: { name: "", type: "" },
    lethalEquip: { name: "", type: "" },
    fieldUpgrade: { name: "", type: "" },
  });

  useEffect(() => {
    fetchLoadoutData(setData, setContainerClass);
  }, []);

  const handleClick = async () => {
    await fetchLoadoutData(setData, setContainerClass);
  };

  const {
    primaryWeapon,
    p_attachments,
    meleeWeapon,
    tacticalEquip,
    lethalEquip,
    fieldUpgrade,
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
    const game = "black-ops-six-zombies";
    //Primary attachment count
    const primAttachCount = 8;
    const primaryWeapon = await fetchWeapon("all", "black-ops-six");
    //Get Primary Attachments
    const p_attachments = implodeObject(
      await fetchAttachments(primaryWeapon, primAttachCount)
    );
    const meleeWeapon = await fetchWeapon("melee", "black-ops-six");
    const tacticalEquip = await fetchEquipment("tactical", game);
    const lethalEquip = await fetchEquipment("lethal", game);
    const fieldUpgrade = await fetchEquipment("field_upgrade", game);

    setData({
      primaryWeapon,
      p_attachments,
      meleeWeapon,
      tacticalEquip,
      lethalEquip,
      fieldUpgrade,
    });
    setContainerClass("");
  } catch (error: any) {
    console.error(error.message); // Handle errors centrally
  }
}

export default BlackOpsSixZombiesLoadout;
