import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SimpleGeneratorView from "@/components/generators/cod/SimpleGeneratorView";
import CodClassName from "@/components/CodClassName";
//Helpers
import { implodeObject } from "@/helpers/implodeObject";
import { scrollToTop } from "@/helpers/scrollToTop";
import { fetchWeapon } from "@/helpers/fetch/fetchWeapon";
import { fetchAttachments } from "@/helpers/fetch/fetchAttachments";
import { fetchEquipment } from "@/helpers/fetch/fetchEquipment";
import { fetchClassName } from "@/helpers/fetch/fetchClassName";
//Utils
import { sendEvent } from "@/utils/gtag";
//json
import defaultData from "@/json/cod/default-zombies-generator-info.json";

function ModernWarfareThreeZombiesLoadout() {
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

  const { randClassName, weapons, equipment } = data;

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
        <Row className="justify-content-md-center mb-4">
          <Col xs md="4" lg="3" className="text-center">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Tactical"
              value={equipment.tactical.name}
            />
          </Col>
          <Col xs md="4" lg="3" className="text-center">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Lethal"
              value={equipment.lethal.name}
            />
          </Col>
          <Col xs md="4" lg="3" className="text-center">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Field Upgrade"
              value={equipment.fieldUpgrade.name}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs md="8" lg="6" className="text-center">
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
    button_id: "mw3Zombies_fetchLoadoutData",
    label: "ModernWarfareThreeZombies",
    category: "COD_Loadouts",
  });

  try {
    const game = "modern-warfare-three-zombies";
    const randClassName = fetchClassName();
    let weapons = {
      primary: {
        weapon: fetchWeapon("all", "modern-warfare-three"),
        attachments: "",
      },
      secondary: {
        weapon: fetchWeapon("secondary", "modern-warfare-three"),
        attachments: "",
      },
    };

    //Get Primary Attachments
    if (!weapons.primary.weapon.no_attach) {
      weapons.primary.attachments = implodeObject(
        fetchAttachments(weapons.primary.weapon)
      );
    }
    //Get secondary Weapon
    weapons.secondary.weapon = fetchWeapon(
      "all",
      "modern-warfare-three",
      weapons.primary.weapon.name
    );
    //Get Secondary Attachments
    if (!weapons.secondary.weapon.no_attach) {
      weapons.secondary.attachments = implodeObject(
        fetchAttachments(weapons.secondary.weapon)
      );
    }
    //Get Equipment
    let equipment = {
      tactical: fetchEquipment("tactical", game),
      lethal: fetchEquipment("lethal", game),
      fieldUpgrade: fetchEquipment("field_upgrade", game),
    };

    setData({
      randClassName,
      weapons,
      equipment,
    });
  } catch (error: any) {
    console.error(error.message); // Handle errors centrally
  }
}

export default ModernWarfareThreeZombiesLoadout;
