import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SimpleGeneratorView from "@/components/generators/cod/SimpleGeneratorView";
import PerkGreedGeneratorView from "@/components/generators/cod/PerkGreedGeneratorView";
//Helpers
import { implodeObject } from "@/helpers/implodeObject";
import { fetchWeapon } from "@/helpers/fetch/fetchWeapon";
import { fetchStreaks } from "@/helpers/fetch/fetchStreaks";
import { fetchAttachments } from "@/helpers/fetch/fetchAttachments";
import { fetchEquipment } from "@/helpers/fetch/fetchEquipment";
import { fetchClassName } from "@/helpers/fetch/fetchClassName";
import { fetchWildcard } from "@/helpers/fetch/fetchWildcard";
//Cold War
import { fetchPerk } from "@/helpers/generator/black-ops/cold-war/fetchPerk";
//Utils
import { sendEvent } from "@/utils/gtag";

function ColdWarLoadout() {
  const [containerClass, setContainerClass] = useState("hidden");
  const [isGenerating, setIsGenerating] = useState(true);
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
    setIsGenerating(false);
  }, []);

  const handleClick = async () => {
    setIsGenerating(true);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      fetchLoadoutData(setData, setContainerClass);
      setIsGenerating(false);
    }, 1000);
  };

  const { randClassName, perks, streaks, weapons, equipment, wildcard } = data;

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
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Primary"
              value={weapons.primary.weapon.name}
            />
            <br />
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Primary Attachments"
              value={
                weapons.primary.weapon.no_attach
                  ? "No Attachments"
                  : weapons.primary.attachments
              }
            />
          </Col>
          <Col sm className="text-center mb-3 mb-md-0">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Secondary"
              value={weapons.secondary.weapon.name}
            />
            <br />
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Secondary Attachments"
              value={
                weapons.secondary.weapon.no_attach
                  ? "No Attachments"
                  : weapons.secondary.attachments
              }
            />
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-md-center">
          <Col sm className="text-center">
            <PerkGreedGeneratorView
              isGenerating={isGenerating}
              title="Perk 1"
              perk={perks.perk1}
              perkGreed={perks.perk1Greed}
            />
          </Col>
          <Col sm className="text-center">
            <PerkGreedGeneratorView
              isGenerating={isGenerating}
              title="Perk 2"
              perk={perks.perk2}
              perkGreed={perks.perk2Greed}
            />
          </Col>
          <Col sm className="text-center">
            <PerkGreedGeneratorView
              isGenerating={isGenerating}
              title="Perk 3"
              perk={perks.perk3}
              perkGreed={perks.perk3Greed}
            />
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-md-center">
          <Col sm className="text-center mb-3 mb-md-0">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Tactical"
              value={equipment.tactical.name}
            />
          </Col>
          <Col sm className="text-center mb-3 mb-md-0">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Lethal"
              value={equipment.lethal.name}
            />
          </Col>
        </Row>
        <hr />
        <Row className="mb-5">
          <Col sm className="text-center">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Wildcard"
              value={wildcard.name}
            />
          </Col>
          <Col sm className="text-center">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Field Upgrade"
              value={equipment.field_upgrade.name}
            />
          </Col>
          <Col sm className="text-center">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Streaks"
              value={streaks}
            />
          </Col>
        </Row>
        <Row id="button-row">
          <Col className="text-center">
            <Button
              variant="danger"
              disabled={isGenerating}
              onClick={isGenerating ? undefined : handleClick}
            >
              {isGenerating ? "Generating Loadout..." : "Generate Loadout"}
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
