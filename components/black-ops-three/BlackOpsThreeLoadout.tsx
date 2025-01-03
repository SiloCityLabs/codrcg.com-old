import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
//Helpers
import { implodeObject } from "@/helpers/implodeObject";
import { fetchWeapon } from "@/helpers/fetchWeapon";
import { fetchStreaks } from "@/helpers/fetchStreaks";
import { fetchEquipment } from "@/helpers/fetchEquipment";
import { fetchClassName } from "@/helpers/fetchClassName";
import { fetchPerk } from "@/helpers/generator/black-ops-three/fetchPerk";
import { fetchAttachments } from "@/helpers/generator/black-ops-three/fetchAttachments";
//Styles
import "@/public/styles/components/Loadout.css";

const defaultWeapon = { name: "", type: "", game: "", no_attach: false };

function BlackOpsThreeLoadout() {
  const [containerClass, setContainerClass] = useState("hidden");
  const [data, setData] = useState({
    randClassName: "",
    perks: {
      perk1: "",
      perk2: "",
      perk3: "",
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
      tactical: "",
      lethal: "",
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
            <span className="fw-bolder fs-5">Tactical:</span> <br />
            <span className="text-muted fs-6">
              {equipment.tactical ? equipment.tactical : "None"}
            </span>
          </Col>
          <Col sm className="text-center mb-3 mb-md-0">
            <span className="fw-bolder fs-5">Lethal:</span> <br />
            <span className="text-muted fs-6">
              {equipment.lethal ? equipment.lethal : "None"}
            </span>
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-md-center">
          <Col sm className="text-center">
            <span className="fw-bolder fs-5">Perk 1:</span> <br />
            <span className="text-muted fs-6">
              {perks.perk1 ? perks.perk1 : "None"}
            </span>
          </Col>
          <Col sm className="text-center">
            <span className="fw-bolder fs-5">Perk 2:</span> <br />
            <span className="text-muted fs-6">
              {perks.perk2 ? perks.perk2 : "None"}
            </span>
          </Col>
          <Col sm className="text-center">
            <span className="fw-bolder fs-5">Perk 3:</span> <br />
            <span className="text-muted fs-6">
              {perks.perk3 ? perks.perk3 : "None"}
            </span>
          </Col>
        </Row>
        <hr />
        <Row className="mb-5">
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

function getLoadoutFrame() {
  //TODO: Randomize this. Always use 10 points
  return {
    primary: true,
    primary_optic: true,
    primary_attach: 2,
    secondary: true,
    secondary_optic: false,
    secondary_attach: 0,
    tactical: 1, //0-2
    lethal: true,
    perk1: true,
    perk2: true,
    perk3: true,
  };
}

async function fetchLoadoutData(setData, setContainerClass) {
  try {
    const loadoutFrame = getLoadoutFrame();
    const game = "black-ops-three";
    const randClassName = fetchClassName();

    const perks = {
      perk1: loadoutFrame.perk1 ? fetchPerk("perk1") : "",
      perk2: loadoutFrame.perk2 ? fetchPerk("perk2") : "",
      perk3: loadoutFrame.perk3 ? fetchPerk("perk3") : "",
    };
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
          ? fetchWeapon("secondary", game)
          : defaultWeapon,
        optic: "",
        attachments: "",
      },
    };

    if (loadoutFrame.primary_optic) {
      weapons.primary.optic = fetchAttachments(
        weapons.primary.weapon,
        "optic"
      )[0];
    }

    //Get Primary Attachments
    if (!weapons.primary.weapon?.no_attach && loadoutFrame.primary_attach > 0) {
      weapons.primary.attachments = implodeObject(
        fetchAttachments(
          weapons.primary.weapon,
          "attachments",
          loadoutFrame.primary_attach
        )
      );
    }
    //Check for overkill
    // if (wildcard.name === "Overkill") {
    //   weapons.secondary.weapon = fetchWeapon(
    //     "primary",
    //     game,
    //     weapons.primary.weapon.name
    //   );
    // }

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
      tactical:
        loadoutFrame.tactical > 0 ? fetchEquipment("tactical", game) : "",
      lethal: loadoutFrame.lethal ? fetchEquipment("lethal", game) : "",
    };

    setData({
      randClassName,
      perks,
      streaks,
      weapons,
      equipment,
    });
    setContainerClass("");
  } catch (error: any) {
    console.error(error.message); // Handle errors centrally
  }
}

export default BlackOpsThreeLoadout;
