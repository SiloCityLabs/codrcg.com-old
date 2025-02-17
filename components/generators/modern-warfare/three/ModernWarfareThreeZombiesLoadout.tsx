import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SimpleGeneratorView from "@/components/generators/cod/SimpleGeneratorView";
//Helpers
import { implodeObject } from "@/helpers/implodeObject";
import { fetchWeapon } from "@/helpers/fetch/fetchWeapon";
import { fetchAttachments } from "@/helpers/fetch/fetchAttachments";
import { fetchEquipment } from "@/helpers/fetch/fetchEquipment";
import { fetchClassName } from "@/helpers/fetch/fetchClassName";
//Utils
import { sendEvent } from "@/utils/gtag";

function ModernWarfareThreeZombiesLoadout() {
  const [containerClass, setContainerClass] = useState("hidden");
  const [isGenerating, setIsGenerating] = useState(true);
  const [data, setData] = useState({
    randClassName: "",
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
      fieldUpgrade: { name: "", type: "" },
      vest: { name: "", type: "" },
    },
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

  const { randClassName, weapons, equipment } = data;

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

async function fetchLoadoutData(setData, setContainerClass) {
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
    setContainerClass("");
  } catch (error: any) {
    console.error(error.message); // Handle errors centrally
  }
}

export default ModernWarfareThreeZombiesLoadout;
