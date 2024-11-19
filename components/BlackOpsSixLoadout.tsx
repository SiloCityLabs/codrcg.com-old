import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
//Helpers
import { implodeObject } from "../helpers/implodeObject";
import { fetchWeapon } from "../helpers/fetchWeapon";
import { fetchPerks } from "../helpers/fetchPerks";
import { fetchStreaks } from "../helpers/fetchStreaks";
import { fetchAttachments } from "@/helpers/fetchAttachments";
import { fetchEquipment } from "@/helpers/fetchEquipment";
import { fetchWildcard } from "@/helpers/fetchWildcard";
//Styles
import "../public/styles/components/Loadout.css";

function BlackOpsSixLoadout() {
  const [containerClass, setContainerClass] = useState("hidden");
  const [data, setData] = useState({
    perks: null,
    streaks: null,
    primaryWeapon: { name: "", type: "", game: "", no_attach: false },
    p_attachments: "",
    secondaryWeapon: { name: "", type: "", game: "", no_attach: false },
    s_attachments: "",
    meleeWeapon: { name: "", type: "", game: "" },
    tacticalEquip: { name: "", type: "" },
    lethalEquip: { name: "", type: "" },
    fieldUpgrade: { name: "", type: "" },
    wildcard: { name: "", type: "" },
    fieldUpgrade2: { name: "", type: "" },
  });

  useEffect(() => {
    fetchLoadoutData(setData, setContainerClass);
  }, []);

  const handleClick = async () => {
    await fetchLoadoutData(setData, setContainerClass);
  };

  const {
    perks,
    streaks,
    primaryWeapon,
    p_attachments,
    secondaryWeapon,
    s_attachments,
    meleeWeapon,
    tacticalEquip,
    lethalEquip,
    fieldUpgrade,
    wildcard,
    fieldUpgrade2,
  } = data;

  return (
    <>
      <Container
        id="random-class"
        className={`${containerClass} shadow-lg p-3 mb-5 bg-body rounded`}
      >
        <Row id="weapons">
          <Col>
            <span className="label">Primary:</span> {primaryWeapon.name} - (
            {primaryWeapon.game}) - ({primaryWeapon.type})
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
          <Col>
            <span className="label">Secondary:</span> {secondaryWeapon.name} - (
            {secondaryWeapon.game}) - ({secondaryWeapon.type})
            <br />
            {secondaryWeapon.no_attach ? (
              <>
                {" "}
                <span className="label">Secondary Attachments: </span> No
                Attachments{" "}
              </>
            ) : (
              <>
                {" "}
                <span className="label">Secondary Attachments:</span>{" "}
                {s_attachments}{" "}
              </>
            )}
          </Col>
          <Col>
            <span className="label">Melee:</span> {meleeWeapon.name} - (
            {meleeWeapon.game}) - ({meleeWeapon.type})
          </Col>
        </Row>
        <Row id="equipment">
          <Col>
            <span id="tactical">
              <span className="label">Tactical:</span> {tacticalEquip.name}
            </span>
            <span id="lethal">
              <span className="label">Lethal:</span> {lethalEquip.name}
            </span>
          </Col>
          <Col>
            <span className="label">Perks:</span> {perks}
          </Col>
          <Col>
            <span className="label">Field Upgrade:</span> {fieldUpgrade.name}
            {wildcard.name === "Prepper" && (
              <span> &amp; {fieldUpgrade2.name}</span>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <span className="label">Wildcard:</span> {wildcard.name}
          </Col>
          <Col>
            <span className="label">Streaks:</span> {streaks}
          </Col>
          <Col></Col>
        </Row>
        <Row id="button-row">
          <Col className="text-center">
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
  const attachs = {
    attach1: "attach1",
    attach2: "attach2",
    attach3: "attach3",
    attach4: "attach4",
    attach5: "attach5",
  };
  try {
    let secondaryWeapon;
    let s_attachments;
    let fieldUpgrade2;
    const wildcard = await fetchWildcard("black-ops-six");
    //Figure out primary attachment count
    const primAttachCount = wildcard.name === "Gunfighter" ? 8 : 5;
    //Figure out if perk greed is done
    const isPerkGreed = wildcard.name === "Perk Greed" ? true : false;
    const isHighRoller = wildcard.name === "High Roller" ? true : false;

    const perks = await fetchPerks("black-ops-six", isPerkGreed);
    const streaks = await fetchStreaks("black-ops-six", isHighRoller);
    const primaryWeapon = await fetchWeapon("primary", "black-ops-six");
    //Get Primary Attachments
    const p_attachments = implodeObject(
      await fetchAttachments(primaryWeapon, primAttachCount)
    );
    //Check for overkill
    if (wildcard.name === "Overkill") {
      secondaryWeapon = await fetchWeapon("primary", "black-ops-six");
      s_attachments = implodeObject(await fetchAttachments(secondaryWeapon));
    } else {
      secondaryWeapon = await fetchWeapon("secondary", "black-ops-six");
      s_attachments = implodeObject(attachs);
    }
    const meleeWeapon = await fetchWeapon("melee", "black-ops-six");
    const tacticalEquip = await fetchEquipment("tactical", "black-ops-six");
    const lethalEquip = await fetchEquipment("lethal", "black-ops-six");
    const fieldUpgrade = await fetchEquipment("field_upgrade", "black-ops-six");
    if (wildcard.name === "Prepper") {
      //Loop to make sure we don't get the same field upgrade
      while (true) {
        fieldUpgrade2 = await fetchEquipment("field_upgrade", "black-ops-six");

        if (fieldUpgrade.name !== fieldUpgrade2.name) {
          break;
        }
      }
    }

    setData({
      perks,
      streaks,
      primaryWeapon,
      p_attachments,
      secondaryWeapon,
      s_attachments,
      meleeWeapon,
      tacticalEquip,
      lethalEquip,
      fieldUpgrade,
      wildcard,
      fieldUpgrade2,
    });
    setContainerClass("");
  } catch (error: any) {
    console.error(error.message); // Handle errors centrally
  }
}

export default BlackOpsSixLoadout;
