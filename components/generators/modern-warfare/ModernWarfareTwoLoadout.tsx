import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
//Helpers
import { implodeObject } from "@/helpers/implodeObject";
import { fetchWeapon } from "@/helpers/fetch/fetchWeapon";
import { fetchStreaks } from "@/helpers/fetch/fetchStreaks";
import { fetchAttachments } from "@/helpers/fetch/fetchAttachments";
import { fetchEquipment } from "@/helpers/fetch/fetchEquipment";
import { fetchClassName } from "@/helpers/fetch/fetchClassName";
//MW2 Specific
import { fetchPerks } from "@/helpers/generator/modern-warfare/two/fetchPerks";
//Utils
import { sendEvent } from "@/utils/gtag";

function ModernWarfareTwoLoadout() {
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
    },
    equipment: {
      tactical: { name: "", type: "" },
      lethal: { name: "", type: "" },
      fieldUpgrade: { name: "", type: "" },
      fieldUpgrade2: { name: "", type: "" },
    },
  });

  useEffect(() => {
    fetchLoadoutData(setData, setContainerClass);
  }, []);

  const handleClick = async () => {
    fetchLoadoutData(setData, setContainerClass);
  };

  const { randClassName, perks, streaks, weapons, equipment } = data;

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
        </Row>
        <hr />
        <Row className="justify-content-md-center">
          <Col sm className="text-center mb-3 mb-md-0">
            <span className="fw-bolder fs-5">Tactical:</span> <br />
            <span className="text-muted fs-6">{equipment.tactical.name}</span>
          </Col>
          <Col sm className="text-center mb-3 mb-md-0">
            <span className="fw-bolder fs-5">Lethal:</span> <br />
            <span className="text-muted fs-6">
              {equipment.lethal.name ? equipment.lethal.name : "None"}
            </span>
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
              {equipment.fieldUpgrade.name
                ? equipment.fieldUpgrade.name
                : "None"}
            </span>
          </Col>
          <Col sm className="text-center mb-3 mb-md-0">
            <span className="fw-bolder fs-5">Field Upgrade 2:</span> <br />
            <span className="text-muted fs-6">
              {equipment.fieldUpgrade2.name
                ? equipment.fieldUpgrade2.name
                : "None"}
            </span>
          </Col>
          <Col sm className="text-center">
            <span className="fw-bolder fs-5">Streaks:</span> <br />
            <span className="text-muted fs-6">{streaks}</span>
          </Col>
        </Row>
        <Row id="button-row">
          <Col className="text-center">
            <Button variant="mw2" href="#" onClick={handleClick}>
              Generate Loadout
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

async function fetchLoadoutData(setData, setContainerClass) {
  sendEvent("button_click", {
    button_id: "mw2_fetchLoadoutData",
    label: "ModernWarfareTwo",
    category: "COD_Loadouts",
  });

  try {
    const game = "modern-warfare-two";
    const hasFieldUpgrade2 = Math.random() < 0.35;
    const randClassName = fetchClassName();
    const streaks = fetchStreaks(game);
    let equipment = {
      tactical: fetchEquipment("tactical", game),
      lethal: fetchEquipment("lethal", game),
      fieldUpgrade: fetchEquipment("field_upgrade", game),
      fieldUpgrade2: { name: "", type: "" },
    };

    if (hasFieldUpgrade2) {
      //Loop to make sure we don't get the same field upgrade
      while (true) {
        equipment.fieldUpgrade2 = fetchEquipment("field_upgrade", game);

        if (equipment.fieldUpgrade.name !== equipment.fieldUpgrade2.name) {
          break;
        }
      }
    }

    const perks = fetchPerks();

    let weapons = {
      primary: {
        weapon: fetchWeapon("primary", game),
        attachments: "",
      },
      secondary: {
        weapon: fetchWeapon("secondary", game),
        attachments: "",
      },
    };

    //Check for overkill
    if (perks.includes("Overkill")) {
      weapons.secondary.weapon = fetchWeapon(
        "primary",
        game,
        weapons.primary.weapon.name
      );
    }

    weapons.primary.attachments = implodeObject(
      fetchAttachments(weapons.primary.weapon)
    );

    //Verify if secondary weapon has attachments
    if (!weapons.secondary.weapon?.no_attach) {
      weapons.secondary.attachments = implodeObject(
        fetchAttachments(weapons.secondary.weapon)
      );
    }

    setData({
      randClassName,
      perks,
      streaks,
      weapons,
      equipment,
    });
    setContainerClass("");
  } catch (error: any) {
    console.error(error); // Handle errors centrally
    console.error(error.message); // Handle errors centrally
  }
}

export default ModernWarfareTwoLoadout;
