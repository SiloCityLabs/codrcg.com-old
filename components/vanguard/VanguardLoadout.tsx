import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
//Helpers
import { implodeObject } from "@/helpers/implodeObject";
import { fetchWeapon } from "@/helpers/fetchWeapon";
import { fetchPerks } from "@/helpers/fetchPerks";
import { fetchStreaks } from "@/helpers/fetchStreaks";
import { fetchAttachments } from "@/helpers/fetchAttachments";
import { fetchEquipment } from "@/helpers/fetchEquipment";
import { fetchWildcard } from "@/helpers/fetchWildcard";
import { fetchClassName } from "@/helpers/fetchClassName";
//Styles
import "@/public/styles/components/Loadout.css";

function VanguardLoadout() {
  const [containerClass, setContainerClass] = useState("hidden");
  const [data, setData] = useState({
    randClassName: "",
    perks: null,
    streaks: null,
    weapons: {
      primary: {
        weapon: { name: "", type: "", game: "", no_attach: false },
        attachments: "",
      },
      secondary: {
        weapon: { name: "", type: "", game: "", no_attach: false },
        attachments: "",
      },
      melee: { name: "", type: "", game: "" },
    },
    equipment: {
      tactical: { name: "", type: "" },
      lethal: { name: "", type: "" },
      fieldUpgrade: { name: "", type: "" },
      fieldUpgrade2: { name: "", type: "" },
    },
    wildcard: { name: "", type: "" },
  });

  useEffect(() => {
    fetchLoadoutData(setData, setContainerClass);
  }, []);

  const handleClick = async () => {
    fetchLoadoutData(setData, setContainerClass);
  };

  const { randClassName, perks, streaks, weapons, equipment, wildcard } = data;

  return (
    <>
      <Container
        id="random-class"
        className={`${containerClass} shadow-lg p-3 bg-body rounded`}
      >
        <h3 className="text-center mb-5">&ldquo;{randClassName}&rdquo;</h3>
        <Row className="justify-content-md-center">
          <Col sm className="text-center mb-3 mb-md-0">
            <span className="fw-bolder fs-5">Primary:</span> <br />
            <span className="text-muted fs-6">
              {weapons.primary.weapon.name}
            </span>
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
          <Col sm className="text-center mb-3 mb-md-0">
            <span className="fw-bolder fs-5">Secondary:</span> <br />
            <span className="text-muted fs-6">
              {weapons.secondary.weapon.name}
            </span>
            <br />
            {weapons.secondary.weapon.no_attach ? (
              <>
                <span className="fw-bolder fs-5">Secondary Attachments: </span>
                <br />
                <span className="text-muted fs-6">No Attachments</span>
              </>
            ) : (
              <>
                <span className="fw-bolder fs-5">Secondary Attachments:</span>
                <br />
                <span className="text-muted fs-6">
                  {weapons.secondary.attachments}
                </span>
              </>
            )}
          </Col>
          <Col sm className="text-center">
            <span className="fw-bolder fs-5">Melee:</span> <br />
            <span className="text-muted fs-6">{weapons.melee.name}</span>
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-md-center">
          <Col sm className="text-center mb-3 mb-md-0">
            <span className="fw-bolder fs-5">Tactical:</span> <br />
            <span className="text-muted fs-6">{equipment.tactical.name}</span>
          </Col>
          <Col sm className="text-center mb-3 mb-md-0">
            <span className="fw-bolder fs-5">Lethal:</span> <br />
            <span className="text-muted fs-6">{equipment.lethal.name}</span>
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
            <span className="text-muted fs-6">
              {equipment.fieldUpgrade.name}
            </span>
            {wildcard.name === "Prepper" && (
              <>
                <br />
                <span className="text-muted fs-6">
                  {" "}
                  {equipment.fieldUpgrade2.name}
                </span>
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
    const randClassName = fetchClassName();
    const wildcard = fetchWildcard(game);
    //Figure out primary attachment count
    const primAttachCount = wildcard.name === "Gunfighter" ? 8 : 5;
    //Figure out if perk greed is done
    const isPerkGreed = wildcard.name === "Perk Greed" ? true : false;
    const isHighRoller = wildcard.name === "High Roller" ? true : false;

    const perks = fetchPerks(game, isPerkGreed);
    const streaks = fetchStreaks(game, isHighRoller);
    let weapons = {
      primary: {
        weapon: fetchWeapon("primary", game),
        attachments: "",
      },
      secondary: {
        weapon: fetchWeapon("secondary", game),
        attachments: "",
      },
      melee: fetchWeapon("melee", game),
    };
    //Get Primary Attachments
    if (!weapons.primary.weapon?.no_attach) {
      weapons.primary.attachments = implodeObject(
        fetchAttachments(weapons.primary.weapon, primAttachCount)
      );
    }
    //Check for overkill
    if (wildcard.name === "Overkill") {
      weapons.secondary.weapon = fetchWeapon(
        "primary",
        game,
        weapons.primary.weapon.name
      );
    }
    //Verify if secondary weapon has attachments
    if (!weapons.secondary.weapon?.no_attach) {
      weapons.secondary.attachments = implodeObject(
        fetchAttachments(weapons.secondary.weapon)
      );
    }
    let equipment = {
      tactical: fetchEquipment("tactical", game),
      lethal: fetchEquipment("lethal", game),
      fieldUpgrade: fetchEquipment("field_upgrade", game),
      fieldUpgrade2: { name: "", type: "" },
    };
    if (wildcard.name === "Prepper") {
      //Loop to make sure we don't get the same field upgrade
      while (true) {
        equipment.fieldUpgrade2 = fetchEquipment("field_upgrade", game);

        if (equipment.fieldUpgrade.name !== equipment.fieldUpgrade2.name) {
          break;
        }
      }
    }

    setData({
      randClassName,
      perks,
      streaks,
      weapons,
      equipment,
      wildcard,
    });
    setContainerClass("");
  } catch (error: any) {
    console.error(error.message); // Handle errors centrally
  }
}

export default VanguardLoadout;
