import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SimpleGeneratorView from "@/components/generators/cod/SimpleGeneratorView";
import PerkGreedGeneratorView from "@/components/generators/cod/PerkGreedGeneratorView";
import CodClassName from "@/components/CodClassName";
//Helpers
import { implodeObject } from "@/helpers/implodeObject";
import { scrollToTop } from "@/helpers/scrollToTop";
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
//json
import defaultData from "@/json/cod/default-generator-info.json";

function ColdWarLoadout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(true);
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    fetchLoadoutData(setData);
    setIsGenerating(false);
    setIsLoading(false);
  }, []);

  const handleClick = async () => {
    setIsGenerating(true);

    setTimeout(() => {
      fetchLoadoutData(setData);
      setIsGenerating(false);
      scrollToTop();
    }, 1000);
  };

  const { randClassName, perkObj, streaks, weapons, equipment, wildcard } =
    data;

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      <Container id="random-class" className="shadow-lg p-3 bg-body rounded">
        <CodClassName isGenerating={isGenerating} value={randClassName} />
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
              perk={perkObj.perk1}
              perkGreed={perkObj.perk1Greed}
            />
          </Col>
          <Col sm className="text-center">
            <PerkGreedGeneratorView
              isGenerating={isGenerating}
              title="Perk 2"
              perk={perkObj.perk2}
              perkGreed={perkObj.perk2Greed}
            />
          </Col>
          <Col sm className="text-center">
            <PerkGreedGeneratorView
              isGenerating={isGenerating}
              title="Perk 3"
              perk={perkObj.perk3}
              perkGreed={perkObj.perk3Greed}
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
              value={equipment.fieldUpgrade.name}
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

async function fetchLoadoutData(setData) {
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

    const perkObj = { ...initialPerks, ...perkGreed };
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
      fieldUpgrade: fetchEquipment("field_upgrade", game),
    };
    //Danger Close Check
    equipment.tactical.name += wildcard.name == "Danger Close" ? " x2" : "";
    equipment.lethal.name += wildcard.name == "Danger Close" ? " x2" : "";

    setData({
      randClassName,
      perkObj,
      streaks,
      weapons,
      equipment,
      wildcard,
    });
  } catch (error: any) {
    console.error(error.message); // Handle errors centrally
  }
}

export default ColdWarLoadout;
