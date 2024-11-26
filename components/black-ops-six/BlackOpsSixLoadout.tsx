import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
//Helpers
import { implodeObject } from "../../helpers/implodeObject";
import { fetchWeapon } from "../../helpers/fetchWeapon";
import { fetchPerks } from "../../helpers/fetchPerks";
import { fetchStreaks } from "../../helpers/fetchStreaks";
import { fetchAttachments } from "@/helpers/fetchAttachments";
import { fetchEquipment } from "@/helpers/fetchEquipment";
import { fetchWildcard } from "@/helpers/fetchWildcard";
//Styles
import "@/public/styles/components/Loadout.css";

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
    fetchLoadoutData(setData, setContainerClass);
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
        className={`${containerClass} shadow-lg p-3 bg-body rounded`}
      >
        <Row className="justify-content-md-center">
          <Col sm className="text-center mb-3 mb-md-0">
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
          <Col sm className="text-center mb-3 mb-md-0">
            <span className="fw-bolder fs-5">Secondary:</span> <br />
            <span className="text-muted fs-6">{secondaryWeapon.name}</span>
            <br />
            {secondaryWeapon.no_attach ? (
              <>
                <span className="fw-bolder fs-5">Secondary Attachments: </span>
                <br />
                <span className="text-muted fs-6">No Attachments</span>
              </>
            ) : (
              <>
                <span className="fw-bolder fs-5">Secondary Attachments:</span>
                <br />
                <span className="text-muted fs-6">{s_attachments}</span>
              </>
            )}
          </Col>
          <Col sm className="text-center">
            <span className="fw-bolder fs-5">Melee:</span> <br />
            <span className="text-muted fs-6">{meleeWeapon.name}</span>
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-md-center">
          <Col sm className="text-center mb-3 mb-md-0">
            <span className="fw-bolder fs-5">Tactical:</span> <br />
            <span className="text-muted fs-6">{tacticalEquip.name}</span>
          </Col>
          <Col sm className="text-center mb-3 mb-md-0">
            <span className="fw-bolder fs-5">Lethal:</span> <br />
            <span className="text-muted fs-6">{lethalEquip.name}</span>
          </Col>
          <Col sm className="text-center">
            <span className="fw-bolder fs-5">Perks:</span> <br />
            <span className="text-muted fs-6">{perks}</span>
          </Col>
        </Row>
        <hr />
        <Row className="mb-5">
          <Col sm className="text-center mb-3 mb-md-0">
            <span className="fw-bolder fs-5">Field Upgrade:</span> <br />
            <span className="text-muted fs-6">{fieldUpgrade.name}</span>
            {wildcard.name === "Prepper" && (
              <>
                <br />
                <span className="text-muted fs-6"> {fieldUpgrade2.name}</span>
              </>
            )}
          </Col>
          <Col sm className="text-center mb-3 mb-md-0">
            <span className="fw-bolder fs-5">Wildcard:</span> <br />
            <span className="text-muted fs-6">{wildcard.name}</span>
          </Col>
          <Col sm className="text-center">
            <span className="fw-bolder fs-5">Streaks:</span> <br />
            <span className="text-muted fs-6">{streaks}</span>
          </Col>
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
  try {
    const game = "black-ops-six";
    let p_attachments;
    let secondaryWeapon;
    let s_attachments;
    let fieldUpgrade2;
    const wildcard = fetchWildcard(game);
    //Figure out primary attachment count
    const primAttachCount = wildcard.name === "Gunfighter" ? 8 : 5;
    //Figure out if perk greed is done
    const isPerkGreed = wildcard.name === "Perk Greed" ? true : false;
    const isHighRoller = wildcard.name === "High Roller" ? true : false;

    const perks = fetchPerks(game, isPerkGreed);
    const streaks = fetchStreaks(game, isHighRoller);
    const primaryWeapon = fetchWeapon("primary", game);
    //Get Primary Attachments
    if (!primaryWeapon.no_attach) {
      p_attachments = implodeObject(
        fetchAttachments(primaryWeapon, primAttachCount)
      );
    }
    //Check for overkill
    if (wildcard.name === "Overkill") {
      secondaryWeapon = fetchWeapon("primary", game, primaryWeapon.name);
    } else {
      secondaryWeapon = fetchWeapon("secondary", game);
    }
    //Verify if secondary weapon has attachments
    if (!secondaryWeapon.no_attach) {
      s_attachments = implodeObject(fetchAttachments(secondaryWeapon));
    }
    const meleeWeapon = fetchWeapon("melee", game);
    const tacticalEquip = fetchEquipment("tactical", game);
    const lethalEquip = fetchEquipment("lethal", game);
    const fieldUpgrade = fetchEquipment("field_upgrade", game);
    if (wildcard.name === "Prepper") {
      //Loop to make sure we don't get the same field upgrade
      while (true) {
        fieldUpgrade2 = fetchEquipment("field_upgrade", game);

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
