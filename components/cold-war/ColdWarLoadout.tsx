import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
//Helpers
import { implodeObject } from "@/helpers/implodeObject";
import { fetchWeapon } from "@/helpers/fetchWeapon";
import { fetchStreaks } from "@/helpers/fetchStreaks";
import { fetchAttachments } from "@/helpers/fetchAttachments";
import { fetchEquipment } from "@/helpers/fetchEquipment";
import { fetchClassName } from "@/helpers/fetchClassName";
import { fetchWildcard } from "@/helpers/fetchWildcard";
//Ops 3
import { fetchPerk } from "@/helpers/generator/cold-war/fetchPerk";
//Utils
import { sendEvent } from "@/utils/gtag";

function ColdWarLoadout() {
  const [containerClass, setContainerClass] = useState("hidden");
  const [data, setData] = useState({
    randClassName: "",
    perks: {
      perk1: "",
      perk2: "",
      perk3: "",
      perk1Greed: "",
      perk2Greed: "",
      perk3Greed: "",
    },
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
      field_upgrade: { name: "", type: "" },
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
        </Row>
        <hr />
        <Row className="justify-content-md-center">
          <Col sm className="text-center">
            <span className="fw-bolder fs-5">Perk 1:</span> <br />
            <span className="text-muted fs-6">
              {perks.perk1 ? perks.perk1 : "None"}
              {perks.perk1Greed ? (
                <>
                  <br />
                  {perks.perk1Greed}
                </>
              ) : null}
            </span>
          </Col>
          <Col sm className="text-center">
            <span className="fw-bolder fs-5">Perk 2:</span> <br />
            <span className="text-muted fs-6">
              {perks.perk2 ? perks.perk2 : "None"}
              {perks.perk2Greed ? (
                <>
                  <br />
                  {perks.perk2Greed}
                </>
              ) : null}
            </span>
          </Col>
          <Col sm className="text-center">
            <span className="fw-bolder fs-5">Perk 3:</span> <br />
            <span className="text-muted fs-6">
              {perks.perk3 ? perks.perk3 : "None"}
              {perks.perk3Greed ? (
                <>
                  <br />
                  {perks.perk3Greed}
                </>
              ) : null}
            </span>
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
        </Row>
        <hr />
        <Row className="mb-5">
          <Col sm className="text-center">
            <span className="fw-bolder fs-5">Wildcard:</span> <br />
            <span className="text-muted fs-6">{wildcard.name}</span>
          </Col>
          <Col sm className="text-center">
            <span className="fw-bolder fs-5">Field Upgrade:</span> <br />
            <span className="text-muted fs-6">
              {equipment.field_upgrade.name}
            </span>
          </Col>
          <Col sm className="text-center">
            <span className="fw-bolder fs-5">Streaks:</span> <br />
            <span className="text-muted fs-6">{streaks}</span>
          </Col>
        </Row>
        <Row id="button-row">
          <Col className="text-center">
            <Button variant="danger" href="#" onClick={handleClick}>
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
    button_id: "coldWar_fetchLoadoutData",
    label: "ColdWar",
    category: "COD_Loadouts",
  });

  try {
    const game = "cold-war";
    const randClassName = fetchClassName();
    const wildcard = fetchWildcard(game);
    wildcard.name = "Law Breaker";
    const isGreed = wildcard.name === "Perk Greed";
    const isLawBreaker = wildcard.name === "Law Breaker";
    const primAttachCount = wildcard.name === "Gunfighter" ? 8 : 5;
    let perk1 = "";
    let perk2 = "";
    let perk3 = "";

    if (isLawBreaker) {
      // Check if a slot was found
      perk1 = fetchPerk("all");
      perk2 = fetchPerk("all", perk1);
      perk3 = fetchPerk("all", [perk1, perk2]);
    } else {
      perk1 = fetchPerk("perk1");
      perk2 = fetchPerk("perk2");
      perk3 = fetchPerk("perk3");
    }

    const initialPerks = {
      perk1: perk1,
      perk2: perk2,
      perk3: perk3,
    };

    const perkGreed = {
      perk1Greed: isGreed ? fetchPerk("perk1", initialPerks.perk1) : "",
      perk2Greed: isGreed ? fetchPerk("perk2", initialPerks.perk2) : "",
      perk3Greed: isGreed ? fetchPerk("perk3", initialPerks.perk3) : "",
    };

    const perks = { ...initialPerks, ...perkGreed };
    const streaks = fetchStreaks(game);
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
    //Law Breaker Weapons
    if (isLawBreaker) {
      weapons.primary.weapon = fetchWeapon("all", game);

      weapons.secondary.weapon = fetchWeapon(
        "all",
        game,
        weapons.primary.weapon.name
      );
    }

    //Get Primary Attachments
    if (!weapons.primary.weapon?.no_attach) {
      weapons.primary.attachments = implodeObject(
        fetchAttachments(weapons.primary.weapon, primAttachCount)
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
      field_upgrade: fetchEquipment("field_upgrade", game),
    };
    //Danger Close Check

    equipment.tactical.name += wildcard.name == "Danger Close" ? " x2" : "";
    equipment.lethal.name += wildcard.name == "Danger Close" ? " x2" : "";

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

export default ColdWarLoadout;
