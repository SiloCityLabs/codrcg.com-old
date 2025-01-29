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
//World War Two
import { fetchPerk } from "@/helpers/generator/world-war-two/fetchPerk";
//Utils
import { sendEvent } from "@/utils/gtag";

function WorldWarTwoLoadout() {
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
    },
    division: "",
  });

  useEffect(() => {
    fetchLoadoutData(setData, setContainerClass);
  }, []);

  const handleClick = async () => {
    fetchLoadoutData(setData, setContainerClass);
  };

  const { randClassName, perks, streaks, weapons, equipment, division } = data;

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
            <span className="text-muted fs-6">{equipment.lethal.name}</span>
          </Col>
        </Row>
        <hr />
        <Row className="mb-5">
          <Col sm className="text-center">
            <span className="fw-bolder fs-5">Division:</span> <br />
            <span className="text-muted fs-6">{division}</span>
          </Col>
          <Col sm className="text-center">
            <span className="fw-bolder fs-5">Streaks:</span> <br />
            <span className="text-muted fs-6">{streaks}</span>
          </Col>
        </Row>
        <Row id="button-row">
          <Col className="text-center">
            <Button variant="ww2" href="#" onClick={handleClick}>
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
    button_id: "ww2_fetchLoadoutData",
    label: "WorldWarTwo",
    category: "COD_Loadouts",
  });

  try {
    const game = "world-war-two";
    const randClassName = fetchClassName();
    const perks = [];
    const all = fetchPerk("all");
    const division = fetchPerk("division");
    const basic = fetchPerk("basic-training");
    const streaks = fetchStreaks(game);
    let primAttactCount = division === "Infantry" ? 4 : 3;
    let secondaryAttactCount = division === "Infantry" ? 2 : 1;

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

    if (division === "Cavalry") {
      primAttactCount = 0;
      secondaryAttactCount = 0;

      //Cavalry
      weapons.primary.weapon = {
        name: "Cavalry Shield",
        type: "Shield",
        game: "world-war-two",
        no_attach: true,
      };

      //Secondary can be all attachments
      weapons.secondary.weapon = fetchWeapon("all", game);
      (weapons.secondary.weapon ?? {}).no_attach = true;
    }

    //Get Primary Attachments
    if (!weapons.primary.weapon?.no_attach) {
      weapons.primary.attachments = implodeObject(
        fetchAttachments(weapons.primary.weapon, primAttactCount)
      );
    }
    //Check for overkill
    // if (perks.includes("Overkill")) {
    //   weapons.secondary.weapon = fetchWeapon(
    //     "primary",
    //     game,
    //     weapons.primary.weapon.name
    //   );
    // }

    //Verify if secondary weapon has attachments
    if (!weapons.secondary.weapon?.no_attach) {
      weapons.secondary.attachments = implodeObject(
        fetchAttachments(weapons.secondary.weapon, secondaryAttactCount)
      );
    }

    let equipment = {
      tactical: fetchEquipment("tactical", game),
      lethal: fetchEquipment("lethal", game),
    };

    if (division === "Commando") {
      equipment = {
        tactical: {
          name: "Paratrooper Insert",
          type: "Special",
          game: "world-war-two",
        },
        lethal: fetchEquipment("lethal_tactical", game),
      };
    }

    setData({
      randClassName,
      perks,
      streaks,
      weapons,
      equipment,
      division,
    });
    setContainerClass("");
  } catch (error: any) {
    console.error(error.message); // Handle errors centrally
  }
}

export default WorldWarTwoLoadout;
