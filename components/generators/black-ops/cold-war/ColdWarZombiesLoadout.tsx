import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CodPlaceholder from "@/components/CodPlaceholder";
//Helpers
import { implodeObject } from "@/helpers/implodeObject";
import { fetchWeapon } from "@/helpers/fetch/fetchWeapon";
import { fetchAttachments } from "@/helpers/fetch/fetchAttachments";
import { fetchEquipment } from "@/helpers/fetch/fetchEquipment";
import { fetchClassName } from "@/helpers/fetch/fetchClassName";
//Zombies Specific
import { fetchZombiesMap } from "@/helpers/fetch/zombies/fetchZombiesMap";
//Utils
import { sendEvent } from "@/utils/gtag";

function VanguardZombiesLoadout() {
  const [isLoading, setIsLoading] = useState(true);
  const [containerClass, setContainerClass] = useState("hidden");
  const [isGenerating, setIsGenerating] = useState(true);

  //Data
  const [data, setData] = useState({
    randClassName: "",
    weapons: {
      primary: {
        weapon: { name: "", type: "", game: "", no_attach: false },
        attachments: "",
      },
    },
    field_upgrade: "",
    zombieMap: { name: "", type: "", mode: "", game: "" },
  });

  useEffect(() => {
    fetchLoadoutData(setData, setContainerClass);
    setIsGenerating(false);
    setIsLoading(false);
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

  const { randClassName, weapons, field_upgrade, zombieMap } = data;

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

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
        </Row>
        <hr />
        <Row className="justify-content-md-center mb-4">
          <Col xs="12" md="4" lg="3" className="text-center mb-2">
            <span className="fw-bolder fs-5">Field Upgrade:</span> <br />
            <span className="text-muted fs-6"><CodPlaceholder isLoading={isGenerating} value={field_upgrade} /></span>
          </Col>
          <Col xs="12" md="4" lg="3" className="text-center mb-2">
            <span className="fw-bolder fs-5">Mode:</span> <br />
            <span className="text-muted fs-6"><CodPlaceholder isLoading={isGenerating} value={zombieMap.mode} /></span>
          </Col>
          <Col xs="12" md="4" lg="3" className="text-center mb-2">
            <span className="fw-bolder fs-5">Map:</span> <br />
            <span className="text-muted fs-6"><CodPlaceholder isLoading={isGenerating} value={zombieMap.name} /></span>
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
    button_id: "coldWarZombies_fetchLoadoutData",
    label: "ColdWarZombies",
    category: "COD_Loadouts",
  });

  try {
    const game = "cold-war-zombies";
    const randClassName = fetchClassName();
    const weapons = {
      primary: {
        weapon: fetchWeapon("all", "cold-war"),
        attachments: "",
      },
    };
    //Get Primary Attachments
    if (!weapons.primary.weapon.no_attach) {
      weapons.primary.attachments = implodeObject(
        fetchAttachments(weapons.primary.weapon, 8)
      );
    }
    const field_upgrade = fetchEquipment("field_upgrade", game).name;
    const zombieMap = fetchZombiesMap(game);

    setData({
      randClassName,
      weapons,
      field_upgrade,
      zombieMap,
    });
    setContainerClass("");
  } catch (error: any) {
    console.error(error.message); // Handle errors centrally
  }
}

export default VanguardZombiesLoadout;
