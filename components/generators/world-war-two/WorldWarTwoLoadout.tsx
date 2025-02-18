import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SimpleGeneratorView from "@/components/generators/cod/SimpleGeneratorView";
import CodClassName from "@/components/CodClassName";
//Helpers
import { implodeObject } from "@/helpers/implodeObject";
import { scrollToTop } from "@/helpers/scrollToTop";
import { fetchWeapon } from "@/helpers/fetch/fetchWeapon";
import { fetchStreaks } from "@/helpers/fetch/fetchStreaks";
import { fetchAttachments } from "@/helpers/fetch/fetchAttachments";
import { fetchEquipment } from "@/helpers/fetch/fetchEquipment";
import { fetchClassName } from "@/helpers/fetch/fetchClassName";
//World War Two
import { fetchPerk } from "@/helpers/generator/world-war-two/fetchPerk";
//Utils
import { sendEvent } from "@/utils/gtag";
//json
import defaultData from "@/json/cod/default-generator-info.json";

function WorldWarTwoLoadout() {
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

  const { randClassName, streaks, weapons, equipment, division, basic } = data;

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
          <Col sm className="text-center mb-3 mb-md-0">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Tactical"
              value={
                equipment.tactical.name +
                (basic === "Serrated" || basic === "Concussed" ? " x2" : "")
              }
            />
          </Col>
          <Col sm className="text-center mb-3 mb-md-0">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Lethal"
              value={
                equipment.lethal.name +
                (basic === "Saboteur" || basic === "Concussed" ? " x2" : "")
              }
            />
          </Col>
        </Row>
        <hr />
        <Row className="mb-5">
          <Col sm className="text-center">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Division"
              value={division}
            />
          </Col>
          <Col sm className="text-center">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Basic Training"
              value={basic}
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
              variant="ww2"
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
    button_id: "ww2_fetchLoadoutData",
    label: "WorldWarTwo",
    category: "COD_Loadouts",
  });

  try {
    const game = "world-war-two";
    const randClassName = fetchClassName();
    const division = fetchPerk("division");
    let basic = fetchPerk("basic-training");
    const secondaryNeedsAttach = basic === "Shifty" ? true : false;
    const isBlitzkrieg = basic === "Blitzkrieg" ? true : false;
    let streaks = fetchStreaks(game, isBlitzkrieg);
    let primAttactCount = division === "Infantry" ? 4 : 3;
    let secondaryAttactCount = division === "Infantry" ? 2 : 1;

    let weapons = {
      primary: {
        weapon: fetchWeapon("primary", game),
        attachments: "",
      },
      secondary: {
        weapon: fetchWeapon("secondary", game, "", secondaryNeedsAttach),
        attachments: "",
      },
    };

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
    } else if (division === "Cavalry") {
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

    //Check for overkill
    if (basic === "Wanderlust") {
      weapons.primary.weapon = {
        name: "Random Weapon",
        type: "random",
        game: "world-war-two",
        no_attach_info: true,
      };
      primAttactCount = 6;
    } else if (basic === "Duelist") {
      weapons.secondary.weapon = {
        name: "Akimbo Pistols",
        type: "pistol",
        game: "world-war-two",
        no_attach: true,
      };
    } else if (basic === "Rifleman") {
      weapons.secondary.weapon = fetchWeapon(
        "primary",
        game,
        weapons.primary.weapon.name
      );

      (weapons.secondary.weapon ?? {}).no_attach = true;
    } else if (basic === "Serrated") {
      equipment.lethal = {
        name: "Throwing Knives x2",
        type: "Lethal",
        game: "world-war-two",
      };

      weapons.primary.weapon = fetchWeapon(
        "melee",
        game,
        weapons.secondary.weapon.name
      );
    } else if (basic === "Danger Close") {
      equipment.lethal = {
        name: "Frag x3",
        type: "Lethal",
        game: "world-war-two",
      };
    } else if (basic === "Stun X3") {
      equipment.tactical = {
        name: "British N 69 x3",
        type: "Lethal",
        game: "world-war-two",
      };
    } else if (basic === "Shifty") {
      secondaryAttactCount = 3;
    } else if (basic === "Specialist") {
      const special1 = fetchPerk("basic-training");
      const special2 = fetchPerk("basic-training", [special1]);
      const special3 = fetchPerk("basic-training", [special1, special2]);

      streaks = `200: ${special1}, 400: ${special2}, 600: ${special3}, 800: All Perks`;
    }

    //Get Primary Attachments
    if (!weapons.primary.weapon?.no_attach) {
      weapons.primary.attachments = implodeObject(
        fetchAttachments(weapons.primary.weapon, primAttactCount)
      );
    }

    //Verify if secondary weapon has attachments
    if (!weapons.secondary.weapon?.no_attach) {
      weapons.secondary.attachments = implodeObject(
        fetchAttachments(weapons.secondary.weapon, secondaryAttactCount)
      );
    }

    setData({
      randClassName,
      streaks,
      weapons,
      equipment,
      division,
      basic,
    });
  } catch (error: any) {
    console.error(error.message); // Handle errors centrally
  }
}

export default WorldWarTwoLoadout;
