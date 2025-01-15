import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
//Helpers
import { implodeObject } from "@/helpers/implodeObject";
import { fetchWeapon } from "@/helpers/fetchWeapon";
import { fetchAttachments } from "@/helpers/fetchAttachments";
import { fetchZombiesMap } from "@/helpers/fetchZombiesMap";
import { fetchEquipment } from "@/helpers/fetchEquipment";
import { fetchClassName } from "@/helpers/fetchClassName";
//Utils
import { sendEvent } from "@/utils/gtag";

function VanguardZombiesLoadout() {
  const [isLoading, setIsLoading] = useState(true);
  const [containerClass, setContainerClass] = useState("hidden");

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
    setIsLoading(false);
  }, []);

  const handleClick = async () => {
    fetchLoadoutData(setData, setContainerClass);
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
        <h3 className="text-center mb-5">&ldquo;{randClassName}&rdquo;</h3>
        <Row className="justify-content-md-center mb-4">
          <Col xs md="8" lg="6" className="text-center">
            <span className="fw-bolder fs-5">Primary:</span> <br />
            <span className="text-muted fs-6">
              {weapons.primary.weapon.name}
            </span>
            <br />
            {weapons.primary.weapon.no_attach ? (
              <>
                <span className="fw-bolder fs-5">Primary Attachments: </span>
                <br />
                <span className="text-muted fs-6">No Attachments</span>
              </>
            ) : (
              <>
                <span className="fw-bolder fs-5">Primary Attachments:</span>
                <br />
                <span className="text-muted fs-6">
                  {weapons.primary.attachments}
                </span>
              </>
            )}
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-md-center mb-4">
          <Col xs="12" md="4" lg="3" className="text-center mb-2">
            <span className="fw-bolder fs-5">Field Upgrade:</span> <br />
            <span className="text-muted fs-6">{field_upgrade}</span>
          </Col>
          <Col xs="12" md="4" lg="3" className="text-center mb-2">
            <span className="fw-bolder fs-5">Mode:</span> <br />
            <span className="text-muted fs-6">{zombieMap.mode}</span>
          </Col>
          <Col xs="12" md="4" lg="3" className="text-center mb-2">
            <span className="fw-bolder fs-5">Map:</span> <br />
            <span className="text-muted fs-6">{zombieMap.name}</span>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs md="8" lg="6" className="text-center">
            <Button
              variant="danger"
              onClick={handleClick}
              className="w-50 me-2"
            >
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
