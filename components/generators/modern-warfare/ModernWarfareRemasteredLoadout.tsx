import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
//Helpers
import { implodeObject } from "@/helpers/implodeObject";
import { fetchWeapon } from "@/helpers/fetch/fetchWeapon";
import { fetchEquipment } from "@/helpers/fetch/fetchEquipment";
import { fetchClassName } from "@/helpers/fetch/fetchClassName";
//MWR Specific
import { fetchAttachments } from "@/helpers/generator/modern-warfare/remastered/fetchAttachments";
//MW3 Specific
import { fetchPerks } from "@/helpers/generator/modern-warfare/three/fetchPerks";
//Utils
import { sendEvent } from "@/utils/gtag";

function ModernWarfareRemasteredLoadout() {
  const [containerClass, setContainerClass] = useState("hidden");
  const [data, setData] = useState({
    randClassName: "",
    perks: null,
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
    },
  });

  useEffect(() => {
    fetchLoadoutData(setData, setContainerClass);
  }, []);

  const handleClick = async () => {
    fetchLoadoutData(setData, setContainerClass);
  };

  const { randClassName, perks, weapons, equipment } = data;

  return (
    <>
      <Container
        id="random-class"
        className={`${containerClass} shadow-lg p-3 bg-body rounded`}
      >
        <h3 className="text-center mb-5">&ldquo;{randClassName}&rdquo;</h3>
        <Row className="justify-content-md-center">
          <Col sm className="text-center mb-3 mb-md-0">
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
          <Col sm className="text-center mb-3 mb-md-0">
            <span className="fw-bolder fs-5">Secondary:</span> <br />
            <span className="text-muted fs-6">
              {weapons.secondary.weapon.name}
            </span>
            <br />
            {weapons.secondary.weapon.no_attach ? (
              <>
                <span className="fw-bolder fs-5">Secondary Attachments: </span>
                <br />
                <span className="text-muted fs-6">No Attachments</span>
              </>
            ) : (
              <>
                <span className="fw-bolder fs-5">Secondary Attachments:</span>
                <br />
                <span className="text-muted fs-6">
                  {weapons.secondary.attachments}
                </span>
              </>
            )}
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-md-center mb-4">
          <Col sm className="text-center mb-3 mb-md-0">
            <span className="fw-bolder fs-5">Tactical:</span> <br />
            <span className="text-muted fs-6">{equipment.tactical.name}</span>
          </Col>
          <Col sm className="text-center">
            <span className="fw-bolder fs-5">Perks:</span> <br />
            <span className="text-muted fs-6">{perks}</span>
          </Col>
        </Row>
        <Row id="button-row">
          <Col className="text-center">
            <Button variant="success" href="#" onClick={handleClick}>
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
    button_id: "mwr_fetchLoadoutData",
    label: "ModernWarfareRemastered",
    category: "COD_Loadouts",
  });

  try {
    const game = "modern-warfare-remastered";
    const randClassName = fetchClassName();
    const perks = fetchPerks();
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
    };

    weapons.primary.attachments = implodeObject(
      fetchAttachments(weapons.primary.weapon, 1)
    );

    // if (equipment.vest.name === "Overkill Vest") {
    //   weapons.secondary.weapon = fetchWeapon(
    //     "primary",
    //     game,
    //     weapons.primary.weapon.name
    //   );
    // }

    //Verify if secondary weapon has attachments
    if (!weapons.secondary.weapon?.no_attach) {
      weapons.secondary.attachments = implodeObject(
        fetchAttachments(weapons.secondary.weapon, 1)
      );
    }

    setData({
      randClassName,
      perks,
      weapons,
      equipment,
    });
    setContainerClass("");
  } catch (error: any) {
    console.error(error.message); // Handle errors centrally
  }
}

export default ModernWarfareRemasteredLoadout;
