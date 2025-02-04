import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
//Helpers
import { implodeObject } from "@/helpers/implodeObject";
import { fetchWeapon } from "@/helpers/fetch/fetchWeapon";
import { fetchStreaks } from "@/helpers/fetch/fetchStreaks";
import { fetchEquipment } from "@/helpers/fetch/fetchEquipment";
import { fetchClassName } from "@/helpers/fetch/fetchClassName";
import { fetchSpecialist } from "@/helpers/fetch/fetchSpecialist";
//Ops 3
import { fetchPerk } from "@/helpers/generator/infinite-warfare/fetchPerk";
import { fetchAttachments } from "@/helpers/generator/infinite-warfare/fetchAttachments";
import { getLoadoutFrame } from "@/helpers/generator/infinite-warfare/frame/getLoadoutFrame";
//Types
import { LoadoutFrame } from "@/types/BlackOps3";
//Utils
import { sendEvent } from "@/utils/gtag";

const defaultWeapon = { name: "", type: "", game: "", no_attach: false };

function InfiniteWarfareLoadout() {
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
      tactical: "",
      lethal: "",
    },
    wildcards: "",
    specialist: "",
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
            <span className="fw-bolder fs-5">Lethal:</span> <br />
            <span className="text-muted fs-6">
              {equipment.lethal ? equipment.lethal : "None"}
            </span>
          </Col>
          <Col sm className="text-center mb-3 mb-md-0">
            <span className="fw-bolder fs-5">Tactical:</span> <br />
            <span className="text-muted fs-6">
              {equipment.tactical ? equipment.tactical : "None"}
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
              {specialist ? specialist : "None"}
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
            <Button variant="infinite-warfare" href="#" onClick={handleClick}>
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
    button_id: "iw_fetchLoadoutData",
    label: "InfiniteWarfare",
    category: "COD_Loadouts",
  });
  //infinite

  try {
    const loadoutFrame: LoadoutFrame = getLoadoutFrame();
    const game = "infinite-warfare";
    const randClassName = fetchClassName();
    const secondaryNeedsAttach =
      loadoutFrame.secondary_optic || loadoutFrame.secondary_attach > 0
        ? true
        : false;

    const initialPerks = {
      perk1: loadoutFrame.perk1 ? fetchPerk("perk1") : "",
      perk2: loadoutFrame.perk2 ? fetchPerk("perk2") : "",
      perk3: loadoutFrame.perk3 ? fetchPerk("perk3") : "",
    };

    const perkGreed = {
      perk1Greed: loadoutFrame.perk1Greed
        ? fetchPerk("perk1", initialPerks.perk1)
        : "",
      perk2Greed: loadoutFrame.perk2Greed
        ? fetchPerk("perk2", initialPerks.perk2)
        : "",
      perk3Greed: loadoutFrame.perk3Greed
        ? fetchPerk("perk3", initialPerks.perk3)
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
      tactical:
        loadoutFrame.tactical > 0 ? fetchEquipment("tactical", game).name : "",
      lethal: loadoutFrame.lethal ? fetchEquipment("lethal", game).name : "",
    };
    //Check for x2 tacticals
    equipment.tactical += loadoutFrame.tactical == 2 ? " x2" : "";
    //Check for danger close
    equipment.lethal += loadoutFrame.dangerClose ? " x2" : "";

    const wildcards = loadoutFrame?.wildcards.join(", ");
    const specialist = fetchSpecialist(game).name;

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
    console.error(error); // Handle errors centrally
  }
}

export default InfiniteWarfareLoadout;
