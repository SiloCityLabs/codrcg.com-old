import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SimpleGeneratorView from "@/components/generators/cod/SimpleGeneratorView";
import CodClassName from "@/components/CodClassName";
//Helpers
import { implodeObject } from "@/helpers/implodeObject";
import { scrollToTop } from "@/helpers/scrollToTop";
import { fetchWeapon } from "@/helpers/fetch/fetchWeapon";
import { fetchEquipment } from "@/helpers/fetch/fetchEquipment";
import { fetchClassName } from "@/helpers/fetch/fetchClassName";
//MWR Specific
import { fetchAttachments } from "@/helpers/generator/modern-warfare/remastered/fetchAttachments";
import { fetchPerk } from "@/helpers/generator/modern-warfare/remastered/fetchPerk";
//Utils
import { sendEvent } from "@/utils/gtag";
//json
import defaultData from "@/json/cod/default-generator-info.json";

function ModernWarfareRemasteredLoadout() {
  const [isLoading, setIsLoading] = useState(true);
  const [containerClass, setContainerClass] = useState("hidden");
  const [isGenerating, setIsGenerating] = useState(true);
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    fetchLoadoutData(setData, setContainerClass);
    setIsGenerating(false);
    setIsLoading(false);
  }, []);

  const handleClick = async () => {
    setIsGenerating(true);

    setTimeout(() => {
      fetchLoadoutData(setData, setContainerClass);
      setIsGenerating(false);
      scrollToTop();
    }, 1000);
  };

  const { randClassName, perkObj, weapons, equipment } = data;

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      <Container
        id="random-class"
        className={`${containerClass} shadow-lg p-3 bg-body rounded`}
      >
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
          <Col sm className="text-center">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Melee"
              value={weapons.melee.name}
            />
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-md-center mb-4">
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
              title="Perk 1"
              value={perkObj.perk1 ? perkObj.perk1 : "None"}
            />
          </Col>
          <Col sm className="text-center mb-3 mb-md-0">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Perk 2"
              value={perkObj.perk2 ? perkObj.perk2 : "None"}
            />
          </Col>
          <Col sm className="text-center mb-3 mb-md-0">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Perk 3"
              value={perkObj.perk3 ? perkObj.perk3 : "None"}
            />
          </Col>
        </Row>
        <Row id="button-row">
          <Col className="text-center">
            <Button
              variant="success"
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
    button_id: "mwr_fetchLoadoutData",
    label: "ModernWarfareRemastered",
    category: "COD_Loadouts",
  });

  try {
    const game = "modern-warfare-remastered";
    const randClassName = fetchClassName();
    const perkObj = {
      perk1: fetchPerk("perk1"),
      perk2: fetchPerk("perk2"),
      perk3: fetchPerk("perk3"),
    };
    let equipment = {
      tactical: fetchEquipment("tactical", game),
    };

    let weapons = {
      primary: {
        weapon: fetchWeapon("primary", game),
        attachments: "",
      },
      secondary: {
        weapon: fetchWeapon("secondary", game),
        attachments: "",
      },
      melee: fetchWeapon("melee", game),
    };

    weapons.primary.attachments = implodeObject(
      fetchAttachments(weapons.primary.weapon, 1)
    );

    if (perkObj.perk2 === "Overkill") {
      weapons.secondary.weapon = fetchWeapon(
        "primary",
        game,
        weapons.primary.weapon.name
      );
    }

    //Verify if secondary weapon has attachments
    if (!weapons.secondary.weapon?.no_attach) {
      weapons.secondary.attachments = implodeObject(
        fetchAttachments(weapons.secondary.weapon, 1)
      );
    }

    setData({
      randClassName,
      perkObj,
      weapons,
      equipment,
    });
    setContainerClass("");
  } catch (error: any) {
    console.error(error.message); // Handle errors centrally
  }
}

export default ModernWarfareRemasteredLoadout;
