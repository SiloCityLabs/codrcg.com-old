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
          <Col xs md="8" lg="6">
            <span className="label">Primary:</span> {primaryWeapon.name}
            <br />
            {primaryWeapon.no_attach ? (
              <>
                {" "}
                <span className="label">Primary Attachments: </span> No
                Attachments{" "}
              </>
            ) : (
              <>
                {" "}
                <span className="label">Primary Attachments:</span>{" "}
                {p_attachments}{" "}
              </>
            )}
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-4">
          {/* <Col>
            <Badge bg="dark">Melee:</Badge> {meleeWeapon.name}
          </Col> */}
          <Col xs md="4" lg="3">
            <span className="label">Melee:</span> {meleeWeapon.name}
          </Col>
          <Col xs md="4" lg="3">
            <span className="label">Field Upgrade:</span> {fieldUpgrade.name}
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-4">
          <Col xs md="4" lg="3">
            <span className="label">Tactical:</span> {tacticalEquip.name}
          </Col>
          <Col xs md="4" lg="3">
            <span className="label">Lethal:</span> {lethalEquip.name}
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs md="8" lg="6" className="d-grid gap-2">
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
    //Figure out primary attachment count
    const primAttachCount = 8;

    const primaryWeapon = await fetchWeapon("primary", "black-ops-six");
    //Get Primary Attachments
    const p_attachments = implodeObject(
      await fetchAttachments(primaryWeapon, primAttachCount)
    );
    const meleeWeapon = await fetchWeapon("melee", "black-ops-six");
    const tacticalEquip = await fetchEquipment(
      "tactical",
      "black-ops-six-zombies"
    );
    const lethalEquip = await fetchEquipment("lethal", "black-ops-six-zombies");
    const fieldUpgrade = await fetchEquipment(
      "field_upgrade",
      "black-ops-six-zombies"
    );

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
