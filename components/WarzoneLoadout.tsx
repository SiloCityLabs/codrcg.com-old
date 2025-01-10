import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
//Helpers
import { implodeObject } from "../helpers/implodeObject";
import { fetchWeapon } from "../helpers/fetchWeapon";
import { fetchPerks } from "../helpers/fetchPerks";
import { fetchAttachments } from "@/helpers/fetchAttachments";
import { fetchEquipment } from "@/helpers/fetchEquipment";
import { fetchWildcard } from "@/helpers/fetchWildcard";
import { fetchClassName } from "@/helpers/fetchClassName";
//Utils
import { sendEvent } from "@/utils/gtag";

function WarzoneLoadout() {
  const [containerClass, setContainerClass] = useState("hidden");
  const [data, setData] = useState({
    randClassName: "",
    perks: null,
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
    },
    wildcard: { name: "", type: "" },
  });

  useEffect(() => {
    fetchLoadoutData(setData, setContainerClass);
  }, []);

  const handleClick = async () => {
    await fetchLoadoutData(setData, setContainerClass);
  };

  const { randClassName, perks, weapons, equipment, wildcard } = data;

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
        </Row>
        <hr />
        <Row className="mb-5">
          <Col sm className="text-center mb-3 mb-md-0">
            <span className="fw-bolder fs-5">Perks:</span> <br />
            <span className="text-muted fs-6">{perks}</span>
          </Col>
          <Col sm className="text-center">
            <span className="fw-bolder fs-5">Wildcard:</span> <br />
            <span className="text-muted fs-6">{wildcard.name}</span>
          </Col>
        </Row>
        <Row id="button-row">
          <Col className="text-center">
            <Button variant="success" href="#" onClick={handleClick}>
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
    const game = "warzone";
    const randClassName = fetchClassName();
    const wildcard = fetchWildcard(game);
    //Figure out primary attachment count
    const primAttachCount = wildcard.name === "Gunfighter" ? 8 : 5;

    const perks = fetchPerks(game);
    let weapons = {
      primary: {
        weapon: fetchWeapon("primary"),
        attachments: "",
      },
      secondary: {
        weapon: fetchWeapon("secondary"),
        attachments: "",
      },
      melee: fetchWeapon("melee"),
    };
    //Get Primary Attachments
    //TODO: I think you can only get gunfighter for BO6 Weapons (8 attachments)
    weapons.primary.attachments = implodeObject(
      fetchAttachments(weapons.primary.weapon, primAttachCount)
    );
    //Check for overkill
    if (wildcard.name === "Overkill") {
      weapons.secondary.weapon = fetchWeapon(
        "primary",
        "",
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
    };

    setData({
      randClassName,
      perks,
      weapons,
      equipment,
      wildcard,
    });
    setContainerClass("");
  } catch (error: any) {
    console.error("Error", error); // Handle errors centrally
    console.error(error.message); // Handle errors centrally
  }
}

export default WarzoneLoadout;
