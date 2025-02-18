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
//MW3 Specific
import { fetchPerks } from "@/helpers/generator/modern-warfare/three/fetchPerks";
//Utils
import { sendEvent } from "@/utils/gtag";
//json
import defaultData from "@/json/cod/default-generator-info.json";

function ModernWarfareThreeLoadout() {
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

  const { randClassName, perks, streaks, weapons, equipment } = data;

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
          <Col sm className="text-center">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Perks"
              value={perks}
            />
          </Col>
        </Row>
        <hr />
        <Row className="mb-5">
          <Col sm className="text-center">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Vest"
              value={equipment.vest.name}
            />
          </Col>
          <Col sm className="text-center mb-3 mb-md-0">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Field Upgrade"
              value={
                equipment.fieldUpgrade.name
                  ? equipment.fieldUpgrade.name
                  : "None"
              }
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
    button_id: "mw3_fetchLoadoutData",
    label: "ModernWarfareThree",
    category: "COD_Loadouts",
  });

  try {
    const game = "modern-warfare-three";
    const randClassName = fetchClassName();
    let allowGear2 = true;
    let primaryType = "primary";
    let secondaryType = "secondary";
    const streaks = fetchStreaks(game);
    let equipment = {
      tactical: fetchEquipment("tactical", game),
      lethal: fetchEquipment("lethal", game),
      fieldUpgrade: fetchEquipment("field_upgrade", game),
      vest: fetchEquipment("vest", game),
    };

    //Vest Validation
    const vestEffects = {
      "Gunner Vest": () => {
        allowGear2 = false;
        secondaryType = "primary";
      },
      "CCT Comms Vest": () => {
        equipment.lethal = { name: "", type: "", game: "" };
      },
      "Ninja Vest": () => {
        allowGear2 = false;
      },
      "Assassin Vest": () => {
        allowGear2 = false;
      },
      "Overkill Vest": () => {
        allowGear2 = false;
        primaryType = "all";
        secondaryType = "all";
      },
      "Gunslinger Vest": () => {
        primaryType = "secondary";
        secondaryType = "secondary";
      },
      "Compression Carrier": () => {
        allowGear2 = false;
        equipment.fieldUpgrade = { name: "", type: "", game: "" };
      },
    };

    if (vestEffects[equipment.vest.name]) {
      vestEffects[equipment.vest.name]();
    }

    const perks = fetchPerks(allowGear2);

    let weapons = {
      primary: {
        weapon: fetchWeapon(primaryType, game),
        attachments: "",
      },
      secondary: {
        weapon: fetchWeapon(secondaryType, game),
        attachments: "",
      },
    };

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
  } catch (error: any) {
    console.error(error.message); // Handle errors centrally
  }
}

export default ModernWarfareThreeLoadout;
