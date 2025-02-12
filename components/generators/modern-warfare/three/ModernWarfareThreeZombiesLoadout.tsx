import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CodPlaceholder from "@/components/CodPlaceholder";
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
      behavior: 'smooth'
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
        <Row className="justify-content-md-center mb-4">
          <Col xs md="8" lg="6" className="text-center">
            <span className="fw-bolder fs-5">Primary:</span> <br />
            <span className="text-muted fs-6">
              <CodPlaceholder isLoading={isGenerating} value={weapons.primary.weapon.name} />
            </span>
            <br />
            <span className="fw-bolder fs-5">Primary Attachments:</span>
            <br />
            <span className="text-muted fs-6">
              <CodPlaceholder isLoading={isGenerating} value={weapons.primary.weapon.no_attach ? "No Attachments" : weapons.primary.attachments} />
            </span>
          </Col>
          <Col xs md="8" lg="6" className="text-center">
            <span className="fw-bolder fs-5">Secondary:</span> <br />
            <span className="text-muted fs-6">
              <CodPlaceholder isLoading={isGenerating} value={weapons.secondary.weapon.name} />
            </span>
            <br />
            <span className="fw-bolder fs-5">Secondary Attachments:</span>
            <br />
            <span className="text-muted fs-6">
              <CodPlaceholder isLoading={isGenerating} value={weapons.secondary.weapon.no_attach ? "No Attachments" : weapons.secondary.attachments} />
            </span>
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-md-center mb-4">
          <Col xs md="4" lg="3" className="text-center">
            <span className="fw-bolder fs-5">Tactical:</span> <br />
            <span className="text-muted fs-6"><CodPlaceholder isLoading={isGenerating} value={equipment.tactical.name} /></span>
          </Col>
          <Col xs md="4" lg="3" className="text-center">
            <span className="fw-bolder fs-5">Lethal:</span> <br />
            <span className="text-muted fs-6"><CodPlaceholder isLoading={isGenerating} value={equipment.lethal.name} /></span>
          </Col>
          <Col xs md="4" lg="3" className="text-center">
            <span className="fw-bolder fs-5">Field Upgrade:</span> <br />
            <span className="text-muted fs-6">
              <CodPlaceholder isLoading={isGenerating} value={equipment.fieldUpgrade.name} />
            </span>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs md="8" lg="6" className="text-center">
            <Button
              variant="danger"
              disabled={isGenerating}
              onClick={isGenerating ? undefined : handleClick}
            >
              {isGenerating ? 'Generating Loadout...' : 'Generate Loadout'}
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
