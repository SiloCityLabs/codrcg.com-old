import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
//Helpers
import { implodeObject } from "@/helpers/implodeObject";
import { fetchWeapon } from "@/helpers/fetch/fetchWeapon";
import { fetchStreaks } from "@/helpers/fetch/fetchStreaks";
import { fetchEquipment } from "@/helpers/fetch/fetchEquipment";
import { fetchClassName } from "@/helpers/fetch/fetchClassName";
import { fetchSpecialist } from "@/helpers/fetch/fetchSpecialist";
//Ops 4
import { fetchPerk } from "@/helpers/generator/black-ops/four/fetchPerk";
import { fetchAttachments } from "@/helpers/generator/black-ops/four/fetchAttachments";
import { getLoadoutFrame } from "@/helpers/generator/black-ops/four/frame/getLoadoutFrame";
//Types
import { LoadoutFrame } from "@/types/BlackOps4";
//Utils
import { sendEvent } from "@/utils/gtag";

const defaultWeapon = { name: "", type: "", game: "", no_attach: false };

function BlackOpsFourLoadout() {
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
        weapon: defaultWeapon,
        optic: "",
        attachments: "",
      },
      secondary: {
        weapon: defaultWeapon,
        optic: "",
        attachments: "",
      },
    },
    equipment: {
      gear: "",
      equipment: "",
    },
    wildcards: "",
    specialist: { name: "", weapon: "", equipment: "" },
  });

  useEffect(() => {
    fetchLoadoutData(setData, setContainerClass);
  }, []);

  const handleClick = async () => {
    fetchLoadoutData(setData, setContainerClass);
  };

  const {
    randClassName,
    perks,
    streaks,
    weapons,
    equipment,
    wildcards,
    specialist,
  } = data;

  return (
    <>
      <Container
        id="random-class"
        className={`${containerClass} shadow-lg p-3 bg-body rounded`}
      >
        {!isGenerating && (
          <>
            <h3 className="text-center">&ldquo;{randClassName}&rdquo;</h3>
            <hr />
          </>
        )}
        <Row className="justify-content-md-center">
          <Col sm className="text-center mb-3 mb-md-0">
            <span className="fw-bolder fs-5">Primary:</span> <br />
            <span className="text-muted fs-6">
              {weapons.primary.weapon.name
                ? weapons.primary.weapon.name
                : "None"}
            </span>
            <br />
            <span className="fw-bolder fs-5">Primary Optic:</span>
            <br />
            <span className="text-muted fs-6">
              <span className="text-muted fs-6">
                {weapons.primary.optic ? weapons.primary.optic : "None"}
              </span>
            </span>
            <br />
            <span className="fw-bolder fs-5">Primary Attachments:</span>
            <br />
            <span className="text-muted fs-6">
              <span className="text-muted fs-6">
                {weapons.primary.attachments
                  ? weapons.primary.attachments
                  : "None"}
              </span>
            </span>
          </Col>
          <Col sm className="text-center mb-3 mb-md-0">
            <span className="fw-bolder fs-5">Secondary:</span> <br />
            <span className="text-muted fs-6">
              {weapons.secondary.weapon.name
                ? weapons.secondary.weapon.name
                : "None"}
            </span>
            <br />
            <span className="fw-bolder fs-5">Secondary Optic:</span>
            <br />
            <span className="text-muted fs-6">
              <span className="text-muted fs-6">
                {weapons.secondary.optic ? weapons.secondary.optic : "None"}
              </span>
            </span>
            <br />
            <span className="fw-bolder fs-5">Secondary Attachments:</span>
            <br />
            <span className="text-muted fs-6">
              <span className="text-muted fs-6">
                {weapons.secondary.attachments
                  ? weapons.secondary.attachments
                  : "None"}
              </span>
            </span>
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-md-center">
          <Col sm className="text-center mb-3 mb-md-0">
            <span className="fw-bolder fs-5">Gear:</span> <br />
            <span className="text-muted fs-6">
              {equipment.gear ? equipment.gear : "None"}
            </span>
          </Col>
          <Col sm className="text-center mb-3 mb-md-0">
            <span className="fw-bolder fs-5">Equipment:</span> <br />
            <span className="text-muted fs-6">
              {equipment.equipment
                ? equipment.equipment
                : `Special Issue (${specialist?.equipment})`}
            </span>
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
        <Row className="mb-5">
          <Col sm className="text-center">
            <span className="fw-bolder fs-5">Specialist:</span> <br />
            <span className="text-muted fs-6">
              {specialist
                ? `${specialist?.name} - ${specialist?.weapon}`
                : "None"}
            </span>
          </Col>
          <Col sm className="text-center">
            <span className="fw-bolder fs-5">Wildcards:</span> <br />
            <span className="text-muted fs-6">
              {wildcards ? wildcards : "None"}
            </span>
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
  sendEvent("button_click", {
    button_id: "bo4_fetchLoadoutData",
    label: "BlackOpsFour",
    category: "COD_Loadouts",
  });

  try {
    const loadoutFrame: LoadoutFrame = getLoadoutFrame();
    const game = "black-ops-four";
    const randClassName = fetchClassName();
    //For underkill
    const primaryNeedsAttach =
      loadoutFrame.primary_optic || loadoutFrame.primary_attach > 0
        ? true
        : false;
    const secondaryNeedsAttach =
      loadoutFrame.secondary_optic || loadoutFrame.secondary_attach > 0
        ? true
        : false;
    let perkGluttonySlot = "";
    let perk1 = "";
    let perk2 = "";
    let perk3 = "";

    if (loadoutFrame.perk1Gluttony) {
      perkGluttonySlot = "perk1";
    } else if (loadoutFrame.perk2Gluttony) {
      perkGluttonySlot = "perk2";
    } else if (loadoutFrame.perk3Gluttony) {
      perkGluttonySlot = "perk3";
    }

    if (perkGluttonySlot) {
      // Check if a slot was found
      perk1 = fetchPerk(perkGluttonySlot);
      perk2 = fetchPerk(perkGluttonySlot, perk1);
      perk3 = fetchPerk(perkGluttonySlot, [perk1, perk2]);
    } else {
      perk1 = loadoutFrame.perk1 ? fetchPerk("perk1") : "";
      perk2 = loadoutFrame.perk2 ? fetchPerk("perk2") : "";
      perk3 = loadoutFrame.perk3 ? fetchPerk("perk3") : "";
    }

    const initialPerks = {
      perk1: perk1,
      perk2: perk2,
      perk3: perk3,
    };

    const perkGreed = {
      perk1Greed: loadoutFrame.perk1Greed
        ? fetchPerk("perk1", [perk1, perk2, perk3])
        : "",
      perk2Greed: loadoutFrame.perk2Greed
        ? fetchPerk("perk2", [perk1, perk2, perk3])
        : "",
      perk3Greed: loadoutFrame.perk3Greed
        ? fetchPerk("perk3", [perk1, perk2, perk3])
        : "",
    };

    const perks = { ...initialPerks, ...perkGreed };

    const streaks = fetchStreaks(game);
    let weapons = {
      primary: {
        weapon: loadoutFrame.primary
          ? fetchWeapon("primary", game)
          : defaultWeapon,
        optic: "",
        attachments: "",
      },
      secondary: {
        weapon: loadoutFrame.secondary
          ? fetchWeapon("secondary", game, "", secondaryNeedsAttach)
          : defaultWeapon,
        optic: "",
        attachments: "",
      },
    };

    //Check for underkill
    if (loadoutFrame.underkill) {
      weapons.primary.weapon = fetchWeapon(
        "secondary",
        game,
        weapons.secondary.weapon.name,
        primaryNeedsAttach
      );
    }

    if (loadoutFrame.primary_optic) {
      weapons.primary.optic = fetchAttachments(
        weapons.primary.weapon,
        "optic"
      )[0];
    }

    //Get Primary Attachments
    if (
      !weapons.primary.weapon?.no_attach &&
      loadoutFrame?.primary_attach > 0
    ) {
      weapons.primary.attachments = implodeObject(
        fetchAttachments(
          weapons.primary.weapon,
          "attachments",
          loadoutFrame.primary_attach
        )
      );
    }

    //Check for overkill
    if (loadoutFrame.overkill) {
      weapons.secondary.weapon = fetchWeapon(
        "primary",
        game,
        weapons.primary.weapon.name
      );
    }

    if (!weapons.secondary.weapon?.no_attach && loadoutFrame.secondary_optic) {
      weapons.secondary.optic = fetchAttachments(
        weapons.secondary.weapon,
        "optic"
      )[0];
    }

    //Verify if secondary weapon has attachments
    if (
      !weapons.secondary.weapon?.no_attach &&
      loadoutFrame.secondary_attach > 0
    ) {
      weapons.secondary.attachments = implodeObject(
        fetchAttachments(
          weapons.secondary.weapon,
          "attachments",
          loadoutFrame.secondary_attach
        )
      );
    }

    let equipment = {
      gear: loadoutFrame.gear > 0 ? fetchEquipment("tactical", game).name : "",
      equipment: loadoutFrame.equipment
        ? fetchEquipment("lethal", game).name
        : "",
    };

    //Check for x2 gear
    equipment.gear += loadoutFrame.gear == 2 ? " x2" : "";

    const wildcards = loadoutFrame?.wildcards.join(", ");
    const specialist = fetchSpecialist(game);

    setData({
      randClassName,
      perks,
      streaks,
      weapons,
      equipment,
      wildcards,
      specialist,
    });
    setContainerClass("");
  } catch (error: any) {
    console.error(error.message); // Handle errors centrally
  }
}

export default BlackOpsFourLoadout;
